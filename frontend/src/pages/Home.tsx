import {
  Box,
  Globe2,
  PackageCheck,
  Plane,
  ShieldCheck,
  Truck,
  Clock3,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import DestinationCard from "../components/DestinationCard";
import { Section, Heading } from "../components/Section";

export default function Home() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <Hero />

     
      {/* =====================================================
          SERVICES
      ====================================================== */}
      <Section>
        <Heading
          eyebrow="What we do"
          title="International shipping services for every requirement"
          description="From documents and parcels to larger air cargo consignments, RR International provides practical shipping support across borders."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          <ServiceCard
            icon={Globe2}
            title="International Courier"
            description="Reliable international document and parcel shipping."
            to="/services/international-courier"
          />

          <ServiceCard
            icon={Plane}
            title="Air Cargo"
            description="Air freight solutions for heavier and time-sensitive consignments."
            to="/services/air-cargo"
          />

          <ServiceCard
            icon={Truck}
            title="Door-to-Door"
            description="Pickup, transport and delivery coordination."
            to="/services/door-to-door"
          />

          <ServiceCard
            icon={Box}
            title="Business Shipping"
            description="Shipping support for recurring business requirements."
            to="/services/business-shipping"
          />

          <ServiceCard
            icon={PackageCheck}
            title="Parcel Shipping"
            description="International parcel movement with professional support."
            to="/services/parcel-shipping"
          />

          <ServiceCard
            icon={ShieldCheck}
            title="Customs Clearance"
            description="Documentation and customs clearance coordination support."
            to="/customs"
          />

        </div>
      </Section>

      {/* =====================================================
          WHY RR INTERNATIONAL
      ====================================================== */}
      <Section className="brand-gradient-soft">

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* IMAGE */}
          <div className="group overflow-hidden rounded-3xl shadow-xl">

            <img
              src="/images/air-cargo.jpg"
              alt="Cargo handling at an international port"
              className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-96"
            />

          </div>

          {/* CONTENT */}
          <div>

            <Heading
              eyebrow="Why RR International"
              title="Experience built around customer needs"
              description="Since 2008, RR International has focused on completing deliveries worldwide while keeping customers informed and supported throughout the shipping journey."
            />

            <div className="grid gap-4 sm:grid-cols-2">

              {/* Since 2008 */}
              <div className="group card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                <Clock3
                  size={21}
                  className="text-brandred transition-transform duration-300 group-hover:scale-110"
                />

                <b className="mt-3 block text-brandblue">
                  Since 2008
                </b>

                <p className="mt-2 text-sm text-slate-600">
                  Long-standing shipping experience.
                </p>

              </div>

              {/* Worldwide */}
              <div className="group card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                <Globe2
                  size={21}
                  className="text-brandblue transition-transform duration-300 group-hover:scale-110"
                />

                <b className="mt-3 block text-brandblue">
                  Worldwide Deliveries
                </b>

                <p className="mt-2 text-sm text-slate-600">
                  International delivery coordination.
                </p>

              </div>

              {/* Communication */}
              <div className="group card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                <ShieldCheck
                  size={21}
                  className="text-brandred transition-transform duration-300 group-hover:scale-110"
                />

                <b className="mt-3 block text-brandblue">
                  Clear Communication
                </b>

                <p className="mt-2 text-sm text-slate-600">
                  Practical updates and support.
                </p>

              </div>

              {/* Flexible */}
              <div className="group card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                <Truck
                  size={21}
                  className="text-brandblue transition-transform duration-300 group-hover:scale-110"
                />

                <b className="mt-3 block text-brandblue">
                  Flexible Services
                </b>

                <p className="mt-2 text-sm text-slate-600">
                  Courier, cargo and pickup options.
                </p>

              </div>

            </div>
          </div>

        </div>
      </Section>

      {/* =====================================================
          OUR CAPABILITIES
      ====================================================== */}
      <Section>

        <Heading
          eyebrow="Our capabilities"
          title="Solutions for documents, parcels and cargo"
          description="Choose a shipping solution based on your shipment size, destination and delivery requirements."
        />

        <div className="grid gap-6 md:grid-cols-3">

          {/* COURIER */}
          <div className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

            <div className="relative overflow-hidden">

              <img
                src="/images/courier.jpg"
                alt="International courier"
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brandblue/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-4 left-4 translate-y-4 rounded-xl bg-white px-4 py-2 text-sm font-black text-brandblue opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                International Courier
              </div>

            </div>

            <div className="p-6">

              <h3 className="text-xl font-black text-brandblue">
                International Courier
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Reliable courier support for documents, parcels and
                time-sensitive shipments.
              </p>

              <Link
                to="/services/international-courier"
                className="mt-4 inline-flex items-center gap-2 font-black text-brandred"
              >
                Learn more
                <ArrowRight size={15} />
              </Link>

            </div>
          </div>

          {/* AIR CARGO */}
          <div className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

            <div className="relative overflow-hidden">

              <img
                src="/images/air-cargo.jpg"
                alt="Air cargo"
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brandblue/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-4 left-4 translate-y-4 rounded-xl bg-white px-4 py-2 text-sm font-black text-brandblue opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Air Cargo
              </div>

            </div>

            <div className="p-6">

              <h3 className="text-xl font-black text-brandblue">
                Air Cargo
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Air freight support for larger and time-sensitive
                consignments.
              </p>

              <Link
                to="/services/air-cargo"
                className="mt-4 inline-flex items-center gap-2 font-black text-brandred"
              >
                Learn more
                <ArrowRight size={15} />
              </Link>

            </div>
          </div>

          {/* GLOBAL SHIPPING */}
          <div className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

            <div className="relative overflow-hidden">

              <img
                src="/images/international-shipping.jpg"
                alt="International shipping"
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brandblue/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-4 left-4 translate-y-4 rounded-xl bg-white px-4 py-2 text-sm font-black text-brandblue opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Global Shipping
              </div>

            </div>

            <div className="p-6">

              <h3 className="text-xl font-black text-brandblue">
                Door-to-Door
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Pickup, transportation and delivery coordination for
                international shipments.
              </p>

              <Link
                to="/services/door-to-door"
                className="mt-4 inline-flex items-center gap-2 font-black text-brandred"
              >
                Learn more
                <ArrowRight size={15} />
              </Link>

            </div>
          </div>

        </div>
      </Section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <Section>

        <Heading
          eyebrow="How it works"
          title="A simple shipping journey"
        />

        <div className="grid gap-5 md:grid-cols-4">

          {[
            {
              title: "Request",
              description: "Tell us what you need to ship.",
            },
            {
              title: "Confirm",
              description: "We review details and confirm the service.",
            },
            {
              title: "Move",
              description:
                "Your shipment moves through the planned network.",
            },
            {
              title: "Deliver",
              description:
                "Your shipment reaches its destination.",
            },
          ].map((step, index) => (
            <div
              key={step.title}
              className="group card relative p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <span className="text-3xl font-black text-brandred">
                0{index + 1}
              </span>

              <h3 className="mt-4 font-black text-brandblue">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.description}
              </p>

              {index < 3 && (
                <ArrowRight
                  size={18}
                  className="absolute right-5 top-7 hidden text-slate-300 transition-transform duration-300 group-hover:translate-x-1 md:block"
                />
              )}

            </div>
          ))}

        </div>
      </Section>

      {/* =====================================================
    DESTINATIONS
====================================================== */}
<section className="bg-brandblue py-16 text-white sm:py-20">
  <div className="container-rr">

    {/* Section Heading */}
    <div className="mb-10">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300 sm:text-sm">
        DESTINATIONS
      </p>

      <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
        International reach
      </h2>

      <p className="mt-4 max-w-3xl text-sm leading-6 text-white/90 sm:text-base">
        Shipping availability depends on origin, destination, service and
        shipment type.
      </p>
    </div>

    {/* Destination Cards */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* United Kingdom */}
      <div className="flex min-h-[145px] flex-col items-center justify-center rounded-xl bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        <p className="text-[10px] font-black uppercase tracking-[0.12em] text-brandred sm:text-xs">
          UK & EUROPE
        </p>

        <h3 className="mt-3 text-xl font-black text-brandblue">
          United Kingdom
        </h3>

      </div>

      {/* United Arab Emirates */}
      <div className="flex min-h-[145px] flex-col items-center justify-center rounded-xl bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        <p className="text-[10px] font-black uppercase tracking-[0.12em] text-brandred sm:text-xs">
          UAE & MIDDLE EAST
        </p>

        <h3 className="mt-3 text-xl font-black text-brandblue">
          United Arab Emirates
        </h3>

      </div>

      {/* United States */}
      <div className="flex min-h-[145px] flex-col items-center justify-center rounded-xl bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        <p className="text-[10px] font-black uppercase tracking-[0.12em] text-brandred sm:text-xs">
          USA
        </p>

        <h3 className="mt-3 text-xl font-black text-brandblue">
          United States
        </h3>

      </div>

      {/* Singapore */}
      <div className="flex min-h-[145px] flex-col items-center justify-center rounded-xl bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        <p className="text-[10px] font-black uppercase tracking-[0.12em] text-brandred sm:text-xs">
          SG , AUS & NEW ZEALAND
        </p>

        <h3 className="mt-3 text-xl font-black text-brandblue">
          Singapore
        </h3>

      </div>

    </div>

    {/* Worldwide Countries Box */}
    <div className="mt-7 flex justify-center">

      <div className="flex w-full max-w-[510px] items-center gap-4 rounded-2xl bg-white px-6 py-5 text-brandblue shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:px-7">

        {/* Globe Icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-300">
          <Globe2
            size={25}
            strokeWidth={2.5}
            className="text-brandblue"
          />
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">

          <h3 className="text-xl font-black leading-tight sm:text-2xl">
            190+ Countries Worldwide
          </h3>

          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            Explore our international shipping reach
          </p>

        </div>

        {/* Arrow */}
        <div className="shrink-0 text-xl font-bold text-brandblue">
          →
        </div>

      </div>

    </div>

  </div>
</section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <Section>

        <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-yellow-50 p-8 text-center shadow-sm sm:p-12">

          <p className="text-xs font-black uppercase tracking-[.2em] text-brandred">
            RR INTERNATIONAL
          </p>

          <h2 className="mt-2 text-3xl font-black text-brandblue">
            Ready to ship internationally?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Share your shipment details and RR International can
            review the requirement and help you choose a suitable
            shipping solution.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/quote"
              className="btn btn-primary"
            >
              Request a Quote
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              className="btn btn-outline"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </Section>
    </>
  );
}