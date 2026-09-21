import { ArrowRight, CheckCircle2, Plane, ShieldCheck, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Section } from "../components/Section";

const points = [
  "Origin and destination review",
  "Courier, parcel and air cargo options",
  "Shipment documentation guidance",
  "Customs clearance coordination",
  "Tracking visibility from booking to delivery",
];

export default function InternationalShipping() {
  return (
    <>
      <section className="brand-gradient py-20 text-white">
        <div className="container-rr">
          <p className="font-black uppercase tracking-[.18em] text-yellow-300">RR INTERNATIONAL</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black sm:text-6xl">International Shipping</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">Plan international shipments from India with practical courier and air cargo options based on your origin, destination, shipment type and handling requirements.</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img src="/images/international-shipping.jpg" alt="International shipping with cargo ship, containers, trucks and aircraft" className="h-[430px] w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[.18em] text-brandred">Global movement</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">One place for your international shipping needs</h2>
            <p className="mt-4 leading-7 text-slate-600">From documents and parcels to larger consignments, RR International coordinates the shipment journey around the route and service selected by the customer.</p>
            <div className="mt-7 grid gap-3">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brandred" size={20} />
                  <span className="font-semibold text-slate-700">{point}</span>
                </div>
              ))}
            </div>
            <Link className="btn btn-primary mt-8" to="/quote">Get a Quote <ArrowRight size={18} /></Link>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="card p-7"><Globe2 className="text-brandred"/><h3 className="mt-4 text-xl font-black">Worldwide reach</h3><p className="mt-2 leading-7 text-slate-600">Availability is reviewed according to the selected origin, destination and service.</p></div>
          <div className="card p-7"><Plane className="text-brandred"/><h3 className="mt-4 text-xl font-black">Air cargo options</h3><p className="mt-2 leading-7 text-slate-600">Air freight coordination for heavier or time-sensitive shipments.</p></div>
          <div className="card p-7"><ShieldCheck className="text-brandred"/><h3 className="mt-4 text-xl font-black">Documentation support</h3><p className="mt-2 leading-7 text-slate-600">Guidance around common shipping and customs documentation.</p></div>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-brandred p-8 text-white sm:p-10">
          <h2 className="text-3xl font-black">Ready to send a shipment?</h2>
          <p className="mt-3 max-w-2xl text-red-100">Submit the shipment details and RR International can review the requirement.</p>
          <Link className="btn mt-6 bg-yellow-300 text-brandblue" to="/quote">Request a Quote</Link>
        </div>
      </Section>
    </>
  );
}
