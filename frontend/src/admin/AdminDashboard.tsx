import { useEffect, useState } from "react";
import { CalendarCheck, Globe2, PackageCheck, Phone, ArrowRight, Clock3, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { dashboardStats } from "../services/authApi";
import { Section } from "../components/Section";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dashboardStats()
      .then(setStats)
      .catch((err) => {
        if (err?.response?.status === 401) {
          localStorage.removeItem("rr_admin_token");
          navigate("/admin/login", { replace: true });
          return;
        }
        setError(err?.response?.data?.detail || "Unable to load dashboard statistics. Please sign in again.");
      });
  }, []);

  const cards = [
    ["Shipments", stats.shipments, PackageCheck, "/admin/shipments"],
    ["Quotes", stats.quotes, Globe2, "/admin/quotes"],
    ["Enquiries", stats.enquiries, Mail, "/admin/enquiries"],
    ["Pickups", stats.pickups, CalendarCheck, "/admin/pickups"],
    ["Customers", stats.customers, Phone, "/admin/customers"],
  ];

  return (
    <>
      <section className="brand-gradient py-10 text-white sm:py-14">
        <div className="container-rr">
          <p className="font-black uppercase tracking-[.18em] text-yellow-300">RR INTERNATIONAL • ADMIN</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black sm:text-5xl">Manage the business with clarity.</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50">A simple control centre for shipments, quotes, pickups, customers and international delivery operations.</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img src="/images/international-shipping.jpg" alt="International shipping and cargo operations" className="h-[360px] w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[.18em] text-brandred">Business overview</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">Serving customers since 2008</h2>
            <p className="mt-4 leading-7 text-slate-600">RR International supports courier and air cargo requirements from Chilkanagar, Uppal, Hyderabad. The dashboard keeps day-to-day requests visible so the team can respond to customer needs quickly.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-blue-50 p-4"><Clock3 className="text-brandblue" size={21}/><p className="mt-2 font-bold">Business hours</p><p className="text-sm text-slate-600">9:00 AM – 6:00 PM</p></div>
              <div className="rounded-2xl bg-yellow-50 p-4"><Phone className="text-brandred" size={21}/><p className="mt-2 font-bold">Direct contact</p><p className="text-sm text-slate-600">+91 73961 94602</p></div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(([name, value, Icon, path]: any) => (
            <Link to={path} className="card group p-6 transition hover:-translate-y-1 hover:shadow-xl" key={name}>
              <div className="flex items-center justify-between"><p className="text-sm font-bold text-slate-500">{name}</p><Icon className="text-brandred" size={22} /></div>
              <p className="mt-3 text-4xl font-black text-brandblue">{value ?? "—"}</p>
              <p className="mt-3 flex items-center gap-1 text-xs font-bold text-slate-500 group-hover:text-brandred">Open section <ArrowRight size={14}/></p>
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="card p-7 lg:col-span-2">
            <p className="text-sm font-black uppercase tracking-[.18em] text-brandred">Business information</p>
            <h2 className="mt-2 text-2xl font-black">RR International</h2>
            <div className="mt-5 grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
              <p><b className="text-slate-900">Owner / Contact:</b> M. Ramesh</p>
              <p><b className="text-slate-900">Phone:</b> +91 73961 94602</p>
              <p><b className="text-slate-900">Email:</b> rrinternational0092@gmail.com</p>
              <p><b className="text-slate-900">Hours:</b> 9:00 AM – 6:00 PM</p>
              <p className="sm:col-span-2"><b className="text-slate-900">Office:</b> Chilkanagar, Uppal, Hyderabad – 500039, Telangana, India</p>
              <p className="sm:col-span-2"><b className="text-slate-900">Established:</b> 2008 • International courier and cargo support.</p>
            </div>
          </div>
          <div className="rounded-3xl bg-brandred p-7 text-white shadow-xl">
            <p className="text-sm font-black uppercase tracking-[.18em] text-yellow-300">Quick actions</p>
            <h2 className="mt-2 text-2xl font-black">Keep requests moving</h2>
            <div className="mt-6 grid gap-3">
              <Link to="/admin/shipments/new" className="rounded-xl bg-white px-4 py-3 text-sm font-bold text-brandblue">Create shipment</Link>
              <Link to="/admin/quotes" className="rounded-xl bg-yellow-300 px-4 py-3 text-sm font-bold text-brandblue">Review quotes</Link>
              <Link to="/admin/pickups" className="rounded-xl border border-white/30 px-4 py-3 text-sm font-bold text-white">Manage pickups</Link>
            </div>
          </div>
        </div>

        {error && <p className="mt-6 rounded-2xl bg-red-50 p-4 font-semibold text-red-700">{error}</p>}
      </Section>
    </>
  );
}
