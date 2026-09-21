import { Box, Building2, Globe2, PackageCheck, Plane, ShieldCheck, Truck } from "lucide-react";
import { Section, Heading } from "../components/Section";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <>
      <section className="brand-gradient py-16 text-white">
        <div className="container-rr">
          <p className="font-black uppercase tracking-[.18em] text-yellow-300">RR INTERNATIONAL</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-50">Courier, cargo, pickup, delivery and customs support for personal and business requirements.</p>
        </div>
      </section>
      <Section>
        <Heading title="Choose the right shipping solution" description="Service availability depends on the route, shipment details and applicable requirements." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard icon={Globe2} title="International Courier" description="Documents and parcels across international destinations." to="/services/international-courier" />
          <ServiceCard icon={Plane} title="Air Cargo" description="Air freight coordination for larger consignments." to="/services/air-cargo" />
          <ServiceCard icon={Truck} title="Door-to-Door" description="Pickup-to-delivery coordination." to="/services/door-to-door" />
          <ServiceCard icon={Building2} title="Business Shipping" description="International shipping support for businesses." to="/services/business-shipping" />
          <ServiceCard icon={Box} title="Parcel Shipping" description="International parcel handling and tracking." to="/services/parcel-shipping" />
          <ServiceCard icon={ShieldCheck} title="Customs Clearance" description="Documentation guidance and customs clearance coordination support." to="/customs" />
        </div>
      </Section>
    </>
  );
}
