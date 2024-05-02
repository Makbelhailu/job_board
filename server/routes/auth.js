const express = require("express");
const router = express.Router();
const { registerErrorHandler } = require("../middlewares/errorHandler");
const { register, login } = require("../controllers/authController");

router.post("/register", registerErrorHandler, register);
router.post("/login", login);

module.exports = router;
