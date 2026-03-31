import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(200).json({ message: 'API working ✅' });
    }

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    let body = {};
    try {
      body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    } catch {
      body = {};
    }

    const {
      company,
      role,
      skills,
      location,
      engagementType,
      startDate
    } = body || {};

    const { error } = await supabase
      .from('requirements')
      .insert([
        { company, role, skills, location, engagementType, startDate }
      ]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    return res.status(500).json({
      error: err.message || 'Internal server error'
    });
  }
}
