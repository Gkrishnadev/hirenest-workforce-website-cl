import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Rocket, 
  Users, 
  Globe, 
  Clock, 
  Zap, 
  CheckCircle2, 
  Star,
  Menu,
  X,
  ChevronRight,
  Briefcase,
  Code2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter
} from 'lucide-react';

// Modal Component for Early Access
const EarlyAccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call for early access confirmation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, this would send a confirmation email
    console.log('Early Access Request:', { email, company });
    
    setSubmitted(true);
    setLoading(false);
    
    // Reset after 3 seconds and close
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      setCompany('');
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-white" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Get Early Access</h2>
              <p className="text-slate-400 text-sm">
                Be the first to experience HireNest OS 2.0. We'll send you a confirmation email with next steps.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Company Name</label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Request Early Access</span>
                    <ChevronRight size={18} />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
            <p className="text-slate-400 text-sm">
              Check your email for confirmation. Welcome to the future of hiring!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Hire Developers', path: '/hire-developers-india' },
    { name: 'Vendor Network', path: '/vendor-network' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
  ];

  const features = [
    { icon: Zap, label: 'AI Matching', color: 'from-purple-500 to-pink-500' },
    { icon: Clock, label: '24h Delivery', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, label: 'Real-time Pipeline', color: 'from-green-500 to-emerald-500' },
    { icon: Globe, label: 'Global Network', color: 'from-orange-500 to-red-500' },
  ];

  const stats = [
    { value: '24', label: 'Active Jobs', change: '+12%' },
    { value: '156', label: 'Candidates', change: '+8%' },
    { value: '89', label: 'Matches', change: '+15%' },
  ];

  const pipelineStages = [
    { name: 'Sourcing', count: 45, color: 'bg-cyan-500' },
    { name: 'Screening', count: 28, color: 'bg-blue-500' },
    { name: 'Interview', count: 12, color: 'bg-purple-500' },
    { name: 'Offer', count: 5, color: 'bg-green-500' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                <img 
                  src="/Images/Logo.png" 
                  alt="HireNest" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">H</div>';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  HireNest
                </span>
                <span className="text-[10px] text-slate-400 tracking-widest uppercase">Workforce</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => navigate('/vendor-network')}
                className="px-4 py-2 text-sm text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-all"
              >
                Join as Vendor
              </button>
              <button
                onClick={() => navigate('/hire-developers-india')}
                className="px-4 py-2 text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all"
              >
                Hire Developers
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2 border-t border-slate-800 mt-4">
                <button
                  onClick={() => {
                    navigate('/vendor-network');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 text-slate-300 border border-slate-700 rounded-lg hover:bg-slate-800 transition-all"
                >
                  Join as Vendor
                </button>
                <button
                  onClick={() => {
                    navigate('/hire-developers-india');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg"
                >
                  Hire Developers
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                WORKFORCE OPERATING SYSTEM
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Hire </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Faster
                </span>
                <br />
                <span className="text-white">with </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  HireNest OS
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
                The world's first Workforce Operating System that unifies clients, vendors, and recruiters 
                into one intelligent hiring pipeline powered by AI.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/25"
                >
                  <Rocket size={20} />
                  <span>Get Early Access</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => navigate('/vendor-network')}
                  className="px-6 py-3 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-xl transition-all flex items-center gap-2"
                >
                  <Users size={20} />
                  <span>Join as Vendor</span>
                </button>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {['A', 'B', 'C', 'D', 'E'].map((letter, i) => (
                    <div
                      key={letter}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-2 border-slate-950 flex items-center justify-center text-xs font-bold"
                      style={{ zIndex: 5 - i }}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-slate-400 text-xs ml-1">4.9/5 rating</span>
                  </div>
                  <p className="text-slate-500 text-xs">500+ companies trust HireNest</p>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
                {/* Window Controls */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-auto text-xs text-slate-500">LIVE PIPELINE</div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
                      <div className="text-xs text-green-400">{stat.change}</div>
                    </div>
                  ))}
                </div>

                {/* Pipeline Visualization */}
                <div className="space-y-3">
                  {pipelineStages.map((stage) => (
                    <div key={stage.name} className="flex items-center gap-4">
                      <div className="w-20 text-xs text-slate-400">{stage.name}</div>
                      <div className="flex-1 h-8 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${stage.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${(stage.count / 45) * 100}%` }}
                        />
                      </div>
                      <div className="w-8 text-right text-xs font-medium text-white">{stage.count}</div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <CheckCircle2 size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">Just Matched</div>
                      <div className="text-xs text-slate-400">Senior React Developer matched with TechCorp • 98% score</div>
                    </div>
                    <div className="text-xs text-slate-500">2m ago</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Zap size={20} className="text-white" />
                  <div>
                    <div className="text-xs text-cyan-100">SYSTEM ONLINE</div>
                    <div className="text-sm font-bold text-white">AI Active</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div 
                key={feature.label}
                className="group p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-600 transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{feature.label}</h3>
                <p className="text-xs text-slate-400">Powered by advanced AI algorithms</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using HireNest to build their dream teams faster and smarter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-white text-slate-950 font-semibold rounded-xl hover:bg-slate-100 transition-all flex items-center gap-2"
            >
              <Rocket size={20} />
              Get OS 2.0 Early Access
            </button>
            <button
              onClick={() => navigate('/hire-developers-india')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Code2 size={20} />
              Hire Developers
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 overflow-hidden rounded-lg">
                  <img 
                    src="/Images/Logo.png" 
                    alt="HireNest" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">H</div>';
                    }}
                  />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">HireNest</span>
                  <span className="block text-[10px] text-slate-500 tracking-widest uppercase">Workforce</span>
                </div>
              </Link>
              <p className="text-slate-400 text-sm mb-4 max-w-xs">
                The world's first Workforce Operating System for modern recruiting.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/hire-developers-india" className="text-slate-400 hover:text-white text-sm transition-colors">Hire Developers</Link></li>
                <li><Link to="/vendor-network" className="text-slate-400 hover:text-white text-sm transition-colors">Vendor Network</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Services</Link></li>
                <li><button onClick={() => setIsModalOpen(true)} className="text-slate-400 hover:text-white text-sm transition-colors">Early Access</button></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About</Link></li>
                <li><Link to="/careers" className="text-slate-400 hover:text-white text-sm transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Mail size={16} />
                  <span>hello@hirenest.com</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-2 text-slate-400 text-sm">
                  <MapPin size={16} className="mt-0.5" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 HireNest Workforce. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy</Link>
              <Link to="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Early Access Modal */}
      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
