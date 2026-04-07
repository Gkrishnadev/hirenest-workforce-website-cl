import SEO from "../components/SEO";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const technologies = [
  "React.js Developers",
  "Angular Developers",
  "Node.js Developers",
  "Java Developers",
  "Golang Developers",
  "DevOps Engineers",
  "AI/ML Engineers",
  "Gen AI Engineers",
  "LLM Fine-tuning Experts",
  "Data Scientists",
  "SQL DBA Developers",
  "QA Automation Engineers",
  "UI/UX Designers",
  "Android Developers",
  "React Native Developers",
  ".NET + Angular Developers",
  "MERN Stack Developers",
  "MEAN Stack Developers",
  "SAP Developers",
  "SAP HANA",
  "SAP ABAP",
  "Salesforce CPQ Experts"
];

const benefits = [
  { title: "120+ Vendors", desc: "Verified staffing partners" },
  { title: "500+ Consultants", desc: "Ready-to-deploy talent" },
  { title: "24-Hour Matching", desc: "Fast hiring turnaround" },
];

export default function HireDevelopers() {
  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      <SEO
        title="Hire Developers in India | IT Staffing Company | HireNest Workforce"
        description="Hire developers in India including React, Angular, Node.js, Java, DevOps, AI/ML, SAP, Salesforce and more Niche IT Hiring. HireNest is a leading IT staffing company in India delivering top tech talent fast."
        path="/hire-developers-india"
      />

      {/* Hero - Premium Dark */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0F1A]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.15),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.1),_transparent_50%)]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">IT Staffing India</span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">
            Hire Developers in India
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            HireNest Workforce is a leading <span className="text-cyan-400">IT staffing company in India</span> helping businesses 
            hire developers across technologies like React, Angular, Node.js, Java, 
            DevOps, AI/ML, SAP, Salesforce and more niche IT hiring through our trusted vendor network.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/submit-requirement">
              <button className="group px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2">
                Hire Developers
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/vendors">
              <button className="px-8 py-4 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 transition-all">
                Join Vendor Network
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack - Dark Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technologies We Cover
            </h2>
            <p className="text-gray-400">
              Access specialists across every major technology stack
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HireNest */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose HireNest Workforce
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              As a trusted <span className="text-cyan-400">IT recruitment agency in India</span>, HireNest connects companies 
              with pre-vetted developers through a powerful vendor network ensuring faster hiring and better quality.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all">
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-[#0B0F1A] to-blue-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.15),_transparent_50%)]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Hiring Today
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get matched with top developers within 24 hours.
          </p>
          <Link to="/submit-requirement">
            <button className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
              Submit Requirement
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
