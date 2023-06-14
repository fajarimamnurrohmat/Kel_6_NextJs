const MONGO_URI = 'mongodb+srv://kelompok6:6Dm26yJ23FUC@cluster0.wj52gae.mongodb.net/kelompok6?retryWrites=true&w=majority';

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://kelompok6:6Dm26yJ23FUC@cluster0.wj52gae.mongodb.net/kelompok6?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
};

export default connectDB;