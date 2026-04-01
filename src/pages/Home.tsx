import SEO from "../components/SEO";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  Code2,
  FileText,
  Globe,
  Network,
  Quote,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function Home() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    code: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // 🔐 Keep your existing logic here (API / Supabase etc)
    console.log("Early Access Request:", form);

    alert("Request submitted. We will contact you soon.");
    setShowEarlyAccess(false);
  };

  return (
    <div>
      <SEO
        title="HireNest Workforce | Hire Faster with HireNest OS"
        description="HireNest Workforce is a structured hiring platform powered by HireNest OS connecting clients, vendors, and recruiters."
        path="/"
      />

      <div className="pt-[72px]">

        {/* 🔥 PREMIUM HERO */}
        <section className="relative overflow-hidden bg-[#0B0F1A] text-white">
          <div className="max-w-7xl mx-auto px-6 py-28">

            <p className="text-sm text-cyan-400 mb-4">
              Workforce Operating System
            </p>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Hire Faster with <span className="text-cyan-400">HireNest OS</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-8">
              HireNest Workforce is not just a staffing company.  
              It is a <b>Workforce Operating System</b> that connects clients,
              vendors, and recruiters into one structured hiring pipeline.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link to="/vendors">
                <button className="bg-cyan-500 px-6 py-3 rounded-lg font-semibold">
                  Join as Vendor
                </button>
              </Link>

              <button
                onClick={() => setShowEarlyAccess(true)}
                className="border border-white/30 px-6 py-3 rounded-lg"
              >
                Get Early Access 🚀
              </button>
            </div>

          </div>
        </section>

        {/* 🔥 WHAT IS HIRENEST */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            What is HireNest Workforce?
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600">
            HireNest Workforce is a structured hiring ecosystem powered by
            <b> HireNest OS</b>.  
            It enables seamless collaboration between companies, staffing vendors,
            and recruiters — transforming fragmented hiring into a unified pipeline.
          </p>
        </section>

        {/* 🔥 HOW OS WORKS */}
        <section className="py-20 bg-gray-50">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-bold mb-2">Clients</h3>
              <p>Post requirements once and reach multiple vendors instantly.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-bold mb-2">Vendors</h3>
              <p>Get real-time requirements and submit candidates faster.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-bold mb-2">Recruiters</h3>
              <p>Track pipeline and improve closures efficiently.</p>
            </div>

          </div>
        </section>

        {/* 🔥 EARLY ACCESS MODAL */}
        {showEarlyAccess && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl w-full max-w-md">

              <h2 className="text-xl font-bold mb-4">
                Get Early Access to HireNest OS 🚀
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  placeholder="Name"
                  className="w-full border p-3 rounded"
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <input
                  placeholder="Email"
                  className="w-full border p-3 rounded"
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />

                <input
                  placeholder="Company"
                  className="w-full border p-3 rounded"
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                />

                <input
                  placeholder="Early Access Code"
                  className="w-full border p-3 rounded"
                  onChange={(e) =>
                    setForm({ ...form, code: e.target.value })
                  }
                />

                <button className="w-full bg-cyan-500 text-white py-3 rounded">
                  Request Access
                </button>

              </form>

              <button
                className="mt-4 text-sm text-gray-500"
                onClick={() => setShowEarlyAccess(false)}
              >
                Close
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
