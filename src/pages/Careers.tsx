import { useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Apply() {
  const { role } = useSearch({ from: "/apply" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [whyFit, setWhyFit] = useState(""); // ✅ NEW FIELD
  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // ==========================
    // ❌ VALIDATION (STRICT FILTER)
    // ==========================
    if (whyFit.length < 30) {
      alert("Please explain why you're a good fit (minimum 2–3 lines)");
      return;
    }

    setLoading(true);

    let resumeUrl = "";

    // ==========================
    // 📄 UPLOAD RESUME
    // ==========================
    if (resume) {
      const fileName = `${Date.now()}-${resume.name}`;

      const { error: uploadError } = await supabase.storage
        .from("Resumes")
        .upload(fileName, resume);

      if (uploadError) {
        console.error(uploadError);
        alert("Resume upload failed ❌");
        setLoading(false);
        return;
      }

      const { data } = await supabase.storage
        .from("Resumes")
        .getPublicUrl(fileName);

      resumeUrl = data.publicUrl;
    }

    // ==========================
    // 🤖 AI SCORING
    // ==========================
    let score = 0;
    let priority = "COLD";
    let status = "applied";

    if (resume) score += 30;

    if (whyFit.length > 50) score += 20;
    if (whyFit.length > 120) score += 20;

    if (whyFit.toLowerCase().includes("experience")) score += 10;
    if (whyFit.toLowerCase().includes("project")) score += 10;
    if (whyFit.toLowerCase().includes("impact")) score += 10;

    if (score >= 70) {
      priority = "HOT";
      status = "shortlisted";
    } else if (score >= 40) {
      priority = "WARM";
      status = "screening";
    }

    // ==========================
    // 💾 SAVE TO DATABASE
    // ==========================
    const { error: dbError } = await supabase
      .from("job_applications")
      .insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          role: role,
          resume_url: resumeUrl,
          candidate_response: whyFit,
          score: score,
          priority: priority,
          status: status,
        },
      ]);

    if (dbError) {
      console.error(dbError);
      alert("Error saving application ❌");
      setLoading(false);
      return;
    }

    // ==========================
    // 📩 SEND EMAIL
    // ==========================
    try {
      await fetch(
        "https://hjeukduwzdginoqjjgod.supabase.co/functions/v1/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "Job Application",
            data: {
              name: form.name,
              email: form.email,
              phone: form.phone,
              role: role,
              resumeUrl: resumeUrl,
              whyFit: whyFit, // ✅ IMPORTANT
            },
          }),
        }
      );
    } catch (err) {
      console.error("Email error:", err);
    }

    // ==========================
    // ✅ SUCCESS
    // ==========================
    alert(`🚀 Application submitted!\nScore: ${score} (${priority})`);

    setForm({ name: "", email: "", phone: "" });
    setWhyFit("");
    setResume(null);
    setFileName("");
    setLoading(false);
  };

  return (
    <div className="pt-[72px] p-6 max-w-xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Apply for {role}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* NAME */}
        <input
          placeholder="Name"
          className="w-full p-3 border rounded-md"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        {/* EMAIL */}
        <input
          placeholder="Email"
          type="email"
          className="w-full p-3 border rounded-md"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        {/* PHONE */}
        <input
          placeholder="Phone"
          className="w-full p-3 border rounded-md"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
          required
        />

        {/* WHY FIT */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Why are you a strong fit for this role? *
          </label>

          <textarea
            required
            rows={4}
            placeholder="Write 2–3 lines explaining your relevance, experience, and impact..."
            className="w-full p-3 border rounded-md"
            value={whyFit}
            onChange={(e) => setWhyFit(e.target.value)}
          />

          <p className="text-xs text-gray-400 mt-1">
            Shortlisted candidates always explain clearly.
          </p>
        </div>

        {/* FILE UPLOAD */}
        <div className="border p-3 rounded-md">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setResume(file);
                setFileName(file.name);
              }
            }}
            required
          />

          {fileName && (
            <p className="text-sm mt-2 text-green-600">
              Uploaded: {fileName}
            </p>
          )}
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Apply Now"}
        </button>

      </form>
    </div>
  );
}
