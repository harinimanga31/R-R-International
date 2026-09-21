import { Section } from "../components/Section";

export default function AdminSettings() {
  return (
    <Section>
      <h1 className="text-3xl font-black">Settings</h1>
      <p className="mt-2 text-slate-500">RR International business information used across the dashboard.</p>
      <div className="card mt-7 max-w-3xl p-7">
        <div className="grid gap-5 sm:grid-cols-2">
          <div><p className="text-xs font-bold uppercase text-slate-500">Business</p><p className="mt-1 font-bold">RR International</p></div>
          <div><p className="text-xs font-bold uppercase text-slate-500">Contact Person</p><p className="mt-1 font-bold">M. Ramesh</p></div>
          <div><p className="text-xs font-bold uppercase text-slate-500">Phone</p><p className="mt-1 font-bold">+91 73961 94602</p></div>
          <div><p className="text-xs font-bold uppercase text-slate-500">Email</p><p className="mt-1 font-bold">rrinternational0092@gmail.com</p></div>
          <div><p className="text-xs font-bold uppercase text-slate-500">Hours</p><p className="mt-1 font-bold">9:00 AM – 6:00 PM</p></div>
          <div><p className="text-xs font-bold uppercase text-slate-500">Established</p><p className="mt-1 font-bold">2008</p></div>
          <div className="sm:col-span-2"><p className="text-xs font-bold uppercase text-slate-500">Office</p><p className="mt-1 font-bold">Chilkanagar, Uppal, Hyderabad – 500039, Telangana, India</p></div>
        </div>
      </div>
    </Section>
  );
}
