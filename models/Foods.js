const mongoose = require("mongoose");
const FoodsSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		qty: {
			type: Number,
			default: 0,
		},
		desc: {
			type: String,
			required: true,
		},

		price: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
		},
		description: {
			type: String,
		},

		catagory: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model("Foods", FoodsSchema);
