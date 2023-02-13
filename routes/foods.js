const express = require("express");
const {
	getFoods,
	getFoodById,
	deleteFood,
	createFood,
	updateFood,
} = require("../controllers/Foods");

const router = express.Router();

router.get("/:id", getFoodById);
router.delete("/:id", deleteFood);
router.put("/:id", updateFood);
router.get("/", getFoods);
router.post("/", createFood);

module.exports = router;
