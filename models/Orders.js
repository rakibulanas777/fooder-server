const mongoose = require("mongoose");
const Foods = require("./Foods");
const OrdersSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide your name"],
		},
		address: {
			type: String,
			required: [true, "Please provide your address"],
		},
		country: {
			type: String,
			required: [true, "Please provide your country"],
		},
		mobile: {
			type: String,
			required: [true, "Please provide your mobile"],
		},
		email: {
			type: String,
			required: [true, "Please provide your email"],
		},
		cart: [
			{
				type: mongoose.Schema.ObjectId,
				ref: "Foods",
			},
		],
		totalPrice: {
			type: Number,
		},
		isPayment: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Orders", OrdersSchema);
