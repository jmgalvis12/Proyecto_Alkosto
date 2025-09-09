import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="header-logo">
      <div className="header-logo__container">
        <a href="/">
          <img
            src="https://www.alkosto.com/medias/alkosto-logo.svg?context=bWFzdGVyfGltYWdlc3wxMjMxMnxpbWFnZS9zdmcreG1sfGFXMWhaMlZ6TDJnMllTOW9NMlV2T1RrNU1URXhNREEyTmpJd05pNXpkbWN8OGRhMGMwM2M1M2FmNjk1MTRhODkzZjQ3NmI4OTU2N2Y1MTg5NmJlYWUxMTU5Njc1NmVkZjgxYzRlY2M0YjQ0Yw"
            alt="Alkosto Logo"
            title="Alkosto - Orgullosamente Colombiano"
            className="header-logo__image"
          />
        </a>
      </div>
    </div>
  );
};

export default Logo;
