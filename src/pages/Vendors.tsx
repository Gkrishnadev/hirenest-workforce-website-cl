import SEO from "../components/SEO";
import { useState } from "react";
import {
  CheckCircle2,
  Loader2,
  Building2,
  User,
  Mail,
  Phone,
  Code2,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { addRecord } from "../lib/db";
import { sendFormEmails } from "../lib/sendFormEmails";
import { validateEmail } from "../utils/emailValidation";

export default function Vendors() {
  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    technologies: "",
    benchSize: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailCheck = validateEmail(form.email);
    if (!emailCheck.valid) {
      toast.error(emailCheck.message);
      return;
    }

    if (!form.contactPerson?.trim() || !form.companyName?.trim() || !form.email?.trim()) {
      toast.error("Name, company, and email are required");
      return;
    }

    setSubmitting(true);

    const payload = {
      company_name: form.companyName,
      contact_person: form.contactPerson,
      email: form.email,
      phone: form.phone || "",
      services: form.technologies,
      bench_size: form.benchSize || "",
    };

    try {
      await addRecord("vendor_applications", payload);

      await sendFormEmails({
        title: "Vendor",
        name: form.contactPerson,
        email: form.email,
        subject: "HireNest — New Vendor Network Application",
        message: [
          `Name: ${form.contactPerson}`,
          `Email: ${form.email}`,
          `Phone: ${form.phone || "—"}`,
          `Company: ${form.companyName}`,
          `Technologies / Services: ${form.technologies || "—"}`,
          `Bench size: ${form.benchSize || "—"}`,
        ].join("\n"),
      });

      setSubmitted(true);
      toast.success("Application submitted! We'll reach out within 24 hours.");

      setForm({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        technologies: "",
        benchSize: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors";

  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      <SEO
        title="Bench Consultants & IT Staffing | HireNest Workforce"
        description="Access highly skilled IT bench consultants and technology professionals for your software projects through the HireNest Workforce network."
        path="/vendors"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0F1A]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.15),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.1),_transparent_50%)]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">
              Vendor Network
            </span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">Join Vendor Network</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Share your bench, get matched with enterprise requirements, and grow with 120+ verified
            partners.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-10 text-center">
              <CheckCircle2 className="w-14 h-14 mx-auto mb-4 text-green-400" />
              <h3 className="font-bold text-white text-xl mb-2">Application Submitted!</h3>
              <p className="text-gray-400">
                We'll review your profile and reach out within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    required
                    placeholder="Your staffing company"
                    value={form.companyName}
                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Contact Person *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    required
                    placeholder="Full name"
                    value={form.contactPerson}
                    onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    required
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Technologies / Services
                </label>
                <div className="relative">
                  <Code2 className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <textarea
                    rows={3}
                    placeholder="e.g. React, Java, Salesforce, Cloud..."
                    value={form.technologies}
                    onChange={(e) => setForm({ ...form, technologies: e.target.value })}
                    className={`${inputClass} pl-10 resize-none`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Bench Size</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <select
                    value={form.benchSize}
                    onChange={(e) => setForm({ ...form, benchSize: e.target.value })}
                    className={`${inputClass} pl-10 appearance-none`}
                  >
                    <option value="" className="bg-[#0B0F1A]">
                      Select bench size
                    </option>
                    <option value="1-5" className="bg-[#0B0F1A]">
                      1–5
                    </option>
                    <option value="6-15" className="bg-[#0B0F1A]">
                      6–15
                    </option>
                    <option value="16-30" className="bg-[#0B0F1A]">
                      16–30
                    </option>
                    <option value="30-50" className="bg-[#0B0F1A]">
                      30–50
                    </option>
                    <option value="50+" className="bg-[#0B0F1A]">
                      50+
                    </option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50"
              >
                {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                {submitting ? "Submitting..." : "Apply Now"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By applying you agree to our{" "}
                <a href="/privacy" className="text-cyan-400 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
