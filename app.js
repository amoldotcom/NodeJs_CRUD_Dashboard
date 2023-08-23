const express = require("express"); // importing express class
const app = express(); // creating instance of express class

const path = require("path"); // Path Module

const dotenv = require("dotenv").config();

// Create DB Connection (No need to import mongoose here)
const connectDB = require("./db/connectDB.js"); // db folder of same directory
connectDB(process.env.MONGODB_URI);

// view engine setup
app.set("views", path.join(__dirname, "views")); // set-up the directory for views files
app.set("view engine", "ejs"); // set-up template engine, Now, no need to use .ejs while rendering

// Mounting Middlewares
app.use(express.json()); // for POST form body
app.use(express.urlencoded({ extended: false })); // for POST form body

// Serving Static Files For Different Routes
// Serving All Static Content of Public Folder for '/', '/edit' routes
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/edit", express.static(path.join(__dirname, "public")));

// Import Routes (No need to include extension)
const studentRouter = require("./routes/studentRouter"); // routes folder of same directory

// Mounting Routes
app.use("/", studentRouter); // home page

// Error handler middleware
const { errorHandler, error404Handler } = require("./middlewares/errorHandler.js");
app.use(error404Handler);
app.use(errorHandler);

// Listening the App
const port = process.env.PORT;

// Run the server
app.listen(port, () => {
	console.log(`Server App listening at http://localhost:${port}`);
});
