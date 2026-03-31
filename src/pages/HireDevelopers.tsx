import SEO from "../components/SEO";
import { Link } from "@tanstack/react-router";

export default function HireDevelopers() {
  return (
    <div className="pt-[72px]">

      {/* ✅ SEO */}
      <SEO
        title="Hire Developers in India | IT Staffing Company | HireNest Workforce"
        description="Hire developers in India including React, Angular, Node.js, Java, DevOps, AI/ML, SAP, Salesforce and more Niche IT Hiring. HireNest is a leading IT staffing company in India delivering top tech talent fast."
        path="/hire-developers-india"
      />

      {/* 🔥 PREMIUM HERO */}
      <section
        className="py-24 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.18 0.05 260) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Hire Developers in India
          </h1>

          <p className="text-lg text-white/80 mb-8">
            HireNest Workforce is a leading <b>IT staffing company in India</b> helping businesses 
            <b> hire developers in India</b> across technologies like React, Angular, Node.js, Java, 
            DevOps, AI/ML, SAP, Salesforce and more niche IT hiring through our trusted vendor network.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">

            <Link to="/submit-requirement">
              <button
                className="px-8 py-3 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(var(--electric)), oklch(0.60 0.20 262))",
                }}
              >
                Hire Developers
              </button>
            </Link>

            <Link to="/vendors">
              <button className="px-8 py-3 rounded-lg font-semibold border border-white/30 text-white hover:bg-white/10 transition">
                Join Vendor Network
              </button>
            </Link>

          </div>

        </div>
      </section>

      {/* 🔥 TECH STACK */}
      <section
        className="py-24"
        style={{ backgroundColor: "oklch(var(--surface))" }}
      >
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12">
            Technologies We Cover
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "React.js Developers",
              "Angular Developers",
              "Node.js Developers",
              "Java Developers",
              "Golang Developers",
              "DevOps Engineers",
              "AI/ML Engineers",
              "Gen AI Engineers",
              "LLM Fine-tuning Experts",
              "Data Scientists",
              "SQL DBA Developers",
              "QA Automation Engineers",
              "UI/UX Designers",
              "Android Developers",
              "React Native Developers",
              ".NET + Angular Developers",
              "MERN Stack Developers",
              "MEAN Stack Developers",
              "SAP Developers",
              "SAP HANA",
              "SAP ABAP",
              "Salesforce CPQ Experts"
            ].map((tech) => (
              <div
                key={tech}
                className="p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition"
              >
                <p className="font-medium text-sm">{tech}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 🔥 WHY HIRENEST */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Why Choose HireNest Workforce
          </h2>

          <p className="text-gray-600 mb-12">
            As a trusted <b>IT recruitment agency in India</b>, HireNest connects companies 
            with pre-vetted developers through a powerful vendor network ensuring faster hiring and better quality.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">

            <div className="p-6 rounded-xl border shadow-sm">
              <h3 className="font-semibold mb-2 text-lg">120+ Vendors</h3>
              <p className="text-sm text-gray-500">Verified staffing partners</p>
            </div>

            <div className="p-6 rounded-xl border shadow-sm">
              <h3 className="font-semibold mb-2 text-lg">500+ Consultants</h3>
              <p className="text-sm text-gray-500">Ready-to-deploy talent</p>
            </div>

            <div className="p-6 rounded-xl border shadow-sm">
              <h3 className="font-semibold mb-2 text-lg">24-Hour Matching</h3>
              <p className="text-sm text-gray-500">Fast hiring turnaround</p>
            </div>

          </div>

        </div>
      </section>

      {/* 🔥 FINAL CTA */}
      <section
        className="py-24 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.16 0.06 250) 100%)",
        }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Start Hiring Today
        </h2>

        <p className="text-white/80 mb-8">
          Get matched with top developers within 24 hours.
        </p>

        <Link to="/submit-requirement">
          <button
            className="px-8 py-3 rounded-lg font-semibold text-white shadow-lg hover:scale-105 transition"
            style={{
              background:
                "linear-gradient(135deg, oklch(var(--electric)), oklch(0.60 0.20 262))",
            }}
          >
            Submit Requirement
          </button>
        </Link>
      </section>

    </div>
  );
}
