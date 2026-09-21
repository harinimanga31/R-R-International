import { useState } from "react";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Section } from "../components/Section";
import { api } from "../services/api";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState("");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone("");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (String(data.message || "").trim().length < 10) {
      setError("Please provide at least 10 characters in your enquiry.");
      return;
    }

    setLoading(true);
    try {
      await api.post("/enquiries", data);
      setDone("Your enquiry has been sent successfully. We will get back to you soon.");
      form.reset();
    } catch (err: any) {
      setError(
        err?.response?.data?.detail ||
          "Unable to send your enquiry right now. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="brand-gradient py-16 text-white">
        <div className="container-rr">
          <p className="font-black uppercase tracking-[.18em] text-yellow-300">RR INTERNATIONAL</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Contact Us</h1>
          <p className="mt-3 max-w-2xl text-lg text-blue-50">
            Have a shipment question? Speak with RR International or send an enquiry online.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black">RR International</h2>
            <p className="mt-3 leading-7 text-slate-600">International Courier & Air Cargo Services</p>
            <div className="mt-7 grid gap-4">
              <a href="tel:+917396194602" className="card flex gap-4 p-5 transition hover:-translate-y-1">
                <Phone className="shrink-0 text-brandred" />
                <div><b>Phone</b><p className="mt-1 text-slate-600">+91 73961 94602</p></div>
              </a>
              <a href="mailto:rrinternational0092@gmail.com" className="card flex gap-4 p-5 transition hover:-translate-y-1">
                <Mail className="shrink-0 text-brandred" />
                <div><b>Email</b><p className="mt-1 text-slate-600">rrinternational0092@gmail.com</p></div>
              </a>
              <div className="card flex gap-4 p-5">
                <MapPin className="shrink-0 text-brandred" />
                <div><b>Office</b><p className="mt-1 text-slate-600">Chilkanagar, Uppal, Hyderabad – 500039, Telangana, India</p></div>
              </div>
              <div className="card flex gap-4 p-5">
                <Clock3 className="shrink-0 text-brandred" />
                <div><b>Business Hours</b><p className="mt-1 text-slate-600">9:00 AM – 6:00 PM</p></div>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="card space-y-5 p-7 lg:col-span-3">
            <div>
              <h2 className="text-2xl font-black">Send an Enquiry</h2>
              <p className="mt-1 text-sm text-slate-500">Required fields are marked with *.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-bold text-slate-700">Customer Name *</span>
                <input className="field" name="name" placeholder="Full name" minLength={2} maxLength={120} required />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-bold text-slate-700">Email *</span>
                <input className="field" name="email" type="email" placeholder="you@example.com" required />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-bold text-slate-700">Phone *</span>
                <input className="field" name="phone" type="tel" placeholder="+91 9876543210" minLength={7} maxLength={20} required />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-bold text-slate-700">Subject *</span>
                <input className="field" name="subject" placeholder="How can we help?" minLength={3} maxLength={150} required />
              </label>
            </div>

            <label className="block">
              <span className="mb-1 block text-sm font-bold text-slate-700">Message / Enquiry *</span>
              <textarea
                className="field min-h-40"
                name="message"
                placeholder="Tell us about your shipment or question"
                minLength={10}
                maxLength={5000}
                required
              />
            </label>

            <button className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={loading}>
              {loading ? "Sending…" : "Send Message"}
            </button>

            {done && <p role="status" className="rounded-xl bg-green-50 p-4 font-semibold text-green-700">{done}</p>}
            {error && <p role="alert" className="rounded-xl bg-red-50 p-4 font-semibold text-red-700">{error}</p>}
          </form>
        </div>
      </Section>
    </>
  );
}
