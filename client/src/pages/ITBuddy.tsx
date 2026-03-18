import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Code, Database, Globe, Layers3, Server, Smartphone, Wrench } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    title: "Website Development",
    description: "Professional websites built for credibility, performance, and business growth.",
    icon: Globe,
  },
  {
    title: "SaaS Platforms",
    description: "Scalable web-based software products designed for operations, growth, and recurring value.",
    icon: Layers3,
  },
  {
    title: "Mobile Apps",
    description: "Mobile-first product experiences built for customers, teams, and modern digital workflows.",
    icon: Smartphone,
  },
  {
    title: "API & Backend Systems",
    description: "Reliable back-end services, integrations, and application infrastructure that support scale.",
    icon: Database,
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions designed around the way your business actually works.",
    icon: Code,
  },
  {
    title: "IT Consulting",
    description: "Strategic technical guidance to help businesses make better digital decisions.",
    icon: Wrench,
  },
];

const strengths = [
  "Structured technical delivery",
  "Scalable digital systems",
  "Serious engineering capability",
  "Support for internal and client platforms",
];

export default function ITBuddy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IT Buddy",
    parentOrganization: {
      "@type": "Organization",
      name: "MarkitUp Group Limited",
      url: "https://markitupgroup.com",
    },
    description:
      "IT Buddy is the software development company within MarkitUp Group, providing website development, SaaS, mobile apps, APIs, backend systems, and IT consulting.",
  };

  return (
    <div className="page-shell min-h-screen flex flex-col bg-transparent">
      <SEOHead
        title="IT Buddy | Software Development Company | MarkitUp Group"
        description="IT Buddy is a software development company providing website development, SaaS platforms, mobile apps, API and backend systems, and IT consulting."
        keywords="IT Buddy, software development company, website development, SaaS platforms, mobile apps, backend systems, IT consulting"
        canonical="https://markitupgroup.com/it-buddy"
        ogTitle="IT Buddy | Software Development Company"
        ogDescription="Website development, SaaS platforms, mobile apps, backend systems, and IT consulting from IT Buddy."
        ogUrl="https://markitupgroup.com/it-buddy"
        twitterTitle="IT Buddy | Software Development Company"
        twitterDescription="A clean, technical software company page for IT Buddy services."
        structuredData={structuredData}
      />
      <Header />

      <main className="flex-1">
        <section className="section-space bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-stretch">
              <div className="premium-card border border-[var(--surface-border)] bg-white rounded-[2rem] px-6 py-10 md:px-12 md:py-14">
                <p className="eyebrow mb-6">IT Buddy</p>
                <h1 className="mb-8 text-slate-900">
                  Technology That Powers <span style={{ color: "var(--accent-indigo)" }}>Modern Businesses</span>
                </h1>
                <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium max-w-3xl">
                  IT Buddy is a software development company focused on building websites, SaaS
                  platforms, mobile applications, and custom software for modern businesses.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="premium-button inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full transition-all font-bold text-lg"
                  >
                    Talk to Our Team <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/services"
                    className="premium-button-soft inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full transition-all font-bold text-lg text-slate-800"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              <div className="premium-card rounded-[2rem] p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: "rgba(var(--accent-indigo-rgb), 0.14)" }}
                    >
                      <Server size={22} style={{ color: "var(--accent-indigo)" }} />
                    </div>
                    <p className="text-sm uppercase tracking-[0.2em] font-semibold text-slate-500">
                      Technical Focus
                    </p>
                  </div>
                  <div className="space-y-5">
                    {[
                      ["Core Capability", "Web, SaaS, mobile, and custom software development"],
                      ["Delivery Style", "Technical, structured, and business-focused"],
                      ["Platform Role", "Supports internal platforms like Discount Buddy as well as client solutions"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl bg-white border border-[var(--surface-border)] px-5 py-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-2">
                          {label}
                        </p>
                        <p className="text-lg font-semibold text-slate-900">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 rounded-[1.5rem] border border-[var(--surface-border)] bg-[#fcfbff] px-6 py-7">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
                    Why IT Buddy
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed font-medium">
                    A more serious technical partner for businesses that need dependable software
                    capability and modern digital infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="soft-section">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
              <div className="premium-card">
                <p className="eyebrow mb-5">Technology Services</p>
                <h2 className="text-slate-900 mb-6">
                  A software company built around <span style={{ color: "var(--accent-indigo)" }}>trust and capability</span>
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                  IT Buddy helps businesses plan, build, and improve their digital systems through
                  practical software development and technical consulting.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  The focus is on reliable engineering, clean implementation, and solutions that
                  support long-term business growth.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {strengths.map((item, index) => (
                  <div key={item} className="premium-card border-t-4" style={{ borderTopColor: index % 2 === 0 ? "var(--accent-indigo)" : "var(--accent-teal)" }}>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
                      Strength
                    </p>
                    <p className="text-lg font-semibold text-slate-900 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-transparent">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="eyebrow mb-5">Services</p>
                <h2 className="text-slate-900">
                  Core Services from a <span style={{ color: "var(--accent-amber)" }}>serious software team</span>
                </h2>
              </div>
              <p className="max-w-xl text-lg text-slate-600 font-medium leading-relaxed">
                A clean grid-based presentation that positions IT Buddy as a capable technical
                company with clear development services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                const borderColor =
                  index % 3 === 0
                    ? "var(--accent-indigo)"
                    : index % 3 === 1
                    ? "var(--accent-teal)"
                    : "var(--accent-amber)";

                return (
                  <div
                    key={service.title}
                    className="premium-card border-t-4 hover:shadow-lg transition-all"
                    style={{ borderTopColor: borderColor }}
                  >
                    <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border border-slate-100">
                      <Icon size={28} style={{ color: borderColor }} />
                    </div>
                    <h3 className="mb-3 text-slate-900">{service.title}</h3>
                    <p className="text-slate-700 leading-relaxed font-medium">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-space bg-transparent text-white">
          <div className="container mx-auto px-6 text-center">
            <div className="rounded-[2rem] bg-slate-900 px-6 py-14 md:px-12">
              <h2 className="mb-8 text-white">
                Build with a technical partner focused on <span style={{ color: "var(--accent-amber)" }}>quality and trust</span>
              </h2>
              <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-slate-300 font-medium">
                IT Buddy helps businesses create modern digital systems with a more serious,
                capable, and professional software delivery approach.
              </p>
              <Link
                href="/contact"
                className="premium-button inline-flex items-center gap-3 px-12 py-5 rounded-full transition-all font-bold text-lg"
              >
                Start Your Project <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
