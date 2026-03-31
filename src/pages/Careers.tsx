import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Link } from "@tanstack/react-router";
import SEO from "../components/SEO";

export default function Careers() {
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) setJobs(data || []);
    };

    fetchJobs();
  }, []);

  return (
    <div className="pt-[72px]">

      {/* SEO */}
     <SEO
  title="Careers at HireNest Workforce | We're Hiring 🚀"
  description="Explore open positions at HireNest Workforce. Apply for IT Staffing, Recruitment, and Business Development roles. Start your career with us today."
  path="/careers?jobs"
/>

      {/* HERO */}
      <section
        className="py-20 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.20 0.05 265) 100%)",
        }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Careers at HireNest
        </h1>
        <p className="text-white/80">
          Join our growing team 🚀
        </p>
      </section>

      {/* JOB LIST */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 space-y-6">

          {jobs.length === 0 && (
            <p className="text-center text-gray-500">
              No openings right now.
            </p>
          )}

          {jobs.map((job) => {

            // ✅ SAFE SHARE URL (NO BLANK PAGE)
            const jobUrl = `${window.location.origin}/careers?jobs`;

            return (
              <div
                key={job.id}
                className="p-8 border rounded-2xl bg-white shadow-sm hover:shadow-lg transition flex flex-col gap-6"
              >
                {/* TITLE */}
                <div>
                  <h3 className="font-semibold text-xl">
                    {job.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {job.location}
                  </p>
                </div>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                  {job.description}
                </p>

                {/* CTA + SHARE */}
                <div className="flex flex-wrap items-center gap-4">

                  {/* APPLY BUTTON */}
                  <Link
                    to="/apply"
                    search={{ role: job.title }}
                  >
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition">
                      Apply Now
                    </button>
                  </Link>

                  {/* ✅ LINKEDIN SHARE */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border rounded-md text-blue-600 hover:bg-blue-50 transition"
                  >
                    LinkedIn
                  </a>

                  {/* ✅ WHATSAPP SHARE (PREMIUM TEXT) */}
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `🚀 Hiring Now!

${job.title}

👉 View Job & Apply:
${jobUrl}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border rounded-md text-green-600 hover:bg-green-50 transition"
                  >
                    WhatsApp
                  </a>

                </div>
              </div>
            );
          })}

        </div>
      </section>

    </div>
  );
}
