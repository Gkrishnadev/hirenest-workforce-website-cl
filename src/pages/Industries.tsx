import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Banknote,
  Building2,
  GraduationCap,
  Heart,
  Landmark,
  Package,
  Rocket,
  ShoppingCart,
  Truck,
  Wrench,
} from "lucide-react";
import SEO from "../components/SEO";

const industries = [
  { icon: Heart, name: "Healthcare" },
  { icon: Landmark, name: "Banking" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Wrench, name: "Manufacturing" },
  { icon: Banknote, name: "FinTech" },
  { icon: GraduationCap, name: "EdTech" },
  { icon: Truck, name: "Logistics" },
  { icon: Rocket, name: "AI Startups" },
  { icon: Package, name: "Product Companies" },
  { icon: Building2, name: "Government" },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      <SEO
        title="Industries We Serve | HireNest Workforce"
        description="HireNest Workforce delivers staffing, software development, and AI solutions across Healthcare, Banking, Retail, Manufacturing, FinTech, EdTech, Logistics, and more."
        path="/industries"
      />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0F1A]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.15),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.1),_transparent_50%)]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">Industries</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Built for Every Industry
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From regulated enterprises to early-stage AI startups, we adapt our staffing
            and technology delivery to how your industry actually works.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:-translate-y-1 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mx-auto mb-4">
                  <ind.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold text-sm">{ind.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-[#0B0F1A] to-blue-900/30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Don't see your industry?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We work with teams outside this list too — tell us what you're building.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
              Talk to Us <ArrowRight className="w-4 h-4 inline ml-2" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
