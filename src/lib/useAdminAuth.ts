import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const ALLOWED_ADMIN_EMAIL = "gopal@hirenestworkforce.com";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export function useAdminAuth() {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuth = localStorage.getItem("hirenest_admin_auth");
    if (isAuth === "true") {
      setUser({ email: ALLOWED_ADMIN_EMAIL });
    }
    setLoading(false);
  }, []);

  const sendOTP = async (email: string) => {
    if (email.toLowerCase() !== ALLOWED_ADMIN_EMAIL.toLowerCase()) {
      throw new Error("Unauthorized email address.");
    }
    
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem("hirenest_admin_otp", otp);
    localStorage.setItem("hirenest_admin_otp_expiry", (Date.now() + 10 * 60 * 1000).toString()); // 10 mins
    
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_CONTACT_TEMPLATE_ID,
      {
        title: "Admin Login OTP",
        name: "HireNest Admin",
        email: ALLOWED_ADMIN_EMAIL,
        subject: "Your HireNest Admin Login OTP",
        message: `Your One-Time Password for admin login is: ${otp}\nThis code will expire in 10 minutes.`,
      },
      EMAILJS_PUBLIC_KEY
    );
    
    return true;
  };
  
  const verifyOTP = async (email: string, otp: string) => {
    if (email.toLowerCase() !== ALLOWED_ADMIN_EMAIL.toLowerCase()) {
      throw new Error("Unauthorized email address.");
    }
    
    const savedOtp = localStorage.getItem("hirenest_admin_otp");
    const expiry = localStorage.getItem("hirenest_admin_otp_expiry");
    
    if (!savedOtp || !expiry) {
      throw new Error("No OTP requested or OTP expired.");
    }
    
    if (Date.now() > parseInt(expiry)) {
      localStorage.removeItem("hirenest_admin_otp");
      localStorage.removeItem("hirenest_admin_otp_expiry");
      throw new Error("OTP expired. Please request a new one.");
    }
    
    if (otp !== savedOtp) {
      throw new Error("Invalid OTP code.");
    }
    
    localStorage.setItem("hirenest_admin_auth", "true");
    localStorage.removeItem("hirenest_admin_otp");
    localStorage.removeItem("hirenest_admin_otp_expiry");
    setUser({ email: ALLOWED_ADMIN_EMAIL });
    return true;
  };

  const logout = () => {
    localStorage.removeItem("hirenest_admin_auth");
    setUser(null);
  };

  return { user, loading, sendOTP, verifyOTP, logout, googleError: "" };
}
