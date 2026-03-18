import { Link } from "wouter";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    {
      label: "Market Buddy",
      href: "/market-buddy",
      description: "Marketing services for business growth",
    },
    {
      label: "Discount Buddy",
      href: "/discount-buddy",
      description: "Platform for restaurant offers and discounts",
    },
    {
      label: "IT Buddy",
      href: "/it-buddy",
      description: "Software and technology solutions",
    },
  ];

  return (
    <header className="glass-header sticky top-0 z-50">
      <div className="container mx-auto h-[76px] px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col leading-none">
            <div
              className="text-[1.65rem] font-extrabold tracking-tight"
              style={{
                color: "#1E1E2F",
                backgroundImage: "linear-gradient(90deg, #1E1E2F 0%, #1E1E2F 64%, #ff7aa8 82%, #ffa24c 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MarkitUp
            </div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-8">
          <Link
            href="/"
            className="text-slate-700 hover:text-slate-900 transition-colors font-medium text-[15px] relative group"
          >
            Home
            <span
              className="absolute -bottom-2 left-0 w-0 h-0.5 transition-all group-hover:w-full"
              style={{ backgroundColor: "var(--accent-indigo)" }}
            ></span>
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors font-medium text-[15px]"
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-20 w-[360px] -translate-x-1/2 pt-3">
                <div className="rounded-[1.5rem] border border-[var(--surface-border)] bg-white/96 p-3 shadow-[0_18px_45px_rgba(55,65,92,0.12)] backdrop-blur-xl">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block rounded-[1.1rem] px-4 py-3 transition-colors hover:bg-[#fcf8ff]"
                  >
                    <div className="text-[15px] font-semibold text-slate-900">{service.label}</div>
                    <div className="mt-1 text-sm leading-relaxed text-slate-500">{service.description}</div>
                  </Link>
                ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.filter((link) => link.label !== "Home" && link.label !== "Services").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium text-[15px] relative group"
            >
              {link.label}
              <span
                className="absolute -bottom-2 left-0 w-0 h-0.5 transition-all group-hover:w-full"
                style={{ backgroundColor: "var(--accent-teal)" }}
              ></span>
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} className="text-slate-900" /> : <Menu size={24} className="text-slate-900" />}
        </button>
      </div>

      {isOpen && (
        <nav className="xl:hidden border-t border-slate-200/70 bg-white/90 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Home
            </Link>
            <div className="rounded-[1.25rem] border border-[var(--surface-border)] bg-white p-3">
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Services
              </div>
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-[1rem] px-3 py-3 hover:bg-[#fcf8ff] transition-colors"
                >
                  <div className="text-sm font-semibold text-slate-900">{service.label}</div>
                  <div className="mt-1 text-sm text-slate-500 leading-relaxed">{service.description}</div>
                </Link>
              ))}
            </div>
            {navLinks.filter((link) => link.label !== "Home" && link.label !== "Services").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
