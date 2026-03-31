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
  {label: "Careers", to: "/careers" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-nav" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/images/Logo.png"
              alt="HireNest Workforce"
              className="h-12 w-auto object-contain transition-all duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.label === "Hire Developers") {
                return (
                  <Link key={link.to} to={link.to}>
                    <span
                      className="px-4 py-2 rounded-md text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(var(--electric)), oklch(0.60 0.20 262))",
                      }}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              }

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentPath === link.to
                      ? "text-electric font-semibold"
                      : "text-navy/70 hover:text-navy hover:bg-surface"
                  }`}
                  style={{
                    color:
                      currentPath === link.to
                        ? "oklch(var(--electric))"
                        : undefined,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/vendors">
              <button
                className="font-semibold px-4 py-2 text-sm rounded-md border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  borderColor: "oklch(var(--electric))",
                  color: "oklch(var(--electric))",
                }}
              >
                Join as Vendor
              </button>
            </Link>

            <Link to="/partner">
              <button
                className="font-semibold px-5 py-2 text-sm rounded-md text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "oklch(var(--electric))",
                }}
              >
                Partner With Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-navy/70 hover:text-navy hover:bg-surface"
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
              className="px-4 py-2 rounded-md text-sm"
            >
              {link.label}
            </Link>
          ))}

          <Link to="/vendors">
            <button className="w-full border p-2 rounded">
              Join as Vendor
            </button>
          </Link>

          <Link to="/partner">
            <button className="w-full bg-blue-500 text-white p-2 rounded">
              Partner With Us
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
