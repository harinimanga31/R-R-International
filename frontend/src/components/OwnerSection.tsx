export default function OwnerSection() {
  return (
    <div className="card overflow-hidden">
      <div className="grid md:grid-cols-[220px_1fr]">

        {/* Owner Photo */}
        <div className="flex min-h-[260px] items-center justify-center bg-slate-100 p-6">
          <img
            src="/images/owner-placeholder.jpeg"
            alt="M. Ramesh, Founder of RR International"
            className="h-48 w-48 rounded-full object-cover shadow-md"
          />
        </div>

        {/* Owner Information */}
        <div className="p-7 sm:p-9">

          <p className="text-sm font-black uppercase tracking-[0.18em] text-brandred">
            Owner / Founder
          </p>

          <h2 className="mt-2 text-3xl font-black text-brandblue">
            M. Ramesh
          </h2>

          <p className="mt-1 font-bold text-slate-600">
            Founder
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            RR International supports international courier and cargo
            requirements and works directly with customers on shipment
            coordination.
          </p>

        </div>

      </div>
    </div>
  );
}