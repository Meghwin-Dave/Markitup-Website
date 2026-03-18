import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Code, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Our digital marketing services help businesses build strong online presence and connect with their audience through modern marketing strategies.",
    details: [
      "Social media marketing",
      "Content creation",
      "Brand positioning",
      "Campaign management",
    ],
    accent: "var(--accent-indigo)",
    icon: Zap,
  },
  {
    title: "Business Promotion",
    description:
      "We help businesses promote their services and products using targeted marketing campaigns designed to increase customer engagement and visibility.",
    details: [
      "Targeted campaigns",
      "Customer engagement strategies",
      "Visibility improvement",
      "Offer promotion support",
    ],
    accent: "var(--accent-teal)",
    icon: TrendingUp,
  },
  {
    title: "Lead Generation",
    description:
      "Our marketing strategies focus on generating real leads and helping businesses attract potential customers through digital platforms.",
    details: [
      "Lead-focused campaign planning",
      "Audience targeting",
      "Digital funnel support",
      "Customer acquisition strategies",
    ],
    accent: "var(--accent-amber)",
    icon: Users,
  },
  {
    title: "Technology Solutions",
    description:
      "Our technology services support modern businesses with website development, digital platforms, and IT consulting that strengthen digital infrastructure.",
    details: [
      "Website development",
      "Digital platforms",
      "Software tools",
      "IT consulting",
    ],
    accent: "var(--accent-teal)",
    icon: Code,
  },
];

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Marketing and Business Growth Services",
    provider: {
      "@type": "Organization",
      name: "MarkitUp Group Limited",
      url: "https://markitupgroup.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return (
    <div className="page-shell min-h-screen flex flex-col bg-transparent">
      <SEOHead
        title="Services | Marketing and Digital Growth Services | MarkitUp Group"
        description="Explore MarkitUp Group services including digital marketing, business promotion, lead generation, and technology solutions for business growth."
        keywords="MarkitUp Group services, digital marketing, business promotion, lead generation, technology solutions"
        canonical="https://markitupgroup.com/services"
        ogTitle="Services | MarkitUp Group"
        ogDescription="Digital marketing, business promotion, lead generation, and technology solutions for business growth."
        ogUrl="https://markitupgroup.com/services"
        twitterTitle="Services | MarkitUp Group"
        twitterDescription="Explore marketing and digital growth services from MarkitUp Group."
        structuredData={structuredData}
      />
      <Header />

      <main className="flex-1">
        <section className="py-24 md:py-32 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="section-panel max-w-4xl mx-auto rounded-[2rem] px-6 py-12 md:px-12 text-center">
              <p className="eyebrow mb-6">
                Our Services
              </p>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8">
                Marketing and <span style={{ color: "var(--accent-teal)" }}>Digital Growth Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                MarkitUp Group provides marketing, promotional, and technology services designed
                to help businesses grow and attract more customers.
              </p>
            </div>
          </div>
        </section>

        <section className="soft-section py-24 md:py-28">
          <div className="container mx-auto px-6">
            <div className="space-y-12">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="premium-card grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-2xl p-10 border-l-4"
                    style={{ borderLeftColor: service.accent }}
                  >
                    <div>
                      <div className="bg-slate-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        <Icon size={32} style={{ color: service.accent }} />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                        {service.title}
                      </h2>
                      <p className="text-lg text-slate-700 leading-relaxed font-medium">
                        {service.description}
                      </p>
                    </div>
                    <div className="space-y-4">
                      {service.details.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="font-bold text-lg" style={{ color: service.accent }}>
                            ✓
                          </span>
                          <span className="text-slate-700 font-semibold text-lg">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">
                Business Units
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                Explore the MarkitUp Group <span style={{ color: "var(--accent-indigo)" }}>Ecosystem</span>
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                Internal links across <Link href="/market-buddy" className="font-semibold hover:underline">Market Buddy</Link>,{" "}
                <Link href="/discount-buddy" className="font-semibold hover:underline">Discount Buddy</Link>, and{" "}
                <Link href="/it-buddy" className="font-semibold hover:underline">IT Buddy</Link> help
                you explore the full MarkitUp Group service ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Market Buddy",
                  href: "/market-buddy",
                  description: "Digital marketing services for visibility, positioning, and growth.",
                  accent: "var(--accent-indigo)",
                },
                {
                  title: "Discount Buddy",
                  href: "/discount-buddy",
                  description: "A promotion platform connecting businesses with customers through offers.",
                  accent: "var(--accent-teal)",
                },
                {
                  title: "IT Buddy",
                  href: "/it-buddy",
                  description: "Technology development and digital infrastructure for modern businesses.",
                  accent: "var(--accent-amber)",
                },
              ].map((unit) => (
                <Link
                  key={unit.title}
                  href={unit.href}
                  className="premium-card rounded-xl p-8 hover:shadow-lg transition-all border-t-4 group"
                  style={{ borderTopColor: unit.accent }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{unit.title}</h3>
                  <p className="text-slate-700 leading-relaxed font-medium mb-5">
                    {unit.description}
                  </p>
                  <div
                    className="flex items-center gap-2 font-bold group-hover:gap-3 transition-all"
                    style={{ color: unit.accent }}
                  >
                    Learn More <ArrowRight size={18} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
