const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/Users");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const register = catchAsync(async (req, res, next) => {
	// const salt = bcrypt.genSaltSync(10);
	// const hash = bcrypt.hashSync(req.body.password, salt);
	// const hashConfrim = bcrypt.hashSync(req.body.passwordConfrim, salt);

	const newUser = new User(
		req.body
		// password: hash,
		// passwordConfrim: hashConfrim,
	);
	const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
		expiresIn: "24h",
	});
	await newUser.save();
	res.status(200).json({
		status: "sucess",
		token,
		data: {
			user: newUser,
		},
	});

	next();
});

const getUsers = async (req, res, next) => {
	const users = await User.find();
	if (req.query.email) {
		const search = req.query.email;
		const matched = users.filter((user) => user.email.includes(search));
		res.status(200).json(matched);
	} else {
		res.status(200).json(users);
	}
	next();
};

const login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return next(new AppError("please provide a email and password", 400));
	}
	//check user is exit or not
	const user = await User.findOne({ email }).select("+password");

	if (!user || !(await user.correctPassword(password, user.password))) {
		return next(new AppError("Incorrect email or password", 401));
	}
	const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
		expiresIn: "24h",
	});
	res.status(200).json({
		status: "sucess",
		token,
	});
});

module.exports = { getUsers, login, register };
