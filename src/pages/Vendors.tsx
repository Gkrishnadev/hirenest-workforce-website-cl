import SEO from "../components/SEO";
import { useState } from "react";
import {
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "../lib/supabase";

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
    setSubmitting(true);

    const payload = {
      company_name: form.companyName,
      contact_person: form.contactPerson,
      email: form.email,
      phone: form.phone,
      services: form.technologies,
      bench_size: form.benchSize || "",
    };

    const { error } = await supabase
      .from("vendor_applications")
      .insert([payload]);

    if (error) {
      toast.error("Submission failed.");
    } else {
      setSubmitted(true);

      try {
        await fetch("https://hjeukduwzdginoqjjgod.supabase.co/functions/v1/send-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "hirenest-secure-key-2026", // ✅ REQUIRED
  },
  body: JSON.stringify({
    type: "Vendor Application", // ✅ CORRECT TYPE
    data: {
      name: form.contactPerson,
      email: form.email,
      phone: form.phone,
      company: form.companyName,
      services: form.technologies,
      benchSize: form.benchSize,
    },
  }),
});
      } catch (err) {
        console.error(err);
      }

      setForm({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        technologies: "",
        benchSize: "",
      });
    }

    setSubmitting(false);
  };

  return (
    <div>

      {/* ✅ SEO */}
      <SEO
        title="Join Vendor Network | HireNest Workforce"
        description="Join HireNest vendor network and get access to exclusive IT staffing requirements."
        path="/vendors"
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
            Join Vendor Network
          </h1>
          <p className="text-white/80">
            Collaborate with top companies and access exclusive IT requirements 🚀
          </p>
        </section>

        {/* 🔥 FORM SECTION */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">

            <div className="grid lg:grid-cols-2 gap-12">

              {/* LEFT - FORM */}
              <div className="bg-white p-8 rounded-xl shadow-sm border">

                {submitted ? (
                  <div className="text-center py-10">
                    <CheckCircle2 className="mx-auto mb-4 text-green-500" size={40} />
                    <h3 className="text-xl font-semibold mb-2">
                      Application Submitted!
                    </h3>
                    <p className="text-gray-600">
                      We will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                      required
                      value={form.companyName}
                      onChange={(e) =>
                        setForm({ ...form, companyName: e.target.value })
                      }
                      placeholder="Company Name *"
                      className="w-full p-3 border rounded-md"
                    />

                    <input
                      required
                      value={form.contactPerson}
                      onChange={(e) =>
                        setForm({ ...form, contactPerson: e.target.value })
                      }
                      placeholder="Contact Person *"
                      className="w-full p-3 border rounded-md"
                    />

                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="Email Address *"
                      className="w-full p-3 border rounded-md"
                    />

                    <input
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="Phone Number"
                      className="w-full p-3 border rounded-md"
                    />

                    <textarea
                      value={form.technologies}
                      onChange={(e) =>
                        setForm({ ...form, technologies: e.target.value })
                      }
                      placeholder="Technologies / Services"
                      className="w-full p-3 border rounded-md"
                    />

                    <select
                      value={form.benchSize}
                      onChange={(e) =>
                        setForm({ ...form, benchSize: e.target.value })
                      }
                      className="w-full p-3 border rounded-md"
                    >
                      <option value="">Bench Size</option>
                      <option value="1-5">1–5</option>
                      <option value="6-15">6–15</option>
                      <option value="16-30">16–30</option>
                      <option value="30-50">30–50</option>
                      <option value="50+">50+</option>
                    </select>

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
                      {submitting ? "Submitting..." : "Apply Now"}
                    </button>

                  </form>
                )}
              </div>

              {/* RIGHT - INFO PANEL */}
              <div className="space-y-6">

                <div className="bg-white p-6 rounded-xl border shadow-sm">
                  <h3 className="font-semibold mb-2">Why Join HireNest?</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>✔ Access Exclusive IT Requirements</li>
                    <li>✔ 120+ Vendor Network</li>
                    <li>✔ Faster Closures</li>
                    <li>✔ Long-Term Client Partnerships</li>
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
