import { Link } from "wouter";
import { ArrowUpRight, Building2, Globe, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/60 bg-white/60 py-20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="premium-card rounded-[2rem] p-10 md:p-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          <div>
            <div className="mb-6">
              <Link href="/" className="group flex items-center overflow-visible" aria-label="MarkitUp Group home">
                <img
                  src="/images/markitup_logo.png"
                  alt="MarkitUp Group"
                  className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] md:h-[150px]"
                />
              </Link>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              UK-based digital marketing, promotion, and technology solutions designed to help
              businesses grow with clarity, trust, and measurable momentum.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-slate-900">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-slate-900">Business Units</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/market-buddy" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
                  Market Buddy
                </Link>
              </li>
              <li>
                <Link href="/discount-buddy" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
                  Discount Buddy
                </Link>
              </li>
              <li>
                <Link href="/it-buddy" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
                  IT Buddy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-slate-900">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-slate-500 flex-shrink-0 mt-1" />
                <a href="mailto:info@markitupgroup.com" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
                  info@markitupgroup.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Building2 size={18} className="text-slate-500 flex-shrink-0 mt-1" />
                <span className="text-slate-600 text-sm font-medium">MarkitUp Group Limited</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-slate-500 flex-shrink-0 mt-1" />
                <span className="text-slate-600 text-sm font-medium">United Kingdom</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe size={18} className="text-slate-500 flex-shrink-0 mt-1" />
                <a
                  href="https://www.markitupgroup.com"
                  className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.markitupgroup.com
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="font-bold text-base mb-4 text-slate-900">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy-policy" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

          <div className="border-t border-slate-200/80 pt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-slate-500 text-sm font-medium">
              © {currentYear} MarkitUp Group Limited. All rights reserved.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
            >
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
