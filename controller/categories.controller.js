const db = require('../models');
const Category = db.Category;

class CategoriesController {
	static async getAllCategories(request, response) {
		const categories = await Category.findAll();

		return response.json({ data: categories });
	}
}

module.exports = CategoriesController;
