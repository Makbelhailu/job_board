const User = require("../models/userModel");

const register = async (req, res) => {
	const { username, email, password, role } = req.body;
	try {
		const user = await User.create({ username, email, password, role });
		if (user) {
			res.status(200).json(user);
		}
	} catch (error) {
		res.status(404).json({ error: "Error creating user!" });
	}
};

const login = async (req, res) => {
	try {
		const { username, email, password, role } = req.body;
		const user = await User.login({ email, password, role });
		if (user) {
			res.status(200).json(user);
		}
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

module.exports = { register, login };
