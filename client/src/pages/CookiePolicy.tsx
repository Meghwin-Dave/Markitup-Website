import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";

export default function CookiePolicy() {
  return (
    <div className="page-shell min-h-screen flex flex-col bg-transparent">
      <SEOHead
        title="Cookie Policy | MarkitUp Group Limited"
        description="Read the MarkitUp Group Limited cookie policy for information about analytics and website usage cookies."
        canonical="https://markitupgroup.com/cookie-policy"
        ogTitle="Cookie Policy | MarkitUp Group Limited"
        ogDescription="Cookie information for the MarkitUp Group Limited website."
        ogUrl="https://markitupgroup.com/cookie-policy"
        twitterTitle="Cookie Policy | MarkitUp Group Limited"
        twitterDescription="Cookie information for the MarkitUp Group Limited website."
      />
      <Header />
      <main className="flex-1 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="premium-card max-w-4xl mx-auto rounded-[2rem] p-8 md:p-12">
            <h1 className="text-5xl font-black text-slate-900 mb-8">Cookie Policy</h1>
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>This website may use cookies or similar technologies to improve performance, understand website usage, and support analytics.</p>
              <h2 className="text-2xl font-bold text-slate-900">What Cookies Do</h2>
              <p>Cookies can help us understand how visitors use the website, improve user experience, and support the technical operation of pages and forms.</p>
              <h2 className="text-2xl font-bold text-slate-900">Analytics</h2>
              <p>If analytics tools are enabled, cookie-based measurement may be used to understand website performance and visitor behaviour in an aggregated way.</p>
              <h2 className="text-2xl font-bold text-slate-900">Your Choice</h2>
              <p>You can control or remove cookies through your browser settings. Disabling some cookies may affect website functionality.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
