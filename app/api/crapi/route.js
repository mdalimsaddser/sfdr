export async function GET() {

  // YOUR VALUES (Hard-coded — Not secure!)
  const baseUrl = "http://147.135.212.197/crapi/had/";
  const apiKey = "RVBYRTRSQkJhbWhdiHOFh19miXJohlVaSI2YhUZoZF1aZZZdYndW";

  try {
    const res = await fetch(baseUrl, {
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    });

    const data = await res.json();
    return Response.json(data);

  } catch (error) {
    return Response.json(
      { error: "Remote API error", details: error.message },
      { status: 500 }
    );
  }
}
