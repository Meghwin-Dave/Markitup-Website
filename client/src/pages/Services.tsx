import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";
import { ArrowRight, Code, TrendingUp, Users, Zap, CheckCircle2, PlayCircle, BarChart3, Check } from "lucide-react";
import { Link } from "wouter";
import { ReactNode } from "react";

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

function GradientButton({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`gradient-button inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      {children}
    </Link>
  );
}

function SectionTitle({ eyebrow, title, description, align = "center" }: { eyebrow: string; title: ReactNode; description?: string; align?: "left" | "center" }) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto" : "text-left"}`}>
      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-purple)]">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-base text-slate-600 leading-relaxed ${align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

const services = [
  {
    title: "Digital Marketing",
    description: "Build a powerful online presence and connect with your audience through data-driven modern marketing strategies.",
    details: ["Social media marketing", "Content creation & strategy", "Brand positioning", "Performance campaign management"],
    accentColor: "text-[#6C3BFF]",
    accentBg: "bg-[#6C3BFF]/10",
    shadowHover: "hover:shadow-[0_20px_50px_rgba(108,59,255,0.15)]",
    icon: Zap,
  },
  {
    title: "Business Promotion",
    description: "Accelerate your growth with targeted promotions designed to increase customer engagement and drive immediate sales.",
    details: ["Targeted localized campaigns", "Customer engagement strategy", "Offer & discount promotion", "Visibility scaling"],
    accentColor: "text-[#FF7A00]",
    accentBg: "bg-[#FF7A00]/10",
    shadowHover: "hover:shadow-[0_20px_50px_rgba(255,122,0,0.15)]",
    icon: TrendingUp,
  },
  {
    title: "Lead Generation",
    description: "Attract and convert high-quality prospects into paying customers using our proven digital acquisition funnels.",
    details: ["High-intent campaign planning", "B2B & B2C audience targeting", "Funnel optimization", "Customer acquisition scaling"],
    accentColor: "text-[#C71888]",
    accentBg: "bg-[#C71888]/10",
    shadowHover: "hover:shadow-[0_20px_50px_rgba(199,24,136,0.15)]",
    icon: Users,
  },
  {
    title: "Technology Solutions",
    description: "Strengthen your digital infrastructure with custom website development, automation tools, and smart IT consulting.",
    details: ["Custom website development", "Web & mobile platforms", "Workflow automation tools", "Strategic IT consulting"],
    accentColor: "text-[#10b981]",
    accentBg: "bg-[#10b981]/10",
    shadowHover: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]",
    icon: Code,
  },
];

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Marketing and Business Growth Services",
    provider: {
      "@type": "Organization",
      name: "MarkitUp Group Limited",
      url: "https://markitupgroup.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#6C3BFF]/20 selection:text-[#0F172A]">
      <SEOHead
        title="Services | Marketing and Digital Growth Services | MarkitUp Group"
        description="Explore MarkitUp Group services including digital marketing, business promotion, lead generation, and technology solutions for business growth."
        keywords="MarkitUp Group services, digital marketing, business promotion, lead generation, technology solutions"
        canonical="https://markitupgroup.com/services"
        ogTitle="Services | MarkitUp Group"
        ogDescription="Digital marketing, business promotion, lead generation, and technology solutions for business growth."
        ogUrl="https://markitupgroup.com/services"
        twitterTitle="Services | MarkitUp Group"
        twitterDescription="Explore marketing and digital growth services from MarkitUp Group."
        structuredData={structuredData}
      />
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-visible bg-white pt-8 pb-12 lg:pt-12 lg:pb-16 border-b border-slate-100">
          <div className="grid min-h-[clamp(350px,50vh,550px)] w-full items-center lg:grid-cols-[50%_50%]">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="relative z-10 px-5 py-12 sm:px-8 lg:px-12 xl:pl-[72px]"
            >
              <motion.div variants={fadeUp}>
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-purple)]">Our Services</p>
                <h1 className="text-[clamp(2.5rem,4.5vw,4rem)] font-extrabold leading-[1.1] text-[#0F172A] tracking-tight mb-6">
                  Marketing and <br/>
                  <span className="brand-gradient-text">Digital Growth</span>
                </h1>
              </motion.div>
              
              <motion.p variants={fadeUp} className="max-w-[540px] text-[clamp(1rem,1.25vw,1.125rem)] leading-relaxed text-slate-600 mb-10">
                MarkitUp Group provides end-to-end marketing, promotional, and technology services designed to help businesses scale faster, attract more customers, and dominate their industry.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                <GradientButton href="/contact">
                  Discuss Your Project <ArrowRight size={18} />
                </GradientButton>
                <Link
                  href="#core-services"
                  onClick={(e) => {
                    const section = document.getElementById("core-services");
                    if (section) {
                      e.preventDefault();
                      const offset = 78;
                      const top = section.getBoundingClientRect().top + window.scrollY - offset;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }}
                  className="group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[clamp(0.875rem,1.5vw,1rem)] font-bold text-slate-700 transition-all hover:bg-slate-50 border border-slate-200"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-full w-full min-h-[350px] lg:min-h-full p-6 lg:p-12"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 hidden lg:block" />
              <div className="absolute inset-t-0 bg-gradient-to-b from-white via-transparent to-transparent z-10 h-24 w-full block lg:hidden" />
              
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-purple-500/20">
                <img
                  src="/images/abstract-services.png"
                  alt="Abstract Services Visualization"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section id="core-services" className="py-16 md:py-24 bg-[#FAFAFA] relative">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[72px]">
            <SectionTitle 
              eyebrow="CORE SERVICES" 
              title="Everything You Need to Grow" 
              description="From building a beautiful website to driving thousands of qualified leads, we provide the full stack of growth services."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                  className={`group relative bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 ${service.shadowHover} overflow-hidden flex flex-col h-full`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.accentBg} ${service.accentColor} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <service.icon size={32} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto pt-6 border-t border-slate-100">
                      {service.details.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className={`${service.accentColor} flex-shrink-0 mt-0.5`} />
                          <span className="text-slate-700 font-semibold text-sm leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BUSINESS UNITS SECTION */}
        <section className="py-16 md:py-24 bg-white border-t border-slate-100">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[72px]">
            <SectionTitle 
              eyebrow="BUSINESS UNITS" 
              title={
                <>
                  Explore the <span className="brand-gradient-text">MarkitUp Ecosystem</span>
                </>
              }
              description="Our dedicated platforms designed to handle specific aspects of your business growth."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Market Buddy",
                  href: "/market-buddy",
                  description: "Expert digital marketing services for brand visibility, positioning, and scalable growth.",
                  accent: "text-[#6C3BFF]",
                  bg: "bg-[#6C3BFF]/10",
                  borderHover: "hover:border-[#6C3BFF]",
                  shadowHover: "hover:shadow-[0_20px_50px_rgba(108,59,255,0.12)]",
                  logo: "/images/markitbuddy_logo.png"
                },
                {
                  title: "Discount Buddy",
                  href: "/discount-buddy",
                  description: "A powerful promotion platform connecting businesses with eager customers through exclusive offers.",
                  accent: "text-[#C71888]",
                  bg: "bg-[#C71888]/10",
                  borderHover: "hover:border-[#C71888]",
                  shadowHover: "hover:shadow-[0_20px_50px_rgba(199,24,136,0.12)]",
                  logo: "/images/discount_buddy_logo.png"
                },
                {
                  title: "IT Buddy",
                  href: "/it-buddy",
                  description: "Custom technology development, smart automation, and digital infrastructure for modern businesses.",
                  accent: "text-[#FF7A00]",
                  bg: "bg-[#FF7A00]/10",
                  borderHover: "hover:border-[#FF7A00]",
                  shadowHover: "hover:shadow-[0_20px_50px_rgba(255,122,0,0.12)]",
                  logo: "/images/it_buddy_logo.png"
                },
              ].map((unit, i) => (
                <Link
                  key={i}
                  href={unit.href}
                  className={`group relative bg-white rounded-[2rem] p-8 border-2 border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 ${unit.shadowHover} ${unit.borderHover} overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full mix-blend-multiply" style={{ backgroundColor: unit.bg.replace('bg-', '').replace('/10', '') }}></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl ${unit.bg} flex items-center justify-center mb-6`}>
                      <img src={unit.logo} alt={unit.title} className="w-10 h-10 object-contain" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{unit.title}</h3>
                    <p className="text-[15px] text-slate-600 leading-relaxed font-medium mb-8">
                      {unit.description}
                    </p>
                    <div className={`flex items-center gap-2 font-bold text-sm ${unit.accent} group-hover:gap-3 transition-all`}>
                      <span>Explore {unit.title}</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-12 lg:py-16 bg-white pb-20 lg:pb-24">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[72px]">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative flex w-full flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl brand-gradient-bg px-6 py-10 text-white shadow-xl shadow-brand-purple/20 sm:px-10 md:flex-row lg:mx-auto lg:max-w-5xl lg:px-12"
            >
              <div className="absolute -left-12 top-1/2 size-52 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -right-10 top-0 size-48 rounded-full bg-white/20 blur-3xl" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 w-full">
                <div className="max-w-xl text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4 tracking-tight">
                    Ready to Scale Your Business?
                  </h2>
                  <p className="text-white/90 text-base md:text-lg mb-8">
                    Let's discuss which services are right for your growth goals.<br className="hidden md:block" />
                    Our team is ready to build your customized strategy.
                  </p>
                </div>
                
                <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-[var(--color-brand-purple)] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-slate-50"
                  >
                    Get a Free Consultation <ArrowRight size={18} />
                  </Link>
                  <p className="text-sm text-white/90 flex items-center gap-2 font-medium">
                    <Check size={16} /> No commitment required.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO CONTENT SECTION */}
        <SEOContentBlock title="Comprehensive IT and Marketing Services in the UK">
          <p>
            MarkitUp Group is your all-in-one partner for digital growth. If you are looking to <strong>grow your business</strong>, our suite of <strong>marketing related items</strong> is tailored to increase your brand's visibility and conversion rates. Through our Market Buddy division, we connect you with top-tier <strong>social media influencer</strong> networks to craft viral <strong>instagram reels</strong> and engaging <strong>youtube vlogs</strong>.
          </p>
          <p>
            On the technology front, we offer premium <strong>IT related services in UK Europe</strong>. Whether you need an enterprise-grade <strong>erp</strong> solution, a custom <strong>mobile app</strong>, or a high-performance <strong>website</strong>, our IT Buddy team delivers. We also specialize in robust <strong>seo</strong> optimizations and comprehensive <strong>ecommerce</strong> platforms to ensure your digital storefront maximizes revenue.
          </p>
          <p>
            For the hospitality sector, our Discount Buddy platform ensures unparalleled <strong>restaurant ease of managements</strong>. It combines a seamless <strong>booking system</strong>, effective <strong>loyalty management</strong>, proactive <strong>restaurant promotion</strong>, and dynamic <strong>deals addition</strong> to keep your tables full. For <strong>any other service related to it</strong> or marketing, MarkitUp Group is here to help you scale.
          </p>
        </SEOContentBlock>

      </main>

      <Footer />
    </div>
  );
}
