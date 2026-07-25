import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// All values come from Vite env vars — see .env.example.
// Get the exact values from Firebase Console > Project settings >
// Your apps > ai-studio-applet-webapp > SDK setup and configuration.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
};

// Your Firestore database is a NAMED (non-default) database called
// "hirenestwebsiteleads" (visible in the Firebase console screenshot),
// not the "(default)" database. We must target it explicitly.
const FIRESTORE_DATABASE_ID =
  (import.meta.env.VITE_FIREBASE_DATABASE_ID as string) ||
  "hirenestwebsiteleads";

let app, dbInstance, storageInstance, authInstance;

if (firebaseConfig.apiKey && firebaseConfig.apiKey !== 'undefined' && firebaseConfig.apiKey !== 'null' && firebaseConfig.apiKey !== '') {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  dbInstance = getFirestore(app, FIRESTORE_DATABASE_ID);
  storageInstance = getStorage(app);
  authInstance = getAuth(app);
} else {
  console.warn("Firebase API Key is missing. Firebase services are disabled.");
  // Mock implementations to avoid crashing when imported
  app = {} as any;
  dbInstance = {} as any;
  storageInstance = {} as any;
  authInstance = {
    onAuthStateChanged: () => () => {},
    signOut: async () => {},
    currentUser: null,
  } as any;
}

export const firebaseApp = app;
export const db = dbInstance;
export const storage = storageInstance;
export const auth = authInstance;
