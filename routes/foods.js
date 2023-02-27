const express = require("express");
const {
	getFoods,
	getFoodById,
	deleteFood,
	createFood,
	updateFood,
} = require("../controllers/Foods");
const { getUsers, login, register, protect } = require("../controllers/user");

const router = express.Router();

router.get("/:id", getFoodById);
router.delete("/:id", deleteFood);
router.put("/:id", updateFood);
router.get("/", protect, getFoods);
router.post("/", createFood);

module.exports = router;
