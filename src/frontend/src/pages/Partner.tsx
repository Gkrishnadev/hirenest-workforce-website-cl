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
  CheckCircle2,
  Globe,
  Loader2,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

const partnerBenefits = [
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    desc: "Unlock a consistent pipeline of high-value hiring engagements matched to your capabilities.",
  },
  {
    icon: Users,
    title: "Exclusive Client Access",
    desc: "Get introduced to enterprise and growth-stage clients that match your specialization.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Expand your market presence through HireNest's international client and vendor ecosystem.",
  },
  {
    icon: Zap,
    title: "AI-Powered Matching",
    desc: "Our AI engine ensures you're always matched with the most relevant opportunities first.",
  },
];

const partnerTypes = [
  "Staffing Vendor",
  "Technology Partner",
  "Referral Partner",
];

export default function Partner() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    partnerType: "",
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
        form.role,
        form.partnerType,
        form.message,
      );
      setSuccess(true);
      toast.success(
        "Application submitted! Our partnerships team will reach out soon.",
      );
      setForm({
        name: "",
        email: "",
        company: "",
        role: "",
        partnerType: "",
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
            Partner Program
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Partner With HireNest Workforce
          </h1>
          <p className="text-lg" style={{ color: "oklch(0.78 0.02 255)" }}>
            Join our growing ecosystem of staffing vendors, technology partners,
            and referral networks driving the future of talent acquisition.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(var(--electric))" }}
            >
              Why Partner?
            </p>
            <h2 className="text-4xl font-display font-bold section-heading mb-4">
              Partnership Benefits
            </h2>
            <p className="text-lg max-w-2xl mx-auto section-subtext">
              Everything you gain when you join the HireNest partner ecosystem.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((b) => (
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

      {/* Application Form */}
      <section
        className="py-24"
        style={{ backgroundColor: "oklch(var(--surface))" }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold section-heading mb-4">
              Partner Application
            </h2>
            <p className="section-subtext">
              Fill out the form and our partnerships team will contact you
              within 2 business days.
            </p>
          </div>

          {success ? (
            <div
              data-ocid="partner_form.success_state"
              className="p-8 rounded-xl border text-center bg-white"
              style={{ borderColor: "oklch(0.65 0.18 145)" }}
            >
              <CheckCircle2
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "oklch(0.55 0.20 145)" }}
              />
              <h3
                className="font-display font-bold text-lg mb-2"
                style={{ color: "oklch(0.30 0.12 145)" }}
              >
                Application Received!
              </h3>
              <p className="text-sm" style={{ color: "oklch(0.40 0.10 145)" }}>
                We'll review your application and get back to you within 2
                business days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-2xl border"
              style={{ borderColor: "oklch(var(--border))" }}
            >
              <div>
                <Label
                  htmlFor="p-name"
                  className="font-medium text-sm mb-2 block"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Full Name *
                </Label>
                <Input
                  id="p-name"
                  data-ocid="partner_form.name.input"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <Label
                  htmlFor="p-email"
                  className="font-medium text-sm mb-2 block"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Email Address *
                </Label>
                <Input
                  id="p-email"
                  data-ocid="partner_form.email.input"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <Label
                  htmlFor="p-company"
                  className="font-medium text-sm mb-2 block"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Company *
                </Label>
                <Input
                  id="p-company"
                  data-ocid="partner_form.company.input"
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
                  htmlFor="p-role"
                  className="font-medium text-sm mb-2 block"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Role / Title *
                </Label>
                <Input
                  id="p-role"
                  data-ocid="partner_form.role.input"
                  required
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  placeholder="CEO, Partnership Manager, etc."
                />
              </div>
              <div>
                <Label
                  className="font-medium text-sm mb-2 block"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Partnership Type *
                </Label>
                <Select
                  value={form.partnerType}
                  onValueChange={(val) =>
                    setForm({ ...form, partnerType: val })
                  }
                  required
                >
                  <SelectTrigger data-ocid="partner_form.type.select">
                    <SelectValue placeholder="Select partnership type..." />
                  </SelectTrigger>
                  <SelectContent>
                    {partnerTypes.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label
                  htmlFor="p-msg"
                  className="font-medium text-sm mb-2 block"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Message
                </Label>
                <Textarea
                  id="p-msg"
                  data-ocid="partner_form.message.textarea"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell us about your company and why you'd like to partner with HireNest..."
                />
              </div>

              {error && (
                <div
                  data-ocid="partner_form.error_state"
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
                data-ocid="partner_form.submit.button"
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
