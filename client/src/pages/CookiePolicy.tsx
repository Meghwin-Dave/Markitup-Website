import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { Cookie, Sliders, Shield, Info, Check, X, HelpCircle, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function CookiePolicy() {
  const lastUpdated = "5 August 2026";

  const handleOpenConsentModal = () => {
    if (typeof window !== "undefined" && typeof window.openCookiePreferences === "function") {
      window.openCookiePreferences();
    }
  };

  return (
    <div className="page-shell min-h-screen flex flex-col bg-slate-50/50">
      <SEOHead
        title="Cookie Policy | MarkitUp Group Limited"
        description="Understand how MarkitUp Group Limited uses cookies and tracking technologies in compliance with UK PECR and GDPR, and customize your preferences."
        canonical="https://markitupgroup.com/cookie-policy"
        ogTitle="Cookie Policy | MarkitUp Group Limited"
        ogDescription="Detailed information on cookie usage, classification, and user consent controls on MarkitUp Group."
        ogUrl="https://markitupgroup.com/cookie-policy"
        twitterTitle="Cookie Policy | MarkitUp Group Limited"
        twitterDescription="Cookie Policy and privacy controls for MarkitUp Group Limited."
      />
      <Header />
      
      <main className="flex-1 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          {/* Header Banner */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-[#6C3BFF] text-xs font-bold uppercase tracking-wider mb-4">
              <Cookie size={14} /> UK PECR & GDPR Compliant
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
              Cookie Policy
            </h1>
            <p className="text-sm sm:text-base text-slate-500 font-medium">
              Last Updated: <span className="text-slate-800 font-bold">{lastUpdated}</span>
            </p>
          </div>

          {/* Interactive Consent Control Card */}
          <div className="mb-10 rounded-2xl bg-white border border-purple-100 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Sliders size={18} className="text-[#6C3BFF]" /> Your Cookie Choices
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                You have full control over the optional cookies we store on your device. You can review, grant, or revoke consent for analytics and marketing cookies at any time.
              </p>
            </div>
            <button
              onClick={handleOpenConsentModal}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-[var(--color-brand-purple)] px-6 py-3 text-xs font-bold text-white shadow-md shadow-[#6C3BFF]/20 transition-all hover:brightness-110"
            >
              <Sliders size={14} /> Customise Cookie Preferences
            </button>
          </div>

          {/* Main Legal Content Document */}
          <div className="rounded-[2.5rem] bg-white border border-slate-200/90 p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(15,23,42,0.05)] space-y-12 text-slate-700 leading-relaxed">
            
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">1</span>
                What Are Cookies?
              </h2>
              <p>
                Cookies are small text files containing small amounts of information that are downloaded and stored on your device (computer, smartphone, or tablet) when you visit a website. Cookies are then sent back to the originating website on each subsequent visit, or to another website that recognizes that cookie.
              </p>
              <p>
                Cookies allow a website to recognize a user's device, remember navigation preferences, ensure smooth page transitions, and help website operators measure and enhance user experience.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">2</span>
                Categories of Cookies We Use
              </h2>
              <p>
                In compliance with the UK Privacy and Electronic Communications Regulations (PECR) and the UK GDPR, we classify cookies into three distinct categories:
              </p>

              <div className="space-y-4 mt-6">
                {/* 1. Strictly Necessary */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Shield size={18} className="text-slate-700" /> 1. Strictly Necessary Cookies
                    </h3>
                    <span className="rounded-full bg-slate-200 px-2.5 py-0.5 text-[11px] font-extrabold text-slate-700">
                      Always Active (No Consent Required)
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    These cookies are strictly necessary for the technical operation of our website, security verification, session management, and storing your cookie consent preference. Without these cookies, basic website navigation cannot function properly.
                  </p>
                </div>

                {/* 2. Analytics */}
                <div className="rounded-2xl border border-purple-200 bg-purple-50/30 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Info size={18} className="text-[#6C3BFF]" /> 2. Analytics & Performance Cookies
                    </h3>
                    <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-[11px] font-extrabold text-[#6C3BFF]">
                      Optional (Requires Prior Consent)
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular, calculate page load times, and see how visitors navigate around the site. All information collected is aggregated and anonymised.
                  </p>
                </div>

                {/* 3. Marketing */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <ExternalLink size={18} className="text-slate-700" /> 3. Marketing & Social Cookies
                    </h3>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-extrabold text-slate-700">
                      Optional (Requires Prior Consent)
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    These cookies may be set through our site by social media partners or advertising networks to deliver relevant marketing campaigns or measure promotional campaign effectiveness. If you do not allow these cookies, you will experience less targeted advertising.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">3</span>
                Detailed Cookie Inventory
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-100/80 text-xs font-bold uppercase text-slate-700">
                    <tr>
                      <th className="p-4">Cookie Name</th>
                      <th className="p-4">Provider</th>
                      <th className="p-4">Purpose</th>
                      <th className="p-4">Expiry</th>
                      <th className="p-4">Category</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    <tr>
                      <td className="p-4 font-mono font-bold text-slate-900">markitup_cookie_consent</td>
                      <td className="p-4">MarkitUp Group</td>
                      <td className="p-4">Stores your cookie consent preferences and choices</td>
                      <td className="p-4">12 Months</td>
                      <td className="p-4"><span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">Necessary</span></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono font-bold text-slate-900">_ga</td>
                      <td className="p-4">Google Analytics</td>
                      <td className="p-4">Calculates visitor, session, and campaign data for aggregated analytics</td>
                      <td className="p-4">2 Years</td>
                      <td className="p-4"><span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Analytics</span></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono font-bold text-slate-900">_ga_R93EWQKMF5</td>
                      <td className="p-4">Google Analytics</td>
                      <td className="p-4">Used to persist session state and calculate conversion funnels</td>
                      <td className="p-4">2 Years</td>
                      <td className="p-4"><span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Analytics</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">4</span>
                How to Control and Delete Cookies
              </h2>
              <p>You can manage your cookie preferences in multiple ways:</p>
              
              <div className="space-y-3 mt-4 text-sm">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">1. Through our On-Site Preference Center</h3>
                  <p className="text-slate-600 mb-3">
                    Click the button below to open our interactive preferences modal and adjust your analytics or marketing preferences at any time:
                  </p>
                  <button
                    onClick={handleOpenConsentModal}
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-[#6C3BFF] transition-colors"
                  >
                    <Sliders size={13} /> Open Cookie Preference Modal
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">2. Through Your Web Browser Settings</h3>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    Most web browsers allow you to modify cookie preferences to accept, block, or delete cookies. Please check your browser's official support guides:
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs font-semibold">
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#6C3BFF] hover:underline flex items-center gap-1">Google Chrome <ExternalLink size={11} /></a>
                    <span>•</span>
                    <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#6C3BFF] hover:underline flex items-center gap-1">Apple Safari <ExternalLink size={11} /></a>
                    <span>•</span>
                    <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-[#6C3BFF] hover:underline flex items-center gap-1">Mozilla Firefox <ExternalLink size={11} /></a>
                    <span>•</span>
                    <a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-[#6C3BFF] hover:underline flex items-center gap-1">Microsoft Edge <ExternalLink size={11} /></a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF] text-sm font-extrabold">5</span>
                Contact & Questions
              </h2>
              <p>
                If you have questions about our use of cookies or wish to know more about our data protection standards, please consult our <Link href="/privacy-policy" className="text-[#6C3BFF] font-semibold hover:underline">Privacy Policy</Link> or email us directly at:
              </p>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-sm space-y-1">
                <p className="font-bold text-slate-900">MARKITUP GROUP LTD (trading as MarkitUp Group Limited)</p>
                <p className="text-slate-600">Company Registration Number: 16979278</p>
                <p className="text-slate-600">Registered Office: 24h Riverside Court, Beaufort Park Way, Chepstow, Wales, NP16 5UH</p>
                <p className="text-slate-600">Website: <a href="https://markitupgroup.com" className="text-[#6C3BFF] font-semibold hover:underline">markitupgroup.com</a></p>
                <p className="text-slate-600">Email: <a href="mailto:info@markitupgroup.com" className="text-[#6C3BFF] font-semibold hover:underline">info@markitupgroup.com</a></p>
                <p className="text-slate-600">Phone: <a href="tel:+447767901263" className="text-[#6C3BFF] font-semibold hover:underline">+44 7767 901263</a></p>
              </div>
            </section>

          </div>

          {/* Bottom navigation */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-500">
            <Link href="/" className="text-[#6C3BFF] hover:underline">← Back to Homepage</Link>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms-and-conditions" className="hover:text-slate-800 transition-colors">Terms & Conditions</Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
