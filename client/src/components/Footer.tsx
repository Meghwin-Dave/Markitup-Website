import { Link } from "wouter";
import { ArrowRight, Building2, Facebook, Globe, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-slate-300">
      {/* Subtle brand gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] brand-gradient-bg opacity-80" />
      
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 xl:gap-16 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-flex items-center mb-6" aria-label="MarkitUp Group home">
              <img
                src="/images/markitup_logo.png"
                alt="MarkitUp Group"
                className="h-16 sm:h-20 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              UK-based digital marketing, technology, and customer acquisition company delivering real results through specialised solutions.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label="Social profile"
                  className="flex size-10 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:border-[var(--color-brand-purple)] hover:shadow-[0_4px_12px_rgba(108,59,255,0.2)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base mb-6 text-white tracking-tight">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Our Solutions", "Case Studies", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-[var(--color-brand-purple)] mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-6 text-white tracking-tight">Our Solutions</h3>
            <ul className="space-y-4">
              {["Market Buddy", "IT Buddy", "Discount Buddy"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-[var(--color-brand-purple)] mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-6 text-white tracking-tight">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[var(--color-brand-purple)] flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm font-medium leading-relaxed">24h, Riverside court,<br/>Beaufort Park Way,<br/>Chepstow, NP16 5UH</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--color-brand-purple)] flex-shrink-0" />
                <a href="mailto:info@markitupgroup.com" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                  info@markitupgroup.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--color-brand-purple)] flex-shrink-0" />
                <a href="tel:+447767901263" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                  +44 7767901263
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-slate-500 text-sm font-medium">
            © {currentYear} MarkitUp Group Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
