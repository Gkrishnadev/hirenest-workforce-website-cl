import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ message: "API working ✅" });
  }

  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const {
      name,
      email,
      company,
      phone,
      technologies,
      bench_size,
    } = body;

    if (!name || !email) {
      return res.status(400).json({
        error: "Name and Email required",
      });
    }

    // ✅ 1. Save to DB
    const { error } = await supabase.from("vendors").insert([
      { name, email, company, phone, technologies, bench_size },
    ]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    // ✅ 2. CALL EDGE FUNCTION (EMAIL TRIGGER)
    try {
      await fetch("https://hjeukduwzdginoqjjgod.supabase.co/functions/v1/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "hirenest-secure-key-2026", // same as your edge function
        },
        body: JSON.stringify({
          type: "Vendor Submission",
          data: {
            name,
            email,
            phone,
            role: "Vendor",
            resumeUrl: "N/A",
            message: `Company: ${company}, Tech: ${technologies}`,
          },
        }),
      });
    } catch (err) {
      console.error("Email trigger failed:", err);
    }

    return res.status(200).json({
      success: true,
      message: "Submitted successfully + email triggered 🚀",
    });

  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
}
