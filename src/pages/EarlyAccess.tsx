import { useState, useEffect, useCallback } from "react";
import { supabase } from "../lib/supabase";
import { validateEmail, isRoleBasedEmail } from "../utils/emailValidation"; // ← ANTI-SPAM IMPORT
import Layout from "../components/Layout";
import {
  Loader2,
  CheckCircle,
  Calendar,
  X,
  ArrowRight,
  User,
  Building2,
  Target,
  Sparkles,
  Mail,
  AlertTriangle,
} from "lucide-react";

export default function EarlyAccess() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [demoBooked, setDemoBooked] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  
  // ← ANTI-SPAM STATES
  const [emailError, setEmailError] = useState("");
  const [emailWarning, setEmailWarning] = useState("");

  const [form, setForm] = useState({
    role: "",
    goal: "",
    features: [],
    demo: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    industry: "",
  });

  const totalSteps = 5;

  useEffect(() => {
    setReferenceId(
      "HN-" + Math.random().toString(36).substr(2, 9).toUpperCase()
    );
  }, []);

  const updateForm = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // ← REAL-TIME EMAIL VALIDATION
  const handleEmailChange = useCallback((email: string) => {
    updateForm("email", email);
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
    // ← FINAL VALIDATION CHECK
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
      // ← CHECK FOR DUPLICATES (ANTI-SPAM)
      const { data: existing } = await supabase
        .from("early_access_leads")
        .select("id")
        .eq("email", form.email.toLowerCase().trim())
        .single();

      if (existing) {
        alert("This email is already registered. Please check your inbox or contact support.");
        setLoading(false);
        return;
      }

      let result;

      if (form.role === "Vendor") {
        result = await supabase.from("vendor_leads").insert([
          {
            company_name: form.company || "Not provided",
            contact_name: form.name,
            email: form.email.toLowerCase().trim(), // ← NORMALIZED
          },
        ]);
      } else if (form.role === "Client") {
        result = await supabase.from("client_leads").insert([
          {
            company_name: form.company || "Not provided",
            contact_name: form.name,
            email: form.email.toLowerCase().trim(), // ← NORMALIZED
          },
        ]);
      } else {
        result = await supabase.from("early_access_leads").insert([
          {
            name: form.name,
            email: form.email.toLowerCase().trim(), // ← NORMALIZED
            company: form.company || null,
            role: form.role,
            code: referenceId,
          },
        ]);
      }

      if (result.error) throw result.error;

      // Email trigger
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
                role: form.role,
                goal: form.goal,
                features: form.features?.join(", "),
                referenceId: referenceId,
                demo: form.demo,
              },
            }),
          }
        );
      } catch (err) {
        console.error("Email failed:", err);
      }

      setStep(6);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // SUCCESS SCREEN
  if (step === 6) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center text-white">
          <div className="text-center">
            <CheckCircle className="mx-auto mb-4 text-green-500" size={40} />
            <h2 className="text-2xl font-bold">You're In 🚀</h2>
            <p>Reference ID: {referenceId}</p>
          </div>
        </div>
      </Layout>
    );
  }

  // MAIN FORM WITH VALIDATION
  return (
    <Layout>
      <div className="p-10 text-white max-w-xl mx-auto">
        <h1 className="text-3xl mb-4 font-bold">Early Access</h1>
        
        {/* Progress bar */}
        <div className="mb-6">
          <div className="w-full bg-white/10 h-2 rounded-full">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">Step {step} of {totalSteps}</p>
        </div>

        {/* NAME */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
          <input
            placeholder="John Doe"
            value={form.name}
            onChange={(e) => updateForm("name", e.target.value)}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* EMAIL WITH ANTI-SPAM VALIDATION */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => handleEmailChange(e.target.value)} // ← VALIDATION TRIGGER
              className={`w-full p-3 pl-12 rounded-lg bg-white/10 border text-white placeholder-gray-500 focus:outline-none transition-colors ${
                emailError 
                  ? 'border-red-500 focus:border-red-500' 
                  : emailWarning 
                  ? 'border-amber-500 focus:border-amber-500' 
                  : 'border-white/20 focus:border-blue-500'
              }`}
            />
            {emailError && (
              <AlertTriangle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
            )}
          </div>
          
          {/* ERROR MESSAGE */}
          {emailError && (
            <div className="mt-2 flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              {emailError}
            </div>
          )}
          
          {/* WARNING MESSAGE */}
          {emailWarning && !emailError && (
            <div className="mt-2 flex items-center gap-2 text-amber-400 text-sm bg-amber-500/10 p-3 rounded-lg">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              {emailWarning}
            </div>
          )}
          
          <p className="mt-1 text-xs text-gray-500">
            No temporary emails (Mailinator, TempMail, etc.) allowed
          </p>
        </div>

        {/* COMPANY */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
          <input
            placeholder="Acme Inc."
            value={form.company}
            onChange={(e) => updateForm("company", e.target.value)}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* PHONE */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
          <input
            type="tel"
            placeholder="+1 234 567 890"
            value={form.phone}
            onChange={(e) => updateForm("phone", e.target.value)}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          onClick={handleSubmit}
          disabled={loading || !!emailError || !form.email}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:text-gray-500 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Application
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </Layout>
  );
}
