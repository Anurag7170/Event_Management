import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const ConnectionInstance = await mongoose.connect("mongodb://127.0.0.1:27017/Event_Management");
    console.log("DataBase Connected", ConnectionInstance.connection.host);
  } catch (error) {
    console.log(`Error in DB Connection ${error}`);
    process.exit(1);
  }
};
