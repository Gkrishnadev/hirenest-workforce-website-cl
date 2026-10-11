import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID as string;
const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export type FormEmailPayload = {
  /** Shown in templates as {{title}} e.g. Partner, Vendor, Requirement, Early Access */
  title: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Sends:
 * 1) Admin notification (template_ab0e5fj) → your inbox
 * 2) Auto-reply to the submitter (template_buwzsnm, To = {{email}})
 * Never throws — logs errors so form success still works if email fails.
 */
export async function sendFormEmails(payload: FormEmailPayload): Promise<void> {
  if (!SERVICE_ID || !CONTACT_TEMPLATE_ID || !PUBLIC_KEY) {
    console.error("EmailJS env vars missing");
    return;
  }

  try {
    await emailjs.send(
      SERVICE_ID,
      CONTACT_TEMPLATE_ID,
      {
        title: payload.title,
        name: payload.name,
        email: payload.email,
        subject: payload.subject,
        message: payload.message,
      },
      PUBLIC_KEY
    );

    if (AUTOREPLY_TEMPLATE_ID) {
      await emailjs.send(
        SERVICE_ID,
        AUTOREPLY_TEMPLATE_ID,
        {
          title: payload.title,
          name: payload.name,
          email: payload.email,
        },
        PUBLIC_KEY
      );
    }
  } catch (err) {
    console.error("EmailJS failed:", err);
  }
}
