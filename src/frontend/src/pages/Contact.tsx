import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";


export default function Contact() {
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitting(true);
  setError(false);

  try {
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (!res.ok) throw new Error();

    setSuccess(true);
    toast.success("Message sent! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", company: "", message: "" });

  } catch {
    setError(true);
    toast.error("Something went wrong. Please try again.");
  } finally {
    setSubmitting(false);
  }
};
    if (!res.ok) throw new Error();

    setSuccess(true);
    toast.success("Message sent! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", company: "", message: "" });

  } catch {
    setError(true);
    toast.error("Something went wrong. Please try again.");
  } finally {
    setSubmitting(false);
  }
};
      setSuccess(true);
      toast.success("Message sent! We'll be in touch within 24 hours.");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setError(true);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.20 0.05 265) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            Have a hiring requirement or question? Our team responds within 24
            hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2
                className="text-2xl font-display font-bold mb-8"
                style={{ color: "oklch(var(--navy))" }}
              >
                Send Us a Message
              </h2>

              {success ? (
                <div
                  data-ocid="contact.success_state"
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
                  <h3
                    className="font-display font-bold text-lg mb-2"
                    style={{ color: "oklch(0.30 0.12 145)" }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(0.40 0.10 145)" }}
                  >
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="mt-4 text-sm underline"
                    style={{ color: "oklch(0.50 0.18 145)" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label
                      htmlFor="c-name"
                      className="font-medium text-sm mb-2 block"
                      style={{ color: "oklch(var(--navy))" }}
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="c-name"
                      data-ocid="contact.name.input"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="c-email"
                      className="font-medium text-sm mb-2 block"
                      style={{ color: "oklch(var(--navy))" }}
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="c-email"
                      data-ocid="contact.email.input"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="c-company"
                      className="font-medium text-sm mb-2 block"
                      style={{ color: "oklch(var(--navy))" }}
                    >
                      Company Name *
                    </Label>
                    <Input
                      id="c-company"
                      data-ocid="contact.company.input"
                      required
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="c-msg"
                      className="font-medium text-sm mb-2 block"
                      style={{ color: "oklch(var(--navy))" }}
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="c-msg"
                      data-ocid="contact.message.textarea"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Tell us about your hiring needs..."
                    />
                  </div>

                  {error && (
                    <div
                      data-ocid="contact.error_state"
                      className="p-4 rounded-lg text-sm"
                      style={{
                        backgroundColor: "oklch(0.97 0.02 27)",
                        color: "oklch(0.45 0.18 27)",
                        border: "1px solid oklch(0.75 0.18 27)",
                      }}
                    >
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    data-ocid="contact.submit.button"
                    disabled={submitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "oklch(var(--electric))" }}
                  >
                    {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2
                className="text-2xl font-display font-bold mb-8"
                style={{ color: "oklch(var(--navy))" }}
              >
                Contact Information
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@hirenestworkforce.com",
                  },
                  { icon: Phone, label: "Phone", value: "+91 9392894748" },
                  {
                    icon: MapPin,
                    label: "Office",
                    value: "Headquarters at Hyderabad, Telangana",
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    value: "Mon–Fri, 9:00 AM – 6:00 PM IST",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        backgroundColor: "oklch(var(--electric) / 0.1)",
                      }}
                    >
                      <item.icon
                        className="w-5 h-5"
                        style={{ color: "oklch(var(--electric))" }}
                      />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wider mb-1"
                        style={{ color: "oklch(var(--text-muted))" }}
                      >
                        {item.label}
                      </p>
                      <p className="text-sm section-subtext">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-10 p-6 rounded-xl border"
                style={{
                  backgroundColor: "oklch(var(--surface))",
                  borderColor: "oklch(var(--border))",
                }}
              >
                <p
                  className="text-sm font-semibold mb-2"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Fast Response Guarantee
                </p>
                <p className="text-sm section-subtext">
                  All inquiries receive a response within 24 business hours. For
                  urgent hiring needs, mention it in your message and we'll
                  prioritize your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
