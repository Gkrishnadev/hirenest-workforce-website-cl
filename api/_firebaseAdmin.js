import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// The named Firestore database from the Firebase console (not "(default)").
const DATABASE_ID = process.env.FIREBASE_DATABASE_ID || "hirenestwebsiteleads";

function getServiceAccount() {
  // Preferred: paste the full service account JSON (from Firebase Console >
  // Project settings > Service accounts > Generate new private key) into a
  // single env var as a JSON string.
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  }
  // Alternative: three separate env vars.
  if (
    process.env.FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_CLIENT_EMAIL &&
    process.env.FIREBASE_PRIVATE_KEY
  ) {
    return {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // Vercel env vars store literal "\n" — convert back to real newlines.
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    };
  }
  throw new Error(
    "Missing Firebase Admin credentials. Set FIREBASE_SERVICE_ACCOUNT_JSON " +
      "(or FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL / FIREBASE_PRIVATE_KEY) " +
      "in your Vercel project environment variables."
  );
}

const app = getApps().length
  ? getApps()[0]
  : initializeApp({ credential: cert(getServiceAccount()) });

export const db = getFirestore(app, DATABASE_ID);

export async function addRecord(collectionName, data) {
  const docRef = await db.collection(collectionName).add({
    ...data,
    created_at: new Date().toISOString(),
  });
  return docRef.id;
}

export async function queueEmail({ to, subject, text, html }) {
  await addRecord("mail", {
    to,
    message: { subject, text: text || "", html: html || text || "" },
  });
}
