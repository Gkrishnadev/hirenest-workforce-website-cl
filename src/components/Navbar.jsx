// components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/vendor-network", label: "Vendor Network" },
    { path: "/hire-developers", label: "Hire Developers" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/careers", label: "Careers" },
  ];

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="HireNest" className="h-8 w-auto" />
            <span className="text-white font-bold text-lg">HireNest</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/join-vendor"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
            >
              Join as Vendor
            </Link>
            <Link
              to="/early-access"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Early Access
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
