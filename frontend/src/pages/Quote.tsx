import { useMemo, useState } from "react";
import { Calculator, Cuboid, Info } from "lucide-react";
import { submitQuote } from "../services/quoteApi";
import { Section } from "../components/Section";

function Field({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
  children,
  placeholder,
}: any) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-bold text-slate-700">
        {label}{required && " *"}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          className="field min-h-28"
          placeholder={placeholder || ""}
        />
      ) : (
        children || (
          <input
            name={name}
            type={type}
            required={required}
            min={type === "number" ? "0" : undefined}
            step={type === "number" ? "any" : undefined}
            className="field"
            placeholder={placeholder || ""}
          />
        )
      )}
    </label>
  );
}

export default function Quote() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [weight, setWeight] = useState("");
  const [packages, setPackages] = useState("1");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const calculation = useMemo(() => {
    const actual = Number(weight) || 0;
    const count = Math.max(Number(packages) || 1, 1);
    const l = Number(length) || 0;
    const w = Number(width) || 0;
    const h = Number(height) || 0;
    const volumePerPackage = l * w * h;
    const totalVolume = volumePerPackage * count;
    const volumetricPerPackage = volumePerPackage / 5000;
    const totalVolumetric = volumetricPerPackage * count;
    const chargeable = Math.max(actual, totalVolumetric);
    return { volumePerPackage, totalVolume, totalVolumetric, chargeable, count, actual };
  }, [weight, packages, length, width, height]);

  async function submit(e: any) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: any = Object.fromEntries(fd.entries());

    if (String(data.phone || "").trim().length < 7) {
      setError("Please enter a valid phone number.");
      setLoading(false);
      return;
    }
    if (String(data.description || "").trim().length < 2) {
      setError("Please provide a package description.");
      setLoading(false);
      return;
    }

    for (const key of ["weight_kg", "package_count", "length_cm", "width_cm", "height_cm"]) {
      if (data[key] !== undefined && data[key] !== "") data[key] = Number(data[key]);
    }

    try {
      const r = await submitQuote(data);
      setSuccess(`Quote request submitted successfully. Your Quote ID is ${r.quote_id || r.id || "received"}.`);
      form.reset();
      setWeight(""); setPackages("1"); setLength(""); setWidth(""); setHeight("");
    } catch (err: any) {
      setError(err?.response?.data?.detail || "Unable to submit the quote request. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="brand-gradient py-16 text-white">
        <div className="container-rr">
          <p className="font-black uppercase tracking-[.18em] text-yellow-300">RR INTERNATIONAL</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Get a Quote</h1>
          <p className="mt-3 max-w-2xl text-lg text-blue-50">Enter your shipment details. The calculator will show volume, volumetric weight and an estimated chargeable weight for discussion with our team.</p>
        </div>
      </section>

      <Section>
        <form onSubmit={submit} className="mx-auto max-w-5xl space-y-7">
          <div className="card p-6 sm:p-8">
            <div className="mb-6 flex items-start gap-3">
              <div className="rounded-xl bg-yellow-100 p-3 text-brandred"><Calculator /></div>
              <div><h2 className="text-2xl font-black">Shipment details</h2><p className="mt-1 text-sm text-slate-500">Dimensions below are treated as dimensions per package.</p></div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Shipment type" name="shipment_type">
                <select name="shipment_type" className="field">
                  <option value="DOCUMENT">DOCUMENT</option>
                  <option value="PARCEL">PARCEL</option>
                  <option value="CARGO">CARGO</option>
                </select>
              </Field>
              <Field label="Actual weight (kg)" name="weight_kg" type="number" required placeholder="e.g. 5">
                <input name="weight_kg" type="number" min="0" step="any" value={weight} onChange={(e) => setWeight(e.target.value)} className="field" required placeholder="e.g. 5" />
              </Field>
              <Field label="Package count" name="package_count" type="number" required placeholder="e.g. 1">
                <input name="package_count" type="number" min="1" step="1" value={packages} onChange={(e) => setPackages(e.target.value)} className="field" required />
              </Field>
              <Field label="Origin country" name="origin_country" required placeholder="India" />
              <Field label="Origin city" name="origin_city" required placeholder="Hyderabad" />
              <Field label="Destination country" name="destination_country" required placeholder="USA" />
              <Field label="Destination city" name="destination_city" required placeholder="New York" />
              <Field label="Length (cm)" name="length_cm" type="number" placeholder="Length">
                <input name="length_cm" type="number" min="0" step="any" value={length} onChange={(e) => setLength(e.target.value)} className="field" placeholder="Length" />
              </Field>
              <Field label="Width (cm)" name="width_cm" type="number" placeholder="Width">
                <input name="width_cm" type="number" min="0" step="any" value={width} onChange={(e) => setWidth(e.target.value)} className="field" placeholder="Width" />
              </Field>
              <Field label="Height (cm)" name="height_cm" type="number" placeholder="Height">
                <input name="height_cm" type="number" min="0" step="any" value={height} onChange={(e) => setHeight(e.target.value)} className="field" placeholder="Height" />
              </Field>
              <Field label="Customer name" name="customer_name" required placeholder="Full name" />
              <Field label="Phone" name="phone" type="tel" required placeholder="+91 73961 94602" />
              <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
              <Field label="Preferred service" name="preferred_service" required placeholder="Standard / Express / Air Cargo" />
            </div>

            <div className="mt-6 rounded-2xl border-2 border-yellow-300 bg-gradient-to-r from-blue-50 to-yellow-50 p-5">
              <div className="flex items-center gap-2 text-brandblue"><Cuboid size={20} /><h3 className="font-black">Weight & dimension calculator</h3></div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl bg-white p-4 shadow-sm"><p className="text-xs font-bold uppercase text-slate-500">L × B × H</p><p className="mt-1 text-lg font-black">{calculation.volumePerPackage.toFixed(0)} cm³</p></div>
                <div className="rounded-xl bg-white p-4 shadow-sm"><p className="text-xs font-bold uppercase text-slate-500">Total volume</p><p className="mt-1 text-lg font-black">{calculation.totalVolume.toFixed(0)} cm³</p></div>
                <div className="rounded-xl bg-white p-4 shadow-sm"><p className="text-xs font-bold uppercase text-slate-500">Volumetric weight</p><p className="mt-1 text-lg font-black">{calculation.totalVolumetric.toFixed(2)} kg</p></div>
                <div className="rounded-xl bg-brandred p-4 text-white shadow-sm"><p className="text-xs font-bold uppercase text-red-100">Estimated chargeable</p><p className="mt-1 text-2xl font-black">{calculation.chargeable.toFixed(2)} kg</p></div>
              </div>
              <p className="mt-4 flex gap-2 text-xs leading-5 text-slate-600"><Info size={15} className="mt-0.5 shrink-0" />Volumetric weight is estimated as (L × B × H × package count) ÷ 5000. Final chargeable weight and pricing are confirmed by RR International based on the actual shipment and carrier rules.</p>
            </div>
          </div>

          <div className="card space-y-5 p-6 sm:p-8">
            <h2 className="text-2xl font-black">Pickup & delivery</h2>
            <Field label="Pickup address" name="pickup_address" required textarea placeholder="Complete pickup address" />
            <Field label="Delivery address" name="delivery_address" required textarea placeholder="Complete delivery address" />
            <Field label="Description of contents" name="description" required textarea placeholder="Describe the contents of your shipment" />
            <Field label="Notes" name="notes" textarea placeholder="Any additional information or special requirements?" />

            <button type="submit" disabled={loading} className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? "Submitting…" : "Submit Quote Request"}
            </button>

            {success && <div role="status" className="rounded-xl bg-green-50 p-4 font-semibold text-green-800">{success}</div>}
            {error && <div role="alert" className="rounded-xl bg-red-50 p-4 font-semibold text-red-800">{error}</div>}
          </div>
        </form>
      </Section>
    </>
  );
}
