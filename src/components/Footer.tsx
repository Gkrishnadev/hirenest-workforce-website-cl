// src/components/Footer.tsx
import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useRouter } from "@tanstack/react-router";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const router = useRouter();
  const currentPath = router.state.location.pathname;

  // Pages that should use the premium dark footer
  const premiumDarkPages = ["/", "/services", "/about", "/hire-developers-india", "/vendor-network", "/contact", "/careers", "/early-access"];
  const isPremiumDark = premiumDarkPages.includes(currentPath);

  // Premium Dark Footer (matches homepage)
  if (isPremiumDark) {
    return (
      <footer className="bg-[#0B0F1A] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1 - Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">HireNest</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">WORKFORCE</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Connecting world-class companies with elite talent through an
                intelligent network of trusted staffing partners.
              </p>
            </div>

            {/* Col 2 - Quick Links */}
            <div>
              <h4 className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-5">
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
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 - For Partners */}
            <div>
              <h4 className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-5">
                For Partners
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Partner With Us", to: "/partner" },
                  { label: "Vendor Onboarding", to: "/vendors" },
                  { label: "Careers", to: "/careers" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 - Contact */}
            <div>
              <h4 className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-5">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-cyan-400" />
                  <span className="text-sm text-gray-400">
                    info@hirenestworkforce.com
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-cyan-400" />
                  <span className="text-sm text-gray-400">
                    +91 9392894748
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-cyan-400" />
                  <span className="text-sm text-gray-400">
                    Headquarters at Hyderabad, Telangana
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
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
                href="https://www.linkedin.com/company/hirenest-workforce-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1"
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

  // Light Theme Footer (for functional pages)
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 - Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white">HireNest</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">WORKFORCE</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Connecting world-class companies with elite talent through an
              intelligent network of trusted staffing partners.
            </p>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h4 className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-5">
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
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - For Partners */}
          <div>
            <h4 className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-5">
              For Partners
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Partner With Us", to: "/partner" },
                { label: "Vendor Onboarding", to: "/vendors" },
                { label: "Careers", to: "/careers" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-blue-400" />
                <span className="text-sm text-gray-400">
                  info@hirenestworkforce.com
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-blue-400" />
                <span className="text-sm text-gray-400">
                  +91 9392894748
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-blue-400" />
                <span className="text-sm text-gray-400">
                  Headquarters at Hyderabad, Telangana
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
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
              href="https://www.linkedin.com/company/hirenest-workforce-pvt-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
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
