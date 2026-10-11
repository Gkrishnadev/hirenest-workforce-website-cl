import SEO from "../components/SEO";
import { useState } from "react";
import {
  CheckCircle2,
  Loader2,
  Building2,
  Briefcase,
  Code2,
  MapPin,
  Calendar,
  User,
  Mail,
  Clock,
  Phone,
} from "lucide-react";
import { toast } from "sonner";
import { addRecord } from "../lib/db";
import { sendFormEmails } from "../lib/sendFormEmails";
import { validateEmail } from "../utils/emailValidation";

export default function SubmitRequirement() {
  const [form, setForm] = useState({
    company: "",
    role: "",
    skills: "",
    location: "",
    engagementType: "",
    startDate: "",
    contactName: "",
    contactEmail: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailCheck = validateEmail(form.contactEmail);
    if (!emailCheck.valid) {
      toast.error(emailCheck.message);
      return;
    }

    if (!form.contactName?.trim() || !form.company?.trim() || !form.contactEmail?.trim()) {
      toast.error("Contact name, company, and email are required");
      return;
    }

    setSubmitting(true);

    const payload = {
      client_name: form.company,
      email: form.contactEmail,
      phone: "",
      role: form.role,
      skills: form.skills,
      experience: "",
      budget: "",
      description: `
Location: ${form.location}
Engagement: ${form.engagementType}
Start Date: ${form.startDate}
Contact Person: ${form.contactName}
      `,
    };

    try {
      await addRecord("requirement_submissions", payload);

      await sendFormEmails({
        title: "Requirement",
        name: form.contactName,
        email: form.contactEmail,
        subject: "HireNest — New Requirement Submission",
        message: [
          `Name: ${form.contactName}`,
          `Email: ${form.contactEmail}`,
          `Company: ${form.company}`,
          `Role: ${form.role}`,
          `Skills: ${form.skills}`,
          `Location: ${form.location}`,
          `Engagement: ${form.engagementType}`,
          `Start date: ${form.startDate}`,
        ].join("\n"),
      });

      setSuccess(true);
      toast.success("Requirement submitted! We'll match you within 24 hours.");

      setForm({
        company: "",
        role: "",
        skills: "",
        location: "",
        engagementType: "",
        startDate: "",
        contactName: "",
        contactEmail: "",
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
        title="Submit IT Project Requirement | HireNest Workforce"
        description="Submit your software development or IT consulting project requirements and our experts will design a customized technology solution."
        path="/submit-requirement"
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
              Talent Matching
            </span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">Submit a Requirement</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tell us the role you need. We match you with verified vendors and consultants within 24
            hours.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-16 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {success ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-10 text-center">
                  <CheckCircle2 className="w-14 h-14 mx-auto mb-4 text-green-400" />
                  <h3 className="font-bold text-white text-xl mb-2">Requirement Submitted!</h3>
                  <p className="text-gray-400">
                    We'll match talent and get back to you within 24 hours.
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
                        placeholder="Your company"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Role / Position *
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        required
                        placeholder="e.g. Senior React Developer"
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Skills Required
                    </label>
                    <div className="relative">
                      <Code2 className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                      <textarea
                        rows={3}
                        placeholder="e.g. React, Node.js, AWS..."
                        value={form.skills}
                        onChange={(e) => setForm({ ...form, skills: e.target.value })}
                        className={`${inputClass} pl-10 resize-none`}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          placeholder="City / Remote"
                          value={form.location}
                          onChange={(e) => setForm({ ...form, location: e.target.value })}
                          className={`${inputClass} pl-10`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Engagement Type
                      </label>
                      <select
                        value={form.engagementType}
                        onChange={(e) => setForm({ ...form, engagementType: e.target.value })}
                        className={`${inputClass} appearance-none`}
                      >
                        <option value="" className="bg-[#0B0F1A]">
                          Select type
                        </option>
                        <option value="Contract" className="bg-[#0B0F1A]">
                          Contract
                        </option>
                        <option value="C2H" className="bg-[#0B0F1A]">
                          Contract-to-Hire
                        </option>
                        <option value="Full-Time" className="bg-[#0B0F1A]">
                          Full-Time
                        </option>
                        <option value="Remote" className="bg-[#0B0F1A]">
                          Remote
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Start Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="date"
                        value={form.startDate}
                        onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-5 grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Contact Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          required
                          placeholder="Your name"
                          value={form.contactName}
                          onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                          className={`${inputClass} pl-10`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          required
                          type="email"
                          placeholder="you@company.com"
                          value={form.contactEmail}
                          onChange={(e) => setForm({ ...form, contactEmail: e.target.value })}
                          className={`${inputClass} pl-10`}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50"
                  >
                    {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                    {submitting ? "Submitting..." : "Submit Requirement"}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">Why HireNest?</h3>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> 120+ verified vendors
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> 500+ consultants
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> 24-hour talent matching
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> PAN India hiring
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <h3 className="text-white font-semibold mb-2">Contact Info</h3>
                {[
                  { icon: Mail, value: "info@hirenestworkforce.com" },
                  { icon: Phone, value: "+91 9392894748" },
                  { icon: MapPin, value: "Hyderabad, India" },
                  { icon: Clock, value: "Mon–Fri, 9AM–6PM" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <p className="text-gray-300 text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
