import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { listEnquiries } from "../services/contactApi";
import { Section } from "../components/Section";

export default function AdminEnquiries() {
  const [rows, setRows] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<any>(null);

  async function load() {
    try {
      setError("");
      setRows(await listEnquiries());
    } catch (err: any) {
      setError(err?.response?.data?.detail || "Unable to load enquiries. Please sign in again.");
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
          <h1 className="mt-2 text-3xl font-black">Enquiries</h1>
          <p className="mt-1 text-slate-500">Customer messages received through the Contact page.</p>
        </div>
        <button type="button" className="btn btn-outline" onClick={load}>Refresh</button>
      </div>

      {error && <p className="mt-6 rounded-2xl bg-red-50 p-4 font-semibold text-red-700">{error}</p>}

      <div className="card mt-7 overflow-x-auto">
        <table className="w-full min-w-[780px] text-left text-sm">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="p-4">Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr className="border-b last:border-0" key={row.id}>
                <td className="p-4 font-semibold">{row.name}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                <td>{row.subject}</td>
                <td>{new Date(row.created_at).toLocaleString()}</td>
                <td>
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-800">
                    {row.status}
                  </span>
                </td>
                <td className="pr-4 text-right">
                  <button type="button" className="btn btn-outline px-3 py-2 text-xs" onClick={() => setSelected(row)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
            {!rows.length && !error && (
              <tr><td colSpan={7} className="p-8 text-center text-slate-500">No enquiries yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 p-5" role="dialog" aria-modal="true">
          <div className="card max-h-[90vh] w-full max-w-2xl overflow-y-auto p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[.18em] text-brandred">Enquiry</p>
                <h2 className="mt-2 text-2xl font-black">{selected.subject}</h2>
              </div>
              <button type="button" className="btn btn-outline" onClick={() => setSelected(null)}>Close</button>
            </div>
            <div className="mt-6 grid gap-3 rounded-2xl bg-slate-50 p-5 sm:grid-cols-2">
              <p><b>Name:</b> {selected.name}</p>
              <p className="flex items-center gap-2"><Mail size={16} />{selected.email}</p>
              <p className="flex items-center gap-2"><Phone size={16} />{selected.phone}</p>
              <p><b>Status:</b> {selected.status}</p>
              <p className="sm:col-span-2"><b>Submitted:</b> {new Date(selected.created_at).toLocaleString()}</p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-black uppercase tracking-[.12em] text-slate-500">Message</p>
              <p className="mt-3 whitespace-pre-wrap leading-7 text-slate-700">{selected.message}</p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
