import React from 'react';
import './CategoryMegaMenu.css';

const CategoryMegaMenu = ({ category, onClose, isMobile }) => {
  if (!category || !category.subcategories) return null;

  const handleLinkClick = (e) => {
    if (isMobile) {
      // En móvil, cerramos el menú al hacer clic en un enlace
      setTimeout(() => onClose(), 100);
    }
  };

  return (
    <div className={`mega-menu ${isMobile ? 'mobile' : 'desktop'}`}>
      <div className="mega-menu-container">
        {isMobile && (
          <div className="mega-menu-header">
            <button className="back-button" onClick={onClose}>
              ‹ Volver
            </button>
            <h3>{category.name}</h3>
          </div>
        )}
        
        <div className="mega-menu-content">
          {category.subcategories.map((subcategory, subIndex) => (
            <div key={subIndex} className="mega-menu-column">
              <h4 className="subcategory-title">
                <a 
                  href={`/${category.name.toLowerCase()}/${subcategory.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={handleLinkClick}
                >
                  {subcategory.name}
                </a>
              </h4>
              
              {subcategory.subitems && (
                <ul className="subcategory-items">
                  {subcategory.subitems.slice(0, 8).map((item, itemIndex) => (
                    <li key={itemIndex} className="subcategory-item">
                      {typeof item === 'string' ? (
                        <a 
                          href={`/${category.name.toLowerCase()}/${subcategory.name.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={handleLinkClick}
                        >
                          {item}
                        </a>
                      ) : item.name ? (
                        <div className="item-with-subitems">
                          <span className="item-title">{item.name}</span>
                          {item.items && (
                            <ul className="nested-items">
                              {item.items.slice(0, 6).map((nestedItem, nestedIndex) => (
                                <li key={nestedIndex}>
                                  <a 
                                    href={`/${category.name.toLowerCase()}/${subcategory.name.toLowerCase()}/${item.name.toLowerCase()}/${nestedItem.toLowerCase().replace(/\s+/g, '-')}`}
                                    onClick={handleLinkClick}
                                  >
                                    {nestedItem}
                                  </a>
                                </li>
                              ))}
                              {item.items.length > 6 && (
                                <li>
                                  <a 
                                    href={`/${category.name.toLowerCase()}/${subcategory.name.toLowerCase()}/${item.name.toLowerCase()}`}
                                    className="see-all"
                                    onClick={handleLinkClick}
                                  >
                                    Ver todos ({item.items.length})
                                  </a>
                                </li>
                              )}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <a 
                          href={`/${category.name.toLowerCase()}/${subcategory.name.toLowerCase()}/${item.toString().toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={handleLinkClick}
                        >
                          {item.name || item}
                        </a>
                      )}
                    </li>
                  ))}
                  {subcategory.subitems.length > 8 && (
                    <li className="subcategory-item">
                      <a 
                        href={`/${category.name.toLowerCase()}/${subcategory.name.toLowerCase()}`}
                        className="see-all"
                        onClick={handleLinkClick}
                      >
                        Ver todos en {subcategory.name}
                      </a>
                    </li>
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>
        
        {/* Featured Section - como en el sitio real */}
        <div className="mega-menu-featured">
          <div className="featured-section">
            <h4>Destacados en {category.name}</h4>
            <div className="featured-items">
              <div className="featured-item">
                <img 
                  src={`https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-${category.name.toLowerCase().replace(/\s+/g, '-')}.webp`}
                  alt={`Ofertas en ${category.name}`}
                  onError={(e) => {
                    e.target.src = 'https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-celulares.webp';
                  }}
                />
                <span>Ofertas especiales</span>
              </div>
              <div className="featured-item">
                <img 
                  src="https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-hiperofertas.webp"
                  alt="Hiperofertas"
                />
                <span>Hiperofertas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMegaMenu;
