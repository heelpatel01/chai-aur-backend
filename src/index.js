// require('dotenv').config({path: "./env"})

import dotenv from 'dotenv';

import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
    
})

connectDB();











































// Connect to the database
/*(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

    app.on("Error", (err) => {
      console.log("Error: " + err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("ERROR:" + err);
    throw err;
  }
})();
*/
