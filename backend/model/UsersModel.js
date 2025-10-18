import { model } from "mongoose";
import bcrypt from "bcryptjs";
import UsersSchema from "../schemas/UsersSchema.js";

const UsersModel = new model("User", UsersSchema);

export default UsersModel;
