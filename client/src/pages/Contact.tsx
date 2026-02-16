import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-32 md:py-40 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Get In Touch</p>
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-8">
                Let's Work <span style={{ color: "var(--accent-teal)" }}>Together</span>
              </h1>
              <p className="text-2xl text-slate-700 leading-relaxed font-medium max-w-3xl mx-auto">
                Have a project in mind? We'd love to hear from you. Get in touch and let's create something amazing together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-32 md:py-40 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-20">
              {[
                { icon: Mail, title: "Email", content: "hello@markitup.com", accent: "teal" },
                { icon: Phone, title: "Phone", content: "+44 (0) 7767 901263", accent: "amber" },
                { icon: MapPin, title: "Location", content: "London, United Kingdom", accent: "indigo" },
                { icon: Clock, title: "Response Time", content: "Within 24 hours", accent: "teal" },
              ].map((info, idx) => {
                const Icon = info.icon;
                const accentVar = info.accent === "teal" ? "var(--accent-teal)" : info.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="bg-white rounded-xl p-10 border-t-4 shadow-sm hover:shadow-lg transition-all text-center" style={{ borderTopColor: accentVar }}>
                    <div className="bg-slate-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                      <Icon size={32} style={{ color: accentVar }} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{info.title}</h3>
                    <p className="text-slate-700 font-semibold text-lg">{info.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-32 md:py-40 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Send us a message</p>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                  Get in <span style={{ color: "var(--accent-amber)" }}>Touch</span>
                </h2>
              </div>

              {submitted && (
                <div className="mb-8 p-6 rounded-lg border-2" style={{ backgroundColor: "rgba(var(--accent-teal-rgb), 0.1)", borderColor: "var(--accent-teal)" }}>
                  <p className="text-slate-900 font-bold text-lg text-center">
                    ✓ Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="bg-slate-50 rounded-xl p-12 border-2" style={{ borderColor: "var(--accent-teal)" }}>
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
                      <option value="discount-buddy">Discount Buddy</option>
                      <option value="it-buddy">IT Buddy</option>
                      <option value="market-buddy">Market Buddy</option>
                      <option value="other">Other</option>
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
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white px-8 py-4 rounded-lg hover:opacity-90 transition-all font-bold text-lg"
                  style={{ backgroundColor: "var(--accent-teal)" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 md:py-40 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Questions?</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                Frequently Asked <span style={{ color: "var(--accent-indigo)" }}>Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "What's your typical project timeline?",
                  a: "Project timelines vary based on scope and complexity. A typical MVP takes 4-8 weeks, while larger projects may take 3-6 months. We provide detailed timelines during the discovery phase.",
                  accent: "teal"
                },
                {
                  q: "Do you offer ongoing support after launch?",
                  a: "Yes! We offer maintenance, support, and optimization services. Many clients work with us on retainer for continuous improvements and scaling.",
                  accent: "amber"
                },
                {
                  q: "What's your pricing model?",
                  a: "We offer flexible engagement models: project-based (fixed scope/cost), retainer (ongoing support), or staff augmentation. We'll provide a custom quote after understanding your needs.",
                  accent: "indigo"
                },
                {
                  q: "Can you work with existing projects?",
                  a: "Absolutely! We can audit existing projects, fix issues, optimize performance, or extend functionality. We work seamlessly with any tech stack.",
                  accent: "teal"
                },
                {
                  q: "How do you ensure project success?",
                  a: "We follow a proven methodology: clear discovery, detailed planning, regular communication, transparent reporting, and continuous optimization. Your success is our success.",
                  accent: "amber"
                },
                {
                  q: "What industries do you serve?",
                  a: "We work across industries: food & hospitality, startups, SMEs, e-commerce, SaaS, and more. Our expertise spans multiple verticals.",
                  accent: "indigo"
                }
              ].map((faq, idx) => {
                const accentVar = faq.accent === "teal" ? "var(--accent-teal)" : faq.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="bg-white rounded-xl p-10 border-l-4 shadow-sm hover:shadow-lg transition-all" style={{ borderLeftColor: accentVar }}>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{faq.q}</h3>
                    <p className="text-slate-700 leading-relaxed font-medium text-lg">{faq.a}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 md:py-40 bg-slate-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Ready to Start Your <span style={{ color: "var(--accent-amber)" }}>Journey?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300 font-medium">
              Whether you have a specific project in mind or just want to explore possibilities, we're here to help. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:meghwindave04@gmail.com"
                className="inline-block text-slate-900 px-12 py-5 rounded-lg hover:opacity-90 transition-all font-bold text-lg"
                style={{ backgroundColor: "var(--accent-teal)" }}
              >
                Email Us
              </a>
              <a
                href="tel:+916354075540"
                className="inline-block text-slate-900 px-12 py-5 rounded-lg hover:opacity-90 transition-all font-bold text-lg"
                style={{ backgroundColor: "var(--accent-amber)" }}
              >
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
