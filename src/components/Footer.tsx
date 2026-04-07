// src/components/Footer.jsx
import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0F1A] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white">HireNest</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Workforce</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Connecting world-class companies with elite talent through an intelligent network of trusted staffing partners.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About HireNest</Link></li>
              <li><Link to="/vendor-network" className="text-sm text-gray-400 hover:text-white transition-colors">Vendor Network</Link></li>
              <li><Link to="/submit-requirement" className="text-sm text-gray-400 hover:text-white transition-colors">Submit Requirement</Link></li>
              <li><Link to="/vendors" className="text-sm text-gray-400 hover:text-white transition-colors">Bench Consultants</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h4 className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-5">
              For Partners
            </h4>
            <ul className="space-y-3">
              <li><Link to="/partner" className="text-sm text-gray-400 hover:text-white transition-colors">Partner With Us</Link></li>
              <li><Link to="/vendors" className="text-sm text-gray-400 hover:text-white transition-colors">Vendor Onboarding</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-cyan-400" />
                <span className="text-sm text-gray-400">info@hirenestworkforce.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-cyan-400" />
                <span className="text-sm text-gray-400">+91 9392894748</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-cyan-400" />
                <span className="text-sm text-gray-400">Headquarters at Hyderabad, Telangana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {year} HireNest Workforce. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span>|</span>
            <a href="https://www.linkedin.com/company/hirenest-workforce-pvt-ltd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
