import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, ShieldCheck } from "lucide-react";

// ✅ Supabase
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// ✅ Helper
function formatDate(date: string) {
  return new Date(date).toLocaleString("en-IN");
}

export default function Admin() {
  const [vendors, setVendors] = useState<any[]>([]);
  const [requirements, setRequirements] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { data: vendors } = await supabase.from('vendors').select('*');
      const { data: requirements } = await supabase.from('requirements').select('*');
      const { data: leads } = await supabase.from('leads').select('*');

      setVendors(vendors || []);
      setRequirements(requirements || []);
      setMessages(leads || []);

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Header */}
      <header className="p-4 flex items-center gap-2 border-b border-gray-700">
        <ShieldCheck />
        <h1 className="text-lg font-bold">HireNest Admin</h1>
      </header>

      <div className="p-6">

        {loading ? (
          <div className="flex justify-center">
            <Loader2 className="animate-spin" />
          </div>
        ) : (

          <Tabs defaultValue="vendors">

            <TabsList>
              <TabsTrigger value="vendors">
                Vendors <Badge>{vendors.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="requirements">
                Requirements <Badge>{requirements.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="messages">
                Leads <Badge>{messages.length}</Badge>
              </TabsTrigger>
            </TabsList>

            {/* Vendors */}
            <TabsContent value="vendors">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Tech</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vendors.map((v, i) => (
                    <TableRow key={i}>
                      <TableCell>{v.name}</TableCell>
                      <TableCell>{v.email}</TableCell>
                      <TableCell>{v.company}</TableCell>
                      <TableCell>{v.technologies}</TableCell>
                      <TableCell>{formatDate(v.created_at)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            {/* Requirements */}
            <TabsContent value="requirements">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Skills</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requirements.map((r, i) => (
                    <TableRow key={i}>
                      <TableCell>{r.company}</TableCell>
                      <TableCell>{r.role}</TableCell>
                      <TableCell>{r.skills}</TableCell>
                      <TableCell>{formatDate(r.created_at)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            {/* Leads */}
            <TabsContent value="messages">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.map((m, i) => (
                    <TableRow key={i}>
                      <TableCell>{m.name}</TableCell>
                      <TableCell>{m.email}</TableCell>
                      <TableCell>{m.company}</TableCell>
                      <TableCell>{m.message}</TableCell>
                      <TableCell>{formatDate(m.created_at)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

          </Tabs>
        )}
      </div>
    </div>
  );
}
