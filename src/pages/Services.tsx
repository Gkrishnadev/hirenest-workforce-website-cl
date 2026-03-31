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
    <div className="pt-[72px]">

      {/* 🔥 HERO */}
      <section
        className="py-28 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.20 0.05 265) 100%)",
        }}
      >
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: "oklch(var(--electric-light))" }}
        >
          Our Services
        </p>

        <h1 className="text-5xl font-display font-bold text-white mb-6">
          Talent Solutions Built for Modern Teams
        </h1>

        <p
          className="text-lg max-w-2xl mx-auto"
          style={{ color: "oklch(0.78 0.02 255)" }}
        >
          From IT staffing to AI talent — we deliver high-quality hiring solutions
          tailored to your business growth.
        </p>
      </section>

      {/* 💼 SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-24">

          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >

              {/* LEFT */}
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "oklch(var(--electric) / 0.1)" }}
                >
                  <s.icon
                    className="w-7 h-7"
                    style={{ color: "oklch(var(--electric))" }}
                  />
                </div>

                <h2 className="text-3xl font-display font-bold mb-4">
                  {s.title}
                </h2>

                <p className="section-subtext mb-8 leading-relaxed">
                  {s.desc}
                </p>

                <Link to="/contact">
                  <button
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white transition hover:opacity-90"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(var(--electric)), oklch(var(--electric-light)))",
                    }}
                  >
                    {s.ctaLabel} <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>

              {/* RIGHT CARD */}
              <div
                className={`p-8 rounded-2xl border shadow-sm ${
                  i % 2 === 1 ? "lg:col-start-1" : ""
                }`}
                style={{
                  backgroundColor: "oklch(var(--surface) / 0.9)",
                  borderColor: "oklch(var(--border))",
                }}
              >
                <p
                  className="text-sm font-semibold uppercase tracking-widest mb-5"
                  style={{ color: "oklch(var(--electric))" }}
                >
                  Specializations
                </p>

                <ul className="space-y-3">
                  {s.specializations.map((spec) => (
                    <li key={spec} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5"
                        style={{ color: "oklch(var(--electric))" }}
                      />
                      <span className="text-sm section-subtext">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* 🚀 CTA */}
      <section
        className="py-24 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.18 0.05 258) 100%)",
        }}
      >
        <h2 className="text-3xl font-display font-bold text-white mb-4">
          Ready to hire top talent?
        </h2>

        <p
          className="mb-8 max-w-xl mx-auto"
          style={{ color: "oklch(0.78 0.02 255)" }}
        >
          Let HireNest connect you with the right candidates quickly and efficiently.
        </p>

        <Link to="/contact">
          <button
            className="px-7 py-3 rounded-md font-semibold bg-white transition hover:shadow-lg"
            style={{ color: "oklch(var(--navy))" }}
          >
            Get Started <ArrowRight className="w-4 h-4 inline ml-2" />
          </button>
        </Link>
      </section>

    </div>
  );
}
