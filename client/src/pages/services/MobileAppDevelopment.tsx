import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function MobileAppDevelopment() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mobile App Development",
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
      "Professional mobile app development services including Flutter, React Native, iOS, and Android apps. Hire mobile app developers in UK and worldwide.",
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead
        title="Mobile App Development Services UK | Flutter, React Native, iOS, Android | MarkitUp Group"
        description="Expert mobile app development services including Flutter, React Native, native iOS and Android apps. Hire mobile app developers in UK and worldwide."
        keywords="mobile app development UK, Flutter developer UK, React Native developer UK, iOS developer UK, Android developer UK, app development services"
        canonical="https://markitupgroup.com/services/mobile-app-development"
        ogTitle="Mobile App Development Services | Flutter, React Native, iOS, Android"
        ogDescription="Professional mobile app development services for iOS, Android, Flutter, and React Native applications."
        ogUrl="https://markitupgroup.com/services/mobile-app-development"
        structuredData={structuredData}
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-slate-950 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Mobile App Development Services
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium max-w-3xl mx-auto">
                Expert mobile app development for iOS, Android, Flutter, and React Native.
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
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Our Mobile App Development Services</h2>
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  We develop native and cross-platform mobile applications for iOS and Android. Our mobile app
                  developers create performant, user-friendly apps with offline capabilities and seamless backend
                  integration.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Flutter Development</h3>
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  Cross-platform mobile apps using Flutter for iOS and Android from a single codebase. We leverage
                  Flutter's performance and native-like user experience.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">React Native Development</h3>
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  Cross-platform mobile applications using React Native, sharing code between iOS and Android while
                  maintaining native performance and look-and-feel.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Native iOS & Android Development</h3>
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  Native mobile apps built with Swift (iOS) and Kotlin (Android) for maximum performance, platform
                  integration, and access to native APIs and features.
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
