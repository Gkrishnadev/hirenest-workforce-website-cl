import { useEffect, useState } from "react";
import { listRecords } from "../lib/db";
import { useNavigate } from "@tanstack/react-router";
import SEO from "../components/SEO";

export default function Careers() {

  // ==========================
  // STATE
  // ==========================
  const [jobs, setJobs] = useState<any[]>([]);
  const [showInstruction, setShowInstruction] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const navigate = useNavigate();

  // ==========================
  // FETCH JOBS
  // ==========================
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await listRecords("jobs");
        setJobs(data || []);
      } catch (err) {
        console.error("Failed to load jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="pt-[72px]">

      {/* SEO */}
      <SEO
        title="Careers at HireNest Workforce | We're Hiring 🚀"
        description="Explore open positions at HireNest Workforce."
        path="/careers"
      />

      {/* HERO */}
      <section className="py-20 text-center bg-gray-900">
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
            const jobUrl = `${window.location.origin}/careers`;

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

                {/* ACTIONS */}
                <div className="flex flex-wrap items-center gap-4">

                  {/* APPLY BUTTON */}
                  <button
                    onClick={() => {
                      setSelectedRole(job.title);
                      setShowInstruction(true);
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition"
                  >
                    Apply Now
                  </button>

                  {/* LINKEDIN SHARE */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border rounded-md text-blue-600 hover:bg-blue-50 transition"
                  >
                    LinkedIn
                  </a>

                  {/* WHATSAPP SHARE */}
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `🚀 Hiring Now!\n\n${job.title}\n\n👉 ${jobUrl}`
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

      {/* ==========================
          PRE-APPLY MODAL
      ========================== */}
      {showInstruction && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6">

            <h2 className="text-xl font-bold mb-3">
              🚨 Before You Apply — Read This Carefully
            </h2>

            <p className="text-sm text-gray-600 mb-4">
              This is a high ownership role at HireNest. We shortlist only serious candidates.
            </p>

            <div className="space-y-3 text-sm">

              <div>
                <b>🎯 Role Expectation:</b>
                <ul className="list-disc ml-5 mt-1 text-gray-600">
                  <li>Work directly with founders</li>
                  <li>Own real outcomes (not just tasks)</li>
                  <li>High accountability role</li>
                </ul>
              </div>

              <div>
                <b>⚠️ CV Requirements:</b>
                <ul className="list-disc ml-5 mt-1 text-gray-600">
                  <li>Only relevant experience</li>
                  <li>No fake or inflated roles</li>
                  <li>Clear proof of work (clients / results)</li>
                </ul>
              </div>

              <div>
                <b>❌ Auto Rejection If:</b>
                <ul className="list-disc ml-5 mt-1 text-red-500">
                  <li>Generic resume</li>
                  <li>Unrelated skills added</li>
                  <li>No clarity on role fit</li>
                </ul>
              </div>

            </div>

            <p className="text-xs text-gray-400 mt-3">
              ⚡ Less than 20% applicants pass this stage
            </p>

            <div className="mt-6 flex gap-3">

              <button
                onClick={() => setShowInstruction(false)}
                className="w-full border rounded-lg py-2"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setShowInstruction(false);
                  navigate({
                    to: "/apply",
                    search: { role: selectedRole },
                  });
                }}
                className="w-full bg-blue-600 text-white rounded-lg py-2"
              >
                I Understand — Continue
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
