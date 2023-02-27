const mongoose = require("mongoose");
const validator = require("validator");
const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide your name"],
		},
		email: {
			type: String,
			required: [true, "Please provide your email"],
			unique: true,
			validate: [validator.isEmail, "Please provide a valid email"],
		},
		image: String,
		password: {
			type: String,
			required: [true, "Please provide a password"],
			minlength: 8,
		},
		passwordConfrim: {
			type: String,
			required: [true, "Please confrim your password"],
			validate: {
				validator: function (el) {
					return el === this.password;
				},
				message: "Password are not the same",
			},
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
