const { createClient } = require('@supabase/supabase-js')

module.exports = async function handler(req, res) {
  try {
    // ✅ Check env first
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return res.status(500).json({ error: 'Missing env variables' })
    }

    // ✅ Allow GET test
    if (req.method !== 'POST') {
      return res.status(200).json({ message: 'API working ✅' })
    }

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    const { name, email, company, message } = req.body

    const { error } = await supabase.from('leads').insert([
      { name, email, company, message }
    ])

    if (error) {
      console.error(error)
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json({ success: true })

  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: err.message })
  }
}
