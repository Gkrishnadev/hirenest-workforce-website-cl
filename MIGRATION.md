# Supabase → Firebase Migration

This repo has been migrated off Supabase entirely and now runs on Firebase
(Firestore + Firebase Storage), project **`hirenest-os`**, database
**`hirenestwebsiteleads`**.

## What changed

| Before | After |
|---|---|
| `@supabase/supabase-js` client | `firebase` (client SDK) |
| `src/lib/supabase.ts` | `src/lib/firebase.ts` (init) + `src/lib/db.ts` (helpers + types) |
| `supabase.from(x).insert()` | `addRecord(collectionName, data)` |
| `supabase.from(x).select().order()` | `listRecords(collectionName)` |
| `supabase.from(x).eq().single()` | `findByField(collectionName, field, value)` |
| `supabase.storage.from().upload()` + `getPublicUrl()` | `uploadFile(path, file)` → Firebase Storage, returns a download URL |
| Supabase Edge Function `send-email` (fetch to `*.supabase.co/functions/v1/send-email`) | `queueEmail({ to, subject, text })` → writes a doc to a `mail` Firestore collection |
| `api/*.js` (Vercel functions) using `@supabase/supabase-js` + service role key | `api/_firebaseAdmin.js` using `firebase-admin` + a service account |

Every page (`Admin`, `Apply`, `Careers`, `AdminJobs`, `Contact`, `EarlyAccess`,
`Partner`, `Vendors`, `VendorNetwork`, `SubmitRequirement`) was updated to use
the new helpers. No Supabase imports remain anywhere in `src/`.

## Firestore collections in use

`vendor_applications`, `partner_applications`, `requirement_submissions`,
`contact_forms`, `early_access_leads`, `job_applications`, `jobs`, `mail`
(email outbox), plus `leads`, `requirements`, `consultants`, `partners`,
`vendors` (written by the `/api/*.js` Vercel functions).

## Setup steps to actually run this

1. **Get your web app config.** Firebase Console → Project settings →
   General → Your apps → `ai-studio-applet-webapp` → SDK setup and
   configuration. Copy `apiKey`, `authDomain`, `storageBucket`, etc. into
   a real `.env` (copy `.env.example` → `.env`, fill in the `VITE_FIREBASE_*`
   values). **Never commit `.env`** — it's already in `.gitignore`.

2. **Get a service account key for the `/api` functions.** Firebase Console
   → Project settings → Service accounts → Generate new private key. In
   Vercel's project environment variables, either paste the whole JSON into
   `FIREBASE_SERVICE_ACCOUNT_JSON`, or split it into `FIREBASE_PROJECT_ID` /
   `FIREBASE_CLIENT_EMAIL` / `FIREBASE_PRIVATE_KEY`.

3. **Enable Firebase Storage** for the project if it isn't already (Firestore
   was already set up per your screenshot; Storage is a separate toggle in
   the console).

4. **Deploy the security rules** (`firestore.rules`, `storage.rules` in this
   repo) with the Firebase CLI:
   ```
   npm install -g firebase-tools
   firebase login
   firebase deploy --only firestore:rules,storage:rules --project hirenest-os
   ```
   Without this step, Firestore/Storage will reject all reads/writes by
   default and every form on the site will fail silently.

5. **Set up email delivery.** Right now, form submissions successfully save
   to Firestore, but "emails" are just queued as documents in a `mail`
   collection — nothing sends them yet. Install the official Firebase
   Extension **"Trigger Email from Firestore"**
   (`firebase ext:install firebase/firestore-send-email`) and point it at
   the `mail` collection with your SMTP credentials (e.g. Gmail SMTP,
   SendGrid, etc.). Until that's installed, notification emails simply
   won't go out — form data is still safely saved either way.

6. **`npm install`** to pull in `firebase` / `firebase-admin` and remove the
   old `@supabase/supabase-js` from `node_modules`.

## Known pre-existing issue carried over (not introduced by this migration)

`src/pages/Admin.tsx`'s "Login to Dashboard" button does not actually check
any credentials — it only flips local UI state. Anyone who finds `/admin`
can view all form submissions. This was true before the migration too. The
new `firestore.rules` in this repo now correctly blocks unauthenticated
reads of the submission collections at the database level, so the page will
currently show empty tables until real Firebase Authentication is wired up
and the signed-in admin's UID is checked. Recommend adding Firebase Auth
(email/password or Google sign-in) before relying on this dashboard again.
