import nodemailer from "nodemailer";

export async function sendApplicationEmail({ name, email, role }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlTemplate = `
  <div style="font-family: Arial; padding: 20px;">
    <h2>🚀 Application Received - HireNest</h2>

    <p>Hi ${name},</p>

    <p>Thank you for applying for <b>${role}</b> at HireNest.</p>

    <p>We are currently reviewing your profile and our team will get back to you shortly.</p>

    <hr/>

    <h3>💡 What happens next?</h3>
    <ul>
      <li>Profile Screening</li>
      <li>Shortlisting</li>
      <li>Client Matching</li>
    </ul>

    <p>Meanwhile, connect with us:</p>

    <a href="https://www.linkedin.com/company/hirenest"
      style="display:inline-block;padding:10px 16px;background:#0077b5;color:white;border-radius:6px;text-decoration:none;">
      Connect on LinkedIn
    </a>

    <br/><br/>

    <p>Best Regards,<br/>HireNest Team</p>
  </div>
  `;

  await transporter.sendMail({
    from: `"HireNest" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Application Received - HireNest",
    html: htmlTemplate,
  });
}
