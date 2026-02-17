import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function DjangoDevelopment() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Django Development",
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
      "Professional Django development services including web applications, REST APIs, and backend systems. Hire Django developers in UK and worldwide.",
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead
        title="Django Development Services UK | Django Developer | MarkitUp Group"
        description="Expert Django development services including web applications, REST APIs, Django REST Framework, and backend systems. Hire Django developers in UK and worldwide."
        keywords="Django developer UK, Django development UK, Django REST Framework, Python developer UK, Django web development"
        canonical="https://markitupgroup.com/services/django-development"
        ogTitle="Django Development Services | Expert Django Developers"
        ogDescription="Professional Django development services for web applications, APIs, and backend systems in UK and worldwide."
        ogUrl="https://markitupgroup.com/services/django-development"
        structuredData={structuredData}
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-slate-950 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Django Development Services
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium max-w-3xl mx-auto">
                Expert Django and Django REST Framework development for scalable web applications and APIs.
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
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Our Django Development Services</h2>
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  We build high-performance web applications, RESTful APIs, and backend systems using Django and Django
                  REST Framework. Our Django developers deliver scalable, secure, and maintainable solutions.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Django Web Applications</h3>
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  Full-stack Django applications with modern frontends, robust authentication, and comprehensive admin
                  interfaces. We leverage Django's ORM, security features, and scalability.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Django REST Framework APIs</h3>
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  RESTful APIs built with Django REST Framework for mobile apps, frontend applications, and
                  microservices. We implement authentication, permissions, serialization, and API versioning.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Django Backend Systems</h3>
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  Scalable backend systems handling complex business logic, data processing, and integrations. We
                  optimize for performance and reliability.
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
