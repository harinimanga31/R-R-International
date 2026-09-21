export function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-16 sm:py-20 ${className}`}><div className="container-rr">{children}</div></section>;
}

export function Heading({ eyebrow, title, description, light = false }: { eyebrow?: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && <p className={`mb-2 text-sm font-black uppercase tracking-[.18em] ${light ? "text-yellow-300" : "text-brandred"}`}>{eyebrow}</p>}
      <h2 className={`text-3xl font-black tracking-tight sm:text-4xl ${light ? "text-white" : "text-slate-900"}`}>{title}</h2>
      {description && <p className={`mt-4 leading-7 ${light ? "text-blue-100" : "text-slate-600"}`}>{description}</p>}
    </div>
  );
}
