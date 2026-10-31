
export async function onRequestPost(context) {
  const { request, env } = context;
  const { name, phone, message } = await request.json();
  await env.DB.prepare(
    "INSERT INTO inquiries (id, name, phone, message, created_at) VALUES (?, ?, ?, ?, ?)"
  ).bind(crypto.randomUUID(), name, phone, message, new Date().toISOString()).run();
  return new Response(JSON.stringify({success: true}));
}
