const mongoose = require("mongoose"); // Import mongoose lib
require("dotenv").config();

const connectDB = async () => {
  try {
    console.log('MONGO_URI:', process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,useUnifiedTopology: true,}
      );
  console.log('MongoDB Connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
/*mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/rectify"
); // Connect to MongoDB*/
module.exports = connectDB; // Export the connection