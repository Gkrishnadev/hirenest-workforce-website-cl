import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      style={{ backgroundColor: "oklch(var(--navy))" }}
      className="text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 - Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/assets/uploads/Logo.png"
                alt="HireNest Workforce"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.75 0.02 255)" }}
            >
              Connecting world-class companies with elite talent through an
              intelligent network of trusted staffing partners.
            </p>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h4
              className="font-display font-semibold text-sm uppercase tracking-widest mb-5"
              style={{ color: "oklch(var(--electric-light))" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About HireNest", to: "/about" },
                { label: "Vendor Network", to: "/vendor-network" },
                { label: "Submit Requirement", to: "/submit-requirement" },
                { label: "Bench Consultants", to: "/vendors" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "oklch(0.75 0.02 255)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - For Partners */}
          <div>
            <h4
              className="font-display font-semibold text-sm uppercase tracking-widest mb-5"
              style={{ color: "oklch(var(--electric-light))" }}
            >
              For Partners
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Partner With Us", to: "/partner" },
                { label: "Vendor Onboarding", to: "/vendors" },
                { label: "Careers", to: "/about" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "oklch(0.75 0.02 255)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4
              className="font-display font-semibold text-sm uppercase tracking-widest mb-5"
              style={{ color: "oklch(var(--electric-light))" }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "oklch(var(--electric-light))" }}
                />
                <span
                  className="text-sm"
                  style={{ color: "oklch(0.75 0.02 255)" }}
                >
                  info@hirenestworkforce.com
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "oklch(var(--electric-light))" }}
                />
                <span
                  className="text-sm"
                  style={{ color: "oklch(0.75 0.02 255)" }}
                >
                  +91 9392894748
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "oklch(var(--electric-light))" }}
                />
                <span
                  className="text-sm"
                  style={{ color: "oklch(0.75 0.02 255)" }}
                >
                  Headquarters at Hyderabad, Telangana
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderColor: "oklch(0.25 0.03 265)",
            color: "oklch(0.6 0.015 255)",
          }}
        >
          <p>© {year} HireNest Workforce. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span>|</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span>|</span>
            <a
              href="https://linkedin.com/company/hirenestworkforce"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
              data-ocid="footer.linkedin.link"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
          </div>
          <p>
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
