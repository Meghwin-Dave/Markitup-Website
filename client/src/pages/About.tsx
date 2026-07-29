import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";
import { 
  ArrowRight, CheckCircle, Search, Lightbulb, Rocket, 
  BarChart3, ShieldCheck, Users, Target, Heart, PoundSterling, 
  PlayCircle, Eye, Compass, Check
} from "lucide-react";
import { Link } from "wouter";
import { ReactNode } from "react";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About MarkitUp Group",
  "description": "MarkitUp Group is a UK-based marketing, technology, and digital growth company specializing in SEO, app development, and influencer strategies.",
  "publisher": {
    "@type": "Organization",
    "name": "MarkitUp Group Limited",
    "logo": {
      "@type": "ImageObject",
      "url": "https://markitupgroup.com/images/markitbuddy_logo.png"
    }
  },
  "mainEntityOfPage": "https://markitupgroup.com/about"
};

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

export default function About() {
  useEffect(() => {
    if (window.location.hash === "#who-we-are" || window.location.hash === "#our-story") {
      setTimeout(() => {
        const section = document.getElementById("who-we-are");
        if (section) {
          const offset = 78; // Navbar height
          const top = section.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 150);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#6C3BFF]/20 selection:text-[#0F172A]">
      <SEOHead
        title="About MarkitUp Group | Top Tech & Marketing Agency UK"
        description="Learn about MarkitUp Group, a leading UK digital agency. We combine innovative digital marketing, cutting-edge IT solutions, and strategic growth partnerships."
        keywords="About MarkitUp Group, Top tech agency UK, innovative digital team, SaaS marketing, London marketing agency, digital transformation company"
        canonical="https://markitupgroup.com/about"
        structuredData={structuredData}
      />
      
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-visible bg-white">
          <div className="grid min-h-[clamp(350px,50vh,550px)] w-full items-center lg:grid-cols-[45%_55%]">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="relative z-10 px-5 pt-12 pb-24 sm:px-8 lg:px-12 lg:pt-12 lg:pb-28 xl:pl-[4.5rem]"
            >
              <motion.div variants={fadeUp}>
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] text-[#0F172A] tracking-tight">
                  <span className="block mb-2">About</span>
                  <span className="brand-gradient-text">MarkitUp Group</span>
                </h1>
              </motion.div>
              
              <motion.div variants={fadeUp} className="mt-6 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#FF7A00] rounded-full"></div>
                <p className="text-[clamp(1rem,1.5vw,1.25rem)] font-bold text-slate-500">A UK-Based Marketing & Digital Growth Company</p>
              </motion.div>

              <motion.p variants={fadeUp} className="mt-6 max-w-[500px] text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed text-slate-600">
                We help businesses grow smarter through marketing, technology and exclusive deals—built for the modern world.
              </motion.p>
              
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
                <GradientButton
                  href="/about#who-we-are"
                  onClick={(e) => {
                    const section = document.getElementById("who-we-are");
                    if (section) {
                      e.preventDefault();
                      const offset = 78; // Navbar height
                      const top = section.getBoundingClientRect().top + window.scrollY - offset;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }}
                >
                  Who We Are <ArrowRight size={18} />
                </GradientButton>
                <Link
                  href="/about#who-we-are"
                  onClick={(e) => {
                    const section = document.getElementById("who-we-are");
                    if (section) {
                      e.preventDefault();
                      const offset = 78; // Navbar height
                      const top = section.getBoundingClientRect().top + window.scrollY - offset;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }}
                  className="group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[clamp(0.875rem,1.5vw,1rem)] font-bold text-slate-700 transition-all hover:bg-slate-50"
                >
                  <span className="flex size-10 items-center justify-center rounded-full border border-slate-200 text-[#6C3BFF] transition-colors group-hover:border-[#6C3BFF] group-hover:bg-[#6C3BFF]/5">
                    <PlayCircle size={20} />
                  </span>
                  Our Story
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-full w-full min-h-[21.875rem] lg:min-h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent z-10 hidden lg:block" />
              <div className="absolute inset-t-0 bg-gradient-to-b from-white via-transparent to-transparent z-10 h-24 w-full block lg:hidden" />
              <img
                src="/images/modern-london-office.png"
                alt="London Skyline"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </motion.div>
          </div>
        </section>

        {/* WHO WE ARE SECTION */}
        <section id="who-we-are" className="py-12 md:py-16 lg:py-20 relative">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-white rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.04)] border border-slate-100">
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-[0_20px_50px_rgba(108,59,255,0.15)] group"
              >
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#6C3BFF] rounded-full blur-[80px] opacity-40 z-0"></div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#FF7A00] rounded-full blur-[80px] opacity-40 z-0"></div>
                <img 
                  src="/images/creative-team.png" 
                  alt="Business Team Meeting" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-10 rounded-[1.8rem] border-[6px] border-white/40"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <SectionTitle 
                  eyebrow="WHO WE ARE" 
                  title={
                    <>
                      We're a UK-based team passionate about <span className="text-[var(--color-brand-purple)]">helping businesses grow.</span>
                    </>
                  } 
                  align="left" 
                />
                
                <motion.p variants={fadeUp} className="text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed text-slate-600 mb-10">
                  MarkitUp Group brings together marketing expertise, innovative technology and value-driven solutions to help brands attract customers, streamline operations and save more.
                </motion.p>

                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { icon: Users, label: "UK Based Team", color: "text-[#6C3BFF]", bg: "bg-[#6C3BFF]/10" },
                    { icon: BarChart3, label: "100+ Clients Served", color: "text-[#C71888]", bg: "bg-[#C71888]/10" },
                    { icon: Target, label: "Results Driven", color: "text-[#FF7A00]", bg: "bg-[#FF7A00]/10" }
                  ].map((stat, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex flex-col items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                        <stat.icon size={24} />
                      </div>
                      <p className="font-bold text-slate-900 text-[clamp(0.875rem,1vw,1rem)] leading-tight">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* WHAT WE DO SECTION */}
        <section className="py-12 md:py-16 bg-white relative z-10 border-y border-slate-100">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <SectionTitle 
              eyebrow="WHAT WE DO" 
              title="A Complete Growth Ecosystem" 
              description="Three core business units working together to provide end-to-end digital growth."
            />

            <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mt-12">
              {/* MarketBuddy Card */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(108,59,255,0.12)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6C3BFF]/5 rounded-bl-full transition-all group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#6C3BFF]/10 flex items-center justify-center mb-6">
                    <img src="/images/markitbuddy_logo.png" alt="MarketBuddy" className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">MarketBuddy</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-[15px]">Digital marketing & lead generation that drives real growth.</p>
                  
                  <ul className="space-y-3 mb-10">
                    {["SEO & Ads", "Social Media Marketing", "Lead Generation"].map(item => (
                      <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <CheckCircle size={16} className="text-[#6C3BFF]" /> {item}
                      </li>
                    ))}
                  </ul>

                  <Link href="/market-buddy" className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-[#6C3BFF]/10 text-[#6C3BFF] flex items-center justify-center transition-all group-hover:bg-[#6C3BFF] group-hover:text-white">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>

              {/* ITBuddy Card */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(255,122,0,0.12)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7A00]/5 rounded-bl-full transition-all group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#FF7A00]/10 flex items-center justify-center mb-6">
                    <img src="/images/it_buddy_logo.png" alt="ITBuddy" className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">ITBuddy</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-[15px]">Smart IT solutions & automation to scale your business.</p>
                  
                  <ul className="space-y-3 mb-10">
                    {["Web & App Development", "Automation & Integrations", "IT Support & Maintenance"].map(item => (
                      <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <CheckCircle size={16} className="text-[#FF7A00]" /> {item}
                      </li>
                    ))}
                  </ul>

                  <Link href="/it-buddy" className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center transition-all group-hover:bg-[#FF7A00] group-hover:text-white">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>

              {/* DiscountBuddy Card */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(199,24,136,0.12)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C71888]/5 rounded-bl-full transition-all group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#C71888]/10 flex items-center justify-center mb-6">
                    <img src="/images/discount_buddy_logo.png" alt="DiscountBuddy" className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">DiscountBuddy</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-[15px]">Exclusive deals & savings on the tools and services you use.</p>
                  
                  <ul className="space-y-3 mb-10">
                    {["Discounted Subscriptions", "Business Tools & SaaS Deals", "Save More, Grow More"].map(item => (
                      <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <CheckCircle size={16} className="text-[#C71888]" /> {item}
                      </li>
                    ))}
                  </ul>

                  <Link href="/discount-buddy" className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-[#C71888]/10 text-[#C71888] flex items-center justify-center transition-all group-hover:bg-[#C71888] group-hover:text-white">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OUR APPROACH SECTION */}
        <section className="py-12 md:py-16 bg-[#FAFAFA] relative">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <SectionTitle eyebrow="OUR APPROACH" title="A Proven Process for Growth" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16 relative">
              {[
                { icon: Search, title: "Understand", desc: "We learn your goals, audience and business challenges.", color: "text-[#6C3BFF]", bg: "bg-[#6C3BFF]/10", shadow: "shadow-[0_20px_50px_rgba(108,59,255,0.1)]" },
                { icon: Lightbulb, title: "Strategise", desc: "We create a customised plan that fits your business.", color: "text-[#C71888]", bg: "bg-[#C71888]/10", shadow: "shadow-[0_20px_50px_rgba(199,24,136,0.1)]" },
                { icon: Rocket, title: "Implement", desc: "We execute with precision using the right tools.", color: "text-[#FF7A00]", bg: "bg-[#FF7A00]/10", shadow: "shadow-[0_20px_50px_rgba(255,122,0,0.1)]" },
                { icon: BarChart3, title: "Optimise", desc: "We measure, refine and scale for continuous growth.", color: "text-[#D4147F]", bg: "bg-[#D4147F]/10", shadow: "shadow-[0_20px_50px_rgba(212,20,127,0.1)]" }
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className={`relative z-10 flex flex-col items-center text-center group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:${step.shadow}`}
                >
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${step.bg} ${step.color} mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <step.icon size={36} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-12 md:py-16 bg-white relative border-y border-slate-100">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <SectionTitle eyebrow="WHY CHOOSE US" title="The MarkitUp Advantage" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-10">
              {[
                { icon: ShieldCheck, title: "UK Based & Trusted", desc: "Locally grounded expertise you can count on.", color: "text-[#6C3BFF]" },
                { icon: Users, title: "Experienced Pros", desc: "Top talent driving your business success.", color: "text-[#C71888]" },
                { icon: Target, title: "Results Focused", desc: "We measure our success by your growth.", color: "text-[#FF7A00]" },
                { icon: Heart, title: "Customer First", desc: "Your goals are our primary mission.", color: "text-[#ec4899]" },
                { icon: PoundSterling, title: "Value Driven", desc: "Maximum ROI for your marketing investment.", color: "text-[#10b981]" },
                { icon: Eye, title: "Transparent Reporting", desc: "Clear analytics with no hidden fees or jargon.", color: "text-[#3b82f6]" }
              ].map((feature, i) => (
                <motion.div 
                  key={i} 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="flex flex-col items-start p-8 rounded-[2rem] bg-[#FAFAFA] hover:bg-white transition-all duration-300 border border-transparent hover:border-slate-200 hover:shadow-xl hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={26} className={feature.color} />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-xl mb-3">{feature.title}</h4>
                  <p className="text-[15px] text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VISION & MISSION SECTION */}
        <section className="py-12 md:py-16 bg-[#FAFAFA] relative">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              
              {/* Vision Card */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-gradient-to-br from-[#F5F0FF] to-white rounded-[2.5rem] p-10 lg:p-14 border border-[#EBE3FF] relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <p className="text-sm font-extrabold uppercase tracking-widest text-[#6C3BFF] mb-6">OUR VISION</p>
                  <p className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-slate-900 leading-tight mb-8">
                    <span className="text-5xl font-serif text-[#6C3BFF] leading-[0] mr-2 opacity-40">"</span>
                    To empower businesses globally with smart marketing, technology and savings that create lasting growth and success.
                  </p>
                </div>
                <div className="relative h-[200px] mt-4 flex justify-end items-end">
                  <div className="w-48 h-48 bg-[#6C3BFF]/10 rounded-full blur-[40px] absolute bottom-0 right-0"></div>
                  <Compass size={140} className="text-[#6C3BFF] opacity-10 absolute -bottom-10 -right-4 transform group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-gradient-to-br from-[#FFF5F0] to-white rounded-[2.5rem] p-10 lg:p-14 border border-[#FFEBE0] relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <p className="text-sm font-extrabold uppercase tracking-widest text-[#FF7A00] mb-6">OUR MISSION</p>
                  <p className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-slate-900 leading-tight mb-8">
                    To deliver simple, effective and affordable solutions that help businesses attract customers, work smarter and save more every day.
                  </p>
                </div>
                <div className="relative h-[200px] mt-4 flex justify-end items-end">
                  <div className="w-48 h-48 bg-[#FF7A00]/10 rounded-full blur-[40px] absolute bottom-0 right-0"></div>
                  <Target size={140} className="text-[#FF7A00] opacity-10 absolute -bottom-10 -right-4 transform group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-12 lg:py-16 bg-white pb-20 lg:pb-24">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative flex w-full flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl brand-gradient-bg px-6 py-10 text-white shadow-xl shadow-brand-purple/20 sm:px-10 md:flex-row lg:mx-auto lg:max-w-5xl lg:px-12"
            >
              <div className="absolute -left-12 top-1/2 size-52 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -right-10 top-0 size-48 rounded-full bg-white/20 blur-3xl" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 w-full">
                <div className="max-w-xl text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4 tracking-tight">
                    Let's Build Your<br/>Growth System
                  </h2>
                  <p className="text-white/90 text-base md:text-lg mb-8">
                    Ready to grow your business with MarkitUp Group?<br className="hidden md:block" />
                    Let's talk about how we can help you achieve more.
                  </p>
                </div>
                
                <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-[var(--color-brand-purple)] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-slate-50"
                  >
                    Talk to Our Team <ArrowRight size={18} />
                  </Link>
                  <p className="text-sm text-white/90 flex items-center gap-2 font-medium">
                    <Check size={16} /> No obligation. Just a friendly chat.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO CONTENT SECTION */}
        <SEOContentBlock title="A Leading Digital Marketing & Tech Agency in the UK">
          <p>
            Since our inception, MarkitUp Group has been focused on one primary goal: becoming the <strong>top tech agency in the UK</strong> for comprehensive digital growth. Our history is built on a foundation of an <strong>innovative digital team</strong> that bridges the gap between creative marketing strategies and robust enterprise software development.
          </p>
          <p>
            If you want to <strong>grow your business</strong>, our Market Buddy platform provides everything from <strong>marketing related items</strong> to top-tier <strong>social media influencer</strong> campaigns, viral <strong>instagram reels</strong>, and <strong>youtube vlogs</strong>. For the tech side, IT Buddy delivers <strong>IT related services in UK Europe</strong>, building custom <strong>erp</strong> software, robust <strong>mobile app</strong> development, high-converting <strong>website</strong> designs, technical <strong>seo</strong>, and secure <strong>ecommerce</strong> platforms—or <strong>any other service related to it</strong>.
          </p>
          <p>
            Additionally, our Discount Buddy platform caters to the hospitality sector, ensuring <strong>restaurant ease of managements</strong> through a seamless <strong>booking system</strong>, effective <strong>loyalty management</strong>, powerful <strong>restaurant promotion</strong> tools, and flexible <strong>deals addition</strong> to keep customers coming back.
          </p>
        </SEOContentBlock>
      </main>
      
      <Footer />
    </div>
  );
}
