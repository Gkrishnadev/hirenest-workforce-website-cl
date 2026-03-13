const { company, role, skills, location, job_type, contact_email } = req.body

await supabase
  .from('requirements')
  .insert([{ company, role, skills, location, job_type, contact_email }])
