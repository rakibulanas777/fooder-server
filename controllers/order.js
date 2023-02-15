const Orders = require("../models/Orders");

const createOrders = async (req, res, next) => {
	const newOrders = new Orders(req.body);
	const saveOrders = await newOrders.save();
	console.log(saveOrders);
	res.status(200).json(saveOrders);

	next();
};

module.exports = {
	createOrders,
};
