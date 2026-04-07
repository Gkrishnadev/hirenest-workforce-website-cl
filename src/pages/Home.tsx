// src/pages/Home.jsx
import { Link, useNavigate } from "@tanstack/react-router";
import { 
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  FileText,
  Globe,
  Layers,
  Menu,
  Network,
  Play,
  Rocket,
  Shield,
  Sparkles,
  Star,
  Target,
  Users,
  Workflow,
  X,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";

// OS Features - Platform capabilities, not services
const osCapabilities = [
  {
    icon: Cpu,
    title: "Intelligent Matching",
    desc: "AI-powered candidate ranking with 94% accuracy. Not keyword search—semantic understanding of skills, culture, and growth trajectory.",
    stat: "94%",
    statLabel: "Match Accuracy",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: Network,
    title: "Vendor Orchestration",
    desc: "One requirement, instant broadcast to curated vendors. Real-time coordination, duplicate elimination, and performance tracking.",
    stat: "10x",
    statLabel: "Faster Sourcing",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Layers,
    title: "Unified Pipeline",
    desc: "Single dashboard for all hiring channels: direct applicants, vendor submissions, and passive talent. One source of truth.",
    stat: "3x",
    statLabel: "Team Efficiency",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    desc: "From req to offer, automated. Interview scheduling, feedback collection, and approvals—no spreadsheets, no chaos.",
    stat: "60%",
    statLabel: "Time Saved",
    color: "from-green-500 to-emerald-600"
  }
];

// Who is this for - Three OS interfaces
const osInterfaces = [
  {
    icon: Building2,
    title: "For Companies",
    subtitle: "Client OS",
    desc: "Hire faster with intelligence. One platform, unlimited vendors, zero coordination overhead.",
    cta: "Start Hiring",
    href: "/hire-developers-india",
    features: ["AI candidate ranking", "Vendor performance analytics", "Automated workflows"]
  },
  {
    icon: Network,
    title: "For Vendors",
    subtitle: "Partner OS",
    desc: "Get consistent, qualified requirements. No more cold outreach. No more competing blindly.",
    cta: "Join Network",
    href: "/vendor-network",
    features: ["Qualified leads daily", "Direct client access", "Faster submissions"]
  },
  {
    icon: Users,
    title: "For Recruiters",
    subtitle: "Talent OS",
    desc: "Track everything. Submit smarter. Close faster with data-driven insights.",
    cta: "Access Platform",
    href: "/early-access",
    features: ["Candidate tracking", "Submission analytics", "Commission transparency"]
  }
];

// Social proof - Real metrics
const traction = [
  { number: "$2.4M", label: "Talent Placed", suffix: "" },
  { number: "94%", label: "Match Accuracy", suffix: "" },
  { number: "48h", label: "Avg. Time-to-Hire", suffix: "" },
  { number: "3x", label: "Faster vs Traditional", suffix: "" }
];

// Testimonials
const testimonials = [
  {
    quote: "We replaced 8 vendor relationships with HireNest OS. Same coverage, 10x less coordination overhead.",
    name: "Sarah Chen",
    title: "VP of Engineering",
    company: "Arcline AI",
    metric: "60% faster hiring"
  },
  {
    quote: "Finally, a platform that treats vendors as partners, not commodities. Qualified reqs, transparent process.",
    name: "Marcus O'Brien",
    title: "CEO",
    company: "NovaStaff Solutions",
    metric: "3x submission rate"
  },
  {
    quote: "The AI matching is scary good. It suggested candidates we would have missed entirely.",
    name: "Priya Nair",
    title: "Head of Talent",
    company: "MedCore Health",
    metric: "94% interview conversion"
  }
];

export default function Home() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white font-sans selection:bg-cyan-500/30">
      
      {/* HERO SECTION - OS Positioning */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[#0B0F1A]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.15),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.1),_transparent_50%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Value Prop */}
            <div className="space-y-8 z-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">
                  Now in Private Beta
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
                The operating system for{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  modern hiring
                </span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                HireNest OS coordinates companies, vendors, and talent in one intelligent platform. 
                Stop managing spreadsheets. Start running workforce acquisition like software.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate({ to: "/early-access" })}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-semibold text-white shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex items-center justify-center gap-3"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Get Early Access</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigate({ to: "/about" })}
                  className="px-8 py-4 rounded-2xl font-semibold text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  <span>See How It Works</span>
                </button>
              </div>

              {/* Trust Bar */}
              <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                <div className="flex -space-x-3">
                  {['A', 'B', 'C', 'D', 'E'].map((letter, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-[#0B0F1A] flex items-center justify-center text-sm text-white font-bold shadow-lg"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-white font-semibold ml-2">4.9/5</span>
                  </div>
                  <p className="text-sm text-gray-500">From 20+ beta customers</p>
                </div>
              </div>
            </div>

            {/* Right: OS Dashboard Preview */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-[3rem] blur-3xl animate-pulse" />
              
              <div className="relative bg-[#0f1623]/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">HireNest OS v2.0 — Dashboard</span>
                  <div className="w-16"></div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Active Reqs", val: "12", trend: "+3" },
                      { label: "Candidates", val: "48", trend: "+12" },
                      { label: "Match Score", val: "94%", trend: "+2%" }
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <div className="text-2xl font-bold text-cyan-400">{stat.val}</div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-[10px] text-gray-500 uppercase">{stat.label}</span>
                          <span className="text-[10px] text-green-400">↑ {stat.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Live Activity Feed */}
                  <div className="space-y-2">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Live Network Activity</div>
                    {[
                      { action: "New candidate match", detail: "Senior React Dev • 98% fit", time: "2m ago", type: "match" },
                      { action: "Vendor submission", detail: "NovaStaff • ML Engineer", time: "5m ago", type: "submit" },
                      { action: "Interview scheduled", detail: "TechCorp • DevOps Lead", time: "12m ago", type: "interview" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors">
                        <div className={`w-2 h-2 rounded-full ${
                          item.type === 'match' ? 'bg-green-500' : 
                          item.type === 'submit' ? 'bg-blue-500' : 'bg-purple-500'
                        } animate-pulse`} />
                        <div className="flex-1">
                          <div className="text-sm text-white font-medium">{item.action}</div>
                          <div className="text-xs text-gray-500">{item.detail}</div>
                        </div>
                        <div className="text-xs text-gray-600">{item.time}</div>
                      </div>
                    ))}
                  </div>

                  {/* AI Insight Banner */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20">
                    <div className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-cyan-400 mt-0.5" />
                      <div>
                        <div className="text-sm text-white font-medium">AI Insight</div>
                        <div className="text-xs text-gray-400 mt-1">
                          Based on your hiring patterns, we suggest expanding your vendor network 
                          to 3 partners specializing in Cloud/DevOps.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0F1A] to-transparent" />
      </section>

      {/* TRACTION BAR */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {traction.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-[#0B0F1A] to-gray-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 mt-2 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OS CAPABILITIES - Not Services, But Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-[0.2em]">Platform</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
              Workforce acquisition,<br />
              <span className="text-gray-500">rebuilt as software</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four core capabilities. One unified platform. Zero spreadsheets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {osCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-transparent transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative flex gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${cap.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <cap.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                        {cap.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{cap.desc}</p>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold bg-gradient-to-br from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        {cap.stat}
                      </span>
                      <span className="text-sm text-gray-500 uppercase tracking-wider">{cap.statLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE INTERFACES - Who Is This For */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-[0.2em]">Interfaces</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
              One OS. Three experiences.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Purpose-built interfaces for every stakeholder in the hiring ecosystem.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {osInterfaces.map((iface) => (
              <div
                key={iface.title}
                className="group relative p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 text-xs font-semibold uppercase tracking-wider mb-6">
                  {iface.subtitle}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <iface.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{iface.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{iface.desc}</p>

                <ul className="space-y-2 mb-8">
                  {iface.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate({ to: iface.href })}
                  className="w-full py-3 rounded-xl font-semibold text-cyan-600 border-2 border-cyan-500/30 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all flex items-center justify-center gap-2 group"
                >
                  {iface.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-[0.2em]">Proof</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              Built for operators,<br />
              loved by teams
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-cyan-500/30 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-semibold">
                    {t.metric}
                  </div>
                </div>

                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.title}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="py-24 bg-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.08),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                <Database className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">Technology</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                The infrastructure layer for{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  talent markets
                </span>
              </h2>

              <p className="text-xl text-gray-400 leading-relaxed">
                Behind every great hire is a mess of spreadsheets, emails, and coordination. 
                We're replacing that with APIs, intelligence, and automation.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Brain, text: "NLP-powered requirement parsing" },
                  { icon: Target, text: "Graph-based candidate matching" },
                  { icon: Zap, text: "Real-time vendor coordination" },
                  { icon: Shield, text: "Enterprise-grade compliance" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate({ to: "/about" })}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
              >
                Read The Vision
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2rem] opacity-20 blur-2xl" />
              <div className="relative bg-[#0f1623] rounded-3xl border border-white/10 p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-gray-400 text-sm">HireNest OS Architecture</span>
                  </div>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
                    ✓ Client OS API
                  </div>
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
                    ✓ Vendor OS API
                  </div>
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
                    ✓ Matching Engine v2.0
                  </div>
                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 animate-pulse">
                    → Deploying Talent OS...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.15),_transparent_50%)]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Stop hiring like it's 2010.
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join 20+ companies already running on HireNest OS. 
            Early access includes dedicated onboarding and lifetime preferred pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate({ to: "/early-access" })}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Rocket className="w-6 h-6" />
              Get Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate({ to: "/vendor-network" })}
              className="px-8 py-4 rounded-2xl font-semibold text-lg text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Network className="w-6 h-6" />
              Join as Vendor
            </button>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Limited to 100 companies for v2.0 launch. 80 spots remaining.
          </p>
        </div>
      </section>
    </div>
  );
}
