import { useState, createElement } from "react";
import { addRecord } from "../lib/db";
import SEO from "../components/SEO";
import { useAdminAuth } from "../lib/useAdminAuth";

export default function AdminJobs() {
  const { user, loading: authLoading, login } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginSubmitting, setLoginSubmitting] = useState(false);
  
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

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoginError("");
    setLoginSubmitting(true);
    try {
      await login(email, password);
    } catch (err: any) {
      setLoginError("Invalid email or password.");
    }
    setLoginSubmitting(false);
  };

  if (authLoading) {
    return createElement("div", { className: "pt-[72px] p-6" }, createElement("p", null, "Loading..."));
  }

  if (!user) {
    return createElement("div", { className: "pt-[72px] p-6 max-w-sm mx-auto" },
                         createElement(SEO, { title: "Post Job | HireNest", description: "Post new job openings", path: "/admin-jobs" }),
                         createElement("h1", { className: "text-2xl font-bold mb-6" }, "Admin Login"),
                         createElement("form", { onSubmit: handleLogin, className: "space-y-4" },
                                       createElement("input", { type: "email", placeholder: "Email", className: "w-full p-3 border rounded-md", value: email, onChange: (e: any) => setEmail(e.target.value), required: true }),
                                       createElement("input", { type: "password", placeholder: "Password", className: "w-full p-3 border rounded-md", value: password, onChange: (e: any) => setPassword(e.target.value), required: true }),
                                       loginError ? createElement("p", { className: "text-red-600 text-sm" }, loginError) : null,
                                       createElement("button", { type: "submit", disabled: loginSubmitting, className: "px-6 py-3 bg-green-600 text-white rounded-md" }, loginSubmitting ? "Signing in..." : "Login")
                                       )
                         );
  }

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
