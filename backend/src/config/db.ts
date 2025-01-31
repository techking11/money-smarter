import mongoose from 'mongoose';

const dbConnection = async (): Promise<void> => {
  try {
    const DB: string = process.env.MONGOOSE_URI || '';
    await mongoose.connect(DB, {
      serverSelectionTimeoutMS: 5000,
    });
    console.info('| Database connected...');
    console.info('......................+..................+.................');
  } catch (error) {
    console.error(error);
    throw new Error('Error in database connection');
  }
};

export default dbConnection;
