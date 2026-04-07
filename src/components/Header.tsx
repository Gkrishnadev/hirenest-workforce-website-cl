import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Vendor Network", to: "/vendor-network" },
  { label: "Hire Developers", to: "/hire-developers-india" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Careers", to: "/careers" }
];

// Pages that should use the premium dark header (match homepage)
const premiumDarkPages = ["/", "/services", "/about", "/hire-developers-india", "/vendor-network", "/contact", "/careers"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  // Check if current page should use premium dark theme
  const isPremiumDark = premiumDarkPages.includes(currentPath);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  // Premium Dark Header (matches homepage)
  if (isPremiumDark) {
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0B0F1A] border-b border-white/10" : "bg-[#0B0F1A]/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - SAME AS OTHER PAGES (white/light version) */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <img
                src="/images/Logo.png"
                alt="HireNest Workforce"
                className="h-12 w-auto object-contain transition-all duration-200 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-sm font-medium transition-colors ${
                    currentPath === link.to 
                      ? "text-cyan-400" 
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <Link to="/vendors">
                <button className="px-4 py-2 text-sm font-medium text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-all">
                  Join as Vendor
                </button>
              </Link>
              <Link to="/early-access">
                <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                  Early Access
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-20 bg-[#0B0F1A] border-b border-white/10 shadow-2xl">
            <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors text-base font-medium py-3 px-4 rounded-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Link to="/vendors">
                  <button className="w-full px-4 py-3 text-sm font-medium text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-all">
                    Join as Vendor
                  </button>
                </Link>
                <Link to="/early-access">
                  <button className="w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    Early Access
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    );
  }

  // Light Theme Header (for functional pages: admin, forms, etc.)
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo - SAME STYLE */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/images/Logo.png"
              alt="HireNest Workforce"
              className="h-12 w-auto object-contain transition-all duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  currentPath === link.to
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/vendors">
              <button className="font-semibold px-4 py-2 text-sm rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all">
                Join as Vendor
              </button>
            </Link>
            <Link to="/early-access">
              <button className="font-semibold px-5 py-2 text-sm rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all">
                Early Access
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white border-t`}
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/vendors">
            <button className="w-full border border-blue-600 text-blue-600 p-2 rounded mt-2">
              Join as Vendor
            </button>
          </Link>
          <Link to="/early-access">
            <button className="w-full bg-blue-600 text-white p-2 rounded">
              Early Access
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
