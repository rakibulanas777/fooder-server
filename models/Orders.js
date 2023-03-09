const mongoose = require("mongoose");
const Foods = require("./Foods");
const User = require("./Users");
const OrdersSchema = new mongoose.Schema(
	{
		cart: [
			{
				type: mongoose.Schema.ObjectId,
				ref: "Foods",
			},
		],
		user: {
			type: mongoose.Schema.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Orders", OrdersSchema);
