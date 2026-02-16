import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Smartphone, Users, TrendingUp, Zap, MapPin, Award } from "lucide-react";

export default function DiscountBuddy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-slate-600 font-semibold text-xs md:text-sm mb-3 tracking-wide uppercase">
                DiscountBuddy · Consumer Platform Venture · Coming Soon
              </p>
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-8">
                Building the <span style={{ color: "var(--accent-teal)" }}>Next Consumer Platform</span>
              </h1>
              <p className="text-2xl text-slate-700 leading-relaxed font-medium max-w-3xl mx-auto">
                DiscountBuddy is a consumer-focused digital platform currently under development—designed to connect UK
                consumers with verified, accessible, brand-driven discount opportunities through a centralised system.
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto mt-6">
                Built using real market insight from MarketBuddy and technical execution from ITBuddy, DiscountBuddy represents
                the long-term product and platform direction of MarkitUp Group.
              </p>
              <div className="mt-12">
                <Link
                  href="/contact"
                  className="inline-block text-white px-10 py-4 rounded-lg hover:opacity-90 transition-all font-bold text-lg"
                  style={{ backgroundColor: "var(--accent-teal)" }}
                >
                  Join the Early Access List
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* For Consumers */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="bg-white rounded-xl p-12 h-80 flex items-center justify-center border-2" style={{ borderColor: "var(--accent-teal)" }}>
                <div className="text-center">
                  <Smartphone size={64} style={{ color: "var(--accent-teal)" }} className="mx-auto mb-4" />
                  <p className="text-slate-700 font-bold text-xl">For Consumers</p>
                </div>
              </div>
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8">
                  Discover Amazing <span style={{ color: "var(--accent-teal)" }}>Deals</span>
                </h2>
                  <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
                    Once live, DiscountBuddy will allow UK consumers to browse verified, brand-led discount opportunities in
                    one place—helping people discover new experiences while saving money.
                  </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Browse verified deals from local restaurants",
                    "Real-time deal notifications",
                    "Easy booking and redemption",
                    "Loyalty rewards program",
                    "Community reviews and ratings"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="font-bold text-lg" style={{ color: "var(--accent-teal)" }}>✓</span>
                      <span className="text-slate-700 font-semibold text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* For Restaurants & Brand Partners */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8">
                  Reach More <span style={{ color: "var(--accent-amber)" }}>Customers</span>
                </h2>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
                  For restaurants and consumer brands, DiscountBuddy will act as a scalable, owned channel—enabling targeted
                  promotions, better utilisation of off‑peak capacity, and cross‑promotion across the MarkitUp ecosystem.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Targeted promotion to food enthusiasts",
                    "Fill seats during off-peak hours",
                    "Build customer loyalty and repeat visits",
                    "Real-time analytics and insights",
                    "Flexible deal management"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="font-bold text-lg" style={{ color: "var(--accent-amber)" }}>✓</span>
                      <span className="text-slate-700 font-semibold text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-12 h-80 flex items-center justify-center border-2" style={{ borderColor: "var(--accent-amber)" }}>
                <div className="text-center">
                  <Users size={64} style={{ color: "var(--accent-amber)" }} className="mx-auto mb-4" />
                  <p className="text-slate-700 font-bold text-xl">For Restaurants</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-32 md:py-40 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Features</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                Key <span style={{ color: "var(--accent-teal)" }}>Features</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { icon: MapPin, title: "Location-Based Discovery", desc: "Find deals near you with smart location-based recommendations.", accent: "teal" },
                { icon: Award, title: "Verified Deals", desc: "All deals are verified and updated in real-time for accuracy.", accent: "amber" },
                { icon: Users, title: "Community Reviews", desc: "Read authentic reviews from other food lovers before you go.", accent: "indigo" },
                { icon: TrendingUp, title: "Loyalty Rewards", desc: "Earn points with every deal and unlock exclusive rewards.", accent: "teal" },
                { icon: Zap, title: "Real-Time Notifications", desc: "Get instant alerts for new deals from your favorite restaurants.", accent: "amber" },
                { icon: Smartphone, title: "Easy Redemption", desc: "Seamless booking and redemption directly from the app.", accent: "indigo" }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                const accentVar = feature.accent === "teal" ? "var(--accent-teal)" : feature.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="bg-white rounded-xl p-10 border-t-4 shadow-sm hover:shadow-lg transition-all" style={{ borderTopColor: accentVar }}>
                    <div className="bg-slate-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                      <Icon size={32} style={{ color: accentVar }} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-slate-700 leading-relaxed font-medium text-lg">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-32 md:py-40 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Technology</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                Built on Modern <span style={{ color: "var(--accent-amber)" }}>Tech</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: "Mobile Apps", items: ["React Native", "iOS & Android", "Offline-first architecture", "Push notifications"], accent: "teal" },
                { title: "Backend", items: ["Django & DRF", "PostgreSQL", "Real-time APIs", "Scalable infrastructure"], accent: "amber" },
                { title: "Infrastructure", items: ["AWS cloud", "CDN distribution", "24/7 monitoring", "99.9% uptime"], accent: "indigo" }
              ].map((tech, idx) => {
                const accentVar = tech.accent === "teal" ? "var(--accent-teal)" : tech.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="bg-slate-50 rounded-xl p-10 border-l-4 shadow-sm hover:shadow-lg transition-all" style={{ borderLeftColor: accentVar }}>
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">{tech.title}</h3>
                    <ul className="space-y-4">
                      {tech.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="font-bold text-lg" style={{ color: accentVar }}>✓</span>
                          <span className="text-slate-700 font-semibold text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-32 md:py-40 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Future</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                Product <span style={{ color: "var(--accent-teal)" }}>Roadmap</span>
              </h2>
            </div>

            <div className="space-y-10 max-w-4xl mx-auto">
              {[
                { phase: "Phase 1", title: "MVP Launch", items: ["Core marketplace platform", "Mobile app launch", "Initial restaurant partnerships", "Basic analytics"], accent: "teal" },
                { phase: "Phase 2", title: "Growth & Expansion", items: ["Loyalty rewards program", "Advanced analytics", "Restaurant dashboard", "Multi-city expansion"], accent: "amber" },
                { phase: "Phase 3", title: "Scale & Innovate", items: ["AI-powered recommendations", "Payment integration", "Enterprise features", "International expansion"], accent: "indigo" }
              ].map((phase, idx) => {
                const accentVar = phase.accent === "teal" ? "var(--accent-teal)" : phase.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="bg-white rounded-xl p-10 border-l-4 shadow-sm hover:shadow-lg transition-all" style={{ borderLeftColor: accentVar }}>
                    <div className="flex items-start gap-6">
                      <div className="text-white rounded-lg w-24 h-24 flex items-center justify-center flex-shrink-0 font-black text-2xl text-center" style={{ backgroundColor: accentVar }}>
                        {phase.phase}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-slate-900 mb-6">{phase.title}</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {phase.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="font-bold text-lg" style={{ color: accentVar }}>→</span>
                              <span className="text-slate-700 font-semibold text-lg">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
              Ready to Join <span style={{ color: "var(--accent-teal)" }}>Discount Buddy?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300 font-medium">
              Whether you're a food lover looking for deals or a restaurant wanting to reach more customers, let's get started.
            </p>
            <Link
              href="/contact"
              className="inline-block text-slate-900 px-12 py-5 rounded-lg hover:opacity-90 transition-all font-bold text-lg"
              style={{ backgroundColor: "var(--accent-teal)" }}
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
