// api/user.js

import mongoose from 'mongoose';
import connectDB from '@/mongoConfig';

const UserSchema = new mongoose.Schema({
  // Definisikan skema pengguna di sini
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const UserModel = async () => {
  await connectDB();
  return mongoose.models.User || mongoose.model('User', UserSchema);
};

export default UserModel;