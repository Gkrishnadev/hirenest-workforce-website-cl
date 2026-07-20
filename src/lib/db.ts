import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  where,
  limit,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebase";

export type FirestoreRecord = {
  id: string;
  created_at?: string;
  [key: string]: any;
};

/** Insert a document into a Firestore collection (replaces supabase.from(x).insert()). */
export async function addRecord(
  collectionName: string,
  data: Record<string, any>
): Promise<string> {
  const docRef = await addDoc(collection(db, collectionName), {
    ...data,
    created_at: new Date().toISOString(),
    created_at_server: serverTimestamp(),
  });
  return docRef.id;
}

/** List all documents in a collection, newest first (replaces supabase .select().order()). */
export async function listRecords(
  collectionName: string,
  orderField: string = "created_at"
): Promise<FirestoreRecord[]> {
  const q = query(collection(db, collectionName), orderBy(orderField, "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as FirestoreRecord);
}

/** Find a single document by an exact field match (replaces supabase .eq().single()). */
export async function findByField(
  collectionName: string,
  field: string,
  value: any
): Promise<FirestoreRecord | null> {
  const q = query(
    collection(db, collectionName),
    where(field, "==", value),
    limit(1)
  );
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const d = snap.docs[0];
  return { id: d.id, ...d.data() } as FirestoreRecord;
}

/** Upload a file to Firebase Storage and return its public download URL
 *  (replaces supabase.storage.from(bucket).upload() + getPublicUrl()). */
export async function uploadFile(path: string, file: File): Promise<string> {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

/**
 * Queues an email by writing to the "mail" collection.
 *
 * This is NOT a Supabase Edge Function replacement by itself — it just
 * stores the message. To actually deliver emails, install the official
 * Firebase Extension "Trigger Email from Firestore"
 * (firebase ext:install firebase/firestore-send-email) and point it at
 * the "mail" collection, with your SMTP credentials. Until that extension
 * is installed, documents will sit in the "mail" collection unsent.
 */
export async function queueEmail(payload: {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
}): Promise<void> {
  await addRecord("mail", {
    to: payload.to,
    message: {
      subject: payload.subject,
      text: payload.text || "",
      html: payload.html || payload.text || "",
    },
  });
}

// ---- Shared record types (previously in lib/supabase.ts) ----

export type VendorApplication = FirestoreRecord & {
  company_name: string;
  contact_person: string;
  email: string;
  phone: string;
  technologies: string;
  bench_size: string;
};

export type PartnerApplication = FirestoreRecord & {
  name: string;
  email: string;
  company: string;
  role: string;
  partner_type: string;
  message: string;
};

export type RequirementSubmission = FirestoreRecord & {
  company: string;
  role: string;
  skills: string;
  location: string;
  engagement_type: string;
  start_date: string;
  contact_name: string;
  contact_email: string;
};

export type ContactForm = FirestoreRecord & {
  name: string;
  email: string;
  company: string;
  message: string;
};
