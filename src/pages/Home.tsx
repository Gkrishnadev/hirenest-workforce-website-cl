import SEO from "../components/SEO";
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
  Lock,
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
} from "lucide-react";

export default function Home() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [earlyAccessForm, setEarlyAccessForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "",
    code: "",
  });

  const captureEarlyAccessLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("early_access_leads").insert([
        {
          ...earlyAccessForm,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setSubmitStatus("success");
      setTimeout(() => {
        setShowEarlyAccess(false);
        setSubmitStatus("idle");
      }, 2000);
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      <SEO title="HireNest Workforce" description="Hire faster with HireNest OS" path="/" />

      {/* HERO */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-6xl font-bold">
          Hire Faster with{" "}
          <span className="text-cyan-400">HireNest OS</span>
        </h1>
        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          Workforce Operating System connecting clients, vendors, and recruiters in one intelligent hiring pipeline.
        </p>

        <button
          onClick={() => setShowEarlyAccess(true)}
          className="mt-8 px-8 py-4 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600"
        >
          Get Early Access
        </button>
      </section>

      {/* EARLY ACCESS MODAL */}
      {showEarlyAccess && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#0f1623] p-8 rounded-2xl w-full max-w-lg relative">
            
            <button
              onClick={() => setShowEarlyAccess(false)}
              className="absolute top-4 right-4"
            >
              <X />
            </button>

            {submitStatus === "success" ? (
              <div className="text-center">
                <CheckCircle className="text-green-400 mx-auto mb-4" />
                <p>You're on the list!</p>
              </div>
            ) : (
              <form onSubmit={captureEarlyAccessLead} className="space-y-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full p-3 bg-white/5 rounded-lg"
                  value={earlyAccessForm.name}
                  onChange={(e) =>
                    setEarlyAccessForm({ ...earlyAccessForm, name: e.target.value })
                  }
                />

                <input
                  type="email"
                  placeholder="Work Email"
                  required
                  className="w-full p-3 bg-white/5 rounded-lg"
                  value={earlyAccessForm.email}
                  onChange={(e) =>
                    setEarlyAccessForm({ ...earlyAccessForm, email: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Company"
                  required
                  className="w-full p-3 bg-white/5 rounded-lg"
                  value={earlyAccessForm.company}
                  onChange={(e) =>
                    setEarlyAccessForm({ ...earlyAccessForm, company: e.target.value })
                  }
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-3 bg-white/5 rounded-lg"
                  value={earlyAccessForm.phone}
                  onChange={(e) =>
                    setEarlyAccessForm({ ...earlyAccessForm, phone: e.target.value })
                  }
                />

                <select
                  required
                  className="w-full p-3 bg-white/5 rounded-lg"
                  value={earlyAccessForm.role}
                  onChange={(e) =>
                    setEarlyAccessForm({ ...earlyAccessForm, role: e.target.value })
                  }
                >
                  <option value="">Select Role</option>
                  <option value="client">Client</option>
                  <option value="vendor">Vendor</option>
                  <option value="recruiter">Recruiter</option>
                </select>

                <input
                  type="text"
                  placeholder="Early Access Code"
                  className="w-full p-3 bg-white/5 rounded-lg"
                  value={earlyAccessForm.code}
                  onChange={(e) =>
                    setEarlyAccessForm({ ...earlyAccessForm, code: e.target.value })
                  }
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-cyan-500 rounded-lg"
                >
                  {isSubmitting ? "Submitting..." : "Request Access"}
                </button>

                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong</p>
                )}
              </form>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500">
        © 2026 HireNest Workforce
      </footer>
    </div>
  );
}
