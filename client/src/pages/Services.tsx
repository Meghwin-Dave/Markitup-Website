import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Code, TrendingUp, Zap, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-32 md:py-40 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Our Services</p>
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-8">
                Services & <span style={{ color: "var(--accent-teal)" }}>Solutions</span>
              </h1>
              <p className="text-2xl text-slate-700 leading-relaxed font-medium">
                Three integrated ventures offering comprehensive solutions for building, marketing, and scaling modern brands.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-32 md:py-40 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="space-y-20">
              {/* Discount Buddy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="bg-white rounded-xl p-12 h-80 flex items-center justify-center border-2" style={{ borderColor: "var(--accent-teal)" }}>
                  <div className="text-center">
                    <TrendingUp size={64} style={{ color: "var(--accent-teal)" }} className="mx-auto mb-4" />
                    <p className="text-slate-700 font-bold text-xl">Discount Buddy</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                    Discount <span style={{ color: "var(--accent-teal)" }}>Buddy</span>
                  </h2>
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                    A mobile-first marketplace connecting food lovers with verified deals and helping restaurants reach engaged customers. Our platform combines consumer discovery with restaurant growth.
                  </p>
                  <div className="space-y-4 mb-10">
                    {[
                      "Browse verified deals from local restaurants",
                      "Real-time notifications and bookings",
                      "Loyalty rewards program",
                      "Restaurant analytics dashboard"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="font-bold text-lg" style={{ color: "var(--accent-teal)" }}>✓</span>
                        <span className="text-slate-700 font-semibold text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/discount-buddy"
                    className="inline-flex items-center gap-3 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all font-bold text-lg"
                    style={{ backgroundColor: "var(--accent-teal)" }}
                  >
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              </div>

              {/* IT Buddy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 bg-white rounded-xl p-12 h-80 flex items-center justify-center border-2" style={{ borderColor: "var(--accent-amber)" }}>
                  <div className="text-center">
                    <Code size={64} style={{ color: "var(--accent-amber)" }} className="mx-auto mb-4" />
                    <p className="text-slate-700 font-bold text-xl">IT Buddy</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                    IT <span style={{ color: "var(--accent-amber)" }}>Buddy</span>
                  </h2>
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                    Full-service IT and software development partner providing mobile apps, web solutions, and custom backend systems. We deliver enterprise-grade engineering with startup agility.
                  </p>
                  <div className="space-y-4 mb-10">
                    {[
                      "Native mobile apps (iOS & Android)",
                      "Web applications and websites",
                      "Backend systems and APIs",
                      "Cloud infrastructure and DevOps"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="font-bold text-lg" style={{ color: "var(--accent-amber)" }}>✓</span>
                        <span className="text-slate-700 font-semibold text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/it-buddy"
                    className="inline-flex items-center gap-3 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all font-bold text-lg"
                    style={{ backgroundColor: "var(--accent-amber)" }}
                  >
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              </div>

              {/* Market Buddy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="bg-white rounded-xl p-12 h-80 flex items-center justify-center border-2" style={{ borderColor: "var(--accent-indigo)" }}>
                  <div className="text-center">
                    <Zap size={64} style={{ color: "var(--accent-indigo)" }} className="mx-auto mb-4" />
                    <p className="text-slate-700 font-bold text-xl">Market Buddy</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                    Market <span style={{ color: "var(--accent-indigo)" }}>Buddy</span>
                  </h2>
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                    Marketing, growth, and brand acceleration partner driving customer acquisition and revenue growth through data-driven strategies. We build growth engines, not just campaigns.
                  </p>
                  <div className="space-y-4 mb-10">
                    {[
                      "Digital marketing and advertising",
                      "Social media management",
                      "Performance optimization",
                      "Brand strategy and positioning"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="font-bold text-lg" style={{ color: "var(--accent-indigo)" }}>✓</span>
                        <span className="text-slate-700 font-semibold text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/market-buddy"
                    className="inline-flex items-center gap-3 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all font-bold text-lg"
                    style={{ backgroundColor: "var(--accent-indigo)" }}
                  >
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IT Service Pages */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">IT Services</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Our IT Development <span style={{ color: "var(--accent-teal)" }}>Services</span>
              </h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto font-medium">
                Explore our specialized IT development services. Click on any service to learn more.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "ERPNext Development",
                  href: "/services/erpnext-development",
                  desc: "Expert ERPNext implementation, customization, and integration services.",
                  accent: "teal",
                },
                {
                  name: "Django Development",
                  href: "/services/django-development",
                  desc: "Professional Django web applications, APIs, and backend systems.",
                  accent: "indigo",
                },
                {
                  name: "React Development",
                  href: "/services/react-development",
                  desc: "Modern React and Next.js applications with TypeScript.",
                  accent: "teal",
                },
                {
                  name: "Node.js Development",
                  href: "/services/node-development",
                  desc: "Scalable Node.js APIs, microservices, and backend systems.",
                  accent: "indigo",
                },
                {
                  name: "Mobile App Development",
                  href: "/services/mobile-app-development",
                  desc: "Flutter, React Native, and native iOS/Android applications.",
                  accent: "teal",
                },
              ].map((service, idx) => {
                const accentVar =
                  service.accent === "teal" ? "var(--accent-teal)" : "var(--accent-indigo)";
                return (
                  <Link
                    key={idx}
                    href={service.href}
                    className="bg-slate-50 rounded-xl p-6 border-l-4 shadow-sm hover:shadow-lg transition-all group"
                    style={{ borderLeftColor: accentVar }}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:underline">
                      {service.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 font-medium">{service.desc}</p>
                    <div className="flex items-center gap-2 text-sm font-bold" style={{ color: accentVar }}>
                      Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/it-buddy"
                className="inline-flex items-center gap-2 text-lg font-bold"
                style={{ color: "var(--accent-teal)" }}
              >
                View All IT Services <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Service Comparison */}
        <section className="py-32 md:py-40 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Comparison</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                Service <span style={{ color: "var(--accent-amber)" }}>Comparison</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ borderBottomColor: "var(--accent-teal)", borderBottomWidth: "3px" }}>
                    <th className="text-left py-6 px-6 font-black text-slate-900 text-lg">Service</th>
                    <th className="text-center py-6 px-6 font-bold text-slate-900">Discount Buddy</th>
                    <th className="text-center py-6 px-6 font-bold text-slate-900">IT Buddy</th>
                    <th className="text-center py-6 px-6 font-bold text-slate-900">Market Buddy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: "Product Development", db: "✓", it: "✓", mb: "—" },
                    { service: "Mobile Apps", db: "✓", it: "✓", mb: "—" },
                    { service: "Web Development", db: "✓", it: "✓", mb: "—" },
                    { service: "Backend Systems", db: "✓", it: "✓", mb: "—" },
                    { service: "Digital Marketing", db: "✓", it: "—", mb: "✓" },
                    { service: "Social Media", db: "✓", it: "—", mb: "✓" },
                    { service: "Performance Ads", db: "✓", it: "—", mb: "✓" },
                    { service: "Brand Strategy", db: "—", it: "—", mb: "✓" },
                    { service: "Analytics & Reporting", db: "✓", it: "✓", mb: "✓" },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                      <td className="py-5 px-6 font-semibold text-slate-900 text-lg">{row.service}</td>
                      <td className="text-center py-5 px-6 text-slate-700 font-bold text-lg">{row.db}</td>
                      <td className="text-center py-5 px-6 text-slate-700 font-bold text-lg">{row.it}</td>
                      <td className="text-center py-5 px-6 text-slate-700 font-bold text-lg">{row.mb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-32 md:py-40 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">How We Work</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                Engagement <span style={{ color: "var(--accent-indigo)" }}>Models</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Project-Based",
                  desc: "Fixed scope, timeline, and budget. Ideal for well-defined projects with clear deliverables.",
                  features: ["Clear deliverables", "Predictable costs", "Defined timeline"],
                  accent: "teal"
                },
                {
                  title: "Retainer",
                  desc: "Ongoing support and development. Perfect for continuous improvements and scaling.",
                  features: ["Flexible scope", "Priority support", "Dedicated team"],
                  accent: "amber"
                },
                {
                  title: "Staff Augmentation",
                  desc: "Extend your team with our experts. Work as an integrated part of your organization.",
                  features: ["Flexible duration", "Your processes", "Full integration"],
                  accent: "indigo"
                }
              ].map((model, idx) => {
                const accentVar = model.accent === "teal" ? "var(--accent-teal)" : model.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="bg-white rounded-xl p-10 border-t-4 shadow-sm hover:shadow-lg transition-all" style={{ borderTopColor: accentVar }}>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{model.title}</h3>
                    <p className="text-slate-700 mb-8 leading-relaxed font-medium text-lg">{model.desc}</p>
                    <ul className="space-y-3">
                      {model.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="font-bold text-lg" style={{ color: accentVar }}>✓</span>
                          <span className="text-slate-700 font-semibold text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
              Ready to Get <span style={{ color: "var(--accent-teal)" }}>Started?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300 font-medium">
              Let's discuss your project requirements and how we can help you build, market, and scale your business.
            </p>
            <Link
              href="/contact"
              className="inline-block text-slate-900 px-12 py-5 rounded-lg hover:opacity-90 transition-all font-bold text-lg"
              style={{ backgroundColor: "var(--accent-teal)" }}
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
