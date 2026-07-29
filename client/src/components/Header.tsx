import { Link, useLocation } from "wouter";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Solutions", href: "/services", hasDropdown: true },
  { label: "Our Work", href: "/case-studies" },
  { label: "Contact Us", href: "/contact" },
];

const solutions = [
  { name: "MarketBuddy", href: "/market-buddy", desc: "Digital Marketing & Growth" },
  { name: "ITBuddy", href: "/it-buddy", desc: "Tech & Development" },
  { name: "DiscountBuddy", href: "/discount-buddy", desc: "Restaurant Discount Platform" },
];

function Logo({ overrideSrc, overrideAlt, overrideHref = "/", logoClassName }: { overrideSrc?: string, overrideAlt?: string, overrideHref?: string, logoClassName?: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === overrideHref) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link href={overrideHref} onClick={handleClick} className="group flex items-center overflow-visible" aria-label={overrideAlt || "MarkitUp Group home"}>
      <img
        src={overrideSrc || "/images/markitup_logo.png"}
        alt={overrideAlt || "MarkitUp Group"}
        className={`w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] ${
          overrideSrc 
            ? "h-14 md:h-20" 
            : "h-14 sm:h-16 md:h-[8.125rem] lg:h-[8.75rem]"
        } ${logoClassName || ""}`}
      />
    </Link>
  );
}

export default function Header({ 
  logoOverride, 
  logoAlt,
  logoHref = "/",
  ctaText = "Explore Solutions",
  ctaHref = "/#our-solutions",
  logoClassName
}: { 
  logoOverride?: string, 
  logoAlt?: string,
  logoHref?: string,
  ctaText?: string,
  ctaHref?: string,
  logoClassName?: string
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (location === "/") {
      const section = document.getElementById(targetId);
      if (section) {
        e.preventDefault();
        const offset = 80;
        const top = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white/60 backdrop-blur-sm"
        }`}
    >
      <div className="container relative flex h-20 items-center justify-between">
        <div className="flex items-center justify-start z-10 shrink-0">
          <Logo overrideSrc={logoOverride} overrideAlt={logoAlt} overrideHref={logoHref} logoClassName={logoClassName} />
        </div>

        <nav className="hidden lg:flex items-center gap-8 z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            if (link.hasDropdown) {
              return (
                <div key={link.label} className="group relative flex h-20 items-center">
                  <Link
                    href={link.href}
                    onClick={(e) => link.href === "/services" ? handleSmoothScroll(e, "our-solutions") : undefined}
                    className={`relative inline-flex items-center gap-1 text-sm font-semibold tracking-tight transition-colors duration-200 ${
                      active ? "text-[var(--color-brand-purple)]" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180 opacity-60" />
                  </Link>

                  <div className="absolute left-1/2 top-full invisible w-64 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-xl border border-slate-100 bg-white p-2 shadow-lg ring-1 ring-black/5">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.name}
                          href={solution.href}
                          className={`flex flex-col rounded-lg px-4 py-3 transition-colors hover:bg-slate-50 ${
                            isActive(solution.href) ? "bg-slate-50" : ""
                          }`}
                        >
                          <span className={`text-sm font-bold transition-colors ${
                            isActive(solution.href) ? "brand-gradient-text" : "text-slate-900"
                          }`}>
                            {solution.name}
                          </span>
                          <span className="mt-0.5 text-xs text-slate-500">
                            {solution.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative flex h-20 items-center text-sm font-semibold tracking-tight transition-colors duration-200 ${
                  active ? "text-[var(--color-brand-purple)]" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex justify-end items-center gap-4 z-10 shrink-0">
          <Link
            href={ctaHref}
            onClick={(e) => {
              if (ctaHref === "/services" || ctaHref === "/#our-solutions") {
                handleSmoothScroll(e, "our-solutions");
              }
            }}
            className="gradient-button hidden lg:inline-flex rounded-full px-6 py-2.5 text-sm gap-2"
          >
            {ctaText}
            <ArrowRight size={16} />
          </Link>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg bg-slate-50 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white px-4 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="flex flex-col">
                    <button
                      onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                      className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                        active ? "bg-slate-50 text-[var(--color-brand-purple)]" : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform duration-200 ${isSolutionsOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    {isSolutionsOpen && (
                      <div className="mb-2 mt-1 flex flex-col gap-1 pl-4 pr-2">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            href={solution.href}
                            className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                              isActive(solution.href) ? "bg-slate-50 text-[var(--color-brand-purple)]" : "text-slate-600 hover:bg-slate-50"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {solution.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    active ? "bg-slate-50 text-[var(--color-brand-purple)]" : "text-slate-700 hover:bg-slate-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={ctaHref}
              className="gradient-button mt-4 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white w-full"
              onClick={(e) => {
                if (ctaHref === "/services" || ctaHref === "/#our-solutions") {
                  handleSmoothScroll(e, "our-solutions");
                }
                if (location !== "/") setIsOpen(false);
              }}
            >
              {ctaText} <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

