const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MANGO_URI, {});
        console.log("MangoDB connected");
    } catch (err) {
        console.log("Error connecting to MongoDB", err);
        process.exit(1);
    }
};

module.exports = connectDB;