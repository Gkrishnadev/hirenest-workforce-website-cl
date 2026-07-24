import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect, getRedirectResult, GoogleAuthProvider, signOut, type User } from "firebase/auth";
import { auth } from "./firebase";

// Only accounts on this email domain may access the admin area.
const ALLOWED_ADMIN_DOMAIN = "hirenestworkforce.com";

function isAllowedAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return email.toLowerCase().endsWith("@" + ALLOWED_ADMIN_DOMAIN);
}

export function useAdminAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [googleError, setGoogleError] = useState("");

useEffect(() => {
  getRedirectResult(auth)
  .then((result) => {
    if (result && !isAllowedAdminEmail(result.user.email)) {
      signOut(auth);
      setGoogleError("Access restricted to HireNest admins only.");
    }
  })
  .catch((err: any) => {
    setGoogleError(err && err.message ? err.message : "Google sign-in failed.");
  });
}, []);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (u) => {
    if (u && !isAllowedAdminEmail(u.email)) {
      signOut(auth);
      setUser(null);
      setLoading(false);
      return;
    }
    setUser(u);
    setLoading(false);
  });
  return unsubscribe;
}, []);

const login = async (email: string, password: string) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  if (!isAllowedAdminEmail(result.user.email)) {
    await signOut(auth);
    throw new Error("Access restricted to HireNest admins only.");
  }
  return result;
};

const loginWithGoogle = async () => {
  setGoogleError("");
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ hd: ALLOWED_ADMIN_DOMAIN });
  await signInWithRedirect(auth, provider);
};

const logout = () => signOut(auth);

return { user, loading, login, loginWithGoogle, logout, googleError };
}
