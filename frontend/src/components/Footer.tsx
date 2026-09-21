import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brandblue text-white">
      <div className="container-rr grid gap-10 py-14 md:grid-cols-4">
        <div>
          <img src="/logo.svg" alt="RR International" className="mb-5 h-16 w-auto rounded-xl bg-white p-1" />
          <p className="text-sm leading-6 text-blue-100">
            International courier, air cargo and door-to-door shipping support from India to destinations worldwide.
          </p>
          <p className="mt-4 text-sm font-bold text-yellow-300">Serving customers since 2008</p>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-yellow-300">Services</h3>
          <div className="grid gap-2 text-sm text-blue-100">
            <Link to="/services/international-courier">International Courier</Link>
            <Link to="/services/air-cargo">Air Cargo</Link>
            <Link to="/services/door-to-door">Door-to-Door</Link>
            <Link to="/services/business-shipping">Business Shipping</Link>
            <Link to="/services/parcel-shipping">Parcel Shipping</Link>
            <Link to="/customs">Customs Clearance</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-yellow-300">Company</h3>
          <div className="grid gap-2 text-sm text-blue-100">
            <Link to="/about">About RR International</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/track">Track Shipment</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-yellow-300">Contact</h3>
          <div className="space-y-2 text-sm leading-6 text-blue-100">
            <a href="tel:+917396194602">+91 73961 94602</a>
            <br />
            <a href="mailto:rrinternational0092@gmail.com">rrinternational0092@gmail.com</a>
            <p>Chilkanagar, Uppal, Hyderabad – 500039, Telangana, India</p>
            <p>Business Hours: 9:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 py-5 text-center text-xs text-blue-100">
        © {new Date().getFullYear()} RR International. All rights reserved. <Link to="/privacy-policy">Privacy</Link> · <Link to="/terms">Terms</Link>
      </div>
    </footer>
  );
}
