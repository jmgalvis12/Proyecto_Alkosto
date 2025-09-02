// src/views/Header.js
function Header() {
  return (
    <header class="header">
      <div class="header-top">
        <img src="public/assets/logo-agosto-header.png" alt="Alkosto Logo" class="logo" />
        <nav class="nav-main">
          <ul class="nav-list">
            <li><a href="#">Hiperofertas</a></li>
            <li><a href="#">Venta: (601) 746 8001</a></li>
            <li><a href="#">Servicio: (601) 407 3033</a></li>
            <li><a href="#">Sigue tu pedido</a></li>
            <li><a href="#">Consulta tu factura</a></li>
            <li><a href="#">Nuestras tiendas</a></li>
            <li><a href="#">Catálogo</a></li>
            <li><a href="#">Ayuda</a></li>
          </ul>
          <ul class="nav-user">
            <li><a href="#">Mi cuenta</a></li>
            <li><a href="#">Mi carrito</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;