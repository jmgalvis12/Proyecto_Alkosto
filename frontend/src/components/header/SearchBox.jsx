import React, { useState } from 'react';
import './SearchBox.css';

const SearchIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de búsqueda
    console.log('Búsqueda:', searchQuery);
  };

  return (
    <div className="header-search">
      <form onSubmit={handleSubmit} className="header-search__form">
        <div className="header-search__input-group">
          <input
            type="text"
            className="header-search__input"
            name="text"
            placeholder="¿Qué buscas hoy?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon className="header-search__icon" />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
