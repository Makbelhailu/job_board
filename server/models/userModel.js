const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
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
    userId: {
      type: string,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
