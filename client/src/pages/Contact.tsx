import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { Clock, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="page-shell min-h-screen flex flex-col bg-transparent">
      <SEOHead
        title="Contact MarkitUp Group | Marketing and Growth Enquiries"
        description="Contact MarkitUp Group Limited for digital marketing, promotion, and technology solutions designed to support visibility, lead generation, and business growth."
        keywords="Contact MarkitUp Group, marketing enquiry, business growth solutions"
        canonical="https://markitupgroup.com/contact"
        ogTitle="Contact MarkitUp Group"
        ogDescription="Get in touch with MarkitUp Group Limited for marketing and growth solutions."
        ogUrl="https://markitupgroup.com/contact"
        twitterTitle="Contact MarkitUp Group"
        twitterDescription="Contact MarkitUp Group Limited for marketing and business growth support."
      />
      <Header />

      <main className="flex-1">
        <section className="py-24 md:py-32 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="section-panel max-w-4xl mx-auto rounded-[2rem] px-6 py-12 md:px-12 text-center">
              <p className="eyebrow mb-6">
                Contact MarkitUp Group
              </p>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8">
                Contact <span style={{ color: "var(--accent-teal)" }}>MarkitUp Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium max-w-3xl mx-auto">
                If you are looking to increase visibility, attract more customers, or grow your
                business through digital marketing and promotion, contact MarkitUp Group.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mt-6">
                Our team can help you build marketing strategies and promotional campaigns that
                support business growth.
              </p>
            </div>
          </div>
        </section>

        <section className="soft-section py-24 md:py-28">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
              {[
                { icon: Mail, title: "Email", content: "contact@markitupgroup.com", accent: "var(--accent-teal)" },
                { icon: MapPin, title: "Location", content: "United Kingdom", accent: "var(--accent-amber)" },
                { icon: Clock, title: "Website", content: "www.markitupgroup.com", accent: "var(--accent-indigo)" },
                { icon: Mail, title: "Company", content: "MarkitUp Group Limited", accent: "var(--accent-teal)" },
              ].map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.title}
                    className="premium-card rounded-xl p-8 border-t-4 hover:shadow-lg transition-all text-center"
                    style={{ borderTopColor: info.accent }}
                  >
                    <div className="bg-slate-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                      <Icon size={32} style={{ color: info.accent }} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{info.title}</h3>
                    <p className="text-slate-700 font-semibold text-lg">{info.content}</p>
                  </div>
                );
              })}
            </div>

            <div className="max-w-3xl mx-auto">
              {submitted && (
                <div
                  className="mb-8 p-6 rounded-2xl border-2 premium-card"
                  style={{
                    backgroundColor: "rgba(var(--accent-teal-rgb), 0.1)",
                    borderColor: "var(--accent-teal)",
                  }}
                >
                  <p className="text-slate-900 font-bold text-lg text-center">
                    Thank you for your message. We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl p-10 md:p-12 border-2"
                style={{ borderColor: "var(--accent-teal)" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-slate-900 font-bold text-lg mb-3">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-400 font-medium text-lg"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-900 font-bold text-lg mb-3">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-400 font-medium text-lg"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-slate-900 font-bold text-lg mb-3">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-400 font-medium text-lg"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-900 font-bold text-lg mb-3">Service Interested In *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-400 font-medium text-lg"
                    >
                      <option value="">Select a service</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="business-promotion">Business Promotion</option>
                      <option value="lead-generation">Lead Generation</option>
                      <option value="technology-solutions">Technology Solutions</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-slate-900 font-bold text-lg mb-3">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-400 font-medium text-lg resize-none"
                    placeholder="Tell us about your business and what you need help with..."
                  />
                </div>

                <button
                  type="submit"
                  className="premium-button w-full px-8 py-4 rounded-full transition-all font-bold text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
