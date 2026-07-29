import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  Globe
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentBlock from "@/components/SEOContentBlock";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        "service_fsutstp",
        "template_mqvpl6o",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        },
        "Tnohct8f2AxCPSURl"
      );
      
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", service: "", message: "" });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(false);
      alert("Something went wrong, please try again later.");
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MarkitUp Group Limited",
    "image": "https://markitupgroup.com/images/markitup_logo_new.png",
    "url": "https://markitupgroup.com/contact",
    "telephone": "+44 (0) 20 1234 5678",
    "email": "info@markitupgroup.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "UK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 (0) 20 1234 5678",
      "contactType": "customer service"
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#6C3BFF]/20 selection:text-[#0F172A]">
      <SEOHead
        title="Contact Us | MarkitUp Group"
        description="Get in touch with MarkitUp Group. We're here to help you scale your business with premium digital marketing, technology, and growth solutions."
        keywords="Contact MarkitUp Group, digital agency contact, hire developers, marketing agency"
        canonical="https://markitupgroup.com/contact"
        structuredData={structuredData}
      />
      
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-12 lg:pt-16 lg:pb-16 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(108,59,255,0.08),transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,122,0,0.05),transparent_50%)] pointer-events-none" />
          
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem] relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl mx-auto">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#E7D8FF] bg-white px-4 py-2 text-sm font-bold text-[#6C3BFF] shadow-sm mb-6">
                <MessageSquare size={16} /> We'd love to hear from you
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-[clamp(2.75rem,5vw,4.5rem)] font-extrabold leading-[1.05] text-[#0F172A] tracking-tight mb-6">
                Let's Build Something <br className="hidden sm:block" />
                <span className="brand-gradient-text">Amazing Together</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-[clamp(1.125rem,1.5vw,1.25rem)] text-slate-600 leading-relaxed font-medium">
                Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* MAIN CONTACT SECTION */}
        <section className="py-12 lg:py-16 bg-[#FAFAFA]">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
            <div className="grid lg:grid-cols-[40%_60%] gap-8 lg:gap-12 items-start">
              
              {/* LEFT: CONTACT INFO */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-[clamp(1.75rem,2.5vw,2.25rem)] font-extrabold text-slate-900 mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-slate-600 text-[1.125rem] leading-relaxed">
                    Fill out the form and our team will get back to you within 24 hours. We're excited to learn about your project!
                  </p>
                </div>

                <div className="space-y-6 pt-6">
                  {[
                    { icon: Mail, title: "Chat with us", desc: "Our friendly team is here to help.", info: "info@markitupgroup.com", color: "text-[#6C3BFF]", bg: "bg-[#6C3BFF]/10" },
                    { icon: MapPin, title: "Visit us", desc: "Come say hello at our office HQ.", info: "London, United Kingdom", color: "text-[#FF7A00]", bg: "bg-[#FF7A00]/10" },
                    { icon: Phone, title: "Call us", desc: "Mon-Fri from 9am to 6pm.", info: "+44 (0) 20 1234 5678", color: "text-[#C71888]", bg: "bg-[#C71888]/10" },
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex gap-5 group cursor-default">
                      <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                        <item.icon size={24} className={item.color} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-slate-500 font-medium mb-1">{item.desc}</p>
                        <p className={`font-bold ${item.color}`}>{item.info}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Trust Indicators */}
                <motion.div variants={fadeUp} className="pt-8 mt-8 border-t border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-6">Trusted by innovative companies</h3>
                  <div className="flex flex-wrap gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2 font-black text-xl text-slate-800"><Globe size={24}/> TechFlow</div>
                    <div className="flex items-center gap-2 font-black text-xl text-slate-800"><Building2 size={24}/> Nexus</div>
                  </div>
                </motion.div>

              </motion.div>

              {/* RIGHT: CONTACT FORM */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)] border border-slate-100 relative overflow-hidden"
              >
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#6C3BFF]/5 to-transparent rounded-bl-full pointer-events-none" />

                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 h-full min-h-[25rem]"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Message Sent!</h3>
                    <p className="text-slate-600 text-lg max-w-md">
                      Thank you for reaching out. We have received your message and our team will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-[#6C3BFF] font-bold flex items-center gap-2 hover:underline"
                    >
                      Send another message <ArrowRight size={16} />
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">First Name</label>
                        <input 
                          type="text" name="firstName" required value={formData.firstName} onChange={handleChange}
                          placeholder="John" 
                          className="w-full bg-[#FAFAFA] border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-[#6C3BFF] focus:bg-white focus:ring-4 focus:ring-[#6C3BFF]/10 transition-all font-medium text-slate-800 placeholder:text-slate-400" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Last Name</label>
                        <input 
                          type="text" name="lastName" required value={formData.lastName} onChange={handleChange}
                          placeholder="Doe" 
                          className="w-full bg-[#FAFAFA] border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-[#6C3BFF] focus:bg-white focus:ring-4 focus:ring-[#6C3BFF]/10 transition-all font-medium text-slate-800 placeholder:text-slate-400" 
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                        <input 
                          type="email" name="email" required value={formData.email} onChange={handleChange}
                          placeholder="john@example.com" 
                          className="w-full bg-[#FAFAFA] border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-[#6C3BFF] focus:bg-white focus:ring-4 focus:ring-[#6C3BFF]/10 transition-all font-medium text-slate-800 placeholder:text-slate-400" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                        <input 
                          type="tel" name="phone" value={formData.phone} onChange={handleChange}
                          placeholder="+44 (0) 123 4567" 
                          className="w-full bg-[#FAFAFA] border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-[#6C3BFF] focus:bg-white focus:ring-4 focus:ring-[#6C3BFF]/10 transition-all font-medium text-slate-800 placeholder:text-slate-400" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                      <select 
                        name="service" required value={formData.service} onChange={handleChange}
                        className="w-full bg-[#FAFAFA] border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-[#6C3BFF] focus:bg-white focus:ring-4 focus:ring-[#6C3BFF]/10 transition-all font-medium text-slate-800 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select a topic</option>
                        <option value="digital-marketing">Digital Marketing (MarketBuddy)</option>
                        <option value="web-development">Web & App Development (ITBuddy)</option>
                        <option value="restaurant-partners">Restaurant Partnerships (DiscountBuddy)</option>
                        <option value="general-inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                      <textarea 
                        name="message" required value={formData.message} onChange={handleChange}
                        placeholder="Tell us a bit about your project or question..." rows={5}
                        className="w-full bg-[#FAFAFA] border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-[#6C3BFF] focus:bg-white focus:ring-4 focus:ring-[#6C3BFF]/10 transition-all font-medium text-slate-800 placeholder:text-slate-400 resize-none" 
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full gradient-button text-white font-bold text-lg py-4 rounded-2xl transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">Sending...</span>
                      ) : (
                        <><Send size={20} /> Send Message</>
                      )}
                    </button>
                    
                    <p className="text-xs text-center text-slate-500 font-medium mt-6">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                )}
              </motion.div>

            </div>
          </div>
        </section>

        {/* SEO CONTENT SECTION */}
        <SEOContentBlock title="Partner with MarkitUp Group to Grow Your Business">
          <p>
            Are you ready to take the next step and <strong>grow your business</strong>? Whether you are looking for an expert <strong>social media influencer</strong> agency, comprehensive <strong>seo</strong> services, or dynamic <strong>instagram reels</strong> and <strong>youtube vlogs</strong>, our Market Buddy team is here to assist. Contact us today for all your <strong>marketing related items</strong>.
          </p>
          <p>
            If your business requires robust <strong>IT related services in UK Europe</strong>, our IT Buddy experts can build the perfect custom <strong>erp</strong>, responsive <strong>website</strong>, or scalable <strong>mobile app</strong>. We also provide secure, high-performance <strong>ecommerce</strong> platforms and <strong>any other service related to it</strong>. 
          </p>
          <p>
            For the hospitality sector, our Discount Buddy platform offers a complete <strong>restaurant ease of managements</strong> suite. Connect with us to integrate our intuitive <strong>booking system</strong>, launch targeted <strong>restaurant promotion</strong> campaigns, manage <strong>deals addition</strong>, and optimize your <strong>loyalty management</strong> programs.
          </p>
        </SEOContentBlock>
      </main>

      <Footer />
    </div>
  );
}
