import React from 'react';

function CategoryDropdown({ subcategories }) {
  if (!subcategories) {
    return null;
  }

  return (
    <div className="dropdown-menu">
      {subcategories.map((sub, subIndex) => (
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
                        <li key={subItemIndex}>
                          <a href="#">{subItem}</a>
                        </li>
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
  );
}

export default CategoryDropdown;