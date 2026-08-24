import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  MapPin,
  Store,
  Tag,
  Users,
  Search,
  CalendarCheck,
  Star,
  Download,
  Gift,
  LineChart,
  BadgePercent,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Bell,
  Play,
  Apple,
  ArrowRight,
  Trophy, 
  Medal, 
  Award, 
  Camera, 
  ClipboardCheck, 
  Database, 
  Lock, 
  Eye,
  CreditCard,
  QrCode,
  Sparkles,
  Zap,
  Percent,
  PoundSterling,
  UtensilsCrossed,
  Repeat,
  Calendar,
  Clock,
  LayoutDashboard,
  Check,
  Building2,
  Video,
  ShieldCheck,
  ArrowUpRight,
  Flame,
  ChefHat,
  MessageSquare,
  BarChart3,
  ThumbsUp,
  Sparkle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";

// --- Components ---

const DownloadAppDropdown = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block w-full sm:w-auto" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={className}
        type="button"
      >
        {children}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-full mt-2 w-full sm:w-64 bg-white/95 backdrop-blur-xl rounded-2xl p-2.5 shadow-[0_20px_60px_-15px_rgba(108,59,255,0.25)] border border-purple-100 z-[100] overflow-hidden origin-top"
          >
            <div className="flex flex-col gap-1.5">
              <a 
                href="https://play.google.com/store/apps/details?id=com.discountbuddy.app&pcampaignid=web_share" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 transition-all group"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-105 group-hover:bg-[#8A3FFC] group-hover:text-white transition-all shadow-sm">
                  <Play size={18} className="ml-0.5 fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">Android</p>
                  <p className="text-[11px] text-slate-500 font-medium">Google Play Store</p>
                </div>
              </a>
              
              <a 
                href="https://apps.apple.com/gb/app/discount-buddy-deals/id6760362068" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 transition-all group text-left w-full relative"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:scale-105 group-hover:bg-slate-900 group-hover:text-white transition-all shadow-sm">
                  <Apple size={18} className="mb-0.5 fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">iOS App Store</p>
                  <p className="text-[11px] text-slate-500 font-medium">Apple App Store</p>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PhoneMockup = () => {
  return (
    <div className="relative mx-auto w-[clamp(17.5rem,34vw,19.5rem)] aspect-[1/2.1] bg-black rounded-[clamp(2.2rem,4vw,3.2rem)] border-[10px] border-slate-950 shadow-[0_30px_90px_-20px_rgba(138,63,252,0.35)] overflow-hidden flex-shrink-0">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-[clamp(22px,3vw,30px)] flex justify-center z-20 pointer-events-none">
        <div className="w-[34%] h-full bg-slate-950 rounded-b-[clamp(12px,1.8vw,18px)]"></div>
      </div>

      {/* Screenshot Image */}
      <div className="relative h-full w-full bg-slate-50 overflow-hidden">
        <img 
          src="/images/discount-buddy-phone-screen.png" 
          alt="DiscountBuddy App Interface" 
          className="w-full h-full object-cover object-top"
          onError={(e) => {
             (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=600&auto=format&fit=crop';
          }}
        />
      </div>
    </div>
  );
};

{/* SLIDE 1: HERO SECTION */}
const HeroSection = () => {
  return (
    <section className="relative pt-6 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8FF] via-purple-50/30 to-white">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-10 left-[-10%] w-[500px] h-[500px] bg-[#8A3FFC]/12 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-[#ec4899]/12 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/90 bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-extrabold text-[#8A3FFC] shadow-sm mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8A3FFC] animate-ping"></span>
              A MarkitUp Group Venture
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 w-full leading-[1.08]">
              Helping Great Restaurants<br />
              <span className="bg-gradient-to-r from-[#8A3FFC] via-purple-600 to-[#ec4899] bg-clip-text text-transparent">
                Get Discovered.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed font-medium">
              A smarter way to attract customers, manage offers, increase visibility and grow your restaurant.
            </p>

            {/* 4 Pillars Grid (Slide 1 Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full mb-10">
              {[
                { label: "Exclusive Offers", icon: Tag, color: "text-[#8A3FFC]", bg: "bg-purple-50", border: "border-purple-100" },
                { label: "Easy Reservations", icon: CalendarCheck, color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-100" },
                { label: "Top Restaurants", icon: Store, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
                { label: "Ratings & Reviews", icon: Star, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" }
              ].map((p, i) => (
                <div key={i} className={`flex flex-col items-center lg:items-start p-4 rounded-2xl bg-white/80 backdrop-blur-sm border ${p.border} shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] hover:shadow-md transition-all text-center lg:text-left group`}>
                  <div className={`w-10 h-10 rounded-xl ${p.bg} ${p.color} flex items-center justify-center mb-2.5 transition-transform group-hover:scale-110`}>
                    <p.icon size={20} />
                  </div>
                  <span className="text-xs font-extrabold text-slate-800 leading-tight">{p.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
              <DownloadAppDropdown className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-extrabold text-white rounded-full bg-gradient-to-r from-[#8A3FFC] via-purple-600 to-[#ec4899] shadow-[0_10px_30px_-8px_rgba(138,63,252,0.4)] transition-all hover:scale-105 hover:shadow-purple-500/50 w-full sm:w-auto">
                <Smartphone size={20} />
                Download App
              </DownloadAppDropdown>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-slate-900 border border-slate-200 shadow-sm rounded-full font-extrabold text-sm hover:border-[#8A3FFC] hover:text-[#8A3FFC] transition-all hover:scale-105"
              >
                Partner With Us <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full border border-purple-100 shadow-sm">
              <CheckCircle2 size={20} className="text-[#8A3FFC] shrink-0" />
              <p className="text-xs sm:text-sm text-slate-700 font-bold">
                Now Onboarding Partner Restaurants Across London & UK
              </p>
            </div>
          </motion.div>

          {/* Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8A3FFC]/25 to-[#ec4899]/25 rounded-full blur-[90px] -z-10 w-[85%] h-[85%] m-auto pointer-events-none"></div>
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

{/* SLIDE 2: FOUNDER MESSAGE SECTION */}
const FounderMessageSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        <div className="bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950 rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-purple-900/40">
          
          {/* Background Gradient Orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8A3FFC]/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ec4899]/15 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Image / Chef Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2rem] overflow-hidden border border-white/15 shadow-2xl aspect-[4/3] lg:aspect-[3/4]">
                <img 
                  src="/images/restaurant_success.png" 
                  alt="Restaurant Kitchen & Passionate Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-extrabold text-xs uppercase tracking-wider">
                    Our Mission
                  </span>
                  <p className="text-white font-bold text-base mt-2">Empowering UK Hospitality</p>
                </div>
              </div>
            </div>

            {/* Right Founder Letter Content (Slide 2) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-purple-300 font-bold text-xs uppercase tracking-widest border border-white/15">
                A Message From Our Founder
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-serif">
                Dear Restaurant Owner,
              </h2>

              <div className="space-y-4 text-slate-200 text-base md:text-lg leading-relaxed font-normal">
                <p>
                  Running a restaurant today isn't easy. Food costs are rising. Competition is increasing. Customers have more choices than ever before.
                </p>
                <p>
                  Behind every restaurant is a team working hard every day to create great food and memorable experiences. That's exactly why we created DiscountBuddy.
                </p>
                <div className="p-5 rounded-2xl bg-white/10 border-l-4 border-[#8A3FFC] backdrop-blur-sm my-4">
                  <p className="font-bold text-white text-lg md:text-xl leading-snug">
                    "Not just another platform. Not just another discount app. But a smarter way to help restaurants get discovered, connect with customers and grow their visibility."
                  </p>
                </div>
                <p className="text-purple-300 font-extrabold text-lg md:text-xl pt-1">
                  We believe great restaurants deserve to be seen. And we're excited to help make that happen.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

{/* SLIDE 3: THE PLATFORM ARCHITECTURE */}
const PlatformArchitectureSection = () => {
  return (
    <section id="platform" className="py-16 md:py-24 bg-[#FAF8FF] border-t border-slate-100">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-[#8A3FFC] font-extrabold text-xs uppercase tracking-widest mb-3">
            The Platform
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Connecting Restaurants With Customers
          </h2>
          <p className="text-slate-600 font-medium text-base md:text-lg">
            Simple for customers. Powerful for restaurants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* For Customers (Slide 3 Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-purple-100 shadow-[0_15px_40px_-15px_rgba(138,63,252,0.1)] flex flex-col justify-between hover:border-purple-300 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-purple-50 text-[#8A3FFC] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Users size={32} />
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-purple-100/80 text-[#8A3FFC] font-extrabold text-xs">
                  For Diners
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">For Customers</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-base md:text-lg mb-6">
                Discover restaurants, explore offers, browse menus, request reservations and find new places to eat — all in one place.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-sm font-extrabold text-[#8A3FFC]">
              <span>Seamless Mobile Discovery</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* For Restaurants (Slide 3 Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-pink-100 shadow-[0_15px_40px_-15px_rgba(236,72,153,0.1)] flex flex-col justify-between hover:border-pink-300 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-pink-50 text-[#ec4899] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Store size={32} />
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-pink-100/80 text-[#ec4899] font-extrabold text-xs">
                  For Owners
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">For Restaurants</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-base md:text-lg mb-6">
                Improve visibility, manage offers, receive booking requests and better understand customer activity with powerful tools.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-sm font-extrabold text-[#ec4899]">
              <span>Growth & Management Tools</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

{/* SLIDE 4: OFFER MANAGEMENT */}
const OfferManagementSection = () => {
  const offerTypes = [
    { title: "Percentage Discounts", desc: "Set flexible percentage-off deals that attract new diners.", icon: Percent, color: "text-[#8A3FFC]", bg: "bg-purple-50", border: "border-purple-100" },
    { title: "Fixed Amount Offers", desc: "Clear, simple savings that customers instantly understand.", icon: PoundSterling, color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-100" },
    { title: "Combo Deals", desc: "Bundle your best dishes into irresistible offers.", icon: UtensilsCrossed, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
    { title: "2-for-1 Promotions", desc: "Drive volume and introduce new customers to your menu.", icon: Repeat, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
    { title: "Seasonal Campaigns", desc: "Align offers with holidays, events and local moments.", icon: Calendar, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
    { title: "Limited-Time Offers", desc: "Create urgency with time-sensitive promotions.", icon: Clock, color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" }
  ];

  return (
    <section id="offers" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-[#8A3FFC] font-extrabold text-xs uppercase tracking-widest mb-3">
            Offer Management
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Your Restaurant. Your Offers. Your Rules.
          </h2>
          <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed">
            Every restaurant is different. We believe restaurant owners should stay in control. Create the promotions that work for your business — no rigid structures, no unnecessary restrictions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerTypes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`bg-white p-8 rounded-[2rem] border ${item.border} shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between`}
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm`}>
                  <item.icon size={26} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

{/* SLIDE 5: DASHBOARD SECTION */}
const DashboardSection = () => {
  const dashboardFeatures = [
    { title: "Active Deals", desc: "Manage and update your offers instantly" },
    { title: "Reservation Requests", desc: "Review and respond to bookings" },
    { title: "Ratings & Reviews", desc: "Stay connected to customer feedback" },
    { title: "Restaurant Status", desc: "Control your availability in real time" },
    { title: "Customer Activity", desc: "Understand who's discovering you" },
    { title: "Revenue Tracking", desc: "Monitor the impact of your offers" },
    { title: "Business Insights", desc: "Make smarter, data-informed decisions" }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF8FF] border-t border-slate-100">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column (Slide 5 List) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-[#8A3FFC] font-extrabold text-xs uppercase tracking-widest mb-3">
              Dashboard
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Everything In One Place
            </h2>
            <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed mb-8">
              Manage your restaurant with a simple, intuitive dashboard designed to save time and improve efficiency. No complexity — just the tools you need.
            </p>

            <div className="space-y-3">
              {dashboardFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-purple-100/80 shadow-sm hover:border-purple-300 transition-colors">
                  <div className="w-7 h-7 rounded-full bg-purple-100 text-[#8A3FFC] flex items-center justify-center shrink-0 font-bold">
                    <Check size={16} />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 text-sm">{feat.title}</span>
                    <span className="text-slate-500 text-xs font-medium block sm:inline sm:ml-2">— {feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Column (Tablet Dashboard Visual) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full rounded-[2.5rem] bg-slate-950 p-6 md:p-8 shadow-2xl border border-slate-800 text-white overflow-hidden">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#8A3FFC] flex items-center justify-center font-bold">
                    <LayoutDashboard size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Merchant Portal</h4>
                    <p className="text-xs text-slate-400">DiscountBuddy Live Control</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-xs border border-emerald-500/30">
                  Live & Active
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                  <p className="text-xs text-slate-400 font-medium">Active Deals</p>
                  <p className="text-lg font-bold text-white mt-1">Instant Management</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                  <p className="text-xs text-slate-400 font-medium">Reservation Requests</p>
                  <p className="text-lg font-bold text-amber-400 mt-1">Review & Accept</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                  <p className="text-xs text-slate-400 font-medium">Customer Ratings</p>
                  <p className="text-lg font-bold text-purple-300 mt-1">Feedback Hub</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                  <p className="text-xs text-slate-400 font-medium">Revenue Insights</p>
                  <p className="text-lg font-bold text-emerald-400 mt-1">Real-Time Data</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#8A3FFC]/20 to-purple-600/20 rounded-2xl p-4 border border-purple-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Flame size={20} className="text-amber-400" />
                  <span className="text-xs font-bold text-white">Live Dining Availability Enabled</span>
                </div>
                <span className="text-[11px] font-extrabold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full">Active</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

{/* SLIDE 6: RESERVATION REQUESTS WORKFLOW */}
const ReservationsSection = () => {
  const steps = [
    { num: "01", title: "Submit Request", desc: "Customers browse your menu & request table reservations directly through the mobile app.", bg: "from-purple-900 to-purple-950" },
    { num: "02", title: "Review Request", desc: "View incoming request details, party size and preferred dining time on your dashboard.", bg: "from-slate-900 to-slate-950" },
    { num: "03", title: "Accept or Decline", desc: "Decide whether to confirm or decline — keeping you in full operational control at every step.", bg: "from-[#8A3FFC] to-purple-900" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-[#8A3FFC] font-extrabold text-xs uppercase tracking-widest mb-3">
            Reservations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Reservation Requests Made Easy
          </h2>
          <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed">
            Customers can request reservations directly through the platform. You review each request and decide whether to accept or decline — keeping you in full control at every step.
          </p>
        </div>

        {/* 3 Step Arrow Flow (Slide 6 Arrow Style) */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className={`bg-gradient-to-br ${step.bg} p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden group border border-white/10 flex flex-col justify-between`}
            >
              <div>
                <div className="text-5xl font-black text-white/20 mb-6 font-mono group-hover:text-purple-300 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3">{step.title}</h3>
                <p className="text-slate-300 text-sm font-medium leading-relaxed">{step.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-purple-300">
                <span>Step {step.num}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center bg-purple-50/70 border border-purple-100 p-5 rounded-2xl">
          <p className="text-slate-700 font-bold text-sm sm:text-base">
            A simple and efficient way to manage customer enquiries and table bookings — without the back-and-forth.
          </p>
        </div>
      </div>
    </section>
  );
};

{/* SLIDE 7: BUSINESS INTELLIGENCE */}
const BusinessIntelligenceSection = () => {
  const intelligencePoints = [
    { title: "Restaurant views and customer clicks", icon: Eye },
    { title: "Booking activity and offer performance", icon: CalendarCheck },
    { title: "Customer behaviour and engagement patterns", icon: Users },
    { title: "Ratings, reviews and reputation trends", icon: Star },
    { title: "Revenue impact and growth over time", icon: LineChart }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF8FF] border-t border-slate-100">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-[#8A3FFC] font-extrabold text-xs uppercase tracking-widest mb-3">
              Business Intelligence
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Understand What Drives Results
            </h2>
            <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed mb-8">
              DiscountBuddy provides valuable insights that help restaurant owners make better, more informed decisions. Track performance, spot trends and identify opportunities to grow.
            </p>

            <div className="space-y-3.5">
              {intelligencePoints.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-purple-100/80 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#8A3FFC] flex items-center justify-center shrink-0">
                    <pt.icon size={18} />
                  </div>
                  <span className="font-extrabold text-slate-900 text-sm sm:text-base">{pt.title}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-500 font-semibold text-sm mt-8">
              Helping you understand what works — and where your next opportunity lies.
            </p>
          </motion.div>

          {/* Right Diagram Graphic (Matching Slide 7 Chart Matrix) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-purple-100 shadow-xl w-full max-w-[520px] relative overflow-hidden">
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#8A3FFC] text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-purple-500/30">
                  <BarChart3 size={32} />
                </div>
                <h4 className="text-2xl font-extrabold text-slate-900">Overall Performance</h4>
                <p className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-wider">Restaurant Growth Hub</p>
              </div>

              <div className="grid grid-cols-2 gap-3.5 text-center">
                {[
                  { title: "Views & Clicks", sub: "Diner Traffic" },
                  { title: "Booking Activity", sub: "Table Requests" },
                  { title: "Offer Performance", sub: "Deal Redemptions" },
                  { title: "Ratings & Reviews", sub: "Reputation Trends" }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAF8FF] border border-purple-100 hover:border-purple-300 transition-colors">
                    <p className="text-sm font-extrabold text-slate-900">{item.title}</p>
                    <span className="text-[11px] text-[#8A3FFC] font-bold block mt-1">{item.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

{/* DIGITAL LOYALTY CARD SECTION */}
const LoyaltyCardSection = () => {
  const loyaltyFeatures = [
    {
      title: "Digital Stamp Cards",
      desc: "No more lost paper stamp cards. Diners collect digital stamps directly in their app on every visit.",
      icon: CreditCard,
      badge: "Zero Friction"
    },
    {
      title: "Instant Table QR Scan",
      desc: "Waitstaff quickly scan the diner's in-app QR code to grant stamps or redeem unlocked rewards in seconds.",
      icon: QrCode,
      badge: "2-Sec Validation"
    },
    {
      title: "Custom Reward Tiers",
      desc: "Set flexible rules: 'Buy 5 meals get 6th 50% off' or '10 stamps = Free Gourmet Dinner'.",
      icon: Gift,
      badge: "Flexible Rules"
    },
    {
      title: "Automated Win-Back Alerts",
      desc: "Re-engage inactive customers with targeted push notifications when they haven't stamped in 14 days.",
      icon: Zap,
      badge: "+40% Retention"
    }
  ];

  return (
    <section id="loyalty-card" className="py-16 md:py-24 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px] relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-[#8A3FFC] font-extrabold text-xs uppercase tracking-widest mb-4 border border-purple-200">
            <Sparkles size={14} className="text-[#8A3FFC]" />
            Digital Loyalty Stamp Engine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
            Digital Loyalty Cards.<br />
            <span className="bg-gradient-to-r from-[#8A3FFC] via-purple-600 to-[#ec4899] bg-clip-text text-transparent">
              Turn One-Time Diners into Lifelong Regulars.
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            Replace clumsy paper punch cards with slick, digital stamp wallets. Restaurants build loyal communities while diners earn free meals, discounts, and exclusive perks effortlessly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Stamp Card Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[390px] bg-slate-950 p-7 rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(138,63,252,0.35)] border border-slate-800 text-white overflow-hidden group">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 font-black text-base">
                    🍕
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base">Pizza 4 You Bistro</h3>
                    <p className="text-xs text-purple-300 font-medium">VIP Loyalty Card</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-[11px] uppercase tracking-wider border border-emerald-500/30">
                  Active
                </span>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-xs font-semibold text-slate-300">Stamps Collected</span>
                  <span className="text-xs font-bold text-purple-300">5 of 6 Stamps</span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <div className="h-full bg-gradient-to-r from-[#8A3FFC] to-[#ec4899] rounded-full w-[83.3%]"></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Visit 1", status: "completed" },
                  { label: "Visit 2", status: "completed" },
                  { label: "Visit 3", status: "completed" },
                  { label: "Visit 4", status: "completed" },
                  { label: "Visit 5", status: "completed" },
                  { label: "Reward", status: "reward" },
                ].map((stamp, idx) => (
                  <div 
                    key={idx} 
                    className={`aspect-square rounded-2xl p-2.5 flex flex-col items-center justify-center text-center transition-all ${
                      stamp.status === "completed" 
                        ? "bg-gradient-to-br from-[#8A3FFC] to-purple-600 text-white shadow-md border border-purple-400/40" 
                        : stamp.status === "reward"
                        ? "bg-gradient-to-br from-amber-400 to-pink-500 text-slate-950 font-extrabold border-2 border-white shadow-lg scale-105"
                        : "bg-slate-800 text-slate-500 border border-slate-700"
                    }`}
                  >
                    {stamp.status === "completed" ? (
                      <CheckCircle2 size={22} className="text-white mb-0.5" />
                    ) : stamp.status === "reward" ? (
                      <Gift size={24} className="text-slate-950 mb-0.5" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-dashed border-slate-600 mb-1" />
                    )}
                    <span className="text-[10px] font-bold">{stamp.label}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Next Reward: FREE Meal 🍕</p>
                    <p className="text-[10px] text-slate-300">Scan QR code at table on visit #6</p>
                  </div>
                </div>
                <QrCode size={20} className="text-white" />
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {loyaltyFeatures.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-7 rounded-[2rem] border border-purple-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)] hover:border-purple-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#8A3FFC] group-hover:bg-[#8A3FFC] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8A3FFC] bg-purple-100 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

{/* SLIDE 8: EXCLUSIVE FOUNDING PARTNER BENEFIT */}
const FoundingPartnerSection = () => {
  const reelPerks = [
    "Professional Filming",
    "Professional Editing",
    "Creative Direction",
    "Story-Driven Content",
    "Restaurant Showcase"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-purple-900/40">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ec4899]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 font-extrabold text-xs uppercase tracking-widest mb-6 border border-amber-400/30">
            Exclusive Founding Partner Benefit
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-white font-serif">
            Complimentary Professional Reel — <span className="text-amber-400">Worth £200</span>
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-10 font-medium max-w-2xl mx-auto">
            The first <strong className="text-white font-bold">50 restaurant partners</strong> will receive a complimentary professional reel produced by MarketBuddy — a powerful way to showcase your restaurant to new audiences.
          </p>

          <div className="flex flex-wrap justify-center gap-3.5 mb-10">
            {reelPerks.map((perk, idx) => (
              <div key={idx} className="bg-white/10 border border-white/15 px-5 py-3 rounded-2xl text-sm font-extrabold text-white flex items-center gap-2.5 shadow-sm">
                <CheckCircle2 size={18} className="text-amber-400 shrink-0" />
                {perk}
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 rounded-full font-extrabold text-sm shadow-xl transition-all hover:scale-105"
          >
            Claim Founding Partner Access <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

{/* SLIDE 9: VISIBILITY & GROWTH */}
const VisibilityGrowthSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-[#8A3FFC] font-extrabold text-xs uppercase tracking-widest mb-3">
              Visibility & Growth
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Built For Visibility
            </h2>
            <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed mb-8">
              DiscountBuddy will be supported through creator-led awareness campaigns and digital promotion designed to increase restaurant discovery. As awareness of the platform grows, restaurant partners benefit from increased visibility and customer exposure.
            </p>

            {/* Quality Over Quantity Highlight Box (Matching Slide 9 Box) */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50/50 border border-purple-200/80 rounded-[2rem] p-7 relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#8A3FFC] text-white flex items-center justify-center shrink-0 font-bold shadow-md">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg mb-1">Quality Over Quantity</h4>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    We intentionally limit onboarding within each area to help maintain visibility and exposure for our restaurant partners.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image (Matching Slide 9 Filming Photo) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] w-full max-w-[540px] group">
              <img src="/images/restaurant_success.png" alt="Creator Filming Content" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3.5 py-1.5 rounded-full bg-white/20 text-white font-extrabold text-xs backdrop-blur-md">
                  Creator-Led Promotions
                </span>
                <h3 className="text-xl font-bold mt-2">Targeted Regional Exposure</h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

{/* SLIDE 10: WELCOME & CTA SECTION */}
const WelcomeCTASection = () => {
  const checklist = [
    { title: "Professional Reel", sub: "Complimentary production worth £200" },
    { title: "Flexible Offers", sub: "Your restaurant, your rules" },
    { title: "Reservations", sub: "Simple booking management" },
    { title: "Merchant Dashboard", sub: "Everything in one place" },
    { title: "Visibility Tools", sub: "Creator-led awareness campaigns" },
    { title: "Business Insights", sub: "Data that drives decisions" },
    { title: "Limited Programme", sub: "Exclusive founding partner access" }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF8FF] border-t border-slate-100">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-purple-100 shadow-2xl relative overflow-hidden">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-[#8A3FFC] font-extrabold text-xs uppercase tracking-widest mb-3">
              Let's Grow Together
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              We'd Love To Welcome You
            </h2>
            <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed">
              Thank you for taking the time to learn about DiscountBuddy. We're excited to work with passionate restaurant owners and help more customers discover great places to eat.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {checklist.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5 bg-[#FAF8FF] p-4.5 rounded-2xl border border-purple-100/80">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Check size={16} />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500 font-medium">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-100">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">DiscountBuddy — A MarkitUp Group Venture</p>
              <p className="text-sm font-bold text-slate-800 mt-1">discountbuddy@markitupgroup.com | United Kingdom</p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-extrabold text-white rounded-full bg-gradient-to-r from-[#8A3FFC] via-purple-600 to-[#ec4899] shadow-lg transition-transform hover:scale-105 w-full sm:w-auto"
            >
              Become a Founding Partner <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function DiscountBuddy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Discount Buddy - Restaurant Discovery & Booking Platform",
    "description": "Helping great restaurants get discovered. Discount Buddy provides flexible offer management, reservation requests, digital loyalty cards, and business intelligence for UK dining venues.",
    "provider": {
      "@type": "Organization",
      "name": "MarkitUp Group Limited",
      "url": "https://markitupgroup.com"
    },
    "serviceType": "Hospitality Software & Promotion",
    "areaServed": "GB"
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900">
      <SEOHead
        title="Discount Buddy by MarkitUp Group | Restaurant Discovery & Growth Platform"
        description="Helping great restaurants get discovered. A smarter way to attract customers, manage offers, increase visibility and grow your restaurant."
        keywords="restaurant discovery, booking system, loyalty management, restaurant promotion, deals addition, discount buddy"
        canonical="https://markitupgroup.com/discount-buddy"
        structuredData={structuredData}
      />
      
      <Header 
        logoOverride="/images/discount_buddy_logo.png" 
        logoAlt="Discount Buddy" 
        logoHref="/discount-buddy"
        ctaText="MarkitUp Group"
        ctaHref="/"
      />
      <main>
        <HeroSection />
        <FounderMessageSection />
        <PlatformArchitectureSection />
        <OfferManagementSection />
        <DashboardSection />
        <ReservationsSection />
        <BusinessIntelligenceSection />
        <LoyaltyCardSection />
        <FoundingPartnerSection />
        <VisibilityGrowthSection />
        <WelcomeCTASection />
        
        {/* SEO CONTENT & FAQ SECTION */}
        <SEOContentBlock title="The Ultimate Platform for Diners and Restaurants">
          <p>
            Discount Buddy is not just about finding great food; it's a complete ecosystem. For diners, we provide unmatched discounts. For owners, we ensure <strong>restaurant ease of managements</strong> with a powerful integrated <strong>booking system</strong> that handles reservation requests seamlessly.
          </p>
          <p>
            Our platform goes beyond simple listings. We offer robust tools for <strong>loyalty management</strong> to keep your best customers coming back. Through targeted <strong>restaurant promotion</strong> and effortless <strong>deals addition</strong>, we give you the flexibility to attract new patrons exactly when you need them. Looking to amplify your restaurant's brand on social media? Check out <Link href="/market-buddy">Market Buddy</Link> for influencer and content marketing.
          </p>

          <h3>Frequently Asked Questions for Restaurants</h3>
          <div>
            <h4>How does the deals addition feature work?</h4>
            <p>Our merchant portal allows you to easily publish percentage discounts, fixed-amount offers, combo deals, 2-for-1s, and seasonal campaigns directly to the app. This <strong>deals addition</strong> capability helps you manage quiet hours and boost footfall instantly.</p>
          </div>
          <div>
            <h4>How does the digital loyalty card feature work?</h4>
            <p>Our <strong>digital loyalty cards</strong> replace traditional paper punch cards. Diners collect digital stamps on their phone with each visit. Waitstaff scan their in-app QR code in 2 seconds to grant stamps or validate rewards, driving automated repeat visits and <strong>loyalty management</strong>.</p>
          </div>
          <div>
            <h4>Does the platform handle table bookings?</h4>
            <p>Yes. DiscountBuddy features a built-in <strong>reservation request system</strong>. When users request a table reservation, restaurant managers review each request and decide whether to accept or decline, keeping you in full control.</p>
          </div>
        </SEOContentBlock>
      </main>
      <Footer />
    </div>
  );
}
