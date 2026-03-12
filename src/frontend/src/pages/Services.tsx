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
    ocid: "services.it_staffing.button",
    ctaLabel: "Request IT Talent",
    desc: "HireNest provides highly skilled software engineers, developers, and technical specialists for short-term and long-term business needs. Whether you need frontend engineers, backend architects, DevOps engineers, or full-stack developers, our network of vetted talent is ready to deploy.",
    specializations: [
      "Full-Stack Software Engineers",
      "Frontend & Backend Developers",
      "DevOps & Cloud Engineers",
      "QA & Test Automation Engineers",
      "Mobile App Developers (iOS/Android)",
      "Cybersecurity Specialists",
    ],
  },
  {
    icon: Brain,
    title: "AI & Data Talent",
    ocid: "services.ai_talent.button",
    ctaLabel: "Find AI Talent",
    desc: "We connect companies with professionals specializing in Artificial Intelligence, Machine Learning, and Data Engineering. Our AI talent pool includes practitioners with proven experience at top-tier AI labs, research institutions, and enterprise technology firms.",
    specializations: [
      "Machine Learning Engineers",
      "Data Scientists & Analysts",
      "AI/ML Researchers",
      "Data Platform Engineers",
      "LLM & Generative AI Specialists",
      "MLOps Engineers",
    ],
  },
  {
    icon: FileText,
    title: "Contract Staffing",
    ocid: "services.contract.button",
    ctaLabel: "Explore Contract Staffing",
    desc: "Flexible workforce solutions that allow businesses to scale their teams quickly without long-term commitments. Ideal for project-based work, seasonal scaling, or rapidly evolving business requirements where speed and flexibility are paramount.",
    specializations: [
      "Short-term project staffing (1–6 months)",
      "Long-term contract placements (6–24 months)",
      "Contract-to-hire programs",
      "Staff augmentation",
      "Offshore and near-shore team extension",
      "Rapid scaling for product launches",
    ],
  },
  {
    icon: Users,
    title: "Permanent Hiring",
    ocid: "services.permanent.button",
    ctaLabel: "Start Permanent Hiring",
    desc: "We help companies find long-term employees who match both technical and cultural requirements. Our permanent placement process is thorough, ensuring candidates are not only technically excellent but also aligned with your company values and growth trajectory.",
    specializations: [
      "Executive & leadership roles",
      "Senior individual contributors",
      "Technical team leads & managers",
      "Culture-fit assessment programs",
      "Compensation benchmarking & offer advisory",
      "90-day replacement guarantee",
    ],
  },
];

export default function Services() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.20 0.05 265) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "oklch(var(--electric-light))" }}
          >
            Our Services
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Our Staffing Services
          </h1>
          <p className="text-lg" style={{ color: "oklch(0.78 0.02 255)" }}>
            Four specialized talent solutions built for the pace of modern
            business. From contract to permanent, from IT to AI.
          </p>
        </div>
      </section>

      {/* Service sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
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
                <h2 className="text-3xl font-display font-bold mb-4 section-heading">
                  {s.title}
                </h2>
                <p className="section-subtext mb-8 leading-relaxed">{s.desc}</p>
                <Link to="/contact">
                  <button
                    type="button"
                    data-ocid={s.ocid}
                    className="btn-primary inline-flex items-center gap-2"
                    style={{ backgroundColor: "oklch(var(--electric))" }}
                  >
                    {s.ctaLabel} <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
              <div
                className={`p-8 rounded-2xl border ${i % 2 === 1 ? "lg:col-start-1" : ""}`}
                style={{
                  backgroundColor: "oklch(var(--surface))",
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
                        className="w-5 h-5 mt-0.5 shrink-0"
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

      {/* Bottom CTA */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.18 0.05 258) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready to find the right talent?
          </h2>
          <p className="mb-8" style={{ color: "oklch(0.78 0.02 255)" }}>
            Let our team match you with the perfect candidates.
          </p>
          <Link to="/contact">
            <button
              type="button"
              className="font-semibold px-7 py-3 rounded-md bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center gap-2"
              style={{ color: "oklch(var(--navy))" }}
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
