import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  // ✅ Allow only POST
  if (req.method !== "POST") {
    return res.status(200).json({ message: "API working ✅" });
  }

  try {
    // ✅ Check env variables
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return res.status(500).json({
        error: "Missing Supabase environment variables",
      });
    }

    // ✅ Create Supabase client
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // ✅ Parse body safely
    let body = {};
    try {
      body =
        typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    } catch (err) {
      return res.status(400).json({
        error: "Invalid JSON body",
      });
    }

    // ✅ Extract fields
    const {
      name,
      email,
      company,
      phone,
      technologies,
      bench_size,
    } = body;

    // ✅ Basic validation
    if (!name || !email) {
      return res.status(400).json({
        error: "Name and Email are required",
      });
    }

    // ✅ Insert into Supabase
    const { data, error } = await supabase
      .from("vendors")
      .insert([
        {
          name,
          email,
          company,
          phone,
          technologies,
          bench_size,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({
        error: error.message,
      });
    }

    // ✅ Success response
    return res.status(200).json({
      success: true,
      message: "Vendor submitted successfully ✅",
      data,
    });

  } catch (err) {
    console.error("Server error:", err);

    return res.status(500).json({
      error: err.message || "Internal server error",
    });
  }
}
