import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { FileText, Scale, CheckCircle2, ShieldCheck, Mail, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function TermsConditions() {
  const lastUpdated = "5 August 2026";

  return (
    <div className="page-shell min-h-screen flex flex-col bg-slate-50/50">
      <SEOHead
        title="Terms & Conditions | MarkitUp Group Limited"
        description="Review the terms and conditions governing the use of the MarkitUp Group Limited website and our commercial verticals: MarketBuddy, ITBuddy, and DiscountBuddy."
        canonical="https://markitupgroup.com/terms-and-conditions"
        ogTitle="Terms & Conditions | MarkitUp Group Limited"
        ogDescription="Terms of service and legal agreement for MarkitUp Group Limited website visitors and prospective clients."
        ogUrl="https://markitupgroup.com/terms-and-conditions"
        twitterTitle="Terms & Conditions | MarkitUp Group Limited"
        twitterDescription="Terms and conditions governing MarkitUp Group Limited."
      />
      <Header />

      <main className="flex-1 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          {/* Header Banner */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-[#6C3BFF] text-xs font-bold uppercase tracking-wider mb-4">
              <Scale size={14} /> Legal Agreement
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
              Terms & Conditions
            </h1>
            <p className="text-sm sm:text-base text-slate-500 font-medium">
              Last Updated: <span className="text-slate-800 font-bold">{lastUpdated}</span>
            </p>
          </div>

          {/* Quick Notice Card */}
          <div className="mb-10 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#6C3BFF]" /> Welcome to MarkitUp Group
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                Please review these Terms and Conditions carefully before using our website or engaging our services. By browsing our website or contacting us for service inquiries, you acknowledge and agree to be bound by these terms.
              </p>
            </div>
            <a
              href="mailto:info@markitupgroup.com"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#6C3BFF]"
            >
              <Mail size={14} /> Legal Inquiries
            </a>
          </div>

          {/* Main Legal Content Document */}
          <div className="rounded-[2.5rem] bg-white border border-slate-200/90 p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(15,23,42,0.05)] space-y-12 text-slate-700 leading-relaxed">

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">1</span>
                Introduction & Company Information
              </h2>
              <p>
                These Terms and Conditions ("Terms") govern your access to and use of the website located at <strong>https://markitupgroup.com</strong> and any related subdomains, platforms, or communication channels operated by <strong>MarkitUp Group Limited</strong> ("we", "us", "our", or "Company").
              </p>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 text-sm space-y-1.5">
                <p className="font-bold text-slate-900">MARKITUP GROUP LTD (trading as MarkitUp Group Limited)</p>
                <p className="text-slate-600">Company Registration Number: <strong>16979278</strong> </p>
                <p className="text-slate-600">Registered Office: 24h Riverside Court, Beaufort Park Way, Chepstow, Wales, NP16 5UH</p>
                <p className="text-slate-600">Website: <a href="https://markitupgroup.com" className="text-[#6C3BFF] font-semibold hover:underline">markitupgroup.com</a></p>
                <p className="text-slate-600">Email: <a href="mailto:info@markitupgroup.com" className="text-[#6C3BFF] font-semibold hover:underline">info@markitupgroup.com</a></p>
                <p className="text-slate-600">Telephone: <a href="tel:+447767901263" className="text-[#6C3BFF] font-semibold hover:underline">+44 7767 901263</a></p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">2</span>
                Our Service Ecosystem
              </h2>
              <p>MarkitUp Group operates three distinct specialized brand verticals:</p>
              <div className="grid gap-4 sm:grid-cols-3 mt-4 text-sm">
                <div className="p-5 rounded-2xl border border-purple-200 bg-purple-50/40">
                  <h3 className="font-bold text-[#6C3BFF] text-base mb-1.5">MarketBuddy</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Social media marketing, content creation, creator partnerships, search engine optimisation (SEO), and lead generation campaigns.
                  </p>
                </div>
                <div className="p-5 rounded-2xl border border-orange-200 bg-orange-50/40">
                  <h3 className="font-bold text-[#FF7A00] text-base mb-1.5">ITBuddy</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Bespoke web development, mobile applications, ERP system implementation (ERPNext), cloud setup, and technical maintenance.
                  </p>
                </div>
                <div className="p-5 rounded-2xl border border-pink-200 bg-pink-50/40">
                  <h3 className="font-bold text-[#C71888] text-base mb-1.5">DiscountBuddy</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Hospitality promotional platform connecting diners with restaurant offers, loyalty tools, and local table booking discovery.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 pt-1">
                Formal client engagements for specific services are governed by separate, bespoke Statements of Work (SOW) or Service Level Agreements (SLA) executed directly between MarkitUp Group Limited and the client.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">3</span>
                Acceptable Use of the Website
              </h2>
              <p>You agree to use our website only for lawful purposes. You must not:</p>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside pl-2">
                <li>Use the website in any way that violates applicable local, national, or international UK legislation.</li>
                <li>Transmit, submit, or upload any unsolicited advertising, promotional material, or spam.</li>
                <li>Knowingly introduce viruses, trojans, worms, logic bombs, or other malicious software or materials.</li>
                <li>Attempt to gain unauthorized access to our servers, databases, source code, or infrastructure.</li>
                <li>Scrape, harvest, or systematically extract data from our website without prior written authorization.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">4</span>
                Intellectual Property Rights
              </h2>
              <p>
                All content published on this website—including but not limited to brand names, logos, typography, case studies, graphics, design assets, and source code—is the property of <strong>MarkitUp Group Limited</strong> or its licensors and is protected by UK and international copyright, trademark, and intellectual property laws.
              </p>
              <p>
                You may access, view, and print single copies of informational pages for personal or internal business evaluation purposes only. You must not reproduce, modify, distribute, or publicly display any content from this website without our explicit prior written consent.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">5</span>
                Case Studies & Performance Statistics
              </h2>
              <p>
                Case study figures, follower growth metrics, and customer milestones highlighted on our website represent authentic results achieved in specific historical or ongoing client campaigns (e.g. Pizza 4 You, Shiv Shakti Foods, Bollywood Kingdom Events).
              </p>
              <p className="text-sm text-slate-600">
                Marketing, SEO, and technological outcomes vary significantly depending on industry, budget, market conditions, and operational execution. Past performance figures do not constitute a contractual warranty or guarantee of identical results for future client engagements.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">6</span>
                Disclaimers & Limitation of Liability
              </h2>
              <p>
                The information provided on this website is for general informational and marketing awareness purposes only. While we strive to ensure that all information is accurate and up to date, we make no representations or warranties of any kind, express or implied, regarding completeness, accuracy, reliability, or availability.
              </p>
              <p className="text-sm text-slate-600">
                To the fullest extent permitted by English law, MarkitUp Group Limited disclaims all liability for any indirect, incidental, consequential, or economic loss or damage arising out of or in connection with your use of, or inability to use, our website or reliance upon website content. Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">7</span>
                External Links & Third-Party Platforms
              </h2>
              <p>
                Our website may contain links to third-party websites, partner platforms, social media networks (e.g., Instagram, LinkedIn, TikTok), or external resources. We have no control over the content or privacy practices of external websites and accept no responsibility or liability for them.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">8</span>
                Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms and Conditions, and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims), shall be governed by and construed in accordance with the laws of <strong>UK</strong>.
              </p>
              <p>
                You agree that the courts of UK shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms or your use of the website.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">9</span>
                Contact & Legal Inquiries
              </h2>
              <p>
                If you have any questions regarding these Terms and Conditions or wish to request permission for content usage, please contact us:
              </p>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-sm space-y-1">
                <p className="font-bold text-slate-900">MARKITUP GROUP LTD (trading as MarkitUp Group Limited)</p>
                <p className="text-slate-600">Company Registration Number: 16979278</p>
                <p className="text-slate-600">Registered Office: 24h Riverside Court, Beaufort Park Way, Chepstow, Wales, NP16 5UH</p>
                <p className="text-slate-600">Email: <a href="mailto:info@markitupgroup.com" className="text-[#6C3BFF] font-semibold hover:underline">info@markitupgroup.com</a></p>
                <p className="text-slate-600">Telephone: <a href="tel:+447767901263" className="text-[#6C3BFF] font-semibold hover:underline">+44 7767 901263</a></p>
              </div>
            </section>

          </div>

          {/* Bottom navigation */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-500">
            <Link href="/" className="text-[#6C3BFF] hover:underline">← Back to Homepage</Link>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/cookie-policy" className="hover:text-slate-800 transition-colors">Cookie Policy</Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
