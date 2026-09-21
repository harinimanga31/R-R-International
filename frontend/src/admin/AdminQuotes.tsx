import { useEffect, useState } from "react";
import { listQuotes, updateQuote } from "../services/quoteApi";
import { Section } from "../components/Section";

export default function AdminQuotes() {
  const [rows, setRows] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [error, setError] = useState("");

  async function load() {
    try {
      setError("");
      setRows(await listQuotes());
    } catch (err: any) {
      setError(err?.response?.data?.detail || "Unable to load quote requests. Please sign in again.");
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-black uppercase tracking-[.18em] text-brandred">Admin</p>
          <h1 className="mt-2 text-3xl font-black">Quote Requests</h1>
          <p className="mt-1 text-slate-500">Review customer shipment and quote details.</p>
        </div>
        <button type="button" className="btn btn-outline" onClick={load}>Refresh</button>
      </div>

      {error && <p className="mt-6 rounded-2xl bg-red-50 p-4 font-semibold text-red-700">{error}</p>}

      <div className="card mt-7 overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="p-4">Quote ID</th>
              <th>Customer</th>
              <th>Route</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr className="border-b last:border-0" key={row.id}>
                <td className="p-4 font-semibold">{row.quote_id}</td>
                <td>{row.customer_name}</td>
                <td>{row.origin_city} → {row.destination_city}</td>
                <td>{new Date(row.created_at).toLocaleString()}</td>
                <td>
                  <select
                    className="field w-auto"
                    value={row.status}
                    onChange={async (e) => {
                      await updateQuote(row.id, { status: e.target.value });
                      load();
                    }}
                  >
                    {["Pending", "Reviewing", "Quoted", "Accepted", "Closed"].map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <button type="button" className="btn btn-outline px-3 py-2 text-xs" onClick={() => setSelected(row)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
            {!rows.length && !error && (
              <tr><td colSpan={6} className="p-8 text-center text-slate-500">No quote requests yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 p-5" role="dialog" aria-modal="true">
          <div className="card max-h-[90vh] w-full max-w-3xl overflow-y-auto p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[.18em] text-brandred">Quote Request</p>
                <h2 className="mt-2 text-2xl font-black">{selected.quote_id}</h2>
              </div>
              <button type="button" className="btn btn-outline" onClick={() => setSelected(null)}>Close</button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Customer", selected.customer_name],
                ["Email", selected.email],
                ["Phone", selected.phone],
                ["Status", selected.status],
                ["Shipment type", selected.shipment_type],
                ["Preferred service", selected.preferred_service],
                ["Origin", `${selected.origin_city}, ${selected.origin_country}`],
                ["Destination", `${selected.destination_city}, ${selected.destination_country}`],
                ["Weight", `${selected.weight_kg} kg`],
                ["Packages", selected.package_count],
                ["Dimensions", `${selected.length_cm || "—"} × ${selected.width_cm || "—"} × ${selected.height_cm || "—"} cm`],
                ["Submitted", new Date(selected.created_at).toLocaleString()],
              ].map(([label, value]) => (
                <div className="rounded-xl bg-slate-50 p-4" key={label}>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
                  <p className="mt-1 font-semibold text-slate-900">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border p-4"><p className="text-xs font-bold uppercase text-slate-500">Pickup address</p><p className="mt-2 whitespace-pre-wrap leading-6">{selected.pickup_address}</p></div>
              <div className="rounded-xl border p-4"><p className="text-xs font-bold uppercase text-slate-500">Delivery address</p><p className="mt-2 whitespace-pre-wrap leading-6">{selected.delivery_address}</p></div>
            </div>

            <div className="mt-5 rounded-xl border p-4">
              <p className="text-xs font-bold uppercase text-slate-500">Package description</p>
              <p className="mt-2 whitespace-pre-wrap leading-6">{selected.description}</p>
            </div>
            <div className="mt-4 rounded-xl border p-4">
              <p className="text-xs font-bold uppercase text-slate-500">Additional requirements / message</p>
              <p className="mt-2 whitespace-pre-wrap leading-6">{selected.notes || "—"}</p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
