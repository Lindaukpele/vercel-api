const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const { id } = req.query;

  try {
    const backendUrl = `https://adaanalytics-1.onrender.com/users/${id}`;
    const response = await fetch(backendUrl);

    if (response.status === 404) {
      return res.status(404).json({ error: "User not found" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};