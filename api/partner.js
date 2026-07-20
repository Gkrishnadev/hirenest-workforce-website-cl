import { addRecord } from "./_firebaseAdmin.js";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(200).json({ message: "API working ✅" });
    }

    let body = {};
    try {
      body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    } catch {
      body = {};
    }

    const { name, email, company, role, partner_type, message } = body || {};

    await addRecord("partners", { name, email, company, role, partner_type, message });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
