const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const botRoutes = require("./routes/botRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/raccoon", botRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
