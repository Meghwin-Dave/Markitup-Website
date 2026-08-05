import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { 
  ArrowRight, TrendingUp, Users, CheckCircle2, Star, Rocket, 
  MapPin, Calendar, Sparkles, Utensils, Music, Share2, 
  Quote, ShieldCheck, ChevronRight, Eye, UserCheck, Flame
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";

// --- Realistic & Defensible Case Study Data ---
interface CaseStudyData {
  id: string;
  client: string;
  location: string;
  industry: string;
  category: string;
  timeline: string;
  tagline: string;
  overview: string;
  image: string;
  gradient: string;
  textColor: string;
  bgLight: string;
  borderColor: string;
  heroMetrics: { value: string; label: string; sub?: string }[];
  challenge: string[];
  strategyOverview: string;
  strategyPoints: string[];
  campaignHighlights?: { title: string; desc: string; iconEmoji?: string }[];
  servicesDelivered: string[];
  contentDelivered: string[];
  resultsPerformance: string[];
  audienceQuality?: string[];
  businessImpact: string[];
  testimonial: {
    quote: string;
    author: string;
    rating: string;
    satisfaction: string;
  };
  seoKeywords: string[];
}

const caseStudies: CaseStudyData[] = [
  {
    id: "pizza-4-you",
    client: "Pizza 4 You",
    location: "Wembley & London, UK",
    industry: "Restaurant • Pizzeria • Bistro & Café",
    category: "Restaurant Growth & Community Marketing",
    timeline: "Retained Partner Since April 2026",
    tagline: "Social Media Growth, Community-First Marketing & Branch Launch",
    overview:
      "Pizza 4 You partnered with MarketBuddy by MarkitUp Group to strengthen its digital presence, increase local brand awareness, and support the successful launch of its second branch, Pizza 4 You Bistro & Café in Wembley. Our engagement started in April 2026 and continues today as an ongoing marketing partnership.",
    image: "/images/restaurant_success.png",
    gradient: "from-[#FF7A00] to-[#FF2E78]",
    textColor: "text-[#FF7A00]",
    bgLight: "bg-[#FF7A00]/10",
    borderColor: "border-[#FF7A00]/30",
    heroMetrics: [
      { value: "150,000+", label: "Organic Video Views", sub: "Across managed content" },
      { value: "100,000+", label: "Local Accounts Reached", sub: "Wembley & surrounding area" },
      { value: "37,200+", label: "Grand Launch Reel Views", sub: "27,800+ accounts reached" },
      { value: "40+", label: "Content Pieces Delivered", sub: "10-15 premium UGC reels" },
    ],
    challenge: [
      "Limited local digital visibility and awareness prior to campaign launch.",
      "Launching a brand-new restaurant branch (Pizza 4 You Bistro & Café in Wembley).",
      "Need to authentically attract both the UK Gujarati community and broad local diners.",
      "Low-performing legacy Instagram presence with inconsistent engagement.",
      "Required a unified, consistent brand identity and tone across both locations.",
    ],
    strategyOverview:
      "Instead of relying on generic food imagery, we built a community-first marketing strategy. One of our core differentiators was putting the restaurant owner at the centre of the content, creating an authentic connection with customers and cultivating high brand trust.",
    strategyPoints: [
      "Owner-led UGC video content to build personal rapport and trust.",
      "Culturally tailored Gujarati-language videos crafted for Wembley and North London audiences.",
      "High-production product showcases highlighting signature menu items.",
      "Comprehensive restaurant campaign planning and structured content calendars.",
      "Organic Instagram growth with seasonal promotions and giveaway activations.",
      "Branch launch marketing with local influencer collaborations and Wembley-targeted SEO.",
    ],
    campaignHighlights: [
      {
        title: "Grand Opening Campaign",
        desc: "Planned and executed the complete launch content strategy for Pizza 4 You Bistro & Café in Wembley, generating 37,200+ organic views and 27,800+ local accounts reached on the launch reel.",
        iconEmoji: "🍕",
      },
      {
        title: "Community & Party Order Marketing",
        desc: "Executed ongoing campaigns for bulk party orders, dessert promotions, owner trust videos, and seasonal offers, keeping Pizza 4 You consistently top-of-mind.",
        iconEmoji: "🎉",
      },
    ],
    servicesDelivered: [
      "Social Media Management",
      "UGC Video Production",
      "Instagram Reels Strategy",
      "Monthly Content Calendar",
      "Graphic Design & Creatives",
      "Campaign Management",
      "Organic Growth Strategy",
      "Local Community Marketing",
      "Brand Positioning",
      "Instagram Profile & SEO Optimisation",
    ],
    contentDelivered: [
      "40+ content pieces published",
      "10–15 premium UGC reels produced",
      "High-resolution food & restaurant photography",
      "Promotional story campaigns & launch creatives",
    ],
    resultsPerformance: [
      "150,000+ combined organic video views across managed content.",
      "100,000+ local accounts reached without relying on heavy paid ad spend.",
      "37,200+ organic views & 27,800+ accounts reached on the grand opening launch reel.",
      "Multiple individual reels generating thousands of views organically.",
      "Consistently high local engagement and active comment threads from Wembley residents.",
    ],
    businessImpact: [
      "Successful launch support and buzz for the new Wembley Bistro & Café branch.",
      "Noticeable increase in table walk-ins and local customer discovery.",
      "Consistent party and catering enquiries received directly through Instagram DMs.",
      "Long-term retained client relationship ongoing since April 2026.",
    ],
    testimonial: {
      quote:
        "Working with MarketBuddy has been one of the best decisions for our business. Their strategy is completely different from traditional agencies. Instead of simply posting content, they understand our customers, create authentic videos featuring our team, and consistently bring our restaurant in front of the right local audience. Our new branch launch received excellent visibility, our social media presence became much stronger, and we've seen more enquiries, walk-ins, and brand awareness. The team is proactive, creative, reliable, and always delivers on time. We're happy to continue working with them and highly recommend MarketBuddy to any business looking for real marketing results.",
      author: "Owner, Pizza 4 You",
      rating: "5.0 / 5.0",
      satisfaction: "10/10",
    },
    seoKeywords: [
      "Restaurant Marketing London",
      "Restaurant Social Media",
      "UGC Restaurant Marketing",
      "Wembley Restaurant Marketing",
      "Organic Instagram Growth",
      "Local Community Marketing",
      "Food Content Creation",
    ],
  },
  {
    id: "shiv-shakti-foods",
    client: "Shiv Shakti Foods",
    location: "Preston Road, Wembley, London, UK",
    industry: "Restaurant • Catering • Gujarati Street Food • Vegetarian Cuisine",
    category: "Community-Based Restaurant & Catering Marketing",
    timeline: "Ongoing Retained Marketing Partner",
    tagline: "Authentic Gujarati UGC, Signature Dish Highlights & Catering Growth",
    overview:
      "Shiv Shakti Foods wanted to strengthen its presence within London's vibrant Gujarati community, increase awareness of its signature vegetarian dishes, and generate more walk-in customers and catering enquiries through social media.",
    image: "/images/ugc_creation.png",
    gradient: "from-[#6C3BFF] to-[#A07CFF]",
    textColor: "text-[#6C3BFF]",
    bgLight: "bg-[#6C3BFF]/10",
    borderColor: "border-[#6C3BFF]/30",
    heroMetrics: [
      { value: "76,000+", label: "Organic Views", sub: "Across first 7 posts" },
      { value: "61,000+", label: "Accounts Reached", sub: "Highly targeted UK local reach" },
      { value: "97.6%", label: "Non-Follower Discovery", sub: "True organic viral discovery" },
      { value: "31 sec", label: "Avg. Watch Time", sub: "On best-performing reel" },
    ],
    challenge: [
      "Standing out in a competitive North West London vegetarian and Indian dining market.",
      "Need to build genuine trust with the local Gujarati community using culturally resonant content.",
      "Increase awareness for both day-to-day dine-in and large-scale bulk catering services.",
      "Overcoming reliance on traditional word-of-mouth with modern, trackable digital distribution.",
    ],
    strategyOverview:
      "MarketBuddy developed a community-first content strategy focused on real people, genuine customer reactions, and authentic Gujarati-language storytelling across London, Wembley, Harrow, and Kingsbury.",
    strategyPoints: [
      "Complete Instagram content architecture and calendar management.",
      "UGC-style Gujarati reels filmed with real customers and volunteer creators.",
      "Strategic campaign planning for high-margin dishes and seasonal demand.",
      "AI-powered creative assets, promotional posters, and product photography.",
      "Catering awareness campaigns highlighting event setups and bulk kitchen operations.",
      "Local SEO-focused captions and geo-tagging across North West London.",
    ],
    campaignHighlights: [
      {
        title: "Pani Puri Launch Campaign",
        desc: "Introduced Shiv Shakti's Pani Puri using volunteer creators and genuine customer reactions, creating massive buzz and excitement within the local Gujarati community.",
        iconEmoji: "🥟",
      },
      {
        title: "£5 Breakfast Combo Campaign",
        desc: "Positioned the £5 breakfast combo as an unbeatable value-for-money option for local morning commuters, students, and families.",
        iconEmoji: "🍛",
      },
      {
        title: "Event Catering Campaign",
        desc: "Showcased large-scale catering services through real event footage and food prep, building immediate credibility for wedding and party orders.",
        iconEmoji: "🍽️",
      },
      {
        title: "Community Entertainment & Relatable Reels",
        desc: "Created light-hearted, relatable Gujarati cultural sketches that sparked high organic sharing and comment engagement.",
        iconEmoji: "😂",
      },
    ],
    servicesDelivered: [
      "Complete Instagram Content Management",
      "UGC-Style Gujarati Video Production",
      "Campaign Concept & Execution",
      "AI-Generated Creative Assets",
      "Restaurant & Dish Photography",
      "Promotional Posters & Story Graphics",
      "Local SEO & Geo-Targeted Captions",
      "Ongoing Monthly Content Retainer",
    ],
    contentDelivered: [
      "7 initial high-impact content pieces published",
      "5 premium Gujarati UGC reels",
      "Promotional posters and digital menus",
      "AI-enhanced visual marketing creatives",
      "Commercial product photography suite",
    ],
    resultsPerformance: [
      "76,000+ organic video views across the first 7 posts alone.",
      "61,000+ accounts reached organically without paid advertising.",
      "Multiple individual reels achieved between 8,000 and 26,000+ organic views.",
      "Individual campaigns consistently reached between 7K and 20K+ local users.",
      "100+ new followers generated organically during the initial launch phase.",
    ],
    audienceQuality: [
      "97.6% of viewers were non-followers, demonstrating powerful organic discovery on the Instagram algorithm.",
      "Approximately 82% of all viewers were located in the United Kingdom, ensuring zero wasted reach.",
      "Deep resonance in key local hubs: Wembley, Harrow, Kingsbury, and Brent.",
    ],
    businessImpact: [
      "Substantial uplift in daily footfall and walk-in customers.",
      "Surge in direct message inquiries and phone bookings for catering services.",
      "Stronger recognition and instant demand for signature items (Pani Puri & Breakfast Combos).",
      "Elevated reputation as the go-to authentic vegetarian destination in Preston Road.",
    ],
    testimonial: {
      quote:
        "MarketBuddy completely changed the way customers discover our restaurant. Their Gujarati content connects directly with our community, and we've seen more enquiries, more walk-ins, and increased awareness for both our restaurant and catering services. They're proactive, creative, and always bring fresh campaign ideas. We've continued working with them because the results speak for themselves. I'd happily rate the team 10/10.",
      author: "Owner, Shiv Shakti Foods",
      rating: "5.0 / 5.0",
      satisfaction: "10/10",
    },
    seoKeywords: [
      "Gujarati Marketing UK",
      "Restaurant Marketing London",
      "Wembley Restaurant Marketing",
      "Catering Marketing London",
      "UGC Restaurant Marketing",
      "Indian Restaurant Promotion",
      "Organic Instagram Growth",
    ],
  },
  {
    id: "bollywood-kingdom-events",
    client: "Bollywood Kingdom Events",
    location: "London, United Kingdom",
    industry: "Event Marketing • Bollywood Nightlife • Entertainment",
    category: "Event Marketing & Influencer Network Activation",
    timeline: "Ongoing Retained Event Partner",
    tagline: "London Creator Ecosystem, Viral DJ Campaigns & Sold-Out Shows",
    overview:
      "Bollywood Kingdom Events wanted more than attractive posters—they needed every event to generate genuine excitement, reach the right South Asian audience, boost ticket sales, and consistently fill London's most iconic nightlife venues.",
    image: "/images/influencer_strategy.png",
    gradient: "from-[#00C271] to-[#00A896]",
    textColor: "text-[#00C271]",
    bgLight: "bg-[#00C271]/10",
    borderColor: "border-[#00C271]/30",
    heroMetrics: [
      { value: "304,122", label: "Organic Views on Flagship Reel", sub: "DJ Rihya campaign" },
      { value: "200,000+", label: "Accounts Reached", sub: "London South Asian audience" },
      { value: "100%", label: "Consistent Event Fill Rate", sub: "Sold-out & high attendance" },
      { value: "Multiple", label: "Creator Collaborations", sub: "Barter network activation" },
    ],
    challenge: [
      "Generating high ticket pre-sales in a fast-paced, highly competitive London nightlife market.",
      "Traditional paid ads alone produced diminishing returns without authentic peer recommendations.",
      "Needed widespread social proof and anticipation across multiple London demographics simultaneously.",
      "Maintaining a premium brand image while driving mass-market organic virality.",
    ],
    strategyOverview:
      "Rather than depending solely on Meta Ads, we paired organic community marketing with our exclusive London-based creator network. By coordinating multiple influencers to publish simultaneously, we built massive FOMO (Fear of Missing Out) across London's South Asian community.",
    strategyPoints: [
      "Activation of our London-based South Asian creator and influencer network.",
      "Structured barter collaborations granting creators VIP event access for authentic story coverage.",
      "Synchronised multi-creator story drops featuring countdowns, ticket links, and personal recommendations.",
      "Production of humorous, relatable Hindi/Desi UGC reels with high viral shareability.",
      "High-converting visual event branding, premium posters, and Instagram story graphics.",
      "Meta Ads consultation, retargeting funnels, and event ticket link tracking.",
    ],
    campaignHighlights: [
      {
        title: "Flagship DJ Rihya Campaign (Scala London)",
        desc: "Crafted an entertaining Hindi UGC campaign built around humor and nightlife culture featuring internationally recognized DJ Rihya, resulting in 304,122 organic views and nearly 200,000 accounts reached.",
        iconEmoji: "🎧",
      },
      {
        title: "Synchronised Creator FOMO Rollout",
        desc: "Coordinated dozens of London creators to share event countdowns and ticket links on the same day, creating irresistible social proof across Instagram before ticket release windows.",
        iconEmoji: "🔥",
      },
    ],
    servicesDelivered: [
      "Event Marketing Strategy",
      "Social Media Management",
      "Event Poster & Graphic Design",
      "Influencer Network Activation",
      "Barter Creator Coordination",
      "UGC Entertainment Video Production",
      "Instagram Content Architecture",
      "Meta Ads Consultation & Training",
      "Ticket Sales Funnel Optimisation",
      "Full Campaign Planning",
    ],
    contentDelivered: [
      "Viral flagship DJ promo video (304K+ views)",
      "Hundreds of coordinated creator story posts",
      "Premium digital posters and artist launch creatives",
      "High-converting Instagram carousel announcements",
      "Event highlight reels and post-event recap videos",
    ],
    resultsPerformance: [
      "304,122 organic views on the flagship DJ Rihya promo reel.",
      "Nearly 200,000 accounts reached organically across the primary campaign.",
      "Hundreds of thousands of cumulative impressions across our creator story network.",
      "Surge in early bird and general admission ticket inquiries before every event.",
      "High organic comment engagement and viral direct sharing between friends.",
    ],
    businessImpact: [
      "Consistent sold-out and packed venues including flagship venues like Scala London.",
      "Significantly reduced dependence on costly cold paid advertising.",
      "Built an enduring brand reputation as London's premier Bollywood event organiser.",
      "Established an ongoing, highly effective marketing partnership for all upcoming tours.",
    ],
    testimonial: {
      quote:
        "MarketBuddy completely changed how we promote our events. Their creator network gives us exposure that traditional advertising simply can't achieve. Every campaign feels professionally planned, the promotional creatives are outstanding, and the influencer strategy consistently helps generate excitement before our events. Their team understands London's South Asian audience, and we've seen a noticeable improvement in event awareness and ticket enquiries since working together. We continue working with them because they consistently deliver. 10/10.",
      author: "Founder, Bollywood Kingdom Events",
      rating: "5.0 / 5.0",
      satisfaction: "10/10",
    },
    seoKeywords: [
      "Event Marketing London",
      "Bollywood Event Promotion",
      "Event Marketing Agency UK",
      "Influencer Marketing London",
      "Creator Network London",
      "Nightlife Marketing Agency",
      "Ticket Sales Marketing",
    ],
  },
];

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

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<string>("all");

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          const offset = 100; // Account for header
          const top = section.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 150);
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MarkitUp Group Case Studies",
    description: "Realistic, verified case studies showing social media growth, community marketing, and influencer campaigns delivered by MarketBuddy / MarkitUp Group.",
    itemListElement: caseStudies.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${item.client} - ${item.category}`,
      description: item.overview,
    })),
  };

  const filteredStudies = activeTab === "all" 
    ? caseStudies 
    : caseStudies.filter(s => s.id === activeTab);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#6C3BFF]/20 selection:text-[#0F172A]">
      <SEOHead
        title="Case Studies & Real Client Results | MarkitUp Group"
        description="Explore verified case studies for Pizza 4 You, Shiv Shakti Foods, and Bollywood Kingdom Events. Realistic organic reach, community marketing, and measurable business growth."
        keywords="Pizza 4 You case study, Shiv Shakti Foods marketing, Bollywood Kingdom Events London, MarketBuddy portfolio, restaurant marketing London, UGC marketing Wembley, UK marketing agency"
        canonical="https://markitupgroup.com/case-studies"
        structuredData={structuredData}
      />
      
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-12 lg:pt-16 lg:pb-16 overflow-hidden bg-white border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(108,59,255,0.08),transparent_45%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,122,0,0.06),transparent_45%)] pointer-events-none" />
          
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem] relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#E7D8FF] bg-white px-4 py-2 text-sm font-bold text-[#6C3BFF] shadow-sm mb-6">
                <ShieldCheck size={16} /> Verified & Defensible Results
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.08] text-[#0F172A] tracking-tight mb-6">
                Proven Strategy. Authentic Community. <br className="hidden sm:block" />
                <span className="brand-gradient-text">Measurable Growth.</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-[clamp(1.125rem,1.4vw,1.25rem)] text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto mb-8">
                We believe in realistic, credible, and defensible results. Explore how MarketBuddy by MarkitUp Group drives organic visibility, genuine community engagement, and tangible business outcomes for our retained UK partners.
              </motion.p>

              {/* QUICK FILTER PILLS */}
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    activeTab === "all"
                      ? "bg-slate-900 text-white shadow-md scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  All Case Studies (3)
                </button>
                {caseStudies.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveTab(s.id)}
                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                      activeTab === s.id
                        ? "bg-slate-900 text-white shadow-md scale-105"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {s.client}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* COMBINED STATS PROOF BAR */}
        <section className="py-8 bg-[#FDFDFD] border-b border-slate-100">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-slate-100">
              <div className="p-3">
                <div className="text-3xl sm:text-4xl font-black text-[#6C3BFF]">530K+</div>
                <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">
                  Combined Video Views
                </div>
              </div>
              <div className="p-3">
                <div className="text-3xl sm:text-4xl font-black text-[#FF7A00]">360K+</div>
                <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">
                  Local Accounts Reached
                </div>
              </div>
              <div className="p-3">
                <div className="text-3xl sm:text-4xl font-black text-[#00C271]">97.6%</div>
                <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">
                  Non-Follower Discovery
                </div>
              </div>
              <div className="p-3">
                <div className="text-3xl sm:text-4xl font-black text-[#C71888]">10 / 10</div>
                <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED CASE STUDIES */}
        <section className="py-16 lg:py-24 bg-[#FAFAFA]">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem] space-y-20 lg:space-y-32">
            
            {filteredStudies.map((study, index) => {
              return (
                <motion.article 
                  key={study.id}
                  id={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.06)] overflow-hidden"
                >
                  {/* TOP HEADER BAR */}
                  <div className="p-6 sm:p-10 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r ${study.gradient}`}>
                          {study.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-full">
                          <MapPin size={13} className="text-slate-400" /> {study.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-full">
                          <Calendar size={13} className="text-slate-400" /> {study.timeline}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-slate-400">
                        {study.industry}
                      </div>
                    </div>

                    <div className="mt-6">
                      <h2 className="text-[clamp(1.85rem,3.2vw,3rem)] font-black text-slate-900 leading-tight">
                        {study.client}
                      </h2>
                      <p className="text-lg text-slate-600 font-semibold mt-1">
                        {study.tagline}
                      </p>
                      <p className="text-slate-600 font-medium leading-relaxed max-w-4xl mt-3">
                        {study.overview}
                      </p>
                    </div>

                    {/* HERO METRICS TILES */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
                      {study.heroMetrics.map((m, mIdx) => (
                        <div 
                          key={mIdx} 
                          className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm transition-all hover:shadow-md"
                        >
                          <div className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                            {m.value}
                          </div>
                          <div className="text-xs sm:text-sm font-extrabold text-slate-800 mt-1">
                            {m.label}
                          </div>
                          {m.sub && (
                            <div className="text-[11px] font-medium text-slate-400 mt-0.5">
                              {m.sub}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BODY GRID */}
                  <div className="p-6 sm:p-10 lg:p-12 grid lg:grid-cols-12 gap-8 lg:gap-12">
                    
                    {/* LEFT COLUMN (5 cols): Visual Asset + Testimonial */}
                    <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                      {/* Image Showcase */}
                      <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-md group aspect-[4/3] bg-slate-100">
                        <img 
                          src={study.image} 
                          alt={`${study.client} Marketing Case Study`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                        
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
                            <Sparkles size={14} className="text-yellow-400" /> MarketBuddy Client Spotlight
                          </div>
                          <div className="text-lg font-black mt-0.5">{study.client}</div>
                        </div>
                      </div>

                      {/* Verified Client Testimonial */}
                      <div className="rounded-3xl p-6 sm:p-7 bg-[#FBFBFC] border border-slate-200/80 shadow-sm relative flex flex-col justify-between flex-grow">
                        <Quote className={`size-8 ${study.textColor} opacity-20 mb-3`} />
                        
                        <p className="text-[14px] leading-relaxed text-slate-700 font-medium italic">
                          "{study.testimonial.quote}"
                        </p>

                        <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center justify-between">
                          <div>
                            <div className="font-extrabold text-slate-900 text-sm">
                              {study.testimonial.author}
                            </div>
                            <div className="flex items-center gap-1 text-yellow-500 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill="currentColor" />
                              ))}
                              <span className="text-xs font-bold text-slate-600 ml-1">
                                {study.testimonial.rating}
                              </span>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-green-100 text-green-700 border border-green-200">
                              Satisfaction: {study.testimonial.satisfaction}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* SEO Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {study.seoKeywords.map((kw, kwIdx) => (
                          <span 
                            key={kwIdx}
                            className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md"
                          >
                            #{kw}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT COLUMN (7 cols): Challenge, Strategy, Highlights & Results */}
                    <div className="lg:col-span-7 space-y-8">
                      
                      {/* The Challenge */}
                      <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-100">
                        <h3 className="text-base font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${study.gradient}`} />
                          The Challenge
                        </h3>
                        <ul className="space-y-2">
                          {study.challenge.map((c, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-2.5 text-sm text-slate-600 font-medium leading-relaxed">
                              <span className="text-slate-400 font-bold mt-0.5">•</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Our Strategy */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                            <CheckCircle2 size={18} className={study.textColor} />
                            Our Community-First Strategy
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed font-medium">
                            {study.strategyOverview}
                          </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {study.strategyPoints.map((sp, spIdx) => (
                            <div key={spIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-700 bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
                              <ChevronRight size={14} className={`${study.textColor} shrink-0 mt-0.5`} />
                              <span>{sp}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Campaign Highlights (If Present) */}
                      {study.campaignHighlights && (
                        <div className="space-y-3">
                          <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-400">
                            Campaign Highlights
                          </h4>
                          <div className="grid gap-3">
                            {study.campaignHighlights.map((ch, chIdx) => (
                              <div key={chIdx} className="p-4 rounded-xl border border-slate-100 bg-white shadow-2xs">
                                <div className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                                  <span>{ch.iconEmoji || "✨"}</span> {ch.title}
                                </div>
                                <p className="text-xs text-slate-600 font-medium leading-relaxed mt-1">
                                  {ch.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Services & Deliverables Tabs */}
                      <div className="grid sm:grid-cols-2 gap-4 pt-2">
                        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                            Services Delivered
                          </h4>
                          <ul className="space-y-1.5">
                            {study.servicesDelivered.map((srv, srvIdx) => (
                              <li key={srvIdx} className="text-xs font-medium text-slate-700 flex items-center gap-1.5">
                                <CheckCircle2 size={12} className={study.textColor} />
                                <span>{srv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                            Content & Assets Delivered
                          </h4>
                          <ul className="space-y-1.5">
                            {study.contentDelivered.map((cnt, cntIdx) => (
                              <li key={cntIdx} className="text-xs font-medium text-slate-700 flex items-center gap-1.5">
                                <Sparkles size={12} className={study.textColor} />
                                <span>{cnt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Measurable Results & Business Impact */}
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-4">
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-widest text-[#FF7A00] mb-2 flex items-center gap-1.5">
                            <TrendingUp size={14} /> Measured Performance
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-200 font-medium">
                            {study.resultsPerformance.map((res, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2">
                                <span className="text-[#00C271] font-bold">✓</span>
                                <span>{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {study.audienceQuality && (
                          <div className="pt-3 border-t border-slate-700/60">
                            <h4 className="text-xs font-black uppercase tracking-widest text-[#6C3BFF] mb-2 flex items-center gap-1.5">
                              <UserCheck size={14} /> Audience Quality
                            </h4>
                            <ul className="space-y-1.5 text-xs text-slate-200 font-medium">
                              {study.audienceQuality.map((aq, aqIdx) => (
                                <li key={aqIdx} className="flex items-start gap-2">
                                  <span className="text-[#6C3BFF] font-bold">✓</span>
                                  <span>{aq}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="pt-3 border-t border-slate-700/60">
                          <h4 className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-1.5">
                            <Flame size={14} /> Business Outcomes
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-200 font-medium">
                            {study.businessImpact.map((bi, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2">
                                <span className="text-emerald-400 font-bold">★</span>
                                <span>{bi}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.article>
              );
            })}

          </div>
        </section>

        {/* WHY IT WORKS COMPARISON BAR */}
        <section className="py-16 bg-white border-y border-slate-100">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#6C3BFF]">
                The MarketBuddy Difference
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Why Our Community & Creator Strategy Works
              </h2>
              <p className="text-slate-600 mt-3 font-medium">
                Traditional agencies rely on generic posts and high ad spend. We activate real people, cultural storytelling, and organic reach.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Owner & Authentic UGC</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Putting real restaurant owners and genuine customers on camera builds instant credibility that glossy stock photos can never achieve.
                </p>
              </div>

              <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Cultural & Local Niche</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Tailoring language, jokes, and cultural context to specific communities (e.g. Gujarati & South Asian Londoners) creates fierce engagement and word-of-mouth.
                </p>
              </div>

              <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#00C271]/10 text-[#00C271] flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">London Creator Network</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Coordinating multiple local creators to publish simultaneously creates irresistible FOMO, social proof, and rapid ticket/walk-in conversions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 lg:py-20 bg-[#FAFAFA]">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
             <div className="relative flex w-full flex-col items-center justify-between gap-8 overflow-hidden rounded-[2.5rem] brand-gradient-bg p-8 lg:p-14 text-white shadow-[0_30px_60px_rgba(108,59,255,0.25)] lg:flex-row">
              
              {/* Abstract shapes */}
              <div className="absolute -left-12 top-1/2 size-64 -translate-y-1/2 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="absolute -right-10 top-0 size-56 rounded-full bg-white/10 blur-3xl pointer-events-none" />

              <div className="flex items-center gap-6 relative z-10 w-full lg:w-auto text-center lg:text-left flex-col lg:flex-row">
                <div className="flex size-20 rounded-full border border-white/20 bg-white/10 shadow-xl backdrop-blur-md items-center justify-center shrink-0">
                  <Rocket size={36} />
                </div>
                <div>
                  <h2 className="text-[clamp(2rem,3vw,3rem)] font-black text-white mb-3 leading-tight">
                    Ready for Real, Defensible <br className="hidden sm:block lg:hidden" /> Growth?
                  </h2>
                  <p className="text-lg text-white/90 font-medium max-w-xl">
                    Let's discuss how MarketBuddy can build an authentic community strategy, creator network, and viral UGC for your business.
                  </p>
                </div>
              </div>

              <div className="relative z-10 shrink-0 w-full sm:w-auto flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-white text-[#FF7A00] rounded-full font-black text-lg transition-all shadow-[0_18px_45px_rgba(0,0,0,0.16)] hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
                >
                  Book a Strategy Call <ArrowRight size={20} />
                </Link>
                <Link
                  href="/market-buddy"
                  className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-black text-lg transition-all hover:bg-white/20 hover:-translate-y-1"
                >
                  Explore MarketBuddy
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* SEO CONTENT SECTION */}
        <SEOContentBlock title="Defensible Case Studies in Social Media and Community Marketing">
          <p>
            At MarkitUp Group, our case studies showcase real-world examples of how we help clients <strong>grow your business</strong>. Through MarketBuddy, we deploy powerful <strong>social media influencer</strong> campaigns, viral <strong>instagram reels</strong>, <strong>community marketing</strong>, and culturally resonant UGC content.
          </p>
          <p>
            Our work with <strong>Pizza 4 You</strong> demonstrates end-to-end branch launch strategy and owner-led UGC video marketing across Wembley. Our collaboration with <strong>Shiv Shakti Foods</strong> highlights the impact of authentic Gujarati-language storytelling, reaching 76,000+ organic views with 97.6% non-follower discovery. For <strong>Bollywood Kingdom Events</strong>, we activated London's South Asian creator network to generate 304,000+ views and consistent sold-out venue attendance.
          </p>
          <p>
            Together with <Link href="/it-buddy">ITBuddy</Link> for website, app, and digital infrastructure development and <Link href="/discount-buddy">DiscountBuddy</Link> for restaurant promotions, MarkitUp Group provides a comprehensive growth ecosystem for ambitious businesses across the UK and Europe.
          </p>
        </SEOContentBlock>
      </main>

      <Footer />
    </div>
  );
}
