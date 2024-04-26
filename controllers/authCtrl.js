const jwt = require("jsonwebtoken");
// const { secretKey } = require("../config");
const { User } = require("../models/User");

const secretKey = "jakkapanp1789";
async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: "Incorrect password" });
    }
    const token = jwt.sign({ email }, secretKey, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { login };
