import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
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
  Layers
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

// --- Data ---
const services = [
  {
    icon: Monitor,
    iconBg: "bg-[#EEF6FF]",
    iconColor: "text-[#218BFF]",
    title: "Website Development",
    description: "Modern, responsive and fast websites that represent your brand and convert visitors into customers.",
    features: ["Custom & Responsive Design", "SEO Friendly Structure", "Fast Loading & Secure", "CMS Integration"]
  },
  {
    icon: Layout,
    iconBg: "bg-[#E6F8F0]",
    iconColor: "text-[#00C271]",
    title: "Web Applications",
    description: "Powerful web applications built to automate workflows and scale your business operations.",
    features: ["Custom Web Applications", "User-friendly Interfaces", "Secure & Scalable Architecture", "API Integrations"]
  },
  {
    icon: ShoppingCart,
    iconBg: "bg-[#FFF2E5]",
    iconColor: "text-[#FF7A00]",
    title: "E-commerce Solutions",
    description: "Launch and grow your online store with feature-rich, secure and scalable e-commerce platforms.",
    features: ["Custom Online Stores", "Payment Gateway Integration", "Product & Inventory Management", "Shipping & Order Management"]
  },
  {
    icon: Wrench,
    iconBg: "bg-[#F5EFFF]",
    iconColor: "text-[#8A3FFC]",
    title: "Maintenance & Support",
    description: "We keep your systems running smoothly with timely updates, monitoring and dedicated support.",
    features: ["Website & Application Maintenance", "Bug Fixes & Updates", "Performance Monitoring", "Dedicated Support"]
  },
  {
    icon: Cloud,
    iconBg: "bg-[#EEF2FF]",
    iconColor: "text-[#4F46E5]",
    title: "Domain & Hosting",
    description: "Reliable domain registration and high-performance hosting for your websites and applications.",
    features: ["Domain Registration", "Fast & Secure Hosting", "SSL Certificates", "Daily Backups"]
  }
];

const projects = [
  {
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    tag: "Web Application",
    title: "ERP System Dashboard",
    desc: "Custom Enterprise Resource Planning system with intuitive analytics and reporting.",
    link: "/case-studies",
  },
  {
    img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=800&auto=format&fit=crop",
    tag: "Website",
    title: "EcoWaste Solutions",
    desc: "Corporate website for waste management company with service and enquiry system.",
    link: "/case-studies",
  },
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tag: "Web Application",
    title: "Sales Dashboard",
    desc: "Analytics dashboard for sales tracking, reports and team performance.",
    link: "/case-studies",
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tag: "E-commerce",
    title: "GreenHome Store",
    desc: "E-commerce store for home & garden products built with modern UX.",
    link: "/case-studies",
  }
];

const testimonials = [
  {
    quote: "ITBuddy transformed our idea into a powerful web application. Their team is professional, responsive and truly understands business needs.",
    name: "Ravi Kumar",
    role: "CEO, EcoWaste Solutions",
    avatar: "https://i.pravatar.cc/100?img=11"
  },
  {
    quote: "Our e-commerce store runs smoothly and sales have grown significantly. Great support and excellent communication throughout the project.",
    name: "Neha Sharma",
    role: "Founder, GreenHome Store",
    avatar: "https://i.pravatar.cc/100?img=5"
  },
  {
    quote: "Reliable, skilled and always available when we need them. ITBuddy is our go-to partner for all IT and development needs.",
    name: "Vikram Patel",
    role: "Operations Manager, RetailMax",
    avatar: "https://i.pravatar.cc/100?img=8"
  }
];

// --- Shared UI Components matching Home.tsx ---
function GradientButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`gradient-button inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-[0_18px_42px_rgba(108,59,255,0.28)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] ${className}`}
    >
      {children}
    </Link>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
      {eyebrow ? <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#6C3BFF]">{eyebrow}</p> : null}
      <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight text-[#0F172A]">{title}</h2>
      <span className="mx-auto mt-3 block h-0.5 w-12 rounded-full bg-gradient-to-r from-[#6C3BFF] to-[#FF7A00]" />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-visible bg-white pb-10 pt-4 lg:pb-12">
      {/* Background Glows for MarkitUp Ecosystem feel */}
      <div className="absolute top-0 right-0 w-[clamp(400px,60vw,800px)] h-[clamp(400px,60vw,800px)] bg-gradient-to-bl from-[#6C3BFF]/10 via-[#FF7A00]/5 to-transparent rounded-full blur-[clamp(50px,10vw,120px)] opacity-70 pointer-events-none -translate-y-1/4 translate-x-1/4"></div>
      
      <div className="grid min-h-[clamp(400px,50vh,600px)] w-full items-center lg:grid-cols-[45%_55%]">
        <div className="relative z-10 px-5 py-12 sm:px-8 lg:px-12 lg:py-16 xl:pl-[72px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-[linear-gradient(90deg,rgba(108,59,255,0.11),rgba(255,46,120,0.10),rgba(255,122,0,0.10))] px-4 py-2 text-xs font-extrabold text-[#6C3BFF] shadow-[0_12px_30px_rgba(108,59,255,0.12)] backdrop-blur ring-1 ring-[#F0E7FF]">
            <span className="bg-gradient-to-r from-[#6C3BFF] via-[#C71888] to-[#FF7A00] bg-clip-text text-transparent">
              IT Buddy
            </span>
          </div>
          <h1 className="mt-4 max-w-[620px] text-[clamp(2.5rem,4.5vw,3.625rem)] font-extrabold leading-[1.08] text-[#0F172A]">
            <span className="block sm:whitespace-nowrap">Build Smart.</span>
            <span className="block sm:whitespace-nowrap">Scale Fast.</span>
            <span className="block sm:whitespace-nowrap bg-gradient-to-r from-[#4A16D1] via-[#D4147F] to-[#F06416] bg-clip-text text-transparent drop-shadow-[0_6px_16px_rgba(212,20,127,0.14)]">
              Run Without Limits.
            </span>
          </h1>
          <p className="mt-5 max-w-[520px] text-[clamp(1rem,1.2vw,1.125rem)] leading-8 text-[#0F172A] font-medium">
            ITBuddy delivers powerful IT solutions that help your business grow. We build fast, secure and scalable websites, web applications and digital systems that work for you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
            <GradientButton href="/contact" className="px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(0.875rem,2vw,1.125rem)]">
              <MessageSquare size={18} />
              Talk to Our Team
            </GradientButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(0.875rem,2vw,1.125rem)] bg-white text-[#0F172A] border border-slate-200 shadow-sm rounded-full font-bold text-[clamp(0.875rem,1.2vw,1rem)] hover:border-[#6C3BFF] hover:text-[#6C3BFF] transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <Rocket size={18} />
              Start Your Project
            </Link>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[clamp(400px,40vw,600px)] flex items-center justify-center mt-8 lg:mt-0 pr-5 sm:pr-8 lg:pr-12 xl:pr-[72px]"
        >
          <div className="relative w-full h-full max-w-[850px] mx-auto group perspective-1000">
            <motion.img 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="/images/itbuddy-hero-mockup.png" 
              alt="ITBuddy Web Applications and Dashboards Mockup" 
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02] mix-blend-multiply"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-[clamp(4rem,8vw,6rem)] bg-[#FAFBFF] border-t border-slate-100">
      <div className="container mx-auto px-[clamp(1.25rem,4vw,3rem)] max-w-[1440px]">
        <SectionTitle eyebrow="What We Provide" title="End-to-end IT solutions for your business" />
        
        {/* We use a responsive grid that adjusts perfectly to screen size and zoom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(1.5rem,3vw,2rem)]">
          {services.map((srv, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-[clamp(1rem,2vw,1.5rem)] p-[clamp(1.5rem,3vw,2.5rem)] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.1)] hover:-translate-y-1 transition-all flex flex-col h-full ${i >= 3 ? "lg:col-span-1.5" : ""}`}
            >
              <div className={`w-[clamp(3rem,5vw,4rem)] h-[clamp(3rem,5vw,4rem)] rounded-2xl ${srv.iconBg} ${srv.iconColor} flex items-center justify-center mb-6`}>
                <srv.icon size={28} />
              </div>
              <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-slate-900 mb-3">{srv.title}</h3>
              <p className="text-[clamp(0.875rem,1.2vw,1rem)] text-slate-600 mb-6 leading-relaxed flex-1">
                {srv.description}
              </p>
              <ul className="space-y-3">
                {srv.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2 text-[clamp(0.8rem,1vw,0.875rem)] font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
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

function ProjectsSection() {
  return (
    <section className="py-[clamp(4rem,8vw,6rem)] bg-white">
      <div className="container mx-auto px-[clamp(1.25rem,4vw,3rem)] max-w-[1440px]">
        <SectionTitle eyebrow="Our Work" title="Recent Projects" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(1.5rem,3vw,2rem)]">
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-[clamp(1rem,2vw,1.25rem)] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col h-full"
            >
              <div className="w-full aspect-video overflow-hidden bg-slate-50">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-[clamp(1.25rem,2.5vw,1.5rem)] flex flex-col flex-1">
                <span className="text-[clamp(0.65rem,1vw,0.75rem)] font-bold uppercase tracking-wider text-blue-600 mb-2">
                  {proj.tag}
                </span>
                <h3 className="text-[clamp(1.125rem,1.5vw,1.25rem)] font-bold text-slate-900 mb-2">
                  {proj.title}
                </h3>
                <p className="text-[clamp(0.8rem,1.1vw,0.875rem)] text-slate-600 mb-5 flex-1 line-clamp-3">
                  {proj.desc}
                </p>
                <Link 
                  href={proj.link}
                  className="inline-flex items-center gap-2 text-[clamp(0.8rem,1.1vw,0.875rem)] font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  View Project <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-[clamp(4rem,8vw,6rem)] bg-[#FAFBFF] border-y border-slate-100">
      <div className="container mx-auto px-[clamp(1.25rem,4vw,3rem)] max-w-[1440px]">
        <SectionTitle eyebrow="Testimonials" title="What Our Clients Say" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1.5rem,3vw,2rem)]">
          {testimonials.map((test, i) => (
            <div 
              key={i}
              className="bg-white rounded-[clamp(1rem,2vw,1.5rem)] p-[clamp(1.5rem,3vw,2rem)] shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="flex items-center gap-1 text-amber-400 mb-5">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={16} className="fill-current" />
                ))}
              </div>
              <p className="text-[clamp(0.875rem,1.2vw,1rem)] text-slate-700 font-medium leading-relaxed mb-8 flex-1">
                "{test.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={test.avatar} 
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover bg-slate-100"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-[clamp(0.875rem,1.1vw,0.95rem)] font-bold text-slate-900">{test.name}</h4>
                  <p className="text-[clamp(0.75rem,1vw,0.8rem)] text-slate-500">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-[clamp(4rem,8vw,6rem)] bg-white">
      <div className="container mx-auto px-[clamp(1.25rem,4vw,3rem)] max-w-[1440px]">
        <div className="relative flex w-full flex-col items-center justify-between gap-7 overflow-hidden rounded-[clamp(1.5rem,3vw,2.5rem)] bg-gradient-to-r from-[#6C3BFF] via-[#B8188D] to-[#FF7A00] p-[clamp(2rem,5vw,4rem)] text-white shadow-[0_28px_75px_rgba(108,59,255,0.34)] md:flex-row">
          
          <div className="absolute -left-12 top-1/2 size-52 -translate-y-1/2 rounded-full bg-white/14 blur-3xl pointer-events-none" />
          <div className="absolute -right-10 top-0 size-48 rounded-full bg-white/12 blur-3xl pointer-events-none" />

          <div className="flex items-center gap-[clamp(1.5rem,3vw,2rem)] relative z-10 w-full md:w-auto">
            <div className="hidden sm:flex w-[clamp(4rem,6vw,5rem)] h-[clamp(4rem,6vw,5rem)] rounded-full border border-white/35 bg-white/12 shadow-[0_18px_45px_rgba(0,0,0,0.14)] backdrop-blur items-center justify-center shrink-0">
              <Rocket size={32} />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold text-white mb-3">
                Ready to Grow Your Business?
              </h2>
              <p className="text-[clamp(0.875rem,1.2vw,1rem)] text-white/90 font-medium max-w-md">
                Have a project in mind? Let's discuss how ITBuddy can help you build, scale and run your business without limits.
              </p>
            </div>
          </div>

          <div className="relative z-10 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full px-[clamp(2rem,4vw,3rem)] py-[clamp(1rem,2vw,1.25rem)] bg-white text-[#FF7A00] rounded-full font-extrabold text-[clamp(0.875rem,1.2vw,1rem)] transition-all shadow-[0_18px_45px_rgba(0,0,0,0.16)] hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03]"
            >
              Talk to Our Team <ArrowRight size={18} />
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
    "@type": "Organization",
    name: "IT Buddy",
    parentOrganization: {
      "@type": "Organization",
      name: "MarkitUp Group Limited",
      url: "https://markitupgroup.com",
    },
    description: "IT Buddy is a premium software development company providing website development, SaaS platforms, mobile apps, and IT solutions."
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-200 selection:text-blue-900">
      <SEOHead
        title="IT Buddy | Smart Software & Digital Infrastructure"
        description="IT Buddy delivers powerful IT solutions. We build fast, secure and scalable websites, web applications and digital systems that work for you."
        keywords="IT Buddy, software development, website development, SaaS, e-commerce, digital systems"
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
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
