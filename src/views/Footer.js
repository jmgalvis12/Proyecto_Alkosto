// src/views/Footer.js
function Footer() {
  return (
    <footer class="footer">
      <div class="footer-links">
        <h3>Sobre Nosotros</h3>
        <ul>
          <li><a href="#">Quiénes somos</a></li>
          <li><a href="#">Nuestras tiendas</a></li>
          <li><a href="#">Contáctenos</a></li>
        </ul>
      </div>
      <div class="newsletter">
        <form>
          <input type="email" placeholder="Correo Electrónico" required />
          <button type="submit" class="btn">Recibir ofertas</button>
        </form>
      </div>
      <p>&copy; 2025 Alkosto Clone. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;