import mongoose from "mongoose";

export const connectDb = mongoose
  .connect(process.env.MONGO_URL)
  .then((response) => {
    console.log("database connected successfully......");
  })
  .catch((err) => {
    console.log(err);
  });

// db connection end
