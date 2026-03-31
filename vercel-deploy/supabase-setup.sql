-- Run this in your Supabase SQL Editor
-- Go to: https://supabase.com → Your Project → SQL Editor → New Query

-- 1. Vendor Applications
CREATE TABLE IF NOT EXISTS vendor_applications (
  id BIGSERIAL PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  technologies TEXT,
  bench_size TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Partner Applications
CREATE TABLE IF NOT EXISTS partner_applications (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  role TEXT,
  partner_type TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Requirement Submissions
CREATE TABLE IF NOT EXISTS requirement_submissions (
  id BIGSERIAL PRIMARY KEY,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  skills TEXT NOT NULL,
  location TEXT,
  engagement_type TEXT,
  start_date TEXT,
  contact_name TEXT,
  contact_email TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Contact Forms
CREATE TABLE IF NOT EXISTS contact_forms (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable public inserts and reads (RLS policies)
ALTER TABLE vendor_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE requirement_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON vendor_applications FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow public insert" ON partner_applications FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow public insert" ON requirement_submissions FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow public insert" ON contact_forms FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public select" ON vendor_applications FOR SELECT TO anon USING (true);
CREATE POLICY "Allow public select" ON partner_applications FOR SELECT TO anon USING (true);
CREATE POLICY "Allow public select" ON requirement_submissions FOR SELECT TO anon USING (true);
CREATE POLICY "Allow public select" ON contact_forms FOR SELECT TO anon USING (true);
