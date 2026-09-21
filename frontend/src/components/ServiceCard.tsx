import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  to,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="card group p-6 transition hover:-translate-y-1 hover:border-yellow-300 hover:shadow-xl"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-brandred">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
      <span className="mt-5 inline-block font-bold text-brandred transition group-hover:translate-x-1">
        Explore →
      </span>
    </Link>
  );
}
