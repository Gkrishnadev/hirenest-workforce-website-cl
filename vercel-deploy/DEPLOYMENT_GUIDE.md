# HireNest Workforce — Vercel Deployment Guide

## Prerequisites
- A GitHub account
- A Vercel account (free at vercel.com)
- A Supabase account (free at supabase.com)

---

## Step 1 — Set Up Supabase

1. Go to https://supabase.com and create a new project
2. Once ready, go to **SQL Editor** → **New Query**
3. Copy the contents of `supabase-setup.sql` and click **Run**
4. All 4 tables will be created automatically

To get your keys:
- Go to **Project Settings** → **API**
- Copy **Project URL** → this is your `VITE_SUPABASE_URL`
- Copy **anon / public** key → this is your `VITE_SUPABASE_ANON_KEY`

---

## Step 2 — Set Up Your Project

1. Create a new folder on your computer, e.g. `hirenest-vercel`
2. Copy ALL files from the `vercel-deploy/` folder into it
3. Copy your image assets:
   - `Logo-1.png` → into `public/assets/uploads/`
   - `founder.png` → into `public/assets/uploads/`
4. Create a `.env` file in the root:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

---

## Step 3 — Install & Test Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 — the site should load.
Fill a form and check Supabase → Table Editor to confirm data is saved.

---

## Step 4 — Push to GitHub

```bash
git init
git add .
git commit -m "HireNest Workforce - Vercel ready"
git remote add origin https://github.com/YOUR_USERNAME/hirenest-workforce.git
git push -u origin main
```

---

## Step 5 — Deploy on Vercel

1. Go to https://vercel.com → **Add New Project**
2. Import your GitHub repository
3. Vercel will auto-detect Vite — confirm settings:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Under **Environment Variables**, add:
   - `VITE_SUPABASE_URL` = your Supabase URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key
5. Click **Deploy**

---

## Step 6 — View Form Submissions

Go to **Supabase → Table Editor** to see all 4 tables:
- `vendor_applications` — from /vendors and /vendor-network
- `partner_applications` — from /partner
- `requirement_submissions` — from /submit-requirement
- `contact_forms` — from /contact

You can also visit `/admin` on your Vercel site to view submissions in the dashboard.

---

## File Structure

```
hirenest-vercel/
├── index.html
├── package.json
├── vite.config.js
├── tsconfig.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
├── .env             ← create this yourself
├── .env.example
├── supabase-setup.sql
├── public/
│   └── assets/
│       └── uploads/
│           ├── Logo-1.png   ← copy from your Caffeine project
│           └── founder.png  ← copy from your Caffeine project
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── lib/
    │   └── supabase.ts
    └── pages/
        ├── Home.tsx
        ├── About.tsx
        ├── Services.tsx
        ├── Vendors.tsx
        ├── VendorNetwork.tsx
        ├── Contact.tsx
        ├── Partner.tsx
        ├── SubmitRequirement.tsx
        └── Admin.tsx
```
