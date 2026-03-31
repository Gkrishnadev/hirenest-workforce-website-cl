import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type VendorApplication = {
  id: number;
  company_name: string;
  contact_person: string;
  email: string;
  phone: string;
  technologies: string;
  bench_size: string;
  created_at: string;
};

export type PartnerApplication = {
  id: number;
  name: string;
  email: string;
  company: string;
  role: string;
  partner_type: string;
  message: string;
  created_at: string;
};

export type RequirementSubmission = {
  id: number;
  company: string;
  role: string;
  skills: string;
  location: string;
  engagement_type: string;
  start_date: string;
  contact_name: string;
  contact_email: string;
  created_at: string;
};

export type ContactForm = {
  id: number;
  name: string;
  email: string;
  company: string;
  message: string;
  created_at: string;
};
