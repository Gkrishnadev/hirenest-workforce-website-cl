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

  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    let resumeUrl = "";

    // =====================================================
    // ✅ 1. UPLOAD RESUME TO SUPABASE (UNCHANGED)
    // =====================================================
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

    // =====================================================
    // ✅ 2. SAVE TO DATABASE (UNCHANGED)
    // =====================================================
    const { error: dbError } = await supabase
      .from("job_applications")
      .insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          role: role,
          resume_url: resumeUrl,
        },
      ]);

    if (dbError) {
      console.error(dbError);
      alert("Error saving application ❌");
      setLoading(false);
      return;
    }

    // =====================================================
    // ✅ 3. SEND EMAIL (UPDATED - INTERNAL + CANDIDATE)
    // =====================================================
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
            },
          }),
        }
      );

      // ✅ NEW: Candidate Professional Email Trigger
      await fetch(
        "https://hjeukduwzdginoqjjgod.supabase.co/functions/v1/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "Candidate Confirmation",
            data: {
              name: form.name,
              email: form.email,
              role: role,
            },
          }),
        }
      );

    } catch (err) {
      console.error("Email error:", err);
    }

    // =====================================================
    // ✅ 4. SUCCESS UX (IMPROVED)
    // =====================================================
    alert("Application submitted 🚀 Check your email for next steps");

    setForm({ name: "", email: "", phone: "" });
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

        <input
          placeholder="Name"
          className="w-full p-3 border rounded-md"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

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

        <input
          placeholder="Phone"
          className="w-full p-3 border rounded-md"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
          required
        />

        {/* ✅ FILE INPUT */}
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

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition shadow-lg"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Apply Now"}
        </button>

      </form>
    </div>
  );
}
