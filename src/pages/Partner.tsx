import { useState } from "react";
import { 
  CheckCircle2, 
  Loader2, 
  TrendingUp, 
  Users, 
  Globe, 
  Zap, 
  Phone, 
  Mail, 
  ArrowRight, 
  Building2, 
  Briefcase, 
  Handshake,
  Rocket,
  Plug,
  Network,
  Target,
  Building
} from "lucide-react";
import { toast } from "sonner";
import { addRecord, queueEmail } from "../lib/db";

const benefits = [
  { icon: TrendingUp, title: "Revenue Growth", desc: "Unlock consistent opportunities" },
  { icon: Users, title: "Exclusive Clients", desc: "Access enterprise clients" },
  { icon: Globe, title: "Global Reach", desc: "Expand your business globally" },
  { icon: Zap, title: "Smart Matching", desc: "AI-powered opportunity matching" },
];

const partnerTypes = [
  { 
    value: "staffing_vendor", 
    label: "Staffing Vendor",
    description: "Share your bench & access exclusive client requirements",
    details: "For IT staffing agencies with active consultants ready for deployment. Join 120+ vendors already on the network.",
    icon: Rocket,
    color: "blue"
  },
  { 
    value: "os_integrator", 
    label: "OS Integrator",
    description: "Build on our platform & extend functionality",
    details: "For SaaS companies, ATS providers, HR tech platforms. Integrate with HireNest OS API and offer unified workforce solutions.",
    icon: Plug,
    color: "purple"
  },
  { 
    value: "channel_partner", 
    label: "Channel Partner",
    description: "Resell HireNest OS to your enterprise clients",
    details: "For consulting firms, system integrators, and IT service companies. White-label or co-sell workforce solutions.",
    icon: Network,
    color: "green"
  },
  { 
    value: "talent_partner", 
    label: "Strategic Talent Partner",
    description: "Exclusive domain specialization",
    details: "For niche specialists (AI/ML, Blockchain, Cloud Architects). Get priority matching for high-value roles and direct client access.",
    icon: Target,
    color: "orange"
  },
  { 
    value: "enterprise_client", 
    label: "Enterprise Client",
    description: "Access our vendor network & AI matching",
    details: "For companies hiring at scale. Post once, reach 120+ verified vendors instantly. Looking to hire talent, not provide it.",
    icon: Building,
    color: "cyan"
  },
];

export default function Partner() {
  const [form, setForm] = useState({
    name: "", 
    email: "", 
    phone: "",
    company: "", 
    role: "", 
    partnerType: "", 
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [trackingId, setTrackingId] = useState("");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.company.trim()) newErrors.company = "Company name is required";
    if (!form.role.trim()) newErrors.role = "Your role/position is required";
    if (!form.partnerType) newErrors.partnerType = "Please select a partnership model";
    if (form.phone && !/^[\d\s\-\+\(\)]+$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (form.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors below");
      return;
    }

    setSubmitting(true);

    try {
      const docId = await addRecord("partner_applications", {
        company_name: form.company,
        contact_person: form.name,
        email: form.email,
        phone: form.phone || null,
        role: form.role,
        partnership_type: form.partnerType,
        message: form.message || "",
        status: "pending",
      });

      const generatedTrackingId = `APP-${docId.slice(0, 6).toUpperCase()}`;
      setTrackingId(generatedTrackingId);
      setSuccess(true);
      toast.success("Application submitted successfully!");

      try {
        await queueEmail({
          to:
            (import.meta.env.VITE_NOTIFICATION_EMAIL as string) ||
            "gopal@hirenestworkforce.com",
          subject: "HireNest — New Partner Application",
          text: `Tracking ID: ${generatedTrackingId}\n${Object.entries(form)
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n")}`,
        });
      } catch (err) {
        console.error("Email failed:", err);
      }

    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error(error.message || "Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm({
      name: "", email: "", phone: "", company: "", role: "", partnerType: "", message: "",
    });
    setErrors({});
    setSuccess(false);
    setTrackingId("");
  };

  const selectedPartnerType = partnerTypes.find(p => p.value === form.partnerType);

  return (
    <div className="pt-[72px] bg-slate-950 min-h-screen">

      {/* HERO */}
      <section 
        className="py-24 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">Partner With HireNest</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Join the world's first Workforce Operating System. 
            Scale your business with AI-powered hiring infrastructure.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl text-center font-bold text-white mb-12">Why Partner With Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 bg-slate-800 border border-slate-700 rounded-xl text-center hover:border-blue-500/50 transition-all group">
                <b.icon className="mx-auto mb-4 w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <h3 className="font-bold text-lg text-white mb-2">{b.title}</h3>
                <p className="text-sm text-slate-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Partner Application</h2>
            <p className="text-slate-400">Select your partnership model and tell us about your organization</p>
          </div>

          {success ? (
            <div className="text-center border border-green-500/30 p-8 rounded-xl bg-green-500/10">
              <CheckCircle2 className="mx-auto mb-4 w-16 h-16 text-green-400" />
              <h3 className="text-xl font-bold text-white mb-2">Application Submitted!</h3>
              <p className="text-slate-300 mb-4">
                Thank you for your interest in partnering with HireNest.
              </p>
              
              {trackingId && (
                <div className="bg-slate-900 border border-slate-700 p-4 rounded-lg mb-6 inline-block">
                  <p className="text-sm text-slate-400 mb-1">Your Tracking ID</p>
                  <p className="text-lg font-mono font-bold text-green-400">{trackingId}</p>
                </div>
              )}

              <div className="space-y-2 text-sm text-slate-400 mb-6">
                <p>📧 Confirmation email sent to <span className="text-slate-200">{form.email}</span></p>
                <p>⏱️ Our team will review your application within 24-48 hours</p>
                <p>📞 We'll contact you at {form.phone || form.email}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Submit Another Application
                </button>
                <a
                  href="mailto:partnerships@hirenestworkforce.com"
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact Partnership Team
                </a>
              </div>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="space-y-8"
              noValidate
            >

              {/* PARTNER TYPE SELECTION - CARD GRID */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-4 text-center">
                  Select Partnership Model <span className="text-red-400">*</span>
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {partnerTypes.map((type) => {
                    const Icon = type.icon;
                    const isSelected = form.partnerType === type.value;
                    const colorClasses = {
                      blue: isSelected ? 'border-blue-500 bg-blue-500/10' : 'border-slate-700 hover:border-blue-500/50',
                      purple: isSelected ? 'border-purple-500 bg-purple-500/10' : 'border-slate-700 hover:border-purple-500/50',
                      green: isSelected ? 'border-green-500 bg-green-500/10' : 'border-slate-700 hover:border-green-500/50',
                      orange: isSelected ? 'border-orange-500 bg-orange-500/10' : 'border-slate-700 hover:border-orange-500/50',
                      cyan: isSelected ? 'border-cyan-500 bg-cyan-500/10' : 'border-slate-700 hover:border-cyan-500/50',
                    }[type.color];

                    return (
                      <div
                        key={type.value}
                        onClick={() => setForm({ ...form, partnerType: type.value })}
                        className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${colorClasses}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${
                            type.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                            type.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                            type.color === 'green' ? 'bg-green-500/20 text-green-400' :
                            type.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-cyan-500/20 text-cyan-400'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="font-bold text-white mb-1">{type.label}</h3>
                            <p className="text-sm text-slate-400 mb-2">{type.description}</p>
                            <p className="text-xs text-slate-500 leading-relaxed">{type.details}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {errors.partnerType && (
                  <p className="text-red-400 text-sm mt-3 text-center">{errors.partnerType}</p>
                )}
              </div>

              {/* SELECTED TYPE SUMMARY */}
              {selectedPartnerType && (
                <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
                  <p className="text-sm text-slate-400">
                    Selected: <span className="text-white font-medium">{selectedPartnerType.label}</span>
                  </p>
                </div>
              )}

              {/* CONTACT DETAILS */}
              <div className="p-8 bg-slate-900 border border-slate-800 rounded-xl space-y-6">
                <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                
                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="text-left">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`bg-slate-800 border text-white placeholder-slate-500 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.name ? 'border-red-500' : 'border-slate-700'
                      }`}
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1.5">{errors.name}</p>}
                  </div>

                  <div className="text-left">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`bg-slate-800 border text-white placeholder-slate-500 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.email ? 'border-red-500' : 'border-slate-700'
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="text-left">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number <span className="text-slate-500 text-xs">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={`bg-slate-800 border text-white placeholder-slate-500 p-3 pl-10 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                          errors.phone ? 'border-red-500' : 'border-slate-700'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-400 text-sm mt-1.5">{errors.phone}</p>}
                  </div>

                  <div className="text-left">
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                      Company Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        id="company"
                        placeholder="Acme Corporation"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={`bg-slate-800 border text-white placeholder-slate-500 p-3 pl-10 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                          errors.company ? 'border-red-500' : 'border-slate-700'
                        }`}
                      />
                    </div>
                    {errors.company && <p className="text-red-400 text-sm mt-1.5">{errors.company}</p>}
                  </div>
                </div>

                {/* Role */}
                <div className="text-left">
                  <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Role/Position <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      id="role"
                      placeholder="e.g., CEO, Business Development Manager"
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className={`bg-slate-800 border text-white placeholder-slate-500 p-3 pl-10 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.role ? 'border-red-500' : 'border-slate-700'
                      }`}
                    />
                  </div>
                  {errors.role && <p className="text-red-400 text-sm mt-1.5">{errors.role}</p>}
                </div>

                {/* Message */}
                <div className="text-left">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Tell us about your goals <span className="text-slate-500 text-xs">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="What are you looking to achieve with HireNest? Any specific requirements or questions?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={1000}
                    rows={4}
                    className={`bg-slate-800 border text-white placeholder-slate-500 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-slate-700'
                    }`}
                  />
                  <div className="flex justify-between mt-2">
                    {errors.message ? (
                      <p className="text-red-400 text-sm">{errors.message}</p>
                    ) : (
                      <span></span>
                    )}
                    <span className={`text-xs ${form.message.length > 900 ? 'text-orange-400' : 'text-slate-500'}`}>
                      {form.message.length}/1000
                    </span>
                  </div>
                </div>
              </div>

              {/* Privacy Note */}
              <p className="text-xs text-slate-500 text-center">
                By submitting this form, you agree to our{" "}
                <a href="/privacy" className="text-blue-400 hover:text-blue-300 hover:underline">Privacy Policy</a>
                . We'll only use your information to process your partnership application.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-blue-600 text-white rounded-lg font-medium text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Alternative Contact */}
              <div className="text-center pt-4 border-t border-slate-800">
                <p className="text-sm text-slate-400">
                  Prefer to email directly?{" "}
                  <a 
                    href="mailto:partnerships@hirenestworkforce.com" 
                    className="text-blue-400 hover:text-blue-300 hover:underline font-medium"
                  >
                    partnerships@hirenestworkforce.com
                  </a>
                </p>
              </div>

            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Have questions?</h3>
          <p className="text-slate-400 mb-6">
            Our partnership team is here to help you find the right collaboration opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+1-800-HIRENEST" 
              className="inline-flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +1 (800) HIRENEST
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              General Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
