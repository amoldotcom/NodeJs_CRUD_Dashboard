// No need to import views folder

const db = require("../services/crudService.js");

class studentController {
	static getAllDoc = async (req, res, next) => {
		try {
			// await is compulsory for getting result, otherwise index.ejs will receive a undefined object.
			const result = await db.getAllDoc();
			await res.render("index", { title: "Student View", data: result });
		} catch (error) {
			console.log(error.message, error.stack.split("\n")[1]);
			next(error); // Re-direct to next middleware
		}
	};
	static createDoc = async (req, res, next) => {
		try {
			// console.log(req.body); // content of the form will come up as body (enable urlendcoded middleware)
			const result = await db.createDoc(req.body);
			await res.redirect("/"); // after creating new record, page should re-route/reload to /student
		} catch (error) {
			console.log(error.message, error.stack.split("\n")[1]);
			next(error);
		}
	};
	static editDoc = async (req, res, next) => {
		try {
			const result = await db.editDoc(req.params.id);
			await res.render("edit", { title: "Edit Student View", data: result });
		} catch (error) {
			console.log(error.message, error.stack.split("\n")[1]);
			next(error);
		}
	};
	static updateDocById = async (req, res, next) => {
		try {
			const result = await db.updateDocById(req.params.id, req.body);
			await res.redirect("/"); // after creating new record, page should re-route/reload to /student
		} catch (error) {
			console.log(error.message, error.stack.split("\n")[1]);
			next(error);
		}
	};
	static deleteDocById = async (req, res, next) => {
		try {
			const result = await db.deleteDocById(req.params.id);
			await res.redirect("/"); // after creating new record, page should re-route/reload to /student
		} catch (error) {
			console.log(error.message, error.stack.split("\n")[1]);

			next(error);
		}
	};
}

module.exports = { studentController };
