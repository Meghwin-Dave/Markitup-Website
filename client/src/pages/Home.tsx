import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";
import {
  ArrowRight,
  BarChart3,
  Check,
  HeartHandshake,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { useEffect } from "react";
import type { ReactNode } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const heroImage = "/images/hero-london-panorama.jpg";
const aboutImage = "/images/creative-team.png";

const solutionCards = [
  {
    name: "MARKET BUDDY",
    subtitle: "Social Media Marketing",
    copy: "We help restaurants, events and local businesses grow with powerful social media marketing, influencer partnerships and content creation.",
    logo: "/images/markitbuddy_logo.png",
    logoScale: "translate-x-[1px] translate-y-[1px] scale-[1.28]",
    accent: "purple",
    points: [
      "Social Media Management",
      "Influencer Collaborations",
      "Content Creation",
      "Campaigns & Promotions",
    ],
    cta: "Explore MarketBuddy",
    href: "/market-buddy",
  },
  {
    name: "IT BUDDY",
    subtitle: "IT Solutions",
    copy: "From websites to web applications, we provide smart and reliable IT solutions to help your business run and grow smoothly.",
    logo: "/images/it_buddy_logo.png",
    logoScale: "translate-x-[-2px] translate-y-[1px] scale-[1.68]",
    accent: "blue",
    points: [
      "Website Development",
      "Web Applications",
      "E-commerce Solutions",
      "Maintenance & Support",
    ],
    cta: "Explore ITBuddy",
    href: "/it-buddy",
  },
  {
    name: "DISCOUNT BUDDY",
    subtitle: "Restaurant Discount Platform",
    copy: "We connect hungry customers with the best restaurant deals across the UK and help restaurants increase footfall and grow their business exponentially.",
    logo: "/images/discount_buddy_logo.png",
    logoScale: "translate-x-[-1px] translate-y-[1px] scale-[1.38]",
    accent: "pink",
    points: [
      "Exclusive Restaurant Deals",
      "More Footfall & Visibility",
      "Easy Partner Onboarding",
      "Targeted Customer Reach",
    ],
    cta: "Explore Discount Buddy",
    href: "/discount-buddy",
  }
] as const;

const solutionCardStyles = {
  purple: {
    card: "border-[#EFE4FF] bg-[#F7F0FF] shadow-[0_22px_55px_rgba(108,59,255,0.10)]",
    glow: "bg-[#8A3FFC]/14",
    text: "text-[#6C24D9]",
    check: "text-[#6C24D9]",
    button: "border-[#7B2CDE]/35 text-[#6C24D9] hover:bg-[#FBF6FF]",
    hoverShadow: "hover:shadow-[0_34px_90px_rgba(108,59,255,0.20)]",
  },
  blue: {
    card: "border-[#DCEBFF] bg-[#EEF6FF] shadow-[0_22px_55px_rgba(33,139,255,0.10)]",
    glow: "bg-[#218BFF]/14",
    text: "text-[#1276D8]",
    check: "text-[#1276D8]",
    button: "border-[#218BFF]/35 text-[#1276D8] hover:bg-[#F6FAFF]",
    hoverShadow: "hover:shadow-[0_34px_90px_rgba(33,139,255,0.20)]",
  },
  pink: {
    card: "border-[#FFD5E5] bg-[#FFF5F8] shadow-[0_22px_55px_rgba(199,24,136,0.10)]",
    glow: "bg-[#C71888]/14",
    text: "text-[#C71888]",
    check: "text-[#C71888]",
    button: "border-[#C71888]/30 text-[#C71888] hover:bg-[#FFF0F6]",
    hoverShadow: "hover:shadow-[0_34px_90px_rgba(199,24,136,0.20)]",
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
    color: "#C71888",
  },
  {
    title: "Our Values",
    text: "Integrity, innovation, performance and customer success.",
    icon: HeartHandshake,
    color: "#FF7A00",
  },
];

const testimonials = [
  { brand: "BeeBlend UK", quote: "MarketBuddy helped us grow our reach and engagement significantly. Fantastic team." },
  { brand: "Pizza 4 You", quote: "Discount Buddy brought new customers within weeks. It's a game changer for our footfall." },
  { brand: "Bollywood Kingdom", quote: "Great experience with influencer campaigns. Very professional and creative execution." },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We analyze your business goals and market position to find growth opportunities." },
  { step: "02", title: "Strategy", desc: "Crafting a bespoke roadmap across marketing and tech for your brand's growth." },
  { step: "03", title: "Execution", desc: "Deploying targeted campaigns and robust technical solutions." },
  { step: "04", title: "Growth", desc: "Scaling results through continuous optimization and data-driven insights." },
];

const featuredWork = [
  { title: "BeeBlend UK", category: "Brand Expansion & Influencers", image: "/images/influencer_strategy.png", slug: "local-brand-lead-generation" },
  { title: "Pizza 4 You", category: "App Launch & Footfall", image: "/images/restaurant_success.png", slug: "restaurant-visibility-growth" },
];

function SectionTitle({ eyebrow, title, className = "" }: { eyebrow?: string; title: ReactNode, className?: string }) {
  return (
    <div className={`mx-auto mb-8 max-w-3xl text-center lg:mb-12 ${className}`}>
      {eyebrow && <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-[var(--color-brand-purple)]">{eyebrow}</p>}
      <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-tight text-slate-900 tracking-tight">{title}</h2>
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
      className={`gradient-button inline-flex items-center justify-center gap-3 rounded-full px-8 py-3.5 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {children}
      <ArrowRight size={18} />
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
  accent: "purple" | "blue" | "pink";
  scale?: string;
}) {
  const accentStyles = {
    purple: "border-[#E7D8FF] shadow-[0_10px_24px_rgba(108,59,255,0.15)]",
    blue: "border-[#CFE6FF] shadow-[0_10px_24px_rgba(33,139,255,0.15)]",
    pink: "border-[#FFD5E5] shadow-[0_10px_24px_rgba(199,24,136,0.16)]",
  }[accent];

  return (
    <div className={`relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-white transition-transform duration-300 group-hover:scale-110 ${accentStyles}`}>
      <img
        src={src}
        alt={alt}
        className={`h-[82%] w-[82%] object-contain ${scale}`}
        loading="eager"
      />
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    if (window.location.hash === "#our-solutions") {
      setTimeout(() => {
        const section = document.getElementById("our-solutions");
        if (section) {
          const offset = 78;
          const top = section.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 150);
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://markitupgroup.com/#organization",
        "name": "MarkitUp Group Limited",
        "url": "https://markitupgroup.com",
        "logo": "https://markitupgroup.com/images/markitbuddy_logo.png",
        "address": { "@type": "PostalAddress", "addressCountry": "GB" },
        "sameAs": ["https://www.linkedin.com/company/markitupgroup"]
      },
      {
        "@type": "WebSite",
        "@id": "https://markitupgroup.com/#website",
        "url": "https://markitupgroup.com",
        "name": "MarkitUp Group",
        "publisher": { "@id": "https://markitupgroup.com/#organization" },
        "hasPart": [
          {
            "@type": "WebPage",
            "name": "Market Buddy",
            "url": "https://markitupgroup.com/market-buddy",
            "description": "Social Media Marketing and Influencer campaigns by MarkitUp Group."
          },
          {
            "@type": "WebPage",
            "name": "IT Buddy",
            "url": "https://markitupgroup.com/it-buddy",
            "description": "Premium IT Services, Web & App Development by MarkitUp Group."
          },
          {
            "@type": "WebPage",
            "name": "Discount Buddy",
            "url": "https://markitupgroup.com/discount-buddy",
            "description": "Restaurant Deals, Booking, and Promotion Platform by MarkitUp Group."
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#0F172A] selection:bg-[#6C3BFF]/20 selection:text-[#0F172A]">
      <SEOHead
        title="MarkitUp Group | Digital Marketing & IT Solutions Agency UK"
        description="MarkitUp Group is a top UK digital agency offering comprehensive digital transformation, marketing solutions, web development, and influencer strategies to empower businesses."
        keywords="Digital Marketing Agency UK, IT Solutions Agency UK, Comprehensive Digital Transformation, tech agency London, MarkitUp Group, SEO, web development"
        canonical="https://markitupgroup.com/"
        structuredData={structuredData}
      />
      <Header />

      <main>
        {/* HERO SECTION - Height adjusted to fit exactly 1 view on desktop */}
        <section className="relative overflow-hidden bg-white lg:min-h-[calc(100vh-72px)] flex flex-col justify-between pb-8 lg:pb-12">
          <div className="relative grid w-full flex-grow lg:grid-cols-[45%_55%] xl:grid-cols-[40%_60%] h-full">
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="relative z-10 px-5 pt-12 pb-16 sm:px-8 lg:px-12 lg:pt-16 lg:pb-24 xl:pl-[4.5rem]"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-bold shadow-sm mb-5">
                <span className="brand-gradient-text">
                  UK Based. Growth Focused.
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="max-w-2xl text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold leading-[1.05] text-slate-900 tracking-tight mb-4">
                Building Brands.<br />
                Driving <span className="brand-gradient-text">Growth.</span><br />
                Empowering Businesses.
              </motion.h1>
              
              <motion.p variants={fadeUp} className="max-w-[500px] text-[15px] leading-relaxed text-[#0F172A] mb-6 font-medium">
                MarkitUp Group is a UK-based marketing, technology and digital growth company delivering real results through specialised solutions.
              </motion.p>
              
              <motion.div variants={fadeUp}>
                <GradientButton
                  href="/#our-solutions"
                  onClick={(e) => {
                    const section = document.getElementById("our-solutions");
                    if (section) {
                      e.preventDefault();
                      const offset = 78;
                      const top = section.getBoundingClientRect().top + window.scrollY - offset;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }}
                >
                  Explore Solutions
                </GradientButton>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}
              className="group absolute inset-0 z-0 overflow-hidden lg:relative lg:h-full lg:min-h-[31.25rem]"
            >
              <img
                src={heroImage}
                alt="Tower Bridge and London skyline"
                className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-[75%_center] transition-transform duration-[1800ms] ease-out group-hover:scale-[1.07] lg:object-right"
              />
              <div className="absolute inset-0 bg-white/85 lg:hidden" />
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
              <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            </motion.div>
          </div>
          
          {/* STATS SECTION INJECTED INTO BOTTOM OF HERO VIEW */}
          <div className="relative z-20 mx-5 sm:mx-8 lg:mx-12 lg:-mt-12 xl:mx-[4.5rem]">
            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp}
              className="grid overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)] lg:grid-cols-[1.6fr_1fr]"
            >
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 py-5 sm:gap-y-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[#E5E7EB] lg:py-0">
                {stats.map(({ value, label, detail, icon: Icon, color }) => (
                  <div key={label} className="group flex flex-col items-center justify-center gap-1.5 px-3 py-5 text-center transition-all duration-300">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 shadow-sm border border-slate-100 transition-transform duration-300 group-hover:scale-110 mb-1" style={{ color }}>
                      <Icon size={20} />
                    </div>
                    <p className="text-2xl font-black leading-none text-[#0F172A]">{value}</p>
                    <p className="mt-0.5 text-[11px] font-bold text-slate-500 uppercase tracking-wide">{label}</p>
                  </div>
                ))}
              </div>
              
              <div className="relative flex flex-col justify-center border-t border-[#E5E7EB] bg-slate-50/50 px-6 py-6 overflow-hidden lg:border-l lg:border-t-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,59,255,0.03),transparent_100%)]" />
                <p className="relative mb-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#64748B]">
                  Trusted by Leading Brands
                </p>
                <div className="relative flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                  {trustedBrands.map((brand) => (
                    <div key={brand} className="group relative flex cursor-default items-center justify-center">
                      <span className="relative text-lg font-black tracking-tight text-[#94A3B8] transition-colors duration-300 group-hover:text-slate-800">
                        {brand}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SOLUTIONS SECTION - Fits perfectly into 1 view height */}
        <section id="our-solutions" className="bg-[#FAFAFA] flex flex-col justify-center lg:min-h-[100vh] py-16 lg:py-0 border-t border-slate-100">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <SectionTitle 
              eyebrow="Our Ecosystem" 
              title={
                <>Three Buddies. One Goal — <span className="brand-gradient-text">Your Growth.</span></>
              } 
            />
            
            <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
              {solutionCards.map((card, i) => {
                const style = solutionCardStyles[card.accent];
                return (
                  <motion.article
                    key={card.name}
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                    className={`group relative flex flex-col overflow-hidden rounded-[2rem] border p-6 transition-all duration-500 hover:-translate-y-2 ${style.card} ${style.hoverShadow}`}
                  >
                    <div className={`absolute right-0 top-0 size-32 rounded-full blur-3xl ${style.glow} transition-all duration-500 group-hover:scale-150 group-hover:opacity-60`} />
                    
                    <div className="relative z-10 mb-6 flex items-center gap-3">
                      <SolutionLogo src={card.logo} alt={`${card.name} logo`} accent={card.accent} scale={card.logoScale} />
                      <div>
                        <h3 className="text-xl font-black leading-none text-slate-900">{card.name}</h3>
                        <p className={`mt-1 text-[11px] font-extrabold uppercase tracking-wide ${style.text}`}>{card.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="relative z-10 mb-6 text-[14px] leading-relaxed text-slate-700 font-medium h-[84px]">{card.copy}</p>
                    
                    <ul className="relative z-10 mb-8 flex-1 grid gap-2.5">
                      {card.points.map((point) => (
                         <li key={point} className="flex items-start gap-2.5 text-[13.5px] font-semibold text-slate-700">
                          <Check size={16} className={`${style.check} shrink-0 mt-0.5`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href={card.href}
                      className={`relative z-10 mt-auto inline-flex w-fit items-center gap-2 rounded-lg border bg-white px-5 py-2.5 text-[13px] font-bold transition-all duration-300 group-hover:gap-3 ${style.button}`}
                    >
                      {card.cta} <ArrowRight size={16} />
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW WE WORK - Redesigned for better space usage and less 'boring' */}
        <section className="bg-white flex flex-col justify-center lg:min-h-[90vh] py-16 lg:py-0 border-t border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(108,59,255,0.04),transparent_70%)] pointer-events-none" />
          
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem] relative z-10">
            <div className="grid gap-12 lg:grid-cols-[40%_1fr] lg:gap-20 items-center">
              
              {/* Left Side: Sticky/Static Content */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="relative">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-[#6C3BFF]">How We Work</p>
                <h2 className="mb-6 text-[clamp(2rem,3vw,3rem)] font-extrabold leading-[1.1] text-slate-900 tracking-tight">
                  A Proven Process For <span className="brand-gradient-text">Predictable Growth.</span>
                </h2>
                <p className="mb-8 text-[15px] leading-relaxed text-slate-600 font-medium">
                  We don't rely on guesswork. Our methodology is built on data, strategic execution, and continuous optimization to ensure your business scales efficiently and sustainably.
                </p>
                <GradientButton href="/contact">Start Your Journey</GradientButton>
              </motion.div>

              {/* Right Side: Vertical Timeline */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="relative">
                {/* Vertical connecting line */}
                <div className="absolute left-[27px] top-[40px] bottom-[40px] w-0.5 bg-gradient-to-b from-[#6C3BFF]/20 via-[#C71888]/20 to-transparent hidden sm:block" />
                
                <div className="flex flex-col gap-6 sm:gap-10">
                  {processSteps.map(({ step, title, desc }, index) => (
                    <motion.div variants={fadeUp} key={step} className="group relative flex gap-6 sm:gap-8">
                      {/* Number/Icon Bubble */}
                      <div className="relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_10px_30px_rgba(108,59,255,0.12)] border border-[#EFE4FF] text-[#6C3BFF] font-black text-xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#F7F0FF] z-10">
                        {step}
                      </div>
                      
                      {/* Content */}
                      <div className="flex flex-col justify-center pb-2">
                        <h3 className="mb-2 text-xl font-black text-slate-900 transition-colors duration-300 group-hover:text-[#6C3BFF]">{title}</h3>
                        <p className="text-[14px] leading-relaxed text-slate-600 font-medium max-w-md">{desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* FEATURED WORK - Fits in 1 view */}
        <section className="bg-[#FAFAFA] flex flex-col justify-center lg:min-h-[100vh] py-16 lg:py-0 border-t border-slate-100 relative">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <SectionTitle title="Featured Case Studies" eyebrow="Our Work" className="!mb-0 text-left !mx-0" />
              <Link href="/case-studies" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-[14px] font-bold text-slate-900 transition-all duration-300 hover:border-[#6C3BFF] hover:text-[#6C3BFF] hover:shadow-md md:mb-2">
                View All Work <ArrowRight size={16} />
              </Link>
            </div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid gap-8 md:grid-cols-2">
              {featuredWork.map(({ title, category, image, slug }) => (
                <Link key={title} href={`/case-studies#${slug}`} className="block h-full group">
                  <motion.article variants={fadeUp} className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(15,23,42,0.12)] h-full flex flex-col">
                    <div className="aspect-[16/9] overflow-hidden relative">
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-8 flex-grow">
                      <p className="mb-2 text-[11px] font-extrabold uppercase tracking-widest text-[#6C3BFF]">{category}</p>
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-black text-slate-900">{title}</h3>
                        <ArrowRight size={24} className="text-slate-300 transition-colors group-hover:text-[#6C3BFF]" />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ABOUT US - Compacted for 1 view */}
        <section className="bg-white flex flex-col justify-center lg:min-h-[90vh] py-16 lg:py-0">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <div className="grid w-full items-center gap-10 lg:grid-cols-[45%_55%]">
              <motion.div 
                initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="group relative overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(15,23,42,0.10)] border border-slate-100"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 mix-blend-multiply opacity-50" />
                <img src={aboutImage} alt="MarkitUp Group Team" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative">
                <div className="absolute -left-10 -top-10 -z-10 size-40 rounded-full bg-brand-purple/5 blur-3xl" />
                <motion.p variants={fadeUp} className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#6C3BFF]">About Us</motion.p>
                <motion.h2 variants={fadeUp} className="mb-5 text-[clamp(2rem,2.5vw,2.5rem)] font-extrabold tracking-tight text-slate-900 leading-tight">
                  Driving Innovation & <br/> Digital Excellence
                </motion.h2>
                <motion.p variants={fadeUp} className="mb-6 text-[15px] leading-relaxed text-slate-600 font-medium">
                  MarkitUp Group is a premier UK-based marketing and digital growth company. We help ambitious businesses scale through specialised solutions in marketing, technology, and customer acquisition.
                </motion.p>
                
                <div className="grid gap-3 sm:grid-cols-3">
                  {features.map(({ title, text, icon: Icon, color }, idx) => (
                    <motion.div variants={fadeUp} key={title} className="rounded-2xl border border-slate-100 bg-[#FAFAFA] p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1">
                      <div className="mb-3 flex size-10 shrink-0 items-center justify-center rounded-xl border bg-white shadow-sm transition-transform duration-300 hover:scale-110" style={{ color, borderColor: `${color}30` }}>
                        <Icon size={18} />
                      </div>
                      <h3 className="mb-1 text-[14px] font-extrabold text-slate-900">{title}</h3>
                      <p className="text-[12px] leading-relaxed text-slate-500 font-medium">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS & CTA - Combine into one view */}
        <section className="bg-[#FAFAFA] flex flex-col justify-center lg:min-h-[100vh] py-16 lg:py-0 border-y border-slate-100 relative">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <SectionTitle title="What Our Clients Say" eyebrow="TESTIMONIALS" className="mb-10" />
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid gap-5 md:grid-cols-3 mb-16">
              {testimonials.map(({ brand, quote }, index) => (
                <motion.article variants={fadeUp} key={brand} className="group flex flex-col rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex gap-1 text-[#FFC400]">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="mb-6 text-[14px] leading-relaxed text-slate-600 font-medium italic flex-grow">"{quote}"</p>
                  
                  <div className="flex items-center gap-3 mt-auto pt-5 border-t border-slate-50">
                    <div className="flex size-10 items-center justify-center rounded-full border border-slate-100 bg-slate-50 shadow-sm transition-transform group-hover:scale-105">
                      <img
                        src={index === 1 ? "/images/discount_buddy_logo.png" : index === 2 ? "/images/it_buddy_logo.png" : "/images/markitbuddy_logo.png"}
                        alt={`${brand} logo`}
                        className="h-6 w-6 object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-extrabold text-slate-900">{brand}</p>
                      <p className="text-[11px] font-bold text-slate-400">Verified Partner</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
            
            {/* CTA */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative flex w-full flex-col items-center justify-between gap-6 overflow-hidden rounded-[2.5rem] brand-gradient-bg px-8 py-10 text-white shadow-[0_30px_60px_rgba(108,59,255,0.20)] sm:px-12 md:flex-row lg:mx-auto lg:max-w-4xl"
            >
              <div className="absolute -left-12 top-1/2 size-56 -translate-y-1/2 rounded-full bg-white/20 blur-3xl pointer-events-none" />
              <div className="absolute -right-10 top-0 size-48 rounded-full bg-white/20 blur-3xl pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row items-center gap-5 text-center md:text-left z-10">
                <div className="relative flex size-16 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 shadow-xl backdrop-blur-sm">
                  <Rocket size={28} />
                </div>
                <div className="relative">
                  <h2 className="text-2xl font-black text-white md:text-3xl tracking-tight mb-1.5">Ready to Grow Your Business?</h2>
                  <p className="text-[15px] text-white/90 font-medium">
                    Let’s connect you with the right solutions and start your growth journey today.
                  </p>
                </div>
              </div>
              
              <Link href="/contact" className="relative z-10 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-bold text-[#6C3BFF] shadow-[0_10px_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
                Get In Touch <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* SEO CONTENT SECTION */}
        <SEOContentBlock title="Comprehensive Digital Transformation & Marketing Solutions in the UK">
          <p>
            As a leading <strong>Digital Marketing & IT Solutions Agency in the UK</strong>, MarkitUp Group specializes in driving organic growth and delivering scalable technology for businesses of all sizes. Our unique ecosystem—comprising MarketBuddy, ITBuddy, and Discount Buddy—provides a holistic approach to <strong>digital transformation</strong>.
          </p>
          <p>
            Whether you need expert social media management, influencer marketing, enterprise <strong>web development</strong>, or footfall-driving promotional platforms, our innovative solutions are designed to elevate your brand. Partner with us to leverage cutting-edge <strong>tech agency</strong> expertise and data-driven <strong>marketing solutions</strong> that consistently outperform the competition across London and Europe.
          </p>
        </SEOContentBlock>
      </main>

      <Footer />
    </div>
  );
}
