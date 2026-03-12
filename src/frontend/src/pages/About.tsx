import { Handshake, Heart, Lightbulb, Zap } from "lucide-react";

const values = [
  {
    icon: Heart,
    label: "Integrity",
    desc: "We operate with complete transparency and honesty in every client and partner relationship.",
  },
  {
    icon: Lightbulb,
    label: "Innovation",
    desc: "We continuously leverage the latest AI and technology to push the boundaries of talent matching.",
  },
  {
    icon: Zap,
    label: "Speed",
    desc: "We move fast because great talent doesn't wait. Time-to-hire is our most important metric.",
  },
  {
    icon: Handshake,
    label: "Partnership",
    desc: "We see every client and vendor as a long-term partner, not a transactional relationship.",
  },
];

const team = [
  {
    name: "Gopala Krishna",
    title: "CEO & Co-Founder",
    initials: "GK",
    color: "oklch(0.50 0.20 262)",
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
            We're on a mission to transform how companies access world-class
            talent through the power of AI and trusted partnerships.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div
              className="p-10 rounded-2xl border"
              style={{
                borderColor: "oklch(var(--border))",
                backgroundColor: "oklch(var(--surface))",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "oklch(var(--electric) / 0.1)" }}
              >
                <Heart
                  className="w-6 h-6"
                  style={{ color: "oklch(var(--electric))" }}
                />
              </div>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "oklch(var(--electric))" }}
              >
                Our Mission
              </p>
              <h2 className="text-2xl font-display font-bold mb-4 section-heading">
                Democratizing Elite Talent
              </h2>
              <p className="section-subtext leading-relaxed">
                Our mission is to make elite talent accessible to every
                ambitious company through technology and trusted partnerships.
                We believe that the right team is the difference between a good
                company and a great one.
              </p>
            </div>
            <div
              className="p-10 rounded-2xl border"
              style={{
                borderColor: "oklch(var(--border))",
                backgroundColor: "oklch(var(--surface))",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "oklch(var(--electric) / 0.1)" }}
              >
                <Zap
                  className="w-6 h-6"
                  style={{ color: "oklch(var(--electric))" }}
                />
              </div>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "oklch(var(--electric))" }}
              >
                Our Vision
              </p>
              <h2 className="text-2xl font-display font-bold mb-4 section-heading">
                The Future of Hiring
              </h2>
              <p className="section-subtext leading-relaxed">
                To be the most trusted AI-powered staffing platform connecting
                companies with world-class talent globally. A future where every
                company, regardless of size, can access the talent that drives
                exceptional outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
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

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(var(--electric))" }}
            >
              Leadership
            </p>
            <h2 className="text-4xl font-display font-bold section-heading mb-4">
              Our Team
            </h2>
            <p className="text-lg max-w-2xl mx-auto section-subtext">
              Seasoned operators and technologists building the future of talent
              acquisition.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-8 rounded-xl border text-center card-hover"
                style={{
                  borderColor: "oklch(var(--border))",
                  backgroundColor: "oklch(var(--surface))",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-white font-display font-bold text-lg"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
                <h3
                  className="font-display font-bold text-base mb-1"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "oklch(var(--text-muted))" }}
                >
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
