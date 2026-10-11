import SEO from "../components/SEO";
import { useState, useEffect, useCallback } from "react";
import { addRecord, findByField } from "../lib/db";
import { sendFormEmails } from "../lib/sendFormEmails";
import { validateEmail, isRoleBasedEmail } from "../utils/emailValidation";
import {
  Loader2,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Mail,
  AlertTriangle,
  Rocket,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Briefcase,
  Clock,
  Target,
  Sparkles,
  Building2,
  UserCircle,
  Laptop,
  ChevronRight,
  Star,
  BarChart3,
  Award,
  Phone,
  X,
  MessageSquare,
  Quote,
  XCircle,
} from "lucide-react";

export default function EarlyAccess() {
  const [showForm, setShowForm] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailWarning, setEmailWarning] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [form, setForm] = useState({
    role: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    setReferenceId("HN-" + Math.random().toString(36).substr(2, 9).toUpperCase());
  }, []);

  const roles = [
    {
      id: "client",
      title: "Hiring Manager / Enterprise",
      subtitle: "I need to hire top talent faster",
      icon: Building2,
      color: "from-emerald-500 to-teal-600",
      stats: "Reduce time-to-hire by 60%",
      benefits: [
        "Access 50+ verified vendor networks instantly",
        "AI-powered candidate matching (not keyword search)",
        "Single dashboard for all vendor submissions",
        "Bench talent pool with 48-hour availability",
        "Zero platform fees — pay only on success",
      ],
      painPoint: "Tired of managing 20+ vendor emails and spreadsheets?",
    },
    {
      id: "vendor",
      title: "Recruitment Agency / Vendor",
      subtitle: "I want consistent requirements",
      icon: Users,
      color: "from-blue-500 to-indigo-600",
      stats: "3x more client requirements",
      benefits: [
        "Direct access to Infosys, TCS, Wipro-type clients",
        "Real-time requirement feed (no middlemen)",
        "Commission protection & transparent tracking",
        "Submit candidates in 2 clicks, not 20 emails",
        "Get paid faster with automated invoicing",
      ],
      painPoint: "Chasing clients for feedback on your submissions?",
    },
    {
      id: "recruiter",
      title: "Independent Recruiter",
      subtitle: "I work solo / freelance",
      icon: UserCircle,
      color: "from-violet-500 to-purple-600",
      stats: "2x placement conversion",
      benefits: [
        "Free platform access — no subscription fees",
        "Direct client relationships (we don't block contact)",
        "Bench candidate management with AI scoring",
        "Pipeline tracking that actually works",
        "Community of 200+ independent recruiters",
      ],
      painPoint: "Working with 3 different ATS systems that don't talk?",
    },
    {
      id: "candidate",
      title: "Job Seeker / Talent",
      subtitle: "I'm looking for remote & fresher roles",
      icon: Laptop,
      color: "from-amber-500 to-orange-600",
      stats: "Profile seen by 50+ recruiters",
      benefits: [
        "Remote-first job opportunities (50+ countries)",
        "Fresher-friendly roles with training included",
        "One profile = visibility to all HireNest vendors",
        "AI resume scoring + improvement suggestions",
        "No placement fees — free for candidates forever",
      ],
      painPoint: "Applying to 100 jobs and never hearing back?",
    },
  ];

  const features = [
    { icon: Zap, title: "Faster Hiring Cycles", desc: "Reduce time-to-fill with streamlined workflows and intelligent matching." },
    { icon: Target, title: "Single Source of Truth", desc: "Centralize all requirements, candidates, and communications in one place." },
    { icon: Users, title: "Better Vendor Management", desc: "Work with multiple vendors without chaos or duplication." },
    { icon: Award, title: "Improved Candidate Quality", desc: "Structured screening and matching ensure better-fit profiles." },
    { icon: BarChart3, title: "Real-Time Visibility", desc: "Track every stage of the hiring pipeline instantly." },
    { icon: Shield, title: "Budget Control", desc: "Monitor and manage hiring costs across roles and vendors." },
    { icon: Clock, title: "Reduced Manual Work", desc: "Automate repetitive tasks and coordination efforts." },
    { icon: Briefcase, title: "Standardized Process", desc: "Consistent workflows across teams and roles." },
    { icon: TrendingUp, title: "Higher Accountability", desc: "Clear ownership for every requirement and submission." },
    { icon: Globe, title: "Scalability", desc: "Easily handle high-volume hiring without breaking processes." },
    { icon: MessageSquare, title: "Better Collaboration", desc: "Clients, vendors, and recruiters work in sync." },
    { icon: Sparkles, title: "Data-Driven Decisions", desc: "Insights and analytics to improve hiring outcomes." },
  ];

  const testimonials = [
    {
      quote: "HireNest OS transformed our recruitment process, making it faster and more efficient.",
      name: "Alex Johnson",
      role: "HR Director",
      initial: "A",
      color: "bg-blue-500",
    },
    {
      quote: "With HireNest OS, we finally have a single source of truth for all our hiring needs.",
      name: "Emily Carter",
      role: "Recruitment Manager",
      initial: "E",
      color: "bg-emerald-500",
    },
  ];

  const openForm = () => {
    setShowForm(true);
    setFormStep(1);
    document.body.style.overflow = "hidden";
  };

  const closeForm = () => {
    setShowForm(false);
    setFormStep(1);
    setSelectedRole("");
    setEmailError("");
    setEmailWarning("");
    document.body.style.overflow = "unset";
  };

  const selectRoleAndProceed = (roleId: string) => {
    setSelectedRole(roleId);
    setForm((prev) => ({ ...prev, role: roleId }));
    setFormStep(2);
  };

  const handleEmailChange = useCallback((email: string) => {
    setForm((prev) => ({ ...prev, email }));
    setEmailError("");
    setEmailWarning("");
    if (!email) return;
    const validation = validateEmail(email);
    if (!validation.valid) {
      setEmailError(validation.message);
      return;
    }
    if (isRoleBasedEmail(email)) {
      setEmailWarning("Role-based emails may delay verification. Personal email preferred.");
    }
  }, []);

  const handleSubmit = async () => {
    const validation = validateEmail(form.email);
    if (!validation.valid) {
      setEmailError(validation.message);
      return;
    }
    if (!form.name || !form.email) {
      return;
    }

    setLoading(true);
    try {
      const existing = await findByField(
        "early_access_leads",
        "email",
        form.email.toLowerCase().trim()
      );

      if (existing) {
        setEmailError("This email is already registered. Check your inbox or contact support.");
        setLoading(false);
        return;
      }

      await addRecord("early_access_leads", {
        name: form.name,
        email: form.email.toLowerCase().trim(),
        phone: form.phone || null,
        company: form.company || null,
        role: selectedRole,
        message: form.message || null,
        code: referenceId,
        source: "early_access_v2",
      });

      await sendFormEmails({
        title: "Early Access",
        name: form.name,
        email: form.email.toLowerCase().trim(),
        subject: "HireNest — New Early Access Signup",
        message: [
          `Name: ${form.name}`,
          `Email: ${form.email}`,
          `Phone: ${form.phone || "—"}`,
          `Company: ${form.company || "—"}`,
          `Role: ${selectedRole}`,
          `Ref: ${referenceId}`,
          `Message: ${form.message || "—"}`,
        ].join("\n"),
      });

      setFormStep(3);
    } catch (error) {
      console.error(error);
      setEmailError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Success screen (modal only — no second Layout/footer)
  if (showForm && formStep === 3) {
    return (
      <div className="fixed inset-0 bg-[#0B0F1A] z-50 overflow-y-auto">
        <SEO
          title="Early Access | HireNest OS"
          description="Get exclusive early access to our upcoming technology platforms and IT management tools at HireNest Workforce."
          path="/early-access"
        />
        <div className="min-h-screen flex items-center justify-center p-6 relative">
          <button
            onClick={closeForm}
            className="absolute top-6 right-6 text-gray-400 hover:text-white"
          >
            <XCircle className="w-8 h-8" />
          </button>

          <div className="max-w-lg w-full text-center">
            <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-emerald-400" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white">Application Received!</h2>
            <p className="text-gray-400 text-lg mb-2">
              Thank you for your interest in HireNest OS.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8">
              <p className="text-sm text-gray-500 mb-1">Your Reference ID</p>
              <p className="text-2xl font-mono font-bold text-cyan-400">{referenceId}</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-semibold mb-4 text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                What happens next?
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                  <span>We've received your application and will review it within 24 hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>
                    You'll receive a confirmation email at{" "}
                    <span className="text-white">{form.email}</span> shortly.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Rocket className="w-5 h-5 text-violet-400 mt-0.5 shrink-0" />
                  <span>
                    Once approved, you'll get platform credentials and a personalized onboarding
                    session.
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={closeForm}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Back to Page
              </button>
              <button
                onClick={() => window.open("https://wa.me/919392894748", "_blank")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      <SEO
        title="Early Access | HireNest OS"
        description="Get exclusive early access to our upcoming technology platforms and IT management tools at HireNest Workforce."
        path="/early-access"
      />

      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.12),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.1),_transparent_50%)]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8">
            <Star className="w-4 h-4" />
            Limited Early Access — 500 spots only
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white">Transform Hiring</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Without the Chaos
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Unify clients, vendors, and recruiters into one efficient system. No more spreadsheet
            juggling. No more lost candidates.
          </p>

          <button
            onClick={openForm}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all inline-flex items-center gap-2 mb-16"
          >
            Transform Hiring Now
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {[
              { initials: "DW", name: "Deepak W." },
              { initials: "PG", name: "Priya G." },
              { initials: "NK", name: "Naveen K." },
              { initials: "LM", name: "Lisa M." },
              { initials: "SM", name: "Sam T." },
            ].map((person, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-sm font-bold mb-2">
                  {person.initials}
                </div>
                <span className="text-xs text-gray-500">{person.name}</span>
              </div>
            ))}
            <div className="text-left">
              <p className="text-sm font-semibold text-white">Join 500+ early adopters</p>
              <p className="text-xs text-gray-500">Already on the waitlist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose HireNest OS</h2>
          <p className="text-gray-400">Everything you need to succeed, all in one place.</p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
            >
              <feature.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roles */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Built for Every Stakeholder</h2>
          <p className="text-gray-400">One platform. Multiple roles. Unified workflow.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((role) => (
            <div
              key={role.id}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${role.color} opacity-10 rounded-full blur-2xl`}
              />
              <div className="relative">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${role.color} mb-4`}
                >
                  <role.icon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-0 right-0">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10">
                    {role.stats}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{role.title}</h3>
                <p className="text-gray-400 mb-4">{role.subtitle}</p>
                <p className="text-sm text-cyan-400 mb-4 italic">"{role.painPoint}"</p>
                <ul className="space-y-2 mb-6">
                  {role.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openForm}
                  className="flex items-center text-cyan-400 font-semibold hover:translate-x-2 transition-transform"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Founders Say</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8">
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold`}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know</p>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "How does HireNest OS improve hiring speed?",
              a: "By streamlining workflows and using intelligent matching to connect candidates faster.",
            },
            {
              q: "Can HireNest OS manage multiple vendors?",
              a: "Yes. Our platform is built specifically for multi-vendor environments with zero duplication.",
            },
            {
              q: "How does the platform ensure better candidate quality?",
              a: "Structured screening and AI matching ensure better-fit profiles, not just keyword matches.",
            },
            {
              q: "Is there real-time visibility into the hiring process?",
              a: "Absolutely. Track every stage from submission to offer in real-time.",
            },
          ].map((faq, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-gray-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Single page CTA (site footer comes from App shell only — no Layout) */}
      <section className="border-t border-white/10 py-16 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Revolutionize Your Hiring Today</h2>
          <p className="text-gray-400 mb-8">
            Join companies already benefiting from a unified hiring system.
          </p>
          <button
            onClick={openForm}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all inline-flex items-center gap-2"
          >
            Transform Hiring Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Form modal */}
      {showForm && formStep < 3 && (
        <div className="fixed inset-0 bg-[#0B0F1A]/95 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen flex items-start justify-center p-6 pt-20">
            <div className="max-w-xl w-full bg-[#111827] border border-white/10 rounded-2xl p-8 relative">
              <button
                onClick={closeForm}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>Step {formStep} of 2</span>
                  <span>{formStep === 1 ? "Select Role" : "Your Details"}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500"
                    style={{ width: `${(formStep / 2) * 100}%` }}
                  />
                </div>
              </div>

              {formStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold mb-2">Select Your Role</h2>
                  <p className="text-gray-400 mb-6">Choose the option that best describes you</p>
                  <div className="space-y-3">
                    {roles.map((role) => (
                      <button
                        key={role.id}
                        onClick={() => selectRoleAndProceed(role.id)}
                        className={`w-full p-4 rounded-xl border text-left transition-all flex items-center gap-4 ${
                          selectedRole === role.id
                            ? "border-cyan-500 bg-cyan-500/10"
                            : "border-white/10 hover:bg-white/5"
                        }`}
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${role.color}`}>
                          <role.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">{role.title}</div>
                          <div className="text-sm text-gray-500">{role.subtitle}</div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-500" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {formStep === 2 && (
                <div>
                  <button
                    onClick={() => setFormStep(1)}
                    className="text-gray-500 hover:text-white text-sm mb-6 flex items-center gap-1"
                  >
                    <ArrowLeft className="w-4 h-4" /> Change role
                  </button>

                  <div className="mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-white/10 border border-white/10 text-gray-300">
                      {roles.find((r) => r.id === selectedRole)?.title}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">Complete Your Application</h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Business Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="email"
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={(e) => handleEmailChange(e.target.value)}
                          className={`w-full p-4 pl-12 rounded-xl bg-white/5 border text-white placeholder-gray-500 focus:outline-none transition-colors ${
                            emailError
                              ? "border-red-500 focus:border-red-500"
                              : emailWarning
                                ? "border-amber-500 focus:border-amber-500"
                                : "border-white/10 focus:border-cyan-500/50"
                          }`}
                        />
                        {emailError && (
                          <AlertTriangle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                        )}
                      </div>

                      {emailError && (
                        <div className="mt-2 flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg">
                          <X className="w-4 h-4 shrink-0" />
                          {emailError}
                        </div>
                      )}

                      {emailWarning && !emailError && (
                        <div className="mt-2 flex items-center gap-2 text-amber-400 text-sm bg-amber-500/10 p-3 rounded-lg">
                          <AlertTriangle className="w-4 h-4 shrink-0" />
                          {emailWarning}
                        </div>
                      )}

                      <p className="mt-1 text-xs text-gray-500">
                        No temporary emails allowed. We verify all applications.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Inc."
                        value={form.company}
                        onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
                        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Why do you want to join? (Optional)
                      </label>
                      <textarea
                        placeholder="Tell us about your current hiring challenges..."
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={loading || !!emailError || !form.name || !form.email}
                      className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 disabled:from-gray-800 disabled:to-gray-800 disabled:text-gray-500 disabled:shadow-none rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 mt-4"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Complete Application
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
