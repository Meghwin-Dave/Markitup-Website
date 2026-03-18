import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import {
  ArrowRight,
  BadgePercent,
  Compass,
  MapPin,
  Navigation,
  Smartphone,
  Store,
  Tag,
  TicketPercent,
  Users,
} from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    title: "Location-Based Discovery",
    description: "Help users discover nearby restaurant offers and discounts based on where they are.",
    icon: Navigation,
    accent: "var(--accent-teal)",
  },
  {
    title: "Real-Time Offers",
    description: "Make promotions feel timely, relevant, and easy to find when users are ready to dine.",
    icon: BadgePercent,
    accent: "var(--accent-amber)",
  },
  {
    title: "Easy to Use Platform",
    description: "Keep the product simple so users can move from discovery to action with less friction.",
    icon: Smartphone,
    accent: "var(--accent-indigo)",
  },
  {
    title: "Business Promotion Tools",
    description: "Give restaurants a clear way to promote offers and attract nearby customers.",
    icon: Store,
    accent: "var(--accent-teal)",
  },
];

const steps = [
  {
    title: "Discover nearby offers",
    description: "Users open Discount Buddy and explore nearby deals and discounts in their area.",
  },
  {
    title: "Choose a restaurant",
    description: "They select the restaurant or offer that fits what they want, when they want it.",
  },
  {
    title: "Visit and redeem",
    description: "They visit the restaurant and use the deal through a simple, easy-to-understand experience.",
  },
];

const userBenefits = [
  "Find nearby deals easily",
  "Save money on dining",
  "Discover new restaurants",
];

const businessBenefits = [
  "Attract more customers",
  "Promote offers instantly",
  "Increase visibility in the local area",
];

export default function DiscountBuddy() {
  return (
    <div className="page-shell min-h-screen flex flex-col bg-transparent">
      <SEOHead
        title="Discount Buddy | Restaurant Offer Discovery Platform | MarkitUp Group"
        description="Discount Buddy is a location-based platform that helps users discover nearby restaurant offers, discounts, and deals while helping restaurants attract customers through promotions."
        keywords="Discount Buddy, restaurant offer discovery platform, nearby restaurant offers, local restaurant promotions, MarkitUp Group"
        canonical="https://markitupgroup.com/discount-buddy"
        ogTitle="Discount Buddy | Restaurant Offer Discovery Platform"
        ogDescription="Discover nearby restaurant offers, discounts, and deals with Discount Buddy."
        ogUrl="https://markitupgroup.com/discount-buddy"
        twitterTitle="Discount Buddy | Restaurant Offer Discovery Platform"
        twitterDescription="A product-focused platform for discovering nearby restaurant offers and promotions."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Discount Buddy",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web / Mobile",
          publisher: { "@type": "Organization", name: "MarkitUp Group Limited" },
          description:
            "A location-based platform that helps users discover nearby restaurant offers and helps restaurants promote deals.",
        }}
      />
      <Header />

      <main className="flex-1">
        <section className="section-space bg-transparent">
          <div className="container mx-auto px-6">
            <div className="hero-shell grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-10 items-center px-6 py-10 md:px-12 md:py-14">
              <div>
                <p className="eyebrow mb-6">Discount Buddy</p>
                <h1 className="mb-8 text-slate-900">
                  Discover the Best Restaurant Deals <span style={{ color: "var(--highlight-rose)" }}>Near You</span>
                </h1>
                <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium max-w-3xl">
                  Discount Buddy helps you find exclusive offers, discounts, and deals from nearby
                  restaurants in real time.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="premium-button inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full transition-all font-bold text-lg"
                  >
                    Explore Platform <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/contact"
                    className="premium-button-soft inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full transition-all font-bold text-lg text-slate-800"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              <div className="premium-card rounded-[2rem] p-5 md:p-8">
                <div className="grid grid-cols-1 gap-5 items-stretch md:grid-cols-[0.95fr_1.05fr]">
                  <div className="rounded-[1.75rem] border border-[var(--surface-border)] bg-white p-5 shadow-[0_12px_28px_rgba(55,65,92,0.06)]">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <p className="text-sm text-slate-500 font-semibold">Mobile-first product</p>
                        <p className="text-xl font-bold text-slate-900 mt-1">Discount Buddy</p>
                      </div>
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: "rgba(var(--accent-teal-rgb), 0.12)" }}
                      >
                        <Smartphone size={20} style={{ color: "var(--accent-teal)" }} />
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[
                        "Nearby offers",
                        "Restaurant discounts",
                        "Simple discovery",
                        "Easy redemption",
                      ].map((item, index) => (
                        <div key={item} className="rounded-xl border border-slate-100 px-4 py-4 bg-[#fffdfd]">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                              style={{
                                backgroundColor:
                                  index % 2 === 0
                                    ? "rgba(var(--accent-teal-rgb), 0.12)"
                                    : "rgba(var(--accent-indigo-rgb), 0.12)",
                                color: index % 2 === 0 ? "var(--accent-teal)" : "var(--accent-indigo)",
                              }}
                            >
                              0{index + 1}
                            </div>
                            <p className="text-sm font-semibold text-slate-900">{item}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="rounded-[1.5rem] bg-slate-900 text-white p-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold mb-3">
                        Abstract Product Visual
                      </p>
                      <div className="rounded-[1.25rem] bg-white/8 border border-white/10 p-4">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-sm font-semibold text-slate-200">Discovery experience</p>
                          <MapPin size={16} style={{ color: "var(--accent-teal)" }} />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-14 rounded-xl bg-white/10"></div>
                          <div className="h-20 rounded-xl bg-white/6"></div>
                          <div className="h-14 rounded-xl bg-white/10"></div>
                          <div className="h-16 rounded-xl bg-white/8"></div>
                          <div
                            className="h-16 rounded-xl flex items-center justify-center text-xs font-bold"
                            style={{ backgroundColor: "rgba(255, 162, 76, 0.2)", color: "#ffd8b1" }}
                          >
                            OFFER
                          </div>
                          <div className="h-16 rounded-xl bg-white/8"></div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[1.5rem] bg-white border border-[var(--surface-border)] p-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
                        Product Summary
                      </p>
                      <p className="text-lg text-slate-700 font-medium leading-relaxed">
                        A location-based platform that connects users looking for deals with
                        restaurants offering promotions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="soft-section">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
              <div className="premium-card">
                <p className="eyebrow mb-5">What Is Discount Buddy</p>
                <h2 className="text-slate-900 mb-6">
                  A simple platform connecting <span style={{ color: "var(--highlight-rose)" }}>users and restaurants</span>
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                  Discount Buddy is a platform that connects users looking for deals with
                  restaurants offering promotions.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  It simplifies how people discover and use restaurant discounts while giving
                  businesses a clearer way to attract nearby customers.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "For users",
                    description: "A clearer way to discover nearby offers and make dining decisions more easily.",
                    icon: Users,
                    accent: "var(--accent-indigo)",
                  },
                  {
                    title: "For restaurants",
                    description: "A practical platform for publishing promotions and improving visibility locally.",
                    icon: Store,
                    accent: "var(--accent-amber)",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="premium-card border-t-4" style={{ borderTopColor: item.accent }}>
                      <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5">
                        <Icon size={28} style={{ color: item.accent }} />
                      </div>
                      <h3 className="mb-3 text-slate-900">{item.title}</h3>
                      <p className="text-slate-700 leading-relaxed font-medium">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="eyebrow mb-5">How It Works</p>
              <h2 className="text-slate-900">
                Simple Steps from <span style={{ color: "var(--highlight-rose)" }}>Discovery to Use</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="premium-card border-t-4"
                  style={{
                    borderTopColor:
                      index === 1
                        ? "var(--accent-amber)"
                        : index === 2
                        ? "var(--accent-indigo)"
                        : "var(--accent-teal)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-5"
                    style={{
                      backgroundColor:
                        index === 1
                          ? "rgba(var(--accent-amber-rgb), 0.14)"
                          : index === 2
                          ? "rgba(var(--accent-indigo-rgb), 0.14)"
                          : "rgba(var(--accent-teal-rgb), 0.14)",
                      color:
                        index === 1
                          ? "var(--accent-amber)"
                          : index === 2
                          ? "var(--accent-indigo)"
                          : "var(--accent-teal)",
                    }}
                  >
                    0{index + 1}
                  </div>
                  <h3 className="mb-3 text-slate-900">{step.title}</h3>
                  <p className="text-slate-700 leading-relaxed font-medium">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="soft-section">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="eyebrow mb-5">Key Features</p>
                <h2 className="text-slate-900">
                  Clear features with a <span style={{ color: "var(--highlight-indigo)" }}>clean product focus</span>
                </h2>
              </div>
              <p className="max-w-xl text-lg text-slate-600 font-medium leading-relaxed">
                Minimal, icon-led explanations help users understand the platform quickly without
                relying on sample restaurant data or listing-heavy layouts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="premium-card border-t-4 hover:shadow-lg transition-all"
                    style={{ borderTopColor: feature.accent }}
                  >
                    <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5">
                      <Icon size={28} style={{ color: feature.accent }} />
                    </div>
                    <h3 className="mb-3 text-slate-900">{feature.title}</h3>
                    <p className="text-slate-700 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-space bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-start">
              <div className="premium-card">
                <p className="eyebrow mb-5">For Users</p>
                <h2 className="text-slate-900 mb-6">
                  Designed to make <span style={{ color: "var(--highlight-rose)" }}>dining discovery easier</span>
                </h2>
                <div className="space-y-4">
                  {userBenefits.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <Users size={20} className="mt-1 flex-shrink-0" style={{ color: "var(--accent-teal)" }} />
                      <span className="text-slate-700 font-medium text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="premium-card">
                <p className="eyebrow mb-5">For Businesses</p>
                <h2 className="text-slate-900 mb-6">
                  Turn Empty Tables Into <span style={{ color: "var(--highlight-amber)" }}>Customers</span>
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed font-medium mb-8">
                  Discount Buddy helps restaurants attract more customers, promote offers instantly,
                  and increase local visibility through a cleaner digital promotion experience.
                </p>
                <div className="space-y-4 mb-8">
                  {businessBenefits.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <TicketPercent size={20} className="mt-1 flex-shrink-0" style={{ color: "var(--accent-amber)" }} />
                      <span className="text-slate-700 font-medium text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="premium-button inline-flex items-center gap-3 px-10 py-4 rounded-full transition-all font-bold text-lg"
                >
                  Start Promoting <ArrowRight size={20} />
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
