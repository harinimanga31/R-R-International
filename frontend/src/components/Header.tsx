import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  ["Services", "/services"],
  ["International Shipping", "/international-shipping"],
  ["Track", "/track"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="container-rr flex min-h-[76px] items-center justify-between gap-5">
        <Link to="/" className="min-w-0 shrink-0" aria-label="RR International home">
          <img
            src="/logo.svg"
            alt="RR International"
            className="h-14 w-auto max-w-[280px] sm:h-16 sm:max-w-[310px]"
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {nav.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "font-extrabold text-brandred"
                  : "font-semibold text-slate-600 transition hover:text-brandred"
              }
            >
              {label}
            </NavLink>
          ))}
          <Link className="btn btn-primary" to="/quote">Get a Quote</Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-lg border border-slate-300 p-2 xl:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t bg-white p-5 xl:hidden">
          <div className="container-rr grid gap-4">
            {nav.map(([label, path]) => (
              <Link onClick={() => setOpen(false)} key={path} to={path} className="font-semibold">
                {label}
              </Link>
            ))}
            <Link onClick={() => setOpen(false)} className="btn btn-primary" to="/quote">
              Get a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
