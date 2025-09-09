import React from 'react';
import { useCart } from '../../context/CartContext';
import './UserNavigation.css';

const UserIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const CartIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const UserNavigation = () => {
  const { cartItemCount } = useCart();

  return (
    <nav className="header-user-nav">
      <ul className="header-user-nav__list">
        <li className="header-user-nav__item header-user-nav__item--account">
          <div className="header-user-nav__account">
            <UserIcon className="header-user-nav__icon" />
            <span className="header-user-nav__text">Mi cuenta</span>
          </div>
        </li>
        <li className="header-user-nav__item header-user-nav__item--cart">
          {cartItemCount > 0 && (
            <span className="header-user-nav__counter">{cartItemCount}</span>
          )}
          <a className="header-user-nav__cart" href="/cart">
            <CartIcon className="header-user-nav__icon" />
            <span className="header-user-nav__text">Mi carrito</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavigation;
