import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("db not connecting")
    console.log(error)
    console.error(`Error: ${error.meessage}`);
    process.exit(1);
  }
};

export default connectDB;