import mongoose from "mongoose";
import ENV from "./env.js";

const connectDb = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDb;








