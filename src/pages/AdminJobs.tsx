import { useState, createElement } from "react";
import { addRecord } from "../lib/db";
import SEO from "../components/SEO";
import { useAdminAuth } from "../lib/useAdminAuth";

export default function AdminJobs() {
  const { user, loading: authLoading, login, loginWithGoogle } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginSubmitting, setLoginSubmitting] = useState(false);
  const [googleSubmitting, setGoogleSubmitting] = useState(false);

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

  alert("Job posted successfully");

  setForm({
    title: "",
    location: "",
    description: "",
  });
  } catch (err) {
    console.error(err);
    alert("Error posting job");
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
    setLoginError(err && err.message === "Access restricted to HireNest admins only." ? err.message : "Invalid email or password.");
  }
  setLoginSubmitting(false);
};

const handleGoogleLogin = async () => {
  setLoginError("");
  setGoogleSubmitting(true);
  try {
    await loginWithGoogle();
  } catch (err: any) {
    setLoginError(err && err.message === "Access restricted to HireNest admins only." ? err.message : "Google sign-in failed.");
  }
  setGoogleSubmitting(false);
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
                                     createElement("button", { type: "submit", disabled: loginSubmitting, className: "w-full px-6 py-3 bg-green-600 text-white rounded-md" }, loginSubmitting ? "Signing in..." : "Login")
                                     ),
                       createElement("div", { className: "flex items-center gap-3 my-4" },
                                     createElement("div", { className: "flex-1 h-px bg-gray-300" }),
                                     createElement("span", { className: "text-xs text-gray-500" }, "OR"),
                                     createElement("div", { className: "flex-1 h-px bg-gray-300" })
                                     ),
                       createElement("button", {
                         type: "button",
                         onClick: handleGoogleLogin,
                         disabled: googleSubmitting,
                         className: "w-full flex items-center justify-center gap-2 px-6 py-3 border rounded-md bg-white text-gray-700 font-medium"
                       },
                                     createElement("img", { src: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg", alt: "", className: "w-5 h-5" }),
                                     googleSubmitting ? "Signing in..." : "Sign in with Google"
                                     )
                       );
}

return createElement("div", { className: "pt-[72px] p-6" },
                     createElement(SEO, { title: "Post Job | HireNest", description: "Post new job openings", path: "/admin-jobs" }),
                     createElement("h1", { className: "text-3xl font-bold mb-6" }, "Post a Job"),
                     createElement("form", { onSubmit: handleSubmit, className: "space-y-4 max-w-xl" },
                                   createElement("input", { placeholder: "Job Title", className: "w-full p-3 border rounded-md", value: form.title, onChange: (e: any) => setForm({ ...form, title: e.target.value }), required: true }),
                                   createElement("input", { placeholder: "Location", className: "w-full p-3 border rounded-md", value: form.location, onChange: (e: any) => setForm({ ...form, location: e.target.value }), required: true }),
                                   createElement("textarea", { placeholder: "Job Description", className: "w-full p-3 border rounded-md", value: form.description, onChange: (e: any) => setForm({ ...form, description: e.target.value }), required: true }),
                                   createElement("button", { type: "submit", className: "px-6 py-3 bg-green-600 text-white rounded-md", disabled: loading }, loading ? "Posting..." : "Post Job")
                                   )
                     );
}
