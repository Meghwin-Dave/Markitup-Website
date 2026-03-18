import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";

export default function PrivacyPolicy() {
  return (
    <div className="page-shell min-h-screen flex flex-col bg-transparent">
      <SEOHead
        title="Privacy Policy | MarkitUp Group Limited"
        description="Read the MarkitUp Group Limited privacy policy for information about how we handle website enquiries and personal information."
        canonical="https://markitupgroup.com/privacy-policy"
        ogTitle="Privacy Policy | MarkitUp Group Limited"
        ogDescription="Privacy information for MarkitUp Group Limited."
        ogUrl="https://markitupgroup.com/privacy-policy"
        twitterTitle="Privacy Policy | MarkitUp Group Limited"
        twitterDescription="Privacy information for MarkitUp Group Limited."
      />
      <Header />
      <main className="flex-1 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="premium-card max-w-4xl mx-auto rounded-[2rem] p-8 md:p-12">
            <h1 className="text-5xl font-black text-slate-900 mb-8">Privacy Policy</h1>
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>MarkitUp Group Limited respects your privacy and is committed to protecting personal information shared through this website.</p>
              <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
              <p>We may collect information you provide through contact forms, email enquiries, and website interactions, including your name, email address, company details, and message content.</p>
              <h2 className="text-2xl font-bold text-slate-900">How We Use Information</h2>
              <p>We use enquiry data to respond to requests, discuss services, improve our website, and support communication about MarkitUp Group, Market Buddy, Discount Buddy, and IT Buddy services.</p>
              <h2 className="text-2xl font-bold text-slate-900">Data Protection</h2>
              <p>We take reasonable steps to protect information shared with us and only use it for legitimate business and communication purposes.</p>
              <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
              <p>For privacy-related questions, contact MarkitUp Group Limited at contact@markitupgroup.com.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
