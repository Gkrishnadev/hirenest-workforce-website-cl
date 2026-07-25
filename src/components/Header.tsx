// src/components/Header.jsx
import { Link, useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navGroups = [
  {
    label: "Expertise",
    items: [
      { label: "IT Consulting", href: "/it-consulting" },
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Technology Stack", href: "/technology-stack" },
    ],
  },
  {
    label: "Talent Network",
    items: [
      { label: "Hire Developers", href: "/hire-developers-india" },
      { label: "Vendor Network", href: "/vendor-network" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B0F1A]/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-[#0B0F1A] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div>
              <div className="text-xl font-bold text-white tracking-tight">HireNest</div>
              <div className="text-[9px] text-cyan-400 uppercase tracking-widest font-semibold">
                STAFFING · SOFTWARE · AI
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navGroups.map((group) => (
              <div key={group.label} className="relative group">
                <button className="flex items-center gap-1 py-8 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
                  {group.label}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 w-56 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                  <div className="bg-[#131A2B] border border-white/10 rounded-xl shadow-xl shadow-black/50 overflow-hidden py-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className={`block px-5 py-2.5 text-sm transition-colors ${
                          currentPath === item.href ? "text-cyan-400 bg-white/5" : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/vendors"
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/60 px-5 py-2.5 rounded-lg transition-all"
            >
              Join as Vendor
            </Link>
            <Link
              to="/partner"
              className="text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-5 py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F1A] border-b border-white/10 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-6 space-y-2">
            {navGroups.map((group) => (
              <div key={group.label} className="border-b border-white/5 pb-2">
                <button
                  className="w-full flex items-center justify-between text-left text-gray-200 py-3 font-medium"
                  onClick={() => setMobileExpandedGroup(mobileExpandedGroup === group.label ? null : group.label)}
                >
                  {group.label}
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileExpandedGroup === group.label ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedGroup === group.label && (
                  <div className="pl-4 pb-2 space-y-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className={`block py-2 text-sm ${
                          currentPath === item.href ? "text-cyan-400 font-medium" : "text-gray-400 hover:text-cyan-400"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 space-y-3">
              <Link to="/vendors" className="block text-center text-cyan-400 border border-cyan-500/30 py-3 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Join as Vendor</Link>
              <Link to="/partner" className="block text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 rounded-lg text-center font-medium" onClick={() => setMobileMenuOpen(false)}>Partner With Us</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
