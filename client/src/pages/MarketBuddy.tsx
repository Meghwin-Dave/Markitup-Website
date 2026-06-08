import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { 
  ArrowRight, CheckCircle, Video, Camera, Users, MessageSquare, 
  TrendingUp, Play, Heart, Send, Search, Check, Star, ShieldCheck
} from "lucide-react";
import { Link } from "wouter";
import { ReactNode } from "react";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "MarketBuddy",
  "description": "MarketBuddy provides end-to-end social media marketing, content creation, and lead generation.",
  "provider": {
    "@type": "Organization",
    "name": "MarkitUp Group"
  }
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

function GradientButton({ children, href, className = "" }: { children: ReactNode; href: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`gradient-button inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-[clamp(0.875rem,1.5vw,1rem)] font-bold text-white shadow-[0_18px_42px_rgba(108,59,255,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(108,59,255,0.35)] ${className}`}
    >
      {children}
    </Link>
  );
}

function SectionTitle({ eyebrow, title, description, align = "center" }: { eyebrow: string; title: ReactNode; description?: string; align?: "left" | "center" }) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto" : "text-left"}`}>
      <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.15em] text-[#6C3BFF]">{eyebrow}</p>
      <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-[1.15] text-[#0F172A] mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-[clamp(1rem,1.5vw,1.125rem)] text-slate-600 leading-relaxed ${align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default function MarketBuddy() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#6C3BFF]/20 selection:text-[#0F172A]">
      <SEOHead
        title="MarketBuddy | Social Media Marketing Agency"
        description="MarketBuddy creates scroll-stopping content, builds powerful brands, and turns followers into loyal customers."
        keywords="MarketBuddy, social media marketing, UGC content, influencer marketing, Reels creation"
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
        <section className="relative overflow-visible bg-white pt-12 pb-20 lg:pt-20 lg:pb-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(108,59,255,0.06),transparent_55%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,122,0,0.05),transparent_55%)] pointer-events-none" />

          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[72px]">
            <div className="grid min-h-[clamp(500px,70vh,850px)] w-full items-center lg:grid-cols-[55%_45%] gap-12 lg:gap-8">
              
              <motion.div 
                initial="hidden" animate="visible" variants={staggerContainer}
                className="relative z-10"
              >
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#E7D8FF] bg-white px-4 py-2 text-sm font-bold text-[#6C3BFF] shadow-sm mb-6">
                  <TrendingUp size={16} /> Your Growth, Our Mission
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="text-[clamp(2.75rem,5.5vw,5.25rem)] font-extrabold leading-[1.02] text-[#0F172A] tracking-tighter mb-6">
                  <span className="text-[#6C3BFF]">MarketBuddy</span> –<br/>
                  Social Media Marketing That Drives Growth
                </motion.h1>

                <motion.p variants={fadeUp} className="max-w-[560px] text-[clamp(1.125rem,1.5vw,1.375rem)] leading-relaxed text-slate-600 mb-10">
                  We create scroll-stopping content, build powerful brands and turn followers into loyal customers.
                </motion.p>
                
                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
                  <GradientButton href="/contact">
                    <Send size={18} /> Talk to Our Team
                  </GradientButton>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-12 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                    ].map((src, i) => (
                      <img key={i} src={src} alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" />
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

              {/* HERO PHONE MOCKUP */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex justify-center lg:justify-end w-full"
              >
                {/* Premium Background Glow Behind Phone */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#6C3BFF]/20 to-[#FF7A00]/20 blur-[100px] rounded-full z-0 pointer-events-none hidden lg:block"></div>

                <div className="relative w-full max-w-[360px] xl:max-w-[380px] aspect-[9/19.5] rounded-[3rem] border-[10px] border-slate-900 bg-slate-900 shadow-[0_40px_80px_rgba(108,59,255,0.35)] overflow-hidden z-10">
                  
                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[35%] h-6 bg-black rounded-full z-20"></div>

                  {/* App UI Inside Phone */}
                  <div className="relative w-full h-full bg-black text-white flex flex-col">
                    <img 
                      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop" 
                      alt="Burger Social Media Post" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                    
                    <div className="absolute top-12 left-4 right-4 flex justify-between items-center z-10">
                      <span className="font-bold text-lg">Reels</span>
                      <Camera size={24} />
                    </div>

                    <div className="absolute bottom-20 left-4 right-16 z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 overflow-hidden backdrop-blur-sm border border-white/40">
                          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-sm">foodie.bites</span>
                        <button className="px-2 py-1 rounded text-xs font-bold border border-white/50 backdrop-blur-sm">Follow</button>
                      </div>
                      <p className="text-sm font-medium mb-2 line-clamp-2">The ultimate cheesy goodness! 🍔✨ Warning: May cause intense cravings.</p>
                      <div className="flex items-center gap-2 text-xs opacity-80 font-medium">
                        <Play size={12} fill="currentColor" /> Original Audio
                      </div>
                    </div>

                    {/* Right Action Bar */}
                    <div className="absolute bottom-20 right-2 flex flex-col items-center gap-6 z-10">
                      <div className="flex flex-col items-center gap-1">
                        <Heart size={28} className="text-white fill-white" />
                        <span className="text-xs font-bold">12.5K</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <MessageSquare size={26} className="text-white fill-white" />
                        <span className="text-xs font-bold">428</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Send size={26} className="text-white" />
                        <span className="text-xs font-bold">856</span>
                      </div>
                    </div>

                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 w-full h-16 bg-black flex justify-around items-center px-4 z-10 pb-2">
                      <div className="w-6 h-6 rounded-sm bg-white"></div>
                      <Search size={24} className="text-white/70" />
                      <div className="w-8 h-8 border-2 border-white rounded-xl flex items-center justify-center"><Play size={16} fill="currentColor" /></div>
                      <MessageSquare size={24} className="text-white/70" />
                      <div className="w-6 h-6 rounded-full bg-white/30 border border-white/50 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[20%] -left-8 md:-left-12 bg-white rounded-full p-4 shadow-xl border border-slate-100 z-20 hidden sm:flex"
                >
                  <Heart className="text-[#FF2E78] fill-[#FF2E78]" size={28} />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-[25%] -right-8 md:-right-12 bg-gradient-to-tr from-[#6C3BFF] to-[#A07CFF] rounded-full p-5 shadow-[0_12px_24px_rgba(108,59,255,0.4)] z-20 hidden sm:flex"
                >
                  <TrendingUp className="text-white" size={32} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-20 md:py-28 bg-white relative z-10 border-y border-slate-100">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[72px]">
            <SectionTitle 
              eyebrow="WHAT WE DO" 
              title="End-to-end Solutions for Your Brand Growth" 
            />

            <div className="flex flex-wrap justify-center gap-6 mt-16">
              {[
                { icon: Video, title: "UGC Content Creation", desc: "Authentic content that builds trust and drives real engagement.", color: "text-[#6C3BFF]", bg: "bg-[#6C3BFF]/10" },
                { icon: Camera, title: "Reels & Photoshoots", desc: "High-quality reels and photos that stop the scroll and boost reach.", color: "text-[#FF7A00]", bg: "bg-[#FF7A00]/10" },
                { icon: Users, title: "Influencer Marketing", desc: "Collaborate with the right influencers to amplify your brand.", color: "text-[#C71888]", bg: "bg-[#C71888]/10" },
                { icon: MessageSquare, title: "Social Media Management", desc: "Strategy, content, posting and community – we handle it all.", color: "text-[#3B82F6]", bg: "bg-[#3B82F6]/10" },
                { icon: TrendingUp, title: "SEO & Ads", desc: "Rank higher, reach more and convert better with smart SEO & ads.", color: "text-[#10B981]", bg: "bg-[#10B981]/10" }
              ].map((service, i) => (
                <motion.div 
                  key={i} 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="group relative flex-grow basis-[300px] max-w-[380px] bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_30px_60px_rgba(108,59,255,0.12)] hover:-translate-y-2 hover:border-[#E7D8FF] flex flex-col items-center text-center"
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center ${service.bg} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <service.icon size={32} className={service.color} />
                  </div>
                  <h3 className="text-[clamp(1.125rem,1.5vw,1.25rem)] font-extrabold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-[clamp(0.875rem,1vw,1rem)] text-slate-600 leading-relaxed mb-6 flex-grow">{service.desc}</p>
                  
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-slate-100 text-slate-400 transition-all group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900`}>
                    <ArrowRight size={18} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT THAT CONVERTS */}
        <section className="py-20 md:py-28 bg-[#FAFAFA] relative">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[72px]">
            <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-center">
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <SectionTitle 
                  eyebrow="OUR APPROACH" 
                  title={<>Content That <span className="bg-gradient-to-r from-[#6C3BFF] to-[#FF7A00] bg-clip-text text-transparent">Converts</span></>} 
                  align="left" 
                />
                <motion.p variants={fadeUp} className="text-[clamp(1rem,1.5vw,1.125rem)] text-slate-600 leading-relaxed mb-12">
                  We blend creativity, strategy and data to create content that not only looks amazing but delivers real results.
                </motion.p>

                <div className="flex gap-8 sm:gap-12">
                  {[
                    { icon: Play, num: "500+", label: "Reels Created", color: "text-[#6C3BFF]" },
                    { icon: TrendingUp, num: "3X", label: "Avg. Engagement", color: "text-[#FF7A00]" },
                    { icon: Heart, num: "200+", label: "Happy Brands", color: "text-[#C71888]" }
                  ].map((stat, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex flex-col items-start">
                      <div className={`w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center ${stat.color} mb-4`}>
                        <stat.icon size={20} fill={stat.icon === Heart || stat.icon === Play ? "currentColor" : "none"} />
                      </div>
                      <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">{stat.num}</p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 h-[400px] sm:h-[500px]"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-sm group">
                  <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Food Content" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center"><Play fill="white" className="text-white ml-1" /></div>
                  </div>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-sm group sm:row-span-2">
                  <img src="https://images.unsplash.com/photo-1515378960530-7c0da6229678?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Beauty Content" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white bg-black/40 backdrop-blur-md px-2 py-1 rounded-md text-sm font-semibold">
                    <Play size={14} fill="currentColor" /> 15.4K
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4 h-full">
                  <div className="relative flex-1 rounded-2xl overflow-hidden shadow-sm group">
                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Food Content" />
                  </div>
                  <div className="relative flex-1 rounded-2xl overflow-hidden shadow-sm group">
                    <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=400&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Drink Content" />
                  </div>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-sm group sm:col-span-2 h-[200px] sm:h-auto">
                  <img src="https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Product Content" />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 md:py-28 bg-white relative">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[72px]">
            <SectionTitle 
              eyebrow="LOVE FROM OUR CLIENTS" 
              title={<>What <span className="text-[#6C3BFF]">Brands</span> Say About <span className="text-[#FF7A00]">Us</span></>}
            />

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { name: "Ananya Sharma", role: "Co-founder, Glowera", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop", review: "MarketBuddy understood our brand perfectly. Their content and strategy helped us scale our social media like never before.", color: "text-[#6C3BFF]" },
                { name: "Rohit Mehta", role: "Marketing Head, FitFuel", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop", review: "From reels to influencer campaigns, everything was top-notch. We saw amazing engagement and real business growth.", color: "text-[#FF7A00]" },
                { name: "Neha Kapoor", role: "Founder, Posh Essentials", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop", review: "Professional, creative and result-driven team. Highly recommended for any brand serious about growth!", color: "text-[#C71888]" }
              ].map((t, i) => (
                <motion.div 
                  key={i} 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.04)] relative"
                >
                  <div className="flex gap-1 mb-6 text-[#FFB800]">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <MessageSquare size={32} className={`absolute top-8 right-8 opacity-10 ${t.color}`} fill="currentColor" />
                  
                  <p className="text-slate-700 leading-relaxed font-medium mb-8">"{t.review}"</p>
                  
                  <div className="flex items-center gap-4">
                    <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
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
        <section className="py-20 md:py-28 bg-[#FAFAFA]">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[72px]">
            <div className="grid lg:grid-cols-[40%_60%] gap-12 bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_rgba(15,23,42,0.04)] border border-slate-100">
              
              <div>
                <SectionTitle 
                  eyebrow="LET'S WORK TOGETHER" 
                  title={<>Ready to Grow Your <span className="text-[#C71888]">Brand?</span></>}
                  align="left" 
                />
                <p className="text-slate-600 mb-10 text-[clamp(1rem,1.2vw,1.125rem)]">
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
                        <p className="text-sm text-slate-500">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FAFAFA] rounded-[2rem] p-6 sm:p-10">
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#6C3BFF]/20 transition-all font-medium text-slate-700" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Business</label>
                      <input type="text" placeholder="Company Name" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#6C3BFF]/20 transition-all font-medium text-slate-700" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Phone</label>
                      <input type="tel" placeholder="+44 123 456 7890" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#6C3BFF]/20 transition-all font-medium text-slate-700" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#6C3BFF]/20 transition-all font-medium text-slate-700" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Service Interested In</label>
                    <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#6C3BFF]/20 transition-all font-medium text-slate-700 appearance-none">
                      <option value="" disabled selected>Select a service</option>
                      <option>UGC Content Creation</option>
                      <option>Reels & Photoshoots</option>
                      <option>Influencer Marketing</option>
                      <option>Social Media Management</option>
                      <option>SEO & Ads</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Message</label>
                    <textarea placeholder="Tell us about your goals..." rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#6C3BFF]/20 transition-all font-medium text-slate-700 resize-none"></textarea>
                  </div>
                  
                  <button type="button" className="w-full bg-gradient-to-r from-[#6C3BFF] to-[#FF7A00] hover:from-[#5A2DE3] hover:to-[#E66E00] text-white font-bold py-4 rounded-xl shadow-[0_12px_24px_rgba(108,59,255,0.25)] transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-4">
                    <Send size={18} /> Send Message
                  </button>
                  <p className="text-xs text-center text-slate-500 mt-4 flex items-center justify-center gap-1.5">
                    <ShieldCheck size={14} /> Your information is 100% secure and confidential.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
