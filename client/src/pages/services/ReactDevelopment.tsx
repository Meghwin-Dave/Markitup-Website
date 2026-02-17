import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function ReactDevelopment() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "React Development",
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
      "Professional React development services including Next.js, TypeScript, and modern frontend applications. Hire React developers in UK and worldwide.",
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead
        title="React Development Services UK | React Developer | MarkitUp Group"
        description="Expert React development services including Next.js, TypeScript, SPAs, and SSR applications. Hire React developers in UK and worldwide."
        keywords="React developer UK, React development UK, Next.js developer UK, React developer, frontend development UK"
        canonical="https://markitupgroup.com/services/react-development"
        ogTitle="React Development Services | Expert React Developers"
        ogDescription="Professional React development services for modern web applications using React, Next.js, and TypeScript."
        ogUrl="https://markitupgroup.com/services/react-development"
        structuredData={structuredData}
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-slate-950 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                React Development Services
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium max-w-3xl mx-auto">
                Expert React and Next.js development for modern, interactive web applications.
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
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Our React Development Services</h2>
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  We create modern, performant user interfaces using React, Next.js, TypeScript, and modern frontend
                  tooling. Our React developers build scalable, maintainable applications.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">React Applications</h3>
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  Single-page applications (SPAs) and progressive web apps (PWAs) built with React, featuring
                  component-based architecture, state management, and optimized performance.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Next.js Development</h3>
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  Server-side rendered (SSR) and static site generation (SSG) applications using Next.js for optimal
                  SEO, performance, and user experience.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">TypeScript & Modern Tooling</h3>
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  Type-safe React applications with TypeScript, modern build tools, and best practices for code quality,
                  testing, and deployment.
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
