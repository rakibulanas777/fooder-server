const mongoose = require("mongoose");
const OrdersSchema = new mongoose.Schema(
	{
		title: {
			type: String,
		},

		qty: {
			type: Number,
		},

		total: {
			type: Number,
		},

		email: {
			type: String,
		},
		imageurl: {
			type: String,
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model("Orders", OrdersSchema);
