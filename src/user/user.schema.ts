import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  // Add other properties as needed
});

export interface User extends mongoose.Document {
  name: string;
  email: string;
  // Add other properties as needed
}
