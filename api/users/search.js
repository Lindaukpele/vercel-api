const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Name query parameter required" });
  }

  try {
    const backendUrl = `https://adaanalytics-1.onrender.com/users/search?name=${encodeURIComponent(
      name
    )}`;
    const response = await fetch(backendUrl);
    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to search users" });
  }
};