// src/pages/EarlyAccess.tsx
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import Layout from "../components/Layout";
import { Loader2, CheckCircle, Calendar, X, ArrowRight, User, Building2, Target, Sparkles } from "lucide-react";

export default function EarlyAccess() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [demoBooked, setDemoBooked] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const [form, setForm] = useState({
    role: "",
    goal: "",
    features: [] as string[],
    demo: "",
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const totalSteps = 5;

  const roles = [
    { title: "Client", desc: "Hire faster & better talent", icon: Building2 },
    { title: "Vendor", desc: "Get consistent requirements", icon: Target },
    { title: "Recruiter", desc: "Submit & track candidates", icon: User },
  ];

  const goals: Record<string, string[]> = {
    Client: ["Hire faster", "Get quality candidates", "Reduce hiring chaos"],
    Vendor: ["Get more requirements", "Submit candidates faster", "Increase closures"],
    Recruiter: ["Track candidates", "Improve submissions", "Close more roles"],
  };

  const features = [
    "AI Matching",
    "Vendor Network",
    "Pipeline Tracking",
    "Resume Scoring",
  ];

  // Generate reference ID on mount
  useEffect(() => {
    setReferenceId("HN-" + Math.random().toString(36).substr(2, 9).toUpperCase());
  }, []);

  const toggleFeature = (f: string) => {
    setForm((prev) => ({
      ...prev,
      features: prev.features.includes(f)
        ? prev.features.filter((x) => x !== f)
        : [...prev.features, f],
    }));
  };

  const updateForm = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((s) => Math.min(s + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        if (!form.role) {
          showToast("Please select your role", "error");
          return false;
        }
        return true;
      case 2:
        if (!form.goal) {
          showToast("Please select your goal", "error");
          return false;
        }
        return true;
      case 3:
        return true; // Features optional
      case 4:
        if (!form.demo) {
          showToast("Please select demo preference", "error");
          return false;
        }
        return true;
      case 5:
        if (!form.name || !form.email) {
          showToast("Please enter name and email", "error");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const showToast = (message: string, type: "success" | "error" = "success") => {
    // Simple toast implementation
    const toast = document.createElement("div");
    toast.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg text-white font-medium animate-fadeIn ${
      type === "error" ? "bg-red-500" : "bg-green-500"
    }`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  const handleDemoSelection = async (wantsDemo: boolean) => {
    updateForm("demo", wantsDemo ? "Yes" : "No");
    
    if (wantsDemo) {
      // Show calendar modal
      setShowCalendar(true);
    } else {
      // Skip to step 5
      setStep(5);
    }
  };

  const handleCalendarBooked = () => {
    setDemoBooked(true);
    setShowCalendar(false);
    setStep(5);
    showToast("Demo scheduled successfully!");
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setLoading(true);

    try {
      // Determine lead type based on role
      let tableName = "early_access_leads";
      if (form.role === "Vendor") tableName = "vendor_leads";
      else if (form.role === "Client") tableName = "client_leads";

      const leadData = {
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        company: form.company || null,
        role: form.role,
        source: "early_access_form",
        status: form.demo === "Yes" ? "demo_scheduled" : "new",
        lead_score: calculateLeadScore(),
        metadata: {
          goal: form.goal,
          features: form.features,
          demo_requested: form.demo === "Yes",
          demo_booked: demoBooked,
          reference_id: referenceId,
        },
        created_at: new Date().toISOString(),
      };

      const { error } = await supabase.from(tableName).insert([leadData]);

      if (error) throw error;

      // Success - move to success step
      setStep(6); // Success step
      
    } catch (error) {
      console.error("Submission error:", error);
      showToast("Failed to save. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const calculateLeadScore = () => {
    let score = 0;
    if (form.name) score += 10;
    if (form.email) score += 10;
    if (form.phone) score += 5;
    if (form.company) score += 10;
    if (form.demo === "Yes") score += 25;
    if (form.features.length > 0) score += 10;
    if (form.goal) score += 10;
    return score;
  };

  const progressPercent = (step / totalSteps) * 100;

  // Success Step
  if (step === 6) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">You're In! 🚀</h2>
            <p className="text-gray-300 mb-6">
              Thank you for joining our early access program. We'll contact you soon.
            </p>
            <div className="bg-white/5 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-400">Reference ID</p>
              <p className="text-xl font-mono text-cyan-400">{referenceId}</p>
            </div>
            {form.demo === "Yes" && (
              <p className="text-sm text-gray-400 mb-6">
                Check your email for demo confirmation.
              </p>
            )}
            <button
              onClick={() => window.location.href = "/"}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-12 px-4">
        <div className="max-w-2xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3">HireNest OS Early Access</h1>
            <p className="text-gray-300">Join our exclusive early access program</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
            
            {/* STEP 1: Role Selection */}
            {step === 1 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-6">Who are you?</h2>
                <div className="space-y-3">
                  {roles.map((r) => {
                    const Icon = r.icon;
                    const isSelected = form.role === r.title;
                    return (
                      <div
                        key={r.title}
                        onClick={() => {
                          updateForm("role", r.title);
                          setTimeout(nextStep, 200);
                        }}
                        className={`p-4 border rounded-xl cursor-pointer transition-all flex items-center gap-4 ${
                          isSelected
                            ? "border-cyan-500 bg-cyan-500/20"
                            : "border-white/20 hover:bg-white/10 hover:border-cyan-400"
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          isSelected ? "bg-cyan-500" : "bg-white/10"
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{r.title}</h3>
                          <p className="text-sm text-gray-400">{r.desc}</p>
                        </div>
                        {isSelected && <CheckCircle className="w-6 h-6 text-cyan-500 ml-auto" />}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: Goal Selection */}
            {step === 2 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-6">What's your main goal?</h2>
                <div className="space-y-3">
                  {goals[form.role]?.map((g) => {
                    const isSelected = form.goal === g;
                    return (
                      <div
                        key={g}
                        onClick={() => {
                          updateForm("goal", g);
                          setTimeout(nextStep, 200);
                        }}
                        className={`p-4 border rounded-xl cursor-pointer transition-all ${
                          isSelected
                            ? "border-cyan-500 bg-cyan-500/20"
                            : "border-white/20 hover:bg-white/10 hover:border-cyan-400"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Target className={`w-5 h-5 ${isSelected ? "text-cyan-400" : "text-gray-400"}`} />
                          <span className="font-medium">{g}</span>
                          {isSelected && <CheckCircle className="w-5 h-5 text-cyan-500 ml-auto" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button onClick={prevStep} className="mt-6 text-gray-400 hover:text-white">
                  ← Back
                </button>
              </div>
            )}

            {/* STEP 3: Features */}
            {step === 3 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-2">Select features you're interested in</h2>
                <p className="text-gray-400 mb-6">Choose all that apply</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {features.map((f) => {
                    const isSelected = form.features.includes(f);
                    return (
                      <button
                        key={f}
                        onClick={() => toggleFeature(f)}
                        className={`p-4 rounded-xl border transition-all text-left ${
                          isSelected
                            ? "border-cyan-500 bg-cyan-500/20"
                            : "border-white/20 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Sparkles className={`w-4 h-4 ${isSelected ? "text-cyan-400" : "text-gray-400"}`} />
                          <span>{f}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-between mt-8">
                  <button onClick={prevStep} className="text-gray-400 hover:text-white px-4 py-2">
                    ← Back
                  </button>
                  <button
                    onClick={nextStep}
                    className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Demo Booking - FIXED */}
            {step === 4 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-2">Would you like a demo?</h2>
                <p className="text-gray-400 mb-6">See HireNest in action with our team</p>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleDemoSelection(true)}
                    className={`p-6 border rounded-xl transition-all text-center ${
                      form.demo === "Yes"
                        ? "border-cyan-500 bg-cyan-500/20"
                        : "border-white/20 hover:bg-white/10 hover:border-cyan-400"
                    }`}
                  >
                    <Calendar className={`w-8 h-8 mx-auto mb-3 ${form.demo === "Yes" ? "text-cyan-400" : "text-gray-400"}`} />
                    <h3 className="font-semibold mb-1">Yes, Book Demo</h3>
                    <p className="text-sm text-gray-400">15-min call</p>
                  </button>

                  <button
                    onClick={() => handleDemoSelection(false)}
                    className={`p-6 border rounded-xl transition-all text-center ${
                      form.demo === "No"
                        ? "border-gray-500 bg-white/5"
                        : "border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <ArrowRight className={`w-8 h-8 mx-auto mb-3 ${form.demo === "No" ? "text-gray-300" : "text-gray-500"}`} />
                    <h3 className="font-semibold mb-1">No, Skip</h3>
                    <p className="text-sm text-gray-400">Get early access</p>
                  </button>
                </div>

                <div className="flex justify-between mt-8">
                  <button onClick={prevStep} className="text-gray-400 hover:text-white px-4 py-2">
                    ← Back
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: Contact Details - FIXED */}
            {step === 5 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-2">Almost there!</h2>
                <p className="text-gray-400 mb-6">Enter your details to complete</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => updateForm("name", e.target.value)}
                      className="w-full p-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Work Email *</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => updateForm("email", e.target.value)}
                      className="w-full p-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone (optional)</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => updateForm("phone", e.target.value)}
                      className="w-full p-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company (optional)</label>
                    <input
                      type="text"
                      placeholder="Acme Inc"
                      value={form.company}
                      onChange={(e) => updateForm("company", e.target.value)}
                      className="w-full p-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button onClick={prevStep} className="text-gray-400 hover:text-white px-4 py-2">
                    ← Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        Complete Application
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CALENDAR MODAL - FIXED */}
        {showCalendar && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-2xl w-full max-w-4xl p-6 relative shadow-2xl border border-white/10 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setShowCalendar(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-semibold mb-2">Book Your Demo Call</h3>
              <p className="text-sm text-gray-400 mb-4">
                Select a time that works for you • 15 minutes
              </p>

              <div className="bg-white rounded-lg overflow-hidden">
                <iframe
                  src={`https://cal.com/gopala-krishna-ergovq/hire-nest-demo?embed=true&name=${encodeURIComponent(
                    form.name || "Guest"
                  )}&email=${encodeURIComponent(
                    form.email || ""
                  )}&notes=${encodeURIComponent(
                    `Role: ${form.role} | Goal: ${form.goal} | Features: ${form.features.join(", ")}`
                  )}`}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  className="rounded-lg"
                  onLoad={() => {
                    // Listen for booking completion (simulated)
                    setTimeout(() => {
                      // In production, use Cal.com webhooks or embed API
                      // For now, user clicks "Done" below
                    }, 1000);
                  }}
                />
              </div>

              <div className="mt-4 flex justify-end gap-3">
                <button
                  onClick={() => setShowCalendar(false)}
                  className="px-6 py-2 text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCalendarBooked}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium"
                >
                  I've Booked My Slot
                </button>
              </div>
            </div>
          </div>
        )}

        {/* LOADING OVERLAY - FIXED */}
        {loading && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-2xl p-8 text-center border border-white/10">
              <Loader2 className="w-12 h-12 animate-spin text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Saving your application...</h3>
              <p className="text-gray-400">Please don't close this window</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
