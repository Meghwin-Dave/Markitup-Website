import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { TrendingUp, Target, BarChart3, Users, Zap, Award } from "lucide-react";

export default function MarketBuddy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Market Buddy</p>
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-8">
                Data-Driven Growth & <span style={{ color: "var(--accent-indigo)" }}>Marketing</span>
              </h1>
              <p className="text-2xl text-slate-700 leading-relaxed font-medium max-w-3xl mx-auto">
                MarketBuddy is the operating and revenue-focused brand of MarkitUp Group—working directly with businesses to
                build visibility, engagement, and growth through structured, repeatable marketing systems.
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto mt-6">
                It also acts as the market-facing intelligence layer of the group, generating real-world data, partnerships,
                and insight that feed into product and platform development.
              </p>
              <div className="mt-12">
                <Link
                  href="/contact"
                  className="inline-block text-white px-10 py-4 rounded-lg hover:opacity-90 transition-all font-bold text-lg"
                  style={{ backgroundColor: "var(--accent-indigo)" }}
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="bg-white rounded-xl p-12 h-80 flex items-center justify-center border-2" style={{ borderColor: "var(--accent-indigo)" }}>
                <div className="text-center">
                  <TrendingUp size={64} style={{ color: "var(--accent-indigo)" }} className="mx-auto mb-4" />
                  <p className="text-slate-700 font-bold text-xl">Data-Driven Growth</p>
                </div>
              </div>
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8">
                  Who We <span style={{ color: "var(--accent-indigo)" }}>Are</span>
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                  MarketBuddy focuses on brand strategy and positioning, social media ecosystems, performance marketing and lead
                  systems, conversion-focused websites, influencer campaigns, and market entry and growth consulting.
                </p>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                  We don’t just run campaigns—we build structured growth engines that compound over time and plug directly into
                  the wider MarkitUp Group ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Services</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                Our <span style={{ color: "var(--accent-indigo)" }}>Services</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { icon: Zap, title: "Digital Marketing", items: ["Search engine marketing (SEM)", "Social media advertising", "Email marketing campaigns", "Retargeting & remarketing"], accent: "teal" },
                { icon: Users, title: "Social Media Management", items: ["Content strategy & planning", "Daily posting & engagement", "Community management", "Social listening & monitoring"], accent: "amber" },
                { icon: Award, title: "Influencer Marketing", items: ["Influencer identification", "Campaign management", "Micro-influencer networks", "Performance tracking"], accent: "indigo" },
                { icon: Target, title: "Performance Advertising", items: ["Google Ads management", "Meta advertising", "Conversion rate optimization", "A/B testing & experimentation"], accent: "teal" },
                { icon: BarChart3, title: "Brand Strategy", items: ["Brand positioning & messaging", "Competitive analysis", "Brand identity development", "Market research & insights"], accent: "amber" },
                { icon: Zap, title: "Content Creation", items: ["Blog posts & articles", "Video content production", "Infographics & visual content", "SEO-optimized content"], accent: "indigo" }
              ].map((service, idx) => {
                const Icon = service.icon;
                const accentVar = service.accent === "teal" ? "var(--accent-teal)" : service.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="bg-slate-50 rounded-xl shadow-sm hover:shadow-lg transition-all p-10 border-t-4" style={{ borderTopColor: accentVar }}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center">
                        <Icon size={32} style={{ color: accentVar }} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {service.items.map((item, i) => (
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

        {/* Execution Approach */}
        <section className="py-32 md:py-40 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Approach</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                Our Execution <span style={{ color: "var(--accent-teal)" }}>Approach</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Research & Strategy", desc: "Deep market analysis and strategic planning", accent: "teal" },
                { step: "02", title: "Campaign Planning", desc: "Detailed campaign roadmaps and timelines", accent: "amber" },
                { step: "03", title: "Execution", desc: "Flawless implementation across all channels", accent: "indigo" },
                { step: "04", title: "Optimization", desc: "Continuous testing and performance improvement", accent: "teal" },
              ].map((item, idx) => {
                const accentVar = item.accent === "teal" ? "var(--accent-teal)" : item.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="text-center bg-white rounded-lg p-8 border-t-4 hover:shadow-lg transition-all" style={{ borderTopColor: accentVar }}>
                    <div className="text-4xl font-black text-slate-900 mb-4">{item.step}</div>
                    <h3 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-32 md:py-40 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Platforms</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                Platforms We <span style={{ color: "var(--accent-amber)" }}>Cover</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  title: "Search & Performance",
                  items: [
                    { name: "Google Ads", desc: "Search, Display, Shopping, YouTube" },
                    { name: "Bing Ads", desc: "Complementary search coverage" },
                    { name: "Amazon Ads", desc: "Product advertising" }
                  ],
                  accent: "teal"
                },
                {
                  title: "Social Media",
                  items: [
                    { name: "Meta", desc: "Facebook & Instagram ads" },
                    { name: "LinkedIn", desc: "B2B advertising & content" },
                    { name: "TikTok", desc: "Short-form video marketing" }
                  ],
                  accent: "amber"
                }
              ].map((platform, idx) => {
                const accentVar = platform.accent === "teal" ? "var(--accent-teal)" : "var(--accent-amber)";
                return (
                  <div key={idx} className="bg-slate-50 rounded-xl p-10 border-l-4 shadow-sm hover:shadow-lg transition-all" style={{ borderLeftColor: accentVar }}>
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">{platform.title}</h3>
                    <ul className="space-y-6">
                      {platform.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="font-bold text-lg" style={{ color: accentVar }}>✓</span>
                          <div>
                            <p className="font-bold text-slate-900 text-lg">{item.name}</p>
                            <p className="text-slate-700 font-semibold">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Metrics & Analytics */}
        <section className="py-32 md:py-40 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Metrics</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                Metrics & <span style={{ color: "var(--accent-indigo)" }}>Analytics</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { metric: "CAC", full: "Customer Acquisition Cost", desc: "Cost to acquire each new customer", accent: "teal" },
                { metric: "ROAS", full: "Return on Ad Spend", desc: "Revenue generated per dollar spent", accent: "amber" },
                { metric: "CTR", full: "Click-Through Rate", desc: "Percentage of impressions that result in clicks", accent: "indigo" },
                { metric: "CRR", full: "Conversion Rate", desc: "Percentage of visitors who complete desired action", accent: "teal" },
              ].map((item, idx) => {
                const accentVar = item.accent === "teal" ? "var(--accent-teal)" : item.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="bg-white rounded-lg p-8 border-t-4 hover:shadow-lg transition-all" style={{ borderTopColor: accentVar }}>
                    <div className="text-4xl font-black text-slate-900 mb-3" style={{ color: accentVar }}>{item.metric}</div>
                    <p className="font-bold text-slate-900 mb-2 text-lg">{item.full}</p>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">{item.desc}</p>
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
              Ready to Accelerate Your <span style={{ color: "var(--accent-indigo)" }}>Growth?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300 font-medium">
              Let's discuss your growth goals and how Market Buddy can drive measurable results for your business.
            </p>
            <Link
              href="/contact"
              className="inline-block text-slate-900 px-12 py-5 rounded-lg hover:opacity-90 transition-all font-bold text-lg"
              style={{ backgroundColor: "var(--accent-indigo)" }}
            >
              Schedule Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
