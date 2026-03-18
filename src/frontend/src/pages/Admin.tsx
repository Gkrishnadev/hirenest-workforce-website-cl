import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, LogOut, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import type {
  ContactForm,
  PartnerApplication,
  RequirementSubmission,
  VendorApplication,
} from "../backend.d";
import { useActor } from "../hooks/useActor";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

function formatDate(timestamp: bigint): string {
  const ms = Number(timestamp / BigInt(1_000_000));
  return new Date(ms).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function EmptyState({ message }: { message: string }) {
  return (
    <div
      className="text-center py-16 rounded-xl border"
      style={{
        borderColor: "oklch(0.3 0.04 258)",
        color: "oklch(0.6 0.02 258)",
      }}
      data-ocid="admin.empty_state"
    >
      <p className="text-sm">{message}</p>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div
      className="flex items-center justify-center py-16"
      data-ocid="admin.loading_state"
    >
      <Loader2
        className="w-8 h-8 animate-spin"
        style={{ color: "oklch(var(--electric))" }}
      />
    </div>
  );
}

export default function Admin() {
  const { actor, isFetching } = useActor();
  const { login, clear, loginStatus, identity } = useInternetIdentity();

  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [checkingAdmin, setCheckingAdmin] = useState(false);

  const [vendors, setVendors] = useState<VendorApplication[]>([]);
  const [partners, setPartners] = useState<PartnerApplication[]>([]);
  const [requirements, setRequirements] = useState<RequirementSubmission[]>([]);
  const [messages, setMessages] = useState<ContactForm[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  const isLoggedIn = loginStatus === "success" && !!identity;
  const isLoggingIn = loginStatus === "logging-in";

  useEffect(() => {
    if (!actor || isFetching || !isLoggedIn) return;
    setCheckingAdmin(true);
    actor
      .isCallerAdmin()
      .then((result) => {
        setIsAdmin(result);
      })
      .catch(() => setIsAdmin(false))
      .finally(() => setCheckingAdmin(false));
  }, [actor, isFetching, isLoggedIn]);

  useEffect(() => {
    if (!actor || !isAdmin) return;
    setLoadingData(true);
    Promise.all([
      actor.getAllVendorApplications(),
      actor.getAllPartnerApplications(),
      actor.getAllRequirementSubmissions(),
      actor.getAllContactForms(),
    ])
      .then(([v, p, r, m]) => {
        setVendors(v);
        setPartners(p);
        setRequirements(r);
        setMessages(m);
      })
      .catch(console.error)
      .finally(() => setLoadingData(false));
  }, [actor, isAdmin]);

  const handleLogout = () => {
    clear();
    setIsAdmin(null);
    setVendors([]);
    setPartners([]);
    setRequirements([]);
    setMessages([]);
  };

  if (!isLoggedIn) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.15 0.05 258) 100%)",
        }}
      >
        <div
          className="rounded-2xl p-10 text-center max-w-sm w-full mx-4"
          style={{
            backgroundColor: "oklch(0.18 0.04 258)",
            border: "1px solid oklch(0.28 0.05 258)",
          }}
          data-ocid="admin.panel"
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "oklch(var(--electric) / 0.15)" }}
          >
            <ShieldCheck
              className="w-7 h-7"
              style={{ color: "oklch(var(--electric))" }}
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Admin Login</h1>
          <p className="text-sm mb-8" style={{ color: "oklch(0.65 0.03 258)" }}>
            Sign in with Internet Identity to access the admin dashboard.
          </p>
          <Button
            onClick={login}
            disabled={isLoggingIn}
            data-ocid="admin.primary_button"
            className="w-full font-semibold text-white"
            style={{ backgroundColor: "oklch(var(--electric))" }}
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing in...
              </>
            ) : (
              "Login with Internet Identity"
            )}
          </Button>
        </div>
      </div>
    );
  }

  if (checkingAdmin || isAdmin === null) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.15 0.05 258) 100%)",
        }}
      >
        <LoadingSpinner />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(0.15 0.05 258) 100%)",
        }}
      >
        <div
          className="rounded-2xl p-10 text-center max-w-sm w-full mx-4"
          style={{
            backgroundColor: "oklch(0.18 0.04 258)",
            border: "1px solid oklch(0.28 0.05 258)",
          }}
          data-ocid="admin.panel"
        >
          <h1 className="text-xl font-bold text-white mb-3">Access Denied</h1>
          <p className="text-sm mb-6" style={{ color: "oklch(0.65 0.03 258)" }}>
            Your account does not have admin privileges.
          </p>
          <Button
            onClick={handleLogout}
            variant="outline"
            data-ocid="admin.secondary_button"
            className="w-full"
          >
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "oklch(0.12 0.03 258)" }}
    >
      <header
        className="sticky top-0 z-40 px-6 py-4 flex items-center justify-between"
        style={{
          backgroundColor: "oklch(var(--navy))",
          borderBottom: "1px solid oklch(0.25 0.05 258)",
        }}
        data-ocid="admin.panel"
      >
        <div className="flex items-center gap-3">
          <ShieldCheck
            className="w-6 h-6"
            style={{ color: "oklch(var(--electric))" }}
          />
          <span className="text-white font-bold text-lg">HireNest Admin</span>
        </div>
        <Button
          onClick={handleLogout}
          variant="ghost"
          size="sm"
          data-ocid="admin.secondary_button"
          className="text-gray-300 hover:text-white"
        >
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-1">
            Submissions Dashboard
          </h2>
          <p style={{ color: "oklch(0.6 0.02 258)" }} className="text-sm">
            All form submissions from the HireNest website.
          </p>
        </div>

        {loadingData ? (
          <LoadingSpinner />
        ) : (
          <Tabs defaultValue="vendors" data-ocid="admin.panel">
            <TabsList
              className="mb-6"
              style={{ backgroundColor: "oklch(0.18 0.04 258)" }}
            >
              <TabsTrigger
                value="vendors"
                data-ocid="admin.tab"
                className="gap-2"
              >
                Vendor Applications
                <Badge
                  className="ml-1 text-white"
                  style={{ backgroundColor: "oklch(var(--electric))" }}
                >
                  {vendors.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger
                value="partners"
                data-ocid="admin.tab"
                className="gap-2"
              >
                Partner Applications
                <Badge
                  className="ml-1 text-white"
                  style={{ backgroundColor: "oklch(var(--electric))" }}
                >
                  {partners.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger
                value="requirements"
                data-ocid="admin.tab"
                className="gap-2"
              >
                Requirement Details
                <Badge
                  className="ml-1 text-white"
                  style={{ backgroundColor: "oklch(var(--electric))" }}
                >
                  {requirements.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger
                value="messages"
                data-ocid="admin.tab"
                className="gap-2"
              >
                Messages
                <Badge
                  className="ml-1 text-white"
                  style={{ backgroundColor: "oklch(var(--electric))" }}
                >
                  {messages.length}
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vendors">
              {vendors.length === 0 ? (
                <EmptyState message="No vendor applications yet." />
              ) : (
                <div
                  className="rounded-xl overflow-hidden border"
                  style={{ borderColor: "oklch(0.25 0.04 258)" }}
                  data-ocid="admin.table"
                >
                  <Table>
                    <TableHeader
                      style={{ backgroundColor: "oklch(0.18 0.04 258)" }}
                    >
                      <TableRow style={{ borderColor: "oklch(0.25 0.04 258)" }}>
                        <TableHead className="text-gray-300">#</TableHead>
                        <TableHead className="text-gray-300">Company</TableHead>
                        <TableHead className="text-gray-300">
                          Contact Person
                        </TableHead>
                        <TableHead className="text-gray-300">Email</TableHead>
                        <TableHead className="text-gray-300">Phone</TableHead>
                        <TableHead className="text-gray-300">
                          Technologies
                        </TableHead>
                        <TableHead className="text-gray-300">
                          Bench Size
                        </TableHead>
                        <TableHead className="text-gray-300">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {vendors.map((v, i) => (
                        <TableRow
                          key={`${v.email}-${v.timestamp}`}
                          style={{
                            borderColor: "oklch(0.2 0.03 258)",
                            backgroundColor: "oklch(0.15 0.03 258)",
                          }}
                          data-ocid={`admin.row.${i + 1}`}
                        >
                          <TableCell className="text-gray-400 text-sm">
                            {i + 1}
                          </TableCell>
                          <TableCell className="text-white font-medium">
                            {v.companyName}
                          </TableCell>
                          <TableCell className="text-gray-300">
                            {v.contactPerson}
                          </TableCell>
                          <TableCell className="text-gray-300">
                            {v.email}
                          </TableCell>
                          <TableCell className="text-gray-300">
                            {v.phone}
                          </TableCell>
                          <TableCell className="text-gray-300 max-w-[200px] truncate">
                            {v.technologies || "—"}
                          </TableCell>
                          <TableCell className="text-gray-300">
                            {v.benchSize.toString()}
                          </TableCell>
                          <TableCell className="text-gray-400 text-sm">
                            {formatDate(v.timestamp)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </TabsContent>

            <TabsContent value="partners">
              {partners.length === 0 ? (
                <EmptyState message="No partner applications yet." />
              ) : (
                <div
                  className="rounded-xl overflow-hidden border"
                  style={{ borderColor: "oklch(0.25 0.04 258)" }}
                  data-ocid="admin.table"
                >
                  <Table>
                    <TableHeader
                      style={{ backgroundColor: "oklch(0.18 0.04 258)" }}
                    >
                      <TableRow style={{ borderColor: "oklch(0.25 0.04 258)" }}>
                        <TableHead className="text-gray-300">#</TableHead>
                        <TableHead className="text-gray-300">Name</TableHead>
                        <TableHead className="text-gray-300">Email</TableHead>
                        <TableHead className="text-gray-300">Company</TableHead>
                        <TableHead className="text-gray-300">Role</TableHead>
                        <TableHead className="text-gray-300">
                          Partner Type
                        </TableHead>
                        <TableHead className="text-gray-300">Message</TableHead>
                        <TableHead className="text-gray-300">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {partners.map((p, i) => (
                        <TableRow
                          key={`${p.email}-${p.timestamp}`}
                          style={{
                            borderColor: "oklch(0.2 0.03 258)",
                            backgroundColor: "oklch(0.15 0.03 258)",
                          }}
                          data-ocid={`admin.row.${i + 1}`}
                        >
                          <TableCell className="text-gray-400 text-sm">
                            {i + 1}
                          </TableCell>
                          <TableCell className="text-white font-medium">
                            {p.name}
                          </TableCell>
                          <TableCell className="text-gray-300">
                            {p.email}
                          </TableCell>
                          <TableCell className="text-gray-300">
                            {p.company}
                          </TableCell>
                          <TableCell className="text-gray-300">
                            {p.role}
                          </TableCell>
                          <TableCell className="text-gray-300">
                            {p.partnerType}
                          </TableCell>
                          <TableCell className="text-gray-300 max-w-[200px] truncate">
                            {p.message || "—"}
                          </TableCell>
                          <TableCell className="text-gray-400 text-sm">
                            {formatDate(p.timestamp)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </TabsContent>

            <TabsContent value="requirements">
              {requirements.length === 0 ? (
                <EmptyState message="No requirement submissions yet." />
              ) : (
                <div
                  className="rounded-xl overflow-hidden border"
                  style={{ borderColor: "oklch(0.25 0.04 258)" }}
                  data-ocid="admin.table"
                >
                  <Table>
                    <TableHeader
                      style={{ backgroundColor: "oklch(0.18 0.04 258)" }}
                    >
                      <TableRow style={{ borderColor: "oklch(0.25 0.04 258)" }}>
                        <TableHead className="text-gray-300">#</TableHead>
                        <TableHead className="text-gray-300">Company</TableHead>
                        <TableHead className="text-gray-300">Role</TableHead>
                        <TableHead className="text-gray-300">Skills</TableHead>
                        <TableHead className="text-gray-300">
                          Location
                        </TableHead>
                        <TableHead className="text-gray-300">Type</TableHead>
                        <TableHead className="text-gray-300">
                          Start Date
                        </TableHead>
                        <TableHead className="text-gray-300">
                          Submitted
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {requirements.map((r, i) => (
                        <TableRow
                          key={`${r.company}-${r.timestamp}`}
                          style={{
                            borderColor: "oklch(0.2 0.03 258)",
                            backgroundColor: "oklch(0.15 0.03 258)",
                          }}
                          data-ocid={`admin.row.${i + 1}`}
                        >
                          <TableCell className="text-gray-400 text-sm">
                            {i + 1}
                          </TableCell>
                          <TableCell className="text-white font-medium">
                            {r.company}
                          </TableCell>
                          <TableCell className="text-gray-300">
                            {r.role}
                          </TableCell>
                          <TableCell className="text-gray-300 max-w-[180px] truncate">
                            {r.skills}
                          </TableCell>
                          <TableCell className="text-gray-300">
                            {r.location || "—"}
                          </TableCell>
                          <TableCell className="text-gray-300">
                            {r.engagementType || "—"}
                          </TableCell>
                          <TableCell className="text-gray-300">
                            {r.startDate || "—"}
                          </TableCell>
                          <TableCell className="text-gray-400 text-sm">
                            {formatDate(r.timestamp)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </TabsContent>

            <TabsContent value="messages">
              {messages.length === 0 ? (
                <EmptyState message="No messages yet." />
              ) : (
                <div
                  className="rounded-xl overflow-hidden border"
                  style={{ borderColor: "oklch(0.25 0.04 258)" }}
                  data-ocid="admin.table"
                >
                  <Table>
                    <TableHeader
                      style={{ backgroundColor: "oklch(0.18 0.04 258)" }}
                    >
                      <TableRow style={{ borderColor: "oklch(0.25 0.04 258)" }}>
                        <TableHead className="text-gray-300">#</TableHead>
                        <TableHead className="text-gray-300">Name</TableHead>
                        <TableHead className="text-gray-300">Email</TableHead>
                        <TableHead className="text-gray-300">Company</TableHead>
                        <TableHead className="text-gray-300">Message</TableHead>
                        <TableHead className="text-gray-300">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {messages.map((m, i) => (
                        <TableRow
                          key={`${m.email}-${m.timestamp}`}
                          style={{
                            borderColor: "oklch(0.2 0.03 258)",
                            backgroundColor: "oklch(0.15 0.03 258)",
                          }}
                          data-ocid={`admin.row.${i + 1}`}
                        >
                          <TableCell className="text-gray-400 text-sm">
                            {i + 1}
                          </TableCell>
                          <TableCell className="text-white font-medium">
                            {m.name}
                          </TableCell>
                          <TableCell className="text-gray-300">
                            {m.email}
                          </TableCell>
                          <TableCell className="text-gray-300">
                            {m.company || "—"}
                          </TableCell>
                          <TableCell className="text-gray-300 max-w-[250px] truncate">
                            {m.message}
                          </TableCell>
                          <TableCell className="text-gray-400 text-sm">
                            {formatDate(m.timestamp)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  );
}
