import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, CheckCircle, Code, MapPin, Smartphone, TrendingUp, Zap } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Social media marketing, content strategy, and brand promotion designed to increase online visibility.",
    accent: "var(--accent-indigo)",
    icon: Zap,
  },
  {
    title: "Business Promotion",
    description:
      "Targeted promotional campaigns that help businesses reach new customers and increase traffic.",
    accent: "var(--accent-teal)",
    icon: TrendingUp,
  },
  {
    title: "Lead Generation",
    description:
      "Marketing strategies that help businesses generate leads and grow their customer base.",
    accent: "var(--accent-amber)",
    icon: CheckCircle,
  },
  {
    title: "Technology Solutions",
    description:
      "Digital platforms, websites, and software tools that support modern businesses.",
    accent: "var(--accent-teal)",
    icon: Code,
  },
];

const businessUnits = [
  {
    name: "Market Buddy",
    href: "/market-buddy",
    badge: "Marketing Services",
    description:
      "Marketing services designed to help businesses grow their online presence and reach more customers.",
    accent: "var(--accent-indigo)",
    badgeBackground: "rgba(237, 226, 255, 0.45)",
    iconBackground: "rgba(237, 226, 255, 0.34)",
    icon: Zap,
  },
  {
    name: "Discount Buddy",
    href: "/discount-buddy",
    badge: "Product / App Platform",
    description:
      "A location-based product platform for nearby restaurant offers, local discovery, and customer footfall growth.",
    accent: "var(--accent-teal)",
    badgeBackground: "rgba(255, 220, 232, 0.45)",
    iconBackground: "rgba(255, 220, 232, 0.34)",
    icon: Smartphone,
  },
  {
    name: "IT Buddy",
    href: "/it-buddy",
    badge: "Technology Solutions",
    description:
      "Technology development and IT services that support digital platforms and modern business infrastructure.",
    accent: "var(--accent-amber)",
    badgeBackground: "rgba(255, 230, 216, 0.48)",
    iconBackground: "rgba(255, 230, 216, 0.34)",
    icon: Code,
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MarkitUp Group Limited",
    url: "https://markitupgroup.com",
    email: "contact@markitupgroup.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    department: [
      { "@type": "Organization", name: "Market Buddy" },
      { "@type": "SoftwareApplication", name: "Discount Buddy" },
      { "@type": "Organization", name: "IT Buddy" },
    ],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.title, description: service.description },
    })),
  };

  return (
    <div className="page-shell min-h-screen flex flex-col bg-transparent">
      <SEOHead
        title="MarkitUp Group Limited | Marketing That Drives Real Business Growth"
        description="MarkitUp Group Limited is a UK-based premium business ecosystem combining Market Buddy marketing services, Discount Buddy product-led offer discovery, and IT Buddy technology solutions."
        keywords="MarkitUp Group, Market Buddy, Discount Buddy, IT Buddy, digital marketing UK, business growth company"
        canonical="https://markitupgroup.com/"
        ogTitle="MarkitUp Group Limited | Marketing That Drives Real Business Growth"
        ogDescription="UK-based digital marketing, promotional platforms, and technology solutions designed to help businesses grow."
        ogUrl="https://markitupgroup.com/"
        twitterTitle="MarkitUp Group Limited | Marketing That Drives Real Business Growth"
        twitterDescription="Helping businesses grow through marketing strategy, promotion, and technology."
        structuredData={structuredData}
      />
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="section-panel max-w-5xl mx-auto rounded-[2rem] px-6 py-12 md:px-12 md:py-16 text-center">
              <p className="eyebrow mb-6">
                UK-Based Digital Marketing and Promotion Company
              </p>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-slate-900">
                Marketing That Drives{" "}
                <span style={{ color: "var(--highlight-rose)" }}>Real Business Growth</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-700 mb-6 leading-relaxed max-w-4xl mx-auto font-medium">
                MarkitUp Group is a UK-based digital marketing and promotion company helping
                businesses attract customers, increase visibility, and scale through marketing
                strategy, promotional platforms, and technology-driven solutions.
              </p>
              <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-4xl mx-auto">
                MarkitUp Group Limited is the parent company behind three focused business units:
                Market Buddy for marketing growth, Discount Buddy as a product-led offers
                platform, and IT Buddy for websites, software, and scalable digital platforms.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="premium-button px-10 py-4 rounded-full transition-all font-bold flex items-center gap-3 text-lg"
                >
                  Start Growing Your Business <ArrowRight size={20} />
                </Link>
                <Link
                  href="/services"
                  className="premium-button-soft transition-all font-bold text-lg px-10 py-4 rounded-full"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="soft-section py-24 md:py-28">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">
                  Parent Company Ecosystem
                </p>
                <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900">
                  Marketing, Product, and Technology Built for{" "}
                  <span style={{ color: "var(--highlight-amber)" }}>Modern Businesses</span>
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                  MarkitUp Group is the parent company. It brings together a digital marketing
                  business, a product-led restaurant offers platform, and a software company
                  under one premium growth ecosystem.
                </p>
                <div className="space-y-4">
                  {[
                    "Market Buddy drives visibility, branding, and lead generation",
                    "Discount Buddy acts as a real product/app for local offer discovery",
                    "IT Buddy builds the software, websites, apps, and internal platforms behind growth",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <CheckCircle
                        size={24}
                        className="flex-shrink-0 mt-1"
                        style={{ color: "var(--accent-indigo)" }}
                      />
                      <span className="text-slate-700 font-medium text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="premium-card rounded-2xl p-10 md:p-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.title}
                        className="rounded-xl p-6 border-l-4 bg-slate-50"
                        style={{ borderLeftColor: service.accent }}
                      >
                        <Icon size={28} style={{ color: service.accent }} className="mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                        <p className="text-slate-700 leading-relaxed font-medium">
                          {service.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">
                Core Capabilities
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                Growth Services Backed by{" "}
                <span style={{ color: "var(--highlight-rose)" }}>Product Thinking</span>
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto font-medium">
                MarkitUp Group combines marketing, business visibility campaigns, product-led
                promotion, and technology support to help businesses stand out in competitive markets.
              </p>
              <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto mt-5">
                Explore how <Link href="/market-buddy" className="font-semibold hover:underline">Market Buddy</Link>,{" "}
                <Link href="/discount-buddy" className="font-semibold hover:underline">Discount Buddy</Link>, and{" "}
                <Link href="/it-buddy" className="font-semibold hover:underline">IT Buddy</Link> work
                together inside the MarkitUp Group ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="premium-card rounded-xl hover:shadow-lg transition-all p-8 border-t-4"
                    style={{ borderTopColor: service.accent }}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center">
                        <Icon size={28} style={{ color: service.accent }} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed font-medium text-lg">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="soft-section py-24 md:py-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">
                Business Units
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                Three Focused Businesses Inside{" "}
                <span style={{ color: "#6d57bf" }}>One Growth Vision</span>
              </h2>
              <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
                Market Buddy is the marketing company, Discount Buddy is the app-like offers
                product, and IT Buddy is the software company powering both client work and
                internal products.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessUnits.map((unit) => {
                const Icon = unit.icon;
                return (
                  <Link
                    key={unit.name}
                    href={unit.href}
                    className="premium-card rounded-xl hover:shadow-lg transition-all p-10 border-2 group"
                    style={{ borderColor: unit.accent }}
                  >
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: unit.iconBackground }}
                    >
                      <Icon size={32} style={{ color: unit.accent }} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{unit.name}</h3>
                    <p
                      className="inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold tracking-wide mb-4 border"
                      style={{
                        backgroundColor: unit.badgeBackground,
                        color: "#243047",
                        borderColor: "rgba(36, 48, 71, 0.08)",
                      }}
                    >
                      {unit.badge}
                    </p>
                    <p className="text-slate-700 mb-6 leading-relaxed font-medium">
                      {unit.description}
                    </p>
                    <div className="flex items-center gap-2 font-bold group-hover:gap-3 transition-all text-lg text-slate-900">
                      <span>Learn More</span>
                      <ArrowRight size={20} style={{ color: unit.accent }} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
              <div>
                <p className="eyebrow mb-5">Discount Buddy Product</p>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                  Discover the best restaurant offers{" "}
                  <span style={{ color: "var(--highlight-rose)" }}>near you</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium mb-6">
                  Discount Buddy is a product and app concept designed around nearby restaurant
                  offers, local discovery, and real-time deal promotion for restaurants and local
                  businesses.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Location-based offers and local restaurant discovery",
                    "Real-time promotions designed to increase footfall",
                    "A product-led experience for customers and businesses",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <MapPin size={22} className="mt-1 flex-shrink-0" style={{ color: "var(--accent-teal)" }} />
                      <span className="text-slate-700 font-medium text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/discount-buddy"
                  className="premium-button inline-flex items-center gap-3 px-10 py-4 rounded-full transition-all font-bold text-lg"
                >
                  Explore Discount Buddy <ArrowRight size={20} />
                </Link>
              </div>

              <div className="premium-card rounded-[2rem] p-6 md:p-10">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_0.9fr]">
                  <div className="rounded-[1.5rem] bg-white border border-[var(--surface-border)] p-5 shadow-[0_12px_28px_rgba(55,65,92,0.06)]">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <p className="text-sm font-semibold text-slate-500">Nearby offers</p>
                        <h3 className="text-2xl font-bold text-slate-900 mt-1">Discount Buddy</h3>
                      </div>
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: "rgba(var(--accent-teal-rgb), 0.12)" }}
                      >
                        <Smartphone size={22} style={{ color: "var(--accent-teal)" }} />
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        ["0.8 mi", "20% off lunch", "Nearby Bistro"],
                        ["1.3 mi", "2-for-1 mains", "Urban Grill"],
                        ["2.1 mi", "Happy hour deal", "Local Kitchen"],
                      ].map(([distance, offer, venue]) => (
                        <div key={venue} className="rounded-xl border border-slate-100 px-4 py-3 bg-[#fffdfd]">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-sm font-semibold text-slate-900">{offer}</p>
                            <span className="text-xs font-semibold text-slate-500">{distance}</span>
                          </div>
                          <p className="text-sm text-slate-600">{venue}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="rounded-[1.5rem] bg-slate-900 text-white p-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold mb-3">
                        Product Feel
                      </p>
                      <p className="text-xl font-bold leading-snug">
                        App-like discovery for nearby restaurant deals.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] bg-white border border-[var(--surface-border)] p-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
                        Business Value
                      </p>
                      <p className="text-lg text-slate-700 font-medium leading-relaxed">
                        Helps restaurants promote offers, attract customers, and increase local visibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28 bg-transparent text-white">
          <div className="container mx-auto px-6 text-center">
            <div className="rounded-[2rem] bg-slate-900 px-6 py-14 md:px-12">
              <h2 className="text-4xl md:text-6xl font-black mb-8">
                Ready to grow your <span style={{ color: "var(--accent-teal)" }}>business?</span>
              </h2>
              <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-slate-300 font-medium">
                Contact MarkitUp Group to discuss how our marketing and promotion solutions can
                help your business attract more customers.
              </p>
              <Link
                href="/contact"
                className="premium-button inline-flex items-center gap-3 px-12 py-5 rounded-full transition-all font-bold text-lg"
              >
                Contact Us <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
