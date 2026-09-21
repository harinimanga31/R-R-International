import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";

export default function ServiceDetail({
  title,
  description,
  image,
  points,
  eyebrow = "RR INTERNATIONAL",
}: {
  title: string;
  description: string;
  image: string;
  points: string[];
  eyebrow?: string;
}) {
  return (
    <>
      <section className="brand-gradient py-20 text-white">
        <div className="container-rr">
          <p className="font-black uppercase tracking-[.18em] text-yellow-300">{eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">{description}</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <img src={image} alt={title} className="h-[380px] w-full rounded-3xl object-cover shadow-xl" />
          <div>
            <p className="mb-2 text-sm font-black uppercase tracking-[.18em] text-brandred">Service overview</p>
            <h2 className="text-3xl font-black">Built around your shipment</h2>
            <p className="mt-4 leading-7 text-slate-600">{description}</p>
            <div className="mt-7 grid gap-3">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brandred" size={20} />
                  <span className="font-semibold text-slate-700">{point}</span>
                </div>
              ))}
            </div>
            <Link className="btn btn-primary mt-8" to="/quote">Get a Quote <ArrowRight size={18} /></Link>
          </div>
        </div>
      </Section>
    </>
  );
}
