import { useState } from "react";
import { supabase } from "../lib/supabase";
import Layout from "../components/Layout";

export default function EarlyAccess() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    role: "",
    goal: "",
    features: [] as string[],
    demo: "",
    name: "",
    email: "",
  });

  const roles = [
    { title: "Client", desc: "Hire faster & better talent" },
    { title: "Vendor", desc: "Get consistent requirements" },
    { title: "Recruiter", desc: "Submit & track candidates" },
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

  const toggleFeature = (f: string) => {
    setForm((prev) => ({
      ...prev,
      features: prev.features.includes(f)
        ? prev.features.filter((x) => x !== f)
        : [...prev.features, f],
    }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      alert("Please enter name and email");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("leads").insert([
      {
        ...form,
        source: "form",
      },
    ]);

    if (error) {
      console.error(error);
      alert(error.message || "Error saving lead ❌");
    } else {
      window.open(
        `https://wa.me/919392894748?text=New Lead 🚀%0A${form.role}%0A${form.name}%0A${form.email}`,
        "_blank"
      );
      alert("🚀 You're in! We'll contact you soon.");
      setStep(1);
      setShowCalendar(false);
      setForm({ role: "", goal: "", features: [], demo: "", name: "", email: "" });
    }

    setLoading(false);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">

          {/* PROGRESS */}
          <div className="mb-6">
            <div className="w-full bg-white/10 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
            <p className="text-xs text-gray-300 mt-2">Step {step} of 5</p>
          </div>

          <h1 className="text-3xl font-bold mb-2">🚀 HireNest OS Early Access</h1>
          <p className="text-gray-300 mb-6">Join our exclusive early access program</p>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="animate-fadeIn">
              <p className="mb-4 text-lg">Who are you?</p>
              {roles.map((r) => (
                <div
                  key={r.title}
                  onClick={() => {
                    setForm({ ...form, role: r.title });
                    setStep(2);
                  }}
                  className="p-4 mb-3 border border-white/20 rounded-lg cursor-pointer hover:bg-white/10 transition-all hover:border-blue-400"
                >
                  <b className="text-lg">{r.title}</b>
                  <p className="text-sm text-gray-400">{r.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="animate-fadeIn">
              <p className="mb-4 text-lg">What do you want?</p>
              {goals[form.role]?.map((g) => (
                <div
                  key={g}
                  onClick={() => {
                    setForm({ ...form, goal: g });
                    setStep(3);
                  }}
                  className="p-4 mb-3 border border-white/20 rounded-lg cursor-pointer hover:bg-white/10 transition-all hover:border-blue-400"
                >
                  {g}
                </div>
              ))}
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="animate-fadeIn">
              <p className="mb-4 text-lg">Select features you're interested in:</p>
              <div className="grid grid-cols-2 gap-3">
                {features.map((f) => (
                  <button
                    key={f}
                    onClick={() => toggleFeature(f)}
                    className={`p-4 rounded-lg border transition-all ${
                      form.features.includes(f)
                        ? "bg-blue-600 border-blue-500"
                        : "border-white/20 hover:bg-white/5"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(4)}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg font-semibold transition-all"
              >
                Continue →
              </button>
            </div>
          )}

          {/* STEP 4 - FIXED */}
          {step === 4 && (
            <div className="animate-fadeIn">
              <p className="mb-4 text-lg">Want a demo?</p>
              <div className="flex gap-4">
                <button
                  onClick={async () => {
                    if (!form.name || !form.email) {
                      alert("Please enter name & email first");
                      return;
                    }
                    setLoading(true);
                    const { error } = await supabase.from("leads").insert([
                      { ...form, demo: "Yes", source: "calendar" },
                    ]);
                    setLoading(false);
                    if (error) {
                      alert("Error saving lead ❌");
                      return;
                    }
                    setForm({ ...form, demo: "Yes" });
                    setShowCalendar(true);
                    setStep(5);
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 py-4 rounded-lg font-semibold transition-all"
                >
                  Yes, Book Demo
                </button>

                <button
                  onClick={() => {
                    setForm({ ...form, demo: "No" });
                    setStep(5);
                  }}
                  className="flex-1 bg-white/10 hover:bg-white/20 py-4 rounded-lg font-semibold transition-all"
                >
                  No, Skip
                </button>
              </div>
            </div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <div className="animate-fadeIn">
              <p className="mb-4 text-lg">Almost there! Enter your details:</p>
              <input
                placeholder="Full Name"
                className="w-full p-4 mb-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                value={form.name}
              />

              <input
                placeholder="Work Email"
                type="email"
                className="w-full p-4 mb-6 rounded-lg bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
              />

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded-lg font-semibold transition-all"
              >
                {loading ? "Saving..." : "🚀 Join Early Access"}
              </button>
            </div>
          )}
        </div>

        {/* CALENDAR MODAL */}
        {showCalendar && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-2xl w-full max-w-4xl p-6 relative shadow-2xl border border-white/10">
              <button
                onClick={() => setShowCalendar(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
              >
                ✕
              </button>

              <h3 className="text-2xl font-semibold mb-2">Book Demo Call 🚀</h3>
              <p className="text-sm text-gray-400 mb-4">
                Takes 30 seconds • No signup required
              </p>

              <iframe
                src={`https://cal.com/gopala-krishna-ergovq/hire-nest-demo?embed=true&name=${encodeURIComponent(
                  form.name
                )}&email=${encodeURIComponent(
                  form.email
                )}&notes=${encodeURIComponent(
                  `Role: ${form.role} | Goal: ${form.goal} | Features: ${form.features.join(", ")}`
                )}`}
                width="100%"
                height="600"
                frameBorder="0"
                className="rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
