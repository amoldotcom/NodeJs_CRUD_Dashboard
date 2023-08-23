const mongoose = require('mongoose');

// Defining Schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 60 },
    fees: {
        type: mongoose.Decimal128, required: true, validate: (value) => {
            value >= 5000.1
        }
    },
});

// Creating Model or Compiling Schema
// Connected DB will be used automatically
const studentModel = mongoose.model('student', studentSchema);

module.exports = { studentModel }; // Import this is in controller