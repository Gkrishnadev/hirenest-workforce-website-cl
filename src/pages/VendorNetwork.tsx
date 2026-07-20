import { useState } from "react";
import SEO from "../components/SEO";
import {
  CheckCircle2,
  Loader2,
  Network,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { addRecord, queueEmail } from "../lib/db";

const benefits = [
  {
    icon: Network,
    title: "120+ Active Vendors",
    desc: "Join a growing network of verified IT staffing vendors across India.",
  },
  {
    icon: TrendingUp,
    title: "Exclusive Requirements",
    desc: "Access IT requirements before they hit the open market.",
  },
  {
    icon: Users,
    title: "500+ Bench Consultants",
    desc: "Collaborate with vendors having ready-to-deploy talent.",
  },
  {
    icon: Shield,
    title: "Trusted & Verified",
    desc: "Every vendor is vetted for quality and reliability.",
  },
];

export default function VendorNetwork() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    benchSize: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      company_name: form.company,
      contact_person: form.name,
      email: form.email,
      phone: "",
      services: form.message,
      bench_size: form.benchSize || "",
    };

    try {
      await addRecord("vendor_applications", payload);

      setSuccess(true);
      toast.success("Application submitted! We'll reach out within 24 hours.");

      try {
        await queueEmail({
          to:
            (import.meta.env.VITE_NOTIFICATION_EMAIL as string) ||
            "gopal@hirenestworkforce.com",
          subject: "HireNest — New Vendor Network Application",
          text: `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nTechnologies: ${form.message}\nBench Size: ${form.benchSize}`,
        });
      } catch (err) {
        console.error("Email failed:", err);
      }

      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
        benchSize: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Submission failed. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <div>
      {/* ✅ SEO */}
      <SEO
        title="Join Vendor Network | HireNest Workforce"
        description="Join HireNest vendor network and access IT staffing requirements across India. Collaborate with top companies and grow your staffing business."
        path="/vendor-network"
      />

      <div className="pt-[72px]">
        {/* 🔥 HERO */}
        <section
          className="py-24 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.20 0.05 265) 100%)",
          }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "oklch(var(--electric-light))" }}
          >
            Vendor Network
          </p>

          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Join the HireNest Vendor Network
          </h1>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "oklch(0.78 0.02 255)" }}
          >
            Collaborate with top companies, access exclusive requirements,
            and grow your staffing business.
          </p>
        </section>

        {/* 💡 BENEFITS */}
        <section
          className="py-16"
          style={{ backgroundColor: "oklch(var(--surface))" }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Why Join HireNest
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="p-6 rounded-xl border text-center bg-white"
                  style={{ borderColor: "oklch(var(--border))" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: "oklch(var(--electric) / 0.1)",
                    }}
                  >
                    <b.icon
                      className="w-6 h-6"
                      style={{ color: "oklch(var(--electric))" }}
                    />
                  </div>

                  <h3
                    className="font-display font-bold text-sm mb-2"
                    style={{ color: "oklch(var(--navy))" }}
                  >
                    {b.title}
                  </h3>

                  <p className="text-xs section-subtext">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🧾 FORM */}
        <section className="py-24 bg-white">
          <div className="max-w-xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2
                className="text-3xl font-display font-bold mb-2"
                style={{ color: "oklch(var(--navy))" }}
              >
                Vendor Application
              </h2>
              <p className="section-subtext">
                Fill in your details and join our trusted vendor ecosystem.
              </p>
            </div>

            {success ? (
              <div className="rounded-xl p-10 text-center border">
                <CheckCircle2 className="w-14 h-14 mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold mb-2">
                  Application Submitted!
                </h3>
                <p className="section-subtext">
                  Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 p-8 rounded-xl border shadow-sm backdrop-blur"
              >
                <input
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Full Name"
                  className="w-full px-3 py-2 border"
                />

                <input
                  required
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  placeholder="Company"
                  className="w-full px-3 py-2 border"
                />

                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="Email"
                  className="w-full px-3 py-2 border"
                />

                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Technologies"
                  className="w-full px-3 py-2 border"
                />

                <button type="submit" disabled={submitting}>
                  {submitting ? "Submitting..." : "Apply"}
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
