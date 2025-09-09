// src/controllers/CategoryController.js
import CategoryModel from '../models/CategoryModel';

class CategoryController {
  fetchMainCategories() {
    return CategoryModel.getMainCategories();
  }

  fetchSubcategories(categoryName) {
    return CategoryModel.getSubcategories(categoryName);
  }
}

export default new CategoryController();