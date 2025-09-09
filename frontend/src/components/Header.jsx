import React from 'react';
import TopBar from './header/TopBar';
import MainHeader from './header/MainHeader';
import './Header.css';

const Header = () => {

  return (
    <header className="header-primary">
      <TopBar />
      <MainHeader />
    </header>
  );
};

export default Header;

// Para uso futuro: exportar funciones del carrito si se necesita acceso global
export { Header };