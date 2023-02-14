const Orders = require("../models/Orders");

const createOrders = async (req, res, next) => {
	const newOrders = new Orders(req.body);
	const saveOrders = await newOrders.save();
	res.status(200).json(saveOrders);

	next();
};

module.exports = {
	createOrders,
};
