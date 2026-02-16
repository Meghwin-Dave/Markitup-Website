import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Zap, Code, TrendingUp, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-10 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-slate-600 font-semibold text-sm md:text-base mb-4 tracking-wide uppercase">
                MarkitUp Group · An ecosystem of businesses
              </p>
              
              <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight text-slate-900">
              Create, Grow, and connect multiple business
              brands {" "}
                <span style={{ color: "var(--accent-teal)" }}>under one strategic ecosystem</span>
              </h1>
            
              <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                The group is designed to evolve from services, to products, to platforms—using shared teams, shared insight, and
                a unified vision.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="bg-slate-900 text-white px-10 py-4 rounded-lg hover:bg-slate-800 transition-all font-bold flex items-center gap-3 text-lg"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
                <Link
                  href="/services"
                  className="border-2 transition-all font-bold text-lg px-10 py-4 rounded-lg"
                  style={{ 
                    borderColor: "var(--accent-teal)", 
                    color: "var(--accent-teal)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(var(--accent-teal-rgb), 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What MarkitUp Group Is */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">About Us</p>
                <h2 className="text-5xl md:text-6xl font-black mb-8 text-slate-900">
                  What MarkitUp <span style={{ color: "var(--accent-amber)" }}>Group Is</span>
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                  MarkitUp Group is a modern company-creation platform. Instead of operating as a single agency or studio,
                  we build and connect multiple brands under one strategic ecosystem—so every project, hire, and partnership
                  strengthens the whole group.
                </p>
                <p className="text-lg text-slate-700 mb-10 leading-relaxed font-medium">
                  By blending brand strategy, engineering excellence, and product thinking, MarkitUp Group is built to move
                  from services to products to platforms—creating long-term, compounding value instead of short-term,
                  one‑off engagements.
                </p>
                <div className="space-y-4">
                  {[
                    "Shared teams and shared insight across ventures",
                    "Unified ownership, strategy, and long-term direction",
                    "Built for evolution: services → products → platforms"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <CheckCircle size={24} className="flex-shrink-0 mt-1 font-bold" style={{ color: "var(--accent-indigo)" }} />
                      <span className="text-slate-700 font-medium text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-100 rounded-2xl p-12 h-96 flex flex-col items-center justify-center space-y-8">
                <div className="text-center">
                  <div className="text-6xl font-black mb-3" style={{ color: "var(--accent-teal)" }}>3</div>
                  <p className="text-slate-700 font-bold text-lg">Independent Ventures</p>
                </div>
                <div className="w-full h-px bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-6xl font-black mb-3" style={{ color: "var(--accent-amber)" }}>1</div>
                  <p className="text-slate-700 font-bold text-lg">Strategic Vision</p>
                </div>
                <div className="w-full h-px bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-6xl font-black mb-3" style={{ color: "var(--accent-indigo)" }}>∞</div>
                  <p className="text-slate-700 font-bold text-lg">Growth Potential</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Ecosystem Structure */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Our Ecosystem</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
                A Connected Group of Ventures
              </h2>
              <p className="text-xl text-slate-700 max-w-2xl mx-auto font-medium">
                MarkitUp Group currently operates through three connected business units—each with a clear role inside the
                ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* MarketBuddy Card */}
              <Link
                href="/market-buddy"
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-10 border-2 group cursor-pointer"
                style={{ borderColor: "var(--accent-indigo)" }}
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "rgba(var(--accent-indigo-rgb), 0.1)" }}
                >
                  <Zap size={32} style={{ color: "var(--accent-indigo)" }} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">MarketBuddy</h3>
                <p className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold tracking-wide mb-4"
                  style={{ backgroundColor: "rgba(var(--accent-indigo-rgb), 0.08)", color: "var(--accent-indigo)" }}>
                  Active · Brand Growth & Marketing Studio
                </p>
                <p className="text-slate-700 mb-6 leading-relaxed font-medium">
                  The market-facing, revenue-focused brand of MarkitUp Group—building visibility, engagement, and growth
                  through structured marketing systems, performance campaigns, and market entry strategies.
                </p>
                <div
                  className="flex items-center gap-2 font-bold group-hover:gap-3 transition-all text-lg"
                  style={{ color: "var(--accent-indigo)" }}
                >
                  Learn More <ArrowRight size={20} />
                </div>
              </Link>

              {/* IT Buddy Card */}
              <Link
                href="/it-buddy"
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-10 border-2 group cursor-pointer"
                style={{ borderColor: "var(--accent-amber)" }}
              >
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: "rgba(var(--accent-amber-rgb), 0.1)" }}>
                  <Code size={32} style={{ color: "var(--accent-amber)" }} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">IT Buddy</h3>
                <p className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold tracking-wide mb-4"
                  style={{ backgroundColor: "rgba(var(--accent-amber-rgb), 0.08)", color: "var(--accent-amber)" }}>
                  Active · Digital Solutions & Product Development Studio
                </p>
                <p className="text-slate-700 mb-6 leading-relaxed font-medium">
                  The technical and development-focused unit of MarkitUp Group—designing, building, and maintaining the
                  digital infrastructure behind client solutions, internal tools, and new product ventures.
                </p>
                <div className="flex items-center gap-2 font-bold group-hover:gap-3 transition-all text-lg" style={{ color: "var(--accent-amber)" }}>
                  Learn More <ArrowRight size={20} />
                </div>
              </Link>

              {/* DiscountBuddy Card */}
              <Link
                href="/discount-buddy"
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-10 border-2 group cursor-pointer"
                style={{ borderColor: "var(--accent-teal)" }}
              >
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: "rgba(var(--accent-teal-rgb), 0.1)" }}>
                  <TrendingUp size={32} style={{ color: "var(--accent-teal)" }} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">DiscountBuddy</h3>
                <p className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold tracking-wide mb-4"
                  style={{ backgroundColor: "rgba(var(--accent-teal-rgb), 0.08)", color: "var(--accent-teal)" }}>
                  In Development · Consumer Platform · Coming Soon
                </p>
                <p className="text-slate-700 mb-6 leading-relaxed font-medium">
                  A consumer-focused digital platform being built to connect UK consumers with verified, brand-led discount
                  opportunities—creating a scalable, owned audience and platform-based revenue models for the group.
                </p>
                <div className="flex items-center gap-2 font-bold group-hover:gap-3 transition-all text-lg" style={{ color: "var(--accent-teal)" }}>
                  See Roadmap <ArrowRight size={20} />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* How the Pieces Connect */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Ecosystem Strategy</p>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">
                  How the Pieces <span style={{ color: "var(--accent-teal)" }}>Connect</span>
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                  Each business unit inside MarkitUp Group exists to strengthen the others—creating a connected ecosystem that
                  supports innovation, stability, and long-term business creation.
                </p>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
                  MarketBuddy builds market access and revenue. ITBuddy builds technical capability and digital foundations.
                  DiscountBuddy becomes the scalable product and platform layer. MarkitUp Group aligns the strategy, talent,
                  and ownership behind it all.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "MarketBuddy",
                    desc: "Builds market access, revenue, and brand relationships.",
                    accent: "indigo",
                  },
                  {
                    title: "ITBuddy",
                    desc: "Builds the technical capability and digital foundations.",
                    accent: "amber",
                  },
                  {
                    title: "DiscountBuddy",
                    desc: "Becomes the scalable consumer product and platform layer.",
                    accent: "teal",
                  },
                  {
                    title: "MarkitUp Group",
                    desc: "Aligns strategy, ownership, and long-term direction.",
                    accent: "teal",
                  },
                ].map((item, idx) => {
                  const accentVar =
                    item.accent === "teal"
                      ? "var(--accent-teal)"
                      : item.accent === "amber"
                      ? "var(--accent-amber)"
                      : "var(--accent-indigo)";
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-6 border-l-4 shadow-sm hover:shadow-lg transition-all"
                      style={{ borderLeftColor: accentVar }}
                    >
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-700 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose MarkItUp Section */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Why Choose Us</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                What Sets Us <span style={{ color: "var(--accent-teal)" }}>Apart</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Product Mindset", desc: "We think like product builders, not just service providers. Every solution is designed for scalability, user experience, and long-term value creation.", accent: "teal" },
                { title: "Engineering Depth", desc: "Our technical team brings enterprise-grade engineering practices to every project. We build systems that scale, perform, and endure.", accent: "amber" },
                { title: "Growth Focus", desc: "We're obsessed with metrics that matter: customer acquisition, retention, revenue, and market impact. Every decision is data-driven.", accent: "indigo" },
                { title: "Reliability & Execution", desc: "We deliver on commitments. Our track record speaks for itself: on-time delivery, quality outcomes, and lasting partnerships.", accent: "teal" }
              ].map((item, idx) => {
                const accentVar = item.accent === "teal" ? "var(--accent-teal)" : item.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="bg-white rounded-xl p-10 border-l-4 border-slate-200 shadow-sm hover:shadow-lg transition-all" style={{ borderLeftColor: accentVar }}>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed font-medium text-lg">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 md:py-40 bg-slate-900 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                How We <span style={{ color: "var(--accent-teal)" }}>Work</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">Our proven methodology for delivering exceptional results</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your vision, market, and goals", accent: "teal" },
                { step: "02", title: "Strategy", desc: "Developing a comprehensive roadmap", accent: "amber" },
                { step: "03", title: "Build", desc: "Executing with precision and quality", accent: "indigo" },
                { step: "04", title: "Launch", desc: "Going to market with impact", accent: "teal" },
                { step: "05", title: "Scale", desc: "Growing and optimizing for success", accent: "amber" },
              ].map((item, idx) => {
                const accentVar = item.accent === "teal" ? "var(--accent-teal)" : item.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="text-center bg-slate-800 rounded-lg p-8 border-t-4 border-slate-700 hover:border-slate-600 transition-all" style={{ borderTopColor: accentVar }}>
                    <div className="text-4xl font-black text-white mb-4">{item.step}</div>
                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 md:py-40 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Success Stories</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                What Our Clients <span style={{ color: "var(--accent-amber)" }}>Say</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "Founder, TechStartup Co",
                  text: "MarkItUp transformed our vision into a scalable platform. Their engineering team delivered exactly what we needed, on time and within budget.",
                  accent: "teal"
                },
                {
                  name: "James Mitchell",
                  role: "CEO, Restaurant Group",
                  text: "Working with Market Buddy increased our customer acquisition by 3x in just 6 months. Their data-driven approach is exceptional.",
                  accent: "amber"
                },
                {
                  name: "Priya Patel",
                  role: "Director, Digital Commerce",
                  text: "The entire MarkItUp ecosystem—product, engineering, and marketing—works seamlessly together. A true partner in growth.",
                  accent: "indigo"
                },
              ].map((testimonial, idx) => {
                const accentVar = testimonial.accent === "teal" ? "var(--accent-teal)" : testimonial.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="bg-slate-50 rounded-xl p-10 border-l-4 border-slate-200 shadow-sm hover:shadow-lg transition-all" style={{ borderLeftColor: accentVar }}>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-2xl">⭐</span>
                      ))}
                    </div>
                    <p className="text-slate-700 mb-8 leading-relaxed italic font-medium text-lg">"{testimonial.text}"</p>
                    <div className="border-t border-slate-300 pt-6">
                      <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                      <p className="text-sm text-slate-600 font-semibold">{testimonial.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 md:py-40 bg-slate-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Ready to Transform Your <span style={{ color: "var(--accent-teal)" }}>Business?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300 font-medium">
              Let's discuss how MarkItUp can help you build, market, and launch your next venture. Schedule a consultation today.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-slate-900 px-12 py-5 rounded-lg hover:bg-gray-100 transition-all font-bold text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
