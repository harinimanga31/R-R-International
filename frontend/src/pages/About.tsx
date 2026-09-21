import { CalendarCheck, Globe, HeartHandshake, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Section, Heading } from "../components/Section";
import OwnerSection from "../components/OwnerSection";

export default function About() {
  return (
    <>
      <section className="brand-gradient py-20 text-white">
        <div className="container-rr">
          <p className="font-black uppercase tracking-[.18em] text-yellow-300">RR INTERNATIONAL</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black sm:text-6xl">Moving shipments. Meeting customer needs.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">RR International has been in the business since 2008, supporting customers with international courier and cargo deliveries worldwide.</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img src="/images/about-business.jpg" alt="RR International cargo and logistics operations" className="h-[420px] w-full object-cover" />
          </div>
          <div>
            <Heading eyebrow="Our story" title="Serving customers since 2008" description="RR International was established in 2008 with a focus on helping customers move shipments across borders. Over the years, the business has successfully completed deliveries worldwide and worked to meet the individual needs of its customers." />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card p-5"><CalendarCheck className="text-brandred" /><h3 className="mt-3 font-bold">Since 2008</h3><p className="mt-2 text-sm text-slate-600">Years of experience supporting international shipments.</p></div>
              <div className="card p-5"><Globe className="text-brandred" /><h3 className="mt-3 font-bold">Worldwide Deliveries</h3><p className="mt-2 text-sm text-slate-600">Successful delivery coordination across international destinations.</p></div>
              <div className="card p-5"><HeartHandshake className="text-brandred" /><h3 className="mt-3 font-bold">Customer Needs</h3><p className="mt-2 text-sm text-slate-600">Services shaped around shipment requirements and customer expectations.</p></div>
              <div className="card p-5"><Users className="text-brandred" /><h3 className="mt-3 font-bold">Personal Support</h3><p className="mt-2 text-sm text-slate-600">Direct communication for shipment questions and coordination.</p></div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <Heading eyebrow="What guides us" title="A customer-first way of working" />
        <div className="grid gap-5 md:grid-cols-3">
          <div className="card p-7"><Target className="text-brandred" /><h3 className="mt-4 text-xl font-bold">Our Mission</h3><p className="mt-3 leading-7 text-slate-600">To provide practical international shipping support while keeping communication clear and focused on customer needs.</p></div>
          <div className="card p-7"><Globe className="text-brandred" /><h3 className="mt-4 text-xl font-bold">Our Vision</h3><p className="mt-3 leading-7 text-slate-600">To be a trusted shipping partner for customers sending documents, parcels and cargo around the world.</p></div>
          <div className="card p-7"><HeartHandshake className="text-brandred" /><h3 className="mt-4 text-xl font-bold">Our Values</h3><p className="mt-3 leading-7 text-slate-600">Reliability, responsiveness, transparent communication and respect for every shipment requirement.</p></div>
        </div>
      </Section>



      <Section className="bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <OwnerSection />
        </div>
      </Section>
      <Section>
        <div className="rounded-3xl bg-brandred p-8 text-white sm:p-10">
          <h2 className="text-3xl font-black">Need help with an international shipment?</h2>
          <p className="mt-3 max-w-2xl text-red-100">Call RR International at +91 73961 94602 or share your shipment details online.</p>
          <Link className="btn mt-6 bg-yellow-300 text-brandblue" to="/quote">Get a Quote</Link>
        </div>
      </Section>
    </>
  );
}
