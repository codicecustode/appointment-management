import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    const mongodbUri = process.env.DB_CONNECTION_URI;
    if (!mongodbUri) {
      console.error('MongoDB connection URI is required');
      process.exit(1);
    }
    const DB_NAME = process.env.DB_NAME;
    const uri = `${mongodbUri}/${DB_NAME}`;
    console.log('Connecting to MongoDB...');
    await mongoose.connect(uri);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;