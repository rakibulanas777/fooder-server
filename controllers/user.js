const User = require("../models/Users");

const register = async (req, res, next) => {
	const newUser = new User({
		...req.body,
	});

	await newUser.save();

	res.status(200).send("User has been created.");
	next();
};

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

const getUser = async (req, res, next) => {
	const user = await User.findOne({ email: req.params.email });
	console.log(user);
	res.status(200).json(user);
};

module.exports = { getUsers, getUser, register };
