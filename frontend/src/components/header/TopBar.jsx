import React from 'react';
import './TopBar.css';

// Iconos para la barra superior
const TagIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>
);

const TopBar = () => {
  return (
    <div className="header-top-bar">
      <div className="header-top-bar__content">
        <nav className="header-top-nav">
          <ul className="header-top-nav__left">
            <li>
              <a href="/ofertas/c/ofertas" title="Hiperofertas">
                <TagIcon className="icon" />
                <span>Hiperofertas</span>
              </a>
            </li>
          </ul>
          <ul className="header-top-nav__right">
            <li>
              <a href="tel:6017468001" title="Venta: (601) 746 8001">
                <span>Venta: (601) 746 8001</span>
              </a>
            </li>
            <li>
              <a href="tel:6014073033" title="Servicio: (601) 407 3033">
                <span>Servicio: (601) 407 3033</span>
              </a>
            </li>
            <li>
              <a href="/sigue-tu-pedido" title="Sigue tu pedido">
                <span>Sigue tu pedido</span>
              </a>
            </li>
            <li>
              <a href="/nuestra-compania/tiendas" title="Nuestras tiendas">
                <span>Nuestras tiendas</span>
              </a>
            </li>
            <li>
              <a href="/ofertas/c/ofertas" title="Catálogo">
                <span>Catálogo</span>
              </a>
            </li>
            <li>
              <a href="/preguntas-frecuentes" title="Ayuda">
                <span>Ayuda</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopBar;
