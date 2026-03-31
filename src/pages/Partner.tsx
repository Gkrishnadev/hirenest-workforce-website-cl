import { useState } from "react";
import { CheckCircle2, Loader2, TrendingUp, Users, Globe, Zap } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "../lib/supabase";

const benefits = [
  { icon: TrendingUp, title: "Revenue Growth", desc: "Unlock consistent opportunities" },
  { icon: Users, title: "Exclusive Clients", desc: "Access enterprise clients" },
  { icon: Globe, title: "Global Reach", desc: "Expand your business globally" },
  { icon: Zap, title: "Smart Matching", desc: "AI-powered opportunity matching" },
];

export default function Partner() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", role: "", partnerType: "", message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from("partner_applications").insert([{
      company_name: form.company,
      contact_person: form.name,
      email: form.email,
      phone: "",
      partnership_type: form.partnerType,
      message: `Role: ${form.role}\n\n${form.message}`
    }]);

    if (error) { toast.error("Submission failed");
               } else { setSuccess(true); toast.success("Application submitted!"); 
                      console.log("Calling email function");}
//email call only after success
      try{
      const res = await fetch("https://hjeukduwzdginoqjjgod.supabase.co/functions/v1/send-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    type: "Partner Application",
    data: form,
  }),
});
        console.log("Email Response:",res.status);
      } catch (err){
        console.error("Email failed:", err);
      }
    setSubmitting(false);
  };

  return (
    <div className="pt-[72px]">

      {/* HERO */}
      <section className="py-24 text-center"
        style={{ background: "linear-gradient(135deg, oklch(var(--navy)), oklch(0.2 0.05 265))" }}>
        <h1 className="text-5xl font-bold text-white mb-4">Partner With HireNest</h1>
        <p className="text-white/80">Grow your business with global opportunities</p>
      </section>

      {/* BENEFITS */}
      <section className="py-16">
        <h2 className="text-3xl text-center font-bold mb-12">Why Partner With Us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {benefits.map((b) => (
            <div key={b.title} className="p-6 border rounded-xl text-center">
              <b.icon className="mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold">{b.title}</h3>
              <p className="text-sm text-gray-500">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4">

          <h2 className="text-2xl font-bold mb-2">Partner Application</h2>
          <p className="text-gray-500 mb-6">Tell us about your organization</p>

          {success ? (
            <div className="text-center border p-8 rounded-xl">
              <CheckCircle2 className="mx-auto mb-4 text-green-500" />
              Application Submitted!
            </div>
          ) : (
            <form onSubmit={handleSubmit}
              className="space-y-6 p-8 border rounded-xl shadow-sm">

              <div className="grid sm:grid-cols-2 gap-6">
                <input placeholder="Full Name" required
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border p-2 rounded" />

                <input placeholder="Email" required type="email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border p-2 rounded" />
              </div>

              <input placeholder="Company" required
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="border p-2 rounded w-full" />

              <select
                onChange={(e) => setForm({ ...form, partnerType: e.target.value })}
                className="border p-2 rounded w-full">
                <option>Select Partner Type</option>
                <option>Staffing Vendor</option>
                <option>Technology Partner</option>
              </select>

              <textarea placeholder="Message"
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="border p-2 rounded w-full" />

              <button
                className="w-full py-3 text-white rounded-md"
                style={{ background: "oklch(var(--electric))" }}>
                {submitting ? "Submitting..." : "Submit Application"}
              </button>

            </form>
          )}
        </div>
      </section>
    </div>
  );
}
