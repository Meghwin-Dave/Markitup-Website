import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, TrendingUp, Users, Wrench } from "lucide-react";
import { Link } from "wouter";

const caseStudies = [
  {
    title: "Restaurant Visibility Growth",
    challenge:
      "A local restaurant needed stronger visibility, better offer promotion, and more repeat customer traffic.",
    solution:
      "MarkitUp Group combined Market Buddy campaigns, Discount Buddy offer-led promotion, and IT Buddy support for landing pages and conversion flow.",
    result:
      "Improved local visibility, stronger customer engagement, and a clearer digital path from promotion to enquiry.",
    accent: "var(--accent-teal)",
    icon: Users,
  },
  {
    title: "Local Brand Lead Generation",
    challenge:
      "A growing local business wanted better lead generation without relying on fragmented marketing suppliers.",
    solution:
      "We aligned content, social promotion, lead capture, and digital support into one structured growth plan.",
    result:
      "A more consistent online presence, stronger enquiry quality, and improved brand trust.",
    accent: "var(--accent-indigo)",
    icon: TrendingUp,
  },
  {
    title: "Technology Support for Promotion",
    challenge:
      "A promotion-driven business needed technology support to manage campaigns and customer journeys more effectively.",
    solution:
      "IT Buddy delivered website and systems support while Market Buddy shaped the promotional messaging.",
    result:
      "A stronger digital foundation supporting visibility, marketing activity, and business growth.",
    accent: "var(--accent-amber)",
    icon: Wrench,
  },
];

export default function CaseStudies() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MarkitUp Group Case Studies",
    itemListElement: caseStudies.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
    })),
  };

  return (
    <div className="page-shell min-h-screen flex flex-col bg-transparent">
      <SEOHead
        title="Case Studies | MarkitUp Group Limited"
        description="Explore MarkitUp Group case studies showing how marketing strategy, promotional platforms, and technology solutions support visibility, leads, and business growth."
        keywords="MarkitUp Group case studies, Market Buddy, Discount Buddy, IT Buddy, business growth examples"
        canonical="https://markitupgroup.com/case-studies"
        ogTitle="Case Studies | MarkitUp Group Limited"
        ogDescription="Examples of how MarkitUp Group supports visibility, lead generation, and growth."
        ogUrl="https://markitupgroup.com/case-studies"
        twitterTitle="Case Studies | MarkitUp Group Limited"
        twitterDescription="See how MarkitUp Group helps businesses grow with marketing, promotion, and technology."
        structuredData={structuredData}
      />
      <Header />

      <main className="flex-1">
        <section className="py-24 md:py-32 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="section-panel max-w-5xl mx-auto rounded-[2rem] px-6 py-12 md:px-12 text-center">
              <p className="eyebrow mb-6">Case Studies</p>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8">
                Business Growth Examples Built Around <span style={{ color: "var(--highlight-rose)" }}>Real Visibility</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                MarkitUp Group supports businesses through strategy, promotion, and technology.
                These example case studies show how Market Buddy, Discount Buddy, and IT Buddy
                work together to support growth.
              </p>
            </div>
          </div>
        </section>

        <section className="soft-section py-24 md:py-28">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => {
                const Icon = study.icon;
                return (
                  <article
                    key={study.title}
                    className="premium-card rounded-2xl p-8 border-t-4"
                    style={{ borderTopColor: study.accent }}
                  >
                    <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                      <Icon size={28} style={{ color: study.accent }} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-5">{study.title}</h2>
                    <div className="space-y-4 text-slate-700 leading-relaxed">
                      <p><strong>Challenge:</strong> {study.challenge}</p>
                      <p><strong>Solution:</strong> {study.solution}</p>
                      <p><strong>Outcome:</strong> {study.result}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28 bg-transparent">
          <div className="container mx-auto px-6 text-center">
            <div className="rounded-[2rem] bg-slate-900 px-6 py-14 md:px-12 text-white">
              <h2 className="text-4xl md:text-6xl font-black mb-8">
                Looking for a growth partner focused on <span style={{ color: "var(--accent-teal)" }}>results</span>?
              </h2>
              <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-slate-300 font-medium">
                Talk to MarkitUp Group about digital marketing, promotion, and technology
                solutions tailored to your business goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="premium-button inline-flex items-center gap-3 px-10 py-4 rounded-full transition-all font-bold text-lg">
                  Start Growing <ArrowRight size={20} />
                </Link>
                <Link href="/services" className="premium-button-soft inline-flex items-center gap-3 px-10 py-4 rounded-full transition-all font-bold text-lg text-slate-800">
                  Explore Services
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
