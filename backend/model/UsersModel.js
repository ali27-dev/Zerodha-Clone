// import mongoose from "mongoose";
// import UsersSchema from "../schemas/UsersSchema.js";

// const UsersModel = mongoose.model("User", UsersSchema);

// export default UsersModel;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// import passportLocalMongoose from "passport-local-mongoose";

const passportLocalMongoose = require("passport-local-mongoose");

const UsersSchema = new Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

UsersSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UsersSchema);
