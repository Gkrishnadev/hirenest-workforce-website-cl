import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
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
} from "lucide-react";

export default function EarlyAccess() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [demoBooked, setDemoBooked] = useState(false);
  const [referenceId, setReferenceId] = useState("");

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

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      alert("Name & Email required");
      return;
    }

    setLoading(true);

    try {
      let result;

      if (form.role === "Vendor") {
        result = await supabase.from("vendor_leads").insert([
          {
            company_name: form.company || "Not provided",
            contact_name: form.name,
            email: form.email,
          },
        ]);
      } else if (form.role === "Client") {
        result = await supabase.from("client_leads").insert([
          {
            company_name: form.company || "Not provided",
            contact_name: form.name,
            email: form.email,
          },
        ]);
      } else {
        result = await supabase.from("early_access_leads").insert([
          {
            name: form.name,
            email: form.email,
            company: form.company || null,
            role: form.role,
            code: referenceId,
          },
        ]);
      }

      if (result.error) throw result.error;

      // ==============================
      // 🔥 EMAIL TRIGGER (FIXED)
      // ==============================
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

      // ✅ SUCCESS
      setStep(6);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ==============================
  // SUCCESS SCREEN
  // ==============================
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

  // ==============================
  // SIMPLE UI (NO CHANGE)
  // ==============================
  return (
    <Layout>
      <div className="p-10 text-white">
        <h1 className="text-3xl mb-4">Early Access</h1>

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => updateForm("name", e.target.value)}
          className="block mb-3 p-2 text-black"
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => updateForm("email", e.target.value)}
          className="block mb-3 p-2 text-black"
        />

        <input
          placeholder="Company"
          value={form.company}
          onChange={(e) => updateForm("company", e.target.value)}
          className="block mb-3 p-2 text-black"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 px-6 py-2 rounded"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </Layout>
  );
}
