import { useParams, useNavigate } from "@tanstack/react-router";

export default function JobDetail() {
  const { role } = useParams({ from: "/jobs/$role" });
  const navigate = useNavigate();

  // 🔥 SIMPLE JOB DATA (you can expand later)
  const jobs: any = {
    bdm: {
      title: "Business Development Manager (IT Staffing & Recruitment)",
      description: `
We are looking for a Business Development Manager with strong experience in IT Staffing.

Responsibilities:
- Client acquisition
- Requirement gathering
- Vendor coordination

Requirements:
- 3+ years experience
- Strong communication
      `,
    },
  };

  const job = jobs[role];

  if (!job) {
    return <div className="p-6">Job not found</div>;
  }

  return (
    <div className="pt-[72px] p-6 max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">
        {job.title}
      </h1>

      <p className="whitespace-pre-line text-gray-700 mb-6">
        {job.description}
      </p>

      {/* ✅ APPLY BUTTON */}
      <button
        onClick={() =>
          navigate({
            to: "/apply",
            search: { role: job.title },
          })
        }
        className="px-6 py-3 bg-blue-600 text-white rounded-md"
      >
        Apply Now
      </button>

    </div>
  );
}
