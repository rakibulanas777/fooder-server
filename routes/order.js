const express = require("express");
const { createOrders } = require("../controllers/order");
const router = express.Router();
router.get("/", (req, res) => {
	res.send("hello");
});
router.post("/", createOrders);
module.exports = router;
