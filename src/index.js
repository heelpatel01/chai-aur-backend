// require('dotenv').config({path: "./env"})

import dotenv from "dotenv";

import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB Connection Error: " + err);
  });

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
