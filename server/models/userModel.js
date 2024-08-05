const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userId: {
      type: string,
      required: true,
      unique: true,
    },
    username: {
      type: string,
      required: true,
    },
    profile: {
      type: string,
      required: true,
    },
    accountType: {
      type: string,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
