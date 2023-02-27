const bcrypt = require("bcrypt");
const User = require("../models/Users");

const register = async (req, res, next) => {
	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(req.body.password, salt);
	const hashConfrim = bcrypt.hashSync(req.body.passwordConfrim, salt);

	try {
		const newUser = new User({
			...req.body,
			password: hash,
			passwordConfrim: hashConfrim,
		});

		await newUser.save();
		res.status(200).send("User has been created.");
	} catch (error) {
		console.log(error);
	}
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
