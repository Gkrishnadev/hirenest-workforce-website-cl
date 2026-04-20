import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "../lib/supabase";
import { validateEmail, isRoleBasedEmail } from "../utils/emailValidation";
import Layout from "../components/Layout";
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
  Lock,
  Award,
  Phone,
  X,
  MessageSquare,
  Quote,
  Send
} from "lucide-react";

export default function EarlyAccess() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailWarning, setEmailWarning] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistError, setWaitlistError] = useState("");

  const rolesRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

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
        "Zero platform fees — pay only on success"
      ],
      painPoint: "Tired of managing 20+ vendor emails and spreadsheets?"
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
        "Get paid faster with automated invoicing"
      ],
      painPoint: "Chasing clients for feedback on your submissions?"
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
        "Community of 200+ independent recruiters"
      ],
      painPoint: "Working with 3 different ATS systems that don't talk?"
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
        "No placement fees — free for candidates forever"
      ],
      painPoint: "Applying to 100 jobs and never hearing back?"
    }
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
      color: "bg-blue-500"
    },
    {
      quote: "With HireNest OS, we finally have a single source of truth for all our hiring needs.",
      name: "Emily Carter",
      role: "Recruitment Manager",
      initial: "E",
      color: "bg-emerald-500"
    }
  ];

  const scrollToRoles = () => {
    rolesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToForm = () => {
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleEmailChange = useCallback((email: string) => {
    setForm(prev => ({ ...prev, email }));
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

  const handleWaitlistSubmit = async () => {
    const validation = validateEmail(waitlistEmail);
    if (!validation.valid) {
      setWaitlistError(validation.message);
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("waitlist").insert([{
        email: waitlistEmail.toLowerCase().trim(),
        source: "early_access_page",
        created_at: new Date().toISOString(),
      }]);

      if (error) throw error;
      
      alert("You're on the waitlist! We'll notify you when we launch.");
      setWaitlistEmail("");
      setWaitlistError("");
    } catch (error) {
      console.error(error);
      alert("Already registered or error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const selectRole = (roleId: string) => {
    setSelectedRole(roleId);
    setForm(prev => ({ ...prev, role: roleId }));
    setStep(2);
    scrollToForm();
  };

  const handleSubmit = async () => {
    const validation = validateEmail(form.email);
    if (!validation.valid) {
      setEmailError(validation.message);
      alert(validation.message);
      return;
    }
    if (!form.name || !form.email) {
      alert("Name & Email required");
      return;
    }

    setLoading(true);

    try {
      const { data: existing } = await supabase
        .from("early_access_leads")
        .select("id")
        .eq("email", form.email.toLowerCase().trim())
        .single();

      if (existing) {
        alert("This email is already registered. Check your inbox or contact support.");
        setLoading(false);
        return;
      }

      const result = await supabase.from("early_access_leads").insert([{
        name: form.name,
        email: form.email.toLowerCase().trim(),
        phone: form.phone || null,
        company: form.company || null,
        role: selectedRole,
        message: form.message || null,
        code: referenceId,
        source: "early_access_v2",
        created_at: new Date().toISOString(),
      }]);

      if (result.error) throw result.error;

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
              type: "Early Access",
              data: {
                name: form.name,
                email: form.email,
                phone: form.phone,
                company: form.company,
                role: selectedRole,
                referenceId: referenceId,
              },
            }),
          }
        );
      } catch (err) {
        console.error("Email failed:", err);
      }

      const waText = `🚀 EARLY ACCESS LEAD%0A%0ARole: ${selectedRole}%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone || 'N/A'}%0ACompany: ${form.company || 'N/A'}%0ARef: ${referenceId}`;
      window.open(`https://wa.me/919392894748?text=${waText}`, "_blank");

      setStep(3);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // SUCCESS SCREEN
  if (step === 3) {
    return (
      <Layout>
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
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
              <p className="text-2xl font-mono font-bold text-blue-400">{referenceId}</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-semibold mb-4 text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                What happens next?
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                  <span>We've received your application and will review it within 24 hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>You'll receive a verification email at <span className="text-white">{form.email}</span> shortly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Rocket className="w-5 h-5 text-violet-400 mt-0.5 shrink-0" />
                  <span>Once approved, you'll get platform credentials and a personalized onboarding session.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                  <span>Start transforming your hiring process with HireNest OS immediately.</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.href = "/"}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Back to Home
              </button>
              <button
                onClick={() => window.open("https://wa.me/919392894748", "_blank")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-slate-950 text-white">
        
        {/* HERO SECTION */}
        {step === 1 && (
          <div className="relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
            
            <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4" />
                Limited Early Access — 500 spots only
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                <span className="text-white">Transform Hiring</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Without the Chaos
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Unify clients, vendors, and recruiters into one efficient system. 
                No more spreadsheet juggling. No more lost candidates.
              </p>

              {/* MAIN CTA — Scrolls to Role Selection */}
              <button 
                onClick={scrollToRoles}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all inline-flex items-center gap-2 mb-16"
              >
                Transform Hiring Now
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Stats */}
              <div className="flex items-center justify-center gap-8 mb-20">
                {[
                  { initials: "DW", name: "Deepak W." },
                  { initials: "PG", name: "Priya G." },
                  { initials: "NK", name: "Naveen K." },
                  { initials: "LM", name: "Lisa M." },
                  { initials: "SM", name: "Sam T." },
                ].map((person, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-sm font-bold mb-2">
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
          </div>
        )}

        {/* WHY CHOOSE US */}
        {step === 1 && (
          <div className="max-w-6xl mx-auto px-6 pb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose HireNest OS</h2>
              <p className="text-gray-400">Everything you need to succeed, all in one place.</p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group">
                  <feature.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ROLE SELECTION — "Who Are You?" */}
        <div ref={rolesRef} className="max-w-6xl mx-auto px-6 pb-20">
          {step === 1 && (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Who Are You?</h2>
                <p className="text-gray-400">Select your role to get personalized early access</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => selectRole(role.id)}
                    className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-left hover:border-white/20 hover:scale-[1.02] overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${role.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                    
                    <div className="relative">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${role.color} mb-4`}>
                        <role.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="absolute top-0 right-0">
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10">
                          {role.stats}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-1">{role.title}</h3>
                      <p className="text-gray-400 mb-4">{role.subtitle}</p>
                      
                      <p className="text-sm text-blue-400 mb-4 italic">"{role.painPoint}"</p>

                      <ul className="space-y-2 mb-6">
                        {role.benefits.slice(0, 3).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      {/* THIS "Apply Now" GOES TO FORM FOR THIS SPECIFIC ROLE */}
                      <div className="flex items-center text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                        Apply as {role.title.split('/')[0].trim()}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* TESTIMONIALS */}
        {step === 1 && (
          <div className="max-w-4xl mx-auto px-6 pb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Founders Say</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <Quote className="w-8 h-8 text-blue-400 mb-4" />
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold`}>
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
          </div>
        )}

        {/* FAQ */}
        {step === 1 && (
          <div className="max-w-3xl mx-auto px-6 pb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400">Everything you need to know</p>
            </div>

            <div className="space-y-4">
              {[
                { q: "How does HireNest OS improve hiring speed?", a: "By streamlining workflows and using intelligent matching to connect candidates faster." },
                { q: "Can HireNest OS manage multiple vendors?", a: "Yes. Our platform is built specifically for multi-vendor environments with zero duplication." },
                { q: "How does the platform ensure better candidate quality?", a: "Structured screening and AI matching ensure better-fit profiles, not just keyword matches." },
                { q: "Is there real-time visibility into the hiring process?", a: "Absolutely. Track every stage from submission to offer in real-time." },
              ].map((faq, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WAITLIST CTA */}
        {step === 1 && (
          <div className="max-w-xl mx-auto px-6 pb-20 text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-violet-600/20 border border-blue-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Join Our Waitlist</h2>
              <p className="text-gray-400 mb-6">Be the first to know when we launch. Get exclusive early access.</p>
              
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={waitlistEmail}
                  onChange={(e) => {
                    setWaitlistEmail(e.target.value);
                    setWaitlistError("");
                  }}
                  className={`flex-1 p-4 rounded-xl bg-white/10 border text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    waitlistError ? 'border-red-500' : 'border-white/20 focus:border-blue-500'
                  }`}
                />
                <button 
                  onClick={handleWaitlistSubmit}
                  disabled={loading || !waitlistEmail}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white px-6 py-4 rounded-xl font-semibold transition-all flex items-center gap-2"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  Join
                </button>
              </div>
              {waitlistError && (
                <p className="mt-2 text-red-400 text-sm text-left">{waitlistError}</p>
              )}
              <p className="text-xs text-gray-500 mt-4">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </div>
        )}

        {/* FOOTER CTA */}
        {step === 1 && (
          <div className="bg-white/5 border-t border-white/10 py-16">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Revolutionize Your Hiring Today</h2>
              <p className="text-gray-400 mb-8">Join the many companies already benefiting from a unified hiring system.</p>
              <button 
                onClick={scrollToRoles}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all inline-flex items-center gap-2"
              >
                Transform Hiring Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* APPLICATION FORM — Pre-filled with selected role */}
        {step === 2 && (
          <div ref={formRef} className="max-w-xl mx-auto px-6 py-12">
            <button 
              onClick={() => setStep(1)} 
              className="text-gray-500 hover:text-white text-sm mb-8 flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to roles
            </button>

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4">
                {roles.find(r => r.id === selectedRole)?.icon && (
                  <div className="w-4 h-4">
                    {/* Icon would render here */}
                  </div>
                )}
                {roles.find(r => r.id === selectedRole)?.stats}
              </div>
              <h2 className="text-3xl font-bold mb-2">
                Apply as {roles.find(r => r.id === selectedRole)?.title}
              </h2>
              <p className="text-gray-400">
                Complete your application. We'll review and send credentials within 24 hours.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Business Email *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    className={`w-full p-4 pl-12 rounded-xl bg-white/5 border text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      emailError ? 'border-red-500 focus:border-red-500' : 
                      emailWarning ? 'border-amber-500 focus:border-amber-500' : 
                      'border-white/10 focus:border-blue-500'
                    }`}
                  />
                  {emailError && <AlertTriangle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />}
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
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 234 567 890"
                  value={form.phone}
                  onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company / Organization</label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  value={form.company}
                  onChange={(e) => setForm(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Why do you want to join? (Optional)</label>
                <textarea
                  placeholder="Tell us about your current hiring challenges..."
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading || !!emailError || !form.name || !form.email}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 disabled:from-gray-800 disabled:to-gray-800 disabled:text-gray-500 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 mt-4"
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

              <p className="text-xs text-gray-500 text-center">
                By applying, you agree to our Terms and Privacy Policy. No spam, ever.
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
