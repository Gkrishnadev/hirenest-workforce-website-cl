import { Link } from "@tanstack/react-router";
import { Handshake, Heart, Lightbulb, Quote, Zap } from "lucide-react";

const values = [
  {
    icon: Heart,
    label: "Integrity",
    desc: "Trust is the foundation of every successful partnership. Transparency and reliability guide every interaction across our network.",
  },
  {
    icon: Lightbulb,
    label: "Innovation",
    desc: "Technology continues to transform how organizations build teams. HireNest embraces innovation to improve how talent and opportunity connect.",
  },
  {
    icon: Zap,
    label: "Speed",
    desc: "In the technology industry, timing matters. Our goal is to help organizations and partners move faster while maintaining quality and trust.",
  },
  {
    icon: Handshake,
    label: "Partnership",
    desc: "We believe strong relationships create lasting value. Every organization, staffing partner, and consultant is part of a broader ecosystem working toward shared success.",
  },
];

export default function About() {
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
            About Us
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            About HireNest Workforce
          </h1>
          <p className="text-lg" style={{ color: "oklch(0.78 0.02 255)" }}>
            Building a trusted network for technology workforce collaboration.
          </p>
        </div>
      </section>

      {/* About HireNest Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 section-heading">
            About HireNest
          </h2>
          <p className="text-lg leading-relaxed section-subtext">
            HireNest Workforce is building a trusted network that connects
            companies, staffing partners, and technology professionals.
          </p>
          <p className="text-lg leading-relaxed section-subtext mt-4">
            Our goal is to simplify how organizations discover the right talent
            and build reliable workforce partnerships.
          </p>
          <p className="text-lg leading-relaxed section-subtext mt-4">
            By bringing together experienced staffing vendors and skilled
            technology consultants, HireNest supports organizations in solving
            workforce challenges more efficiently while creating new
            opportunities across the global technology ecosystem.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(var(--surface))" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(var(--electric))" }}
          >
            Our Mission
          </p>
          <h2 className="text-4xl font-display font-bold section-heading mb-6">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed section-subtext">
            Our mission is to create a trusted network where companies and
            staffing partners can collaborate to deliver exceptional technology
            talent.
          </p>
          <p className="text-lg leading-relaxed section-subtext mt-4">
            HireNest focuses on helping organizations discover skilled
            professionals, build stronger partnerships, and navigate an evolving
            technology workforce landscape.
          </p>
        </div>
      </section>

      {/* What We Are Building */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(var(--electric))" }}
          >
            What We Are Building
          </p>
          <h2 className="text-4xl font-display font-bold section-heading mb-6">
            What We Are Building
          </h2>
          <p className="text-lg leading-relaxed section-subtext">
            HireNest is building a modern workforce network designed to support
            collaboration between organizations and staffing partners.
          </p>
          <p className="text-lg leading-relaxed section-subtext mt-4">
            Companies often face challenges accessing the right talent at the
            right time, while staffing partners and consultants seek meaningful
            opportunities to contribute their expertise.
          </p>
          <p className="text-lg leading-relaxed section-subtext mt-4">
            HireNest aims to bring these communities together through a trusted
            platform that supports transparency, collaboration, and long-term
            partnerships.
          </p>
        </div>
      </section>

      {/* What Drives Us */}
      <section
        className="py-24"
        style={{ backgroundColor: "oklch(var(--surface))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(var(--electric))" }}
            >
              What Drives Us
            </p>
            <h2 className="text-4xl font-display font-bold section-heading mb-4">
              What Drives Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.label}
                className="p-8 rounded-xl border bg-white text-center card-hover"
                style={{ borderColor: "oklch(var(--border))" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "oklch(var(--electric) / 0.1)" }}
                >
                  <v.icon
                    className="w-7 h-7"
                    style={{ color: "oklch(var(--electric))" }}
                  />
                </div>
                <h3
                  className="font-display font-bold text-base mb-3"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  {v.label}
                </h3>
                <p className="text-sm section-subtext">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(var(--electric))" }}
          >
            Leadership
          </p>
          <h2 className="text-4xl font-display font-bold section-heading mb-12">
            Leadership
          </h2>
          <div className="flex flex-col items-center gap-4">
            <img
              src="/assets/uploads/founder.png"
              alt="Gopala Krishna"
              className="w-32 h-32 rounded-full object-cover"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            <h3 className="text-xl font-semibold section-heading">
              Gopala Krishna
            </h3>
            <p
              className="text-sm"
              style={{ color: "oklch(var(--text-muted))" }}
            >
              Founder &amp; CEO
            </p>
            <p className="text-sm max-w-xl leading-relaxed section-subtext">
              HireNest was founded by Gopala Krishna with the vision of improving
              how companies access and collaborate with technology talent.
            </p>
            <p className="text-sm max-w-xl leading-relaxed section-subtext">
              Recognizing the growing complexity of workforce solutions, he
              launched HireNest to help organizations and staffing partners
              build stronger connections and work together more effectively.
            </p>
            <p className="text-sm max-w-xl leading-relaxed section-subtext">
              Under his leadership, HireNest is focused on creating a trusted
              workforce network that empowers companies, staffing partners, and
              professionals to collaborate and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.18 0.05 258) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="w-1 h-16 mx-auto mb-8 rounded-full"
            style={{ backgroundColor: "oklch(var(--electric))" }}
          />
          <Quote
            className="w-12 h-12 mx-auto mb-6"
            style={{ color: "oklch(var(--electric) / 0.5)" }}
          />
          <blockquote className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug mb-8 italic">
            &ldquo;Our mission is to create a trusted network where companies
            and staffing partners can collaborate to solve workforce challenges
            faster.&rdquo;
          </blockquote>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "oklch(var(--electric-light))" }}
          >
            — Gopal Krishna, Founder &amp; CEO, HireNest Workforce
          </p>
        </div>
      </section>

      {/* Our Vision for the Future */}
      <section
        className="py-24"
        style={{ backgroundColor: "oklch(var(--surface))" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(var(--electric))" }}
          >
            The Future
          </p>
          <h2 className="text-4xl font-display font-bold section-heading mb-6">
            Our Vision for the Future
          </h2>
          <p className="text-lg section-subtext leading-relaxed max-w-3xl mx-auto">
            The future of workforce solutions will be built on collaboration.
          </p>
          <p className="text-lg section-subtext leading-relaxed max-w-3xl mx-auto mt-4">
            HireNest envisions a global ecosystem where companies, staffing
            partners, and technology professionals connect through trusted
            relationships and shared opportunities.
          </p>
          <p className="text-lg section-subtext leading-relaxed max-w-3xl mx-auto mt-4">
            As the technology landscape continues to evolve, HireNest aims to
            support organizations and partners in building stronger, more agile
            teams that drive innovation and growth.
          </p>
        </div>
      </section>

      {/* Join the HireNest Network CTA */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.16 0.06 250) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Join the HireNest Network
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.80 0.02 255)" }}>
            Whether you are a company seeking exceptional technology talent, a
            staffing partner looking to collaborate and expand opportunities, or
            a consultant exploring new career possibilities — HireNest provides
            a platform designed to support meaningful connections across the
            workforce ecosystem.
          </p>
          <Link to="/vendors">
            <button
              type="button"
              data-ocid="about.join_network.button"
              className="font-semibold px-8 py-3 rounded-md bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ color: "oklch(var(--navy))" }}
            >
              Join the HireNest Network
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
