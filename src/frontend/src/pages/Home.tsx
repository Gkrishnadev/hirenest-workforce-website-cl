import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  Code2,
  FileText,
  Globe,
  Network,
  Quote,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "IT Staffing",
    desc: "HireNest provides highly skilled software engineers, developers, and technical specialists for short-term and long-term business needs.",
  },
  {
    icon: Brain,
    title: "AI & Data Talent",
    desc: "We connect companies with professionals specializing in Artificial Intelligence, Machine Learning, and Data Engineering.",
  },
  {
    icon: FileText,
    title: "Contract Staffing",
    desc: "Flexible workforce solutions that allow businesses to scale their teams quickly without long-term commitments.",
  },
  {
    icon: Users,
    title: "Permanent Hiring",
    desc: "We help companies find long-term employees who match both technical and cultural requirements perfectly.",
  },
];

const steps = [
  {
    n: "01",
    title: "Join the HireNest Network",
    desc: "Register as a staffing vendor, consultant, or client on the HireNest collaboration platform.",
  },
  {
    n: "02",
    title: "Share Requirements or Available Talent",
    desc: "Post your open IT requirements or showcase your bench consultants to the HireNest partner network.",
  },
  {
    n: "03",
    title: "Collaborate with Trusted Staffing Partners",
    desc: "Connect and collaborate with verified staffing vendors to accelerate placements and grow together.",
  },
];

const vendorBenefits = [
  { icon: Network, label: "Access to specialized hiring partners" },
  { icon: TrendingUp, label: "Faster hiring cycles" },
  { icon: Shield, label: "Pre-vetted vendor ecosystem" },
  { icon: Brain, label: "AI-powered candidate matching" },
];

const whyCards = [
  {
    icon: Zap,
    title: "AI-Powered Talent Matching",
    desc: "Our AI engine matches requirements to the best candidates with precision.",
  },
  {
    icon: Network,
    title: "Curated Vendor Ecosystem",
    desc: "A hand-picked network of top staffing partners across every domain.",
  },
  {
    icon: TrendingUp,
    title: "Faster Hiring Process",
    desc: "Cut your time-to-hire by up to 60% with our streamlined workflow.",
  },
  {
    icon: Globe,
    title: "Global Talent Access",
    desc: "Access world-class talent from every corner of the globe, on-demand.",
  },
];

const testimonials = [
  {
    quote:
      "HireNest delivered a senior ML engineer within 10 days. Absolutely phenomenal speed and quality.",
    name: "Sarah Chen",
    title: "VP of Engineering",
    company: "Arcline AI",
  },
  {
    quote:
      "Their vendor network gave us access to talent we couldn't find anywhere else. Game-changer for our fintech build-out.",
    name: "Marcus O'Brien",
    title: "CTO",
    company: "NovaPay Financial",
  },
  {
    quote:
      "The whole process was seamless. We hired 3 contract developers in under 2 weeks.",
    name: "Priya Nair",
    title: "Head of Talent",
    company: "MedCore Health",
  },
];

const stats = [
  { number: "120+", label: "Staffing Vendors" },
  { number: "500+", label: "Bench Consultants" },
  { number: "40+", label: "Active Requirements" },
];

export default function Home() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.20 0.05 265) 50%, oklch(0.16 0.06 250) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 border"
                style={{
                  backgroundColor: "oklch(var(--electric) / 0.15)",
                  borderColor: "oklch(var(--electric) / 0.3)",
                  color: "oklch(var(--electric-light))",
                }}
              >
                <Zap className="w-3 h-3 fill-current" />
                IT Staffing Collaboration Network
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.08] mb-6">
                The Collaboration Network for IT Staffing Vendors and{" "}
                <span style={{ color: "oklch(var(--electric-light))" }}>
                  Technology Talent
                </span>
              </h1>
              <p
                className="text-lg leading-relaxed mb-10"
                style={{ color: "oklch(0.80 0.02 255)" }}
              >
                HireNest connects companies, staffing vendors, and technology
                consultants through a trusted collaboration platform designed to
                accelerate IT hiring.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/vendors">
                  <button
                    type="button"
                    data-ocid="hero.join_vendor.button"
                    className="text-white px-7 py-3 rounded-md font-semibold shadow-md hover:opacity-90 transition border-2 border-black text-base"
                    style={{ backgroundColor: "oklch(var(--electric))" }}
                  >
                    Join as Vendor
                  </button>
                </Link>
                <Link to="/submit-requirement">
                  <button
                    type="button"
                    data-ocid="hero.post_requirement.button"
                    className="text-white px-7 py-3 rounded-md font-semibold shadow-md hover:opacity-90 transition border-2 border-black text-base"
                    style={{ backgroundColor: "oklch(var(--electric))" }}
                  >
                    Post IT Requirement
                  </button>
                </Link>
              </div>
            </div>

            {/* SVG Illustration */}
            <div className="hidden lg:flex items-center justify-center">
              <HeroIllustration />
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
        />
      </section>

      {/* Network Credibility Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-center text-sm font-semibold uppercase tracking-widest mb-10"
            style={{ color: "oklch(var(--text-muted))" }}
          >
            Trusted by vendors, consultants, and companies across India
          </p>
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <span
                  className="text-4xl sm:text-5xl font-display font-bold"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  {s.number}
                </span>
                <span
                  className="text-sm sm:text-base font-medium"
                  style={{ color: "oklch(var(--text-muted))" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
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
              What We Do
            </p>
            <h2 className="text-4xl font-display font-bold section-heading mb-4">
              Our Services
            </h2>
            <p className="text-lg max-w-2xl mx-auto section-subtext">
              Comprehensive talent solutions built for the speed and scale of
              modern business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-8 rounded-xl border card-hover"
                style={{
                  borderColor: "oklch(var(--border))",
                  backgroundColor: "oklch(var(--card))",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "oklch(var(--electric) / 0.1)" }}
                >
                  <s.icon
                    className="w-6 h-6"
                    style={{ color: "oklch(var(--electric))" }}
                  />
                </div>
                <h3
                  className="text-xl font-display font-bold mb-3"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  {s.title}
                </h3>
                <p className="section-subtext text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <button
                type="button"
                className="btn-outlined-navy inline-flex items-center gap-2"
              >
                View All Services <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(var(--electric))" }}
            >
              Process
            </p>
            <h2 className="text-4xl font-display font-bold section-heading mb-4">
              How HireNest Works
            </h2>
            <p className="text-lg max-w-xl mx-auto section-subtext">
              Three simple steps to start collaborating on the HireNest network.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.n} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block step-connector" />
                )}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-bold text-lg mx-auto mb-5 shadow-lg"
                  style={{ backgroundColor: "oklch(var(--electric))" }}
                >
                  {step.n}
                </div>
                <h3
                  className="font-display font-bold text-base mb-2"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm section-subtext">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Network */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.18 0.05 258) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: "oklch(var(--electric-light))" }}
              >
                Vendor Network
              </p>
              <h2 className="text-4xl font-display font-bold text-white mb-6 leading-tight">
                Join the HireNest
                <br />
                <span style={{ color: "oklch(var(--electric-light))" }}>
                  Vendor Network
                </span>
              </h2>
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "oklch(0.78 0.02 255)" }}
              >
                Expand your reach by collaborating with trusted staffing
                partners and accessing new IT requirements through the HireNest
                platform.
              </p>
              <Link to="/vendors">
                <button
                  type="button"
                  data-ocid="vendor.join_network.button"
                  className="text-white px-7 py-3 rounded-md font-semibold shadow-md hover:opacity-90 transition border-2 border-black"
                  style={{ backgroundColor: "oklch(var(--electric))" }}
                >
                  Join as Vendor
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {vendorBenefits.map((b) => (
                <div
                  key={b.label}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{
                    backgroundColor: "oklch(1 0 0 / 0.06)",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "oklch(var(--electric) / 0.25)" }}
                  >
                    <b.icon
                      className="w-5 h-5"
                      style={{ color: "oklch(var(--electric-light))" }}
                    />
                  </div>
                  <p className="text-sm font-medium text-white leading-relaxed">
                    {b.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className="w-full h-64 rounded-2xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(var(--electric) / 0.08) 0%, oklch(var(--electric) / 0.15) 100%)",
                border: "1px solid oklch(var(--electric) / 0.15)",
              }}
            >
              <div className="text-center">
                <Building2
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ color: "oklch(var(--electric))" }}
                />
                <p
                  className="font-display font-bold text-lg"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  For Companies & Clients
                </p>
              </div>
            </div>
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: "oklch(var(--electric))" }}
              >
                For Clients
              </p>
              <h2
                className="text-4xl font-display font-bold mb-6 leading-tight"
                style={{ color: "oklch(var(--navy))" }}
              >
                Hire Exceptional Technology Talent Faster
              </h2>
              <p className="text-base leading-relaxed mb-10 section-subtext">
                Access a trusted network of staffing partners who can deliver
                high-quality technology talent across multiple domains.
              </p>
              <Link to="/submit-requirement">
                <button
                  type="button"
                  data-ocid="client.submit_requirement.button"
                  className="text-white px-7 py-3 rounded-md font-semibold shadow-md hover:opacity-90 transition border-2 border-black"
                  style={{ backgroundColor: "oklch(var(--electric))" }}
                >
                  Submit IT Requirement
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bench Consultant Section */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.04 258) 0%, oklch(var(--navy)) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: "oklch(var(--electric-light))" }}
              >
                For Vendors & Consultants
              </p>
              <h2 className="text-4xl font-display font-bold text-white mb-6 leading-tight">
                Showcase Your{" "}
                <span style={{ color: "oklch(var(--electric-light))" }}>
                  Bench Consultants
                </span>
              </h2>
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "oklch(0.78 0.02 255)" }}
              >
                Promote your available consultants across the HireNest partner
                network and unlock new project opportunities.
              </p>
              <Link to="/submit-requirement">
                <button
                  type="button"
                  data-ocid="bench.submit_consultant.button"
                  className="text-white px-7 py-3 rounded-md font-semibold shadow-md hover:opacity-90 transition border-2 border-black"
                  style={{ backgroundColor: "oklch(var(--electric))" }}
                >
                  Submit Bench Consultant
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: "Bench Resources", val: "500+" },
                { icon: Network, label: "Partner Vendors", val: "120+" },
                { icon: CheckCircle2, label: "Placements Made", val: "200+" },
                { icon: TrendingUp, label: "Growth YoY", val: "3x" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-xl text-center"
                  style={{
                    backgroundColor: "oklch(1 0 0 / 0.07)",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                  }}
                >
                  <item.icon
                    className="w-8 h-8 mx-auto mb-3"
                    style={{ color: "oklch(var(--electric-light))" }}
                  />
                  <p className="text-2xl font-display font-bold text-white mb-1">
                    {item.val}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.70 0.02 255)" }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose HireNest */}
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
              Advantages
            </p>
            <h2 className="text-4xl font-display font-bold section-heading mb-4">
              Why Choose HireNest
            </h2>
            <p className="text-lg max-w-2xl mx-auto section-subtext">
              Everything you need to hire faster, smarter, and better.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyCards.map((c) => (
              <div
                key={c.title}
                className="text-center p-8 rounded-xl border card-hover bg-white"
                style={{
                  borderColor: "oklch(var(--border))",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "oklch(var(--electric) / 0.1)" }}
                >
                  <c.icon
                    className="w-7 h-7"
                    style={{ color: "oklch(var(--electric))" }}
                  />
                </div>
                <h3
                  className="font-display font-bold text-base mb-3"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  {c.title}
                </h3>
                <p className="text-sm section-subtext">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(var(--electric))" }}
            >
              Testimonials
            </p>
            <h2 className="text-4xl font-display font-bold section-heading mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-xl border bg-white card-hover"
                style={{ borderColor: "oklch(var(--border))" }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className="w-4 h-4 fill-current"
                      style={{ color: "oklch(0.75 0.15 85)" }}
                    />
                  ))}
                </div>
                <Quote
                  className="w-8 h-8 mb-4"
                  style={{ color: "oklch(var(--electric) / 0.25)" }}
                />
                <p className="text-sm leading-relaxed mb-6 section-subtext italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p
                    className="font-display font-bold text-sm"
                    style={{ color: "oklch(var(--navy))" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(var(--text-muted))" }}
                  >
                    {t.title} · {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.16 0.06 250) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            Join the Vendor Network Today
          </h2>
          <p
            className="text-lg mb-10"
            style={{ color: "oklch(0.80 0.02 255)" }}
          >
            Become part of the HireNest collaboration network and access
            exclusive IT requirements from companies across India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/vendors">
              <button
                type="button"
                data-ocid="cta.join_vendor_network.button"
                className="font-semibold px-7 py-3 rounded-md bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ color: "oklch(var(--navy))" }}
              >
                Join the Vendor Network
              </button>
            </Link>
            <Link to="/submit-requirement">
              <button
                type="button"
                data-ocid="cta.post_requirement.button"
                className="btn-outlined"
              >
                Post IT Requirement
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 480 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="HireNest talent network illustration"
      className="w-full max-w-lg opacity-90"
    >
      {/* Background glow */}
      <ellipse
        cx="240"
        cy="210"
        rx="200"
        ry="180"
        fill="oklch(0.50 0.20 262 / 0.08)"
      />

      {/* Connection lines */}
      <line
        x1="240"
        y1="210"
        x2="100"
        y2="100"
        stroke="oklch(0.62 0.18 262 / 0.4)"
        strokeWidth="1.5"
        strokeDasharray="6 4"
      />
      <line
        x1="240"
        y1="210"
        x2="380"
        y2="100"
        stroke="oklch(0.62 0.18 262 / 0.4)"
        strokeWidth="1.5"
        strokeDasharray="6 4"
      />
      <line
        x1="240"
        y1="210"
        x2="80"
        y2="290"
        stroke="oklch(0.62 0.18 262 / 0.4)"
        strokeWidth="1.5"
        strokeDasharray="6 4"
      />
      <line
        x1="240"
        y1="210"
        x2="400"
        y2="290"
        stroke="oklch(0.62 0.18 262 / 0.4)"
        strokeWidth="1.5"
        strokeDasharray="6 4"
      />
      <line
        x1="240"
        y1="210"
        x2="240"
        y2="60"
        stroke="oklch(0.62 0.18 262 / 0.4)"
        strokeWidth="1.5"
        strokeDasharray="6 4"
      />
      <line
        x1="100"
        y1="100"
        x2="80"
        y2="290"
        stroke="oklch(0.62 0.18 262 / 0.2)"
        strokeWidth="1"
      />
      <line
        x1="380"
        y1="100"
        x2="400"
        y2="290"
        stroke="oklch(0.62 0.18 262 / 0.2)"
        strokeWidth="1"
      />

      {/* Central node - HireNest hub */}
      <circle cx="240" cy="210" r="44" fill="oklch(var(--electric) / 0.2)" />
      <circle cx="240" cy="210" r="32" fill="oklch(0.50 0.20 262)" />
      <text
        x="240"
        y="206"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="700"
        fontFamily="sans-serif"
      >
        HIRE
      </text>
      <text
        x="240"
        y="220"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="700"
        fontFamily="sans-serif"
      >
        NEST
      </text>

      {/* Satellite nodes */}
      <circle
        cx="100"
        cy="100"
        r="28"
        fill="oklch(0.22 0.04 265)"
        stroke="oklch(0.62 0.18 262 / 0.5)"
        strokeWidth="1.5"
      />
      <text
        x="100"
        y="97"
        textAnchor="middle"
        fill="white"
        fontSize="9"
        fontFamily="sans-serif"
      >
        IT
      </text>
      <text
        x="100"
        y="109"
        textAnchor="middle"
        fill="oklch(0.75 0.15 262)"
        fontSize="8"
        fontFamily="sans-serif"
      >
        Staffing
      </text>

      <circle
        cx="380"
        cy="100"
        r="28"
        fill="oklch(0.22 0.04 265)"
        stroke="oklch(0.62 0.18 262 / 0.5)"
        strokeWidth="1.5"
      />
      <text
        x="380"
        y="97"
        textAnchor="middle"
        fill="white"
        fontSize="9"
        fontFamily="sans-serif"
      >
        AI &
      </text>
      <text
        x="380"
        y="109"
        textAnchor="middle"
        fill="oklch(0.75 0.15 262)"
        fontSize="8"
        fontFamily="sans-serif"
      >
        Data
      </text>

      <circle
        cx="240"
        cy="60"
        r="24"
        fill="oklch(0.22 0.04 265)"
        stroke="oklch(0.62 0.18 262 / 0.5)"
        strokeWidth="1.5"
      />
      <text
        x="240"
        y="58"
        textAnchor="middle"
        fill="white"
        fontSize="9"
        fontFamily="sans-serif"
      >
        Global
      </text>
      <text
        x="240"
        y="70"
        textAnchor="middle"
        fill="oklch(0.75 0.15 262)"
        fontSize="8"
        fontFamily="sans-serif"
      >
        Talent
      </text>

      <circle
        cx="80"
        cy="290"
        r="28"
        fill="oklch(0.22 0.04 265)"
        stroke="oklch(0.62 0.18 262 / 0.5)"
        strokeWidth="1.5"
      />
      <text
        x="80"
        y="287"
        textAnchor="middle"
        fill="white"
        fontSize="9"
        fontFamily="sans-serif"
      >
        Perm
      </text>
      <text
        x="80"
        y="299"
        textAnchor="middle"
        fill="oklch(0.75 0.15 262)"
        fontSize="8"
        fontFamily="sans-serif"
      >
        Hiring
      </text>

      <circle
        cx="400"
        cy="290"
        r="28"
        fill="oklch(0.22 0.04 265)"
        stroke="oklch(0.62 0.18 262 / 0.5)"
        strokeWidth="1.5"
      />
      <text
        x="400"
        y="287"
        textAnchor="middle"
        fill="white"
        fontSize="9"
        fontFamily="sans-serif"
      >
        Contract
      </text>
      <text
        x="400"
        y="299"
        textAnchor="middle"
        fill="oklch(0.75 0.15 262)"
        fontSize="8"
        fontFamily="sans-serif"
      >
        Staff
      </text>

      {/* Floating dots */}
      <circle cx="170" cy="150" r="4" fill="oklch(0.62 0.18 262 / 0.6)" />
      <circle cx="320" cy="155" r="3" fill="oklch(0.62 0.18 262 / 0.4)" />
      <circle cx="160" cy="270" r="3.5" fill="oklch(0.62 0.18 262 / 0.5)" />
      <circle cx="320" cy="265" r="4" fill="oklch(0.62 0.18 262 / 0.6)" />
      <circle cx="240" cy="350" r="5" fill="oklch(0.62 0.18 262 / 0.3)" />

      {/* Pulse rings on central node */}
      <circle
        cx="240"
        cy="210"
        r="56"
        stroke="oklch(0.62 0.18 262 / 0.15)"
        strokeWidth="1"
        fill="none"
      />
      <circle
        cx="240"
        cy="210"
        r="68"
        stroke="oklch(0.62 0.18 262 / 0.08)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
