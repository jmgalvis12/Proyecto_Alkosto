import React from 'react';
import Logo from './Logo';
import SearchBox from './SearchBox';
import UserNavigation from './UserNavigation';
import './MainHeader.css';

const MainHeader = () => {
  return (
    <div className="header-main">
      <div className="header-main__container">
        <Logo />
        <SearchBox />
        <UserNavigation />
      </div>
    </div>
  );
};

export default MainHeader;
