// src/views/Header.js
function Header() {
  return (
    <>
      <a className="preheader-events" href="/ofertas">
        <div className="text-preheader">
          <p className="only-desktop"><strong>¡Aprovecha las ofertas más esperadas del año!</strong></p>
          <p className="only-mobile"><strong>¡Las ofertas más esperadas del año!</strong></p>
        </div>
      </a>
      <header className="header">
        <div className="header-top">
          <img src="assets/logo-agosto-header.png" alt="Alkosto Logo" className="logo" />
          <nav className="nav-main">
            <ul className="nav-list">
              <li><a href="#">Hiperofertas</a></li>
              <li><a href="#">Venta: (601) 746 8001</a></li>
              <li><a href="#">Servicio: (601) 407 3033</a></li>
              <li><a href="#">Sigue tu pedido</a></li>
              <li><a href="#">Consulta tu factura</a></li>
              <li><a href="#">Nuestras tiendas</a></li>
              <li><a href="#">Catálogo</a></li>
              <li><a href="#">Ayuda</a></li>
            </ul>
            <ul className="nav-user">
              <li><a href="#">Mi cuenta</a></li>
              <li><a href="#">Mi carrito</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;