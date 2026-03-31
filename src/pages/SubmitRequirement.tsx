import SEO from "../components/SEO";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "../lib/supabase";

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

    const { error } = await supabase
      .from("requirement_submissions")
      .insert([payload]);

    if (error) {
      toast.error("Submission failed. Please try again.");
    } else {
      setSuccess(true);
      toast.success("Requirement submitted! We'll match you within 24 hours.");

      try {
        await fetch("https://hjeukduwzdginoqjjgod.supabase.co/functions/v1/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "Requirement Submission",
            data: {
              name: form.contactName,
              email: form.contactEmail,
              company: form.company,
              message: `
Role: ${form.role}
Skills: ${form.skills}
Location: ${form.location}
Engagement: ${form.engagementType}
Start Date: ${form.startDate}
              `,
            },
          }),
        });
      } catch (err) {
        console.error("Email failed:", err);
      }

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
    }

    setSubmitting(false);
  };

  return (
    <div>
      <SEO
        title="Submit IT Requirement | HireNest Workforce"
        description="Submit your IT staffing requirements and get matched with verified vendors across India within 24 hours."
        path="/submit-requirement"
      />

      <div className="pt-[72px]">

        {/* 🔥 HERO */}
        <section
          className="py-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.20 0.05 265) 100%)",
          }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Submit Your IT Requirement
          </h1>
          <p className="text-white/80">
            Get matched with top vendors within 24 hours 🚀
          </p>
        </section>

        {/* 🔥 FORM SECTION (CONTACT STYLE) */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">

            <div className="grid lg:grid-cols-2 gap-12">

              {/* LEFT - FORM */}
              <div className="bg-white p-8 rounded-xl shadow-sm border">

                {success ? (
                  <div className="text-center py-10">
                    <CheckCircle2 className="mx-auto mb-4 text-green-500" size={40} />
                    <h3 className="text-xl font-semibold mb-2">
                      Requirement Submitted!
                    </h3>
                    <p className="text-gray-600">
                      Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Company Name *"
                      className="w-full p-3 border rounded-md"
                    />

                    <input
                      required
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      placeholder="Role"
                      className="w-full p-3 border rounded-md"
                    />

                    <textarea
                      required
                      value={form.skills}
                      onChange={(e) => setForm({ ...form, skills: e.target.value })}
                      placeholder="Skills"
                      className="w-full p-3 border rounded-md"
                    />

                    <input
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      placeholder="Location"
                      className="w-full p-3 border rounded-md"
                    />

                    <input
                      value={form.engagementType}
                      onChange={(e) =>
                        setForm({ ...form, engagementType: e.target.value })
                      }
                      placeholder="Engagement Type"
                      className="w-full p-3 border rounded-md"
                    />

                    <input
                      value={form.startDate}
                      onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                      placeholder="Start Date"
                      className="w-full p-3 border rounded-md"
                    />

                    <input
                      value={form.contactName}
                      onChange={(e) =>
                        setForm({ ...form, contactName: e.target.value })
                      }
                      placeholder="Contact Name"
                      className="w-full p-3 border rounded-md"
                    />

                    <input
                      required
                      value={form.contactEmail}
                      onChange={(e) =>
                        setForm({ ...form, contactEmail: e.target.value })
                      }
                      placeholder="Email Address *"
                      className="w-full p-3 border rounded-md"
                    />

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 rounded-md text-white font-semibold flex items-center justify-center gap-2"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(var(--electric)), oklch(0.60 0.20 262))",
                      }}
                    >
                      {submitting && <Loader2 className="animate-spin" size={18} />}
                      {submitting ? "Submitting..." : "Submit Requirement"}
                    </button>

                  </form>
                )}
              </div>

              {/* RIGHT - INFO */}
              <div className="space-y-6">

                <div className="bg-white p-6 rounded-xl border shadow-sm">
                  <h3 className="font-semibold mb-2">Why HireNest?</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>✔ 120+ Verified Vendors</li>
                    <li>✔ 500+ Consultants</li>
                    <li>✔ 24-hour Talent Matching</li>
                    <li>✔ PAN India Hiring</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border shadow-sm">
                  <h3 className="font-semibold mb-2">Contact Info</h3>
                  <p className="text-sm text-gray-600">info@hirenestworkforce.com</p>
                  <p className="text-sm text-gray-600">+91 9392894748</p>
                  <p className="text-sm text-gray-600">Hyderabad, India</p>
                </div>

              </div>

            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
