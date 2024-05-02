const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

userSchema.methods = {
  checkPassword(input) {
    return bcrypt.compareSync(input, this.password);
  },
  hashPassword(input) {
    return bcrypt.hashSync(input, 10);
  },
};

userSchema.pre("save", function (next) {
  if (!this.password) {
    console.log(
      "models/userModel.js =======NO PASSWORD PROVIDED=======",
      this.password,
    );
    next();
  } else {
    console.log("models/userModel.js hashPassword in pre save");
    this.password = this.hashPassword(this.password);
    next();
  }
});

userSchema.statics.login = async function ({ email, password, role }) {
  const user = await this.findOne({
    $or: [{ username: email }, { email: email }],
    role,
  });
  if (user) {
    if (user.checkPassword(password)) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect usernaem or email");
};

module.exports = mongoose.model("User", userSchema);
