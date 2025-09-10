# 🔧 Guía Técnica - Proyecto Alkosto React

## 📊 Análisis de Dependencias

### Dependencias de Producción
```json
{
  "react": "^19.1.1",                    // Framework principal
  "react-dom": "^19.1.1",               // Renderizado DOM
  "react-scripts": "5.0.1",             // Herramientas CRA
  "@fortawesome/react-fontawesome": "^3.0.2",  // Iconos React
  "@fortawesome/free-solid-svg-icons": "^7.0.0", // Iconos sólidos
  "web-vitals": "^2.1.4"                // Métricas performance
}
```

### Dependencias de Desarrollo
```json
{
  "@testing-library/react": "^16.3.0",
  "@testing-library/jest-dom": "^6.8.0",
  "@testing-library/dom": "^10.4.1",
  "@testing-library/user-event": "^13.5.0"
}
```

## 🏗️ Patrones Arquitectónicos

### 1. Composition Pattern en Header
```javascript
// Antes: Componente monolítico
const Header = () => {
  return (
    <header>
      {/* 100+ líneas de código mezclado */}
    </header>
  );
};

// Después: Composición modular
const Header = () => {
  return (
    <header className="header-primary">
      <TopBar />
      <MainHeader />
    </header>
  );
};

const MainHeader = () => {
  return (
    <div className="main-header">
      <Logo />
      <SearchBox />
      <UserNavigation />
    </div>
  );
};
```

**Beneficios:**
- ✅ Mantenimiento simplificado
- ✅ Testing granular
- ✅ Reutilización de componentes
- ✅ Separación de responsabilidades

### 2. Context Pattern para Estado Global
```javascript
// Proveedor de contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const value = {
    cartItems,
    cartItemCount,
    addToCart,
    removeFromCart,
    // ... más funciones
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};
```

**Beneficios:**
- ✅ Evita prop drilling
- ✅ Estado centralizado
- ✅ API consistente
- ✅ Type safety (futuro TypeScript)

## 📁 Estructura de Archivos Detallada

### Convenciones de Nomenclatura
```
ComponentName.jsx     // Componentes React (PascalCase)
ComponentName.css     // Estilos específicos del componente
hooks/useCustomHook.js // Hooks personalizados (camelCase)
utils/helperFunction.js // Utilidades (camelCase)
constants/API_URLS.js  // Constantes (UPPER_CASE)
```

### Organización por Funcionalidad
```
src/
├── components/           # Componentes reutilizables
│   ├── common/          # Componentes UI genéricos
│   ├── layout/          # Componentes de layout
│   └── feature/         # Componentes específicos de funcionalidad
├── hooks/               # Custom hooks
├── utils/               # Funciones auxiliares
├── constants/           # Constantes de la aplicación
├── services/            # Servicios API
└── types/               # Definiciones TypeScript (futuro)
```

## 🎨 Sistema CSS Modular

### Metodología BEM Adaptada
```css
/* Bloque */
.header-primary {}

/* Elemento */
.header-primary__logo {}
.header-primary__search {}
.header-primary__navigation {}

/* Modificador */
.header-primary--mobile {}
.header-primary__logo--small {}
```

### Variables CSS Personalizadas
```css
:root {
  /* Colores Primarios */
  --color-primary: #e95e27;
  --color-primary-light: #ff7849;
  --color-secondary: #003366;
  
  /* Espaciado */
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  
  /* Tipografía */
  --font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  
  /* Sombras */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  
  /* Bordes */
  --border-radius-sm: 0.25rem;
  --border-radius-md: 0.5rem;
  --border-radius-lg: 1rem;
  --border-radius-full: 9999px;
}
```

### Mixins SCSS (Futuro)
```scss
// Responsive breakpoints
@mixin mobile {
  @media (max-width: 767px) { @content; }
}

@mixin tablet {
  @media (min-width: 768px) and (max-width: 991px) { @content; }
}

@mixin desktop {
  @media (min-width: 992px) { @content; }
}

// Flex utilities
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

## ⚡ Optimizaciones de Performance

### 1. Lazy Loading de Componentes
```javascript
import { lazy, Suspense } from 'react';

// Lazy loading de componentes pesados
const ProductGrid = lazy(() => import('./components/ProductGrid'));
const MegaMenu = lazy(() => import('./components/MegaMenu'));

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ProductGrid />
      <MegaMenu />
    </Suspense>
  );
}
```

### 2. Memoización Estratégica
```javascript
import { memo, useMemo, useCallback } from 'react';

// Memoización de componentes
const ProductCard = memo(({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      {/* JSX del producto */}
    </div>
  );
});

// Memoización de valores calculados
const ExpensiveComponent = ({ items }) => {
  const expensiveValue = useMemo(() => {
    return items.reduce((acc, item) => acc + item.price, 0);
  }, [items]);

  const handleClick = useCallback((id) => {
    // Lógica del click
  }, []);

  return <div>{expensiveValue}</div>;
};
```

### 3. Optimización de Imágenes
```javascript
// Componente Image optimizado
const OptimizedImage = ({ src, alt, width, height, lazy = true }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
      style={{ aspectRatio: `${width}/${height}` }}
    />
  );
};
```

## 🧪 Estrategia de Testing

### Estructura de Tests
```
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   └── __tests__/
│   │       ├── Header.test.jsx
│   │       ├── Header.integration.test.jsx
│   │       └── Header.a11y.test.jsx
└── __tests__/
    ├── utils/
    ├── integration/
    └── e2e/
```

### Tipos de Tests
```javascript
// 1. Unit Tests - Componentes individuales
import { render, screen } from '@testing-library/react';
import { Logo } from '../Logo';

describe('Logo Component', () => {
  test('renders logo with correct alt text', () => {
    render(<Logo />);
    expect(screen.getByAltText('Alkosto')).toBeInTheDocument();
  });
});

// 2. Integration Tests - Interacción entre componentes
import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider } from '../../context/CartContext';
import { UserNavigation } from '../UserNavigation';

describe('UserNavigation Integration', () => {
  test('updates cart counter when item added', async () => {
    render(
      <CartProvider>
        <UserNavigation />
      </CartProvider>
    );
    
    // Test logic
  });
});

// 3. Accessibility Tests
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('should not have accessibility violations', async () => {
  const { container } = render(<Header />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## 🔍 Debugging y Development Tools

### React Developer Tools
```javascript
// Configuración para debugging
if (process.env.NODE_ENV === 'development') {
  // React DevTools profiler
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.__REACT_DEVTOOLS_GLOBAL_HOOK__ || {};
}
```

### Error Boundaries
```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error Boundary:', error, errorInfo);
    // Log error to service
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo salió mal.</h1>;
    }

    return this.props.children;
  }
}
```

### Performance Monitoring
```javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Monitoreo Web Vitals
const sendToAnalytics = (metric) => {
  // Enviar métricas a servicio de analytics
  console.log(metric);
};

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

## 🚀 Build y Deployment

### Configuración de Build
```javascript
// package.json scripts optimizados
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "build:analyze": "npm run build && npx serve -s build",
    "test": "react-scripts test",
    "test:coverage": "react-scripts test --coverage --watchAll=false",
    "eject": "react-scripts eject"
  }
}
```

### Optimizaciones de Bundle
```javascript
// webpack-bundle-analyzer (después de eject)
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    })
  ]
};
```

### Progressive Web App
```javascript
// public/manifest.json
{
  "short_name": "Alkosto",
  "name": "Alkosto - Todo para tu hogar",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#e95e27",
  "background_color": "#ffffff"
}
```

## 📋 Checklist de Calidad

### Code Quality
- [ ] ESLint configurado y sin errores
- [ ] Prettier para formateo consistente
- [ ] PropTypes o TypeScript para type safety
- [ ] JSDoc para funciones complejas
- [ ] Nombres descriptivos y consistentes

### Performance
- [ ] Lazy loading implementado
- [ ] Imágenes optimizadas
- [ ] Bundle size analizado
- [ ] Web Vitals monitoreados
- [ ] Caching estratégico

### Accessibility
- [ ] ARIA labels apropiados
- [ ] Contraste de colores adecuado
- [ ] Navegación por teclado
- [ ] Screen reader compatibility
- [ ] Focus management

### Testing
- [ ] Unit tests > 80% coverage
- [ ] Integration tests críticos
- [ ] E2E tests para flujos principales
- [ ] Accessibility tests
- [ ] Performance tests

### SEO
- [ ] Meta tags apropiados
- [ ] Structured data
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Open Graph tags

## 🔮 Roadmap Técnico

### Fase 1: Estabilización (Actual)
- ✅ Arquitectura modular
- ✅ Context API carrito
- ✅ Responsive design
- ✅ Performance básico

### Fase 2: Escalabilidad
- [ ] Migración a TypeScript
- [ ] State management avanzado (Redux Toolkit)
- [ ] API integration
- [ ] Advanced routing

### Fase 3: Optimización
- [ ] Server-Side Rendering (Next.js)
- [ ] Advanced caching
- [ ] Micro-frontends
- [ ] Performance monitoring

### Fase 4: Enterprise
- [ ] Monorepo architecture
- [ ] Design system library
- [ ] Automated testing CI/CD
- [ ] Advanced analytics

---

**Última actualización:** 9 de septiembre de 2025  
**Versión:** 1.0.0  
**Mantenido por:** Equipo Desarrollo Alkosto React
