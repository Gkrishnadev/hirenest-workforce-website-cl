import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, type User } from "firebase/auth";
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
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ hd: ALLOWED_ADMIN_DOMAIN });
  const result = await signInWithPopup(auth, provider);
  if (!isAllowedAdminEmail(result.user.email)) {
    await signOut(auth);
    throw new Error("Access restricted to HireNest admins only.");
  }
  return result;
};

const logout = () => signOut(auth);

return { user, loading, login, loginWithGoogle, logout };
}
