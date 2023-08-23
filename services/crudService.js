const { studentModel } = require('../models/studentModel.js')

// getAllDoc = GET = print all docs
// createDoc = POST = insert single doc
// editDoc = GET = Redirect to edit webpage
// updateDocById = POST = update the existing doc
// deleteDocById = POST = delete the existing doc

const getAllDoc = async () => {
    return await studentModel.find();
}
const createDoc = async (dataObj) => {
    // Creating New Document
    // const newStudentDoc = new studentModel({ name: dataObj.name, age: dataObj.age, fees: dataObj.fees, }) // also work
    const newStudentDoc = new studentModel(dataObj);

    // Saving Document
    const result = await newStudentDoc.save();
    return result;
}
const editDoc = async (id) => {
    return await studentModel.findById(id);
}
const updateDocById = async (id, dataObj) => {
    return await studentModel.findByIdAndUpdate(id, dataObj);
}
const deleteDocById = async (id) => {
    return await studentModel.findByIdAndDelete(id);
}

module.exports = {
    getAllDoc, createDoc, editDoc, updateDocById, deleteDocById,
}