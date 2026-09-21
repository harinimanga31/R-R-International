import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LayoutDashboard, Package, FileText, Mail, Truck, Users, Map, Settings, LogOut } from "lucide-react";

export default function AdminLayout() {
  const nav = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("rr_admin_token")) nav("/admin/login", { replace: true });
  }, [nav]);
  const items = [
    ["Dashboard", "/admin/dashboard", LayoutDashboard],
    ["Shipments", "/admin/shipments", Package],
    ["Quotes", "/admin/quotes", FileText],
    ["Enquiries", "/admin/enquiries", Mail],
    ["Pickups", "/admin/pickups", Truck],
    ["Customers", "/admin/customers", Users],
    ["Destinations", "/admin/destinations", Map],
    ["Settings", "/admin/settings", Settings],
  ];

  function logout() {
    localStorage.removeItem("rr_admin_token");
    nav("/admin/login");
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed hidden h-full w-72 bg-brandblue p-5 text-white md:block">
        <Link to="/admin/dashboard" className="block overflow-hidden rounded-2xl bg-white p-3 shadow-lg">
          <img src="/logo.svg" alt="RR International" className="h-16 w-full object-contain" />
        </Link>
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-[11px] font-black uppercase tracking-[.18em] text-yellow-300">RR INTERNATIONAL</p>
          <p className="mt-1 text-xs font-semibold text-blue-100">International Courier & Cargo Services</p>
        </div>
        <div className="mt-7 space-y-1">
          {items.map(([name, path, Icon]: any) => (
            <Link className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition hover:bg-white/10" to={path} key={path}>
              <Icon size={18} />{name}
            </Link>
          ))}
        </div>
        <button type="button" className="mt-8 flex items-center gap-3 px-3 text-sm font-semibold text-blue-100" onClick={logout}>
          <LogOut size={18} />Logout
        </button>
      </aside>

      <main className="md:ml-72">
        <div className="border-b bg-white px-5 py-4 shadow-sm md:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-2xl font-black tracking-tight text-brandred sm:text-3xl">RR INTERNATIONAL</p>
              <p className="mt-1 text-[10px] font-black uppercase tracking-[.18em] text-brandblue sm:text-xs">International Courier & Cargo Services</p>
            </div>
            <a href="tel:+917396194602" className="hidden rounded-xl bg-yellow-100 px-4 py-2 text-sm font-bold text-brandblue sm:block">+91 73961 94602</a>
          </div>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
