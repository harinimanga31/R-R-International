import { useState } from "react";
import { CalendarClock, MapPin, PackageCheck } from "lucide-react";
import { submitPickup } from "../services/pickupApi";
import { Section } from "../components/Section";

function Field({ label, name, type = "text", required = false, textarea = false, children, placeholder }: any) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-bold text-slate-700">{label}{required && " *"}</span>
      {textarea ? (
        <textarea name={name} required={required} className="field min-h-28" placeholder={placeholder || ""} />
      ) : (
        children || <input name={name} type={type} required={required} className="field" placeholder={placeholder || ""} />
      )}
    </label>
  );
}

export default function BookPickup() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function submit(e: any) {
    e.preventDefault();
    setLoading(true); setSuccess(""); setError("");
    const form = e.currentTarget;
    const data: any = Object.fromEntries(new FormData(form).entries());
    for (const key of ["weight_kg", "package_count"]) {
      if (data[key] !== "") data[key] = Number(data[key]);
    }
    try {
      const r = await submitPickup(data);
      setSuccess(`Pickup request submitted successfully. Your Pickup ID is ${r.id || r.pickup_id || "received"}.`);
      form.reset();
    } catch (err: any) {
      setError(err?.response?.data?.detail || "Unable to submit the pickup request. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="brand-gradient py-16 text-white">
        <div className="container-rr">
          <p className="font-black uppercase tracking-[.18em] text-yellow-300">RR INTERNATIONAL</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Book a Pickup</h1>
          <p className="mt-3 max-w-2xl text-lg text-blue-50">Tell us where and when your shipment should be collected.</p>
        </div>
      </section>

      <Section>
        <form onSubmit={submit} className="mx-auto max-w-4xl space-y-7">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="card p-5"><MapPin className="text-brandred" /><h3 className="mt-3 font-black">Pickup Address</h3><p className="mt-1 text-sm text-slate-600">Provide a complete collection address.</p></div>
            <div className="card p-5"><CalendarClock className="text-brandred" /><h3 className="mt-3 font-black">Preferred Time</h3><p className="mt-1 text-sm text-slate-600">Choose your preferred collection date and time.</p></div>
            <div className="card p-5"><PackageCheck className="text-brandred" /><h3 className="mt-3 font-black">Shipment Details</h3><p className="mt-1 text-sm text-slate-600">Give us the weight and package information.</p></div>
          </div>

          <div className="card space-y-5 p-6 sm:p-8">
            <h2 className="text-2xl font-black">Pickup information</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Customer name" name="customer_name" required placeholder="Full name" />
              <Field label="Phone" name="phone" required placeholder="+91 73961 94602" />
              <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
              <Field label="City" name="city" required placeholder="Hyderabad" />
              <Field label="Postal code" name="postal_code" required placeholder="500039" />
              <Field label="Shipment type" name="shipment_type">
                <select name="shipment_type" className="field"><option value="DOCUMENT">DOCUMENT</option><option value="PARCEL">PARCEL</option><option value="CARGO">CARGO</option></select>
              </Field>
              <Field label="Weight (kg)" type="number" name="weight_kg" required placeholder="e.g. 5" />
              <Field label="Package count" type="number" name="package_count" required placeholder="e.g. 1" />
              <Field label="Preferred date" type="date" name="preferred_date" required />
              <Field label="Preferred time" type="time" name="preferred_time" required />
            </div>
            <Field label="Pickup address" name="pickup_address" required textarea placeholder="Complete pickup address" />
            <Field label="Special instructions" name="special_instructions" textarea placeholder="Any handling or access instructions?" />
            <button type="submit" disabled={loading} className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60">{loading ? "Submitting…" : "Submit Pickup Request"}</button>
            {success && <div role="status" className="rounded-xl bg-green-50 p-4 font-semibold text-green-700">{success}</div>}
            {error && <div role="alert" className="rounded-xl bg-red-50 p-4 font-semibold text-red-700">{error}</div>}
          </div>
        </form>
      </Section>
    </>
  );
}
