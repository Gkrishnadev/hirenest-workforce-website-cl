import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

const stackGroups = [
  {
    category: "Frontend",
    items: ["React", "Angular", "Flutter"],
  },
  {
    category: "Backend",
    items: ["Node.js", ".NET", "Python", "Java"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Firebase"],
  },
  {
    category: "AI & LLM",
    items: ["OpenAI", "Gemini", "LangChain"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
];

export default function TechnologyStack() {
  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      <SEO
        title="Technology Stack | HireNest Workforce"
        description="The technology stack HireNest Workforce builds with — React, Angular, Node.js, .NET, Python, Java, Flutter, Firebase, AWS, Azure, Google Cloud, OpenAI, Gemini, LangChain, Docker, Kubernetes, PostgreSQL, MongoDB, Redis."
        path="/technology-stack"
      />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0F1A]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.15),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.1),_transparent_50%)]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">Technology Stack</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            The Stack Behind Our Builds
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We hire for these stacks and we build with them — the same engineers
            staffing your team can ship your product.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {stackGroups.map((group) => (
            <div key={group.category}>
              <h2 className="text-cyan-400 font-semibold text-sm uppercase tracking-[0.2em] mb-6">
                {group.category}
              </h2>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:border-cyan-500/40 hover:bg-white/10 transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-[#0B0F1A] to-blue-900/30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need engineers or a build team on this stack?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/hire-developers-india">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                Hire Talent <ArrowRight className="w-4 h-4 inline ml-2" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all">
                Book a Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
