const Foods = require("../models/Foods");

const createFood = async (req, res, next) => {
	const newFood = new Foods(req.body);
	const saveFood = await newFood.save();
	res.status(200).json(saveFood);
	console.log(saveFood);
	console.log(req.file);
	next();
};

const deleteFood = async (req, res, next) => {
	await Foods.findByIdAndDelete(req.params.id);
	res.status(200).json("Food has been deleted.");
	next();
};

const getFoods = async (req, res, next) => {
	const foods = await Foods.find();
	if (req?.query.catagory != "all" && req.query.catagory) {
		const search = req.query.catagory.toLowerCase();
		const matched = foods.filter((Food) =>
			Food.catagory.toLowerCase().includes(search)
		);
		res.status(200).json(matched);
	} else if (req.query.catagory?.toLowerCase() === "all") {
		res.status(200).json(foods);
	} else {
		const count = foods.length;
		console.log(count);
		res.status(200).json(foods);
	}
	next();
};

const updateFood = async (req, res, next) => {
	const updatedHotel = await Foods.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body },
		{ new: true }
	);
	res.status(200).json(updatedHotel);
	next();
};

const getFoodById = async (req, res, next) => {
	console.log(req.params._id);
	const Food = await Foods.findOne({ title: req.params._id });
	res.status(200).json(Food);
	next();
};

module.exports = {
	getFoodById,
	getFoods,
	deleteFood,
	updateFood,
	createFood,
};
