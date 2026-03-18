import { Button } from "@/components/ui/button";
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
import { Briefcase, CheckCircle2, Clock, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

const highlights = [
  {
    icon: Users,
    title: "120+ Staffing Vendors",
    desc: "Your requirement reaches our entire network instantly.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Receive qualified profiles within 48 hours of submission.",
  },
  {
    icon: Briefcase,
    title: "All Engagement Types",
    desc: "Contract, full-time, or contract-to-hire — we cover all models.",
  },
];

export default function SubmitRequirement() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    company: "",
    role: "",
    skills: "",
    location: "",
    engagementType: "",
    startDate: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      toast.error("Not connected. Please try again.");
      return;
    }
    setSubmitting(true);
    try {
      await actor.submitRequirementSubmission(
        form.company,
        form.role,
        form.skills,
        form.location,
        form.engagementType,
        form.startDate,
      );
      setSubmitted(true);
      toast.success(
        "Requirement submitted! Our vendor network will respond within 48 hours.",
      );
    } catch (err) {
      console.error(err);
      toast.error("Submission failed. Please try again.");
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
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.18 0.05 258) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "oklch(var(--electric-light))" }}
          >
            Post a Requirement
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6 leading-tight">
            Post an{" "}
            <span style={{ color: "oklch(var(--electric-light))" }}>
              IT Requirement
            </span>
          </h1>
          <p className="text-lg" style={{ color: "oklch(0.78 0.02 255)" }}>
            Connect with HireNest&apos;s vendor network to find the right
            technology talent fast.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section
        className="py-16"
        style={{ backgroundColor: "oklch(var(--surface))" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="p-6 rounded-xl bg-white border text-center"
                style={{ borderColor: "oklch(var(--border))" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "oklch(var(--electric) / 0.1)" }}
                >
                  <h.icon
                    className="w-6 h-6"
                    style={{ color: "oklch(var(--electric))" }}
                  />
                </div>
                <h3
                  className="font-display font-bold text-sm mb-2"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  {h.title}
                </h3>
                <p className="text-xs leading-relaxed section-subtext">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-display font-bold mb-4"
              style={{ color: "oklch(var(--navy))" }}
            >
              Requirement Details
            </h2>
            <p className="section-subtext">
              Provide the details and our vendor network will match qualified
              candidates for you.
            </p>
          </div>

          {submitted ? (
            <div
              className="rounded-2xl p-12 text-center border"
              style={{
                backgroundColor: "oklch(var(--electric) / 0.05)",
                borderColor: "oklch(var(--electric) / 0.2)",
              }}
            >
              <CheckCircle2
                className="w-16 h-16 mx-auto mb-5"
                style={{ color: "oklch(var(--electric))" }}
              />
              <h3
                className="text-2xl font-display font-bold mb-3"
                style={{ color: "oklch(var(--navy))" }}
              >
                Requirement Submitted!
              </h3>
              <p className="section-subtext">
                Your requirement has been shared with our vendor network. Expect
                qualified profiles within 48 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl p-8 border"
              style={{
                borderColor: "oklch(var(--border))",
                backgroundColor: "oklch(var(--surface))",
              }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="company"
                    style={{ color: "oklch(var(--navy))" }}
                  >
                    Company <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="company"
                    data-ocid="requirement.company.input"
                    placeholder="Your company name"
                    required
                    value={form.company}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, company: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" style={{ color: "oklch(var(--navy))" }}>
                    Role / Position <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="role"
                    data-ocid="requirement.role.input"
                    placeholder="e.g. Senior Java Developer"
                    required
                    value={form.role}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, role: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills" style={{ color: "oklch(var(--navy))" }}>
                  Required Skills <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="skills"
                  data-ocid="requirement.skills.textarea"
                  placeholder="e.g. Java, Spring Boot, Microservices, AWS — 5+ years"
                  rows={3}
                  required
                  value={form.skills}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, skills: e.target.value }))
                  }
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="location"
                    style={{ color: "oklch(var(--navy))" }}
                  >
                    Location
                  </Label>
                  <Input
                    id="location"
                    data-ocid="requirement.location.input"
                    placeholder="e.g. Hyderabad / Remote"
                    value={form.location}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, location: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="engagementType"
                    style={{ color: "oklch(var(--navy))" }}
                  >
                    Engagement Type
                  </Label>
                  <Select
                    value={form.engagementType}
                    onValueChange={(val) =>
                      setForm((p) => ({ ...p, engagementType: val }))
                    }
                  >
                    <SelectTrigger
                      id="engagementType"
                      data-ocid="requirement.type.select"
                    >
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="fulltime">Full-time</SelectItem>
                      <SelectItem value="contract-to-hire">
                        Contract to Hire
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="startDate"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Start Date
                </Label>
                <Input
                  id="startDate"
                  type="date"
                  data-ocid="requirement.start_date.input"
                  value={form.startDate}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, startDate: e.target.value }))
                  }
                />
              </div>

              <Button
                type="submit"
                data-ocid="requirement.submit_button"
                disabled={submitting}
                className="w-full font-semibold py-3 text-white rounded-md transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "oklch(var(--electric))" }}
              >
                {submitting ? "Submitting..." : "Submit Requirement"}
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
