import { useState, useEffect } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // 🚫 Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false); // ✅ CLOSE MENU AFTER CLICK
  };

  return (
    <>
      {/* ☰ Hamburger */}
      <button onClick={() => setOpen(true)} className="p-2">
        ☰
      </button>

      {/* 🌑 Overlay */}
      {open && <div className="mobile-overlay" onClick={() => setOpen(false)} />}

      {/* 📱 Sidebar */}
      <div className={`mobile-sidebar ${open ? "open" : "closed"}`}>
        
        {/* ❌ Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* MENU ITEMS */}
        <ul className="flex flex-col gap-6 p-6 text-lg">
          <li onClick={() => handleScroll("home")}>Home</li>
          <li onClick={() => handleScroll("services")}>Services</li>
          <li onClick={() => handleScroll("vendor")}>Vendor Network</li>
          <li onClick={() => handleScroll("hire")}>Hire Developers</li>
          <li onClick={() => handleScroll("about")}>About</li>
          <li onClick={() => handleScroll("contact")}>Contact</li>
        </ul>

        {/* CTA */}
        <div className="p-6">
          <button className="btn-primary w-full">
            Join as Vendor
          </button>
        </div>

      </div>
    </>
  );
}
