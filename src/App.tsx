// src/pages/Home.jsx
import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  Code2,
  FileText,
  Users,
  Zap,
  Sparkles,
  Rocket,
  ChevronRight,
  X,
  CheckCircle,
  Cpu,
  Layers,
  Workflow,
  BarChart3,
  Globe,
  Network,
  TrendingUp,
  Star,
  Quote,
  Target,
  Clock,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Loader2,
  AlertCircle,
  User,
  Award,
  HeartHandshake,
  Lightbulb,
  LineChart,
  Settings,
  Database,
  MessageSquare,
  Menu,
  Share2,
  Briefcase,
  Shield,
} from "lucide-react";

// Services data
const services = [
  {
    icon: Code2,
    title: "Premium IT Staffing",
    desc: "Access elite software engineers, developers, and technical specialists. Pre-vetted talent delivered within 24 hours for critical projects.",
    color: "from-cyan-500 to-blue-600",
    stats: "500+ Developers",
  },
  {
    icon: Brain,
    title: "AI & Data Talent",
    desc: "Connect with top-tier AI/ML engineers and data scientists. Build your intelligent systems with the top 1% of global talent.",
    color: "from-purple-500 to-pink-600",
    stats: "200+ AI Experts",
  },
  {
    icon: FileText,
    title: "Contract Staffing",
    desc: "Flexible, premium workforce solutions for project-based needs. Scale your teams instantly without compromising on quality.",
    color: "from-orange-500 to-red-600",
    stats: "98% Retention",
  },
  {
    icon: Users,
    title: "Permanent Hiring",
    desc: "Find exceptional long-term talent that matches your technical and cultural requirements. 90-day guarantee on all placements.",
    color: "from-green-500 to-emerald-600",
    stats: "95% Success Rate",
  },
];

// How it works steps
const steps = [
  {
    n: "01",
    title: "Share Your Needs",
    desc: "Tell us about your requirements, team dynamics, and project goals. We listen first to understand your unique challenges.",
    icon: Briefcase,
  },
  {
    n: "02",
    title: "Get Matched",
    desc: "Our network of premium vendors and AI-powered matching identifies the perfect candidates for your specific needs.",
    icon: Network,
  },
  {
    n: "03",
    title: "Hire & Scale",
    desc: "Interview pre-vetted candidates and make hires with confidence. Scale your team faster than ever before.",
    icon: TrendingUp,
  },
];

// Why choose us cards
const whyCards = [
  {
    icon: Shield,
    title: "Premium Vetting",
    desc: "Every candidate undergoes rigorous technical and behavioral assessment before reaching you.",
  },
  {
    icon: Network,
    title: "Curated Network",
    desc: "Hand-picked staffing partners across every domain, verified and rated by performance.",
  },
  {
    icon: TrendingUp,
    title: "Faster Hiring",
    desc: "Cut your time-to-hire by up to 60% with our streamlined workflow and pre-vetted talent pool.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Access world-class talent from every corner of the globe, with local compliance handled.",
  },
];

// Testimonials
const testimonials = [
  {
    quote: "HireNest delivered a senior ML engineer within 10 days. Absolutely phenomenal speed and quality. Their network is unmatched.",
    name: "Sarah Chen",
    title: "VP of Engineering",
    company: "Arcline AI",
    image: "SC",
    color: "bg-gradient-to-br from-purple-500 to-pink-600",
  },
  {
    quote: "Their premium vendor network gave us access to talent we couldn't find anywhere else. The quality of candidates was exceptional.",
    name: "Marcus O'Brien",
    title: "CTO",
    company: "NovaPay Financial",
    image: "MO",
    color: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    quote: "We hired 3 senior developers in under 2 weeks. HireNest understands what premium staffing truly means.",
    name: "Priya Nair",
    title: "Head of Talent",
    company: "MedCore Health",
    image: "PN",
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
];

// Stats
const stats = [
  { number: "20+", label: "Enterprise Clients", suffix: "" },
  { number: "50+", label: "Placements Made", suffix: "" },
  { number: "95%", label: "Client Retention", suffix: "" },
  { number: "24h", label: "Avg. Time to Match", suffix: "" },
];

// OS Features
const osFeatures = [
  {
    icon: Cpu,
    title: "AI-Powered Matching",
    desc: "Smart algorithms that match requirements to candidates with 95% accuracy using NLP and machine learning.",
    stat: "95%",
    statLabel: "Match Rate",
  },
  {
    icon: Layers,
    title: "Unified Pipeline",
    desc: "Single dashboard for clients, vendors, and recruiters to collaborate seamlessly with real-time updates.",
    stat: "3x",
    statLabel: "Faster Hiring",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    desc: "From requirement posting to candidate onboarding, fully automated with smart triggers and notifications.",
    stat: "60%",
    statLabel: "Time Saved",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    desc: "Track hiring metrics, vendor performance, and market trends live with predictive insights.",
    stat: "24/7",
    statLabel: "Live Data",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B0F1A] font-sans selection:bg-cyan-500/30">
      {/* HERO SECTION - NO NAVBAR HERE */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[#0B0F1A]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.15),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.1),_transparent_50%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 z-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  Premium Workforce Solutions
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                HireNest{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Workforce
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 font-light">
                Premium Talent. Faster Hiring. Zero Compromise.
              </p>

              <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
                HireNest Workforce connects ambitious companies with exceptional technology talent through our curated network of premium staffing partners.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => navigate({ to: "/hire-developers-india" })}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-semibold text-white shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex items-center justify-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  <span>Hire Top Talent</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigate({ to: "/vendor-signup" })}
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  <Network className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Join Vendor Network</span>
                </button>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-white/10">
                <div className="flex -space-x-2 sm:-space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-[#0B0F1A] flex items-center justify-center text-xs text-white font-bold shadow-lg"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-xs sm:text-sm">
                  <span className="text-white font-semibold">500+ companies</span>
                  <span className="text-gray-500"> trust HireNest</span>
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-gray-400 text-xs ml-1">4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block perspective-1000">
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-[3rem] blur-3xl animate-pulse" />

              <div className="relative bg-[#0f1623]/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white font-semibold">Live Network</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">HireNest Workforce</span>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Senior React Developer", company: "TechCorp", match: "98%", status: "Just Matched" },
                    { name: "ML Engineer (Python)", company: "DataSys", match: "95%", status: "Interviewing" },
                    { name: "DevOps Lead", company: "CloudFirst", match: "92%", status: "Offer Stage" },
                  ].map((candidate, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                        {candidate.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-white font-semibold">{candidate.name}</div>
                        <div className="text-xs text-gray-400">{candidate.company} • {candidate.status}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-cyan-400 font-bold">{candidate.match}</div>
                        <div className="text-xs text-gray-500">match</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white font-semibold">Network Status</div>
                      <div className="text-xs text-gray-400">150+ vendors online</div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Active
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0F1A] to-transparent" />
      </section>

      {/* STATS BAR */}
      <section className="relative py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group cursor-default">
                <div className="relative inline-block">
                  <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-[#0B0F1A] to-gray-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                    {stat.number}
                  </span>
                </div>
                <div className="text-sm text-gray-500 mt-2 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-[0.2em]">Our Services</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4 tracking-tight">Premium Workforce Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end talent solutions designed for companies that refuse to compromise on quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative p-6 bg-white rounded-2xl border border-gray-200 hover:border-transparent transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative flex gap-6">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                        {service.title}
                      </h3>
                      <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                        {service.stats}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-3 text-sm">{service.desc}</p>
                    <button
                      onClick={() => navigate({ to: "/hire-developers-india" })}
                      className="inline-flex items-center text-cyan-600 font-semibold group-hover:gap-3 transition-all gap-2 text-sm"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.05),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-[0.2em]">Process</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4 tracking-tight">How HireNest Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps to building your dream team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full" />

            {steps.map((step) => (
              <div key={step.n} className="relative text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-cyan-500/30 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7" />
                </div>
                <div className="text-4xl font-bold text-gray-200 absolute top-0 left-1/2 -translate-x-1/2 -z-10">
                  {step.n}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-[0.2em]">Why Us</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4 tracking-tight">The HireNest Difference</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What makes us the preferred partner for premium workforce solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 text-center hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600">
                  <card.icon className="w-8 h-8 text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.05),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-[0.2em]">Testimonials</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4 tracking-tight">Trusted by Industry Leaders</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="group p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-cyan-200 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed text-base italic">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {t.image}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-base">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.title} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIRENEST OS SECTION */}
      <section className="py-20 bg-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.08),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">Technology Platform</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Powered by{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  HireNest OS
                </span>
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed">
                Behind HireNest Workforce is HireNest OS—the intelligent operating system that powers our premium matching.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {osFeatures.map((feature) => (
                  <div key={feature.title} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <feature.icon className="w-5 h-5 text-cyan-400" />
                      <span className="text-white font-semibold text-sm">{feature.title}</span>
                    </div>
                    <p className="text-gray-400 text-xs">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate({ to: "/early-access" })}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all hover:-translate-y-1"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Get Early Access to OS 2.0
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
                    <span className="text-gray-400 text-sm">HireNest OS Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Active Jobs", val: "24", trend: "+12%" },
                      { label: "Candidates", val: "156", trend: "+8%" },
                      { label: "Matches", val: "89%", trend: "+5%" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 rounded-xl p-3 border border-white/5">
                        <div className="text-xl font-bold text-cyan-400">{stat.val}</div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-[10px] text-gray-500 uppercase">{stat.label}</span>
                          <span className="text-[10px] text-green-400">{stat.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.15),_transparent_50%)]" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Dream Team?
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the companies that trust HireNest Workforce for their most critical hires.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate({ to: "/hire-developers-india" })}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all hover:-translate-y-1 flex items-center gap-3"
            >
              <Rocket className="w-6 h-6" />
              Start Hiring Now
            </button>
            <button
              onClick={() => navigate({ to: "/vendor-signup" })}
              className="px-8 py-4 rounded-2xl font-semibold text-lg text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all hover:-translate-y-1 flex items-center gap-3"
            >
              <Network className="w-6 h-6" />
              Join as Vendor
            </button>
          </div>
        </div>
      </section>

      {/* NO FOOTER HERE - App.tsx provides it */}
    </div>
  );
}
