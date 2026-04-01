export const sendEmail = async (payload: any) => {
  return fetch(
    "https://hjeukduwzdginoqjjgod.supabase.co/functions/v1/send-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "hirenest-secure-key-2026",
      },
      body: JSON.stringify(payload),
    }
  );
};
