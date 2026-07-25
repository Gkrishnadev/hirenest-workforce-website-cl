import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck, Server, Cloud, LineChart } from "lucide-react";
import SEO from "../components/SEO";

const consultingServices = [
  {
    icon: Cloud,
    title: "Cloud Strategy & Migration",
    desc: "Assess your current infrastructure, define a cloud roadmap, and seamlessly migrate workloads to AWS, Azure, or Google Cloud for high availability and scalability.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Risk",
    desc: "Protect your digital assets with comprehensive security audits, compliance checks, and robust cybersecurity architectures tailored to your industry.",
  },
  {
    icon: Server,
    title: "IT Infrastructure Optimization",
    desc: "Modernize your IT environment. We help reduce operational costs while improving performance through virtualized, scalable infrastructure.",
  },
  {
    icon: LineChart,
    title: "Digital Transformation",
    desc: "Reimagine your business processes through technology. We integrate AI, automation, and modern data platforms to drive measurable business outcomes.",
  },
];

export default function ITConsulting() {
  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      <SEO title="IT Consulting & Technology Advisory Services India | HireNest Workforce" description="Expert IT consulting, cloud strategy, and digital transformation advisory services. HireNest Workforce helps modernize your IT infrastructure." path="/it-consulting" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0F1A]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.15),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.1),_transparent_50%)]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">Advisory & Consulting</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Strategic IT Consulting for Modern Businesses
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Bridge the gap between business goals and technology. From digital transformation to cloud strategy, we architect solutions that drive growth.
          </p>
        </div>
      </section>

      {/* Core Consulting Areas */}
      <section className="py-20 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Consulting Capabilities
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
              We provide actionable insights and technical leadership to solve your most complex operational challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {consultingServices.map((service) => (
              <div
                key={service.title}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Engage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                A structured approach to transformation.
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We don't just deliver a PDF of recommendations. We partner with you to analyze, architect, and execute the roadmap from start to finish.
              </p>
              
              <ul className="space-y-4">
                {[
                  "In-depth technical audits and assessments",
                  "Aligning IT infrastructure with business objectives",
                  "Cost-benefit analysis of technology investments",
                  "Implementation oversight and managed support",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20" />
              <div className="relative bg-[#0B0F1A] border border-white/10 p-8 rounded-2xl">
                <p className="text-cyan-400 font-semibold mb-2">Our Process</p>
                <h3 className="text-2xl font-bold text-white mb-6">From Audit to Execution</h3>
                <div className="space-y-6">
                  <div className="pl-6 border-l-2 border-cyan-500/30 relative">
                    <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[7px] top-2" />
                    <h4 className="text-white font-semibold text-lg">1. Discovery & Audit</h4>
                    <p className="text-gray-400 text-sm mt-1">Deep dive into current systems, bottlenecks, and security posture.</p>
                  </div>
                  <div className="pl-6 border-l-2 border-cyan-500/30 relative">
                    <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[7px] top-2" />
                    <h4 className="text-white font-semibold text-lg">2. Strategy & Architecture</h4>
                    <p className="text-gray-400 text-sm mt-1">Design the target state and create a prioritized implementation roadmap.</p>
                  </div>
                  <div className="pl-6 border-l-2 border-cyan-500/30 relative">
                    <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[7px] top-2" />
                    <h4 className="text-white font-semibold text-lg">3. Execution & Optimization</h4>
                    <p className="text-gray-400 text-sm mt-1">Deploy solutions alongside your team and optimize for scale.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* FAQ Section */}
      <section className="py-20 bg-[#0B0F1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">What does an IT consulting firm do?</h3>
              <p className="text-gray-400">
                An IT consulting firm helps organizations align their technology strategy with business goals. At HireNest Workforce, we assess your current infrastructure, identify inefficiencies, design scalable solutions (like cloud migrations or digital transformations), and guide the execution to ensure long-term ROI.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">How much does IT consulting cost in India?</h3>
              <p className="text-gray-400">
                IT consulting costs in India vary significantly based on the scope, complexity, and duration of the engagement. We offer flexible engagement models, including fixed-bid for specific projects and time-and-materials for ongoing advisory, ensuring cost-effectiveness without compromising quality.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">What IT consulting services does HireNest Workforce provide?</h3>
              <p className="text-gray-400">
                HireNest Workforce offers software development strategy, digital transformation roadmaps, cloud infrastructure planning, cybersecurity audits, and managed IT solutions to modernize your operations.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">What industries does HireNest Workforce serve?</h3>
              <p className="text-gray-400">
                We serve a wide range of industries including healthcare, finance, retail, and manufacturing, providing tailored IT consulting and technology solutions to meet industry-specific compliance and operational challenges.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What does an IT consulting firm do?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An IT consulting firm helps organizations align their technology strategy with business goals. At HireNest Workforce, we assess your current infrastructure, identify inefficiencies, design scalable solutions (like cloud migrations or digital transformations), and guide the execution to ensure long-term ROI."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does IT consulting cost in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "IT consulting costs in India vary significantly based on the scope, complexity, and duration of the engagement. We offer flexible engagement models, including fixed-bid for specific projects and time-and-materials for ongoing advisory, ensuring cost-effectiveness without compromising quality."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What IT consulting services does HireNest Workforce provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HireNest Workforce offers software development strategy, digital transformation roadmaps, cloud infrastructure planning, cybersecurity audits, and managed IT solutions to modernize your operations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries does HireNest Workforce serve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We serve a wide range of industries including healthcare, finance, retail, and manufacturing, providing tailored IT consulting and technology solutions to meet industry-specific compliance and operational challenges."
                  }
                }
              ]
            })
          }}
        />
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-[#0B0F1A] to-blue-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.15),_transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to future-proof your IT?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Schedule a consultation with our technology advisors and explore how we can optimize your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2">
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
