import SEO from "../components/SEO";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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
  Sparkles,
  Rocket,
  Lock,
  ChevronRight,
  Play,
  X,
  CheckCircle,
  Cpu,
  Layers,
  Workflow,
  BarChart3,
  Clock,
  Target,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "IT Staffing",
    desc: "Highly skilled software engineers, developers, and technical specialists for short-term and long-term needs.",
  },
  {
    icon: Brain,
    title: "AI & Data Talent",
    desc: "Connect with professionals specializing in Artificial Intelligence, Machine Learning, and Data Engineering.",
  },
  {
    icon: FileText,
    title: "Contract Staffing",
    desc: "Flexible workforce solutions that allow businesses to scale teams quickly without long-term commitments.",
  },
  {
    icon: Users,
    title: "Permanent Hiring",
    desc: "Find long-term employees who match both technical and cultural requirements perfectly.",
  },
];

const steps = [
  {
    n: "01",
    title: "Join the Network",
    desc: "Register as a staffing vendor, consultant, or client on the HireNest collaboration platform.",
  },
  {
    n: "02",
    title: "Share & Connect",
    desc: "Post your open IT requirements or showcase your bench consultants to the partner network.",
  },
  {
    n: "03",
    title: "Collaborate & Grow",
    desc: "Connect with verified staffing vendors to accelerate placements and grow together.",
  },
];

const osFeatures = [
  {
    icon: Cpu,
    title: "AI-Powered Matching",
    desc: "Smart algorithms that match requirements to candidates with 95% accuracy",
  },
  {
    icon: Layers,
    title: "Unified Pipeline",
    desc: "Single dashboard for clients, vendors, and recruiters to collaborate seamlessly",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    desc: "From requirement posting to candidate onboarding, fully automated",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    desc: "Track hiring metrics, vendor performance, and market trends live",
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
    title: "AI-Powered Matching",
    desc: "Our AI engine matches requirements to the best candidates with precision.",
  },
  {
    icon: Network,
    title: "Curated Vendor Ecosystem",
    desc: "A hand-picked network of top staffing partners across every domain.",
  },
  {
    icon: TrendingUp,
    title: "Faster Hiring",
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
    quote: "HireNest delivered a senior ML engineer within 10 days. Absolutely phenomenal speed and quality.",
    name: "Sarah Chen",
    title: "VP of Engineering",
    company: "Arcline AI",
  },
  {
    quote: "Their vendor network gave us access to talent we couldn't find anywhere else. Game-changer for our fintech build-out.",
    name: "Marcus O'Brien",
    title: "CTO",
    company: "NovaPay Financial",
  },
  {
    quote: "The whole process was seamless. We hired 3 contract developers in under 2 weeks.",
    name: "Priya Nair",
    title: "Head of Talent",
    company: "MedCore Health",
  },
];

const stats = [
  { number: "120+", label: "Staffing Vendors" },
  { number: "500+", label: "Bench Consultants" },
  { number: "40+", label: "Active Requirements" },
  { number: "95%", label: "Match Accuracy" },
];

export default function Home() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", code: "" });
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("clients");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Early Access Request:", form);
    alert("Request submitted! We'll contact you soon.");
    setShowEarlyAccess(false);
    setForm({ name: "", email: "", company: "", code: "" });
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      <SEO
        title="HireNest Workforce | Hire Faster with HireNest OS"
        description="HireNest Workforce is a structured hiring platform powered by HireNest OS connecting clients, vendors, and recruiters."
        path="/"
      />

      {/* Floating OS Badge */}
      <div className="fixed top-24 right-6 z-40 hidden lg:block animate-bounce-slow">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-2xl border border-cyan-400/30 backdrop-blur-md flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-bold">HireNest OS v2.0 Coming Soon</span>
        </div>
      </div>

      {/* Navigation Spacer */}
      <div className="pt-[72px]" />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[#0B0F1A]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.15),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_40%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        </div>

        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              {/* OS Launch Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-cyan-400 text-sm font-semibold tracking-wide">
                  Workforce Operating System
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Hire Faster with{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  HireNest OS
                </span>
              </h1>

              <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                HireNest Workforce is not just a staffing company. It is a{" "}
                <span className="text-cyan-400 font-semibold">Workforce Operating System</span>{" "}
                that connects clients, vendors, and recruiters into one structured hiring pipeline.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3">
                {["AI Matching", "Real-time Pipeline", "Global Network", "24h Delivery"].map((feature) => (
                  <span key={feature} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => setShowEarlyAccess(true)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    Get Early Access
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <Link to="/vendors">
                  <button className="px-8 py-4 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                    <Network className="w-5 h-5" />
                    Join as Vendor
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-[#0B0F1A] flex items-center justify-center text-xs text-white font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p>Trusted by <span className="text-white font-semibold">500+ companies</span></p>
              </div>
            </div>

            {/* Right Visual - OS Interface Mockup */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl opacity-20 blur-2xl animate-pulse" />
              
              <div className="relative bg-[#0f1623] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Mock Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center text-xs text-gray-500 font-mono">HireNest OS Dashboard</div>
                </div>

                {/* Mock Content */}
                <div className="p-6 space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Active Jobs", val: "24", color: "cyan" },
                      { label: "Candidates", val: "156", color: "blue" },
                      { label: "Matches", val: "89%", color: "purple" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 rounded-lg p-3 border border-white/5">
                        <div className={`text-2xl font-bold text-${stat.color}-400`}>{stat.val}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Pipeline Visualization */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                      <span>Hiring Pipeline</span>
                      <span className="text-cyan-400">Live</span>
                    </div>
                    {[
                      { stage: "Sourcing", count: 45, width: "100%", color: "bg-cyan-500" },
                      { stage: "Screening", count: 28, width: "65%", color: "bg-blue-500" },
                      { stage: "Interview", count: 12, width: "35%", color: "bg-purple-500" },
                      { stage: "Offer", count: 5, width: "15%", color: "bg-green-500" },
                    ].map((item) => (
                      <div key={item.stage} className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 w-20">{item.stage}</span>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full ${item.color} rounded-full`} style={{ width: item.width }} />
                        </div>
                        <span className="text-xs text-white w-8 text-right">{item.count}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs text-gray-400">Recent Match</span>
                    </div>
                    <div className="text-sm text-white">Senior React Developer matched with TechCorp</div>
                    <div className="text-xs text-gray-500 mt-1">2 minutes ago • 98% match score</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-cyan-500 text-white p-3 rounded-xl shadow-xl animate-bounce-slow">
                <Zap className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-xl shadow-xl animate-bounce-slow" style={{ animationDelay: "1s" }}>
                <Brain className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#0B0F1A] to-gray-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 mt-2 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OS PREVIEW SECTION */}
      <section className="py-24 bg-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold">Coming Soon</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Introducing <span className="text-cyan-400">HireNest OS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The world's first operating system built specifically for workforce management. 
              Unify your hiring pipeline, vendors, and analytics in one powerful platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {osFeatures.map((feature, idx) => (
              <div key={feature.title} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Early Access CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="px-6 py-3">
                <span className="text-gray-400 text-sm">Be among the first to experience</span>
                <div className="text-white font-bold">HireNest OS Early Access</div>
              </div>
              <button
                onClick={() => setShowEarlyAccess(true)}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Request Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive talent solutions built for the speed and scale of modern business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                <div className="mt-6 flex items-center text-cyan-600 font-semibold group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">Process</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">How HireNest Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to start collaborating on the HireNest network.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />

            {steps.map((step, idx) => (
              <div key={step.n} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg shadow-cyan-500/30 relative z-10">
                  {step.n}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM SECTION */}
      <section className="py-24 bg-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_40%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">One Platform, Three Perspectives</h2>
            <p className="text-xl text-gray-400">HireNest OS serves everyone in the hiring ecosystem</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10">
              {["clients", "vendors", "recruiters"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-semibold capitalize transition-all ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {activeTab === "clients" && (
                <>
                  <h3 className="text-3xl font-bold text-white">For Companies & Clients</h3>
                  <p className="text-gray-400 text-lg">Post requirements once and reach multiple vendors instantly. Track everything in real-time.</p>
                  <ul className="space-y-3">
                    {["Single dashboard for all vendors", "AI-powered candidate ranking", "Automated interview scheduling", "Real-time pipeline visibility"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/submit-requirement">
                    <button className="mt-4 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2">
                      Post Requirement <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </>
              )}
              {activeTab === "vendors" && (
                <>
                  <h3 className="text-3xl font-bold text-white">For Staffing Vendors</h3>
                  <p className="text-gray-400 text-lg">Get real-time requirements and submit candidates faster. Grow your business with our network.</p>
                  <ul className="space-y-3">
                    {["Access to 500+ bench consultants", "Direct client connections", "Faster payment cycles", "Performance analytics"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/vendors">
                    <button className="mt-4 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2">
                      Join as Vendor <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </>
              )}
              {activeTab === "recruiters" && (
                <>
                  <h3 className="text-3xl font-bold text-white">For Recruiters</h3>
                  <p className="text-gray-400 text-lg">Track pipeline and improve closures efficiently with AI-assisted matching.</p>
                  <ul className="space-y-3">
                    {["Smart candidate matching", "Automated outreach", "Interview coordination", "Commission tracking"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setShowEarlyAccess(true)}
                    className="mt-4 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2"
                  >
                    Get Recruiter Access <ArrowRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl opacity-20 blur-2xl" />
              <div className="relative bg-[#0f1623] rounded-2xl border border-white/10 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-white font-semibold">Live Dashboard</span>
                  </div>
                  <span className="text-xs text-gray-500">HireNest OS</span>
                </div>
                
                {activeTab === "clients" && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                      <div>
                        <div className="text-white font-semibold">Senior React Developer</div>
                        <div className="text-xs text-gray-500">Posted 2 hours ago • 12 matches</div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">Active</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                      <div>
                        <div className="text-white font-semibold">ML Engineer</div>
                        <div className="text-xs text-gray-500">Posted 5 hours ago • 8 matches</div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">Reviewing</span>
                    </div>
                  </div>
                )}
                
                {activeTab === "vendors" && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                      <div className="text-3xl font-bold text-cyan-400">24</div>
                      <div className="text-xs text-gray-500">New Requirements</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                      <div className="text-3xl font-bold text-green-400">₹4.2L</div>
                      <div className="text-xs text-gray-500">This Month</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                      <div className="text-3xl font-bold text-purple-400">89%</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                      <div className="text-3xl font-bold text-blue-400">156</div>
                      <div className="text-xs text-gray-500">Active Consultants</div>
                    </div>
                  </div>
                )}
                
                {activeTab === "recruiters" && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600" />
                      <div className="flex-1">
                        <div className="text-white font-semibold">Rahul Sharma</div>
                        <div className="text-xs text-gray-500">98% match • React, Node.js</div>
                      </div>
                      <button className="px-3 py-1 rounded bg-cyan-500/20 text-cyan-400 text-xs">Contact</button>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-600" />
                      <div className="flex-1">
                        <div className="text-white font-semibold">Priya Patel</div>
                        <div className="text-xs text-gray-500">95% match • Python, ML</div>
                      </div>
                      <button className="px-3 py-1 rounded bg-cyan-500/20 text-cyan-400 text-xs">Contact</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">Advantages</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Why Choose HireNest</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to hire faster, smarter, and better.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card) => (
              <div key={card.title} className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <card.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-cyan-500/30 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-cyan-200 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.title} · {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8">
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold">Limited Early Access</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Hiring?
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join the HireNest OS early access program and be among the first to experience 
            the future of workforce management.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowEarlyAccess(true)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all hover:-translate-y-1 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Get Early Access
            </button>
            <Link to="/vendors">
              <button className="px-8 py-4 rounded-xl font-semibold text-lg text-white border border-white/20 hover:bg-white/10 transition-all hover:-translate-y-1">
                Join Vendor Network
              </button>
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            No credit card required • Free during beta • Cancel anytime
          </p>
        </div>
      </section>

      {/* EARLY ACCESS MODAL */}
      {showEarlyAccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-[#0f1623] rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-scale-in">
            {/* Header */}
            <div className="relative h-32 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Early Access</h3>
              </div>
              <button
                onClick={() => setShowEarlyAccess(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <div className="p-6 space-y-4">
              <p className="text-gray-400 text-center mb-6">
                Get exclusive access to HireNest OS before public launch
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Inc"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Early Access Code <span className="text-gray-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="XXXX-XXXX"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    value={form.code}
                    onChange={(e) => setForm({ ...form, code: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 mt-6"
                >
                  <Sparkles className="w-5 h-5" />
                  Request Access
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                By requesting access, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
