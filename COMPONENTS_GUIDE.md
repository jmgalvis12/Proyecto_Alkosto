# 🧩 Guía de Componentes - Proyecto Alkosto React

## 📋 Índice de Componentes

### 🏗️ Layout Components
- [Header](#header) - Header principal modular
- [TopBar](#topbar) - Barra superior azul  
- [MainHeader](#mainheader) - Header blanco principal
- [Footer](#footer) - Footer completo

### 🎨 UI Components  
- [Logo](#logo) - Logo responsivo Alkosto
- [SearchBox](#searchbox) - Caja de búsqueda
- [UserNavigation](#usernavigation) - Navegación usuario

### 📄 Page Components
- [Hero](#hero) - Banner principal
- [BenefitsBar](#benefitsbar) - Barra beneficios
- [CategoryNavbar](#categorynavbar) - Navegación categorías
- [Productos](#productos) - Grid productos

---

## 🏗️ Layout Components

### Header
**Archivo:** `src/components/Header.jsx`  
**Propósito:** Componente principal del header que orquesta todos los sub-componentes

#### Props
Ninguna - Componente autónomo

#### Ejemplo de Uso
```jsx
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Resto del contenido */}
    </div>
  );
}
```

#### Estructura Interna
```jsx
const Header = () => {
  return (
    <header className="header-primary">
      <TopBar />
      <MainHeader />
    </header>
  );
};
```

#### CSS Asociado
```css
.header-primary {
  position: relative;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}
```

---

### TopBar
**Archivo:** `src/components/header/TopBar.jsx`  
**Propósito:** Barra superior azul con información corporativa y enlaces promocionales

#### Props
Ninguna - Componente estático

#### Ejemplo de Uso
```jsx
import TopBar from './header/TopBar';

const Header = () => {
  return (
    <header>
      <TopBar />
      {/* Otros componentes */}
    </header>
  );
};
```

#### Características
- Fondo azul (#003366)
- Información de contacto a la izquierda
- Enlaces promocionales a la derecha
- Responsive (se oculta parcialmente en móvil)

#### CSS Principal
```css
.header-top-bar {
  background-color: #003366;
  color: #ffffff;
  padding: 8px 0;
}

.header-top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

---

### MainHeader
**Archivo:** `src/components/header/MainHeader.jsx`  
**Propósito:** Contenedor principal blanco que contiene Logo, SearchBox y UserNavigation

#### Props
Ninguna - Componente de composición

#### Ejemplo de Uso
```jsx
import MainHeader from './header/MainHeader';

const Header = () => {
  return (
    <header>
      <TopBar />
      <MainHeader />
    </header>
  );
};
```

#### Estructura
```jsx
const MainHeader = () => {
  return (
    <div className="main-header">
      <div className="main-header__container">
        <Logo />
        <SearchBox />
        <UserNavigation />
      </div>
    </div>
  );
};
```

#### Layout CSS
```css
.main-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 80px;
}
```

---

## 🎨 UI Components

### Logo
**Archivo:** `src/components/header/Logo.jsx`  
**Propósito:** Logo responsivo oficial de Alkosto

#### Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| size | string | 'normal' | Tamaño del logo: 'small', 'normal', 'large' |
| className | string | '' | Clases CSS adicionales |

#### Ejemplo de Uso
```jsx
import Logo from './header/Logo';

// Uso básico
<Logo />

// Con tamaño personalizado
<Logo size="small" />

// Con clases adicionales
<Logo className="custom-logo" />
```

#### Implementación
```jsx
const Logo = ({ size = 'normal', className = '' }) => {
  const sizeClasses = {
    small: 'logo--small',
    normal: 'logo--normal', 
    large: 'logo--large'
  };

  return (
    <div className={`logo ${sizeClasses[size]} ${className}`}>
      <img 
        src="/assets/alkosto-logo.svg"
        alt="Alkosto - Todo para tu hogar"
        title="Alkosto"
      />
    </div>
  );
};
```

#### Responsive Behavior
```css
.logo img {
  height: 45px; /* Desktop */
}

@media (max-width: 768px) {
  .logo img {
    height: 35px; /* Tablet */
  }
}

@media (max-width: 480px) {
  .logo img {
    height: 30px; /* Mobile */
  }
}
```

---

### SearchBox
**Archivo:** `src/components/header/SearchBox.jsx`  
**Propósito:** Caja de búsqueda con validación y manejo de estado

#### Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| onSearch | function | () => {} | Callback ejecutado al buscar |
| placeholder | string | 'Buscar productos...' | Texto placeholder |
| disabled | boolean | false | Deshabilitar búsqueda |

#### Ejemplo de Uso
```jsx
import SearchBox from './header/SearchBox';

const handleSearch = (query) => {
  console.log('Searching for:', query);
  // Lógica de búsqueda
};

<SearchBox 
  onSearch={handleSearch}
  placeholder="¿Qué estás buscando?"
/>
```

#### Implementación Completa
```jsx
import { useState } from 'react';
import { SearchIcon } from './Icons';

const SearchBox = ({ 
  onSearch = () => {}, 
  placeholder = 'Buscar productos...',
  disabled = false 
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className="search-input"
        />
        <button 
          type="submit" 
          className="search-button"
          disabled={disabled || !query.trim()}
        >
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};
```

---

### UserNavigation
**Archivo:** `src/components/header/UserNavigation.jsx`  
**Propósito:** Navegación de usuario con carrito dinámico

#### Props
Ninguna - Usa Context API internamente

#### Ejemplo de Uso
```jsx
import UserNavigation from './header/UserNavigation';
import { CartProvider } from '../context/CartContext';

function App() {
  return (
    <CartProvider>
      <UserNavigation />
    </CartProvider>
  );
}
```

#### Implementación con Context
```jsx
import { useCart } from '../../context/CartContext';
import { UserIcon, ShoppingCartIcon } from './Icons';

const UserNavigation = () => {
  const { cartItemCount } = useCart();

  return (
    <nav className="user-navigation">
      <a href="/account" className="nav-link">
        <UserIcon />
        <span>Mi Cuenta</span>
      </a>
      
      <a href="/cart" className="nav-link cart-link">
        <ShoppingCartIcon />
        <span>Carrito</span>
        {cartItemCount > 0 && (
          <span className="cart-counter">
            {cartItemCount}
          </span>
        )}
      </a>
    </nav>
  );
};
```

#### Estados del Carrito
```css
.cart-counter {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #e95e27;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
}

/* Solo visible cuando hay productos */
.cart-counter:empty {
  display: none;
}
```

---

## 📄 Page Components

### Hero
**Archivo:** `src/views/Hero.js`  
**Propósito:** Banner principal promocional de la página

#### Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| banners | array | [] | Array de banners a mostrar |
| autoSlide | boolean | true | Auto-slide automático |
| interval | number | 5000 | Intervalo auto-slide (ms) |

#### Ejemplo de Uso
```jsx
import Hero from './views/Hero';

const banners = [
  {
    id: 1,
    title: 'Gran Liquidación',
    subtitle: 'Hasta 70% de descuento',
    image: '/images/banner1.jpg',
    cta: 'Ver Ofertas',
    link: '/ofertas'
  }
];

<Hero 
  banners={banners}
  autoSlide={true}
  interval={3000}
/>
```

#### Características
- Carousel automático
- Responsive images
- CTAs personalizables
- Indicadores de posición
- Touch/swipe support (móvil)

---

### BenefitsBar
**Archivo:** `src/views/BenefitsBar.js`  
**Propósito:** Muestra beneficios clave (envío, garantía, soporte)

#### Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| benefits | array | defaultBenefits | Array de beneficios custom |
| layout | string | 'horizontal' | Layout: 'horizontal' o 'vertical' |

#### Ejemplo de Uso
```jsx
import BenefitsBar from './views/BenefitsBar';

const customBenefits = [
  {
    icon: 'truck',
    title: 'Envío Gratis',
    description: 'En compras mayores a $150.000'
  }
];

<BenefitsBar 
  benefits={customBenefits}
  layout="horizontal"
/>
```

#### Beneficios por Defecto
```javascript
const defaultBenefits = [
  {
    icon: 'shipping',
    title: 'Envío Gratis',
    description: 'En compras superiores a $150.000',
    color: '#e95e27'
  },
  {
    icon: 'warranty', 
    title: 'Garantía Extendida',
    description: 'Hasta 3 años en electrodomésticos',
    color: '#003366'
  },
  {
    icon: 'support',
    title: 'Soporte 24/7',
    description: 'Atención personalizada todo el día',
    color: '#28a745'
  }
];
```

---

### CategoryNavbar
**Archivo:** `src/views/CategoryNavbar.js`  
**Propósito:** Navegación horizontal de categorías con mega menús

#### Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| categories | array | [] | Array de categorías |
| onCategorySelect | function | () => {} | Callback selección categoría |
| showMegaMenu | boolean | true | Mostrar mega menús |

#### Ejemplo de Uso
```jsx
import CategoryNavbar from './views/CategoryNavbar';

const categories = [
  {
    id: 1,
    name: 'Electrodomésticos',
    slug: 'electrodomesticos',
    subcategories: [...]
  }
];

const handleCategorySelect = (category) => {
  // Navegar a categoría
};

<CategoryNavbar 
  categories={categories}
  onCategorySelect={handleCategorySelect}
  showMegaMenu={true}
/>
```

#### Estructura de Categoría
```javascript
const categoryStructure = {
  id: number,
  name: string,
  slug: string,
  icon?: string,
  image?: string,
  subcategories: [
    {
      id: number,
      name: string,
      slug: string,
      products?: array
    }
  ],
  featured?: array,
  brands?: array
};
```

---

### Productos
**Archivo:** `src/views/Productos.js`  
**Propósito:** Grid responsive de productos con funcionalidad de carrito

#### Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| products | array | [] | Array de productos |
| columns | number | 4 | Número de columnas desktop |
| showFilters | boolean | false | Mostrar filtros |
| onProductClick | function | () => {} | Callback click producto |

#### Ejemplo de Uso
```jsx
import Productos from './views/Productos';
import { CartProvider } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 4999900,
    image: '/images/iphone15.jpg',
    rating: 4.5,
    reviews: 150
  }
];

<CartProvider>
  <Productos 
    products={products}
    columns={3}
    showFilters={true}
    onProductClick={(product) => console.log(product)}
  />
</CartProvider>
```

#### ProductCard Component
```jsx
const ProductCard = memo(({ product, onAddToCart }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    onAddToCart?.(product);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="price">${product.price.toLocaleString()}</div>
      <button onClick={handleAddToCart}>
        Agregar al Carrito
      </button>
    </div>
  );
});
```

---

### Footer
**Archivo:** `src/views/Footer.js`  
**Propósito:** Footer completo con newsletter, enlaces y contacto

#### Props
Ninguna - Componente estático completo

#### Ejemplo de Uso
```jsx
import Footer from './views/Footer';

function App() {
  return (
    <div className="App">
      {/* Contenido principal */}
      <Footer />
    </div>
  );
}
```

#### Secciones del Footer
1. **Newsletter Section** - Suscripción email
2. **Links Section** - Enlaces organizados por categorías
3. **Contact Section** - Información de contacto
4. **Social Section** - Redes sociales
5. **Legal Section** - Copyright y certificaciones

#### Newsletter Integration
```jsx
const [email, setEmail] = useState('');
const [subscribed, setSubscribed] = useState(false);

const handleNewsletterSubmit = async (e) => {
  e.preventDefault();
  
  try {
    // API call para suscripción
    await subscribeToNewsletter(email);
    setSubscribed(true);
    setEmail('');
  } catch (error) {
    console.error('Error suscripción:', error);
  }
};
```

---

## 🔧 Guías de Implementación

### Crear Nuevo Componente
```bash
# Estructura recomendada
src/components/NewComponent/
├── NewComponent.jsx
├── NewComponent.css
├── NewComponent.test.jsx
└── index.js
```

#### Template Base
```jsx
// NewComponent.jsx
import './NewComponent.css';
import PropTypes from 'prop-types';

const NewComponent = ({ 
  prop1, 
  prop2 = 'default',
  className = '',
  children,
  ...rest 
}) => {
  return (
    <div 
      className={`new-component ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

NewComponent.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

export default NewComponent;
```

#### Index File
```javascript
// index.js
export { default } from './NewComponent';
```

### Testing Pattern
```jsx
// NewComponent.test.jsx
import { render, screen } from '@testing-library/react';
import NewComponent from './NewComponent';

describe('NewComponent', () => {
  test('renders correctly', () => {
    render(<NewComponent prop1="test" />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(
      <NewComponent 
        prop1="test" 
        className="custom-class" 
      />
    );
    expect(screen.getByRole('region')).toHaveClass('custom-class');
  });
});
```

---

## 📚 Recursos Adicionales

### Storybook (Futuro)
```javascript
// NewComponent.stories.jsx
export default {
  title: 'Components/NewComponent',
  component: NewComponent,
  parameters: {
    docs: {
      description: {
        component: 'Descripción del componente'
      }
    }
  }
};

export const Default = {
  args: {
    prop1: 'Valor por defecto'
  }
};

export const WithCustomProps = {
  args: {
    prop1: 'Valor custom',
    prop2: 'Otro valor'
  }
};
```

### Documentación JSDoc
```javascript
/**
 * Componente de producto para mostrar información básica
 * @param {Object} props - Props del componente
 * @param {string} props.name - Nombre del producto
 * @param {number} props.price - Precio del producto
 * @param {string} props.image - URL de la imagen
 * @param {function} [props.onAddToCart] - Callback agregar al carrito
 * @returns {JSX.Element} Componente ProductCard
 */
const ProductCard = ({ name, price, image, onAddToCart }) => {
  // Implementación
};
```

---

**Última actualización:** 9 de septiembre de 2025  
**Versión:** 1.0.0  
**Documentación mantenida por:** Equipo Frontend Alkosto React
