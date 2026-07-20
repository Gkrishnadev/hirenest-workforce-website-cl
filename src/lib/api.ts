import { queueEmail } from "./db";

type EmailPayload = {
  type: string;
  formName?: string;
  data: Record<string, any>;
};

function buildEmailBody(payload: EmailPayload): { subject: string; text: string } {
  const subject = `HireNest — New ${payload.type}`;
  const lines = Object.entries(payload.data || {})
    .map(([key, value]) => `${key}: ${value ?? "—"}`)
    .join("\n");
  return { subject, text: `New ${payload.type} received:\n\n${lines}` };
}

/**
 * Replaces the old Supabase Edge Function ("send-email") call.
 * Queues a document in the Firestore "mail" collection instead of
 * calling an external endpoint. Returns a minimal Response-like object
 * so existing `if (!res.ok)` call sites keep working unchanged.
 */
export const sendEmail = async (payload: EmailPayload): Promise<Response> => {
  try {
    const { subject, text } = buildEmailBody(payload);
    const to =
      (import.meta.env.VITE_NOTIFICATION_EMAIL as string) ||
      "gopal@hirenestworkforce.com";
    await queueEmail({ to, subject, text });
    return { ok: true, text: async () => "queued" } as unknown as Response;
  } catch (err) {
    console.error("sendEmail (queueEmail) failed:", err);
    return {
      ok: false,
      text: async () => (err instanceof Error ? err.message : String(err)),
    } as unknown as Response;
  }
};
