import SEO from "../components/SEO";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "../lib/supabase";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      name: form.name,
      email: form.email,
      message: `
Company: ${form.company}

Message:
${form.message}
      `,
    };

    const { error } = await supabase
      .from("contact_forms")
      .insert([payload]);

    if (error) {
      toast.error("Something went wrong. Please try again.");
    } else {
      try {
        await fetch(
          "https://hjeukduwzdginoqjjgod.supabase.co/functions/v1/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              type: "Contact Form",
              data: form,
            }),
          }
        );
      } catch (err) {
        console.error("Email failed:", err);
      }

      setSuccess(true);
      toast.success("Message sent! We'll be in touch within 24 hours.");
      setForm({ name: "", email: "", company: "", message: "" });
    }

    setSubmitting(false);
  };

  return (
    <div>
      {/* ✅ SEO (ADDED) */}
      <SEO
        title="Contact HireNest Workforce | IT Staffing Support"
        description="Contact HireNest Workforce for IT staffing, vendor partnerships, and hiring solutions. Get response within 24 hours."
        path="/contact"
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
            Get In Touch
          </p>

          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Contact HireNest
          </h1>

          <p className="text-lg" style={{ color: "oklch(0.78 0.02 255)" }}>
            Have a hiring requirement or question? We respond within 24 hours.
          </p>
        </section>

        {/* 🔥 FORM SECTION */}
        <section
          className="py-24"
          style={{
            background:
              "linear-gradient(180deg, white 0%, oklch(var(--surface)) 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-5 gap-16">

            {/* FORM */}
            <div className="lg:col-span-3">
              <h2
                className="text-2xl font-display font-bold mb-8"
                style={{ color: "oklch(var(--navy))" }}
              >
                Send Us a Message
              </h2>

              {success ? (
                <div
                  className="p-8 rounded-xl border text-center"
                  style={{
                    backgroundColor: "oklch(0.97 0.02 145)",
                    borderColor: "oklch(0.65 0.18 145)",
                  }}
                >
                  <CheckCircle2
                    className="w-12 h-12 mx-auto mb-4"
                    style={{ color: "oklch(0.55 0.20 145)" }}
                  />
                  <h3 className="font-display font-bold text-lg mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 p-8 rounded-xl border shadow-sm"
                  style={{
                    backgroundColor: "oklch(var(--surface))",
                    borderColor: "oklch(var(--border))",
                  }}
                >

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-3 py-2 rounded-md border text-sm"
                      style={{ borderColor: "oklch(var(--border))" }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="john@company.com"
                      className="w-full px-3 py-2 rounded-md border text-sm"
                      style={{ borderColor: "oklch(var(--border))" }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <input
                      required
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      placeholder="Your Company"
                      className="w-full px-3 py-2 rounded-md border text-sm"
                      style={{ borderColor: "oklch(var(--border))" }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Tell us about your hiring needs..."
                      className="w-full px-3 py-2 rounded-md border text-sm"
                      style={{ borderColor: "oklch(var(--border))" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-md text-white font-semibold transition"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(var(--electric)), oklch(var(--electric-light)))",
                    }}
                  >
                    {submitting && (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    )}
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* CONTACT INFO */}
            <div className="lg:col-span-2 space-y-6">
              <h2
                className="text-2xl font-display font-bold mb-4"
                style={{ color: "oklch(var(--navy))" }}
              >
                Contact Information
              </h2>

              {[
                { icon: Mail, value: "info@hirenestworkforce.com" },
                { icon: Phone, value: "+91 9392894748" },
                { icon: MapPin, value: "Hyderabad, Telangana" },
                { icon: Clock, value: "Mon–Fri, 9AM–6PM" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: "oklch(var(--electric) / 0.1)",
                    }}
                  >
                    <item.icon
                      className="w-5 h-5"
                      style={{ color: "oklch(var(--electric))" }}
                    />
                  </div>
                  <p className="text-sm">{item.value}</p>
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
