import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
  const { name, email, skills, experience } = req.body

  const { error } = await supabase.from('consultants').insert([
    { name, email, skills, experience }
  ])

  if (error) return res.status(500).json({ error })
  res.status(200).json({ success: true })
}
