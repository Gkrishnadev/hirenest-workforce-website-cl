// src/components/Layout.tsx - MAKE SURE IT LOOKS LIKE THIS
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Only import ONCE

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer /> {/* Only render ONCE here */}
    </div>
  );
}
