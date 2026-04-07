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
      console.error("Insert error:", error);
      toast.error("Something went wrong. Please try again.");
    } else {
      try {
        await fetch(
          "https://hjeukduwzdginoqjjgod.supabase.co/functions/v1/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "hirenest-secure-key-2026",
            },
            body: JSON.stringify({
              type: "Contact Form",
              data: {
                name: form.name,
                email: form.email,
                message: form.message,
                company: form.company,
              },
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
    <div className="min-h-screen bg-[#0B0F1A]">
      <SEO
        title="Contact HireNest Workforce | IT Staffing Support"
        description="Contact HireNest Workforce for IT staffing, vendor partnerships, and hiring solutions. Get response within 24 hours."
        path="/contact"
      />

      {/* Hero - Premium Dark */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0F1A]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.15),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.1),_transparent_50%)]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">Get In Touch</span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">
            Contact HireNest
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a hiring requirement or question? We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form Side */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-white mb-8">
                Send Us a Message
              </h2>

              {success ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-green-400" />
                  <h3 className="font-bold text-white text-lg mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
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
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      required
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      placeholder="Your Company"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
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
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50"
                  >
                    {submitting && (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    )}
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Side */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                {[
                  { icon: Mail, value: "info@hirenestworkforce.com" },
                  { icon: Phone, value: "+91 9392894748" },
                  { icon: MapPin, value: "Hyderabad, Telangana" },
                  { icon: Clock, value: "Mon–Fri, 9AM–6PM" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <p className="text-gray-300">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-6 mt-8">
                <h3 className="text-white font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> 24-hour response time
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> Dedicated account manager
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> 500+ verified consultants
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> 120+ vendor network
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
