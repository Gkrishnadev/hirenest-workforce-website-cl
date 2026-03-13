const { name, vendor_company, primary_skill, experience, location, contact_email } = req.body

await supabase
  .from('consultants')
  .insert([{ name, vendor_company, primary_skill, experience, location, contact_email }])
