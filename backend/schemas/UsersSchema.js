const { Schema } = require("mongoose");

const UsersSchema = new Schema({
  email: {
    type: String,
    required: [true, "Your eamil address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = { UsersSchema };
