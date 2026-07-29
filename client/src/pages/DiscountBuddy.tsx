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
  ArrowRight
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
    <div className="relative mx-auto w-[clamp(260px,40vw,320px)] aspect-[1/2.16] bg-black rounded-[clamp(2rem,4vw,3rem)] border-[clamp(6px,1vw,10px)] border-slate-900 shadow-2xl overflow-hidden shadow-purple-500/40 flex-shrink-0">
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
    <section className="relative pt-[clamp(2rem,4vw,4rem)] pb-[clamp(3rem,5vw,4rem)] overflow-hidden bg-gradient-to-b from-[#FAFBFF] to-white">
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
    { icon: Tag, title: "Discover deals", desc: "Find the best discounts at top restaurants near you.", color: "text-[#8A3FFC]", bg: "bg-purple-100/50" },
    { icon: CalendarCheck, title: "Book tables", desc: "Quick and easy table booking in just a few taps.", color: "text-[#8A3FFC]", bg: "bg-purple-100/50" },
    { icon: MapPin, title: "Explore nearby restaurants", desc: "Explore top-rated restaurants close to you.", color: "text-[#8A3FFC]", bg: "bg-purple-100/50" },
  ];

  const restaurantCards = [
    { icon: Users, title: "Increase footfall", desc: "Attract more diners with exclusive deals.", color: "text-[#ec4899]", bg: "bg-pink-100/50" },
    { icon: CalendarCheck, title: "Get bookings", desc: "Receive more bookings and reduce no-shows.", color: "text-[#ec4899]", bg: "bg-pink-100/50" },
    { icon: LineChart, title: "Track analytics", desc: "Understand performance and grow your business.", color: "text-[#ec4899]", bg: "bg-pink-100/50" },
  ];

  return (
    <section id="benefits" className="py-[clamp(3rem,5vw,4rem)] bg-white relative">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        
        {/* Large Rounded Container combining both sides */}
        <div className="bg-white rounded-[clamp(1.5rem,4vw,2.5rem)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* For Users Side */}
          <div className="flex-1 p-[clamp(1.5rem,4vw,3rem)] lg:border-r border-slate-100 bg-gradient-to-br from-white to-purple-50/30">
            <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold text-[#8A3FFC] text-center mb-[clamp(1.5rem,3vw,2rem)]">For Users</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {userCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center p-2"
                >
                  <div className={`w-[clamp(3rem,6vw,4rem)] h-[clamp(3rem,6vw,4rem)] rounded-full ${card.bg} ${card.color} flex items-center justify-center mb-4 shadow-sm`}>
                    <card.icon size={24} />
                  </div>
                  <h3 className="text-[clamp(1rem,1.25vw+0.5rem,1.125rem)] font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-[clamp(0.875rem,1vw+0.25rem,0.95rem)] text-slate-600 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* For Restaurants Side */}
          <div className="flex-1 p-[clamp(1.5rem,4vw,3rem)] border-t lg:border-t-0 border-slate-100 bg-gradient-to-br from-white to-pink-50/30">
            <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold text-[#ec4899] text-center mb-[clamp(1.5rem,3vw,2rem)]">For Restaurants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurantCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (i * 0.1) + 0.2 }}
                  className="flex flex-col items-center text-center p-2"
                >
                  <div className={`w-[clamp(3rem,6vw,4rem)] h-[clamp(3rem,6vw,4rem)] rounded-full ${card.bg} ${card.color} flex items-center justify-center mb-4 shadow-sm`}>
                    <card.icon size={24} />
                  </div>
                  <h3 className="text-[clamp(1rem,1.25vw+0.5rem,1.125rem)] font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-[clamp(0.875rem,1vw+0.25rem,0.95rem)] text-slate-600 leading-relaxed">{card.desc}</p>
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
              className="flex flex-col items-center text-center p-[clamp(1.5rem,3vw,2rem)] rounded-[clamp(1rem,2vw,1.5rem)] border border-slate-100 bg-white hover:border-[#8A3FFC]/30 hover:shadow-xl hover:shadow-[#8A3FFC]/5 transition-all duration-300 h-full"
            >
              <div className="w-[clamp(3rem,5vw,4rem)] h-[clamp(3rem,5vw,4rem)] rounded-full bg-slate-50 text-[#8A3FFC] flex items-center justify-center mb-5">
                <feat.icon size={24} />
              </div>
              <h3 className="text-[clamp(1rem,1.5vw+0.25rem,1.125rem)] font-bold text-slate-900 mb-2">{feat.title}</h3>
              <p className="text-[clamp(0.875rem,1vw+0.25rem,0.95rem)] text-slate-500">{feat.desc}</p>
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-purple-200 via-pink-200 to-amber-200 z-0"></div>
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className={`w-24 h-24 rounded-full ${step.bg} ${step.color} flex items-center justify-center mb-6 shadow-xl shadow-${step.bg.replace('bg-', '')}/50 border-4 border-white`}>
                <step.icon size={36} />
              </div>
              <div className="bg-white p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 w-full hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                <div className="text-slate-200 font-black text-6xl absolute -top-4 -left-2 z-0">{i+1}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">{step.desc}</p>
                </div>
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
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>
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
        <Testimonials />
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
