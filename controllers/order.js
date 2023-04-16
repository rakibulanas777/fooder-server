const Orders = require("../models/Orders");
const catchAsync = require("../utils/catchAsync");

const createOrders = async (req, res, next) => {
	const newOrders = new Orders(req.body);
	const saveOrders = await newOrders.save();

	res.status(200).json(saveOrders);
	next();
};

const getOrder = catchAsync(async (req, res, next) => {
	const order = await Orders.findById(req.params.id).populate("cart");
	if (!order) {
		return next(new AppError("No order found with id", 404));
	} else {
		res.status(200).json(order);
	}
	next();
});

module.exports = {
	createOrders,
	getOrder,
};
