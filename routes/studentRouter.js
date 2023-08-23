// Importing Express Module Into APP
const express = require('express');

// Instance of Router Class of Express Object (Middleware + Routing System)
const router = express.Router();

// Importing Controllers
const { studentController } = require('../controllers/studentCtrl.js'); // controller folder (is in parent of current directory)

router.get('/', studentController.getAllDoc); // Default endpoint
router.post('/', studentController.createDoc); // Post on /student
router.get('/edit/:id', studentController.editDoc); // /student/edit/:id
router.post('/update/:id', studentController.updateDocById); // /student/update/:id in edit view
router.post('/delete/:id', studentController.deleteDocById); // /student/delete/:id

module.exports = router;