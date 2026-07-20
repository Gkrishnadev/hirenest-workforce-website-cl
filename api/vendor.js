import { addRecord, queueEmail } from "./_firebaseAdmin.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ message: "API working ✅" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { name, email, company, phone, technologies, bench_size } = body || {};

    if (!name || !email) {
      return res.status(400).json({ error: "Name and Email required" });
    }

    // 1. Save to Firestore
    await addRecord("vendors", { name, email, company, phone, technologies, bench_size });

    // 2. Queue notification email (requires the Firebase "Trigger Email"
    // extension installed on the "mail" collection to actually send)
    try {
      await queueEmail({
        to: process.env.NOTIFICATION_EMAIL || "gopal@hirenestworkforce.com",
        subject: "HireNest — New Vendor Submission",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nTechnologies: ${technologies}\nBench Size: ${bench_size}`,
      });
    } catch (err) {
      console.error("Email trigger failed:", err);
    }

    return res.status(200).json({ success: true, message: "Submitted successfully 🚀" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
