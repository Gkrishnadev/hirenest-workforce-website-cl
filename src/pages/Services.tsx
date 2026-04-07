import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Code2,
  FileText,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "IT Staffing",
    ctaLabel: "Request IT Talent",
    desc: "HireNest provides highly skilled software engineers and technical specialists for short and long-term needs.",
    specializations: [
      "Full-Stack Engineers",
      "Frontend & Backend Developers",
      "DevOps & Cloud Engineers",
      "QA Automation",
      "Mobile Developers",
      "Cybersecurity Specialists",
    ],
  },
  {
    icon: Brain,
    title: "AI & Data Talent",
    ctaLabel: "Find AI Talent",
    desc: "Access top AI, ML, and Data professionals from elite talent networks.",
    specializations: [
      "ML Engineers",
      "Data Scientists",
      "AI Researchers",
      "Data Engineers",
      "LLM Specialists",
      "MLOps Engineers",
    ],
  },
  {
    icon: FileText,
    title: "Contract Staffing",
    ctaLabel: "Explore Contracts",
    desc: "Flexible hiring solutions for scaling teams quickly without long-term commitments.",
    specializations: [
      "Short-term staffing",
      "Long-term contracts",
      "Contract-to-hire",
      "Staff augmentation",
      "Offshore teams",
      "Rapid scaling",
    ],
  },
  {
    icon: Users,
    title: "Permanent Hiring",
    ctaLabel: "Start Hiring",
    desc: "Find long-term employees aligned with both technical and cultural needs.",
    specializations: [
      "Leadership hiring",
      "Senior engineers",
      "Tech leads",
      "Culture fit hiring",
      "Offer advisory",
      "Replacement guarantee",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0B0F1A]">
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
            Talent Solutions Built for Modern Teams
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From IT staffing to AI talent — we deliver high-quality hiring solutions
            tailored to your business growth.
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

                <Link to="/contact">
                  <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                    {s.ctaLabel} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* Specializations Card */}
              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
                  <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-5">
                    Specializations
                  </p>

                  <ul className="space-y-3">
                    {s.specializations.map((spec) => (
                      <li key={spec} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-cyan-400 shrink-0" />
                        <span className="text-gray-300">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-[#0B0F1A] to-blue-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.15),_transparent_50%)]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to hire top talent?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let HireNest connect you with the right candidates quickly and efficiently.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
              Get Started <ArrowRight className="w-4 h-4 inline ml-2" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
