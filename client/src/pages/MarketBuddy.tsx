import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";
import { 
  ArrowRight, Video, Camera, Users, MessageSquare, 
  TrendingUp, Play, Heart, Send, Search, Star, ShieldCheck,
  CheckCircle2, Instagram, Facebook, Youtube, Linkedin, Twitter, Target
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ReactNode } from "react";
import emailjs from '@emailjs/browser';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "MarketBuddy - Social Media & Digital Marketing",
  "description": "MarketBuddy provides end-to-end social media marketing, content creation, influencer strategies, and lead generation.",
  "provider": {
    "@type": "Organization",
    "name": "MarkitUp Group Limited",
    "url": "https://markitupgroup.com"
  },
  "serviceType": "Digital Marketing",
  "areaServed": "GB"
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function GradientButton({ children, href, className = "" }: { children: ReactNode; href: string; className?: string }) {
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

function PlatformsSection() {
  const platforms = [
    { name: "Instagram", icon: Instagram, color: "text-[#E1306C]" },
    { name: "Facebook", icon: Facebook, color: "text-[#1877F2]" },
    { name: "YouTube", icon: Youtube, color: "text-[#FF0000]" },
    { name: "LinkedIn", icon: Linkedin, color: "text-[#0A66C2]" },
    { name: "Twitter / X", icon: Twitter, color: "text-[#1DA1F2]" },
    { name: "TikTok Ads", icon: Target, color: "text-[#000000]" },
  ];
  const duplicatedPlatforms = [...platforms, ...platforms, ...platforms];

  return (
    <section className="py-[clamp(3rem,5vw,4rem)] bg-white border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-[clamp(1.25rem,4vw,3rem)] max-w-[1440px]">
        <SectionTitle 
          eyebrow="Platforms We Master" 
          title="Omnichannel Presence for Maximum Reach" 
          description="We tailor your brand's voice and strategy across every major platform to capture attention where your audience spends their time."
        />
        
        <div className="mt-16 relative flex items-center w-full max-w-6xl mx-auto overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-33.333333%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex gap-12 sm:gap-24 items-center pr-12 sm:pr-24 w-max"
          >
            {duplicatedPlatforms.map((platform, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-4 transition-all hover:scale-110 cursor-default shrink-0">
                <platform.icon size={56} className={`${platform.color} drop-shadow-sm`} strokeWidth={1.5} />
                <span className="text-[clamp(0.8rem,1vw,0.875rem)] font-bold text-slate-700 whitespace-nowrap">{platform.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function MarketBuddy() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Split name into first and last name for the email template
    const nameParts = formData.name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

    try {
      await emailjs.send(
        "service_fsutstp",
        "template_mqvpl6o",
        {
          firstName: firstName,
          lastName: lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.business,
          service: formData.service,
          message: formData.message,
        },
        "Tnohct8f2AxCPSURl"
      );
      
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", business: "", phone: "", email: "", service: "", message: "" });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(false);
      alert("Something went wrong, please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#6C3BFF]/20 selection:text-[#0F172A]">
      <SEOHead
        title="Market Buddy by MarkitUp Group | Social Media Marketing Agency"
        description="Looking to grow your business? MarketBuddy provides expert social media marketing, instagram reels, youtube vlogs, and influencer strategies to scale your brand."
        keywords="social media influencer, instagram reels, youtube vlogs, grow your business, marketing, UGC content, influencer marketing"
        canonical="https://markitupgroup.com/market-buddy"
        structuredData={structuredData}
      />
      
      <Header 
        logoOverride="/images/markitbuddy_logo.png" 
        logoAlt="Market Buddy"
        logoHref="/market-buddy"
        ctaText="MarkitUp Group"
        ctaHref="/"
      />

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-visible bg-white pt-10 pb-12 lg:pt-12 lg:pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(108,59,255,0.06),transparent_55%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,122,0,0.05),transparent_55%)] pointer-events-none" />

          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <div className="grid min-h-[clamp(400px,50vh,600px)] w-full items-center lg:grid-cols-[55%_45%] gap-8 lg:gap-6">
              
              <motion.div 
                initial="hidden" animate="visible" variants={staggerContainer}
                className="relative z-10 lg:pr-8"
              >
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#E7D8FF] bg-white px-4 py-2 text-sm font-bold text-[#6C3BFF] shadow-sm mb-6">
                  <TrendingUp size={16} /> Your Growth, Our Mission
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="text-[clamp(2.75rem,5.5vw,5.25rem)] font-extrabold leading-[1.02] text-[#0F172A] tracking-tighter mb-6">
                  <span className="text-[#6C3BFF]">MarketBuddy</span> –<br/>
                  Social Media Marketing That Drives Growth
                </motion.h1>

                <motion.p variants={fadeUp} className="max-w-[560px] text-[clamp(1.125rem,1.5vw,1.375rem)] leading-relaxed text-slate-600 mb-10 font-medium">
                  We create scroll-stopping content, build powerful brands and turn followers into loyal customers.
                </motion.p>
                
                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
                  <GradientButton href="/contact">
                    <Send size={18} /> Talk to Our Team
                  </GradientButton>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-12 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {["AB", "CD", "EF", "GH"].map((initials, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                        {initials}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center text-[#FFB800] mb-0.5">
                      {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-sm font-medium text-slate-600">Trusted by 200+ brands</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* HERO IMAGE */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex justify-center lg:justify-end w-full"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#6C3BFF]/20 to-[#FF7A00]/20 blur-[100px] rounded-full z-0 pointer-events-none hidden lg:block"></div>
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl z-10 border border-slate-100 group mt-10 lg:mt-0">
                  <img src="/images/social_media_hero.png" alt="Marketing Agency" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Analytics Card */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#6C3BFF]/10 flex items-center justify-center text-[#6C3BFF]">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">+124% Growth</p>
                      <p className="text-xs font-medium text-slate-500">This Month</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <PlatformsSection />

        {/* SERVICES SECTION */}
        <section className="py-16 md:py-24 bg-white relative z-10 border-y border-slate-100">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <SectionTitle 
              eyebrow="WHAT WE DO" 
              title="End-to-end Solutions for Your Brand Growth" 
              description="From viral video creation to full-funnel ad campaigns, we handle every aspect of your digital presence."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(1.5rem,2.5vw,2rem)] mt-16">
              {[
                { 
                  icon: Video, title: "UGC Content Creation", desc: "Authentic content that builds trust and drives real engagement across social platforms.", 
                  color: "text-[#6C3BFF]", bg: "bg-[#6C3BFF]/10", borderHover: "hover:border-[#6C3BFF]/30", shadowHover: "hover:shadow-[0_20px_50px_-15px_rgba(108,59,255,0.15)]",
                  features: ["Sourcing authentic creators", "Scripting & storyboarding", "High-conversion hooks"]
                },
                { 
                  icon: Camera, title: "Reels & Photoshoots", desc: "High-quality reels and product photos that stop the scroll and elevate your brand image.", 
                  color: "text-[#FF7A00]", bg: "bg-[#FF7A00]/10", borderHover: "hover:border-[#FF7A00]/30", shadowHover: "hover:shadow-[0_20px_50px_-15px_rgba(255,122,0,0.15)]",
                  features: ["Viral trend adaptation", "Professional lighting & editing", "Consistent aesthetic"]
                },
                { 
                  icon: Users, title: "Influencer Marketing", desc: "Collaborate with the right influencers to amplify your brand and reach new demographics.", 
                  color: "text-[#C71888]", bg: "bg-[#C71888]/10", borderHover: "hover:border-[#C71888]/30", shadowHover: "hover:shadow-[0_20px_50px_-15px_rgba(199,24,136,0.15)]",
                  features: ["Vetted creator networks", "Campaign negotiation", "Performance tracking"]
                },
                { 
                  icon: MessageSquare, title: "Social Media Management", desc: "End-to-end strategy, content calendar, posting and community management – we handle it all.", 
                  color: "text-[#3B82F6]", bg: "bg-[#3B82F6]/10", borderHover: "hover:border-[#3B82F6]/30", shadowHover: "hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.15)]",
                  features: ["30-day content calendars", "Daily community engagement", "Analytics & reporting"]
                },
                { 
                  icon: TrendingUp, title: "Performance Ads", desc: "Rank higher, reach more and convert better with highly targeted Meta & TikTok ads.", 
                  color: "text-[#10B981]", bg: "bg-[#10B981]/10", borderHover: "hover:border-[#10B981]/30", shadowHover: "hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.15)]",
                  features: ["A/B testing creatives", "Audience retargeting", "ROAS optimization"]
                },
                { 
                  icon: Search, title: "SEO Strategy", desc: "Data-driven organic search optimization to ensure your brand is found when it matters most.", 
                  color: "text-[#F59E0B]", bg: "bg-[#F59E0B]/10", borderHover: "hover:border-[#F59E0B]/30", shadowHover: "hover:shadow-[0_20px_50px_-15px_rgba(245,158,11,0.15)]",
                  features: ["Keyword intent mapping", "On-page optimization", "High-authority link building"]
                }
              ].map((service, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-white rounded-[clamp(1.25rem,2vw,1.5rem)] p-[clamp(1.5rem,2.5vw,2.5rem)] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 transition-all flex flex-col h-full group ${service.shadowHover} ${service.borderHover} hover:-translate-y-1`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.bg} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <service.icon size={32} className={service.color} />
                  </div>
                  <h3 className="text-[clamp(1.25rem,1.5vw,1.5rem)] font-extrabold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-[clamp(0.875rem,1vw,1rem)] text-slate-600 mb-6 leading-relaxed flex-1 font-medium">{service.desc}</p>
                  
                  <ul className="space-y-3 mt-auto pt-6 border-t border-slate-50">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-[clamp(0.8rem,0.9vw,0.875rem)] font-bold text-slate-700">
                        <CheckCircle2 size={16} className={`${service.color} shrink-0`} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT THAT CONVERTS - REDESIGNED */}
        <section className="py-12 md:py-16 bg-[#FAFAFA] relative">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <div className="grid lg:grid-cols-[40%_60%] gap-8 lg:gap-10 items-center">
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <SectionTitle 
                  eyebrow="OUR APPROACH" 
                  title={<>Content That <span className="brand-gradient-text">Converts</span></>} 
                  align="left" 
                />
                <motion.p variants={fadeUp} className="text-[clamp(1rem,1.5vw,1.125rem)] text-slate-600 leading-relaxed mb-12 font-medium">
                  We blend creativity, strategy and data to create content that not only looks amazing but delivers real results. Every post is designed to build trust and drive action.
                </motion.p>

                <div className="flex flex-wrap gap-8 sm:gap-12">
                  {[
                    { icon: Play, num: "500+", label: "Reels Created", color: "text-[#6C3BFF]" },
                    { icon: TrendingUp, num: "3X", label: "Avg. Engagement", color: "text-[#FF7A00]" },
                    { icon: Heart, num: "200+", label: "Happy Brands", color: "text-[#C71888]" }
                  ].map((stat, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex flex-col items-start w-[calc(50%-1rem)] sm:w-auto">
                      <div className={`w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center ${stat.color} mb-4`}>
                        <stat.icon size={20} fill={stat.icon === Heart || stat.icon === Play ? "currentColor" : "none"} />
                      </div>
                      <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">{stat.num}</p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Bento Box Grid */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full"
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-lg group h-[18.75rem] sm:h-[25rem]">
                  <img src="/images/ugc_creation.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="UGC Content Creation" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <Video size={20} />
                      <span className="font-bold text-lg">UGC Production</span>
                    </div>
                    <p className="text-sm text-slate-200 font-medium">Authentic videos that stop the scroll.</p>
                  </div>
                </div>
                
                <div className="relative rounded-[2rem] overflow-hidden shadow-lg group h-[18.75rem] sm:h-[25rem]">
                  <img src="/images/influencer_strategy.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Influencer Strategy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <Users size={20} />
                      <span className="font-bold text-lg">Influencer Strategy</span>
                    </div>
                    <p className="text-sm text-slate-200 font-medium">Connecting you with the right audience.</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-12 md:py-16 bg-white relative">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <SectionTitle 
              eyebrow="LOVE FROM OUR CLIENTS" 
              title={<>What <span className="text-[#6C3BFF]">Brands</span> Say About <span className="text-[#FF7A00]">Us</span></>}
            />

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { name: "Ananya Sharma", role: "Co-founder, Glowera", initials: "AS", review: "MarketBuddy understood our brand perfectly. Their content and strategy helped us scale our social media like never before.", color: "text-[#6C3BFF]" },
                { name: "Rohit Mehta", role: "Marketing Head, FitFuel", initials: "RM", review: "From reels to influencer campaigns, everything was top-notch. We saw amazing engagement and real business growth.", color: "text-[#FF7A00]" },
                { name: "Neha Kapoor", role: "Founder, Posh Essentials", initials: "NK", review: "Professional, creative and result-driven team. Highly recommended for any brand serious about growth!", color: "text-[#C71888]" }
              ].map((t, i) => (
                <motion.div 
                  key={i} 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.04)] relative flex flex-col h-full"
                >
                  <div className="flex gap-1 mb-6 text-[#FFB800]">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <MessageSquare size={32} className={`absolute top-8 right-8 opacity-10 ${t.color}`} fill="currentColor" />
                  
                  <p className="text-slate-700 leading-relaxed font-medium mb-8 flex-grow">"{t.review}"</p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                      <p className="text-xs font-medium text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT / LEAD FORM */}
        <section className="py-12 md:py-16 bg-[#FAFAFA]">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <div className="grid lg:grid-cols-[40%_60%] gap-8 bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_rgba(15,23,42,0.04)] border border-slate-100">
              
              <div>
                <SectionTitle 
                  eyebrow="LET'S WORK TOGETHER" 
                  title={<>Ready to Grow Your <span className="text-[#C71888]">Brand?</span></>}
                  align="left" 
                />
                <p className="text-slate-600 mb-10 text-[clamp(1rem,1.2vw,1.125rem)] font-medium">
                  Tell us about your business and let's create magic together.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "Quick Response", desc: "We reply within 24 hours", icon: MessageSquare, color: "text-[#6C3BFF]", bg: "bg-[#6C3BFF]" },
                    { title: "Custom Strategy", desc: "Tailored solutions for your brand", icon: Search, color: "text-[#FF7A00]", bg: "bg-[#FF7A00]" },
                    { title: "Proven Results", desc: "Data-backed growth strategies", icon: TrendingUp, color: "text-[#C71888]", bg: "bg-[#C71888]" }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full ${feature.bg}/10 flex items-center justify-center ${feature.color}`}>
                        <feature.icon size={20} fill={feature.icon === MessageSquare ? "currentColor" : "none"} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-[15px]">{feature.title}</h4>
                        <p className="text-sm font-medium text-slate-500">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FAFAFA] rounded-[2rem] p-6 sm:p-10 border border-slate-100 shadow-inner relative">
                {submitted ? (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-[2rem]">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500 text-center max-w-[250px]">We've received your inquiry and will be in touch shortly.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Name</label>
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#6C3BFF]/20 transition-all font-medium text-slate-700" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Business</label>
                      <input required type="text" name="business" value={formData.business} onChange={handleChange} placeholder="Company Name" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#6C3BFF]/20 transition-all font-medium text-slate-700" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Phone</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+44 123 456 7890" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#6C3BFF]/20 transition-all font-medium text-slate-700" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#6C3BFF]/20 transition-all font-medium text-slate-700" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Service Interested In</label>
                    <select required name="service" value={formData.service} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#6C3BFF]/20 transition-all font-medium text-slate-700 appearance-none">
                      <option value="" disabled>Select a service</option>
                      <option value="UGC Content Creation">UGC Content Creation</option>
                      <option value="Reels & Photoshoots">Reels & Photoshoots</option>
                      <option value="Influencer Marketing">Influencer Marketing</option>
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="SEO & Ads">SEO & Ads</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Message</label>
                    <textarea required name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your goals..." rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#6C3BFF]/20 transition-all font-medium text-slate-700 resize-none"></textarea>
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4">
                    {isSubmitting ? "Sending..." : "Submit Inquiry"} <ArrowRight size={18} />
                  </button>
                  <p className="text-xs text-center text-slate-500 mt-4 flex items-center justify-center gap-1.5 font-medium">
                    <ShieldCheck size={14} /> Your information is 100% secure and confidential.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* SEO CONTENT & FAQ SECTION */}
        <SEOContentBlock title="Your Partner for Social Media Marketing and Business Growth in the UK">
          <p>
            If you are looking for a reliable partner to <strong>grow your business</strong>, MarketBuddy is the ultimate destination for all <strong>marketing related items</strong>. We specialize in connecting brands with the right <strong>social media influencer</strong> networks to maximize reach, authenticity, and ROI across London and the UK.
          </p>
          <p>
            In today's digital landscape, video content is king. Our team excels in producing viral <strong>instagram reels</strong> and engaging <strong>youtube vlogs</strong> that capture your audience's attention and drive conversions. Whether you need end-to-end social media management or targeted ad campaigns, we provide the marketing horsepower needed to scale your brand. Need a website to match your new traffic? Check out our <Link href="/it-buddy">ITBuddy</Link> services for expert web and app development.
          </p>

          <h3>Frequently Asked Questions</h3>
          <div>
            <h4>What makes a successful social media influencer campaign?</h4>
            <p>A successful campaign relies on authentic alignment between the brand and the creator. We vet influencers thoroughly to ensure their audience demographic matches your target market, ensuring high engagement for your <strong>instagram reels</strong> and TikTok content.</p>
          </div>
          <div>
            <h4>Do you offer B2B marketing services?</h4>
            <p>Absolutely. While we excel in consumer-facing UGC content, we also deploy robust LinkedIn and B2B lead generation strategies to help enterprise clients <strong>grow their business</strong>.</p>
          </div>
        </SEOContentBlock>
      </main>
      
      <Footer />
    </div>
  );
}
