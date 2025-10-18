const { model } = require("mongoose");
const bcrypt = require("bcryptjs");

const { UsersSchema } = require("../schemas/UsersSchema");

const UsersModel = new model("user", UsersSchema);

module.exports = { UsersModel };
