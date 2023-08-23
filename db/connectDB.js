// MongoDB
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async (DB_URL) => {
	try {
		const DB_OPTIONS = {
			dbName: process.env.MONGODB_DB,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};
		await mongoose.connect(DB_URL, DB_OPTIONS);
		console.log("MongoDB Connection Successful!!!");
	} catch (error) {
		console.log(error);
	}
};
module.exports = connectDB;
