import { Schema } from 'mongoose';

export const User = new Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  hashedPassword: {
    type: String,
  },
});
