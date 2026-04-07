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
    <div className="min-h-screen bg-[#0B0F1A]">
      {/* Hero - Premium Dark */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0F1A]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.15),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.1),_transparent_50%)]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">About Us</span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">
            About HireNest Workforce
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building a trusted network for technology workforce collaboration.
          </p>
        </div>
      </section>

      {/* About HireNest Intro - Dark Card */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              About HireNest
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                HireNest Workforce is building a trusted network that connects
                companies, staffing partners, and technology professionals.
              </p>
              <p>
                Our goal is to simplify how organizations discover the right talent
                and build reliable workforce partnerships.
              </p>
              <p>
                By bringing together experienced staffing vendors and skilled
                technology consultants, HireNest supports organizations in solving
                workforce challenges more efficiently while creating new
                opportunities across the global technology ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission - Gradient Card */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
            <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">Our Mission</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Our mission is to create a trusted network where companies and
            staffing partners can collaborate to deliver exceptional technology
            talent.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-4">
            HireNest focuses on helping organizations discover skilled
            professionals, build stronger partnerships, and navigate an evolving
            technology workforce landscape.
          </p>
        </div>
      </section>

      {/* What We Are Building */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-4">
                <span className="text-purple-400 text-sm font-semibold tracking-wide uppercase">What We Are Building</span>
              </div>
              <h2 className="text-3xl font-bold text-white">
                What We Are Building
              </h2>
            </div>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                HireNest is building a modern workforce network designed to support
                collaboration between organizations and staffing partners.
              </p>
              <p>
                Companies often face challenges accessing the right talent at the
                right time, while staffing partners and consultants seek meaningful
                opportunities to contribute their expertise.
              </p>
              <p>
                HireNest aims to bring these communities together through a trusted
                platform that supports transparency, collaboration, and long-term
                partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us - Value Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-4">
              <span className="text-green-400 text-sm font-semibold tracking-wide uppercase">What Drives Us</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.label}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <v.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">
                  {v.label}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6">
            <span className="text-orange-400 text-sm font-semibold tracking-wide uppercase">Leadership</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-12">
            Leadership
          </h2>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                GK
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Gopala Krishna
              </h3>
              <p className="text-cyan-400 font-medium">
                Founder & CEO
              </p>
              <div className="space-y-3 text-gray-300 max-w-xl leading-relaxed mt-4">
                <p>
                  HireNest was founded by Gopala Krishna with the vision of improving
                  how companies access and collaborate with technology talent.
                </p>
                <p>
                  Recognizing the growing complexity of workforce solutions, he
                  launched HireNest to help organizations and staffing partners
                  build stronger connections and work together more effectively.
                </p>
                <p>
                  Under his leadership, HireNest is focused on creating a trusted
                  workforce network that empowers companies, staffing partners, and
                  professionals to collaborate and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote - Gradient Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-[#0B0F1A] to-blue-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.1),_transparent_50%)]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-1 h-16 mx-auto mb-8 rounded-full bg-gradient-to-b from-cyan-500 to-blue-600" />
          <Quote className="w-12 h-12 mx-auto mb-6 text-cyan-500/50" />
          <blockquote className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-8 italic">
            "Our mission is to create a trusted network where companies
            and staffing partners can collaborate to solve workforce challenges
            faster."
          </blockquote>
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            — Gopala Krishna, Founder & CEO, HireNest Workforce
          </p>
        </div>
      </section>

      {/* Our Vision for the Future */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 mb-6">
            <span className="text-pink-400 text-sm font-semibold tracking-wide uppercase">The Future</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            Our Vision for the Future
          </h2>
          <div className="space-y-4 text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            <p>
              The future of workforce solutions will be built on collaboration.
            </p>
            <p>
              HireNest envisions a global ecosystem where companies, staffing
              partners, and technology professionals connect through trusted
              relationships and shared opportunities.
            </p>
            <p>
              As the technology landscape continues to evolve, HireNest aims to
              support organizations and partners in building stronger, more agile
              teams that drive innovation and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Join the HireNest Network CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-[#0B0F1A] to-blue-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.15),_transparent_50%)]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join the HireNest Network
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Whether you are a company seeking exceptional technology talent, a
              staffing partner looking to collaborate and expand opportunities,
              or a consultant exploring new career possibilities — HireNest
              provides a platform designed to support meaningful connections
              across the workforce ecosystem.
            </p>
          </div>

          {/* Two-column card layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: For Vendors & Partners */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
              <div>
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">
                  For Vendors & Partners
                </p>
                <h3 className="text-xl font-bold text-white leading-snug mb-4">
                  IT Staffing Collaboration Network & Vendor Network
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Join our growing network of IT staffing vendors and collaborate
                with companies to place qualified technology consultants faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/vendors" className="flex-1">
                  <button className="w-full text-white px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                    Join as Vendor
                  </button>
                </Link>
                <Link to="/submit-requirement" className="flex-1">
                  <button className="w-full text-white px-6 py-3 rounded-xl font-semibold border border-white/20 hover:bg-white/10 transition-all">
                    Post IT Requirement
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 2: For Clients */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
              <div>
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">
                  For Clients
                </p>
                <h3 className="text-xl font-bold text-white leading-snug mb-4">
                  Find Exceptional Talent
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Submit your IT staffing requirement and get connected with
                qualified vendors who can deliver the right technology talent
                for your projects.
              </p>
              <Link to="/submit-requirement">
                <button className="w-full text-white px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                  Submit IT Requirement
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
