const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authCtrl");

const { getBestMatchedResponse, searcher } = require("../controllers/botCtrl");
router.get("/bot/:message", getBestMatchedResponse);
router.post("/bot/searcher", searcher);

module.exports = router;
