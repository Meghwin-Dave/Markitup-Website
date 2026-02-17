import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function NodeDevelopment() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Node.js Development",
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
      "Professional Node.js development services including APIs, microservices, and backend systems. Hire Node.js developers in UK and worldwide.",
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead
        title="Node.js Development Services UK | Node Developer | MarkitUp Group"
        description="Expert Node.js development services including REST APIs, GraphQL, microservices, and backend systems. Hire Node.js developers in UK and worldwide."
        keywords="Node.js developer UK, Node development UK, Express.js developer, Node.js API development, backend development UK"
        canonical="https://markitupgroup.com/services/node-development"
        ogTitle="Node.js Development Services | Expert Node.js Developers"
        ogDescription="Professional Node.js development services for APIs, microservices, and scalable backend systems."
        ogUrl="https://markitupgroup.com/services/node-development"
        structuredData={structuredData}
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-slate-950 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Node.js Development Services
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium max-w-3xl mx-auto">
                Expert Node.js development for scalable APIs, microservices, and backend systems.
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
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Our Node.js Development Services</h2>
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  We build scalable server-side applications, RESTful and GraphQL APIs, microservices, and real-time
                  systems using Node.js, Express, NestJS, and modern backend frameworks.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">RESTful & GraphQL APIs</h3>
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  High-performance APIs built with Express.js, NestJS, or Fastify. We implement authentication,
                  authorization, validation, and comprehensive API documentation.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Microservices Architecture</h3>
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  Scalable microservices using Node.js, containerization, service discovery, and API gateways. We
                  design for reliability, scalability, and maintainability.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Real-Time Applications</h3>
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  WebSocket servers, real-time chat systems, and event-driven applications using Node.js for low-latency
                  communication and high concurrency.
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
