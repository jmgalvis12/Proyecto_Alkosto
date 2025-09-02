// src/models/CategoryModel.js
import categoriesData from '../data/categories.json';

class CategoryModel {
  getMainCategories() {
    return categoriesData.main_categories;
  }

  getSubcategories(categoryName) {
    const category = this.getMainCategories().find(cat => cat.name === categoryName);
    return category ? category.subcategories : [];
  }
}

export default new CategoryModel();