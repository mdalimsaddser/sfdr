export async function GET() {
  const baseUrl = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;

  if (!baseUrl || !apiKey) {
    return Response.json({ error: "Missing environment variables" }, { status: 500 });
  }

  try {
    const res = await fetch(baseUrl, {
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    });

    const data = await res.json();
    return Response.json(data);

  } catch (err) {
    return Response.json({ error: "Failed to fetch remote API", details: err.message }, { status: 500 });
  }
}
