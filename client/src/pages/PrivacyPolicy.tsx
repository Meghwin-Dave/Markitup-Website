import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="page-shell min-h-screen flex flex-col bg-transparent">
      <SEOHead
        title="Privacy Policy - Discount Buddy | MarkitUp Group Limited"
        description="Read the Discount Buddy privacy policy for details about how MarkitUp Group Limited collects, uses, and protects your personal data."
        canonical="https://markitupgroup.com/privacy-policy"
        ogTitle="Privacy Policy - Discount Buddy | MarkitUp Group Limited"
        ogDescription="Discount Buddy privacy policy by MarkitUp Group Limited."
        ogUrl="https://markitupgroup.com/privacy-policy"
        twitterTitle="Privacy Policy - Discount Buddy"
        twitterDescription="Discount Buddy privacy policy by MarkitUp Group Limited."
      />
      <Header />
      <main className="flex-1 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="premium-card max-w-4xl mx-auto rounded-[2rem] p-8 md:p-12">
            <p className="text-sm md:text-base font-semibold text-slate-500 mb-2">Discount Buddy Logo</p>
            <nav className="flex flex-wrap gap-3 text-sm md:text-base font-semibold text-slate-700 mb-8">
              <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
              <span className="text-slate-400">|</span>
              <a href="/privacy-policy" className="text-slate-900">Privacy Policy</a>
              <span className="text-slate-400">|</span>
              <a href="/terms-and-conditions" className="hover:text-slate-900 transition-colors">Terms of Service</a>
              <span className="text-slate-400">|</span>
              <a href="/contact" className="hover:text-slate-900 transition-colors">Contact Support</a>
              <span className="text-slate-400">|</span>
              <span className="text-slate-500">Coming Soon</span>
            </nav>
            <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 mb-10">
              <ArrowLeft size={16} />
              <span>arrow_back</span>
              <span>Back to Home</span>
            </a>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Privacy Policy - Discount Buddy</h1>
            <p className="text-slate-600 font-medium mb-8">Effective Date: 23/04/2026</p>
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Introduction</h2>
                <p className="mb-3">Welcome to Discount Buddy, operated by MarkitUp Group Limited, United Kingdom.</p>
                <p className="mb-3">
                  We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data when you use our mobile application, website, and related services.
                </p>
                <p>By using Discount Buddy, you agree to this Privacy Policy.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
                <p className="mb-3">We only collect the minimum information necessary to provide our services.</p>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Personal Information</h3>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>First name</li>
                  <li>Last name</li>
                  <li>Username</li>
                  <li>Email address</li>
                  <li>Profile picture (optional)</li>
                </ul>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Booking &amp; Merchant Information</h3>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>Restaurant reservations made through the app</li>
                  <li>QR offer redemption activity</li>
                  <li>Favorite restaurants or saved deals</li>
                  <li>Merchant business details (for partner accounts)</li>
                </ul>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Technical Information</h3>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>IP address</li>
                  <li>Device type and OS version</li>
                  <li>App usage logs</li>
                  <li>Login activity</li>
                  <li>Crash reports and diagnostics</li>
                </ul>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Usage Information</h3>
                <p className="mb-3">How you interact with restaurants, offers, bookings, and app features.</p>
                <p>
                  We do not collect sensitive financial data such as debit/credit card numbers unless securely processed through third-party payment providers.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
                <p className="mb-3">We use your data strictly to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Create and manage your account</li>
                  <li>Enable login and authentication</li>
                  <li>Process table bookings and reservations</li>
                  <li>Allow QR-based deal redemption</li>
                  <li>Show personalized restaurant offers</li>
                  <li>Provide customer support</li>
                  <li>Improve app performance and features</li>
                  <li>Prevent fraud, misuse, or unauthorized activity</li>
                  <li>Communicate booking confirmations or updates</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="mt-3">We do not sell or rent your personal data to third parties.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Legal Basis for Processing</h2>
                <p className="mb-3">We process your data when:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>It is necessary to provide our services to you</li>
                  <li>You give consent</li>
                  <li>We have legitimate business interests</li>
                  <li>Required by law or regulation</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Data Sharing</h2>
                <p className="mb-3">We may share information only with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Restaurant partners for bookings and offer redemption</li>
                  <li>Service providers (hosting, analytics, cloud services)</li>
                  <li>Legal authorities when required by law</li>
                  <li>Fraud prevention and security partners</li>
                </ul>
                <p className="mt-3">All partners are required to protect your data.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Data Security</h2>
                <p className="mb-3">We implement appropriate technical and organizational safeguards to protect your information from:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Unauthorized access</li>
                  <li>Loss</li>
                  <li>Misuse</li>
                  <li>Alteration</li>
                </ul>
                <p className="mt-3">However, no system is 100% secure, and we cannot guarantee absolute security.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Data Retention</h2>
                <p className="mb-3">We retain your information only as long as necessary to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Maintain your account</li>
                  <li>Provide services</li>
                  <li>Manage reservations and transactions</li>
                  <li>Meet legal requirements</li>
                </ul>
                <p className="mt-3">
                  If you delete your account, your personal data will be removed within a reasonable timeframe unless legally required to retain it.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Your Rights</h2>
                <p className="mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your account and data</li>
                  <li>Withdraw consent</li>
                  <li>Contact us with privacy concerns</li>
                </ul>
                <p className="mt-3">To exercise any of these rights, email us.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Children&apos;s Privacy</h2>
                <p className="mb-3">Discount Buddy is not intended for users under 13 years of age.</p>
                <p className="mb-3">We do not knowingly collect data from children under 13.</p>
                <p>If we discover such data, it will be deleted immediately.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Third-Party Services</h2>
                <p>
                  Our app may use third-party tools such as analytics, authentication services, maps, and payment gateways. These providers may collect limited technical data according to their own privacy policies.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">11. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Updates will be posted inside the app or on our website. Continued use of the app means you accept the changes.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">12. Contact Us</h2>
                <p className="mb-3">If you have questions, concerns, or want to request data deletion, contact:</p>
                <p>Company Name: MarkitUp Group Limited</p>
                <p>Location: United Kingdom</p>
                <p>Email: contact@markitupgroup.com</p>
                <p className="mt-3">We will respond within a reasonable timeframe.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
