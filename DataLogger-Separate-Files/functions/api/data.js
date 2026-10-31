
export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const body = await request.json();
    const { apiKey, values } = body; // values = {col1:..., col2:...}
    
    // Verify write key
    const client = await env.DB.prepare("SELECT * FROM clients WHERE apiWriteKey = ?").bind(apiKey).first();
    if (!client) return new Response(JSON.stringify({error: "Invalid API Key"}), {status: 401});
    
    const id = crypto.randomUUID();
    const timestamp = new Date().toISOString();
    
    await env.DB.prepare(
      "INSERT INTO data_entries (id, clientId, timestamp, valuesJson) VALUES (?, ?, ?, ?)"
    ).bind(id, client.id, timestamp, JSON.stringify(values)).run();
    
    return new Response(JSON.stringify({success: true, id}), {headers: {"Content-Type": "application/json"}});
  } catch(e) {
    return new Response(JSON.stringify({error: e.message}), {status: 500});
  }
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const apiKey = url.searchParams.get("apiKey");
  const limit = url.searchParams.get("limit") || "100";
  
  const client = await env.DB.prepare("SELECT * FROM clients WHERE apiReadKey = ?").bind(apiKey).first();
  if (!client) return new Response(JSON.stringify({error: "Invalid API Key"}), {status: 401});
  
  const data = await env.DB.prepare(
    "SELECT * FROM data_entries WHERE clientId = ? ORDER BY timestamp DESC LIMIT ?"
  ).bind(client.id, parseInt(limit)).all();
  
  return new Response(JSON.stringify(data.results), {headers: {"Content-Type": "application/json"}});
}
