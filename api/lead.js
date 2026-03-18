import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  try {
    // ✅ Check method
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Only POST allowed' })
    }

    // ✅ Debug logs
    console.log("BODY:", req.body)

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    const { name, email, company, message } = req.body

    // ✅ Insert into DB
    const { data, error } = await supabase.from('leads').insert([
      { name, email, company, message }
    ])

    if (error) {
      console.error("SUPABASE ERROR:", error)
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json({ success: true, data })

  } catch (err) {
    console.error("SERVER ERROR:", err)
    return res.status(500).json({ error: err.message })
  }
}
