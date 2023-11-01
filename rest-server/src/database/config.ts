import mongoose from 'mongoose';

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN!);

    console.log('DB Online');
  } catch (error) {
    console.log(error);
    throw new Error('DB connection error');
  }
};

export { dbConnection };
