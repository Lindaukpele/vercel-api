export default async function handler(req, res) {
  const { page = 1, limit = 50 } = req.query;
  try {
    const response = await fetch(
      `https://adaanalytics-1.onrender.com/users?page=${page}&limit=${limit}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching users" });
  }
}