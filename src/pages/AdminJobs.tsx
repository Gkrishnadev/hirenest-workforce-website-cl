import { useState } from "react";
import { addRecord } from "../lib/db";
import SEO from "../components/SEO";

export default function AdminJobs() {
  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addRecord("jobs", {
        title: form.title,
        location: form.location,
        description: form.description,
      });

      alert("Job posted successfully 🚀");

      setForm({
        title: "",
        location: "",
        description: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error posting job ❌");
    }

    setLoading(false);
  };

  return (
    <div className="pt-[72px] p-6">

      <SEO
        title="Post Job | HireNest"
        description="Post new job openings"
        path="/admin-jobs"
      />

      <h1 className="text-3xl font-bold mb-6">
        ➕ Post a Job
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">

        <input
          placeholder="Job Title"
          className="w-full p-3 border rounded-md"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          required
        />

        <input
          placeholder="Location"
          className="w-full p-3 border rounded-md"
          value={form.location}
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
          required
        />

        <textarea
          placeholder="Job Description"
          className="w-full p-3 border rounded-md"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          required
        />

        <button
          type="submit"
          className="px-6 py-3 bg-green-600 text-white rounded-md"
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Job"}
        </button>

      </form>

    </div>
  );
}
