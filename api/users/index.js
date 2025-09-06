const fetch = require("node-fetch");

module.exports = async (req, res) => {
  try {
    const backendUrl = "https://adaanalytics-1.onrender.com/users";
    const response = await fetch(backendUrl);
    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
}