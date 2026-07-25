import { useState, createElement } from "react";
import { addRecord } from "../lib/db";
import SEO from "../components/SEO";
import { useAdminAuth } from "../lib/useAdminAuth";

export default function AdminJobs() {
  const { user, loading: authLoading, sendOTP, verifyOTP, googleError } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginSubmitting, setLoginSubmitting] = useState(false);

  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addRecord("jobs", {
        title: form.title,
        location: form.location,
        description: form.description,
      });
      alert("Job posted successfully");
      setForm({
        title: "",
        location: "",
        description: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error posting job");
    }
    setLoading(false);
  };

  const handleSendOTP = async (e: any) => {
    e.preventDefault();
    setLoginError("");
    setLoginSubmitting(true);
    try {
      await sendOTP(email);
      setOtpSent(true);
      alert("OTP sent to your email!");
    } catch (err: any) {
      setLoginError(err.message || "Failed to send OTP.");
    }
    setLoginSubmitting(false);
  };

  const handleVerifyOTP = async (e: any) => {
    e.preventDefault();
    setLoginError("");
    setLoginSubmitting(true);
    try {
      await verifyOTP(email, otp);
    } catch (err: any) {
      setLoginError(err.message || "Invalid OTP code.");
    }
    setLoginSubmitting(false);
  };

  const displayError = loginError || googleError;

  if (authLoading) {
    return <div className="pt-[72px] p-6"><p>Loading...</p></div>;
  }

  if (!user) {
    return (
      <div className="pt-[72px] p-6 max-w-sm mx-auto">
        <SEO title="Post Job | HireNest" description="Post new job openings" path="/admin-jobs" />
        <h1 className="text-2xl font-bold mb-6 text-white">Admin Login</h1>
        
        {!otpSent ? (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <p className="text-sm text-gray-400">Enter your admin email to receive an OTP.</p>
            <input 
              type="email" 
              placeholder="Admin Email" 
              className="w-full p-3 border border-gray-700 bg-[#131A2B] text-white rounded-md" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            {displayError && <p className="text-red-500 text-sm">{displayError}</p>}
            <button 
              type="submit" 
              disabled={loginSubmitting} 
              className="w-full px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md font-medium transition-colors"
            >
              {loginSubmitting ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <p className="text-sm text-gray-400">Enter the 6-digit OTP sent to your email.</p>
            <input 
              type="text" 
              placeholder="6-Digit OTP" 
              className="w-full p-3 border border-gray-700 bg-[#131A2B] text-white rounded-md tracking-widest text-center text-lg font-mono" 
              value={otp} 
              onChange={(e) => setOtp(e.target.value)} 
              maxLength={6}
              required 
            />
            {displayError && <p className="text-red-500 text-sm">{displayError}</p>}
            <button 
              type="submit" 
              disabled={loginSubmitting} 
              className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors"
            >
              {loginSubmitting ? "Verifying..." : "Login"}
            </button>
            <button
              type="button"
              onClick={() => setOtpSent(false)}
              className="w-full text-center text-sm text-gray-400 hover:text-white"
            >
              Use a different email
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="pt-[72px] p-6 max-w-xl mx-auto">
      <SEO title="Post Job | HireNest" description="Post new job openings" path="/admin-jobs" />
      <h1 className="text-3xl font-bold mb-6 text-white">Post a Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          placeholder="Job Title" 
          className="w-full p-3 border border-gray-700 bg-[#131A2B] text-white rounded-md" 
          value={form.title} 
          onChange={(e) => setForm({ ...form, title: e.target.value })} 
          required 
        />
        <input 
          placeholder="Location" 
          className="w-full p-3 border border-gray-700 bg-[#131A2B] text-white rounded-md" 
          value={form.location} 
          onChange={(e) => setForm({ ...form, location: e.target.value })} 
          required 
        />
        <textarea 
          placeholder="Job Description" 
          className="w-full p-3 border border-gray-700 bg-[#131A2B] text-white rounded-md min-h-[150px]" 
          value={form.description} 
          onChange={(e) => setForm({ ...form, description: e.target.value })} 
          required 
        />
        <button 
          type="submit" 
          className="w-full px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md font-medium" 
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Job"}
        </button>
      </form>
    </div>
  );
}
