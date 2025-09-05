export default async function handler(req, res) {
  const { name, page = 1, limit = 50 } = req.query;
  if (!name) return res.status(400).json({ error: "Name query parameter required" });

  try {
    const response = await fetch(
      `https://adaanalytics-1.onrender.com/users/search?name=${encodeURIComponent(name)}&page=${page}&limit=${limit}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error searching users" });
  }
}