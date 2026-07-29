import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Wrench, BarChart, CheckCircle2, Star, Rocket } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

// --- Premium Data ---
const caseStudies = [
  {
    title: "Restaurant Visibility Growth",
    category: "DiscountBuddy & MarketBuddy",
    challenge: "A popular local restaurant was struggling with low weekday footfall and needed stronger visibility, better offer promotion, and more repeat customer traffic.",
    solution: "We combined MarketBuddy's targeted social campaigns with DiscountBuddy's offer-led promotion, backed by ITBuddy's seamless conversion landing pages.",
    result: "A complete transformation in local visibility, massive customer engagement, and a clear, trackable digital path from social promotion directly to table bookings.",
    metric: "3.5x",
    metricLabel: "More Table Bookings",
    icon: Users,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#FF7A00] to-[#FF2E78]",
    textColor: "text-[#FF7A00]",
    bgLight: "bg-[#FF7A00]/10",
  },
  {
    title: "Local Brand Lead Generation",
    category: "MarketBuddy & ITBuddy",
    challenge: "A rapidly growing local service business wanted better, high-quality lead generation without relying on fragmented, inefficient marketing suppliers.",
    solution: "We aligned their content strategy, social promotion, lead capture funnels, and digital infrastructure into one powerful, structured growth engine.",
    result: "A highly consistent online presence, significantly stronger enquiry quality, lower cost-per-lead, and elevated brand trust within their target market.",
    metric: "+215%",
    metricLabel: "Increase in Leads",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#6C3BFF] to-[#A07CFF]",
    textColor: "text-[#6C3BFF]",
    bgLight: "bg-[#6C3BFF]/10",
  },
  {
    title: "Technology Support for Promotion",
    category: "ITBuddy",
    challenge: "A promotion-driven retail business needed robust technology support to handle high-traffic campaigns and manage complex customer journeys effectively.",
    solution: "ITBuddy completely overhauled their website infrastructure and systems support while MarketBuddy crafted the high-converting promotional messaging.",
    result: "A lightning-fast, highly scalable digital foundation that seamlessly supports mass visibility, marketing activity, and aggressive business growth.",
    metric: "99.9%",
    metricLabel: "System Uptime",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#00C271] to-[#00E082]",
    textColor: "text-[#00C271]",
    bgLight: "bg-[#00C271]/10",
  },
];

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

export default function CaseStudies() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MarkitUp Group Case Studies",
    itemListElement: caseStudies.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
    })),
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#6C3BFF]/20 selection:text-[#0F172A]">
      <SEOHead
        title="Our Work & Case Studies | MarkitUp Group"
        description="Explore MarkitUp Group case studies showing how our marketing strategy, promotional platforms, and technology solutions drive real business growth."
        keywords="MarkitUp Group case studies, Market Buddy, Discount Buddy, IT Buddy, business growth examples, agency portfolio"
        canonical="https://markitupgroup.com/case-studies"
        structuredData={structuredData}
      />
      
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(108,59,255,0.08),transparent_40%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,122,0,0.05),transparent_40%)] pointer-events-none" />
          
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[72px] relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#E7D8FF] bg-white px-4 py-2 text-sm font-bold text-[#6C3BFF] shadow-sm mb-6">
                <BarChart size={16} /> Real Results. Real Growth.
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-[clamp(2.75rem,5.5vw,4.75rem)] font-extrabold leading-[1.05] text-[#0F172A] tracking-tight mb-6">
                Business Growth Driven By <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#6C3BFF] via-[#C71888] to-[#FF7A00] bg-clip-text text-transparent">Proven Strategy</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-[clamp(1.125rem,1.5vw,1.375rem)] text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
                Explore how MarketBuddy, DiscountBuddy, and ITBuddy work together to deliver visibility, leads, and measurable success.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* CASE STUDIES LISTING */}
        <section className="py-16 lg:py-28 bg-[#FAFAFA]">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[72px] space-y-16 lg:space-y-32">
            
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              const isEven = index % 2 !== 0;

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* IMAGE SIDE */}
                  <div className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-[2.5rem] transform rotate-3 scale-105 opacity-50 blur-sm -z-10"></div>
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.08)] group aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] border border-slate-100 bg-white">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      {/* Metric Floating Badge */}
                      <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-64 bg-white/90 backdrop-blur-xl border border-white rounded-2xl p-5 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                        <div className={`text-4xl font-black bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-1`}>
                          {study.metric}
                        </div>
                        <div className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                          {study.metricLabel}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT SIDE */}
                  <div className={`space-y-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 font-bold text-sm mb-4">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${study.gradient}`}></div>
                        {study.category}
                      </div>
                      <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-extrabold text-slate-900 leading-tight mb-6">
                        {study.title}
                      </h2>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                        <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                          <div className={`w-8 h-8 rounded-full ${study.bgLight} ${study.textColor} flex items-center justify-center shrink-0`}>
                            <Icon size={16} />
                          </div>
                          The Challenge
                        </h3>
                        <p className="text-slate-600 leading-relaxed font-medium pl-10">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm relative overflow-hidden group">
                        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${study.gradient}`}></div>
                        <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-2 pl-4">
                          <CheckCircle2 size={20} className={study.textColor} />
                          The Solution
                        </h3>
                        <p className="text-slate-600 leading-relaxed font-medium pl-10">
                          {study.solution}
                        </p>
                      </div>

                      <div className="pl-4 border-l-2 border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-2">The Outcome</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">
                          {study.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </section>

        {/* METRICS & SOCIAL PROOF */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[72px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center divide-x divide-slate-100">
              {[
                { number: "250+", label: "Projects Completed" },
                { number: "98%", label: "Client Retention" },
                { number: "15M+", label: "Engagement Reached" },
                { number: "5★", label: "Average Rating" },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center">
                  <div className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-[#6C3BFF] to-[#C71888] bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 lg:py-32 bg-[#FAFAFA]">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[72px]">
             <div className="relative flex w-full flex-col items-center justify-between gap-10 overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#6C3BFF] via-[#B8188D] to-[#FF7A00] p-10 lg:p-16 text-white shadow-[0_30px_60px_rgba(108,59,255,0.25)] lg:flex-row">
              
              {/* Abstract shapes */}
              <div className="absolute -left-12 top-1/2 size-64 -translate-y-1/2 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="absolute -right-10 top-0 size-56 rounded-full bg-white/10 blur-3xl pointer-events-none" />

              <div className="flex items-center gap-6 relative z-10 w-full lg:w-auto text-center lg:text-left flex-col lg:flex-row">
                <div className="flex size-20 rounded-full border border-white/20 bg-white/10 shadow-xl backdrop-blur-md items-center justify-center shrink-0">
                  <Rocket size={36} />
                </div>
                <div>
                  <h2 className="text-[clamp(2rem,3vw,3rem)] font-black text-white mb-4 leading-tight">
                    Ready to Write Your <br className="hidden sm:block lg:hidden" /> Success Story?
                  </h2>
                  <p className="text-lg text-white/90 font-medium max-w-xl">
                    Let's discuss how MarkitUp Group can tailor a strategy to skyrocket your brand's growth and visibility.
                  </p>
                </div>
              </div>

              <div className="relative z-10 shrink-0 w-full sm:w-auto flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-white text-[#FF7A00] rounded-full font-black text-lg transition-all shadow-[0_18px_45px_rgba(0,0,0,0.16)] hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
                >
                  Start Growing <ArrowRight size={20} />
                </Link>
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-black text-lg transition-all hover:bg-white/20 hover:-translate-y-1"
                >
                  Explore Services
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
