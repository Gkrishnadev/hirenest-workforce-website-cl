import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Brain,
  CheckCircle2,
  Code2,
  Layers,
  Network,
  Sparkles,
} from "lucide-react";
import SEO from "../components/SEO";

const workforceSolutions = {
  icon: Briefcase,
  title: "Workforce Solutions",
  ctaLabel: "Hire Talent",
  ctaHref: "/hire-developers-india",
  desc: "Staffing built around how you actually hire — permanent, contract, or somewhere in between — backed by a vetted vendor network and AI-assisted matching.",
  items: [
    "Permanent Hiring",
    "Contract Staffing",
    "Contract-to-Hire (C2H)",
    "Executive Search",
    "Dedicated Recruiters",
    "RPO (Recruitment Process Outsourcing)",
    "Vendor Management",
  ],
};

const technologySolutions = {
  icon: Code2,
  title: "Technology Solutions",
  ctaLabel: "Build Software",
  ctaHref: "/contact",
  desc: "A software delivery team you can plug in alongside hiring — from a single developer to a full engineering pod shipping production software.",
  items: [
    "Custom Software Development",
    "Web Applications",
    "Mobile Apps",
    "AI Solutions",
    "CRM Development",
    "ERP Solutions",
    "UI/UX Design",
    "Product Development",
    "API Development",
    "Cloud & DevOps",
    "QA & Automation Testing",
    "Application Support & Maintenance",
  ],
};

const services = [workforceSolutions, technologySolutions];

const whyHireNest = [
  {
    icon: Layers,
    title: "One Partner",
    desc: "From hiring developers to delivering complete software solutions — one relationship, not five vendors.",
  },
  {
    icon: Network,
    title: "Experienced Network",
    desc: "Access to experienced engineers and trusted technology partners, vetted before they reach you.",
  },
  {
    icon: Brain,
    title: "AI-Driven",
    desc: "We use AI to improve both candidate matching and software delivery — not just as a buzzword.",
  },
  {
    icon: Sparkles,
    title: "Scalable",
    desc: "Whether you need one developer or a complete engineering team, we scale with you.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      <SEO
        title="Services | Staffing, Software Development & AI Solutions — HireNest Workforce"
        description="HireNest Workforce delivers workforce solutions and technology solutions — staffing, custom software development, and AI solutions under one partner."
        path="/services"
      />

      {/* Hero - Premium Dark */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0F1A]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.15),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.1),_transparent_50%)]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">Our Services</span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">
            Staffing, Software Development &amp; AI Solutions
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            HireNest Workforce runs on two verticals working together: Workforce Solutions
            to help you hire, and Technology Solutions to help you build.
          </p>
        </div>
      </section>

      {/* Services - Dark Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content Side */}
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-6">
                  <s.icon className="w-7 h-7 text-cyan-400" />
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">
                  {s.title}
                </h2>

                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {s.desc}
                </p>

                <Link to={s.ctaHref}>
                  <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                    {s.ctaLabel} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* Items Card */}
              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
                  <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-5">
                    What's Included
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-3">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-cyan-400 shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY HIRENEST */}
      <section className="py-20 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-[0.2em]">Why HireNest?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Building Teams. Building Technology.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyHireNest.map((w) => (
              <div key={w.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                  <w.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{w.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-[#0B0F1A] to-blue-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.15),_transparent_50%)]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to hire talent, build software, or both?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let HireNest connect you with the right people and the right build team — quickly and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/hire-developers-india">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                Hire Talent <ArrowRight className="w-4 h-4 inline ml-2" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all">
                Book a Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
