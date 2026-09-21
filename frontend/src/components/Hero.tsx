import { Globe2, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="container-rr">
        <div className="grid min-h-[500px] items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">

          {/* LEFT SIDE */}
          <div className="max-w-xl">

            {/* Eyebrow */}
            <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brandblue">
                RR INTERNATIONAL
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-brandblue sm:text-5xl lg:text-6xl">
              Your shipments.
              <br />
              <span className="text-yellow-400">
                Our Global Reach.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
              International courier, air cargo and door-to-door
              shipping support from India to destinations worldwide.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/quote"
                className="btn btn-primary"
              >
                Get a Quote
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/track"
                className="btn btn-outline"
              >
                Track Shipment
              </Link>

            </div>

            {/* Trust Information */}
            <div className="mt-7 flex flex-wrap gap-6">

              {/* Global Network */}
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100">
                  <Globe2
                    size={17}
                    className="text-yellow-500"
                  />
                </div>

                <span className="text-xs font-semibold text-slate-600">
                  Global Network
                </span>
              </div>

              {/* Trusted Service */}
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100">
                  <ShieldCheck
                    size={17}
                    className="text-yellow-500"
                  />
                </div>

                <span className="text-xs font-semibold text-slate-600">
                  Trusted Service
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="group mx-auto w-full max-w-xl lg:ml-auto">

            <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl">

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src="images\about-business.jpg"
                  alt="International cargo and logistics"
                  className="h-[270px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[330px] lg:h-[360px]"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brandblue/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Hover Label */}
                <div className="absolute bottom-5 left-5 translate-y-3 rounded-xl bg-white px-4 py-2 text-xs font-black text-brandblue opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Worldwide Logistics
                </div>

              </div>

              {/* Image Labels */}
              <div className="grid grid-cols-3 divide-x divide-slate-200 bg-white">

                <div className="px-4 py-4 text-center">
                  <p className="text-sm font-black text-yellow-500">
                    Global
                  </p>
                </div>

                <div className="px-4 py-4 text-center">
                  <p className="text-sm font-black text-brandblue">
                    Air
                  </p>
                </div>

                <div className="px-4 py-4 text-center">
                  <p className="text-sm font-black text-brandred">
                    Door
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}