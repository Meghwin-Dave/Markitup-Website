import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { Code, Smartphone, Server, Zap, Users, TrendingUp } from "lucide-react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ITBuddy() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  // Auto-advance the projects carousel
  useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      if (!carouselApi) return;
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [carouselApi]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-slate-950 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm md:text-base font-semibold mb-4 tracking-wide uppercase text-slate-200">
                ITBuddy · Digital Solutions & Product Studio
              </p>
              <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
                Enterprise-Grade Software{" "}
                <span style={{ color: "var(--accent-teal)" }}>for Modern Products</span>
              </h1>
              <p className="text-2xl text-slate-200 leading-relaxed font-medium max-w-3xl mx-auto">
                ITBuddy is the digital solutions and product development studio of MarkitUp Group—designing, building, and
                maintaining the infrastructure behind both client solutions and internal products.
              </p>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto mt-6">
                At its current stage, ITBuddy is primarily focused on internal capability building and supporting the
                development of DiscountBuddy and MarketBuddy systems.
              </p>
              <div className="mt-12">
                <Link
                  href="/contact"
                  className="inline-block text-white px-10 py-4 rounded-lg hover:opacity-90 transition-all font-bold text-lg"
                  style={{ backgroundColor: "var(--accent-teal)" }}
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div
                className="bg-white rounded-xl p-12 h-80 flex items-center justify-center border-2 shadow-sm"
                style={{ borderColor: "var(--accent-teal)" }}
              >
                <div className="text-center">
                  <Code size={64} style={{ color: "var(--accent-teal)" }} className="mx-auto mb-4" />
                  <p className="text-slate-800 font-bold text-xl">Engineering the MarkitUp Ecosystem</p>
                </div>
              </div>
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8">
                  Who We <span style={{ color: "var(--accent-teal)" }}>Are</span>
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                  ITBuddy exists to design, build, and maintain the digital infrastructure behind both client solutions and
                  internal platforms—from apps and websites to automation and internal tools.
                </p>
                <p className="text-lg text-slate-700 mb-10 leading-relaxed font-medium">
                  Our team brings enterprise-grade engineering practices to every project while staying closely aligned with
                  MarketBuddy’s market insight and the long-term product direction of DiscountBuddy.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Product-focused engineering, not just feature delivery",
                    "Tight feedback loops with MarketBuddy and DiscountBuddy",
                    "Infrastructure designed for scale, reliability, and speed",
                    "Strong internal tooling to make every team more effective",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl px-5 py-4 border-l-4 shadow-sm"
                      style={{ borderLeftColor: "var(--accent-teal)" }}
                    >
                      <p className="text-slate-700 font-semibold text-sm md:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Services</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                Our <span style={{ color: "var(--accent-teal)" }}>Core Capabilities</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  icon: Smartphone,
                  title: "Product-Grade Mobile Apps",
                  items: [
                    "Native iOS & Android experiences",
                    "Cross-platform apps (React Native, Flutter)",
                    "Robust authentication and user management",
                    "In-app analytics and experimentation",
                  ],
                  accent: "teal",
                },
                {
                  icon: Code,
                  title: "Websites & Frontend Platforms",
                  items: [
                    "Marketing sites and product microsites",
                    "Design systems and component libraries",
                    "High-performance SPA/SSR applications",
                    "Accessibility and SEO baked in",
                  ],
                  accent: "indigo",
                },
                {
                  icon: Zap,
                  title: "Internal Tools & Automation",
                  items: [
                    "Operational dashboards and admin panels",
                    "Automation for repetitive workflows",
                    "Integrations with third‑party services",
                    "Data pipelines for reporting and insight",
                  ],
                  accent: "teal",
                },
                {
                  icon: Server,
                  title: "Backend Systems & APIs",
                  items: [
                    "Service-oriented, well-documented APIs",
                    "Scalable data models and storage",
                    "Observability, logging, and alerting",
                    "Security, privacy, and compliance in mind",
                  ],
                  accent: "indigo",
                },
                {
                  icon: TrendingUp,
                  title: "Reliability, DevOps & SRE",
                  items: [
                    "CI/CD pipelines and release automation",
                    "Performance and load optimisation",
                    "Monitoring, uptime, and incident response",
                    "Environment and cost management",
                  ],
                  accent: "teal",
                },
                {
                  icon: Users,
                  title: "Technical Partnership",
                  items: [
                    "Architecture reviews and technical roadmaps",
                    "MVP scoping and validation support",
                    "Embedded engineers for product squads",
                    "Engineering culture and process design",
                  ],
                  accent: "indigo",
                },
              ].map((service, idx) => {
                const Icon = service.icon;
                const accentVar =
                  service.accent === "teal"
                    ? "var(--accent-teal)"
                    : service.accent === "amber"
                    ? "var(--accent-amber)"
                    : "var(--accent-indigo)";
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 rounded-xl shadow-sm hover:shadow-lg transition-all p-10 border-l-4"
                    style={{ borderLeftColor: accentVar }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center">
                        <Icon size={32} style={{ color: accentVar }} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="font-bold text-lg" style={{ color: accentVar }}>✓</span>
                          <span className="text-slate-700 font-semibold text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Projects – Carousel */}
        <section className="py-24 md:py-32 bg-slate-950 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-slate-300 font-semibold text-sm mb-4 tracking-wide uppercase">Project Showcase</p>
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                Real <span style={{ color: "var(--accent-teal)" }}>ITBuddy Work</span> Across Stacks
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-medium">
                From Django backends to ERPNext customisations, PHP platforms, Flutter apps, and modern React/Node websites.
              </p>
            </div>

            <Carousel
              className="relative"
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setCarouselApi}
            >
              <CarouselContent className="mt-4">
                {[
                  // 3 Django projects
                  {
                    stack: "Django",
                    name: "Restaurant Reservation Platform",
                    desc: "Full‑stack Django app handling table bookings, waitlists, and campaign‑driven offers for hospitality brands.",
                    tech: ["Django", "DRF", "PostgreSQL"],
                  },
                  {
                    stack: "Django",
                    name: "Customer Insights API",
                    desc: "Analytics API aggregating data from web, app, and marketing channels into a single reporting layer.",
                    tech: ["Django", "DRF", "Redis"],
                  },
                  {
                    stack: "Django",
                    name: "Internal Operations Portal",
                    desc: "Role‑based internal admin built on Django for managing content, approvals, and partner onboarding.",
                    tech: ["Django", "HTML", "Tailwind"],
                  },
                  // 4 ERPNext projects
                  {
                    stack: "ERPNext",
                    name: "Multi‑Branch Retail ERP",
                    desc: "ERPNext implementation and customisation for inventory, purchasing, and invoicing across multiple stores.",
                    tech: ["ERPNext", "Frappe", "PostgreSQL"],
                  },
                  {
                    stack: "ERPNext",
                    name: "Manufacturing Workflow Suite",
                    desc: "Custom workflows and reports for production planning, BOM management, and quality checks.",
                    tech: ["ERPNext", "Python Scripts"],
                  },
                  {
                    stack: "ERPNext",
                    name: "Service & Support Desk",
                    desc: "Ticketing, SLAs, and customer portal on top of ERPNext for a tech‑enabled services business.",
                    tech: ["ERPNext", "Portal", "Email Integration"],
                  },
                  {
                    stack: "ERPNext",
                    name: "Finance & Billing Layer",
                    desc: "Automated invoicing, tax rules, and payment collection flows integrated with external gateways.",
                    tech: ["ERPNext", "Payment Gateway APIs"],
                  },
                  // 3 PHP projects
                  {
                    stack: "PHP",
                    name: "Legacy CMS Modernisation",
                    desc: "Refactored and hardened a legacy PHP CMS, improving performance, security, and editor workflows.",
                    tech: ["PHP", "MySQL", "Nginx"],
                  },
                  {
                    stack: "PHP",
                    name: "Affiliate Tracking Platform",
                    desc: "Custom PHP backend to track referrals, commissions, and payouts for partner campaigns.",
                    tech: ["PHP", "REST", "MySQL"],
                  },
                  {
                    stack: "PHP",
                    name: "Membership Portal",
                    desc: "Subscription‑based portal with protected content, renewals, and email automation hooks.",
                    tech: ["PHP", "Stripe", "Mail Integrations"],
                  },
                  // 2 Flutter projects
                  {
                    stack: "Flutter",
                    name: "Discount Discovery App",
                    desc: "Prototype mobile app for discovering nearby discounts and offers, built as an early DiscountBuddy experiment.",
                    tech: ["Flutter", "Firebase", "Maps"],
                  },
                  {
                    stack: "Flutter",
                    name: "Field Operations Toolkit",
                    desc: "Offline‑first Flutter app for on‑site teams to capture data, photos, and checklists.",
                    tech: ["Flutter", "SQLite", "Background Sync"],
                  },
                  // 6 React / Node website projects
                  {
                    stack: "React / Node",
                    name: "MarkitUp Group Website",
                    desc: "This very site—fast, component‑driven marketing presence built with React, Vite, and Node.",
                    tech: ["React", "Vite", "Node"],
                  },
                  {
                    stack: "React / Node",
                    name: "Hospitality Brand Landing System",
                    desc: "Reusable landing page system for campaigns, optimised for speed and conversion tracking.",
                    tech: ["React", "Next.js", "Node"],
                  },
                  {
                    stack: "React / Node",
                    name: "B2B Services Microsite Suite",
                    desc: "Cluster of microsites sharing a design system, enabling rapid spin‑up of new propositions.",
                    tech: ["React", "Design System", "Node"],
                  },
                  {
                    stack: "React / Node",
                    name: "Performance Marketing Funnels",
                    desc: "Experiment‑friendly funnels wired into MarketBuddy’s analytics stack for fast iteration.",
                    tech: ["React", "A/B Testing", "Analytics"],
                  },
                  {
                    stack: "React / Node",
                    name: "Client Knowledge Base",
                    desc: "Searchable documentation portal for client teams, with role‑based access and edit workflows.",
                    tech: ["React", "Node", "Search APIs"],
                  },
                  {
                    stack: "React / Node",
                    name: "Events & Webinar Hub",
                    desc: "Event listing and registration hub integrated with email tools and calendar systems.",
                    tech: ["React", "Node", "Integrations"],
                  },
                ].map((project, idx) => (
                  <CarouselItem
                    key={idx}
                    className="basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/70 p-7 flex flex-col justify-between">
                      <div>
                        <p className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200 mb-3">
                          {project.stack}
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                          {project.name}
                        </h3>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-5">
                          {project.desc}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{ backgroundColor: "rgba(148, 163, 184, 0.2)", color: "#e5f9ff" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="hidden md:flex bg-slate-900/80 border-slate-700 text-slate-100 hover:bg-slate-800" />
              <CarouselNext className="hidden md:flex bg-slate-900/80 border-slate-700 text-slate-100 hover:bg-slate-800" />
            </Carousel>
          </div>
        </section>

        {/* How We Support the Group */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Ecosystem Role</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                How ITBuddy <span style={{ color: "var(--accent-teal)" }}>Supports MarkitUp Group</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "For MarketBuddy",
                  desc: "We turn marketing and growth strategies into reliable landing pages, funnels, and reporting tooling that can be iterated quickly.",
                },
                {
                  title: "For DiscountBuddy",
                  desc: "We own the product’s technical roadmap—from early MVP experiments to a resilient, scalable consumer platform.",
                },
                {
                  title: "For MarkitUp Group",
                  desc: "We build internal tools, shared libraries, and infrastructure that compound across every new venture the group launches.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 border-l-4 shadow-sm"
                  style={{ borderLeftColor: "var(--accent-teal)" }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Process</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                Our Development <span style={{ color: "var(--accent-indigo)" }}>Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your vision and requirements", accent: "teal" },
                { step: "02", title: "Design", desc: "Creating architecture and design specifications", accent: "amber" },
                { step: "03", title: "Development", desc: "Building with clean, scalable code", accent: "indigo" },
                { step: "04", title: "Testing", desc: "Comprehensive QA and performance testing", accent: "teal" },
                { step: "05", title: "Deployment", desc: "Launching and monitoring in production", accent: "amber" },
              ].map((item, idx) => {
                const accentVar = item.accent === "teal" ? "var(--accent-teal)" : item.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="text-center bg-white rounded-lg p-8 border-t-4 hover:shadow-lg transition-all" style={{ borderTopColor: accentVar }}>
                    <div className="text-4xl font-black text-slate-900 mb-4">{item.step}</div>
                    <h3 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Tech Stack</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                Technologies We <span style={{ color: "var(--accent-teal)" }}>Use</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: "Frontend", items: ["React & Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Vite & Webpack"], accent: "teal" },
                { title: "Backend", items: ["Django & DRF", "Node.js & Express", "Python", "PostgreSQL & MongoDB", "Redis & caching"], accent: "amber" },
                { title: "Infrastructure", items: ["AWS & Google Cloud", "Docker & Kubernetes", "CI/CD pipelines", "Monitoring & logging", "Security best practices"], accent: "indigo" }
              ].map((tech, idx) => {
                const accentVar = tech.accent === "teal" ? "var(--accent-teal)" : tech.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="bg-slate-50 rounded-xl p-10 border-t-4 shadow-sm hover:shadow-lg transition-all" style={{ borderTopColor: accentVar }}>
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">{tech.title}</h3>
                    <ul className="space-y-4">
                      {tech.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="font-bold text-lg" style={{ color: accentVar }}>•</span>
                          <span className="text-slate-700 font-semibold text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-slate-600 font-semibold text-sm mb-4 tracking-wide uppercase">Engagement</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900">
                Engagement <span style={{ color: "var(--accent-amber)" }}>Models</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: "Project-Based", desc: "Fixed scope, timeline, and budget. Perfect for well-defined projects.", features: ["Clear deliverables", "Predictable costs", "Defined timeline"], accent: "teal" },
                { title: "Retainer", desc: "Ongoing support and development. Ideal for continuous improvements.", features: ["Flexible scope", "Priority support", "Dedicated team"], accent: "amber" },
                { title: "Staff Augmentation", desc: "Extend your team with our developers. Work as an integrated part.", features: ["Flexible duration", "Your processes", "Full integration"], accent: "indigo" }
              ].map((model, idx) => {
                const accentVar = model.accent === "teal" ? "var(--accent-teal)" : model.accent === "amber" ? "var(--accent-amber)" : "var(--accent-indigo)";
                return (
                  <div key={idx} className="bg-white rounded-xl p-10 border-t-4 shadow-sm hover:shadow-lg transition-all" style={{ borderTopColor: accentVar }}>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{model.title}</h3>
                    <p className="text-slate-700 mb-8 leading-relaxed font-medium text-lg">{model.desc}</p>
                    <ul className="space-y-3">
                      {model.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="font-bold text-lg" style={{ color: accentVar }}>✓</span>
                          <span className="text-slate-700 font-semibold text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-slate-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Ready to Build Something <span style={{ color: "var(--accent-amber)" }}>Great?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300 font-medium">
              Let's discuss your project requirements and how IT Buddy can help bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block text-slate-900 px-12 py-5 rounded-lg hover:opacity-90 transition-all font-bold text-lg"
              style={{ backgroundColor: "var(--accent-amber)" }}
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
