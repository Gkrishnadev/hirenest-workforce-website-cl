import SEO from "../components/SEO";
import { Link } from "@tanstack/react-router";
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

/* ================= DATA ================= */

const services = [
  {
    icon: Code2,
    title: "IT Staffing",
    desc: "HireNest provides highly skilled software engineers and developers for business needs.",
  },
  {
    icon: Brain,
    title: "AI & Data Talent",
    desc: "Connect with experts in AI, ML, and Data Engineering.",
  },
  {
    icon: FileText,
    title: "Contract Staffing",
    desc: "Scale teams quickly with flexible workforce solutions.",
  },
  {
    icon: Users,
    title: "Permanent Hiring",
    desc: "Hire long-term employees aligned with your business goals.",
  },
];

const steps = [
  {
    n: "01",
    title: "Join the Network",
    desc: "Register as a client, vendor, or recruiter.",
  },
  {
    n: "02",
    title: "Share Requirements",
    desc: "Post requirements or showcase talent.",
  },
  {
    n: "03",
    title: "Collaborate & Close",
    desc: "Work together and close positions faster.",
  },
];

const stats = [
  { number: "120+", label: "Vendors" },
  { number: "500+", label: "Consultants" },
  { number: "40+", label: "Requirements" },
];

/* ================= COMPONENT ================= */

export default function Home() {
  return (
    <div>

      <SEO
        title="HireNest Workforce | Hire Faster"
        description="HireNest OS connects clients, vendors, and recruiters into one hiring system."
        path="/"
      />

      <div className="pt-[72px]">

        {/* HERO */}
        <section className="py-28 text-center bg-black text-white">
          <h1 className="text-5xl font-bold mb-6">
            HireNest Workforce
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A Workforce Operating System built to simplify hiring through structured collaboration.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link to="/vendors">
              <button className="bg-blue-600 px-6 py-3 rounded">
                Join as Vendor
              </button>
            </Link>

            <Link to="/submit-requirement">
              <button className="border px-6 py-3 rounded">
                Post Requirement
              </button>
            </Link>
          </div>
        </section>

        {/* WHAT IS HIRENEST */}
        <section className="py-20 bg-white text-center">
          <h2 className="text-4xl font-bold mb-6">
            What is HireNest Workforce?
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600">
            HireNest Workforce is not just a staffing platform — it is a structured workforce operating system.
            It connects clients, vendors, and recruiters into one unified hiring pipeline powered by HireNest OS.
          </p>
        </section>

        {/* HOW HIRENEST OS WORKS */}
        <section className="py-20 bg-gray-100 text-center">
          <h2 className="text-4xl font-bold mb-10">
            How HireNest OS Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-bold mb-2">Clients</h3>
              <p className="text-sm text-gray-600">
                Post requirements once and reach multiple vendors instantly.
              </p>
            </div>

            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-bold mb-2">Vendors</h3>
              <p className="text-sm text-gray-600">
                Get real-time requirements and submit candidates faster.
              </p>
            </div>

            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-bold mb-2">Recruiters</h3>
              <p className="text-sm text-gray-600">
                Track pipeline and improve closures efficiently.
              </p>
            </div>

          </div>
        </section>

        {/* STATS */}
        <section className="py-16 text-center bg-white">
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label}>
                <h3 className="text-3xl font-bold">{s.number}</h3>
                <p className="text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-gray-50 text-center">
          <h2 className="text-4xl font-bold mb-10">Services</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((s) => (
              <div key={s.title} className="p-6 bg-white rounded shadow">
                <s.icon className="mx-auto mb-4" />
                <h3 className="font-bold">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-white text-center">
          <h2 className="text-4xl font-bold mb-10">Process</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div key={s.n}>
                <h3 className="text-xl font-bold">{s.n}</h3>
                <p>{s.title}</p>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🚀 EARLY ACCESS CTA */}
        <section className="py-24 text-center bg-black text-white">
          <h2 className="text-4xl font-bold mb-6">
            Get Early Access to HireNest OS 🚀
          </h2>

          <p className="mb-8 text-gray-300">
            Experience structured hiring before public launch.
          </p>

          <Link to="/early-access">
            <button className="bg-white text-black px-8 py-4 rounded font-semibold">
              Request Early Access
            </button>
          </Link>

          <p className="text-xs mt-4 text-gray-400">
            Limited access • Priority onboarding
          </p>
        </section>

      </div>
    </div>
  );
}
