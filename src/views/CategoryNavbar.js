// src/views/CategoryNavbar.js
import { useState } from 'react';
import CategoryController from '../controllers/CategoryController';

function CategoryNavbar() {
  const mainCategories = CategoryController.fetchMainCategories() || []; // Default to empty array if undefined
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <nav className="categories-navbar">
      <ul className="categories-list-nav">
        {mainCategories.map((cat, index) => (
          <li key={index} className="category-item" onMouseEnter={() => setActiveCategory(cat.name)} onMouseLeave={() => setActiveCategory(null)}>
            <a href="#">{cat.name}</a>
            {activeCategory === cat.name && (
              <div className="dropdown-menu">
                {(cat.subcategories || []).map((sub, subIndex) => (
                  <div key={subIndex} className="dropdown-column">
                    <h4>{sub.name}</h4>
                    <ul>
                      {(sub.subitems || []).map((item, itemIndex) => (
                        <li key={itemIndex}>
                          {item.name ? (
                            <div>
                              <strong>{item.name}</strong>
                              <ul>
                                {(item.items || []).map((subItem, subItemIndex) => (
                                  <li key={subItemIndex}><a href="#">{subItem}</a></li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <a href="#">{item}</a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryNavbar;