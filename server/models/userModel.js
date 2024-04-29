const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
}, {timestamps: true})

userSchema.methods = {
  checkPassword(input) {
    return bcrypt.compareSync(input, this.password)
  },
  hashPassword(input) {
    return bcrypt.hashSync(input, 10)
  }
}

userSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/userModel.js =======NO PASSWORD PROVIDED=======', this.password)
    next()
  } else {
    console.log('models/userModel.js hashPassword in pre save');
    this.password  = this.hashPassword(this.password)
    next()
  }
})

module.exports = mongoose.model("User", userSchema)
