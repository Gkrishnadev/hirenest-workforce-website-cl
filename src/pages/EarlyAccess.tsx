import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function EarlyAccess() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<any>({
    role: "",
    goal: "",
    features: [],
    demo: "",
    name: "",
    email: "",
  });

  const roles = [
    { title: "Client", desc: "Hire faster & better talent" },
    { title: "Vendor", desc: "Get consistent requirements" },
    { title: "Recruiter", desc: "Submit & track candidates" },
  ];

  const goals: any = {
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
    setForm((prev: any) => ({
      ...prev,
      features: prev.features.includes(f)
        ? prev.features.filter((x: string) => x !== f)
        : [...prev.features, f],
    }));
  };

  // ================================
  // 🚀 SUBMIT FUNCTION
  // ================================
  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      alert("Please enter name and email");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("leads").insert([
  {
    ...form,
    source: "form", // 👈 NORMAL LEAD
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

      alert("🚀 You're in! We’ll contact you soon.");
      setStep(1);
      setShowCalendar(false);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">

        {/* PROGRESS */}
        <div className="mb-6">
          <div className="w-full bg-white/10 h-2 rounded-full">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Step {step} of 5
          </p>
        </div>

        <h1 className="text-3xl font-bold mb-4">
          🚀 HireNest OS Early Access
        </h1>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <p className="mb-4">Who are you?</p>
            {roles.map((r) => (
              <div
                key={r.title}
                onClick={() => {
                  setForm({ ...form, role: r.title });
                  setStep(2);
                }}
                className="p-4 mb-3 border border-white/20 rounded-lg cursor-pointer hover:bg-white/10"
              >
                <b>{r.title}</b>
                <p className="text-sm text-gray-400">{r.desc}</p>
              </div>
            ))}
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <p className="mb-4">What do you want?</p>
            {goals[form.role].map((g: string) => (
              <div
                key={g}
                onClick={() => {
                  setForm({ ...form, goal: g });
                  setStep(3);
                }}
                className="p-3 mb-2 border border-white/20 rounded cursor-pointer hover:bg-white/10"
              >
                {g}
              </div>
            ))}
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <p className="mb-4">Select features</p>
            <div className="grid grid-cols-2 gap-3">
              {features.map((f) => (
                <button
                  key={f}
                  onClick={() => toggleFeature(f)}
                  className={`p-3 rounded border ${
                    form.features.includes(f)
                      ? "bg-blue-600"
                      : "border-white/20"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(4)}
              className="mt-6 w-full bg-blue-600 py-3 rounded"
            >
              Continue →
            </button>onc
          </>
        )}

        {/* STEP 4 (FIXED VALIDATION HERE) */}
        {step === 4 && (
          <>
            <p className="mb-4">Want a demo?</p>

            <div className="flex gap-4">
              <button
                onClick={async () => {
  if (!form.name || !form.email) {
    alert("Please enter name & email first");
    return;
  }

  setLoading(true);

  const { error } = await supabase.from("leads").insert([
    {
      ...form,
      demo: "Yes",
      source: "calendar",
    },
  ]);

  setLoading(false);

  if (error) {
    alert("Error saving lead ❌");
    return;
  }

  setForm({ ...form, demo: "Yes" });
  setShowCalendar(true);
  setStep(5); // ✅ MUST BE INSIDE FUNCTION
}}
                className="bg-black border border-white/20"
              >
                Yes
              </button>

              <button
                onClick={() => {
                  setForm({ ...form, demo: "No" });
                  setStep(5);
                }}
                className="flex-1 bg-white/10 py-3 rounded"
              >
                No
              </button>
            </div>
          </>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <>
            <input
  placeholder="Name"
  className="w-full p-3 mb-3 rounded-lg bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  onChange={(e) =>
    setForm({ ...form, name: e.target.value })
  }
/>

<input
  placeholder="Email"
  className="w-full p-3 mb-4 rounded-lg bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  onChange={(e) =>
    setForm({ ...form, email: e.target.value })
  }
/>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3 bg-blue-600 rounded"
            >
              {loading ? "Saving..." : "🚀 Join Now"}
            </button>
          </>
        )}

      </div>

      {/* 🔥 CALENDAR MODAL */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">

          <div className="bg-gray-900 rounded-2xl w-[95%] max-w-4xl p-4 relative shadow-2xl">

            <button
              onClick={() => setShowCalendar(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-2">
              Book Demo Call 🚀
            </h3>

            <p className="text-xs text-gray-400 mb-4">
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
  height="650"
  frameBorder="0"
/>
          </div>
        </div>
      )}
    </div>
  );
}
