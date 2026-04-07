// src/pages/About.tsx - HireNest Workforce Primary Positioning
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
  ChevronRight,
  Target,
  Brain,
  Shield,
  Users,
  Building2,
  Layers,
  ExternalLink
} from "lucide-react";

const whyWeExist = [
  {
    icon: Target,
    title: "The Problem",
    desc: "Companies juggle 10+ vendors, candidates ghost interviews, and there's zero visibility into what's actually working. The 'solution' is always 'more recruiters'—but the problem is infrastructure.",
    color: "from-red-500 to-orange-600"
  },
  {
    icon: Brain,
    title: "Our Approach",
    desc: "HireNest Workforce combines experienced recruiting professionals with HireNest OS—a proprietary operating system built specifically for workforce management.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "The Result",
    desc: "Faster placements, better matches, and complete visibility into your hiring pipeline. Technology-enabled service, not software you have to learn.",
    color: "from-green-500 to-emerald-600"
  }
];

const osAdvantages = [
  {
    icon: Cpu,
    title: "Real-Time Pipeline Visibility",
    desc: "See candidate status instantly through HireNest OS. No more email chasing or status update meetings.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: Network,
    title: "AI-Powered Matching",
    desc: "Our algorithms rank candidates by fit, not just keywords. The more you use HireNest Workforce, the smarter it gets.",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Layers,
    title: "Unified Vendor Network",
    desc: "One dashboard, multiple verified staffing partners, zero fragmentation. We manage the complexity so you don't have to.",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Shield,
    title: "Data-Driven Insights",
    desc: "Track time-to-hire, source effectiveness, and quality metrics. Make decisions based on data, not gut feelings.",
    color: "from-green-500 to-emerald-600"
  }
];

const traction = [
  { metric: "500+", label: "Companies Trusting HireNest Workforce", suffix: "" },
  { metric: "$2.4M", label: "Talent Placed Value", suffix: "" },
  { metric: "94%", label: "Match Accuracy", suffix: "" },
  { metric: "48h", label: "Avg. Time-to-Hire", suffix: "" }
];

export default function About() {
  // Robust external link handler
  const handleExternalLink = (url: string) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-hidden">
      
      {/* HERO: HireNest Workforce Primary */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.2),_transparent_50%)]" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
                <Building2 className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">
                  About HireNest Workforce
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                Redefining How<br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Companies Build Teams
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-xl">
                We are a technology-first workforce solutions provider founded in 2026. 
                Our mission: connect ambitious companies with exceptional talent through 
                the perfect blend of human expertise and intelligent technology.
              </p>

              {/* OS Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-400">Powered by <span className="text-cyan-400 font-semibold">HireNest OS</span></span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/early-access"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
                >
                  <Play className="w-5 h-5" />
                  Start Hiring with HireNest
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

            {/* Visual: HireNest OS as the Engine */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-3xl blur-3xl" />
              <div className="relative bg-[#0f1623] rounded-3xl border border-white/10 p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    HireNest Workforce + HireNest OS
                  </div>
                </div>
                
                {/* Workforce Layer */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-600/5 border border-blue-500/30 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-blue-400">HireNest Workforce</span>
                    <span className="text-xs text-gray-500">Your Talent Partner</span>
                  </div>
                  <p className="text-xs text-gray-400">Expert recruiting team + Dedicated account management</p>
                </div>

                {/* Connection */}
                <div className="flex justify-center my-2">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
                </div>

                {/* OS Layer */}
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-400">AI Matching Engine</span>
                      <span className="text-xs text-green-400">Active</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-400">Vendor Network</span>
                      <span className="text-xs text-gray-500">50+ Partners</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-400">Analytics Dashboard</span>
                      <span className="text-xs text-gray-500">Real-time</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <p className="text-sm text-gray-400">
                    <span className="text-cyan-400 font-semibold">HireNest OS</span> is included with every partnership
                  </p>
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

      {/* WHY WE EXIST */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Built Out of Frustration
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyWeExist.map((item) => (
              <div 
                key={item.title}
                className="group p-8 rounded-2xl bg-[#0B0F1A] border border-white/10 hover:border-cyan-500/30 transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Traditional staffing relies on fragmented tools—spreadsheets, email threads, disconnected ATS systems. 
              We knew there had to be a better way. So we built <strong className="text-white">HireNest Workforce</strong> with <strong className="text-cyan-400">HireNest OS</strong> at its core.
            </p>
          </div>
        </div>
      </section>

      {/* THE HIRENEST OS ADVANTAGE */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Our Secret Weapon</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              The HireNest OS Difference
            </h2>
            <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
              Most staffing agencies use the same tools as everyone else. We built our own—and you get it included.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {osAdvantages.map((item) => (
              <div 
                key={item.title}
                className="group relative p-8 rounded-3xl bg-[#0B0F1A] border border-white/10 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 text-center">
            <p className="text-lg text-gray-300">
              <strong className="text-white">You do not buy HireNest OS.</strong> You get it automatically when you partner with HireNest Workforce.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
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
                
                {/* Social Links - FIXED */}
                <div className="flex justify-center gap-4 mt-6">
                  <button
                    onClick={() => handleExternalLink('https://www.linkedin.com/in/gopala-krishna-sathikela-venkata-668251255/')}
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition-colors cursor-pointer"
                    title="LinkedIn Profile"
                    type="button"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Direct Link Text */}
                <p className="text-center text-xs text-gray-500 mt-3">
                  Connect on{' '}
                  <a 
                    href="https://www.linkedin.com/in/gopala-krishna-sathikela-venkata-668251255/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    LinkedIn
                  </a>
                </p>
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
                  The "solution" was always "more recruiters." But the problem was not people—it was 
                  infrastructure. No operating system to coordinate demand and supply. No intelligence 
                  layer to learn from outcomes. No network effects to compound value.
                </p>

                <p>
                  So I built <strong className="text-white">HireNest Workforce</strong> with <strong className="text-cyan-400">HireNest OS</strong> at its core. 
                  Not software to sell, but technology to power better service. The result? 
                  Faster placements, better matches, and complete visibility for our clients.
                </p>

                <p className="text-cyan-400 font-medium">
                  We are not here to be another staffing vendor. We are here to prove that technology-enabled 
                  service is the future of workforce solutions.
                </p>
              </div>

              <blockquote className="mt-8 p-6 rounded-2xl bg-white/5 border-l-4 border-cyan-500">
                <Quote className="w-8 h-8 text-cyan-500/50 mb-2" />
                <p className="text-xl italic text-gray-300">
                  "The future of work is not about who you know. It is about what your workforce partner's OS knows."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-24 bg-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Our Mission</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
            Transforming How Companies<br />Build Teams
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            To create a world where every company has instant access to the talent they need to innovate and grow—
            delivered through the perfect combination of human expertise and intelligent technology.
          </p>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
            And where every professional finds opportunities that truly match their skills, aspirations, and potential.
          </p>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Our Journey</span>
            <h2 className="text-4xl font-bold mt-4">Building the Future of Workforce</h2>
          </div>

          <div className="space-y-8">
            {/* 2026 - Foundation */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold">✓</div>
              <div>
                <h3 className="text-xl font-bold text-white">2026 — Foundation</h3>
                <p className="text-gray-400 mt-1">HireNest Workforce founded. HireNest OS v1.0 built. First 50 client partnerships established.</p>
              </div>
            </div>

            {/* 2026 Q3 - Growth */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold">✓</div>
              <div>
                <h3 className="text-xl font-bold text-white">2026 Q3 — Network Expansion</h3>
                <p className="text-gray-400 mt-1">500+ companies trusting HireNest Workforce. 50+ vendor partners. AI matching engine v2.0 deployed.</p>
              </div>
            </div>

            {/* 2027 - Intelligence */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">→</div>
              <div>
                <h3 className="text-xl font-bold text-white">2027 — Intelligence Layer</h3>
                <p className="text-gray-400 mt-1">Predictive hiring analytics, automated sourcing pipelines, and advanced workforce planning tools.</p>
              </div>
            </div>

            {/* 2028 - Global */}
            <div className="flex gap-6 opacity-50">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 text-gray-500 flex items-center justify-center font-bold">○</div>
              <div>
                <h3 className="text-xl font-bold text-white">2028 — Global Expansion</h3>
                <p className="text-gray-400 mt-1">International compliance framework. Multi-currency support. Talent mobility across 50+ countries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-[#0B0F1A] to-blue-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.2),_transparent_50%)]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner with HireNest Workforce
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Whether you need to hire top talent, join our vendor network, or explore career opportunities—
            we are ready to help. HireNest OS included with every partnership.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/early-access"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all"
            >
              Start Hiring with HireNest
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:gopala@hirenestworkforce.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 rounded-2xl font-semibold hover:bg-white/5 transition-all"
            >
              Contact Our Team
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Currently serving 500+ companies • HireNest OS included • No software to buy
          </p>
        </div>
      </section>
    </div>
  );
}
