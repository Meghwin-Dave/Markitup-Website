import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ERPNextDevelopment() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "ERPNext Development",
    provider: {
      "@type": "Organization",
      name: "MarkitUp Group",
      url: "https://markitupgroup.com",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    description:
      "Professional ERPNext development services including implementation, customization, and integration for businesses in the UK and worldwide.",
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead
        title="ERPNext Development Services UK | ERPNext Developer | MarkitUp Group"
        description="Expert ERPNext development services including implementation, customization, workflow automation, and integration. Hire ERPNext developers in UK and worldwide."
        keywords="ERPNext developer UK, ERPNext development UK, ERPNext implementation, ERPNext customization, Frappe developer UK, ERPNext services"
        canonical="https://markitupgroup.com/services/erpnext-development"
        ogTitle="ERPNext Development Services | Expert ERPNext Developers"
        ogDescription="Professional ERPNext development, implementation, and customization services for businesses in UK and worldwide."
        ogUrl="https://markitupgroup.com/services/erpnext-development"
        structuredData={structuredData}
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-slate-950 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                ERPNext Development Services
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium max-w-3xl mx-auto">
                Expert ERPNext implementation, customization, and development services for businesses in the UK and
                worldwide.
              </p>
              <div className="mt-10">
                <Link
                  href="/it-buddy"
                  className="inline-block text-white px-10 py-4 rounded-lg hover:opacity-90 transition-all font-bold text-lg"
                  style={{ backgroundColor: "var(--accent-teal)" }}
                >
                  View All IT Services <ArrowRight size={20} className="inline ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Content */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Our ERPNext Development Services</h2>
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  We provide comprehensive ERPNext development services, helping businesses implement, customize, and
                  extend ERPNext to meet their specific requirements. Our ERPNext developers have extensive experience
                  with Frappe Framework and Python.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">ERPNext Implementation</h3>
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  Complete ERPNext setup, configuration, and deployment tailored to your business processes. We ensure
                  smooth data migration, user training, and go-live support.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">ERPNext Customization</h3>
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  Custom modules, workflows, reports, and integrations built on Frappe Framework. We extend ERPNext's
                  functionality to match your unique business needs.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">ERPNext Integration</h3>
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  Integrate ERPNext with third-party systems, payment gateways, e-commerce platforms, and other
                  business tools using REST APIs and webhooks.
                </p>

                <div className="mt-10">
                  <Link
                    href="/it-buddy"
                    className="inline-flex items-center gap-2 text-lg font-bold"
                    style={{ color: "var(--accent-teal)" }}
                  >
                    Explore All IT Services <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
