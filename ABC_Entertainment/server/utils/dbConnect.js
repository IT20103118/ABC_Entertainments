const mongoose = require("mongoose");

const dbConnect = () => {
  const dbConStr = process.env.MONGODB_URL;

  mongoose.connect(dbConStr, () => {
    console.log("Mongodb connection success!!");
  });
};

module.exports = { dbConnect };
