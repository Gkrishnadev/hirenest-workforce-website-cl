// src/components/Navbar.jsx
import { Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/vendor-network", label: "Vendor Network" },
    { to: "/hire-developers-india", label: "Hire Developers" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/careers", label: "Careers" },
  ];

  return (
    <nav className="bg-[#0B0F1A] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div>
              <div className="text-xl font-bold text-white">HireNest</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider">WORKFORCE</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  currentPath === link.to
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/vendors"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Join as Vendor
            </Link>
            <Link
              to="/early-access"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Early Access
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F1A] border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-gray-300 hover:text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <Link
                to="/vendors"
                className="block text-gray-300 hover:text-white py-2"
              >
                Join as Vendor
              </Link>
              <Link
                to="/early-access"
                className="block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-lg text-center font-semibold"
              >
                Early Access
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
