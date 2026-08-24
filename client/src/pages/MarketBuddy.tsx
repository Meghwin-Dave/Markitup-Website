import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";
import { 
  ArrowRight, Video, Camera, Users, MessageSquare, 
  TrendingUp, Play, Heart, Send, Search, Star, ShieldCheck,
  CheckCircle2, Instagram, Facebook, Youtube, Linkedin, Sparkles,
  Megaphone, FileText, Palette, Eye, ChevronRight
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { ReactNode } from "react";
import emailjs from '@emailjs/browser';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "MarketBuddy - Social Media Marketing Agency UK",
  "description": "MarketBuddy by MarkitUp Group Ltd is a UK-based social media marketing agency providing content creation, social media management, influencer marketing, paid social advertising and SEO.",
  "provider": {
    "@type": "Organization",
    "name": "MarkitUp Group Limited",
    "url": "https://markitupgroup.com"
  },
  "serviceType": "Social Media Marketing Agency",
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

// Custom TikTok Icon
function TikTokIcon({ className = "w-6 h-6", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.18c.26 0 .5.04.73.1V9.38a6.32 6.32 0 0 0-1-.08 6.34 6.34 0 1 0 6.34 6.34V8.65a8.28 8.28 0 0 0 4.84 1.54V6.74a4.85 4.85 0 0 1-.8-.05z"/>
    </svg>
  );
}

function PlatformsSection() {
  const platforms = [
    { name: "Instagram", icon: Instagram, color: "text-[#E1306C]" },
    { name: "TikTok", icon: TikTokIcon, color: "text-slate-900" },
    { name: "Facebook", icon: Facebook, color: "text-[#1877F2]" },
    { name: "YouTube", icon: Youtube, color: "text-[#FF0000]" },
    { name: "LinkedIn", icon: Linkedin, color: "text-[#0A66C2]" },
  ];
  const duplicatedPlatforms = [...platforms, ...platforms, ...platforms, ...platforms];

  return (
    <section className="py-[clamp(3rem,5vw,4rem)] bg-white border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-[clamp(1.25rem,4vw,3rem)] max-w-[1440px]">
        <SectionTitle 
          eyebrow="Targeted Channels" 
          title="Built for the Platforms Your Customers Actually Use" 
          description="From short-form video and creator collaborations to paid campaigns and professional brand content, we build platform-specific strategies designed around where your audience spends its attention."
        />
        
        <div className="mt-12 relative flex items-center w-full max-w-6xl mx-auto overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-25%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex gap-12 sm:gap-24 items-center pr-12 sm:pr-24 w-max"
          >
            {duplicatedPlatforms.map((platform, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-4 transition-all hover:scale-110 cursor-default shrink-0">
                <platform.icon size={48} className={`${platform.color} drop-shadow-sm`} />
                <span className="text-[clamp(0.85rem,1vw,0.95rem)] font-bold text-slate-800 whitespace-nowrap">{platform.name}</span>
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

  const services = [
    {
      title: "Social Media Management",
      desc: "End-to-end management built around consistent content, audience growth and a stronger brand presence.",
      icon: MessageSquare,
      color: "text-[#6C3BFF]",
      bg: "bg-[#6C3BFF]/10",
      features: [
        "Content strategy & planning",
        "Posting & scheduling",
        "Community management",
        "Performance reporting"
      ]
    },
    {
      title: "Reels & Video Production",
      desc: "Short-form content built to capture attention and communicate the brand naturally.",
      icon: Video,
      color: "text-[#FF7A00]",
      bg: "bg-[#FF7A00]/10",
      features: [
        "Concept development",
        "Scriptwriting & hooks",
        "Professional shooting",
        "Editing & trend adaptation"
      ]
    },
    {
      title: "UGC Content Creation",
      desc: "Creator-style content that makes brands feel authentic, relatable and native to social media.",
      icon: Sparkles,
      color: "text-[#C71888]",
      bg: "bg-[#C71888]/10",
      features: [
        "UGC concepts & scripting",
        "On-camera creators",
        "Product/service storytelling",
        "Organic & ad-ready creatives"
      ]
    },
    {
      title: "Influencer Marketing",
      desc: "Connecting brands with relevant creators to reach targeted audiences through credible content.",
      icon: Users,
      color: "text-[#3B82F6]",
      bg: "bg-[#3B82F6]/10",
      features: [
        "Influencer sourcing",
        "Campaign planning",
        "Creator coordination",
        "Performance tracking"
      ]
    },
    {
      title: "Paid Social Advertising",
      desc: "Targeted campaigns designed to increase reach, enquiries, conversions and customer acquisition.",
      icon: Megaphone,
      color: "text-[#10B981]",
      bg: "bg-[#10B981]/10",
      features: [
        "Meta Ads",
        "TikTok Ads",
        "Creative testing",
        "Retargeting & optimisation"
      ]
    },
    {
      title: "Photography & Product Content",
      desc: "Professional visual assets for social media, websites, e-commerce and advertising.",
      icon: Camera,
      color: "text-[#8A3FFC]",
      bg: "bg-[#8A3FFC]/10",
      features: [
        "Product photography",
        "Food & lifestyle photography",
        "Brand photoshoots",
        "Social media assets"
      ]
    },
    {
      title: "Branding & Creative Design",
      desc: "Visual content that gives businesses a consistent and professional identity across digital channels.",
      icon: Palette,
      color: "text-[#EC4899]",
      bg: "bg-[#EC4899]/10",
      features: [
        "Social media creatives",
        "Promotional graphics",
        "Campaign assets",
        "Brand consistency"
      ]
    },
    {
      title: "SEO Strategy",
      desc: "Search-focused optimisation designed to improve online visibility and help potential customers discover the business.",
      icon: Search,
      color: "text-[#F59E0B]",
      bg: "bg-[#F59E0B]/10",
      features: [
        "Keyword research",
        "On-page optimisation",
        "Content optimisation",
        "SEO strategy"
      ]
    }
  ];

  const featuredCampaigns = [
    {
      client: "Taal & Trend Events",
      metric: "74K+ views",
      metricSub: "Organic Campaign Reach",
      type: "Event Marketing Campaign",
      services: ["Influencer Marketing", "Content Creation"],
      image: "/images/influencer_strategy.png",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200"
    },
    {
      client: "Zanzibar",
      metric: "18K+ views",
      metricSub: "Targeted Local Views",
      type: "Restaurant Content Campaign",
      services: ["UGC", "Reels", "Local Awareness"],
      image: "/images/restaurant_success.png",
      badgeColor: "bg-orange-100 text-orange-700 border-orange-200"
    },
    {
      client: "MakeMyCakes.co.uk",
      metric: "12K+ views",
      metricSub: "High Saves & Shares",
      type: "Food Brand Campaign",
      services: ["Influencer Marketing", "UGC"],
      image: "/images/ugc_creation.png",
      badgeColor: "bg-pink-100 text-pink-700 border-pink-200"
    }
  ];

  const clientReviews = [
    {
      client: "Swad Sweets & Savouries",
      rating: 5,
      review: "MarketBuddy built our new social presence from scratch. Their Gujarati-language reels brought in strong local reach and we had customers visiting our shop saying they saw us on Instagram.",
      focus: "New Social Presence & Footfall"
    },
    {
      client: "MakeMyCakes.co.uk",
      rating: 5,
      review: "A single UGC and influencer marketing reel generated over 12K views with incredible saves and shares. Highly creative team!",
      focus: "12K+ Reel Views & Viral Reach"
    },
    {
      client: "Taal & Trend Events",
      rating: 5,
      review: "The Pre-Navratri giveaway campaign reached 74K+ targeted local viewers and drove massive event awareness across London.",
      focus: "74K+ Views & Event Awareness"
    },
    {
      client: "AR Events London",
      rating: 5,
      review: "Incredible influencer marketing collaboration with multiple creators, generating 79K+ campaign views for our London events.",
      focus: "Multi-Creator 79K+ Views"
    },
    {
      client: "Zanzibar",
      rating: 5,
      review: "The onboarding reel garnered 18K+ targeted local views. Excellent strategy and execution!",
      focus: "18K+ Targeted Local Views"
    },
    {
      client: "Cream & Curl London",
      rating: 4,
      review: "Great influencer marketing reel that reached ~9.5K views. Professional team and easy to work with.",
      focus: "9.5K Views Influencer Campaign"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#6C3BFF]/20 selection:text-[#0F172A]">
      <SEOHead
        title="MarketBuddy | Social Media Marketing Agency UK | MarkitUp Group"
        description="MarketBuddy is a UK-based social media marketing agency providing content creation, social media management, influencer marketing, paid social advertising and SEO strategy."
        keywords="Social Media Marketing Agency UK, social media management UK, UGC content creation, influencer marketing UK, Instagram marketing, TikTok marketing, content creation agency, paid social advertising"
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
            <div className="grid min-h-[clamp(420px,50vh,620px)] w-full items-center lg:grid-cols-[55%_45%] gap-8 lg:gap-6">
              
              <motion.div 
                initial="hidden" animate="visible" variants={staggerContainer}
                className="relative z-10 lg:pr-8"
              >
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#E7D8FF] bg-white px-4 py-2 text-xs font-bold text-[#6C3BFF] shadow-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#6C3BFF] animate-pulse"></span>
                  A MarkitUp Group Venture
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="text-[clamp(2.5rem,4.8vw,4.75rem)] font-extrabold leading-[1.06] text-[#0F172A] tracking-tight mb-6">
                  Social Media Marketing Built to <span className="brand-gradient-text">Get Your Brand Seen.</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="max-w-[580px] text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-slate-600 mb-8 font-medium">
                  We help UK businesses grow through scroll-stopping content, strategic social media and creator-led campaigns designed to reach the right audience and turn attention into action.
                </motion.p>
                
                {/* Service Line Pills */}
                <motion.div variants={fadeUp} className="mb-8 flex flex-wrap gap-2 text-xs font-bold text-slate-700">
                  <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">Content Creation</span>
                  <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">Influencer Marketing</span>
                  <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">Social Media Management</span>
                  <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">Paid Advertising</span>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                  <GradientButton href="/contact" className="px-8 py-4">
                    Let's Grow Your Brand <ArrowRight size={18} />
                  </GradientButton>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0F172A] border border-slate-200 shadow-sm rounded-full font-bold hover:border-[#6C3BFF] hover:text-[#6C3BFF] transition-all hover:-translate-y-0.5"
                  >
                    View Our Work
                  </Link>
                </motion.div>
              </motion.div>

              {/* HERO REEL / PORTFOLIO DISPLAY */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex justify-center lg:justify-end w-full mt-8 lg:mt-0"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#6C3BFF]/20 to-[#FF7A00]/20 blur-[100px] rounded-full z-0 pointer-events-none hidden lg:block"></div>
                
                {/* Reel Grid Layout Visual */}
                <div className="relative w-full max-w-[500px] grid grid-cols-12 gap-3 z-10">
                  <div className="col-span-7 relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 aspect-[3/4] group">
                    <img src="/images/ugc_creation.png" alt="MarketBuddy UGC Content Creation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="px-2 py-0.5 rounded bg-[#6C3BFF] text-[10px] font-bold uppercase">UGC & Reels</span>
                      <p className="text-sm font-bold mt-1">Scroll-stopping Short Form</p>
                    </div>
                  </div>

                  <div className="col-span-5 flex flex-col gap-3">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-[4/3] group">
                      <img src="/images/influencer_strategy.png" alt="MarketBuddy Influencer Campaign" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
                      <div className="absolute bottom-2 left-2 right-2 text-white">
                        <p className="text-[11px] font-bold">Creator Campaigns</p>
                      </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-[4/3] group">
                      <img src="/images/restaurant_success.png" alt="MarketBuddy Restaurant Marketing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
                      <div className="absolute bottom-2 left-2 right-2 text-white">
                        <p className="text-[11px] font-bold">Brand Growth</p>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        </section>

        <PlatformsSection />

        {/* SERVICES SECTION - WHAT WE DO (8 APPROVED CATEGORIES) */}
        <section id="services" className="py-16 md:py-24 bg-white relative z-10 border-y border-slate-100">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <SectionTitle 
              eyebrow="WHAT WE DO" 
              title="Full-Service Social Media & Digital Marketing" 
              description="Strategic, creative, and performance-focused services tailored to help UK businesses build awareness and drive customer acquisition."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {services.map((service, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-[#6C3BFF]/30 hover:-translate-y-1 transition-all flex flex-col h-full group"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${service.bg} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <service.icon size={28} className={service.color} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-xs text-slate-600 mb-5 leading-relaxed flex-1 font-medium">{service.desc}</p>
                  
                  <ul className="space-y-2.5 mt-auto pt-4 border-t border-slate-100">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                        <CheckCircle2 size={14} className={`${service.color} shrink-0 mt-0.5`} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR WORK IN ACTION - REAL CAMPAIGN PROOF */}
        <section className="py-16 md:py-24 bg-[#FAFBFF] relative">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <SectionTitle 
              eyebrow="OUR WORK IN ACTION" 
              title={<>Content Made to <span className="brand-gradient-text">Get People Talking.</span></>} 
              description="From local businesses to events, we create social-first content designed to capture attention, build awareness and drive engagement."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {featuredCampaigns.map((camp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img 
                      src={camp.image} 
                      alt={`${camp.client} campaign`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${camp.badgeColor}`}>
                        {camp.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                      <div>
                        <p className="text-2xl font-black text-white">{camp.metric}</p>
                        <p className="text-xs text-slate-300 font-medium">{camp.metricSub}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{camp.client}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {camp.services.map((srv, idx) => (
                          <span key={idx} className="bg-slate-100 text-slate-700 text-[11px] font-bold px-2.5 py-1 rounded-md">
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/case-studies"
                      className="inline-flex items-center gap-2 text-xs font-extrabold text-[#6C3BFF] group-hover:text-purple-700 transition-colors pt-3 border-t border-slate-100 mt-2"
                    >
                      View Campaign Details <ChevronRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/case-studies"
                className="gradient-button inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-1 shadow-md"
              >
                View More of Our Work <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* CLIENT REVIEWS / REAL SOCIAL PROOF */}
        <section className="py-16 md:py-24 bg-white relative border-t border-slate-100">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <SectionTitle 
              eyebrow="CLIENT REVIEWS" 
              title={<>What <span className="text-[#6C3BFF]">Brands Say</span> About MarketBuddy</>}
              description="Real feedback from UK business owners and brand managers who partnered with us for growth."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {clientReviews.map((rev, i) => (
                <motion.div 
                  key={i} 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-lg transition-shadow relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1 text-amber-400">
                        {Array.from({ length: rev.rating }).map((_, star) => (
                          <Star key={star} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                        {rev.focus}
                      </span>
                    </div>

                    <p className="text-slate-700 text-sm leading-relaxed font-medium mb-6">
                      "{rev.review}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm">{rev.client}</h4>
                      <p className="text-[11px] text-slate-500 font-medium">Verified Partner</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-50 text-[#6C3BFF] flex items-center justify-center font-black text-xs">
                      5.0
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ENQUIRY SECTION (UNCHANGED AS SPECIFIED) */}
        <section id="enquiry" className="py-16 md:py-24 bg-[#FAFAFA]">
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

        {/* BOTTOM SEO SECTION - APPROVED VERBATIM COPY */}
        <SEOContentBlock title="Social Media Marketing Agency for UK Businesses">
          <p>
            MarketBuddy, a venture of MarkitUp Group Ltd, is a UK-based social media marketing agency helping businesses build visibility, engage the right audiences and grow through strategic digital marketing.
          </p>
          <p>
            We combine social media management, content creation, UGC, influencer marketing, short-form video production, paid social advertising, photography, creative design and SEO strategy to create campaigns tailored to each brand and its customers.
          </p>

          <h3>Social Media Marketing Built Around Your Business</h3>
          <p>
            Every business needs a different approach. Instead of relying on generic content plans, MarketBuddy develops strategies around your audience, location, industry and commercial goals. From Instagram Reels and TikTok content to creator collaborations and paid campaigns, we create content designed specifically for the platforms where your customers spend their attention.
          </p>

          <h3>Content Creation & UGC</h3>
          <p>
            We produce social-first content including Instagram Reels, TikTok videos, UGC, promotional videos, product content, food content, photography and campaign creatives. Our process covers everything from concepts, hooks and scripting through to filming, editing and final delivery, helping businesses maintain a consistent and professional presence across social media.
          </p>

          <h3>Influencer Marketing & Creator Campaigns</h3>
          <p>
            MarketBuddy connects businesses with relevant creators and influencers for campaigns designed to build awareness and reach targeted communities. We support the full process, including creator sourcing, campaign concepts, collaboration coordination, content production and campaign execution.
          </p>

          <h3>Social Media Management</h3>
          <p>
            For businesses looking for ongoing support, MarketBuddy provides end-to-end social media management covering content strategy, planning, creation, publishing, community engagement and performance monitoring. This allows businesses to maintain an active digital presence while focusing on running their operations.
          </p>

          <h3>Paid Social Advertising</h3>
          <p>
            Organic content and paid advertising can work together to accelerate growth. MarketBuddy supports businesses with Meta Ads and TikTok advertising, including campaign strategy, audience targeting, creative development, testing, retargeting and ongoing optimisation.
          </p>

          <h3>Supporting Businesses Across the UK</h3>
          <p>
            Based in the UK, MarketBuddy works with businesses across sectors including restaurants, food and hospitality brands, events, retail businesses, e-commerce brands and local service businesses. Our approach combines creative content with practical marketing strategy—helping brands turn social media attention into meaningful business opportunities.
          </p>

          <h3>See What MarketBuddy Can Do for Your Brand</h3>
          <p>
            Explore our real campaigns, content and client results in <Link href="/case-studies">Our Work</Link>, or get in touch with <Link href="/">MarkitUp Group</Link> to discuss the right marketing strategy for your business.
          </p>
        </SEOContentBlock>
      </main>
      
      <Footer />
    </div>
  );
}
