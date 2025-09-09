import React from 'react';
import './App.css';
import categoriesData from '../data/categories.json';

const Categories = () => {

  const mainCategories = categoriesData.main_categories;

  return (
    <section className="home-sect home-sect--no-pad hero-item">
      <div className="main-container scrolling">
        <div className="overflow-box">
          <ul className="categs-ul">
            {mainCategories.map((category, index) => (
              <li className="categs-ul__li" key={index}>
                <a className="categs-ul__li-link" href={`/${category.name.toLowerCase()}`}>
                  <p className="categs-ul__li-link-p">{category.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Categories;