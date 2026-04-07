// src/pages/About.jsx - TRANSFORMED
import { Link } from "@tanstack/react-router";
import { 
  Cpu, 
  Network, 
  Zap, 
  Globe, 
  ArrowRight, 
  Quote,
  Linkedin,
  Twitter,
  Github,
  Play,
  ChevronRight
} from "lucide-react";

const osPrinciples = [
  {
    icon: Cpu,
    title: "Unified Kernel",
    desc: "One operating system powering three distinct interfaces—Client OS, Vendor OS, and Talent OS—each optimized for their unique workflows.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: Network,
    title: "Network Effects",
    desc: "Every new company strengthens the vendor network. Every new vendor improves candidate matching. Exponential value, not linear scaling.",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Zap,
    title: "Intelligence Layer",
    desc: "AI isn't bolted on—it's the foundation. From requirement parsing to candidate ranking, decisions are data-driven, not gut-driven.",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Globe,
    title: "Global Native",
    desc: "Built for distributed teams from day one. Compliance, payroll, and contracts handled across 50+ countries automatically.",
    color: "from-green-500 to-emerald-600"
  }
];

const traction = [
  { metric: "$2.4M", label: "Talent Placed Value", suffix: "" },
  { metric: "94%", label: "Match Accuracy", suffix: "" },
  { metric: "48h", label: "Avg. Time to Hire", suffix: "" },
  { metric: "3x", label: "Faster vs Traditional", suffix: "" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-hidden">
      
      {/* HERO: The OS Vision */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.2),_transparent_50%)]" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">
                  Infrastructure for the Future of Work
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                We're not a staffing firm.
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  We're building the OS.
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-xl">
                HireNest Workforce is the operating system for modern talent acquisition. 
                While others broker resumes, we're architecting the infrastructure that 
                powers how companies and talent connect at scale.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/early-access"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
                >
                  <Play className="w-5 h-5" />
                  See OS Demo
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="#founder-story"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-2xl font-semibold hover:bg-white/5 transition-all"
                >
                  The Founder Story
                </a>
              </div>
            </div>

            {/* OS Architecture Visualization */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-3xl blur-3xl" />
              <div className="relative bg-[#0f1623] rounded-3xl border border-white/10 p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    HireNest OS v2.0
                  </div>
                </div>
                
                {/* Three OS Layers */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-600/5 border border-blue-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-blue-400">Client OS</span>
                      <span className="text-xs text-gray-500">Requirement Intelligence</span>
                    </div>
                    <div className="h-2 bg-blue-500/20 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-blue-500 rounded-full" />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-purple-600/5 border border-purple-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-purple-400">Vendor OS</span>
                      <span className="text-xs text-gray-500">Network Orchestration</span>
                    </div>
                    <div className="h-2 bg-purple-500/20 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-purple-500 rounded-full" />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-600/20 to-cyan-600/5 border border-cyan-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-cyan-400">Talent OS</span>
                      <span className="text-xs text-gray-500">Career Graph</span>
                    </div>
                    <div className="h-2 bg-cyan-500/20 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-cyan-500 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">AI Matching Engine</span>
                    <span className="text-green-400 font-semibold">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACTION BAR - Social Proof */}
      <section className="py-12 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {traction.map((t) => (
              <div key={t.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                  {t.metric}
                </div>
                <div className="text-sm text-gray-500 mt-1 uppercase tracking-wider">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROBLEM: Why OS, Why Now */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-400 text-sm font-semibold tracking-wider uppercase">The Problem</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Hiring is broken.<br />
              <span className="text-gray-500">We've accepted chaos as normal.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
              <div className="text-red-400 text-4xl font-bold mb-2">47 days</div>
              <p className="text-gray-400">Average time to hire in tech. Meanwhile, top candidates are off the market in 10 days.</p>
            </div>
            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
              <div className="text-red-400 text-4xl font-bold mb-2">$4,700</div>
              <p className="text-gray-400">Average cost per hire. Most companies spend 3x more due to inefficiency and churn.</p>
            </div>
            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
              <div className="text-red-400 text-4xl font-bold mb-2">10 vendors</div>
              <p className="text-gray-400">Average number of staffing partners per company. Zero coordination between them.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The future isn't more recruiters. It's better infrastructure. An operating system 
              that coordinates talent, demand, and supply in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* OS PRINCIPLES: What Makes Us Different */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Architecture</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Built like software.<br />
              Not a service.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {osPrinciples.map((p) => (
              <div 
                key={p.title}
                className="group relative p-8 rounded-3xl bg-[#0B0F1A] border border-white/10 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <p.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER STORY: The Vision */}
      <section id="founder-story" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            
            {/* Founder Image */}
            <div className="lg:col-span-2">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl opacity-30 blur-2xl" />
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500 to-blue-600">
                  <img 
                    src="images/founder.png" 
                    alt="Gopala Krishna - Founder & CEO, HireNest"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center text-white p-8">
                          <span class="text-8xl font-bold mb-4">GK</span>
                          <span class="text-lg opacity-80">Founder & CEO</span>
                        </div>
                      `;
                    }}
                  />
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-6">
                  <a href="https://www.linkedin.com/in/gopala-krishna-sathikela-venkata-668251255/" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                                  </div>
              </div>
            </div>

            {/* Founder Story */}
            <div className="lg:col-span-3">
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Founder & CEO</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Gopala Krishna
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  I spent 8 years in technology staffing, watching the same broken playbook repeat: 
                  companies juggling 10+ vendors, candidates ghosting interviews, and zero visibility 
                  into what was actually working.
                </p>
                
                <p>
                  The "solution" was always "more recruiters." But the problem wasn't people—it was 
                  infrastructure. No operating system to coordinate demand and supply. No intelligence 
                  layer to learn from outcomes. No network effects to compound value.
                </p>

                <p>
                  <strong className="text-white">HireNest OS</strong> is what I wish existed. An 
                  operating system that treats workforce acquisition as a software problem: 
                  automated, intelligent, and network-native.
                </p>

                <p className="text-cyan-400 font-medium">
                  We're not here to be another staffing vendor. We're here to make them all obsolete.
                </p>
              </div>

              <blockquote className="mt-8 p-6 rounded-2xl bg-white/5 border-l-4 border-cyan-500">
                <Quote className="w-8 h-8 text-cyan-500/50 mb-2" />
                <p className="text-xl italic text-gray-300">
                  "The future of work isn't about who you know. It's about what your OS knows."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP: Where We're Going */}
<section className="py-24 bg-white/5">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Roadmap</span>
      <h2 className="text-4xl font-bold mt-4">Building in public.</h2>
    </div>

    <div className="space-y-8">
      {/* v0.1 */}
      <div className="flex gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold">✓</div>
        <div>
          <h3 className="text-xl font-bold text-white">v0.1 — Foundation ✓</h3>
          <p className="text-gray-400 mt-1">Core platform live with enterprise data integrations. Building in public.</p>
        </div>
      </div>

      {/* v1.0 - REMOVED the duplicate <div className="space-y-8"> that was here */}
      <div className="flex gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold">✓</div>
        <div>
          <h3 className="text-xl font-bold text-white">v1.0 — Network Launch →</h3>
          <p className="text-gray-400 mt-1">MVP active: 50+ vendor partners onboarding. Matching engine in testing. Core network effects building.</p>
        </div>
      </div>

      {/* v2.0 */}
      <div className="flex gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">→</div>
        <div>
          <h3 className="text-xl font-bold text-white">v2.0 — Intelligence Layer ○</h3>
          <p className="text-gray-400 mt-1">AI-powered candidate ranking, predictive hiring analytics, and automated sourcing pipelines.</p>
        </div>
      </div>

      {/* v3.0 */}
      <div className="flex gap-6 opacity-50">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 text-gray-500 flex items-center justify-center font-bold">○</div>
        <div>
          <h3 className="text-xl font-bold text-white">v3.0 — Global Expansion ○</h3>
          <p className="text-gray-400 mt-1">International compliance framework. Multi-currency support. Talent mobility across 50+ countries.</p>
        </div>
      </div>
    </div>  {/* ← Only ONE closing div for space-y-8 */}
  </div>
</section>

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-[#0B0F1A] to-blue-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.2),_transparent_50%)]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the infrastructure revolution.
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Be among the first 100 companies to run on HireNest OS. 
            Early access includes white-glove onboarding and lifetime preferred pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/early-access"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:gopala@hirenestworkforce.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 rounded-2xl font-semibold hover:bg-white/5 transition-all"
            >
              Contact Founder Directly
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Currently serving 20+ companies. 80 spots remaining for v2.0 launch.
          </p>
        </div>
      </section>
    </div>
  );
}
