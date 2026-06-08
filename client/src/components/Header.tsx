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
    // If the link points to the current path, smooth scroll to top
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
        className={`h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] md:h-[150px] ${logoClassName || ""}`}
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
        const offset = 78; // Navbar height
        const top = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
          ? "border-b border-slate-200/50 bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/40 backdrop-blur-md"
        }`}
    >
      <div className="relative flex h-[78px] w-full items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-[72px]">
        <div className="flex items-center justify-start z-10">
          <Logo overrideSrc={logoOverride} overrideAlt={logoAlt} overrideHref={logoHref} logoClassName={logoClassName} />
        </div>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-9 lg:flex z-10" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            if (link.hasDropdown) {
              return (
                <div key={link.label} className="group relative inline-flex h-[78px] items-center">
                  <Link
                    href={link.href}
                    onClick={(e) => link.href === "/services" ? handleSmoothScroll(e, "our-solutions") : undefined}
                    className={`relative inline-flex items-center gap-1.5 text-[14px] font-semibold tracking-tight transition-colors duration-300 ${
                      active ? "text-[#6C3BFF]" : "text-slate-600 group-hover:text-[#0F172A]"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                  </Link>

                  <span
                    className={`absolute bottom-[14px] left-0 h-[3px] rounded-full bg-gradient-to-r from-[#6C3BFF] via-[#C71888] to-[#FF7A00] shadow-[0_5px_12px_rgba(108,59,255,0.22)] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />

                  <div className="absolute left-1/2 top-[78px] invisible w-[320px] -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-white/60 bg-white/95 p-2 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.name}
                          href={solution.href}
                          className={`group/item flex flex-col rounded-xl px-4 py-3 transition-colors hover:bg-slate-50 ${
                            isActive(solution.href) ? "bg-slate-50" : ""
                          }`}
                        >
                          <span className={`text-[14px] font-bold transition-colors group-hover/item:text-[#6C3BFF] ${
                            isActive(solution.href) ? "text-[#6C3BFF]" : "text-[#0F172A]"
                          }`}>
                            {solution.name}
                          </span>
                          <span className="mt-0.5 text-[12px] text-slate-500">
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
                className={`group relative inline-flex h-[78px] items-center gap-1.5 text-[14px] font-semibold transition-colors duration-300 ${
                  active ? "text-[#6C3BFF]" : "text-[#0F172A] hover:text-[#6C3BFF]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-[14px] left-0 h-[3px] rounded-full bg-gradient-to-r from-[#6C3BFF] via-[#C71888] to-[#FF7A00] shadow-[0_5px_12px_rgba(108,59,255,0.22)] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex justify-end items-center gap-4 z-10">
          <Link
            href={ctaHref}
            onClick={(e) => {
              if (ctaHref === "/services" || ctaHref === "/#our-solutions") {
                handleSmoothScroll(e, "our-solutions");
              }
            }}
            className="gradient-button hidden items-center gap-3 rounded-full px-6 py-2.5 text-[14px] font-bold text-white shadow-[0_8px_24px_rgba(108,59,255,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(108,59,255,0.36)] lg:inline-flex"
          >
            {ctaText}
            <span className="flex size-7 items-center justify-center rounded-full bg-white text-[#FF7A00] shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-transform duration-300 group-hover:scale-110">
              <ArrowRight size={14} />
            </span>
          </Link>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0F172A] shadow-sm lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="absolute left-4 right-4 top-[82px] rounded-3xl border border-white/80 bg-white/95 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="flex flex-col">
                    <button
                      onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                        active ? "bg-slate-50 text-[#6C3BFF]" : "text-[#0F172A] hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform duration-300 ${isSolutionsOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    {isSolutionsOpen && (
                      <div className="mb-2 mt-1 flex flex-col gap-1 pl-4 pr-2">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            href={solution.href}
                            className={`rounded-xl px-4 py-2.5 text-[13px] font-semibold transition-colors ${
                              isActive(solution.href) ? "bg-[#6C3BFF]/5 text-[#6C3BFF]" : "text-slate-600 hover:bg-slate-50"
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
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                    active ? "bg-slate-50 text-[#6C3BFF]" : "text-[#0F172A] hover:bg-slate-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={ctaHref}
              className="gradient-button mt-3 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
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
