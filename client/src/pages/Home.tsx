import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  Facebook,
  HeartHandshake,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TicketPercent,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { useEffect } from "react";
import type { ReactNode } from "react";
import { Link } from "wouter";

const heroImage = "/images/hero-london-panorama.jpg";
const aboutImage =
  "https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=1400&auto=format&fit=crop";

const solutionCards = [
  {
    name: "MARKET BUDDY",
    subtitle: "Social Media Marketing",
    copy:
      "We help restaurants, events and local businesses grow with powerful social media marketing, influencer partnerships and content creation.",
    logo: "/images/markitbuddy_logo.png",
    logoScale: "translate-x-[1px] translate-y-[1px] scale-[1.28]",
    accent: "purple",
    points: [
      "Social Media Management",
      "Influencer Collaborations",
      "Content Creation",
      "Campaigns & Promotions",
      "Analytics & Reporting",
    ],
    cta: "Explore MarketBuddy",
    href: "/market-buddy",
  },
  {
    name: "IT BUDDY",
    subtitle: "IT Solutions",
    copy:
      "From websites to web applications, we provide smart and reliable IT solutions to help your business run and grow smoothly.",
    logo: "/images/it_buddy_logo.png",
    logoScale: "translate-x-[-2px] translate-y-[1px] scale-[1.68]",
    accent: "blue",
    points: [
      "Website Development",
      "Web Applications",
      "E-commerce Solutions",
      "Maintenance & Support",
      "Domain & Hosting",
    ],
    cta: "Explore ITBuddy",
    href: "/it-buddy",
  },
] as const;

const solutionCardStyles = {
  purple: {
    card: "border-[#EFE4FF] bg-[#F7F0FF] shadow-[0_22px_55px_rgba(108,59,255,0.10)]",
    glow: "bg-[#8A3FFC]/14",
    text: "text-[#6C24D9]",
    check: "text-[#6C24D9]",
    button: "border-[#7B2CDE]/35 text-[#6C24D9] hover:bg-[#FBF6FF]",
  },
  blue: {
    card: "border-[#DCEBFF] bg-[#EEF6FF] shadow-[0_22px_55px_rgba(33,139,255,0.10)]",
    glow: "bg-[#218BFF]/14",
    text: "text-[#1276D8]",
    check: "text-[#1276D8]",
    button: "border-[#218BFF]/35 text-[#1276D8] hover:bg-[#F6FAFF]",
  },
} as const;

const stats = [
  { value: "250+", label: "Happy Clients", detail: "Across the UK", icon: UsersRound, color: "#6C3BFF" },
  { value: "500+", label: "Projects Delivered", detail: "Successfully", icon: TrendingUp, color: "#FF2E78" },
  { value: "10+", label: "Years Experience", detail: "In the Industry", icon: Sparkles, color: "#FF7A00" },
  { value: "99%", label: "Client Satisfaction", detail: "Our Priority", icon: ShieldCheck, color: "#218BFF" },
];

const trustedBrands = ["BeeBlend", "Pizza4You", "The Biryani", "Eventix"];

const features = [
  {
    title: "Our Vision",
    text: "To be the most trusted growth partner for businesses across the UK.",
    icon: Target,
    color: "#6C3BFF",
  },
  {
    title: "Our Mission",
    text: "Deliver smart solutions that drive growth and create long-term value.",
    icon: Rocket,
    color: "#6C3BFF",
  },
  {
    title: "Our Values",
    text: "Integrity, innovation, performance and customer success.",
    icon: HeartHandshake,
    color: "#FF7A00",
  },
];

const testimonials = [
  { brand: "BeeBlend UK", quote: "MarketBuddy helped us grow our reach and engagement." },
  { brand: "Pizza 4 You", quote: "Discount Buddy brought new customers within weeks." },
  { brand: "Bollywood Kingdom Events", quote: "Great experience with influencer campaigns." },
  { brand: "Sorath Gola London", quote: "Very happy with the results." },
];

function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
      {eyebrow ? <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#6C3BFF]">{eyebrow}</p> : null}
      <h2 className="text-[28px] font-semibold leading-tight text-[#0F172A] md:text-[32px]">{title}</h2>
      <span className="mx-auto mt-3 block h-0.5 w-12 rounded-full bg-gradient-to-r from-[#6C3BFF] to-[#FF7A00]" />
    </div>
  );
}

function GradientButton({
  children,
  href,
  className = "",
  onClick,
}: {
  children: ReactNode;
  href: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`gradient-button inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-[0_18px_42px_rgba(108,59,255,0.28)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] ${className}`}
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}

function SolutionLogo({
  src,
  alt,
  accent,
  scale = "scale-100",
}: {
  src: string;
  alt: string;
  accent: "purple" | "blue" | "orange";
  scale?: string;
}) {
  const accentStyles = {
    purple: {
      shell: "border-[#E7D8FF] bg-white shadow-[0_10px_24px_rgba(108,59,255,0.15)]",
    },
    blue: {
      shell: "border-[#CFE6FF] bg-white shadow-[0_10px_24px_rgba(33,139,255,0.15)]",
    },
    orange: {
      shell: "border-[#FFD8B7] bg-white shadow-[0_10px_24px_rgba(255,122,0,0.16)]",
    },
  }[accent];

  return (
    <div className={`relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full border transition-transform duration-300 group-hover:scale-105 ${accentStyles.shell}`}>
      <img
        src={src}
        alt={alt}
        className={`h-[82%] w-[82%] object-contain ${scale}`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

function MarketBuddyVisual() {
  return (
    <img
      src="/images/market-buddy-card-art.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[100px] right-4 hidden h-[300px] w-[200px] object-contain drop-shadow-[0_18px_22px_rgba(108,36,217,0.16)] sm:block xl:right-3"
      loading="lazy"
      decoding="async"
    />
  );
}

function ITBuddyVisual() {
  return (
    <img
      src="/images/it-buddy-card-art.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[100px] right-4 hidden h-[300px] w-[250px] object-contain drop-shadow-[0_18px_22px_rgba(33,139,255,0.14)] sm:block xl:right-2"
      loading="lazy"
      decoding="async"
    />
  );
}

function SolutionCardArt({ accent }: { accent: "purple" | "blue" }) {
  return accent === "purple" ? <MarketBuddyVisual /> : <ITBuddyVisual />;
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto h-[252px] w-[232px] transition-transform duration-500 group-hover:scale-105 sm:h-[220px] sm:w-[300px]">
      <img
        src="/images/discount-buddy-phone-bag-final.png"
        alt="Discount Buddy app shown on a phone beside a discount bag"
        className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_18px_28px_rgba(255,122,0,0.14)]"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function StatsSection() {
  return (
    <section className="reveal-on-scroll bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="grid overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_14px_38px_rgba(15,23,42,0.08)] lg:grid-cols-[1.6fr_1fr]">
        <div className="grid gap-y-4 py-4 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[#E5E7EB] lg:py-0">
          {stats.map(({ value, label, detail, icon: Icon, color }) => (
            <div key={label} className="group flex items-center justify-center gap-3 px-4 py-5 transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-50 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition-all duration-300 group-hover:scale-105" style={{ color }}>
                <Icon size={24} />
              </div>
              <div>
                <p className="text-2xl font-extrabold leading-none text-[#0F172A]">{value}</p>
                <p className="mt-1 text-xs font-bold text-[#0F172A]">{label}</p>
                <p className="text-[11px] font-medium text-[#6B7280]">{detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex flex-col justify-center border-t border-[#E5E7EB] bg-slate-50/50 px-8 py-8 overflow-hidden lg:border-l lg:border-t-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,59,255,0.04),transparent_100%)]" />
          <p className="relative mb-6 text-center text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#64748B]">
            Trusted by Leading Brands
          </p>
          <div className="relative flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
            {trustedBrands.map((brand) => (
              <div key={brand} className="group relative flex cursor-default items-center justify-center">
                <div className="absolute -inset-x-4 -inset-y-3 rounded-2xl bg-gradient-to-r from-[#6C3BFF]/0 via-[#6C3BFF]/10 to-[#FF7A00]/0 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-100" />
                <span className="relative text-[19px] font-black tracking-tight text-[#94A3B8] transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-[#6C3BFF] group-hover:to-[#FF7A00] group-hover:bg-clip-text group-hover:text-transparent">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[radial-gradient(circle_at_20%_0%,rgba(108,59,255,0.24),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(255,122,0,0.16),transparent_30%),linear-gradient(135deg,#030817_0%,#07142E_56%,#020617_100%)] pt-16 text-white">
      <div className="grid w-full gap-12 px-5 pb-12 sm:px-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.9fr_1.35fr_1fr] lg:px-[72px] xl:px-[92px]">
        <div>
          <img src="/images/markitup_logo.png" alt="MarkitUp Group" className="mb-6 w-[150px] object-contain brightness-0 invert" />
          <p className="max-w-[260px] text-sm leading-relaxed text-white/70">
            We are a UK-based marketing, technology and digital growth company delivering real results through specialist solutions.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Linkedin, TicketPercent].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Social profile"
                className="flex size-10 items-center justify-center rounded-xl bg-white/9 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-[#6C3BFF] hover:to-[#FF7A00] hover:shadow-[0_12px_28px_rgba(108,59,255,0.25)]"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold text-white">Quick Links</h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            {["Home", "About Us", "Our Solutions", "Our Work", "Contact Us"].map((item) => (
              <li key={item}>
                <Link href={item === "Home" ? "/" : "/services"} className="transition-all duration-300 hover:pl-1 hover:text-white">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold text-white">Our Solutions</h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><Link href="/market-buddy" className="transition-all duration-300 hover:pl-1 hover:text-white">Market Buddy</Link></li>
            <li><Link href="/it-buddy" className="transition-all duration-300 hover:pl-1 hover:text-white">IT Buddy</Link></li>
            <li><Link href="/discount-buddy" className="transition-all duration-300 hover:pl-1 hover:text-white">Discount Buddy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold text-white">Contact Info</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin size={17} className="mt-1 shrink-0 text-white" />
              <span>Address: 24h, Riverside court, Beaufort Park Way,Chepstow,NP16 5UW.</span>
            </li>
            <li className="flex gap-3">
              <Mail size={17} className="shrink-0 text-white" />
              <a href="mailto:info@markitupgroup.com" className="hover:text-white">info@markitupgroup.com</a>
            </li>
            <li className="flex gap-3">
              <Phone size={17} className="shrink-0 text-white" />
              <a href="tel:+440000000000" className="hover:text-white">Phone: +44 7767901263</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold text-white">Enquiries</h3>
          <p className="mb-5 text-sm leading-relaxed text-white/70">Have any questions or partnership enquiries?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-xl bg-white/8 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-white/14"
          >
            Send an Enquiry <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="flex w-full flex-col gap-4 px-5 py-5 text-xs text-white/65 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-[72px] xl:px-[92px]">
          <p>© 2025 MarkitUp Group. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.14 },
    );

    sections.forEach((section) => observer.observe(section));

    // Smooth scroll to solutions if hash is present on mount
    if (window.location.hash === "#our-solutions") {
      setTimeout(() => {
        const section = document.getElementById("our-solutions");
        if (section) {
          const offset = 78; // Navbar height
          const top = section.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 150);
    }

    return () => observer.disconnect();
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MarkitUp Group Limited",
    url: "https://markitupgroup.com",
    address: { "@type": "PostalAddress", addressCountry: "GB" },
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#0F172A]">
      <SEOHead
        title="MarkitUp Group | Building Brands. Driving Growth."
        description="MarkitUp Group is a UK-based marketing, technology and digital growth company delivering real results through specialised solutions."
        keywords="MarkitUp Group, MarketBuddy, ITBuddy, Discount Buddy, UK marketing company, digital growth"
        canonical="https://markitupgroup.com/"
        structuredData={structuredData}
      />
      <Header />

      <main>
        <section className="relative overflow-visible bg-white pb-10 pt-4 lg:pb-12">
          <div className="grid min-h-[560px] w-full items-center lg:grid-cols-[30%_70%]">
            <div className="relative z-10 px-5 py-12 sm:px-8 lg:px-12 lg:py-16 xl:pl-[72px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-[linear-gradient(90deg,rgba(108,59,255,0.11),rgba(255,46,120,0.10),rgba(255,122,0,0.10))] px-4 py-2 text-xs font-extrabold text-[#6C3BFF] shadow-[0_12px_30px_rgba(108,59,255,0.12)] backdrop-blur ring-1 ring-[#F0E7FF]">
                <span className="bg-gradient-to-r from-[#6C3BFF] via-[#C71888] to-[#FF7A00] bg-clip-text text-transparent">
                  UK Based. Growth Focused.
                </span>
              </div>
              <h1 className="mt-4 max-w-[620px] text-[32px] font-extrabold leading-[1.08] text-[#0F172A] sm:text-[48px] xl:text-[58px]">
                <span className="block sm:whitespace-nowrap">Building Brands.</span>
                <span className="block sm:whitespace-nowrap">
                  Driving <span className="bg-gradient-to-r from-[#4A16D1] via-[#D4147F] to-[#F06416] bg-clip-text text-transparent drop-shadow-[0_6px_16px_rgba(212,20,127,0.14)]">Growth.</span>
                </span>
                <span className="block sm:whitespace-nowrap">Empowering Businesses.</span>
              </h1>
              <p className="mt-5 max-w-[520px] text-[16px] leading-8 text-[#0F172A]">
                MarkitUp Group is a UK-based marketing, technology and digital growth company delivering real results through specialised solutions.
              </p>
              <GradientButton
                href="/#our-solutions"
                className="mt-6 px-6 py-3.5"
                onClick={(e) => {
                  const section = document.getElementById("our-solutions");
                  if (section) {
                    e.preventDefault();
                    const offset = 78; // Navbar height
                    const top = section.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
              >
                Explore Solutions
              </GradientButton>
            </div>

            <div className="group relative min-h-[380px] overflow-hidden lg:h-full lg:min-h-[560px]">
              <img
                src={heroImage}
                alt="Tower Bridge and London skyline"
                className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-right transition-transform duration-[1800ms] ease-out group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent lg:from-white lg:via-white/16" />
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/62 to-transparent" />
            </div>
          </div>

          <div className="absolute bottom-8 right-5 z-30 hidden items-center rounded-full border border-white/80 bg-white/90 px-6 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur md:flex lg:right-[72px]">
            <div className="flex items-center gap-8 text-xs font-medium text-[#0F172A]">
              {[
                { label: "UK Based Company", icon: MapPin },
                { label: "Trusted by Businesses", icon: ShieldCheck },
                { label: "Results that Matter", icon: BarChart3 },
              ].map(({ label, icon: Icon }, index) => (
                <div key={label} className="contents">
                  {index > 0 ? <span className="h-5 w-px bg-gray-300" /> : null}
                  <div className="group/item flex items-center gap-3 whitespace-nowrap">
                    <Icon size={16} className="text-[#0F172A]" />
                    <span>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="our-solutions" className="reveal-on-scroll bg-[#FAFBFF] py-20 lg:py-24">
          <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-[72px]">
            <SectionTitle eyebrow="Our Solutions" title="Three Buddies. One Goal — Your Growth." />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {solutionCards.map((card) => {
                const style = solutionCardStyles[card.accent];
                return (
                  <article
                    key={card.name}
                    className={`group relative flex min-h-[350px] flex-col overflow-hidden rounded-[20px] border p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_30px_80px_rgba(15,23,42,0.13)] ${style.card}`}
                  >
                    <div className={`absolute right-7 top-20 size-36 rounded-full blur-3xl ${style.glow}`} />
                    <SolutionCardArt accent={card.accent} />
                    <div className="relative z-10 mb-5 flex items-center gap-4">
                      <SolutionLogo src={card.logo} alt={`${card.name} logo`} accent={card.accent} scale={card.logoScale} />
                      <div>
                        <h3 className="text-[22px] font-semibold leading-none text-[#0F172A]">{card.name}</h3>
                        <p className={`mt-1 text-sm font-bold ${style.text}`}>{card.subtitle}</p>
                      </div>
                    </div>
                    <p className="relative z-10 mb-5 text-sm leading-6 text-[#0F172A] sm:max-w-[64%] xl:max-w-[60%]">{card.copy}</p>
                    <ul className="relative z-10 mb-6 flex-1 space-y-2.5 sm:max-w-[64%] xl:max-w-[62%]">
                      {card.points.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-sm font-medium text-[#0F172A]">
                          <Check size={15} className={style.check} />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={card.href}
                      className={`relative z-10 inline-flex w-fit items-center gap-3 rounded-lg border bg-white px-5 py-3 text-sm font-bold transition-all duration-300 group-hover:gap-4 ${style.button}`}
                    >
                      {card.cta} <ArrowRight size={16} />
                    </Link>
                  </article>
                );
              })}

              <article className="group relative flex min-h-[350px] flex-col overflow-hidden rounded-[20px] border border-[#FFE0C4] bg-[#FFF0E5] p-6 shadow-[0_24px_60px_rgba(255,122,0,0.13)] ring-1 ring-[#FF7A00]/10 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_34px_90px_rgba(255,122,0,0.20)]">
                <div className="absolute -right-16 -top-16 size-56 rounded-full bg-gradient-to-br from-[#FF7A00]/24 to-transparent blur-2xl" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF7A00]/7 via-transparent to-[#6C3BFF]/4 opacity-70" />
                
                <div className="pointer-events-none absolute bottom-[100px] right-2 hidden sm:block xl:-right-2">
                  <PhoneMockup />
                </div>

                <div className="relative z-10 mb-5 flex items-center gap-4">
                  <SolutionLogo src="/images/discount_buddy_logo.png" alt="Discount Buddy logo" accent="orange" scale="translate-x-[-1px] translate-y-[1px] scale-[1.38]" />
                  <div>
                    <h3 className="text-[22px] font-semibold leading-none text-[#0F172A]">DISCOUNT BUDDY</h3>
                    <p className="mt-1 text-sm font-bold text-[#FF7A00]">UK's Restaurant Discount Platform</p>
                  </div>
                </div>
                
                <p className="relative z-10 mb-5 text-sm leading-6 text-[#0F172A] sm:max-w-[55%] lg:max-w-[62%] xl:max-w-[60%]">
                  We connect hungry customers with the best restaurant deals across the UK and help restaurants increase footfall and grow their business.
                </p>
                
                <ul className="relative z-10 mb-6 flex-1 space-y-2.5 sm:max-w-[55%] lg:max-w-[62%] xl:max-w-[60%]">
                  {["Exclusive Restaurant Deals", "More Footfall & Visibility", "Easy Partner Onboarding", "Targeted Customer Reach"].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm font-medium text-[#0F172A]">
                      <Check size={15} className="text-[#FF7A00] shrink-0" /> {point}
                    </li>
                  ))}
                </ul>
                
                <div className="relative z-10 mt-auto flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/discount-buddy"
                      className="inline-flex w-fit items-center gap-3 rounded-lg border border-[#FF7A00]/45 bg-white px-5 py-3 text-sm font-bold text-[#FF7A00] transition-all duration-300 hover:bg-orange-50 group-hover:gap-4"
                    >
                      Explore Discount Buddy <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="flex flex-row flex-wrap items-center gap-2 xl:gap-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.discountbuddy.app&pcampaignid=web_share"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Get it on Google Play"
                      className="inline-flex h-8 w-[112px] items-center overflow-hidden rounded-md bg-black transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg xl:h-9 xl:w-[124px]"
                    >
                      <img
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        alt="Get it on Google Play"
                        className="h-[46px] w-full object-contain xl:h-[52px]"
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                    <a
                      href="https://apps.apple.com/gb/app/discount-buddy-deals/id6760362068"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download on the App Store"
                      className="inline-flex h-8 w-[112px] items-center overflow-hidden rounded-md bg-black transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg xl:h-9 xl:w-[124px]"
                    >
                      <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="Download on the App Store"
                        className="h-full w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <StatsSection />

        <section className="reveal-on-scroll bg-white py-20 lg:py-24">
          <div className="grid w-full items-center gap-14 px-5 sm:px-10 lg:grid-cols-[42%_58%] lg:px-[72px] xl:px-[92px]">
            <div className="group overflow-hidden rounded-3xl shadow-[0_24px_65px_rgba(15,23,42,0.15)]">
              <img src={aboutImage} alt="Big Ben and Westminster in London" className="h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[420px]" />
            </div>
            <div>
              <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#6C3BFF]">About Us</p>
              <h2 className="mb-5 text-[32px] font-bold text-[#0F172A]">About MarkitUp Group</h2>
              <p className="mb-4 max-w-3xl text-[16px] leading-8 text-[#0F172A]">
                MarkitUp Group is a UK-based marketing and digital growth company helping businesses scale through specialised solutions in marketing, technology and customer acquisition platforms.
              </p>
              <p className="mb-9 max-w-3xl text-[16px] leading-8 text-[#0F172A]">
                We combine strategy, execution and innovation to deliver real business results.
              </p>
              <div className="grid gap-5 sm:grid-cols-3">
                {features.map(({ title, text, icon: Icon, color }) => (
                  <div key={title} className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,23,42,0.10)]">
                    <div className="mb-4 flex size-12 shrink-0 items-center justify-center rounded-full border bg-white shadow-[0_10px_25px_rgba(15,23,42,0.07)]" style={{ color, borderColor: `${color}55` }}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-[#0F172A]">{title}</h3>
                      <p className="text-xs leading-5 text-[#6B7280]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="reveal-on-scroll overflow-hidden bg-[#FAFBFF] py-20 lg:py-24">
          <div className="w-full px-5 sm:px-10 lg:px-[72px] xl:px-[92px]">
            <SectionTitle title="What Our Clients Say" />
            <div className="relative">
              <button aria-label="Previous testimonial" className="absolute -left-2 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0F172A] shadow-lg transition-all hover:-translate-x-0.5 md:flex">
                <ArrowLeft size={18} />
              </button>
              <div className="grid gap-7 md:grid-cols-3">
                {testimonials.slice(0, 3).map(({ brand, quote }, index) => (
                  <article key={brand} className="rounded-2xl border border-slate-100 bg-[linear-gradient(145deg,#FFFFFF_0%,#F8FAFC_100%)] p-7 shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_65px_rgba(15,23,42,0.13)]">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div className="flex gap-1 text-[#FFC400]">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star key={starIndex} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <div className="flex size-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white shadow-sm">
                        <img
                          src={index === 1 ? "/images/discount_buddy_logo.png" : index === 2 ? "/images/it_buddy_logo.png" : "/images/markitbuddy_logo.png"}
                          alt={`${brand} testimonial logo`}
                          className="h-8 w-8 object-contain"
                        />
                      </div>
                    </div>
                    <p className="mb-6 text-[15px] leading-7 text-[#0F172A]">"{quote}"</p>
                    <p className="text-sm font-extrabold text-[#0F172A]">- {brand}</p>
                  </article>
                ))}
              </div>
              <button aria-label="Next testimonial" className="absolute -right-2 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0F172A] shadow-lg transition-all hover:translate-x-0.5 md:flex">
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {[0, 1, 2].map((dot) => (
                <span key={dot} className={`size-2 rounded-full ${dot === 0 ? "bg-[#6C3BFF]" : "bg-slate-200"}`} />
              ))}
            </div>
          </div>
        </section>

        <section className="reveal-on-scroll bg-white py-20 lg:py-24">
          <div className="relative flex w-full flex-col items-center justify-between gap-7 overflow-hidden bg-gradient-to-r from-[#6C3BFF] via-[#B8188D] to-[#FF7A00] px-5 py-16 text-white shadow-[0_28px_75px_rgba(108,59,255,0.34)] sm:px-10 md:flex-row lg:px-[72px] xl:px-[92px]">
            <div className="absolute -left-12 top-1/2 size-52 -translate-y-1/2 rounded-full bg-white/14 blur-3xl" />
            <div className="absolute -right-10 top-0 size-48 rounded-full bg-white/12 blur-3xl" />
            <div className="flex items-center gap-5 text-center md:text-left">
              <div className="relative hidden size-16 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/12 shadow-[0_18px_45px_rgba(0,0,0,0.14)] backdrop-blur md:flex">
                <Rocket size={24} />
              </div>
              <div className="relative">
                <h2 className="text-[30px] font-bold text-white md:text-[38px]">Ready to Grow Your Business?</h2>
                <p className="mt-1 text-sm text-white/86 md:text-base">
                  Let’s connect you with the right solutions and start your growth journey today.
                </p>
              </div>
            </div>
            <Link href="/contact" className="relative inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#FF7A00] shadow-[0_18px_45px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]">
              Get In Touch <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
