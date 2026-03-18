import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, CheckCircle, Layers3, Megaphone, Server, TicketPercent } from "lucide-react";
import { Link } from "wouter";

const ecosystem = [
  {
    title: "Market Buddy",
    description:
      "Digital marketing services focused on visibility, branding, and lead generation.",
    icon: Megaphone,
    accent: "var(--accent-indigo)",
  },
  {
    title: "Discount Buddy",
    description:
      "A platform that helps businesses attract customers through location-based offers and promotions.",
    icon: TicketPercent,
    accent: "var(--accent-teal)",
  },
  {
    title: "IT Buddy",
    description:
      "Technology solutions including website development, software, and digital infrastructure.",
    icon: Server,
    accent: "var(--accent-amber)",
  },
];

const reasons = [
  "Integrated ecosystem, not isolated services",
  "Business-focused approach built around growth",
  "Modern digital solutions across marketing, platforms, and technology",
  "Focus on real results and long-term value",
];

export default function About() {
  return (
    <div className="page-shell min-h-screen flex flex-col bg-transparent">
      <SEOHead
        title="About MarkitUp Group | Business Growth Ecosystem"
        description="MarkitUp Group Limited is a UK-based business growth company combining marketing expertise, promotional platforms, and technology solutions to help businesses scale."
        keywords="About MarkitUp Group, business ecosystem, Market Buddy, Discount Buddy, IT Buddy, UK business growth company"
        canonical="https://markitupgroup.com/about"
        ogTitle="About MarkitUp Group"
        ogDescription="A modern business growth ecosystem combining marketing, platforms, and technology."
        ogUrl="https://markitupgroup.com/about"
        twitterTitle="About MarkitUp Group"
        twitterDescription="Learn how MarkitUp Group combines marketing, technology, and innovation."
      />
      <Header />

      <main className="flex-1">
        <section className="section-space bg-transparent">
          <div className="container mx-auto px-6">
            <div className="section-panel max-w-5xl mx-auto rounded-[2rem] px-6 py-12 md:px-12 text-center">
              <p className="eyebrow mb-6">About MarkitUp Group</p>
              <h1 className="mb-8 text-slate-900">
                Building Businesses Through <span style={{ color: "var(--accent-teal)" }}>Marketing, Technology, and Innovation</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium max-w-4xl mx-auto">
                MarkitUp Group combines marketing expertise, promotional platforms, and technology
                solutions to help businesses grow in the modern digital economy.
              </p>
            </div>
          </div>
        </section>

        <section className="soft-section">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
              <div className="premium-card">
                <p className="eyebrow mb-5">Who We Are</p>
                <h2 className="text-slate-900 mb-6">
                  More than a service provider, built as a <span style={{ color: "var(--accent-indigo)" }}>business ecosystem</span>
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                  MarkitUp Group is not just a marketing agency or a software company. It is a
                  UK-based business growth company designed to help businesses increase visibility,
                  attract customers, and scale through connected solutions.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  The ecosystem brings together marketing strategies, promotion platforms, and
                  technology development so businesses can grow through a more integrated and
                  modern approach.
                </p>
              </div>

              <div className="premium-card">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(var(--accent-indigo-rgb), 0.14)" }}
                  >
                    <Layers3 size={22} style={{ color: "var(--accent-indigo)" }} />
                  </div>
                  <p className="text-sm uppercase tracking-[0.2em] font-semibold text-slate-500">
                    MarkitUp Group = Parent Ecosystem
                  </p>
                </div>
                <div className="space-y-5">
                  {[
                    ["Marketing strategies", "Built to improve visibility, branding, and growth."],
                    ["Promotion platforms", "Designed to help businesses attract more customers."],
                    ["Technology development", "Supporting websites, software, and scalable digital infrastructure."],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-2xl bg-white border border-[var(--surface-border)] px-5 py-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">{title}</p>
                      <p className="text-slate-600 font-medium leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-transparent">
          <div className="container mx-auto px-6">
            <div className="premium-card max-w-5xl mx-auto rounded-[2rem] p-8 md:p-10">
              <p className="eyebrow mb-5">Our Approach</p>
              <h2 className="text-slate-900 mb-6">
                A Different Approach to <span style={{ color: "var(--accent-teal)" }}>Business Growth</span>
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                Instead of offering isolated services, MarkitUp Group builds integrated solutions
                that connect marketing, promotion, and technology into one growth system. This
                approach helps businesses move with more clarity, stronger coordination, and better
                long-term value.
              </p>
            </div>
          </div>
        </section>

        <section className="soft-section">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="eyebrow mb-5">Our Ecosystem</p>
              <h2 className="text-slate-900">
                Three business units inside <span style={{ color: "var(--accent-indigo)" }}>one parent company</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-6 font-medium leading-relaxed">
                MarkitUp Group acts as the parent ecosystem, bringing together marketing,
                product-led promotion, and technology solutions through three focused business units.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ecosystem.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="premium-card border-t-4 hover:shadow-lg transition-all"
                    style={{ borderTopColor: item.accent }}
                  >
                    <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border border-slate-100">
                      <Icon size={28} style={{ color: item.accent }} />
                    </div>
                    <h3 className="mb-3 text-slate-900">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed font-medium">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-space bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
              <div className="premium-card">
                <p className="eyebrow mb-5">Mission & Vision</p>
                <h2 className="text-slate-900 mb-6">
                  Focused on <span style={{ color: "var(--accent-amber)" }}>Real Business Growth</span>
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                  MarkitUp Group is focused on customer acquisition, brand visibility, sustainable
                  growth, and long-term value. The aim is to help businesses build momentum in a
                  way that is commercially practical and digitally modern.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  The priority is not just activity, but meaningful outcomes that support stronger
                  business performance over time.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {reasons.map((item, index) => (
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
                    <CheckCircle
                      size={22}
                      className="mb-4"
                      style={{
                        color:
                          index % 3 === 0
                            ? "var(--accent-indigo)"
                            : index % 3 === 1
                            ? "var(--accent-teal)"
                            : "var(--accent-amber)",
                      }}
                    />
                    <p className="text-lg font-semibold text-slate-900 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-transparent text-white">
          <div className="container mx-auto px-6 text-center">
            <div className="rounded-[2rem] bg-slate-900 px-6 py-14 md:px-12">
              <h2 className="mb-8 text-white">
                Let&apos;s Build Your <span style={{ color: "var(--accent-teal)" }}>Growth Story</span>
              </h2>
              <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-slate-300 font-medium">
                Connect with MarkitUp Group and explore how our ecosystem can help your business
                grow with clearer strategy, stronger visibility, and modern digital support.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="premium-button inline-flex items-center gap-3 px-10 py-4 rounded-full transition-all font-bold text-lg"
                >
                  Contact Us <ArrowRight size={20} />
                </Link>
                <Link
                  href="/contact"
                  className="premium-button-soft inline-flex items-center gap-3 px-10 py-4 rounded-full transition-all font-bold text-lg text-slate-800"
                >
                  Start Your Journey
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
