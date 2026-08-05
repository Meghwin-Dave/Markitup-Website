import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { Shield, Lock, Eye, FileText, Mail, MapPin, CheckCircle, Info } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  const lastUpdated = "5 August 2026";

  return (
    <div className="page-shell min-h-screen flex flex-col bg-slate-50/50">
      <SEOHead
        title="Privacy Policy | MarkitUp Group Limited"
        description="Learn how MarkitUp Group Limited complies with the UK GDPR and Data Protection Act 2018 to safeguard your personal data across MarketBuddy, ITBuddy, and DiscountBuddy."
        canonical="https://markitupgroup.com/privacy-policy"
        ogTitle="Privacy Policy | MarkitUp Group Limited"
        ogDescription="Comprehensive UK GDPR privacy policy detailing how MarkitUp Group collects, processes, and protects your personal data."
        ogUrl="https://markitupgroup.com/privacy-policy"
        twitterTitle="Privacy Policy | MarkitUp Group Limited"
        twitterDescription="Comprehensive UK GDPR privacy policy detailing data processing and user rights."
      />
      <Header />

      <main className="flex-1 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          {/* Header Banner */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-[#6C3BFF] text-xs font-bold uppercase tracking-wider mb-4">
              <Shield size={14} /> UK GDPR & DPA 2018 Compliant
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-slate-500 font-medium">
              Last Updated: <span className="text-slate-800 font-bold">{lastUpdated}</span>
            </p>
          </div>

          {/* Quick Notice Card */}
          <div className="mb-10 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Info size={18} className="text-[#6C3BFF]" /> Summary for Quick Reading
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                We value your trust and are committed to protecting your personal information. We never sell your personal data. We only process information necessary to deliver our marketing, software engineering, and promotional services, or to respond to inquiries you submit to us.
              </p>
            </div>
            <a
              href="mailto:info@markitupgroup.com"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#6C3BFF]"
            >
              <Mail size={14} /> Contact Privacy Team
            </a>
          </div>

          {/* Main Legal Content Document */}
          <div className="rounded-[2.5rem] bg-white border border-slate-200/90 p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(15,23,42,0.05)] space-y-12 text-slate-700 leading-relaxed">

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">1</span>
                Data Controller Information
              </h2>
              <p>
                This Privacy Policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by <strong>MarkitUp Group Limited</strong> ("MarkitUp Group", "we", "us", or "our").
              </p>
              <p>
                For the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, the Data Controller is:
              </p>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-2 text-sm">
                <p className="font-bold text-slate-900">MARKITUP GROUP LTD (trading as MarkitUp Group Limited)</p>
                <p className="text-slate-600">Company Registration Number: <strong>16979278</strong></p>
                <p className="text-slate-600">Registered Office: 24h Riverside Court, Beaufort Park Way, Chepstow, Wales, NP16 5UH</p>
                <p className="text-slate-600">Website: <a href="https://markitupgroup.com" className="text-[#6C3BFF] font-semibold hover:underline">markitupgroup.com</a></p>
                <p className="text-slate-600">Email: <a href="mailto:info@markitupgroup.com" className="text-[#6C3BFF] font-semibold hover:underline">info@markitupgroup.com</a></p>
                <p className="text-slate-600">Phone: <a href="tel:+447767901263" className="text-[#6C3BFF] font-semibold hover:underline">+44 7767 901263</a></p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">2</span>
                Information We Collect
              </h2>
              <p>We may collect, store, and process the following categories of personal information:</p>
              <div className="grid gap-4 sm:grid-cols-2 mt-4">
                <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50">
                  <h3 className="font-bold text-slate-900 text-base mb-2">Direct Inquiries & Contact Data</h3>
                  <ul className="text-sm space-y-1.5 text-slate-600">
                    <li>• Full name and job title</li>
                    <li>• Business email address and phone number</li>
                    <li>• Company name and industry vertical</li>
                    <li>• Project briefs, inquiry notes, and communication records</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50">
                  <h3 className="font-bold text-slate-900 text-base mb-2">Technical & Usage Data</h3>
                  <ul className="text-sm space-y-1.5 text-slate-600">
                    <li>• Internet Protocol (IP) address (anonymised where applicable)</li>
                    <li>• Browser type, operating system, and screen resolution</li>
                    <li>• Pages viewed, time spent per page, and referral URLs</li>
                    <li>• Cookie consent preferences and timestamps</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">3</span>
                Lawful Bases for Processing (UK GDPR Art. 6)
              </h2>
              <p>Under UK data protection laws, we only process personal information where a valid legal ground exists:</p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-100/80 text-xs font-bold uppercase text-slate-700">
                    <tr>
                      <th className="p-4">Purpose</th>
                      <th className="p-4">Data Categories</th>
                      <th className="p-4">Lawful Basis (UK GDPR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Responding to enquiries & consultations</td>
                      <td className="p-4">Contact Data, Message Details</td>
                      <td className="p-4 font-medium text-purple-700">Legitimate Interests / Pre-contractual steps</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Executing client contracts (MarketBuddy / ITBuddy)</td>
                      <td className="p-4">Billing, Business, & Contact Data</td>
                      <td className="p-4 font-medium text-purple-700">Performance of a Contract (Art. 6(1)(b))</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Website analytics & performance improvement</td>
                      <td className="p-4">Technical Cookies, Usage Telemetry</td>
                      <td className="p-4 font-medium text-purple-700">Consent (Art. 6(1)(a))</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">Legal, financial & tax record compliance</td>
                      <td className="p-4">Invoicing, Financial transaction logs</td>
                      <td className="p-4 font-medium text-purple-700">Legal Obligation (Art. 6(1)(c))</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">4</span>
                How We Use Your Personal Data
              </h2>
              <p>Your personal data is used specifically for:</p>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside pl-2">
                <li>Providing customized quotations and technical scopes for digital marketing, IT systems, and promotional platforms.</li>
                <li>Fulfilling agreed deliverables across our verticals: <strong>MarketBuddy</strong> (marketing & SEO), <strong>ITBuddy</strong> (bespoke web & ERP development), and <strong>DiscountBuddy</strong> (promotional deals).</li>
                <li>Conducting aggregated website analytics to optimize page load speeds, user interfaces, and mobile responsiveness.</li>
                <li>Maintaining administrative records, invoices, and accounting compliance under UK HMRC requirements.</li>
                <li>Preventing malicious traffic, security vulnerabilities, or fraudulent abuse of our contact forms.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">5</span>
                Third-Party Processors & Data Sharing
              </h2>
              <p>
                We do not sell, rent, or lease your personal information to third parties. We may share data with vetted service providers operating under strict data processing agreements:
              </p>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside pl-2">
                <li><strong>Cloud Hosting & Infrastructure:</strong> Vetted UK/EU-compliant cloud hosting servers for website delivery.</li>
                <li><strong>Web Analytics:</strong> Google Analytics (configured with UK GDPR consent mode and IP anonymisation).</li>
                <li><strong>Communication & CRM Tools:</strong> Secure corporate email and customer inquiry management platforms.</li>
                <li><strong>Professional Advisers:</strong> Accountants, legal counsel, and insurers strictly when necessary for statutory compliance.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">6</span>
                Data Storage, Retention & Security
              </h2>
              <p>
                We apply robust technical and organizational security measures to protect your personal data against unauthorized access, loss, or destruction. We retain contact inquiries for as long as necessary to resolve your request and maintain business relations (typically up to 24 months from last contact, unless a client contract or statutory tax retention requirement applies).
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">7</span>
                Your Statutory Rights Under UK GDPR
              </h2>
              <p>Under the UK General Data Protection Regulation, you have the following rights regarding your personal information:</p>
              <div className="grid gap-3 sm:grid-cols-2 mt-4 text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Right of Access</span>
                  <p className="text-slate-600">You may request a copy of the personal information we hold about you (Subject Access Request).</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Right to Rectification</span>
                  <p className="text-slate-600">You can ask us to correct inaccurate, incomplete, or outdated personal information.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Right to Erasure ("To Be Forgotten")</span>
                  <p className="text-slate-600">You can request deletion of your personal data where there is no lawful justification for keeping it.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Right to Restrict or Object</span>
                  <p className="text-slate-600">You may object to or restrict processing based on legitimate interests or direct marketing.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Right to Data Portability</span>
                  <p className="text-slate-600">You can request your data in a structured, commonly used, and machine-readable format.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Right to Withdraw Consent</span>
                  <p className="text-slate-600">Where processing is based on consent, you may withdraw it at any time without penalty.</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 pt-2">
                To exercise any of these rights, please email us at <a href="mailto:info@markitupgroup.com" className="text-[#6C3BFF] font-semibold underline">info@markitupgroup.com</a>. We respond to all verified requests within 30 calendar days in accordance with UK law.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">8</span>
                Complaints & Supervisory Authority
              </h2>
              <p>
                If you have questions or concerns about how we handle your personal information, we encourage you to contact us first so we can resolve your issue promptly.
              </p>
              <p>
                You also have the right to lodge a complaint with the UK supervisory body for data protection:
              </p>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-sm space-y-1">
                <p className="font-bold text-slate-900">Information Commissioner's Office (ICO)</p>
                <p className="text-slate-600">Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#6C3BFF] font-semibold hover:underline">https://ico.org.uk</a></p>
                <p className="text-slate-600">Helpline: 0303 123 1113</p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">9</span>
                Updates to This Policy
              </h2>
              <p>
                We may periodically update this Privacy Policy to reflect modifications to our services, technological changes, or evolving legal obligations. Any updates will be published on this page with an amended "Last Updated" date.
              </p>
            </section>

          </div>

          {/* Bottom navigation */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-500">
            <Link href="/" className="text-[#6C3BFF] hover:underline">← Back to Homepage</Link>
            <div className="flex items-center gap-4">
              <Link href="/terms-and-conditions" className="hover:text-slate-800 transition-colors">Terms & Conditions</Link>
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
