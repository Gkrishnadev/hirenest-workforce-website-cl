import { useState, useEffect } from "react";
import { Bell, Loader2, LogOut, ShieldCheck } from "lucide-react";
import { listRecords, type VendorApplication, type PartnerApplication, type RequirementSubmission, type ContactForm } from "../lib/db";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center py-16 rounded-xl border" style={{ borderColor: "oklch(0.3 0.04 258)", color: "oklch(0.6 0.02 258)" }}>
      <p className="text-sm">{message}</p>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-16">
      <Loader2 className="w-8 h-8 animate-spin" style={{ color: "oklch(var(--electric))" }} />
    </div>
  );
}

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [vendors, setVendors] = useState<VendorApplication[]>([]);
  const [partners, setPartners] = useState<PartnerApplication[]>([]);
  const [requirements, setRequirements] = useState<RequirementSubmission[]>([]);
  const [messages, setMessages] = useState<ContactForm[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("vendors");
  const [showNewAlert, setShowNewAlert] = useState(false);
  const [lastSeenCounts, setLastSeenCounts] = useState(() => {
    try {
      const stored = localStorage.getItem("hn_admin_last_seen");
      return stored ? JSON.parse(stored) : { vendors: 0, partners: 0, requirements: 0, messages: 0 };
    } catch { return { vendors: 0, partners: 0, requirements: 0, messages: 0 }; }
  });

  const fetchData = async () => {
    setLoading(true);
    const [vd, pd, rd, md] = await Promise.all([
      listRecords("vendor_applications") as Promise<VendorApplication[]>,
      listRecords("partner_applications") as Promise<PartnerApplication[]>,
      listRecords("requirement_submissions") as Promise<RequirementSubmission[]>,
      listRecords("contact_forms") as Promise<ContactForm[]>,
    ]);
    setVendors(vd); setPartners(pd); setRequirements(rd); setMessages(md);
    const stored = lastSeenCounts;
    if (vd.length > stored.vendors || pd.length > stored.partners || rd.length > stored.requirements || md.length > stored.messages) {
      setShowNewAlert(true);
    }
    setLoading(false);
  };

  useEffect(() => { if (isLoggedIn) fetchData(); }, [isLoggedIn]);

  const markAllSeen = () => {
    const counts = { vendors: vendors.length, partners: partners.length, requirements: requirements.length, messages: messages.length };
    setLastSeenCounts(counts);
    localStorage.setItem("hn_admin_last_seen", JSON.stringify(counts));
    setShowNewAlert(false);
  };

  const bgStyle = { background: "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.15 0.05 258) 100%)" };
  const cardStyle = { backgroundColor: "oklch(0.18 0.04 258)", border: "1px solid oklch(0.28 0.05 258)" };

  const tabs = [
    { key: "vendors", label: "Vendor Applications", count: vendors.length, prev: lastSeenCounts.vendors },
    { key: "partners", label: "Partner Applications", count: partners.length, prev: lastSeenCounts.partners },
    { key: "requirements", label: "Requirement Details", count: requirements.length, prev: lastSeenCounts.requirements },
    { key: "messages", label: "Contact Messages", count: messages.length, prev: lastSeenCounts.messages },
  ];

  // TODO(security): this "login" only flips local UI state — it does not
  // actually authenticate anyone. Anyone who finds /admin can click through.
  // Recommended fix: wire this up to Firebase Authentication (email/password
  // or Google sign-in) and restrict Firestore reads on these collections to
  // signed-in admins via firestore.rules (see firestore.rules in this repo).
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={bgStyle}>
        <div className="rounded-2xl p-10 text-center max-w-sm w-full mx-4" style={cardStyle}>
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "oklch(var(--electric) / 0.15)" }}>
            <ShieldCheck className="w-7 h-7" style={{ color: "oklch(var(--electric))" }} />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Admin Login</h1>
          <p className="text-sm mb-8" style={{ color: "oklch(0.65 0.03 258)" }}>Access the HireNest admin dashboard.</p>
          <button
            type="button"
            onClick={() => setIsLoggedIn(true)}
            className="w-full font-semibold text-white py-3 rounded-xl transition hover:opacity-90"
            style={{ backgroundColor: "oklch(var(--electric))" }}
          >
            Login to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.12 0.03 258)" }}>
      <header className="sticky top-0 z-40 px-6 py-4 flex items-center justify-between" style={{ backgroundColor: "oklch(var(--navy))", borderBottom: "1px solid oklch(0.25 0.05 258)" }}>
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6" style={{ color: "oklch(var(--electric))" }} />
          <span className="text-white font-bold text-lg">HireNest Admin</span>
        </div>
        <button type="button" onClick={() => setIsLoggedIn(false)} className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-1">Submissions Dashboard</h2>
          <p style={{ color: "oklch(0.6 0.02 258)" }} className="text-sm">All form submissions from the HireNest website.</p>
        </div>

        {showNewAlert && (
          <div className="flex items-center justify-between rounded-xl px-5 py-4 mb-6 gap-4" style={{ backgroundColor: "oklch(0.55 0.18 145 / 0.15)", border: "1px solid oklch(0.65 0.18 145 / 0.4)" }}>
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5" style={{ color: "oklch(0.75 0.18 145)" }} />
              <span className="text-sm font-semibold" style={{ color: "oklch(0.85 0.1 145)" }}>You have new form submissions since your last visit!</span>
            </div>
            <button type="button" onClick={markAllSeen} className="text-xs font-semibold px-4 py-2 rounded-lg transition hover:opacity-80" style={{ backgroundColor: "oklch(0.55 0.18 145)", color: "white" }}>Mark all seen</button>
          </div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map(t => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActiveTab(t.key)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition"
              style={{
                backgroundColor: activeTab === t.key ? "oklch(var(--electric))" : "oklch(0.18 0.04 258)",
                color: activeTab === t.key ? "white" : "oklch(0.75 0.03 258)",
                border: "1px solid oklch(0.28 0.05 258)",
              }}
            >
              {t.label}
              <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: "oklch(0 0 0 / 0.2)", color: "white" }}>{t.count}</span>
              {t.count > t.prev && <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: "oklch(0.55 0.18 145)", color: "white" }}>+{t.count - t.prev} new</span>}
            </button>
          ))}
        </div>

        {loading ? <LoadingSpinner /> : (
          <div className="rounded-xl overflow-hidden border" style={{ borderColor: "oklch(0.25 0.04 258)" }}>
            {activeTab === "vendors" && (
              vendors.length === 0 ? <EmptyState message="No vendor applications yet." /> : (
                <table className="w-full text-sm">
                  <thead style={{ backgroundColor: "oklch(0.18 0.04 258)" }}>
                    <tr>
                      {["#","Company","Contact","Email","Phone","Technologies","Bench Size","Date"].map(h => <th key={h} className="text-left px-4 py-3 text-gray-300 font-medium">{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {vendors.map((v, i) => (
                      <tr key={v.id} style={{ borderTop: "1px solid oklch(0.22 0.04 258)", backgroundColor: "oklch(0.15 0.03 258)" }}>
                        <td className="px-4 py-3 text-gray-400">{i+1}</td>
                        <td className="px-4 py-3 text-white font-medium">{v.company_name}</td>
                        <td className="px-4 py-3 text-gray-300">{v.contact_person}</td>
                        <td className="px-4 py-3 text-gray-300">{v.email}</td>
                        <td className="px-4 py-3 text-gray-300">{v.phone}</td>
                        <td className="px-4 py-3 text-gray-300 max-w-[180px] truncate">{v.technologies || "—"}</td>
                        <td className="px-4 py-3 text-gray-300">{v.bench_size || "—"}</td>
                        <td className="px-4 py-3 text-gray-400">{formatDate(v.created_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            )}
            {activeTab === "partners" && (
              partners.length === 0 ? <EmptyState message="No partner applications yet." /> : (
                <table className="w-full text-sm">
                  <thead style={{ backgroundColor: "oklch(0.18 0.04 258)" }}>
                    <tr>
                      {["#","Name","Email","Company","Role","Partner Type","Message","Date"].map(h => <th key={h} className="text-left px-4 py-3 text-gray-300 font-medium">{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {partners.map((p, i) => (
                      <tr key={p.id} style={{ borderTop: "1px solid oklch(0.22 0.04 258)", backgroundColor: "oklch(0.15 0.03 258)" }}>
                        <td className="px-4 py-3 text-gray-400">{i+1}</td>
                        <td className="px-4 py-3 text-white font-medium">{p.name}</td>
                        <td className="px-4 py-3 text-gray-300">{p.email}</td>
                        <td className="px-4 py-3 text-gray-300">{p.company}</td>
                        <td className="px-4 py-3 text-gray-300">{p.role}</td>
                        <td className="px-4 py-3 text-gray-300">{p.partner_type}</td>
                        <td className="px-4 py-3 text-gray-300 max-w-[200px] truncate">{p.message || "—"}</td>
                        <td className="px-4 py-3 text-gray-400">{formatDate(p.created_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            )}
            {activeTab === "requirements" && (
              requirements.length === 0 ? <EmptyState message="No requirement submissions yet." /> : (
                <table className="w-full text-sm">
                  <thead style={{ backgroundColor: "oklch(0.18 0.04 258)" }}>
                    <tr>
                      {["#","Company","Role","Skills","Location","Type","Start Date","Date"].map(h => <th key={h} className="text-left px-4 py-3 text-gray-300 font-medium">{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {requirements.map((r, i) => (
                      <tr key={r.id} style={{ borderTop: "1px solid oklch(0.22 0.04 258)", backgroundColor: "oklch(0.15 0.03 258)" }}>
                        <td className="px-4 py-3 text-gray-400">{i+1}</td>
                        <td className="px-4 py-3 text-white font-medium">{r.company}</td>
                        <td className="px-4 py-3 text-gray-300">{r.role}</td>
                        <td className="px-4 py-3 text-gray-300 max-w-[160px] truncate">{r.skills}</td>
                        <td className="px-4 py-3 text-gray-300">{r.location || "—"}</td>
                        <td className="px-4 py-3 text-gray-300">{r.engagement_type || "—"}</td>
                        <td className="px-4 py-3 text-gray-300">{r.start_date || "—"}</td>
                        <td className="px-4 py-3 text-gray-400">{formatDate(r.created_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            )}
            {activeTab === "messages" && (
              messages.length === 0 ? <EmptyState message="No contact messages yet." /> : (
                <table className="w-full text-sm">
                  <thead style={{ backgroundColor: "oklch(0.18 0.04 258)" }}>
                    <tr>
                      {["#","Name","Email","Company","Message","Date"].map(h => <th key={h} className="text-left px-4 py-3 text-gray-300 font-medium">{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {messages.map((m, i) => (
                      <tr key={m.id} style={{ borderTop: "1px solid oklch(0.22 0.04 258)", backgroundColor: "oklch(0.15 0.03 258)" }}>
                        <td className="px-4 py-3 text-gray-400">{i+1}</td>
                        <td className="px-4 py-3 text-white font-medium">{m.name}</td>
                        <td className="px-4 py-3 text-gray-300">{m.email}</td>
                        <td className="px-4 py-3 text-gray-300">{m.company || "—"}</td>
                        <td className="px-4 py-3 text-gray-300 max-w-[250px] truncate">{m.message}</td>
                        <td className="px-4 py-3 text-gray-400">{formatDate(m.created_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            )}
          </div>
        )}
      </main>
    </div>
  );
}
