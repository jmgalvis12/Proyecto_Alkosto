# 🚀 Primeros Pasos con el Frontend - Proyecto Alkosto React

Este documento detalla los primeros pasos, la estructura, las funciones y variables principales del frontend del proyecto Alkosto React. Está pensado para que cualquier desarrollador pueda entender cómo está organizado el código y cómo funciona la base del sistema.

---

## 📦 Estructura Básica del Frontend

La aplicación React se encuentra en la carpeta `frontend/`. Su estructura principal es:

```
frontend/
├── src/
│   ├── App.js                # Componente raíz de la app
│   ├── index.js              # Punto de entrada y renderizado
│   ├── components/           # Componentes reutilizables (Header, etc)
│   ├── views/                # Vistas principales (Footer, Hero, etc)
│   ├── context/              # Contextos globales (CartContext)
│   ├── controllers/          # Lógica de negocio (CategoryController)
│   ├── models/               # Modelos de datos (CategoryModel)
│   └── data/                 # Datos estáticos (categories.json)
├── public/                   # Archivos públicos (index.html, imágenes)
├── package.json              # Dependencias y scripts
└── ...
```

---

## 🏁 Archivos Principales

### 1. `index.js` (Punto de entrada)
Este archivo inicializa la aplicación React y la monta en el DOM. Aquí se importa el componente principal `App` y se renderiza:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

**Explicación:**
- `ReactDOM.createRoot` crea el punto de entrada para React 18+.
- `<App />` es el componente principal que contiene toda la lógica y vistas de la aplicación.

### 2. `App.js` (Componente raíz)
Este componente organiza la estructura global de la app. Aquí se importan los componentes principales como el Header y el Footer, y se definen las rutas o vistas principales.

```js
import Header from './components/Header';
import Footer from './views/Footer';

function App() {
  return (
    <>
      <Header />
      {/* Aquí irán las vistas principales, como Hero, Productos, etc. */}
      <Footer />
    </>
  );
}
export default App;
```

**Explicación:**
- `<Header />` y `<Footer />` son componentes globales presentes en todas las páginas.
- Entre ellos se pueden renderizar las vistas principales según la navegación.

---

## 🧩 Componentes Fundamentales

### 1. `Header.jsx` (Encabezado modular)
El Header está dividido en varios subcomponentes para facilitar su mantenimiento y reutilización:
- **TopBar.jsx:** Barra superior azul con mensajes y enlaces.
- **Logo.jsx:** Logo de la marca y navegación principal.
- **SearchBox.jsx:** Caja de búsqueda controlada por estado.
- **UserNavigation.jsx:** Iconos de usuario y carrito con contador dinámico.
- **MainHeader.jsx:** Composición principal del header.

Ejemplo de composición:
```js
import TopBar from './header/TopBar';
import MainHeader from './header/MainHeader';

function Header() {
  return (
    <header>
      <TopBar />
      <MainHeader />
    </header>
  );
}
```

**Explicación:**
- Cada subcomponente tiene su propia lógica y estilos.
- El Header se mantiene limpio y fácil de modificar.

### 2. `Footer.js` (Pie de página)
Contiene información de contacto, enlaces útiles y secciones adicionales. El diseño es responsivo y el fondo es negro, siguiendo el estilo original de Alkosto.

**Ejemplo de implementación básica:**
```js
import React from 'react';
import './Footer.css'; // Estilos para el fondo negro y layout

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h3>Contacto</h3>
        <p>Teléfono: 01 8000 111 222</p>
        <p>Email: soporte@alkosto.com</p>
      </div>
      <div className="footer-links">
        <h3>Enlaces útiles</h3>
        <ul>
          <li><a href="/ayuda">Ayuda</a></li>
          <li><a href="/tiendas">Tiendas</a></li>
          <li><a href="/politicas">Políticas</a></li>
        </ul>
      </div>
      <div className="footer-newsletter">
        <h3>Suscríbete</h3>
        <input type="email" placeholder="Tu correo" />
        <button>Enviar</button>
      </div>
      <div className="footer-copy">
        <p>© 2025 Alkosto Clone. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
```

**Explicación:**
- El componente utiliza una estructura de `<footer>` con varias secciones: contacto, enlaces, newsletter y copyright.
- Los estilos se definen en `Footer.css`, donde se aplica el fondo negro y el layout responsivo.
- Los enlaces y datos pueden personalizarse según las necesidades del proyecto.

**Ejemplo de estilos básicos (`Footer.css`):**
```css
.footer {
  background: #000;
  color: #fff;
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.footer-contact, .footer-links, .footer-newsletter {
  flex: 1 1 200px;
  margin: 1rem;
}
.footer-copy {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #aaa;
}
@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
  }
}
```

**Notas:**
- El diseño es completamente responsivo y se adapta a móviles y desktop.
- Puedes agregar más secciones o modificar los textos según los requerimientos del proyecto.

---

## 🛒 Estado Global: Context API

### 1. `CartContext.js` (Carrito de compras global)
Este archivo implementa el Context API de React para manejar el estado global del carrito. Permite que cualquier componente acceda y modifique el carrito sin necesidad de pasar props manualmente.

**Variables principales:**
- `cartItems`: Array de objetos producto que están en el carrito.
- `itemCount`: Número total de productos en el carrito.

**Funciones principales:**
- `addToCart(product)`: Agrega un producto al carrito. Si el producto ya existe, incrementa la cantidad.
- `removeFromCart(productId)`: Elimina un producto del carrito por su ID.
- `clearCart()`: Vacía el carrito completamente.
- `getCartTotal()`: Calcula el total de la compra.

**Ejemplo de uso en un componente:**
```js
import { useCart } from '../context/CartContext';

function UserNavigation() {
  const { cartItems, itemCount, addToCart, removeFromCart } = useCart();
  // ... lógica para mostrar el contador y manejar el carrito
}
```

**Explicación:**
- El Context API permite compartir el estado del carrito entre todos los componentes sin prop drilling.
- El contador del carrito se actualiza automáticamente cuando se agregan o eliminan productos.

---

## 🔤 Variables y Funciones Básicas

### Variables Clave
- `cartItems`: Array con los productos agregados al carrito. Cada objeto incluye información como id, nombre, precio y cantidad.
- `itemCount`: Número total de productos en el carrito (suma de cantidades).
- `searchTerm`: Cadena de texto que almacena lo que el usuario escribe en la caja de búsqueda.

### Funciones Clave
- `addToCart(product)`: Añade un producto al carrito. Si el producto ya existe, incrementa la cantidad.
- `removeFromCart(productId)`: Elimina un producto del carrito por su identificador.
- `handleSearch(term)`: Ejecuta la búsqueda de productos usando el término ingresado.
- `clearCart()`: Vacía el carrito completamente.
- `getCartTotal()`: Calcula el total de la compra sumando los precios de los productos.

---

## 📝 Ejemplo de Flujo Básico de la Aplicación

1. El usuario ingresa un término en el SearchBox (`searchTerm`).
2. Al hacer clic en buscar, se ejecuta `handleSearch(searchTerm)` y se filtran los productos.
3. El usuario agrega productos al carrito usando `addToCart(product)` desde la vista de productos.
4. El contador del carrito (`itemCount`) se actualiza automáticamente y se muestra en el icono del carrito.
5. El usuario puede eliminar productos con `removeFromCart(productId)` o vaciar el carrito con `clearCart()`.
6. El total de la compra se calcula con `getCartTotal()` y se muestra en la vista de checkout.

---

## 📚 Recomendaciones y Buenas Prácticas

- Mantener los componentes pequeños, enfocados y reutilizables.
- Usar el Context API para estados globales como el carrito y la autenticación.
- Documentar cada función, variable y componente con comentarios claros.
- Seguir la estructura modular para facilitar el mantenimiento y la escalabilidad.
- Utilizar nombres descriptivos para variables y funciones.
- Separar la lógica de negocio (controllers) de la presentación (components/views).
- Mantener los datos estáticos en archivos JSON dentro de la carpeta `data/`.

---

**Última actualización:** 9 de septiembre de 2025
**Autor:** Michael-2024 / Los Desprogramadores
