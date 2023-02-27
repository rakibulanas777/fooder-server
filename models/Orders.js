const mongoose = require("mongoose");
const Foods = require("./Foods");
const OrdersSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		image: {
			type: String,
		},
		qty: {
			type: Number,
		},
		price: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Orders", OrdersSchema);
