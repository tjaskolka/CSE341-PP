const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async (port) => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      UseUnifiedTopology: true
    });
    console.log(`Connected to ${conn.connection.host} on ${port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
