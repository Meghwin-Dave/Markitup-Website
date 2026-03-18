import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import {
  ArrowRight,
  BarChart3,
  Megaphone,
  Palette,
  Rocket,
  Target,
  Users,
} from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    title: "Social Media Marketing",
    description: "Structured campaigns that help businesses stay visible, relevant, and active across modern channels.",
    icon: Users,
    accent: "var(--accent-indigo)",
  },
  {
    title: "Content Strategy",
    description: "Content planning and messaging that support consistency, trust, and long-term brand growth.",
    icon: BarChart3,
    accent: "var(--accent-teal)",
  },
  {
    title: "Brand Promotion",
    description: "Practical promotional activity designed to strengthen visibility and customer awareness.",
    icon: Palette,
    accent: "var(--accent-amber)",
  },
  {
    title: "Lead Generation",
    description: "Marketing systems focused on attracting enquiries and supporting customer acquisition.",
    icon: Target,
    accent: "var(--accent-indigo)",
  },
  {
    title: "Campaign Management",
    description: "Ongoing campaign coordination that keeps marketing activity aligned, measured, and results-driven.",
    icon: Megaphone,
    accent: "var(--accent-teal)",
  },
];

const outcomes = [
  "Stronger brand visibility",
  "Clearer digital presence",
  "Better lead generation support",
  "More consistent campaign execution",
];

export default function MarketBuddy() {
  return (
    <div className="page-shell min-h-screen flex flex-col bg-transparent">
      <SEOHead
        title="Market Buddy | Marketing Services Company | MarkitUp Group"
        description="Market Buddy is a results-driven marketing company providing social media marketing, content strategy, brand promotion, lead generation, and campaign management."
        keywords="Market Buddy, marketing company, social media marketing, content strategy, lead generation, campaign management"
        canonical="https://markitupgroup.com/market-buddy"
        ogTitle="Market Buddy | Marketing Services Company"
        ogDescription="A results-driven marketing company focused on visibility, growth, and campaign execution."
        ogUrl="https://markitupgroup.com/market-buddy"
        twitterTitle="Market Buddy | Marketing Services Company"
        twitterDescription="Social media marketing, content strategy, lead generation, and campaign management."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Market Buddy",
          provider: { "@type": "Organization", name: "MarkitUp Group Limited" },
          description:
            "Marketing services including social media marketing, content strategy, brand promotion, lead generation, and campaign management.",
        }}
      />
      <Header />

      <main className="flex-1">
        <section className="section-space bg-transparent">
          <div className="container mx-auto px-6">
            <div className="hero-shell grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center px-6 py-10 md:px-12 md:py-14">
              <div>
                <p className="eyebrow mb-6">Market Buddy</p>
                <h1 className="mb-8 text-slate-900">
                  Marketing That Drives <span style={{ color: "var(--accent-indigo)" }}>Real Growth</span>
                </h1>
                <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium max-w-3xl">
                  Market Buddy is a results-driven marketing company helping businesses increase
                  visibility, strengthen brand presence, and generate more consistent growth.
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

              <div className="premium-card rounded-[2rem] p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(var(--accent-indigo-rgb), 0.14)" }}
                  >
                    <Rocket size={22} style={{ color: "var(--accent-indigo)" }} />
                  </div>
                  <p className="text-sm uppercase tracking-[0.2em] font-semibold text-slate-500">
                    Marketing Snapshot
                  </p>
                </div>
                <div className="space-y-5">
                  {[
                    ["Focus", "Visibility, promotion, and lead generation"],
                    ["Approach", "Structured campaigns with measurable business intent"],
                    ["Position", "A results-driven marketing company within MarkitUp Group"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-white border border-[var(--surface-border)] px-5 py-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-2">
                        {label}
                      </p>
                      <p className="text-lg font-semibold text-slate-900">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-[1.5rem] border border-[var(--surface-border)] bg-[linear-gradient(135deg,rgba(255,220,232,0.28),rgba(237,226,255,0.24))] px-6 py-7">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
                    Positioning
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed font-medium">
                    A clean, premium marketing page with more energy than IT Buddy while still
                    feeling commercially serious.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="soft-section">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-10 items-start">
              <div className="premium-card">
                <p className="eyebrow mb-5">Marketing Company</p>
                <h2 className="text-slate-900 mb-6">
                  Built for businesses that need <span style={{ color: "var(--accent-teal)" }}>growth and visibility</span>
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                  Market Buddy helps brands and businesses improve their digital presence through
                  clearer marketing, stronger campaigns, and more consistent promotion.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  The focus is not just activity, but results: better visibility, stronger brand
                  awareness, and more meaningful growth opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {outcomes.map((item, index) => (
                  <div
                    key={item}
                    className="premium-card border-t-4"
                    style={{
                      borderTopColor:
                        index % 3 === 0
                          ? "var(--accent-indigo)"
                          : index % 3 === 1
                          ? "var(--accent-teal)"
                          : "var(--accent-amber)",
                    }}
                  >
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
                      Outcome
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
                  Marketing Services Designed for <span style={{ color: "var(--accent-indigo)" }}>results-driven growth</span>
                </h2>
              </div>
              <p className="max-w-xl text-lg text-slate-600 font-medium leading-relaxed">
                A cleaner service grid with light gradient accents, clear icons, and more direct
                commercial positioning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="premium-card border-t-4 hover:shadow-lg transition-all"
                    style={{ borderTopColor: service.accent }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                      style={{
                        background:
                          service.accent === "var(--accent-indigo)"
                            ? "linear-gradient(135deg, rgba(237,226,255,0.8), rgba(255,220,232,0.35))"
                            : service.accent === "var(--accent-amber)"
                            ? "linear-gradient(135deg, rgba(255,230,216,0.82), rgba(255,220,232,0.32))"
                            : "linear-gradient(135deg, rgba(255,220,232,0.45), rgba(237,226,255,0.45))",
                      }}
                    >
                      <Icon size={28} style={{ color: service.accent }} />
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
                Position your brand with marketing that delivers <span style={{ color: "var(--accent-indigo)" }}>real business momentum</span>
              </h2>
              <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-slate-300 font-medium">
                Market Buddy helps businesses turn visibility into growth through clearer strategy,
                stronger campaigns, and results-focused marketing execution.
              </p>
              <Link
                href="/contact"
                className="premium-button inline-flex items-center gap-3 px-12 py-5 rounded-full transition-all font-bold text-lg"
              >
                Start Growing <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
