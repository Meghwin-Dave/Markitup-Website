import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  MessageSquare, 
  Rocket, 
  CheckCircle2, 
  Monitor, 
  Layout, 
  ShoppingCart, 
  Wrench, 
  Cloud,
  Star,
  Layers,
  Smartphone,
  Globe,
  Database,
  Cpu,
  Code2,
  Server,
  ShieldCheck,
  Terminal,
  Trophy,
  Heart,
  Users,
  Search,
  PenTool,
  Code,
  Bug,
  HeartPulse,
  Landmark,
  Truck,
  GraduationCap,
  Plus,
  Minus
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";

// --- Data ---
const services = [
  {
    icon: Smartphone,
    iconBg: "bg-[#EEF6FF]",
    iconColor: "text-[#218BFF]",
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences.",
    features: ["iOS & Android App Development", "React Native & Flutter", "Intuitive UI/UX Design", "App Store Deployment"]
  },
  {
    icon: Layout,
    iconBg: "bg-[#E6F8F0]",
    iconColor: "text-[#00C271]",
    title: "Web Applications",
    description: "Powerful, custom web applications built to automate workflows and scale your business operations.",
    features: ["Custom SaaS Platforms", "Scalable Architecture", "API Development & Integration", "Secure Data Handling"]
  },
  {
    icon: Globe,
    iconBg: "bg-[#F5EFFF]",
    iconColor: "text-[#8A3FFC]",
    title: "Websites & Portals",
    description: "Modern, responsive and fast corporate websites and portals that represent your brand perfectly.",
    features: ["Custom & Responsive Design", "CMS Integration", "SEO Optimized Architecture", "High Performance"]
  },
  {
    icon: ShoppingCart,
    iconBg: "bg-[#FFF2E5]",
    iconColor: "text-[#FF7A00]",
    title: "E-commerce Solutions",
    description: "Launch and grow your online store with feature-rich, secure and scalable e-commerce platforms.",
    features: ["Custom Online Stores", "Payment Gateway Integration", "Inventory Management", "B2B & B2C Solutions"]
  },
  {
    icon: Database,
    iconBg: "bg-[#EEF2FF]",
    iconColor: "text-[#4F46E5]",
    title: "ERP & CRM Software",
    description: "Custom Enterprise Resource Planning and CRM systems to manage your entire business efficiently.",
    features: ["Custom ERP Solutions", "CRM Development", "Business Process Automation", "Real-time Analytics"]
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-[#FFF0F4]",
    iconColor: "text-[#FF2E78]",
    title: "Managed IT Services",
    description: "We keep your digital infrastructure running smoothly with timely updates, monitoring and support.",
    features: ["Application Maintenance", "Cloud Infrastructure Management", "Security Audits", "24/7 Dedicated Support"]
  }
];

const technologies = [
  {
    category: "Frontend",
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-50",
    techs: [
      { name: "React", iconUrl: "https://skillicons.dev/icons?i=react" },
      { name: "Next.js", iconUrl: "https://skillicons.dev/icons?i=nextjs" },
      { name: "Vue.js", iconUrl: "https://skillicons.dev/icons?i=vue" },
      { name: "Angular", iconUrl: "https://skillicons.dev/icons?i=angular" },
      { name: "Tailwind CSS", iconUrl: "https://skillicons.dev/icons?i=tailwind" },
      { name: "TypeScript", iconUrl: "https://skillicons.dev/icons?i=ts" }
    ]
  },
  {
    category: "Backend",
    icon: Terminal,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    techs: [
      { name: "Node.js", iconUrl: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Python", iconUrl: "https://skillicons.dev/icons?i=python" },
      { name: "Java", iconUrl: "https://skillicons.dev/icons?i=java" },
      { name: "Go", iconUrl: "https://skillicons.dev/icons?i=go" },
      { name: "PHP / Laravel", iconUrl: "https://skillicons.dev/icons?i=php" },
      { name: "C# / .NET", iconUrl: "https://skillicons.dev/icons?i=cs" }
    ]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: "text-purple-500",
    bg: "bg-purple-50",
    techs: [
      { name: "Swift (iOS)", iconUrl: "https://skillicons.dev/icons?i=swift" },
      { name: "Kotlin (Android)", iconUrl: "https://skillicons.dev/icons?i=kotlin" },
      { name: "React Native", iconUrl: "https://skillicons.dev/icons?i=react" },
      { name: "Flutter", iconUrl: "https://skillicons.dev/icons?i=flutter" }
    ]
  },
  {
    category: "Database & Cloud",
    icon: Server,
    color: "text-amber-500",
    bg: "bg-amber-50",
    techs: [
      { name: "PostgreSQL", iconUrl: "https://skillicons.dev/icons?i=postgres" },
      { name: "MongoDB", iconUrl: "https://skillicons.dev/icons?i=mongodb" },
      { name: "MySQL", iconUrl: "https://skillicons.dev/icons?i=mysql" },
      { name: "AWS", iconUrl: "https://skillicons.dev/icons?i=aws" },
      { name: "Google Cloud", iconUrl: "https://skillicons.dev/icons?i=gcp" },
      { name: "Docker", iconUrl: "https://skillicons.dev/icons?i=docker" }
    ]
  }
];

const stats = [
  { num: "50+", label: "Projects Delivered", icon: Trophy, color: "text-[#FF7A00]", bg: "bg-[#FFF2E5]" },
  { num: "99%", label: "Client Retention", icon: Heart, color: "text-[#FF2E78]", bg: "bg-[#FFF0F4]" },
  { num: "24/7", label: "Support Available", icon: ShieldCheck, color: "text-[#00C271]", bg: "bg-[#E6F8F0]" },
  { num: "10+", label: "Expert Engineers", icon: Users, color: "text-[#218BFF]", bg: "bg-[#EEF6FF]" }
];

const processSteps = [
  { title: "Discovery & Strategy", desc: "We analyze your requirements, business goals, and target audience to formulate a robust technical strategy.", icon: Search },
  { title: "UI/UX Design", desc: "Our designers create intuitive wireframes and stunning prototypes to ensure a seamless user experience.", icon: PenTool },
  { title: "Development", desc: "Using agile methodologies, our engineers build scalable, secure, and high-performance applications.", icon: Code },
  { title: "QA & Testing", desc: "We conduct rigorous testing, including automated, manual, and security audits, to ensure flawless execution.", icon: Bug },
  { title: "Launch & Support", desc: "We handle smooth deployment and offer continuous monitoring, maintenance, and scale-up support.", icon: Rocket }
];

const industries = [
  { name: "Healthcare & MedTech", icon: HeartPulse, color: "text-rose-500", bg: "bg-rose-50" },
  { name: "Finance & FinTech", icon: Landmark, color: "text-emerald-500", bg: "bg-emerald-50" },
  { name: "E-commerce & Retail", icon: ShoppingCart, color: "text-amber-500", bg: "bg-amber-50" },
  { name: "Logistics & Supply", icon: Truck, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Education & EdTech", icon: GraduationCap, color: "text-purple-500", bg: "bg-purple-50" },
];

const faqs = [
  { q: "Do you provide ongoing support after launch?", a: "Yes, we offer comprehensive maintenance and support packages. We actively monitor your applications, handle security updates, and fix any emerging issues to ensure everything runs smoothly." },
  { q: "Will we own the source code?", a: "Absolutely. Upon final payment and project completion, the intellectual property and source code are entirely transferred to you. We believe in complete transparency." },
  { q: "How do you ensure the security of our applications?", a: "Security is built into our development lifecycle. We follow industry best practices, conduct regular security audits, implement robust encryption for data at rest and in transit, and strictly adhere to compliance standards." },
  { q: "Do you sign NDAs (Non-Disclosure Agreements)?", a: "Yes, we take confidentiality very seriously. We are happy to sign NDAs before we even start discussing your ideas and requirements." },
  { q: "What is your typical project timeline?", a: "Timelines vary depending on project complexity. A simple corporate website might take 3-4 weeks, while a comprehensive ERP system or complex mobile app could take 3-6 months. We provide clear milestone timelines during the Discovery phase." }
];

// --- Shared UI Components ---
function GradientButton({ children, href, className = "" }: { children: React.ReactNode; href: string; className?: string; }) {
  return (
    <Link
      href={href}
      className={`gradient-button inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      {children}
    </Link>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string, description?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-purple)]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-slate-600 font-medium text-[clamp(0.875rem,1.2vw,1rem)]">{description}</p>}
      <span className="mx-auto mt-5 block h-1 w-16 rounded-full brand-gradient-bg" />
    </div>
  );
}

// --- Page Sections ---
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-12 pt-10 lg:pt-12 lg:pb-16">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(108,59,255,0.06),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,122,0,0.05),transparent_55%)] pointer-events-none" />
      
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
        <div className="grid min-h-[clamp(400px,50vh,600px)] w-full items-center lg:grid-cols-[50%_50%] gap-8 lg:gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 lg:pr-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-2 text-xs font-bold text-[#6C3BFF] shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse"></span>
              Your IT Partner
            </div>
            
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] text-slate-900 tracking-tight mb-6">
              <span className="block">Mobile Apps. ERPs.</span>
              <span className="block">Websites & More.</span>
              <span className="block brand-gradient-text pb-2">
                We Build It All.
              </span>
            </h1>
            
            <p className="max-w-[560px] text-[clamp(1.125rem,1.5vw,1.25rem)] leading-relaxed text-slate-600 mb-10 font-medium">
              ITBuddy is your ultimate technology partner. From high-performance mobile applications and custom ERP software, to stunning websites and e-commerce platforms, we deliver powerful IT solutions that scale your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <GradientButton href="/contact" className="px-8 py-4">
                <Rocket size={18} />
                Discuss Your Project
              </GradientButton>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0F172A] border border-slate-200 shadow-sm rounded-full font-bold hover:border-[#6C3BFF] hover:text-[#6C3BFF] transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <Code2 size={18} />
                Explore Services
              </Link>
            </div>
          </motion.div>

          <div className="relative hidden lg:flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-bl from-[#6C3BFF]/20 to-[#FF7A00]/20 blur-[100px] rounded-full z-0 pointer-events-none hidden lg:block"></div>
            
            <div className="relative w-full max-w-[850px] aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[37.5rem] flex items-center justify-center group">
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 0.2 },
                  scale: { duration: 0.8, delay: 0.2 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 } 
                }}
                src="/images/itbuddy-hero-mockup.png" 
                alt="ITBuddy Web Applications and Dashboards Mockup" 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02] mix-blend-multiply relative"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-[20%] -right-4 lg:-right-12 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 hidden sm:flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 rounded-full bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">100% Quality</p>
                  <p className="text-xs font-medium text-slate-500">Delivered on time</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-[clamp(2.5rem,4vw,3.5rem)] bg-white relative z-10 border-t border-slate-100">
      <div className="container mx-auto px-[clamp(1.25rem,4vw,3rem)] max-w-[1440px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[clamp(1rem,2vw,1.5rem)]">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#FAFAFA] rounded-3xl p-6 md:p-8 flex items-center gap-4 border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-slate-900">{stat.num}</p>
                <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wide mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-[clamp(3rem,5vw,4rem)] bg-[#FAFBFF] border-t border-slate-100">
      <div className="container mx-auto px-[clamp(1.25rem,4vw,3rem)] max-w-[1440px]">
        <SectionTitle 
          eyebrow="Our Expertise" 
          title="End-to-end IT solutions for your business" 
          description="We provide comprehensive software development services, acting as your dedicated technical partner from idea to deployment."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(1.5rem,2.5vw,2rem)] mt-8">
          {services.map((srv, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[clamp(1.25rem,2vw,1.5rem)] p-[clamp(1.5rem,2.5vw,2.5rem)] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_50px_-15px_rgba(108,59,255,0.12)] hover:border-[#E7D8FF] hover:-translate-y-1 transition-all flex flex-col h-full group"
            >
              <div className={`w-16 h-16 rounded-2xl ${srv.iconBg} ${srv.iconColor} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <srv.icon size={32} />
              </div>
              <h3 className="text-[clamp(1.25rem,1.5vw,1.5rem)] font-extrabold text-slate-900 mb-3">{srv.title}</h3>
              <p className="text-[clamp(0.875rem,1vw,1rem)] text-slate-600 mb-6 leading-relaxed flex-1 font-medium">
                {srv.description}
              </p>
              <ul className="space-y-3 mt-auto">
                {srv.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[clamp(0.8rem,0.9vw,0.875rem)] font-bold text-slate-700">
                    <CheckCircle2 size={16} className="text-[#6C3BFF] shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologiesSection() {
  const allTechs = technologies.flatMap(t => t.techs);
  const duplicatedTechs = [...allTechs, ...allTechs, ...allTechs];

  return (
    <section className="py-[clamp(3rem,5vw,4rem)] bg-white border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-[clamp(1.25rem,4vw,3rem)] max-w-[1440px]">
        <SectionTitle 
          eyebrow="Technologies We Use" 
          title="Modern Stack for Modern Solutions" 
          description="We leverage the latest and most robust technologies to build secure, scalable, and high-performance applications."
        />
        
        <div className="mt-16 relative flex items-center w-full max-w-6xl mx-auto overflow-hidden">
          
          <motion.div
            animate={{ x: ["0%", "-33.333333%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            className="flex gap-12 sm:gap-20 items-center pr-12 sm:pr-20 w-max"
          >
            {duplicatedTechs.map((tech, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-4 transition-all hover:scale-110 cursor-default shrink-0">
                <img src={tech.iconUrl} alt={tech.name} className="w-12 h-12 md:w-16 md:h-16 object-contain" loading="lazy" />
                <span className="text-[clamp(0.8rem,1vw,0.875rem)] font-bold text-slate-700 whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-[clamp(3rem,5vw,4rem)] bg-[#FAFBFF] border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-[clamp(1.25rem,4vw,3rem)] max-w-[1440px]">
        <SectionTitle 
          eyebrow="How We Work" 
          title="Our Development Process" 
          description="A structured, agile methodology to turn your ideas into successful, scalable products on time and on budget."
        />
        
        <div className="mt-12 relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-slate-200 z-0"></div>
            
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 shrink-0 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:border-[#6C3BFF] group-hover:scale-110 transition-all duration-300">
                  <step.icon size={32} className="text-[#6C3BFF]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  <span className="text-[#6C3BFF] mr-2">0{i + 1}.</span>
                  {step.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 leading-relaxed px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="py-[clamp(3rem,5vw,4rem)] bg-white border-t border-slate-100">
      <div className="container mx-auto px-[clamp(1.25rem,4vw,3rem)] max-w-[1440px]">
        <SectionTitle 
          eyebrow="Industries" 
          title="Sectors We Empower" 
          description="We deliver customized technology solutions across a wide range of industries, adapting to specific compliance and business needs."
        />
        
        <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-4xl mx-auto">
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3 bg-[#FAFAFA] border border-slate-100 rounded-full px-6 py-3 hover:shadow-md hover:border-slate-200 transition-all cursor-default"
            >
              <div className={`w-8 h-8 rounded-full ${ind.bg} ${ind.color} flex items-center justify-center`}>
                <ind.icon size={16} />
              </div>
              <span className="font-bold text-slate-800 text-[clamp(0.875rem,1vw,1rem)]">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudySection() {
  return (
    <section id="case-studies" className="py-[clamp(3.5rem,6vw,5rem)] bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#6C3BFF]/30 to-[#FF7A00]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-[clamp(1.25rem,4vw,3rem)] max-w-[1440px] relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-purple-300 font-bold text-xs uppercase tracking-widest mb-4 border border-white/15 backdrop-blur-sm">
              <Trophy size={14} className="text-amber-400" />
              Featured Engineering Case Study
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Building <span className="brand-gradient-text">Discount Buddy</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mt-4 font-medium leading-relaxed">
              How ITBuddy engineered a high-performance cross-platform mobile app, digital loyalty card system, real-time deals engine, and merchant QR validation platform from scratch.
            </p>
          </div>

          <Link
            href="/case-studies#discount-buddy"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all hover:scale-105 shrink-0"
          >
            Read Full Case Study <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center bg-white/5 border border-white/10 rounded-[2.5rem] p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-2xl">
          {/* Left Column - Product Graphic / Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl bg-gradient-to-br from-purple-900/60 to-slate-900 p-6 border border-white/10 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <img src="/images/discount_buddy_logo.png" alt="Discount Buddy Logo" className="h-10 object-contain" />
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-bold text-xs border border-purple-400/30">
                  Mobile App & SaaS Platform
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <p className="text-xl font-bold text-white">iOS & Android</p>
                  <p className="text-xs text-slate-300 font-medium mt-1">Cross-Platform App</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <p className="text-xl font-bold text-amber-400">Onboarding</p>
                  <p className="text-xs text-slate-300 font-medium mt-1">UK Merchant Partners</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <p className="text-xl font-bold text-emerald-400">QR Stamps</p>
                  <p className="text-xs text-slate-300 font-medium mt-1">Digital Loyalty Engine</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <p className="text-xl font-bold text-purple-300">Cloud API</p>
                  <p className="text-xs text-slate-300 font-medium mt-1">Scalable Architecture</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Flutter & Dart", "Firebase FCM", "Digital Loyalty Cards", "QR Stamp Engine", "REST API", "Real-Time Geo"].map((tag, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/10 text-slate-300 text-xs font-semibold border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Engineering Deliverables & Story */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-extrabold text-white">Engineering Highlights & Features Delivered</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-3">
                  <Smartphone size={20} />
                </div>
                <h4 className="font-bold text-white text-base mb-1">Cross-Platform Flutter App</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">Single codebase delivering native-level performance on both iOS App Store and Google Play Store.</p>
              </div>

              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center mb-3">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="font-bold text-white text-base mb-1">Digital Loyalty Card System</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">Digital stamp cards replacing paper punch cards with 2-second QR validation at restaurant tables.</p>
              </div>

              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-3">
                  <Database size={20} />
                </div>
                <h4 className="font-bold text-white text-base mb-1">Real-Time Deals Engine</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">Instant merchant offer publishing to manage off-peak restaurant capacity in real-time.</p>
              </div>

              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center mb-3">
                  <Rocket size={20} />
                </div>
                <h4 className="font-bold text-white text-base mb-1">Mystery Guest Feedback Module</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">Anonymous diner scorecard audit system with image upload & verifiable feedback workflows.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/discount-buddy"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6C3BFF] to-[#8A3FFC] text-white font-bold text-sm shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all"
              >
                Explore Discount Buddy Platform <ArrowRight size={16} />
              </Link>
              <Link
                href="/case-studies#discount-buddy"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 text-white font-bold text-sm border border-white/20 hover:bg-white/20 transition-all text-center"
              >
                Read Technical Breakdown
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-[clamp(3rem,5vw,4rem)] bg-[#FAFBFF] border-t border-slate-100">
      <div className="container mx-auto px-[clamp(1.25rem,4vw,3rem)] max-w-4xl">
        <SectionTitle 
          eyebrow="FAQ" 
          title="Frequently Asked Questions" 
          description="Everything you need to know about partnering with us for your next project."
        />

        <div className="mt-10 space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-2xl border ${open === i ? 'border-[#6C3BFF] shadow-md' : 'border-slate-200'} transition-all overflow-hidden`}
            >
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className={`font-bold text-[clamp(1rem,1.2vw,1.125rem)] pr-4 ${open === i ? 'text-[#6C3BFF]' : 'text-slate-900'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-colors ${open === i ? 'bg-[#EEF6FF] text-[#6C3BFF]' : 'bg-slate-50 text-slate-400'}`}>
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-slate-600 font-medium text-[clamp(0.9rem,1vw,1rem)] leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-[clamp(3rem,5vw,4rem)] bg-white">
      <div className="container mx-auto px-[clamp(1.25rem,4vw,3rem)] max-w-[1440px]">
        <div className="relative flex w-full flex-col items-center justify-between gap-6 overflow-hidden rounded-[2.5rem] brand-gradient-bg px-6 py-10 text-white shadow-xl shadow-brand-purple/20 sm:px-10 md:flex-row lg:mx-auto lg:max-w-5xl lg:px-12">
          
          <div className="absolute -left-12 top-1/2 size-52 -translate-y-1/2 rounded-full bg-white/20 blur-3xl pointer-events-none" />
          <div className="absolute -right-10 top-0 size-48 rounded-full bg-white/20 blur-3xl pointer-events-none" />

          <div className="flex items-center gap-6 relative z-10 w-full md:w-auto text-center md:text-left">
            <div className="hidden md:flex relative size-16 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 shadow-lg backdrop-blur">
              <Rocket size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl tracking-tight mb-2">
                Ready to Build Something Great?
              </h2>
              <p className="text-base text-white/90 max-w-md font-medium">
                Let's discuss how ITBuddy can help you build, scale and run your business without limits.
              </p>
            </div>
          </div>

          <div className="relative z-10 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-white text-[var(--color-brand-orange)] rounded-full font-bold text-sm shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Talk to Our Experts <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ITBuddy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ITBuddy - Software & Web Development",
    "description": "ITBuddy is a premium software development company providing custom ERP, mobile apps, websites, ecommerce platforms, and IT solutions.",
    "provider": {
      "@type": "Organization",
      "name": "MarkitUp Group Limited",
      "url": "https://markitupgroup.com"
    },
    "serviceType": "Software Development & IT Solutions",
    "areaServed": "GB"
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#6C3BFF]/20 selection:text-[#0F172A]">
      <SEOHead
        title="IT Buddy by MarkitUp Group | Premium IT Services in UK & Europe"
        description="Looking for IT related services in UK and Europe? IT Buddy provides custom ERP, mobile app development, website design, SEO, ecommerce platforms and comprehensive IT solutions."
        keywords="IT related services in uk europe, erp, mobile app, website, seo, ecommerce, software development, web applications"
        canonical="https://markitupgroup.com/it-buddy"
        structuredData={structuredData}
      />
      
      <Header 
        logoOverride="/images/it_buddy_logo.png" 
        logoAlt="IT Buddy" 
        logoHref="/it-buddy"
        ctaText="MarkitUp Group"
        ctaHref="/"
      />

      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <TechnologiesSection />
        <ProcessSection />
        <IndustriesSection />
        <CaseStudySection />
        <FAQSection />
        <FinalCTA />

        {/* SEO CONTENT & FAQ SECTION */}
        <SEOContentBlock title="Leading IT Related Services in UK & Europe">
          <p>
            When businesses need top-tier <strong>IT related services in UK Europe</strong>, they turn to IT Buddy. Whether you are looking to build a complex <strong>erp</strong> system to streamline your operations, or need a cutting-edge <strong>mobile app</strong> and <strong>website</strong>, we have the technical expertise to deliver secure and scalable solutions.
          </p>
          <p>
            Beyond development, we ensure your digital presence is optimized with robust <strong>seo</strong> strategies and powerful <strong>ecommerce</strong> platforms that drive sales. From custom software to cloud architecture, if you need <strong>any other service related to it</strong>, IT Buddy is your trusted technical partner. Need to boost customer retention at your physical store or restaurant? Check out <Link href="/discount-buddy">Discount Buddy</Link> for footfall generation.
          </p>

          <h3>Frequently Asked IT Questions</h3>
          <div>
            <h4>Do you build both iOS and Android mobile apps?</h4>
            <p>Yes. We specialize in cross-platform (React Native/Flutter) and native (Swift/Kotlin) <strong>mobile app</strong> development, ensuring your users get the best experience regardless of their device.</p>
          </div>
          <div>
            <h4>Can you migrate our legacy systems to a modern ERP?</h4>
            <p>Absolutely. Modernizing legacy systems into custom <strong>erp</strong> software is one of our core competencies. We ensure data integrity and zero downtime during the transition for businesses across the UK and Europe.</p>
          </div>
        </SEOContentBlock>
      </main>

      <Footer />
    </div>
  );
}
