
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, company, message } = req.body

    const { error } = await supabase
      .from('leads')
      .insert([{ name, email, company, message }])

    if (error) return res.status(500).json({ error })

    return res.status(200).json({ success: true })
  }
}
}
