import { Schema } from "mongoose";

export const User = new Schema({
  username: String,
  password: String
})