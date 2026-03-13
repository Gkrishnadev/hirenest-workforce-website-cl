import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
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
import { CheckCircle2, Network, Shield, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const benefits = [
  {
    icon: Network,
    title: "Exclusive IT Requirements",
    desc: "Access new IT requirements from companies across India before they hit the open market.",
  },
  {
    icon: Users,
    title: "Trusted Partner Network",
    desc: "Collaborate with 120+ verified staffing vendors and grow your placement pipeline.",
  },
  {
    icon: TrendingUp,
    title: "Accelerate Placements",
    desc: "Close more deals faster with our platform tools designed for staffing collaboration.",
  },
  {
    icon: Shield,
    title: "Verified & Trusted",
    desc: "Every vendor in our network goes through a verification process to ensure quality.",
  },
];

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Vendors() {

  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    technologies: "",
    benchSize: ""
  })
useEffect(() => {
    supabase.from("vendors").insert([
      {
        company_name: "TEST COMPANY",
        contact_person: "TEST USER",
        email: "test@test.com"
      }
    ])
  }, [])
    return (
    <div>
      Vendor page
    </div>
  )
}
  const handleVendorSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { data, error } = await supabase
      .from("vendors")
      .insert([
        {
          company_name: form.companyName,
          contact_person: form.contactPerson,
          email: form.email,
          phone: form.phone,
          technologies: form.technologies,
          bench_size: form.benchSize
        }
      ])

    console.log(data, error)

    if(error){
      alert("Error saving vendor")
    } else {
      alert("Vendor registered successfully")
    }
  }

  return (
    <form onSubmit={handleVendorSubmit}>
      {/* your form UI */}
    </form>
  )

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleVendorSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitting(true);

  const { data, error } = await supabase
    .from("vendors")
    .insert([
      {
        company_name: form.companyName,
        contact_person: form.contactPerson,
        email: form.email,
        phone: form.phone,
        technologies: form.technologies,
        bench_size: form.benchSize
      }
    ]);

  console.log("Supabase result:", data, error);

  if (error) {
    console.error(error);
    alert("Error saving vendor");
  } else {
    setSubmitted(true);
    toast.success("Application submitted!");
  }

  setSubmitting(false);
};

    await fetch("/api/vendor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    setSubmitting(false);
    setSubmitted(true);

    toast.success("Vendor registration submitted!");
  };

  return (
    <div>
      <form onSubmit={handleVendorSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
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
            Vendor Registration
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6 leading-tight">
            Join the HireNest
            <br />
            <span style={{ color: "oklch(var(--electric-light))" }}>
              Vendor Network
            </span>
          </h1>
          <p className="text-lg" style={{ color: "oklch(0.78 0.02 255)" }}>
            Connect with top IT companies and access exclusive requirements
            through the HireNest platform.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="py-16"
        style={{ backgroundColor: "oklch(var(--surface))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-xl bg-white border text-center"
                style={{ borderColor: "oklch(var(--border))" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "oklch(var(--electric) / 0.1)" }}
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
                <p className="text-xs leading-relaxed section-subtext">
                  {b.desc}
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
              Vendor Application
            </h2>
            <p className="section-subtext">
              Fill out the form below and our team will get in touch within 24
              hours.
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
                Application Submitted!
              </h3>
              <p className="section-subtext">
                Thank you for registering. Our team will reach out within 24
                hours to complete your vendor onboarding.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleVendorSubmit}
              className="space-y-6 rounded-2xl p-8 border"
              style={{
                borderColor: "oklch(var(--border))",
                backgroundColor: "oklch(var(--surface))",
              }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="companyName"
                    style={{ color: "oklch(var(--navy))" }}
                  >
                    Company Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="companyName"
                    data-ocid="vendor_signup.company_name.input"
                    placeholder="Your company name"
                    required
                    value={form.companyName}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, companyName: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="contactPerson"
                    style={{ color: "oklch(var(--navy))" }}
                  >
                    Contact Person <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="contactPerson"
                    data-ocid="vendor_signup.contact_person.input"
                    placeholder="Your full name"
                    required
                    value={form.contactPerson}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, contactPerson: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    style={{ color: "oklch(var(--navy))" }}
                  >
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    data-ocid="vendor_signup.email.input"
                    placeholder="work@company.com"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    style={{ color: "oklch(var(--navy))" }}
                  >
                    Phone <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    data-ocid="vendor_signup.phone.input"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="technologies"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Technologies Specialized In
                </Label>
                <Textarea
                  id="technologies"
                  data-ocid="vendor_signup.technologies.textarea"
                  placeholder="List technologies you specialize in (e.g. Java, Python, AWS, DevOps)"
                  rows={3}
                  value={form.technologies}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, technologies: e.target.value }))
                  }
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="benchSize"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Current Bench Size
                </Label>
                <Select
                  value={form.benchSize}
                  onValueChange={(val) =>
                    setForm((p) => ({ ...p, benchSize: val }))
                  }
                >
                  <SelectTrigger
                    id="benchSize"
                    data-ocid="vendor_signup.bench_size.select"
                  >
                    <SelectValue placeholder="Select bench size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1–5 consultants</SelectItem>
                    <SelectItem value="6-15">6–15 consultants</SelectItem>
                    <SelectItem value="16-30">16–30 consultants</SelectItem>
                    <SelectItem value="30-50">30–50 consultants</SelectItem>
                    <SelectItem value="50+">50+ consultants</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                data-ocid="vendor_signup.submit_button"
                disabled={submitting}
                className="w-full font-semibold py-3 text-white rounded-md transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "oklch(var(--electric))" }}
              >
                {submitting ? "Submitting..." : "Join the Vendor Network"}
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
