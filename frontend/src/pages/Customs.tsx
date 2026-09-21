import { Link } from "react-router-dom";
import { FileCheck2, Globe2, ReceiptText, ShieldCheck } from "lucide-react";
import { Section } from "../components/Section";

export default function Customs() {
  return (
    <>
      <section className="brand-gradient py-20 text-white">
        <div className="container-rr">
          <p className="font-black uppercase tracking-[.18em] text-yellow-300">RR INTERNATIONAL</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black sm:text-6xl">Customs Clearance</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">Documentation and customs clearance coordination support for international shipments.</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="card p-6"><FileCheck2 className="text-brandred" /><h3 className="mt-4 font-black">Documentation</h3><p className="mt-2 text-sm leading-6 text-slate-600">Commercial invoice, packing list and other documents where applicable.</p></div>
          <div className="card p-6"><ShieldCheck className="text-brandred" /><h3 className="mt-4 font-black">Compliance</h3><p className="mt-2 text-sm leading-6 text-slate-600">Guidance around common export, import and KYC requirements.</p></div>
          <div className="card p-6"><ReceiptText className="text-brandred" /><h3 className="mt-4 font-black">Duties & Taxes</h3><p className="mt-2 text-sm leading-6 text-slate-600">Duties and taxes may apply depending on destination and shipment.</p></div>
          <div className="card p-6"><Globe2 className="text-brandred" /><h3 className="mt-4 font-black">Destination Rules</h3><p className="mt-2 text-sm leading-6 text-slate-600">Requirements vary by destination, contents, value and shipment type.</p></div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
          <img src="/images/warehouse.jpg" alt="Cargo handling and customs support" className="h-96 w-full rounded-3xl object-cover" />
          <div>
            <h2 className="text-3xl font-black">What customers should prepare</h2>
            <ul className="mt-6 grid gap-3 text-slate-700">
              <li className="rounded-xl bg-slate-50 p-4">Commercial invoice where applicable</li>
              <li className="rounded-xl bg-slate-50 p-4">Packing list where applicable</li>
              <li className="rounded-xl bg-slate-50 p-4">KYC and identity documentation where required</li>
              <li className="rounded-xl bg-slate-50 p-4">Export/import documentation</li>
              <li className="rounded-xl bg-slate-50 p-4">Restricted and prohibited item checks</li>
            </ul>
            <p className="mt-5 text-sm leading-6 text-slate-500">Customs requirements differ by country and shipment. Final documentation, clearance decisions, duties and taxes are subject to the applicable authorities and carrier requirements.</p>
            <Link className="btn btn-primary mt-7" to="/quote">Request a Quote</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
