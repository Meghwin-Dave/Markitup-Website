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
  Apple
} from "lucide-react";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "For Users", href: "#users" },
    { name: "For Restaurants", href: "#restaurants" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex h-[78px] w-full items-center justify-between overflow-visible px-5 sm:px-8 lg:px-12 xl:px-[72px]">
        <div className="flex items-center justify-between w-full">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img 
              src="/images/discount_buddy_logo.png" 
              alt="DiscountBuddy Logo" 
              className="h-[clamp(32px,4vw,42px)] w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="text-[clamp(1.125rem,2vw,1.25rem)] font-extrabold text-slate-900 tracking-tight">
              DiscountBuddy
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[clamp(0.875rem,1vw,0.95rem)] font-bold text-slate-600 hover:text-[#8A3FFC] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <DownloadAppDropdown className="inline-flex items-center justify-center px-6 py-2.5 text-[0.9rem] font-bold text-slate-700 bg-white border border-slate-200 hover:border-[#8A3FFC] hover:text-[#8A3FFC] rounded-full transition-colors shadow-sm w-full">
                <Download size={16} className="mr-2" />
                Download App
              </DownloadAppDropdown>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-2.5 text-[0.9rem] font-bold text-white bg-gradient-to-r from-[#8A3FFC] to-[#ec4899] hover:-translate-y-0.5 rounded-full shadow-lg shadow-purple-500/25 transition-all duration-300"
              >
                Powered by MarkitUp
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-slate-800 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 lg:hidden overflow-hidden"
        >
          <div className="px-5 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-slate-700 hover:text-[#8A3FFC] py-2 border-b border-slate-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-2">
              <DownloadAppDropdown className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl">
                <Download size={18} className="mr-2" />
                Download App
              </DownloadAppDropdown>
              <Link
                href="/"
                className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-[#8A3FFC] to-[#ec4899] hover:opacity-90 transition-opacity rounded-xl shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Powered by MarkitUp
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
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
    <section className="relative pt-[clamp(7rem,12vw,10rem)] pb-[clamp(4rem,8vw,6rem)] overflow-hidden bg-gradient-to-b from-[#FAFBFF] to-white">
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
            <h1 className="text-[clamp(2.5rem,5vw+1rem,4.5rem)] leading-[1.05] font-extrabold text-slate-900 tracking-tight mb-6 w-full">
              More Deals.<br />
              More Bookings.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A3FFC] to-[#ec4899]">
                More Growth.
              </span>
            </h1>
            <p className="text-[clamp(1rem,1.5vw+0.5rem,1.25rem)] text-slate-600 mb-8 max-w-lg leading-relaxed">
              DiscountBuddy brings together food lovers and great restaurants. Users save more. Restaurants get more bookings, more loyal customers, and real growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <DownloadAppDropdown className="inline-flex items-center justify-center gap-2 px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(0.875rem,2vw,1.125rem)] text-[clamp(0.9rem,1vw+0.5rem,1rem)] font-bold text-white bg-[#8A3FFC] hover:bg-[#722CE3] rounded-full shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-1 w-full sm:w-auto">
                <Smartphone size={20} />
                Download App
              </DownloadAppDropdown>
              <a
                href="#partner"
                className="inline-flex items-center justify-center gap-2 px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(0.875rem,2vw,1.125rem)] text-[clamp(0.9rem,1vw+0.5rem,1rem)] font-bold text-[#8A3FFC] bg-purple-50 border border-purple-100 hover:border-purple-300 hover:bg-purple-100 rounded-full shadow-sm transition-all hover:-translate-y-1 w-full sm:w-auto"
              >
                <Store size={20} />
                Become a Partner
              </a>
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
    <section id="benefits" className="py-[clamp(3rem,6vw,6rem)] bg-white relative">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        
        {/* Large Rounded Container combining both sides */}
        <div className="bg-white rounded-[clamp(1.5rem,4vw,2.5rem)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* For Users Side */}
          <div className="flex-1 p-[clamp(1.5rem,4vw,3rem)] lg:border-r border-slate-100 bg-gradient-to-br from-white to-purple-50/30">
            <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold text-[#8A3FFC] text-center mb-[clamp(2rem,4vw,3rem)]">For Users</h2>
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
            <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold text-[#ec4899] text-center mb-[clamp(2rem,4vw,3rem)]">For Restaurants</h2>
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
    <section id="features" className="py-[clamp(2rem,5vw,4rem)] bg-white relative">
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

const Statistics = () => {
  const stats = [
    { value: "500K+", label: "Downloads", icon: Download, bg: "bg-[#8A3FFC]", color: "text-[#8A3FFC]" },
    { value: "2,500+", label: "Restaurants", icon: Store, bg: "bg-[#ec4899]", color: "text-[#ec4899]" },
    { value: "4.6", label: "Rating", desc: "on App Store & Google Play", icon: Star, bg: "bg-[#f59e0b]", color: "text-[#f59e0b]" },
  ];

  return (
    <section className="py-[clamp(2rem,5vw,4rem)] bg-white">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1rem,2vw,2rem)]">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-5 p-[clamp(1.5rem,3vw,2rem)] bg-white rounded-[clamp(1rem,2vw,1.5rem)] shadow-sm border border-slate-100">
              <div className={`w-[clamp(3.5rem,6vw,4.5rem)] h-[clamp(3.5rem,6vw,4.5rem)] rounded-full ${stat.bg} text-white flex items-center justify-center flex-shrink-0 shadow-md`}>
                <stat.icon size={28} />
              </div>
              <div>
                <h4 className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold text-slate-900 leading-tight">{stat.value}</h4>
                <p className="text-[clamp(0.875rem,1.25vw,1rem)] font-bold text-slate-700">{stat.label}</p>
                {stat.desc && <p className="text-[clamp(0.7rem,1vw,0.75rem)] text-slate-400 font-medium">{stat.desc}</p>}
              </div>
            </div>
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
    <section className="py-[clamp(3rem,6vw,6rem)] bg-white">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        <div className="text-center mb-[clamp(2rem,4vw,3rem)]">
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

const CTABanner = () => {
  return (
    <section className="py-[clamp(3rem,6vw,5rem)] bg-white px-5 lg:px-8 xl:px-12">
      <div className="container mx-auto max-w-[1440px]">
        <div className="relative rounded-[clamp(1.5rem,4vw,2.5rem)] overflow-hidden bg-gradient-to-r from-[#8A3FFC] via-[#b630e6] to-[#ec4899] p-[clamp(2rem,5vw,4rem)] flex flex-col items-center text-center shadow-2xl shadow-purple-500/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          <h2 className="relative z-10 text-[clamp(2rem,4vw,3rem)] font-extrabold text-white mb-3">Let's grow together</h2>
          <p className="relative z-10 text-white/90 text-[clamp(1rem,1.5vw,1.125rem)] font-medium mb-[clamp(2rem,4vw,3rem)]">
            More deals. More bookings. More success.
          </p>
          
          <div className="relative z-10 flex flex-col sm:flex-row flex-wrap gap-[clamp(0.75rem,2vw,1rem)] w-full sm:w-auto justify-center">
            <DownloadAppDropdown className="flex items-center justify-center gap-3 px-[clamp(1.5rem,3vw,2rem)] py-[clamp(1rem,2vw,1.25rem)] bg-white text-[#8A3FFC] rounded-xl font-bold shadow-lg hover:bg-slate-50 transition-colors w-full sm:w-auto flex-1 sm:flex-none">
              <Smartphone size={20} className="flex-shrink-0" />
              <div className="text-left leading-tight">
                <span className="block text-sm">Download App</span>
                <span className="block text-[10px] font-medium text-slate-400">Get the app and start saving</span>
              </div>
            </DownloadAppDropdown>
            <a href="#partner" className="flex items-center justify-center gap-3 px-[clamp(1.5rem,3vw,2rem)] py-[clamp(1rem,2vw,1.25rem)] bg-white text-[#ec4899] rounded-xl font-bold shadow-lg hover:bg-slate-50 transition-colors w-full sm:w-auto flex-1 sm:flex-none">
              <Store size={20} className="flex-shrink-0" />
              <div className="text-left leading-tight">
                <span className="block text-sm">Become a Partner</span>
                <span className="block text-[10px] font-medium text-slate-400">List your restaurant and grow</span>
              </div>
            </a>
            <a href="/contact" className="flex items-center justify-center gap-3 px-[clamp(1.5rem,3vw,2rem)] py-[clamp(1rem,2vw,1.25rem)] bg-white/20 backdrop-blur text-white border border-white/30 rounded-xl font-bold hover:bg-white/30 transition-colors w-full sm:w-auto flex-1 sm:flex-none">
              <span className="text-sm">Talk to Our Team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const DiscountBuddyFooter = () => {
  return (
    <footer className="bg-slate-50 pt-[clamp(3rem,6vw,5rem)] pb-[clamp(1.5rem,3vw,2rem)] border-t border-slate-200">
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(2rem,4vw,3rem)] mb-[clamp(3rem,6vw,4rem)]">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <img 
                src="/images/discount_buddy_logo.png" 
                alt="DiscountBuddy Logo" 
                className="h-[clamp(28px,3vw,36px)] w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="text-[clamp(1rem,1.5vw,1.125rem)] font-extrabold text-slate-900 tracking-tight">
                DiscountBuddy
              </span>
            </Link>
            <p className="text-[clamp(0.875rem,1vw,0.95rem)] text-slate-500 mb-6 max-w-sm">
              The premium platform for discovering restaurant deals and booking tables instantly. 
              We bring together food lovers and great restaurants.
            </p>
            <div className="flex items-center gap-3">
              {['Facebook', 'Twitter', 'Instagram'].map((social, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#8A3FFC] hover:border-[#8A3FFC] transition-colors shadow-sm">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">For Users</h4>
            <ul className="space-y-3">
              <li><a href="#users" className="text-slate-500 hover:text-[#8A3FFC] text-sm font-medium transition-colors">Discover Deals</a></li>
              <li><a href="#users" className="text-slate-500 hover:text-[#8A3FFC] text-sm font-medium transition-colors">Book Tables</a></li>
              <li><a href="#download" className="text-slate-500 hover:text-[#8A3FFC] text-sm font-medium transition-colors">Download App</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">For Restaurants</h4>
            <ul className="space-y-3">
              <li><a href="#restaurants" className="text-slate-500 hover:text-[#8A3FFC] text-sm font-medium transition-colors">Partner With Us</a></li>
              <li><a href="#features" className="text-slate-500 hover:text-[#8A3FFC] text-sm font-medium transition-colors">Features & Analytics</a></li>
              <li><a href="#restaurants" className="text-slate-500 hover:text-[#8A3FFC] text-sm font-medium transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Get the App</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://apps.apple.com/gb/app/discount-buddy-deals/id6760362068" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-lg hover:-translate-y-0.5 hover:scale-105 hover:bg-slate-800 transition-all shadow-sm"
              >
                <span className="font-semibold text-sm">App Store</span>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.discountbuddy.app&pcampaignid=web_share" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-lg hover:-translate-y-0.5 hover:scale-105 hover:bg-slate-800 transition-all shadow-sm"
              >
                <span className="font-semibold text-sm">Google Play</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs sm:text-sm font-medium">
            © {new Date().getFullYear()} DiscountBuddy (Part of MarkitUp Group). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-slate-400 hover:text-slate-600 text-xs sm:text-sm font-medium transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions" className="text-slate-400 hover:text-slate-600 text-xs sm:text-sm font-medium transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function DiscountBuddy() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-purple-200 selection:text-purple-900">
      <SEOHead
        title="Discount Buddy | Deals & Bookings"
        description="Premium platform for discovering restaurant deals and booking tables instantly."
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

      <Navbar />
      <main>
        <HeroSection />
        <CombinedBenefits />
        <FeaturesGrid />
        <Statistics />
        <Testimonials />
        <CTABanner />
      </main>
      <DiscountBuddyFooter />
    </div>
  );
}
