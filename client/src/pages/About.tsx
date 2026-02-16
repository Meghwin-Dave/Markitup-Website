import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-32 md:py-40 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">About MarkItUp</p>
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-8">
                About <span style={{ color: "var(--accent-teal)" }}>MarkItUp</span>
              </h1>
              <p className="text-2xl text-slate-700 leading-relaxed font-medium">
                A modern digital-first company built on the principles of innovation, execution, and measurable impact.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-32 md:py-40 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="bg-white rounded-xl p-12 border-l-4 shadow-sm hover:shadow-lg transition-all" style={{ borderLeftColor: "var(--accent-teal)" }}>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">
                  Our <span style={{ color: "var(--accent-teal)" }}>Vision</span>
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
                  We envision a world where ambitious entrepreneurs and businesses have access to world-class product development, marketing expertise, and growth strategies under one unified partner.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  MarkItUp exists to break down the silos between product, engineering, and marketing—creating ventures that are built right, marketed well, and scaled sustainably.
                </p>
              </div>
              <div className="bg-white rounded-xl p-12 border-l-4 shadow-sm hover:shadow-lg transition-all" style={{ borderLeftColor: "var(--accent-amber)" }}>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">
                  Our <span style={{ color: "var(--accent-amber)" }}>Mission</span>
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
                  To empower businesses to build, market, and launch modern brands through integrated product innovation, engineering excellence, and growth strategy.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  We're committed to delivering measurable results, building lasting partnerships, and creating ventures that make a real impact in their markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why MarkItUp Was Started */}
        <section className="py-32 md:py-40 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Our Story</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-12">
                Why MarkItUp Was <span style={{ color: "var(--accent-indigo)" }}>Started</span>
              </h2>
              <div className="space-y-8 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  We noticed a critical gap in the market: most businesses struggle to coordinate between product development, technical execution, and marketing strategy. They hire separate agencies or consultants, each working in isolation, leading to misaligned goals, wasted resources, and missed opportunities.
                </p>
                <p>
                  MarkItUp was founded to solve this problem. We created an integrated ecosystem where product thinking, engineering rigor, and marketing expertise work together seamlessly. Our three ventures—Discount Buddy, IT Buddy, and Market Buddy—are proof that this model works.
                </p>
                <p>
                  Today, we help startups, SMEs, and established brands transform their vision into market-leading ventures. We're not just a service provider; we're a strategic partner invested in your success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Expertise */}
        <section className="py-32 md:py-40 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Our Expertise</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                Our Deep <span style={{ color: "var(--accent-teal)" }}>Expertise</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Products */}
              <div className="bg-white rounded-xl p-10 border-t-4 shadow-sm hover:shadow-lg transition-all" style={{ borderTopColor: "var(--accent-teal)" }}>
                <h3 className="text-3xl font-black text-slate-900 mb-8">Products</h3>
                <ul className="space-y-4">
                  {[
                    "Product strategy & positioning",
                    "User research & validation",
                    "MVP development & iteration",
                    "Scaling strategies & roadmaps",
                    "Platform monetization"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle size={24} className="flex-shrink-0 mt-1 font-bold" style={{ color: "var(--accent-teal)" }} />
                      <span className="text-slate-700 font-semibold text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering */}
              <div className="bg-white rounded-xl p-10 border-t-4 shadow-sm hover:shadow-lg transition-all" style={{ borderTopColor: "var(--accent-amber)" }}>
                <h3 className="text-3xl font-black text-slate-900 mb-8">Engineering</h3>
                <ul className="space-y-4">
                  {[
                    "Mobile app development (iOS/Android)",
                    "Web application development",
                    "Backend systems & APIs",
                    "Cloud infrastructure & DevOps",
                    "Security & scalability"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle size={24} className="flex-shrink-0 mt-1 font-bold" style={{ color: "var(--accent-amber)" }} />
                      <span className="text-slate-700 font-semibold text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Marketing */}
              <div className="bg-white rounded-xl p-10 border-t-4 shadow-sm hover:shadow-lg transition-all" style={{ borderTopColor: "var(--accent-indigo)" }}>
                <h3 className="text-3xl font-black text-slate-900 mb-8">Marketing</h3>
                <ul className="space-y-4">
                  {[
                    "Brand strategy & positioning",
                    "Digital marketing campaigns",
                    "Performance advertising",
                    "Content & social media strategy",
                    "Growth analytics & optimization"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle size={24} className="flex-shrink-0 mt-1 font-bold" style={{ color: "var(--accent-indigo)" }} />
                      <span className="text-slate-700 font-semibold text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Philosophy */}
        <section className="py-32 md:py-40 bg-slate-900 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                Our Team <span style={{ color: "var(--accent-teal)" }}>Philosophy</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Ownership",
                  desc: "We take full ownership of outcomes. Every team member is invested in your success and accountable for delivering results.",
                  accent: "teal"
                },
                {
                  title: "Quality",
                  desc: "We never compromise on quality. From code to copy to strategy, excellence is non-negotiable in everything we do.",
                  accent: "amber"
                },
                {
                  title: "Accountability",
                  desc: "We set clear goals, track progress, and deliver on commitments. Transparency and honesty guide all our partnerships.",
                  accent: "indigo"
                }
              ].map((item, idx) => {
                const accentVar = item.accent === "teal" ? "var(--accent-teal)" : item.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="bg-slate-800 rounded-lg p-10 border-t-4 hover:border-slate-600 transition-all" style={{ borderTopColor: accentVar }}>
                    <h3 className="text-2xl font-black mb-6">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed font-medium text-lg">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-32 md:py-40 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Industries</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                Industries We <span style={{ color: "var(--accent-amber)" }}>Serve</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  title: "Food & Hospitality",
                  desc: "From restaurant discovery platforms to loyalty programs, we help food businesses scale through technology and marketing.",
                  accent: "teal"
                },
                {
                  title: "Startups",
                  desc: "Early-stage companies benefit from our integrated approach: product validation, MVP development, and go-to-market strategy.",
                  accent: "amber"
                },
                {
                  title: "SMEs & Local Businesses",
                  desc: "We help small and medium enterprises digitize operations, reach new customers, and compete with larger players.",
                  accent: "indigo"
                },
                {
                  title: "Digital & E-commerce",
                  desc: "Online businesses leverage our expertise in platform development, customer acquisition, and retention strategies.",
                  accent: "teal"
                },
              ].map((industry, idx) => {
                const accentVar = industry.accent === "teal" ? "var(--accent-teal)" : industry.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="bg-slate-50 rounded-xl p-10 border-l-4 shadow-sm hover:shadow-lg transition-all" style={{ borderLeftColor: accentVar }}>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">{industry.title}</h3>
                    <p className="text-slate-700 leading-relaxed font-medium text-lg">{industry.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
