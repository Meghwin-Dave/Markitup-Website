import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";

export default function TermsConditions() {
  return (
    <div className="page-shell min-h-screen flex flex-col bg-transparent">
      <SEOHead
        title="Terms & Conditions | MarkitUp Group Limited"
        description="Review the terms and conditions for using the MarkitUp Group Limited website."
        canonical="https://markitupgroup.com/terms-and-conditions"
        ogTitle="Terms & Conditions | MarkitUp Group Limited"
        ogDescription="Terms and conditions for the MarkitUp Group Limited website."
        ogUrl="https://markitupgroup.com/terms-and-conditions"
        twitterTitle="Terms & Conditions | MarkitUp Group Limited"
        twitterDescription="Terms and conditions for the MarkitUp Group Limited website."
      />
      <Header />
      <main className="flex-1 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="premium-card max-w-4xl mx-auto rounded-[2rem] p-8 md:p-12">
            <h1 className="text-5xl font-black text-slate-900 mb-8">Terms & Conditions</h1>
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>These terms govern the use of the MarkitUp Group Limited website and related content.</p>
              <h2 className="text-2xl font-bold text-slate-900">Use of Website</h2>
              <p>This website is provided for general information about MarkitUp Group Limited, including Market Buddy, Discount Buddy, and IT Buddy services.</p>
              <h2 className="text-2xl font-bold text-slate-900">Content</h2>
              <p>Website content is provided for informational purposes and may be updated without notice as services, offers, and business information evolve.</p>
              <h2 className="text-2xl font-bold text-slate-900">Liability</h2>
              <p>While we aim to keep information accurate and current, MarkitUp Group Limited does not guarantee the completeness of all website content at all times.</p>
              <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
              <p>Questions about these terms can be sent to contact@markitupgroup.com.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
