export default async function handler(req, res) {

  const { name, email, company, phone, technologies, bench_size } = req.body

  const { error } = await supabase
    .from('vendors')
    .insert([{ name, email, company, phone, technologies, bench_size }])

  if (error) return res.status(500).json({ error })

  res.status(200).json({ success: true })
}
