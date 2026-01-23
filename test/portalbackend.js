export default async function handler(req, res) {
  // Basic protection
  const key = req.headers.authorization;
  if (key !== process.env.BLACKICE_SECRET) {
    return res.status(403).json({ error: "Forbidden" });
  }

  try {
    const response = await fetch(process.env.FIREBASE_DB_URL);
    const data = await response.json();

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Failed to load projects" });
  }
}
