const express = require("express");
const multer = require("multer");
const {
	getFoods,
	getFoodById,
	deleteFood,
	createFood,
	updateFood,
} = require("../controllers/foods");

const router = express.Router();

router.get("/:_id", getFoodById);
router.delete("/:id", deleteFood);
router.put("/:id", updateFood);
router.get("/", getFoods);
router.post("/", createFood);

module.exports = router;
