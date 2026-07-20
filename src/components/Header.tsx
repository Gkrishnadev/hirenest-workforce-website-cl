// src/components/Header.jsx
import { Link, useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Technology Stack", href: "/technology-stack" },
  { label: "Vendor Network", href: "/vendor-network" },
  { label: "Hire Developers", href: "/hire-developers-india" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0B0F1A] border-b border-white/10" : "bg-[#0B0F1A]/95 backdrop-blur-md"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                 <img 
      src="images/Logo.png" 
      alt="HireNest" 
      className="w-full h-full object-contain hidden"
      onLoad={(e) => {
        e.currentTarget.classList.remove('hidden');
        e.currentTarget.nextElementSibling?.classList.add('hidden');
      }}
      onError={(e) => {
        // Keep "H" visible if image fails
        e.currentTarget.classList.add('hidden');
      }}
    />
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-white">HireNest</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider">Staffing · Software · AI</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  currentPath === item.href ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              to="/vendors"
              className="px-4 py-2 text-sm font-medium text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-all"
            >
              Join as Vendor
            </Link>
            <Link
              to="/partner"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F1A] border-b border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block text-gray-300 hover:text-cyan-400 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <Link to="/vendors" className="block text-cyan-400 py-2">Join as Vendor</Link>
              <Link to="/early-access" className="block text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 rounded-lg text-center">Early Access</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
