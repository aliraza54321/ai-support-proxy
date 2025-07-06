export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Only POST allowed");
  }

  const { faqText, userMessage, model } = req.body;

  try {
    const response = await fetch("https://arproject112.app.n8n.cloud/webhook-test/0ffbf8f5-093d-44ad-ae1c-58e6b61702a3", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ faqText, userMessage, model })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
}
