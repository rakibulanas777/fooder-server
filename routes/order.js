const express = require("express");
const { createOrders, getOrder } = require("../controllers/order");
const router = express.Router();
router.get("/", (req, res) => {
	res.send("hello");
});
router.post("/", createOrders);
router.get("/:id", getOrder);
module.exports = router;
