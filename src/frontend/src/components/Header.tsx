import { Button } from "@/components/ui/button";
import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/", ocid: "nav.home.link" },
  { label: "Services", to: "/services", ocid: "nav.services.link" },
  { label: "Vendor Network", to: "/vendor-network", ocid: "nav.vendor.link" },
  { label: "About", to: "/about", ocid: "nav.about.link" },
  { label: "Contact", to: "/contact", ocid: "nav.contact.link" },
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
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
              src="/assets/Logo.png"
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
                data-ocid={link.ocid}
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
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/partner">
              <Button
                data-ocid="nav.partner.button"
                className="font-semibold px-5 py-2 text-sm rounded-md text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ backgroundColor: "oklch(var(--electric))" }}
              >
                Partner With Us
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-navy/70 hover:text-navy hover:bg-surface transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-border`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                currentPath === link.to
                  ? "font-semibold bg-surface"
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
          ))}
          <Link to="/partner" className="mt-2">
            <Button
              data-ocid="nav.partner.button"
              className="w-full font-semibold text-white"
              style={{ backgroundColor: "oklch(var(--electric))" }}
            >
              Partner With Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
