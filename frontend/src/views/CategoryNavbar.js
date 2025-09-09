import React, { useState, useEffect } from 'react';
import CategoryController from '../controllers/CategoryController';
import CategoryMegaMenu from './CategoryMegaMenu';
import './CategoryNavbar.css';

const MenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

function CategoryNavbar() {
  const mainCategories = CategoryController.fetchMainCategories() || [];
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = (categoryName) => {
    if (!isMobile) {
      setActiveCategory(categoryName);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveCategory(null);
    }
  };

  const handleCategoryClick = (categoryName) => {
    if (isMobile) {
      setActiveCategory(activeCategory === categoryName ? null : categoryName);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Limitamos a las primeras 9 categorías principales como en el sitio real
  const displayedCategories = mainCategories.slice(0, 9);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <MenuIcon />
        <span>Categorías</span>
      </div>

      {/* Categories Navigation */}
      <nav className={`categories-navbar ${isMenuOpen ? 'mobile-open' : ''}`}>
        <div className="categories-container">
          <ul className="categories-list-nav">
            {displayedCategories.map((cat, index) => (
              <li
                key={index}
                className={`category-item ${activeCategory === cat.name ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter(cat.name)}
                onMouseLeave={handleMouseLeave}
              >
                <a 
                  href={`/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => {
                    if (isMobile && cat.subcategories.length > 0) {
                      e.preventDefault();
                      handleCategoryClick(cat.name);
                    }
                  }}
                  className="category-link"
                >
                  {cat.name}
                  {isMobile && cat.subcategories.length > 0 && (
                    <span className={`mobile-arrow ${activeCategory === cat.name ? 'active' : ''}`}>
                      ›
                    </span>
                  )}
                </a>
                
                {activeCategory === cat.name && cat.subcategories.length > 0 && (
                  <CategoryMegaMenu 
                    category={cat}
                    onClose={() => setActiveCategory(null)}
                    isMobile={isMobile}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Mobile Overlay */}
        {isMobile && isMenuOpen && (
          <div className="mobile-overlay" onClick={toggleMenu}></div>
        )}
      </nav>
    </>
  );
}

export default CategoryNavbar;