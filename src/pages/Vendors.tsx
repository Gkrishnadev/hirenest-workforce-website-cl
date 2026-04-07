import SEO from "../components/SEO";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
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
      toast.error("Submission failed ❌");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch(
        "https://hjeukduwzdginoqjjgod.supabase.co/functions/v1/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "hirenest-secure-key-2026", // ✅ FIXED
          },
          body: JSON.stringify({
            type: "Vendor Application", // ✅ FIXED
            data: {
              name: form.contactPerson,
              email: form.email,
              phone: form.phone,
              company: form.companyName,
              services: form.technologies,
              benchSize: form.benchSize,
            },
          }),
        }
      );

      if (!res.ok) {
        console.error("Email failed");
        toast.error("Email sending failed ❌");
      } else {
        setSubmitted(true);
        toast.success("Application submitted 🚀");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong ❌");
    }

    setForm({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      technologies: "",
      benchSize: "",
    });

    setSubmitting(false);
  };

  return (
    <div>
      <SEO
        title="Join Vendor Network | HireNest Workforce"
        description="Join HireNest vendor network and get access to exclusive IT staffing requirements."
        path="/vendors"
      />

      <div className="pt-[72px]">

        <section className="py-20 text-center bg-gradient-to-br from-[#0B0F1A] to-[#111827] text-white">
          <h1 className="text-4xl font-bold mb-4">
            Join Vendor Network
          </h1>
          <p className="text-white/80">
            Collaborate with top companies 🚀
          </p>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">

            <div className="bg-white p-8 rounded-xl shadow-sm border">

              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="mx-auto mb-4 text-green-500" size={40} />
                  <h3 className="text-xl font-semibold">
                    Application Submitted!
                  </h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  <input required placeholder="Company Name *"
                    value={form.companyName}
                    onChange={(e) =>
                      setForm({ ...form, companyName: e.target.value })
                    }
                    className="w-full p-3 border rounded-md"
                  />

                  <input required placeholder="Contact Person *"
                    value={form.contactPerson}
                    onChange={(e) =>
                      setForm({ ...form, contactPerson: e.target.value })
                    }
                    className="w-full p-3 border rounded-md"
                  />

                  <input required type="email" placeholder="Email *"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full p-3 border rounded-md"
                  />

                  <input placeholder="Phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full p-3 border rounded-md"
                  />

                  <textarea placeholder="Technologies"
                    value={form.technologies}
                    onChange={(e) =>
                      setForm({ ...form, technologies: e.target.value })
                    }
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
                    className="w-full py-3 bg-blue-600 text-white rounded-md flex justify-center gap-2"
                  >
                    {submitting && <Loader2 className="animate-spin" size={18} />}
                    {submitting ? "Submitting..." : "Apply Now"}
                  </button>

                </form>
              )}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
