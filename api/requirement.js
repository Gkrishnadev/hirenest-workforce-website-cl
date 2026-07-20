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

    const { company, role, skills, location, engagementType, startDate } = body || {};

    await addRecord("requirements", { company, role, skills, location, engagementType, startDate });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
}
