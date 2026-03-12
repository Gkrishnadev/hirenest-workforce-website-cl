import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Brain,
  CheckCircle2,
  Loader2,
  Network,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

const benefits = [
  {
    icon: Network,
    title: "Expanded Client Reach",
    desc: "Get direct access to HireNest's growing network of enterprise clients actively searching for specialized talent.",
  },
  {
    icon: TrendingUp,
    title: "Steady Revenue Pipeline",
    desc: "Receive a consistent flow of qualified hiring requirements matched to your specific domain expertise.",
  },
  {
    icon: Shield,
    title: "Trusted Ecosystem",
    desc: "Join a hand-vetted community of top-tier staffing partners recognized for quality and reliability.",
  },
  {
    icon: Brain,
    title: "AI Matching Technology",
    desc: "Leverage our proprietary AI matching engine to surface the most relevant opportunities for your talent pool.",
  },
];

const vendorSteps = [
  {
    n: "01",
    title: "Apply to Join",
    desc: "Fill out the vendor application form with details about your company and the talent you provide.",
  },
  {
    n: "02",
    title: "Verification & Onboarding",
    desc: "Our team reviews your application and conducts a brief onboarding session to align on expectations.",
  },
  {
    n: "03",
    title: "Start Receiving Opportunities",
    desc: "Once approved, you'll receive matched hiring requirements and start building a revenue relationship with HireNest.",
  },
];

const talentTypes = [
  "Software Engineers & Developers",
  "AI & Machine Learning Specialists",
  "Data Scientists & Engineers",
  "DevOps & Cloud Engineers",
  "Product & Design Talent",
  "Executive & Leadership",
  "Other",
];

export default function VendorNetwork() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    talentType: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setSubmitting(true);
    setError(false);
    try {
      await actor.submitPartnerApplication(
        form.name,
        form.email,
        form.company,
        "Vendor Contact",
        "vendor",
        `Talent type: ${form.talentType}\n\n${form.message}`,
      );
      setSuccess(true);
      toast.success("Application submitted! We'll be in touch shortly.");
      setForm({
        company: "",
        name: "",
        email: "",
        phone: "",
        talentType: "",
        message: "",
      });
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
            Vendor Program
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Join Our Vendor Network
          </h1>
          <p className="text-lg" style={{ color: "oklch(0.78 0.02 255)" }}>
            Partner with HireNest to access a steady stream of qualified hiring
            requirements and grow your staffing business.
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold section-heading mb-4">
              Why Partner with HireNest
            </h2>
            <p className="text-lg max-w-2xl mx-auto section-subtext">
              Benefits that make joining our vendor network a clear business
              advantage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-8 rounded-xl border card-hover text-center"
                style={{
                  borderColor: "oklch(var(--border))",
                  backgroundColor: "oklch(var(--surface))",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "oklch(var(--electric) / 0.1)" }}
                >
                  <b.icon
                    className="w-7 h-7"
                    style={{ color: "oklch(var(--electric))" }}
                  />
                </div>
                <h3
                  className="font-display font-bold text-base mb-3"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  {b.title}
                </h3>
                <p className="text-sm section-subtext">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="py-24"
        style={{ backgroundColor: "oklch(var(--surface))" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold section-heading mb-4">
              How It Works for Vendors
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-10">
            {vendorSteps.map((step) => (
              <div key={step.n} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-bold text-lg mx-auto mb-5 shadow-lg"
                  style={{ backgroundColor: "oklch(var(--electric))" }}
                >
                  {step.n}
                </div>
                <h3
                  className="font-display font-bold text-base mb-2"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm section-subtext">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold section-heading mb-4">
              Apply to Become a Vendor
            </h2>
            <p className="section-subtext">
              Fill out the form below and our partnerships team will reach out
              within 2 business days.
            </p>
          </div>

          {success ? (
            <div
              data-ocid="vendor_form.success_state"
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
                Application Submitted!
              </h3>
              <p className="text-sm" style={{ color: "oklch(0.40 0.10 145)" }}>
                We'll review your application and get back to you within 2
                business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="v-company"
                  className="font-medium text-sm mb-2 block"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Company Name *
                </Label>
                <Input
                  id="v-company"
                  data-ocid="vendor_form.company.input"
                  required
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  placeholder="Acme Staffing Inc."
                />
              </div>
              <div>
                <Label
                  htmlFor="v-name"
                  className="font-medium text-sm mb-2 block"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Contact Name *
                </Label>
                <Input
                  id="v-name"
                  data-ocid="vendor_form.name.input"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <Label
                  htmlFor="v-email"
                  className="font-medium text-sm mb-2 block"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Email Address *
                </Label>
                <Input
                  id="v-email"
                  data-ocid="vendor_form.email.input"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <Label
                  htmlFor="v-phone"
                  className="font-medium text-sm mb-2 block"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Phone (optional)
                </Label>
                <Input
                  id="v-phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <Label
                  className="font-medium text-sm mb-2 block"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Types of Talent You Provide *
                </Label>
                <Select
                  value={form.talentType}
                  onValueChange={(val) => setForm({ ...form, talentType: val })}
                  required
                >
                  <SelectTrigger data-ocid="vendor_form.talent_type.select">
                    <SelectValue placeholder="Select talent type..." />
                  </SelectTrigger>
                  <SelectContent>
                    {talentTypes.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label
                  htmlFor="v-msg"
                  className="font-medium text-sm mb-2 block"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Message
                </Label>
                <Textarea
                  id="v-msg"
                  data-ocid="vendor_form.message.textarea"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell us about your company and the talent you specialize in..."
                />
              </div>

              {error && (
                <div
                  data-ocid="vendor_form.error_state"
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
                data-ocid="vendor_form.submit.button"
                disabled={submitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: "oklch(var(--electric))" }}
              >
                {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
