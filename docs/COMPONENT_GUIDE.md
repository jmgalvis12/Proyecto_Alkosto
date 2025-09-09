# 🧩 Guía de Componentes - Proyecto Alkosto React

## 📋 Información General

Esta guía documenta todos los componentes del proyecto Alkosto React en su nueva estructura de monorepo.

## 🏗️ Estructura de Componentes

```
frontend/src/
├── components/                # Componentes reutilizables
│   ├── Header.jsx            # ✅ Header principal modularizado
│   └── header/               # 📁 Módulo Header
│       ├── TopBar.jsx        # ✅ Barra superior azul
│       ├── Logo.jsx          # ✅ Logo y navegación
│       ├── SearchBox.jsx     # ✅ Caja de búsqueda
│       ├── UserNavigation.jsx # ✅ Usuario y carrito
│       └── MainHeader.jsx    # ✅ Composición principal
├── views/                    # Vistas y secciones
│   ├── BenefitsBar.js        # ✅ Barra de beneficios
│   ├── Categories.js         # ✅ Grid de categorías
│   ├── CategoryDropdown.js   # ✅ Dropdown categorías
│   ├── CategoryNavbar.js     # ✅ Navbar categorías
│   ├── Footer.js             # ✅ Footer completo
│   ├── Hero.js               # ✅ Sección hero
│   └── Productos.js          # ✅ Lista productos
└── contexts/                 # Context API
    └── CartContext.js        # ✅ Estado global carrito
```

## 🎯 Componentes Modulares del Header

### 1. **Header.jsx** - Composición Principal
```jsx
import TopBar from './header/TopBar';
import MainHeader from './header/MainHeader';

function Header() {
  return (
    <div className="header-container">
      <TopBar />
      <MainHeader />
    </div>
  );
}
```

**Responsabilidades:**
- Componer el header completo
- Organizar TopBar y MainHeader
- Mantener estructura semántica

**Archivos relacionados:**
- `frontend/src/components/Header.jsx`

---

### 2. **TopBar.jsx** - Barra Superior Azul
```jsx
function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <span>Envío gratis desde $80.000</span>
        <div className="top-bar-links">
          <a href="#sucursales">Nuestras tiendas</a>
          <a href="#ayuda">Ayuda</a>
        </div>
      </div>
    </div>
  );
}
```

**Características:**
- Fondo azul característico de Alkosto
- Mensajes promocionales
- Enlaces de navegación secundaria
- Responsive design

**Archivos relacionados:**
- `frontend/src/components/header/TopBar.jsx`
- `frontend/src/css/components/header/TopBar.css`

---

### 3. **Logo.jsx** - Logo y Navegación Principal
```jsx
function Logo() {
  return (
    <div className="logo-section">
      <img 
        src="/assets/logo-agosto-header.png" 
        alt="Alkosto" 
        className="logo"
      />
      <nav className="main-nav">
        <a href="#tecnologia">Tecnología</a>
        <a href="#hogar">Hogar</a>
        <a href="#deportes">Deportes</a>
      </nav>
    </div>
  );
}
```

**Características:**
- Logo oficial de Alkosto
- Navegación principal horizontal
- Diseño responsive
- Enlaces a categorías principales

**Archivos relacionados:**
- `frontend/src/components/header/Logo.jsx`
- `frontend/src/css/components/header/Logo.css`

---

### 4. **SearchBox.jsx** - Caja de Búsqueda
```jsx
function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscar:', searchTerm);
  };

  return (
    <form className="search-box" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="¿Qué estás buscando?"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}
```

**Características:**
- Input controlado con React state
- Placeholder personalizado
- Botón de búsqueda con icono
- Manejo de eventos de submit

**Archivos relacionados:**
- `frontend/src/components/header/SearchBox.jsx`
- `frontend/src/css/components/header/SearchBox.css`

---

### 5. **UserNavigation.jsx** - Usuario y Carrito
```jsx
import { useCart } from '../../../contexts/CartContext';

function UserNavigation() {
  const { itemCount } = useCart();

  return (
    <div className="user-navigation">
      <a href="#cuenta" className="user-link">
        <i className="fas fa-user"></i>
        <span>Mi cuenta</span>
      </a>
      <a href="#carrito" className="cart-link">
        <i className="fas fa-shopping-cart"></i>
        <span>Carrito</span>
        {itemCount > 0 && (
          <span className="cart-counter">{itemCount}</span>
        )}
      </a>
    </div>
  );
}
```

**Características:**
- Integración con CartContext
- Contador dinámico del carrito
- Solo muestra contador si hay items
- Iconografía con FontAwesome

**Archivos relacionados:**
- `frontend/src/components/header/UserNavigation.jsx`
- `frontend/src/css/components/header/UserNavigation.css`
- `frontend/src/contexts/CartContext.js`

---

### 6. **MainHeader.jsx** - Composición Principal
```jsx
import Logo from './Logo';
import SearchBox from './SearchBox';
import UserNavigation from './UserNavigation';

function MainHeader() {
  return (
    <div className="main-header">
      <div className="main-header-content">
        <Logo />
        <SearchBox />
        <UserNavigation />
      </div>
    </div>
  );
}
```

**Características:**
- Compone Logo, SearchBox y UserNavigation
- Layout horizontal flexible
- Contenedor con max-width
- Distribución responsive

**Archivos relacionados:**
- `frontend/src/components/header/MainHeader.jsx`
- `frontend/src/css/components/header/MainHeader.css`

## 🎨 Componentes de Vistas

### **Footer.js** - Footer Completo
**Características principales:**
- Fondo negro característico de Alkosto
- Sección de newsletter
- Links organizados por categorías
- Información de contacto
- Responsive con acordeones en móvil

**Secciones:**
1. Newsletter signup
2. Categorías de productos
3. Atención al cliente
4. Sobre Alkosto
5. Información de contacto

---

### **BenefitsBar.js** - Barra de Beneficios
**Características principales:**
- Iconos de beneficios (envío gratis, garantía, etc.)
- Layout horizontal con scroll en móvil
- Colores corporativos

---

### **Categories.js** - Grid de Categorías
**Características principales:**
- Grid responsive de categorías
- Imágenes de categoría
- Navegación por categorías principales

---

### **Hero.js** - Sección Hero
**Características principales:**
- Banner principal
- Llamadas a la acción
- Diseño promocional

## 🔧 Context API

### **CartContext.js** - Estado Global del Carrito
```jsx
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
    setItemCount(prev => prev + 1);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      itemCount, 
      addToCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
```

**Funcionalidades:**
- Estado global del carrito
- Contador de items
- Hook personalizado useCart
- Provider pattern

## 📱 Responsive Design

### **Breakpoints**
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### **Estrategias Responsive**
1. **Mobile First:** Diseño desde móvil hacia desktop
2. **Flexbox/Grid:** Layout flexible
3. **Media Queries:** Adaptación por tamaño
4. **Touch Friendly:** Botones apropiados para touch

## 🎯 Mejores Prácticas

### **Componentes**
- Una responsabilidad por componente
- Props tipados con PropTypes
- Nombres descriptivos
- Documentación inline

### **Estilos**
- CSS Modules o archivos separados
- Nomenclatura BEM
- Variables CSS para colores
- Estilos responsive

### **Performance**
- React.memo para componentes puros
- useCallback para funciones
- useMemo para cálculos costosos
- Lazy loading cuando sea apropiado

---

**Última actualización:** Enero 2024  
**Componentes totales:** 12 activos  
**Cobertura modular:** 100% del header
