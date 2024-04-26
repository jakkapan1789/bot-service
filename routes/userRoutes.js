const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userCtrl");
const { authenticateToken } = require("../middleware/authMiddleware");

router.get("/users", authenticateToken, userCtrl.getUsers);
router.get("/users/:name", userCtrl.getUsersByName);
router.post("/users", authenticateToken, userCtrl.createUser);
router.put("/users/:id", authenticateToken, userCtrl.updateUser);
router.delete("/users/:id", authenticateToken, userCtrl.deleteUser);

module.exports = router;
