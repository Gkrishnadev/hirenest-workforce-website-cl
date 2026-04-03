import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
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
  { number: "50+", label: "Enterprise Clients", suffix: "" },
  { number: "500+", label: "Placements Made", suffix: "" },
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

// Navigation items
const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Vendor Network", href: "/vendor-network" },
  { label: "Hire Developers", href: "/hire-developers-india" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

export default function Home() {
  // Modal states
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);
  const [showVendorSignup, setShowVendorSignup] = useState(false);
  const [showClientSignup, setShowClientSignup] = useState(false);
  const [activeTab, setActiveTab] = useState("clients");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form states
  const [earlyAccessForm, setEarlyAccessForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "",
    code: "",
  });

  const [vendorForm, setVendorForm] = useState({
    company_name: "",
    contact_name: "",
    email: "",
    phone: "",
    website: "",
    specialization: "",
    team_size: "",
  });

  const [clientForm, setClientForm] = useState({
    company_name: "",
    contact_name: "",
    email: "",
    phone: "",
    industry: "",
    hiring_needs: "",
    company_size: "",
  });

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Email notification function
  const sendNotification = async (type: string, data: any, formName: string) => {
    try {
      await fetch(
        "https://hjeukduwzdginoqjjgod.supabase.co/functions/v1/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "hirenest-secure-key-2026",
          },
          body: JSON.stringify({
            type,
            formName,
            data,
            timestamp: new Date().toISOString(),
            source: window.location.href,
          }),
        }
      );
    } catch (error) {
      console.error("Notification error:", error);
    }
  };

  // Early Access Form Submit - SENDS CONFIRMATION EMAIL
  const captureEarlyAccessLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { data, error } = await supabase
        .from("early_access_leads")
        .insert([
          {
            ...earlyAccessForm,
            source: "homepage_early_access_modal",
            utm_source: new URLSearchParams(window.location.search).get("utm_source") || "organic",
            created_at: new Date().toISOString(),
            status: "new",
            lead_score: calculateLeadScore(earlyAccessForm),
          },
        ])
        .select();

      if (error) throw error;

      // Send confirmation email notification
      await sendNotification("early_access", earlyAccessForm, "🚀 HireNest OS Early Access - Confirmation");

      setSubmitStatus("success");
      setTimeout(() => {
        setShowEarlyAccess(false);
        setEarlyAccessForm({ name: "", email: "", company: "", phone: "", role: "", code: "" });
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("Lead capture error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Vendor Form Submit
  const captureVendorLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { data, error } = await supabase
        .from("vendor_leads")
        .insert([
          {
            ...vendorForm,
            source: "homepage_vendor_signup",
            utm_source: new URLSearchParams(window.location.search).get("utm_source") || "organic",
            created_at: new Date().toISOString(),
            status: "pending_verification",
            lead_score: calculateVendorLeadScore(vendorForm),
          },
        ])
        .select();

      if (error) throw error;

      await sendNotification("vendor", vendorForm, "🤝 Vendor Network Application - HireNest Workforce");

      setSubmitStatus("success");
      setTimeout(() => {
        setShowVendorSignup(false);
        setVendorForm({
          company_name: "",
          contact_name: "",
          email: "",
          phone: "",
          website: "",
          specialization: "",
          team_size: "",
        });
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("Vendor lead capture error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Client Form Submit
  const captureClientLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { data, error } = await supabase
        .from("client_leads")
        .insert([
          {
            ...clientForm,
            source: "homepage_client_signup",
            utm_source: new URLSearchParams(window.location.search).get("utm_source") || "organic",
            created_at: new Date().toISOString(),
            status: "qualified",
            lead_score: calculateClientLeadScore(clientForm),
          },
        ])
        .select();

      if (error) throw error;

      await sendNotification("client", clientForm, "💼 Client Requirement - HireNest Workforce");

      setSubmitStatus("success");
      setTimeout(() => {
        setShowClientSignup(false);
        setClientForm({
          company_name: "",
          contact_name: "",
          email: "",
          phone: "",
          industry: "",
          hiring_needs: "",
          company_size: "",
        });
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("Client lead capture error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Lead scoring functions
  const calculateLeadScore = (form: any) => {
    let score = 0;
    if (form.company && form.company.length > 2) score += 20;
    if (form.email && !form.email.includes("gmail") && !form.email.includes("yahoo")) score += 25;
    if (form.phone && form.phone.length > 8) score += 15;
    if (form.role && form.role !== "") score += 20;
    if (form.code && form.code !== "") score += 20;
    return Math.min(100, score);
  };

  const calculateVendorLeadScore = (form: any) => {
    let score = 0;
    if (form.team_size && parseInt(form.team_size) > 10) score += 25;
    if (form.website && form.website.length > 5) score += 20;
    if (form.specialization?.includes("AI") || form.specialization?.includes("Data")) score += 25;
    if (form.email && !form.email.includes("gmail") && !form.email.includes("yahoo")) score += 15;
    if (form.company_name && form.company_name.length > 3) score += 15;
    return Math.min(100, score);
  };

  const calculateClientLeadScore = (form: any) => {
    let score = 0;
    if (form.company_size && parseInt(form.company_size) > 100) score += 30;
    if (form.hiring_needs && parseInt(form.hiring_needs) > 5) score += 25;
    if (form.industry?.includes("Technology") || form.industry?.includes("Finance")) score += 20;
    if (form.email && !form.email.includes("gmail") && !form.email.includes("yahoo")) score += 15;
    if (form.company_name && form.company_name.length > 3) score += 10;
    return Math.min(100, score);
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? "bg-[#0B0F1A] border-b border-white/10" : "bg-[#0B0F1A]/95 backdrop-blur-md"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <img 
                  src="/images/Logo.png" 
                  alt="HireNest" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white">HireNest</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Workforce</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setShowVendorSignup(true)}
                className="px-4 py-2 text-sm font-medium text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-all"
              >
                Join as Vendor
              </button>
              <button
                onClick={() => setShowEarlyAccess(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Hire Developers
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-20 bg-[#0B0F1A] border-b border-white/10 shadow-2xl">
            <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors text-base font-medium py-3 px-4 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setShowVendorSignup(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 text-sm font-medium text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-all"
                >
                  Join as Vendor
                </button>
                <button
                  onClick={() => {
                    setShowEarlyAccess(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg"
                >
                  Hire Developers
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 top-20"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* HIRENEST WORKFORCE HERO SECTION */}
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
                HireNest Workforce connects ambitious companies with exceptional technology talent through our curated network of premium staffing partners. We don't just fill positions—we build teams that drive innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => setShowClientSignup(true)}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-semibold text-white shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex items-center justify-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  <span>Hire Top Talent</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setShowVendorSignup(true)}
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
                      onClick={() => setShowClientSignup(true)}
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

      {/* HIRENEST OS SECTION - Technology Platform */}
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
                Behind HireNest Workforce is HireNest OS—the intelligent operating system that powers our premium matching. While you experience white-glove service, our AI works tirelessly to find your perfect match.
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
                onClick={() => setShowEarlyAccess(true)}
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

                  <div className="space-y-3">
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
              onClick={() => setShowClientSignup(true)}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all hover:-translate-y-1 flex items-center gap-3"
            >
              <Rocket className="w-6 h-6" />
              Start Hiring Now
            </button>
            <button
              onClick={() => setShowVendorSignup(true)}
              className="px-8 py-4 rounded-2xl font-semibold text-lg text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all hover:-translate-y-1 flex items-center gap-3"
            >
              <Network className="w-6 h-6" />
              Join as Vendor
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER - SINGLE INSTANCE WITH QUICK LINKS, FOR PARTNERS, CONTACT */}
      <footer id="contact" className="bg-[#0B0F1A] border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <img 
                    src="/images/Logo.png" 
                    alt="HireNest" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">HireNest</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Workforce</div>
                </div>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed mb-6 text-sm">
                Connecting world-class companies with elite talent through an intelligent network of trusted staffing partners.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/hirenest-workforce-pvt-ltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:info@hirenestworkforce.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About HireNest</Link></li>
                <li><Link to="/vendor-network" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Vendor Network</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Submit Requirement</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Bench Consultants</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>

            {/* For Partners */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">For Partners</h4>
              <ul className="space-y-3">
                <li><button onClick={() => setShowVendorSignup(true)} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm text-left">Partner With Us</button></li>
                <li><Link to="/vendor-network" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Vendor Onboarding</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Careers</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  info@hirenestworkforce.com
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  +91 9392894748
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span>Headquarters at Hyderabad<br />Telangana, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 HireNest Workforce. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* EARLY ACCESS MODAL - Sends Confirmation Email */}
      {showEarlyAccess && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#0f1623] rounded-3xl border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="relative h-36 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm border border-white/30">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">HireNest OS Early Access</h3>
              </div>
              <button
                onClick={() => setShowEarlyAccess(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors border border-white/30"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8">
              {submitStatus === "success" ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">You&apos;re on the list!</h4>
                  <p className="text-gray-400 text-sm">We&apos;ll send you a confirmation email with next steps.</p>
                </div>
              ) : (
                <form onSubmit={captureEarlyAccessLead} className="space-y-4">
                  <p className="text-gray-400 text-center mb-6 text-sm">
                    Be the first to experience HireNest OS 2.0. We&apos;ll send you a confirmation email with next steps.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                          value={earlyAccessForm.name}
                          onChange={(e) => setEarlyAccessForm({...earlyAccessForm, name: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Work Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                        <input
                          type="email"
                          required
                          placeholder="john@company.com"
                          className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                          value={earlyAccessForm.email}
                          onChange={(e) => setEarlyAccessForm({...earlyAccessForm, email: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Company *</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-3 w-4 h-4 text-gray-500"/>
                      <input
                        type="text"
                        required
                        placeholder="Your Company"
                        className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                        value={earlyAccessForm.company}
                        onChange={(e) => setEarlyAccessForm({...earlyAccessForm, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin"/>
                        Submitting…
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5"/>
                        Request Early Access
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    We&apos;ll send you a confirmation email. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* VENDOR SIGNUP MODAL */}
      {showVendorSignup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#0f1623] rounded-3xl border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="relative h-28 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <div className="text-center relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                  <Network className="w-7 h-7 text-white"/>
                </div>
                <h3 className="text-xl font-bold text-white">Join Vendor Network</h3>
              </div>
              <button
                onClick={() => setShowVendorSignup(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5"/>
              </button>
            </div>

            <div className="p-6">
              {submitStatus === "success" ? (
                <div className="text-center py-6">
                  <CheckCircle className="w-14 h-14 text-green-400 mx-auto mb-3"/>
                  <h4 className="text-lg font-bold text-white mb-2">Application Received!</h4>
                  <p className="text-gray-400 text-sm">We&apos;ll review and get back within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={captureVendorLead} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 text-sm"
                      value={vendorForm.company_name}
                      onChange={(e) => setVendorForm({...vendorForm, company_name: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Contact Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 text-sm"
                        value={vendorForm.contact_name}
                        onChange={(e) => setVendorForm({...vendorForm, contact_name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 text-sm"
                        value={vendorForm.email}
                        onChange={(e) => setVendorForm({...vendorForm, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50 text-sm"
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin"/> : "Submit Application"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CLIENT SIGNUP MODAL */}
      {showClientSignup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#0f1623] rounded-3xl border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="relative h-28 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <div className="text-center relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                  <Building2 className="w-7 h-7 text-white"/>
                </div>
                <h3 className="text-xl font-bold text-white">Hire Top Talent</h3>
              </div>
              <button
                onClick={() => setShowClientSignup(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5"/>
              </button>
            </div>

            <div className="p-6">
              {submitStatus === "success" ? (
                <div className="text-center py-6">
                  <CheckCircle className="w-14 h-14 text-green-400 mx-auto mb-3"/>
                  <h4 className="text-lg font-bold text-white mb-2">Request Submitted!</h4>
                  <p className="text-gray-400 text-sm">Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={captureClientLead} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 text-sm"
                      value={clientForm.company_name}
                      onChange={(e) => setClientForm({...clientForm, company_name: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Contact Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 text-sm"
                        value={clientForm.contact_name}
                        onChange={(e) => setClientForm({...clientForm, contact_name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 text-sm"
                        value={clientForm.email}
                        onChange={(e) => setClientForm({...clientForm, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50 text-sm"
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin"/> : "Submit Requirement"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
