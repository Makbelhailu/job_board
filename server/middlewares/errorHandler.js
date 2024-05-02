const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// to prevent multiple register with same name or email
const registerErrorHandler = async (req, res, next) => {
	let error = {
		username: "",
		email: "",
	};
	const { username, email, role } = req.body;
	const user = await User.findOne({
		$or: [{ username: username }, { email: email }],
		role: role,
	});
	if (user) {
		if (user.email === email) error.email = "Email is already used";
		if (user.username === username)
			error.username = "Username is already used";
		res.status(400).json({ error: error });
	} else {
		next();
	}
};

// authorize user with jwt
const checkUser = async (req, res, next) => {};

module.exports = { registerErrorHandler };
