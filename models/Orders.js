const mongoose = require("mongoose");
const OrdersSchema = new mongoose.Schema(
	{
		foods: {
			type: Array,
		},
		user: {
			type: Object,
			required: true,
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model("Orders", OrdersSchema);
