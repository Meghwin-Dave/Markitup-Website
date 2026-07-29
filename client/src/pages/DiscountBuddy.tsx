import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
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
  Code,
  Eye,
  Layers
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
            className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-full mt-2 w-full sm:w-64 bg-white/90 backdrop-blur-xl rounded-2xl p-2 shadow-[0_20px_60px_-15px_rgba(108,59,255,0.2)] border border-white/50 z-[100] overflow-hidden origin-top"
          >
            <div className="flex flex-col gap-1">
              <a 
                href="https://play.google.com/store/apps/details?id=com.discountbuddy.app&pcampaignid=web_share" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-105 group-hover:bg-[#8A3FFC] group-hover:text-white transition-all shadow-sm">
                  <Play size={18} className="ml-0.5 fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-800">Android</p>
                  <p className="text-[10px] text-slate-500 font-medium">Google Play Store</p>
                </div>
              </a>
              
              <a 
                href="https://apps.apple.com/gb/app/discount-buddy-deals/id6760362068" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group text-left w-full relative"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:scale-105 group-hover:bg-slate-200 group-hover:text-slate-800 transition-all shadow-sm">
                  <Apple size={18} className="mb-0.5 fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-800">iOS</p>
                  <p className="text-[10px] text-slate-500 font-medium">App Store</p>
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
    <div className="relative mx-auto w-[clamp(16.25rem,32vw,18rem)] aspect-[1/2.16] bg-black rounded-[clamp(2rem,4vw,3rem)] border-8 border-slate-900 shadow-2xl overflow-hidden shadow-purple-500/40 flex-shrink-0">
      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 inset-x-0 h-[clamp(20px,3vw,28px)] flex justify-center z-20 pointer-events-none">
        <div className="w-[30%] h-full bg-slate-900 rounded-b-[clamp(10px,1.5vw,16px)]"></div>
      </div>

      {/* Screenshot Image */}
      <div className="relative h-full w-full bg-slate-50 overflow-hidden">
        <img 
          src="/images/discount-buddy-phone-screen.png" 
          alt="DiscountBuddy App Screenshot" 
          className="w-full h-full object-cover object-top"
          onError={(e) => {
             // Fallback just in case the filename is different
             (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=600&auto=format&fit=crop';
          }}
        />
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative pt-[clamp(0.5rem,1.5vw,1.5rem)] pb-[clamp(3rem,5vw,4rem)] overflow-hidden bg-gradient-to-b from-[#FAFBFF] to-white">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-0 w-[clamp(300px,50vw,500px)] h-[clamp(300px,50vw,500px)] bg-purple-400/10 rounded-full blur-[clamp(50px,8vw,100px)] pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[clamp(400px,60vw,600px)] h-[clamp(400px,60vw,600px)] bg-pink-400/10 rounded-full blur-[clamp(60px,10vw,120px)] pointer-events-none"></div>
      
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(3rem,6vw,5rem)] items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 w-full leading-tight">
              More Deals.<br />
              More Bookings.<br />
              <span className="brand-gradient-text">
                More Growth.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              DiscountBuddy brings together food lovers and great restaurants. Users save more. Restaurants get more bookings, more loyal customers, and real growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <DownloadAppDropdown className="gradient-button inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1 w-full sm:w-auto">
                <Smartphone size={20} />
                Download App
              </DownloadAppDropdown>

            </div>
            
            <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm px-5 py-2.5 rounded-full border border-slate-100">
              <div className="flex -space-x-2">
                <CheckCircle2 size={24} className="text-[#8A3FFC]" />
              </div>
              <p className="text-[clamp(0.75rem,1vw+0.25rem,0.875rem)] text-slate-600 font-medium">
                Trusted by thousands across the UK
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-[clamp(40px,8vw,80px)] -z-10 w-[80%] h-[80%] m-auto pointer-events-none"></div>
            
            {/* Floating Elements (Hidden on very small screens to prevent overflow/clutter) */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -left-4 sm:left-4 lg:-left-6 bg-white p-3 rounded-2xl shadow-xl border border-slate-50 z-20 hidden xs:flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 flex-shrink-0">
                <Tag size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Live Deals</p>
                <p className="text-[10px] text-slate-500">Updated in real-time</p>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 -right-4 sm:right-0 lg:-right-8 bg-white p-3 rounded-2xl shadow-xl border border-slate-50 z-20 hidden xs:flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 flex-shrink-0">
                <BadgePercent size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">30% OFF</p>
                <p className="text-[10px] text-slate-500">Limited time offer</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -translate-y-1/2 -right-2 sm:right-6 lg:-right-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-50 z-20 hidden md:flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 flex-shrink-0">
                <Star size={20} className="fill-amber-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Top Rated</p>
                <p className="text-[10px] text-slate-500">Restaurants near you</p>
              </div>
            </motion.div>

            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CombinedBenefits = () => {
  const userCards = [
    { icon: Tag, title: "Discover & Save", desc: "Find the best discounts at top restaurants and track your savings.", color: "text-[#8A3FFC]", bg: "bg-purple-100/50" },
    { icon: CalendarCheck, title: "Seamless Bookings", desc: "Quick and easy table booking with instant confirmations.", color: "text-[#8A3FFC]", bg: "bg-purple-100/50" },
    { icon: Gift, title: "Gamified Rewards", desc: "Earn points, unlock badges, and participate in our Mystery Guest program.", color: "text-[#8A3FFC]", bg: "bg-purple-100/50" },
  ];

  const restaurantCards = [
    { icon: Users, title: "Reach More Customers", desc: "Attract more diners during slow hours with targeted, exclusive deals.", color: "text-[#ec4899]", bg: "bg-pink-100/50" },
    { icon: Smartphone, title: "Instant QR Validation", desc: "Validate customer vouchers instantly right at the table.", color: "text-[#ec4899]", bg: "bg-pink-100/50" },
    { icon: Star, title: "Actionable Feedback", desc: "Gain invaluable insights through verified reviews and Mystery Guests.", color: "text-[#ec4899]", bg: "bg-pink-100/50" },
  ];

  return (
    <section id="benefits" className="py-[clamp(3rem,5vw,4rem)] bg-white relative">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        
        {/* Large Rounded Container combining both sides */}
        <div className="bg-white rounded-[clamp(1.5rem,4vw,2.5rem)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row relative">
          
          {/* For Users Side */}
          <div className="flex-1 p-[clamp(2rem,4vw,4rem)] lg:border-r border-slate-100 bg-gradient-to-br from-white via-purple-50/20 to-purple-100/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[18.75rem] bg-purple-300/10 rounded-full blur-[60px] pointer-events-none"></div>
            <h2 className="text-[clamp(1.75rem,2.5vw,2.25rem)] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8A3FFC] to-purple-500 text-center mb-[clamp(2rem,4vw,3rem)]">For Users</h2>
            <div className="flex flex-col gap-5 relative z-10">
              {userCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-row items-center text-left p-5 rounded-2xl bg-white/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:translate-x-1 hover:shadow-lg transition-all duration-300 gap-5"
                >
                  <div className={`w-14 h-14 shrink-0 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center shadow-sm transform -rotate-3`}>
                    <card.icon size={26} className="transform rotate-3" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{card.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* For Restaurants Side */}
          <div className="flex-1 p-[clamp(2rem,4vw,4rem)] border-t lg:border-t-0 border-slate-100 bg-gradient-to-bl from-white via-pink-50/20 to-pink-100/40 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[300px] h-[18.75rem] bg-pink-300/10 rounded-full blur-[60px] pointer-events-none"></div>
            <h2 className="text-[clamp(1.75rem,2.5vw,2.25rem)] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-pink-500 text-center mb-[clamp(2rem,4vw,3rem)]">For Restaurants</h2>
            <div className="flex flex-col gap-5 relative z-10">
              {restaurantCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (i * 0.1) + 0.2 }}
                  className="flex flex-row items-center text-left p-5 rounded-2xl bg-white/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:-translate-x-1 hover:shadow-lg transition-all duration-300 gap-5"
                >
                  <div className={`w-14 h-14 shrink-0 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center shadow-sm transform rotate-3`}>
                    <card.icon size={26} className="transform -rotate-3" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{card.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FeaturesGrid = () => {
  const features = [
    { title: "Live Deals", desc: "Exclusive offers updated in real-time.", icon: Tag },
    { title: "Table Booking", desc: "Seamless booking experience.", icon: CalendarCheck },
    { title: "Gamified Rewards", desc: "Earn badges and level up as you dine.", icon: Gift },
    { title: "Track Savings", desc: "Monitor exactly how much you save.", icon: BadgePercent },
    { title: "Mystery Guest", desc: "Review restaurants anonymously for perks.", icon: Search },
    { title: "QR Validation", desc: "Instant deal redemption at the table.", icon: Smartphone },
    { title: "Reviews", desc: "Genuine reviews from real diners.", icon: Star },
    { title: "Analytics", desc: "Powerful insights to grow your business.", icon: LineChart },
  ];

  return (
    <section id="features" className="py-[clamp(2rem,4vw,3rem)] bg-white relative">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(1rem,2vw,1.5rem)]">
          {features.map((feat, i) => (
              <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-[clamp(1.5rem,3vw,2rem)] rounded-3xl border border-slate-100 bg-white shadow-sm hover:border-[#8A3FFC]/30 hover:shadow-2xl hover:shadow-[#8A3FFC]/10 hover:-translate-y-1 transition-all duration-300 h-full group"
            >
              <div className="w-[clamp(3.5rem,5vw,4.5rem)] h-[clamp(3.5rem,5vw,4.5rem)] rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 text-[#8A3FFC] group-hover:text-white group-hover:from-[#8A3FFC] group-hover:to-purple-500 flex items-center justify-center mb-6 shadow-sm border border-purple-100/50 transition-colors duration-300 transform group-hover:rotate-6">
                <feat.icon size={28} />
              </div>
              <h3 className="text-[clamp(1.1rem,1.5vw+0.25rem,1.2rem)] font-bold text-slate-900 mb-3">{feat.title}</h3>
              <p className="text-[clamp(0.875rem,1vw+0.25rem,0.95rem)] text-slate-600 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Testimonials = () => {
  const reviews = [
    {
      text: "DiscountBuddy has helped us increase footfall by 35%. It's a game changer!",
      author: "James Thomas",
      role: "General Manager",
      brand: "THE IVY",
      img: "https://i.pravatar.cc/100?img=11"
    },
    {
      text: "We get more quality bookings and love the analytics. Highly recommended.",
      author: "Rizwan Kassam",
      role: "Operations Manager",
      brand: "DISHOOM",
      img: "https://i.pravatar.cc/100?img=5"
    },
    {
      text: "The platform is simple, effective and brings in great customers.",
      author: "Stefan Chomka",
      role: "Co-Founder",
      brand: "FATT PUNDIT",
      img: "https://i.pravatar.cc/100?img=12"
    }
  ];

  return (
    <section className="py-[clamp(3rem,5vw,4rem)] bg-white">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        <div className="text-center mb-[clamp(1.5rem,3vw,2rem)]">
          <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold text-slate-900 inline-block relative">
            Loved by Restaurants
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-slate-200 rounded-full"></span>
          </h2>
        </div>
        
        {/* CSS Scroll-Snap Carousel for Mobile / Grid for Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-[clamp(1rem,2vw,1.5rem)] pb-8 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible">
          {reviews.map((review, i) => (
            <div key={i} className="min-w-[280px] w-[85vw] sm:w-[320px] md:w-auto snap-center flex-shrink-0 flex flex-col p-[clamp(1.5rem,3vw,2rem)] rounded-[clamp(1rem,2vw,1.5rem)] bg-white border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] relative">
              <span className="text-4xl text-[#8A3FFC]/20 font-serif leading-none absolute top-6 left-6">"</span>
              <p className="text-[clamp(0.875rem,1.25vw,1rem)] text-slate-600 font-medium mb-8 relative z-10 pt-6 flex-1">
                {review.text}
              </p>
              <div className="flex items-center gap-4 mt-auto border-t border-slate-50 pt-4">
                <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center font-black text-[10px] text-slate-800 tracking-tighter">
                  {review.brand}
                </div>
                <div>
                  <p className="text-[clamp(0.875rem,1vw,0.9rem)] font-bold text-slate-900">{review.author}</p>
                  <p className="text-[clamp(0.7rem,1vw,0.75rem)] text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GamificationSection = () => {
  const perks = [
    { title: "Level Progression", desc: "Rise through the ranks from Bronze to 'Local Foodie' based on your activity.", icon: TrendingUp },
    { title: "Collectible Badges", desc: "Earn achievements like 'First Booking' or 'Deal Hunter' as you dine.", icon: Award },
    { title: "Weekly Stats", desc: "Track your redemptions and see exactly how much you're saving week over week.", icon: LineChart }
  ];

  return (
    <section className="py-[clamp(3rem,5vw,4rem)] bg-gradient-to-br from-[#8A3FFC]/5 to-transparent relative border-t border-slate-100">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        <div className="grid lg:grid-cols-2 gap-[clamp(2rem,4vw,4rem)] items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#8A3FFC]">Gamified Experience</p>
            <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-extrabold text-slate-900 mb-6 leading-tight">
              Dine, Earn & <br className="hidden sm:block" />
              <span className="brand-gradient-text">Level Up.</span>
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-8 text-[clamp(1rem,1.2vw,1.125rem)]">
              We make dining out not just affordable, but fun. Engage with restaurants, leave authentic reviews, and claim deals to earn points and climb the ranks.
            </p>
            <div className="grid gap-6">
              {perks.map((perk, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#8A3FFC] flex-shrink-0">
                    <perk.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{perk.title}</h4>
                    <p className="text-slate-500 text-sm">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8A3FFC]/20 to-[#ec4899]/20 rounded-full blur-[60px] -z-10"></div>
            <div className="bg-white p-[clamp(2rem,4vw,3rem)] rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center justify-center min-h-[25rem] relative overflow-hidden">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10 mb-6 animate-[bounce_3s_infinite]">
                <Trophy size={60} className="text-white drop-shadow-md" />
              </div>
              <h3 className="text-2xl font-black text-slate-800 z-10">Local Foodie</h3>
              <p className="text-slate-500 font-medium mt-2 z-10">Level 42 Achieved</p>
              
              <div className="absolute top-10 left-10 w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-pink-500 transform -rotate-12"><Medal size={28} /></div>
              <div className="absolute bottom-16 right-12 w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center text-blue-500 transform rotate-12"><Award size={24} /></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MysteryGuestSection = () => {
  return (
    <section className="py-[clamp(3rem,5vw,4rem)] bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[37.5rem] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15),transparent_60%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px] relative z-10">
        <div className="text-center mb-[clamp(3rem,4vw,4rem)] max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-pink-400 font-bold text-xs uppercase tracking-widest mb-6">
            <Eye size={16} /> Exclusive Program
          </div>
          <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-extrabold mb-6 text-white">The Mystery Guest Program</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            A unique module allowing selected users to evaluate restaurants anonymously. Enjoy complimentary experiences while providing businesses with actionable, high-quality feedback.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: CalendarCheck, title: "Assigned Visits", desc: "Get scheduled to visit specific restaurants anonymously as an undercover evaluator." },
            { icon: ClipboardCheck, title: "Detailed Evaluation", desc: "Fill out detailed scorecards covering cleanliness, service, and food quality." },
            { icon: Camera, title: "Evidence Upload", desc: "Attach photographic evidence and detailed comments to support your scorecard." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white/10 border border-white/20 rounded-[2rem] p-8 hover:bg-white/20 hover:border-pink-400/50 transition-all duration-300 backdrop-blur-md shadow-xl group"
            >
              <div className="w-16 h-16 bg-pink-500/20 text-pink-400 rounded-2xl flex items-center justify-center mb-6 border border-pink-400/20 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStackSection = () => {
  const tech = [
    { name: "Flutter & Dart", icon: Smartphone, color: "text-blue-500" },
    { name: "Firebase (FCM)", icon: Bell, color: "text-amber-500" },
    { name: "Secure Storage", icon: Lock, color: "text-slate-700" },
    { name: "RESTful API", icon: Database, color: "text-emerald-500" },
    { name: "Geo & Mapping", icon: MapPin, color: "text-red-500" },
    { name: "QR Scanner", icon: Camera, color: "text-purple-500" },
  ];

  return (
    <section className="py-[clamp(3rem,4vw,4rem)] bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-4">Robust Architecture & Technology</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              DiscountBuddy is engineered for performance, security, and scalability. Utilizing modern cross-platform frameworks and robust cloud infrastructure to deliver a seamless experience for both users and merchants.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
            {tech.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`p-2 rounded-lg bg-slate-50 border border-slate-100 ${item.color}`}>
                  <item.icon size={20} />
                </div>
                <span className="font-bold text-slate-800 text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const HowItWorks = () => {
  const steps = [
    { title: "Download & Browse", desc: "Get the app and explore exclusive restaurant deals near you.", icon: Search, color: "text-[#8A3FFC]", bg: "bg-purple-100" },
    { title: "Claim Your Deal", desc: "Select a deal and reserve your table in just a few taps.", icon: CalendarCheck, color: "text-[#ec4899]", bg: "bg-pink-100" },
    { title: "Enjoy & Save", desc: "Dine at the restaurant and enjoy your instant savings.", icon: Tag, color: "text-[#f59e0b]", bg: "bg-amber-100" }
  ];

  return (
    <section className="py-[clamp(4rem,6vw,5rem)] bg-[#FAFBFF] relative border-y border-slate-100">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        <div className="text-center mb-[clamp(3rem,5vw,4rem)]">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#8A3FFC]">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Three simple steps to save</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative mt-8">
          {/* Connector line for desktop - adjusted top to align exactly with circle centers */}
          <div className="hidden md:block absolute top-[3rem] left-[16%] right-[16%] h-1 bg-gradient-to-r from-purple-200 via-pink-200 to-amber-200 z-0 rounded-full opacity-60"></div>
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className={`relative w-24 h-24 rounded-full ${step.bg} ${step.color} flex items-center justify-center mb-8 shadow-xl shadow-${step.bg.replace('bg-', '')}/50 border-4 border-white group-hover:scale-110 transition-transform duration-300`}>
                <step.icon size={36} />
                
                {/* Number Badge placed beautifully on the circle */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-sm border-2 border-white shadow-md">
                  {i+1}
                </div>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 w-full group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-purple-100 transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 font-medium text-[0.95rem] leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTABanner = () => {
  return (
    <section className="py-[clamp(3rem,5vw,4rem)] bg-white px-5 lg:px-8 xl:px-12 relative">
      <div className="container mx-auto max-w-[1440px]">
        <div className="relative rounded-[3rem] bg-slate-900 p-[clamp(2rem,4vw,3rem)] flex flex-col items-center text-center shadow-[0_30px_60px_rgba(15,23,42,0.15)] group z-10">
          
          {/* Subtle animated background gradient */}
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden pointer-events-none z-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#8A3FFC]/40 to-pink-500/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[25rem] bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          </div>
          
          <div className="relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white shadow-sm backdrop-blur-md">
            <TrendingUp size={16} className="text-[#ec4899]" />
            Join the Ecosystem
          </div>
          
          <h2 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight max-w-3xl">
            Let's grow <span className="brand-gradient-text">together.</span>
          </h2>
          <p className="relative z-10 text-slate-300 text-[clamp(1.125rem,1.5vw,1.375rem)] font-medium mb-[clamp(2rem,4vw,3rem)] max-w-2xl leading-relaxed">
            More deals. More bookings. More success. Join thousands of users and restaurants on the platform.
          </p>
          
          <div className="relative z-30 flex flex-col sm:flex-row flex-wrap gap-4 w-full justify-center items-center">
            <DownloadAppDropdown className="group/btn relative flex items-center justify-center gap-3 px-8 py-4 gradient-button text-white rounded-2xl font-bold transition-transform duration-300 hover:-translate-y-1 w-full sm:w-auto min-w-[200px]">
              <Smartphone size={20} className="flex-shrink-0" />
              <div className="text-left leading-tight">
                <span className="block text-sm">Download App</span>
                <span className="block text-[10px] font-medium text-white/80">Get the app & save</span>
              </div>
            </DownloadAppDropdown>
            

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
    "name": "Discount Buddy - Restaurant Deals & Booking Platform",
    "description": "Discover top restaurant deals or manage your restaurant with ease. Seamless booking system, loyalty management, and restaurant promotion.",
    "provider": {
      "@type": "Organization",
      "name": "MarkitUp Group Limited",
      "url": "https://markitupgroup.com"
    },
    "serviceType": "Hospitality Software & Marketing",
    "areaServed": "GB"
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900">
      <SEOHead
        title="Discount Buddy by MarkitUp Group | Restaurant Deals & Promotion"
        description="Discover top restaurant deals or manage your restaurant with ease. We offer a seamless booking system, loyalty management, restaurant promotion, and deals addition."
        keywords="restaurant ease of managements, booking system, loyalty management, restaurant promotion, deals addition"
        canonical="https://markitupgroup.com/discount-buddy"
        structuredData={structuredData}
      />
      
      {/* Global styles for hide-scrollbar (used in Testimonials) */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <Header 
        logoOverride="/images/discount_buddy_logo.png" 
        logoAlt="Discount Buddy" 
        logoHref="/discount-buddy"
        ctaText="MarkitUp Group"
        ctaHref="/"
      />
      <main>
        <HeroSection />
        <CombinedBenefits />
        <HowItWorks />
        <FeaturesGrid />
        <GamificationSection />
        <MysteryGuestSection />
        <Testimonials />
        <TechStackSection />
        <CTABanner />
        
        {/* SEO CONTENT & FAQ SECTION */}
        <SEOContentBlock title="The Ultimate Platform for Diners and Restaurants">
          <p>
            Discount Buddy is not just about finding great food; it's a complete ecosystem. For diners, we provide unmatched discounts. For owners, we ensure <strong>restaurant ease of managements</strong> with a powerful integrated <strong>booking system</strong> that handles reservations seamlessly.
          </p>
          <p>
            Our platform goes beyond simple listings. We offer robust tools for <strong>loyalty management</strong> to keep your best customers coming back. Through targeted <strong>restaurant promotion</strong> and effortless <strong>deals addition</strong>, we give you the flexibility to attract new patrons exactly when you need them. Looking to amplify your restaurant's brand on social media? Check out <Link href="/market-buddy">Market Buddy</Link> for influencer and content marketing.
          </p>

          <h3>Frequently Asked Questions for Restaurants</h3>
          <div>
            <h4>How does the deals addition feature work?</h4>
            <p>Our merchant portal allows you to easily publish time-sensitive offers directly to the app. This <strong>deals addition</strong> capability helps you manage quiet hours and boost footfall instantly.</p>
          </div>
          <div>
            <h4>Does the platform handle table bookings?</h4>
            <p>Yes. DiscountBuddy features a built-in <strong>booking system</strong>. When users claim a deal, they reserve a table concurrently, ensuring seamless <strong>restaurant ease of managements</strong>.</p>
          </div>
        </SEOContentBlock>
      </main>
      <Footer />
    </div>
  );
}
