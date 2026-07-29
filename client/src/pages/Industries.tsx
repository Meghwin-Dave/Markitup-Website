import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Building2, ShoppingBag, Store, UtensilsCrossed } from "lucide-react";
import { Link } from "wouter";

const industries = [
  {
    title: "Restaurants and Hospitality",
    description:
      "Promotion campaigns, customer traffic support, and visibility strategies for restaurants and hospitality businesses.",
    accent: "var(--color-brand-purple)",
    icon: UtensilsCrossed,
  },
  {
    title: "Local Businesses",
    description:
      "Marketing and promotion support for businesses that need stronger local reach, enquiries, and customer acquisition.",
    accent: "var(--color-brand-pink)",
    icon: Store,
  },
  {
    title: "Growing Brands",
    description:
      "Brand positioning, campaign structure, and digital growth support for ambitious brands scaling their presence.",
    accent: "var(--color-brand-orange)",
    icon: ShoppingBag,
  },
  {
    title: "Service-Led Companies",
    description:
      "Digital visibility, lead generation, and technology solutions for companies that depend on steady enquiries and trust.",
    accent: "var(--color-brand-purple)",
    icon: Building2,
  },
];

export default function Industries() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industries MarkitUp Group Supports",
    about: industries.map((item) => item.title),
  };

  return (
    <div className="page-shell min-h-screen flex flex-col bg-transparent">
      <SEOHead
        title="Industries | MarkitUp Group Limited"
        description="MarkitUp Group supports restaurants, local businesses, growing brands, and service-led companies with marketing, promotion, and technology solutions."
        keywords="MarkitUp Group industries, restaurant marketing, local business promotion, business growth UK"
        canonical="https://markitupgroup.com/industries"
        ogTitle="Industries | MarkitUp Group Limited"
        ogDescription="Industries supported by MarkitUp Group through marketing, promotion, and technology."
        ogUrl="https://markitupgroup.com/industries"
        twitterTitle="Industries | MarkitUp Group Limited"
        twitterDescription="See the industries MarkitUp Group helps grow."
        structuredData={structuredData}
      />
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-16 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="section-panel max-w-4xl mx-auto rounded-[2rem] px-6 py-10 md:px-10 text-center">
              <p className="eyebrow mb-4">Industries</p>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Marketing and Growth Support for <span className="brand-gradient-text">Modern Businesses</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                MarkitUp Group works with businesses that want stronger visibility, better
                customer acquisition, and more consistent growth across digital channels.
              </p>
            </div>
          </div>
        </section>

        <section className="soft-section py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <article
                    key={industry.title}
                    className="premium-card rounded-2xl p-6 border-t-4"
                    style={{ borderTopColor: industry.accent }}
                  >
                    <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon size={24} style={{ color: industry.accent }} />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">{industry.title}</h2>
                    <p className="text-[15px] text-slate-700 leading-relaxed font-medium">
                      {industry.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-transparent">
          <div className="container mx-auto px-6 text-center">
            <div className="rounded-[2rem] bg-slate-900 px-6 py-12 md:px-10 text-white">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Need a strategy built around your <span className="brand-gradient-text">industry goals</span>?
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-slate-300 font-medium">
                Explore our services or contact MarkitUp Group to discuss a growth approach for
                your market, audience, and business stage.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/services" className="gradient-button px-8 py-4 rounded-full font-bold text-sm text-white">
                  Explore Services <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link href="/contact" className="outline-button px-8 py-4 rounded-full font-bold text-sm bg-white text-slate-900">
                  Contact Us
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
