import { Link } from "react-router-dom";
import {
  Plane,
  Package,
  Globe2,
  Truck,
  Boxes,
  ShieldCheck,
  Clock3,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import { Section } from "../components/Section";

export default function Track() {
  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section className="brand-gradient py-16 text-white">
        <div className="container-rr">
          <p className="font-black uppercase tracking-[.18em] text-yellow-300">
            RR INTERNATIONAL
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            Courier & Cargo Services
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-blue-50">
            Reliable courier, cargo and international logistics solutions
            designed to move your documents, parcels and commercial shipments
            safely and efficiently.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/quote"
              className="btn btn-primary"
            >
              Get a Quote
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Section>
     
        {/* =========================================================
            DHL & FEDEX
        ========================================================== */}
        <div className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[.18em] text-brandred">
              <h1>Global Carrier Partners</h1>
            </p>

            <h2 className="mt-2 text-3xl font-black text-brandblue sm:text-4xl">
              DHL & FedEx
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              DHL and FedEx are major international logistics and courier
              providers. If your shipment is handled by one of these
              carriers, you can use their official websites for carrier
              information and shipment tracking.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            {/* =====================================================
                DHL
            ====================================================== */}
            <article className="card overflow-hidden">
              <div className="flex min-h-32 items-center bg-yellow-300 px-8">
                <img
                  src="/images/dhl-logo.svg"
                  alt="DHL"
                  className="h-16 w-auto"
                />
              </div>

              <div className="p-7">
                <p className="text-sm font-black uppercase tracking-[.15em] text-brandred">
                  International Logistics
                </p>

                <h3 className="mt-2 text-2xl font-black text-brandblue">
                  DHL
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  DHL provides international express, parcel and logistics
                  services for shipments moving across global destinations.
                  Customers can use DHL&apos;s official online services to
                  access carrier information and shipment tracking.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="btn btn-primary"
                    href="https://www.dhl.com/in-en/home/tracking.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit DHL
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>
            </article>

            {/* =====================================================
                FEDEX
            ====================================================== */}
            <article className="card overflow-hidden">
              <div className="flex min-h-32 items-center bg-slate-900 px-8">
                <img
                  src="/images/fedex-logo.svg"
                  alt="FedEx"
                  className="h-16 w-auto"
                />
              </div>

              <div className="p-7">
                <p className="text-sm font-black uppercase tracking-[.15em] text-brandred">
                  International Shipping
                </p>

                <h3 className="mt-2 text-2xl font-black text-brandblue">
                  FedEx
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  FedEx provides international shipping, express delivery
                  and logistics services. Customers can use the official
                  FedEx website for carrier information and shipment
                  tracking.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="btn btn-primary"
                    href="https://www.fedex.com/en-in/tracking.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit FedEx
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>
            </article>





            {/* Courier */}
          <div className="card overflow-hidden">
            <div className="brand-gradient p-7 text-white">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <Package size={25} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[.16em] text-yellow-300">
                    Courier
                  </p>

                  <h2 className="mt-1 text-2xl font-black">
                    Express Courier Solutions
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-7">
              <p className="leading-8 text-slate-600">
                Courier services are suitable for documents, parcels and
                smaller shipments that require organized collection,
                transportation and delivery. International courier
                networks can provide access to destinations across
                different countries and regions.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="font-black text-brandblue">
                    Documents
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Business and personal documents.
                  </p>
                </div>

                <div className="rounded-2xl bg-yellow-50 p-4">
                  <p className="font-black text-brandblue">
                    Parcels
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Small and medium-sized packages.
                  </p>
                </div>
              </div>
            </div>
          </div>




{/* Cargo */}
          <div className="card overflow-hidden">
            <div className="bg-slate-900 p-7 text-white">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Boxes size={25} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[.16em] text-yellow-300">
                    Cargo
                  </p>

                  <h2 className="mt-1 text-2xl font-black">
                    Cargo & Freight Solutions
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-7">
              <p className="leading-8 text-slate-600">
                Cargo services are designed for larger, heavier or
                commercial shipments. Depending on shipment requirements,
                cargo can be coordinated through appropriate transportation
                and logistics channels.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-black text-brandblue">
                    Commercial Cargo
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Solutions for business shipments.
                  </p>
                </div>

                <div className="rounded-2xl bg-red-50 p-4">
                  <p className="font-black text-brandblue">
                    Air Freight
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Air transportation for suitable cargo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>

        {/* =========================================================
            WHY CHOOSE RR INTERNATIONAL
        ========================================================== */}
        <div className="mt-14 rounded-3xl brand-gradient-soft p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-3">

            <div className="lg:col-span-1">
              <p className="text-sm font-black uppercase tracking-[.18em] text-brandred">
                RR INTERNATIONAL
              </p>

              <h2 className="mt-2 text-3xl font-black text-brandblue">
                Logistics made simpler
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                From individual documents to commercial cargo, we help
                customers identify suitable courier and logistics options
                for their shipping requirements.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3 lg:col-span-2">

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <Clock3
                  className="text-brandred"
                  size={24}
                />

                <h3 className="mt-3 font-black text-brandblue">
                  Efficient
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Practical shipping coordination for your requirements.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <Globe2
                  className="text-brandblue"
                  size={24}
                />

                <h3 className="mt-3 font-black text-brandblue">
                  Global
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Support for domestic and international destinations.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <ShieldCheck
                  className="text-brandred"
                  size={24}
                />

                <h3 className="mt-3 font-black text-brandblue">
                  Professional
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Customer-focused shipping and logistics assistance.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-black text-brandblue sm:text-3xl">
            Looking for the right shipping solution?
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            Tell us about your shipment and our team can help you with the
            next step.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/quote"
              className="btn btn-primary"
            >
              Get a Quote
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="btn btn-outline"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}