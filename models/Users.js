const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
			select: false,
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
			select: false,
		},
	},
	{ timestamps: true }
);

UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();

	this.password = await bcrypt.hash(this.password, 12);
	this.passwordConfrim = undefined;
	next();
});

UserSchema.methods.correctPassword = async function (
	candidatePassword,
	userPassword
) {
	return await bcrypt.compare(candidatePassword, userPassword);
};

module.exports = mongoose.model("User", UserSchema);
