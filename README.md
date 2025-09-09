# �️ Proyecto Alkosto React - E-commerce Clone (Monorepo)

Un clon funcional de la página web de Alkosto desarrollado con React, replicando la experiencia de usuario y las funcionalidades principales del e-commerce líder en Colombia. Ahora organizado en arquitectura **Monorepo** para escalabilidad y mejor organización del desarrollo.

## 🎯 Características Principales

- ✅ **Arquitectura Monorepo:** Frontend y backend completamente separados
- ✅ **Header Modular:** Sistema de header dividido en 5 componentes especializados
- ✅ **Carrito Dinámico:** Contador que se muestra solo cuando hay items
- ✅ **Context API:** Gestión de estado global para el carrito de compras
- ✅ **Responsive Design:** Adaptable a móviles, tablets y desktop
- ✅ **Componentes Reutilizables:** Arquitectura modular y mantenible
- ✅ **Footer Completo:** Con fondo negro idéntico al original
- ✅ **Documentación Completa:** Guías técnicas y de desarrollo
- 🔄 **En Desarrollo:** Backend API y funcionalidades adicionales

## 🚀 Demo en Vivo

Visita el proyecto en funcionamiento: `http://localhost:3001`

## 📋 Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn
- Git

## 🛠️ Instalación y Configuración

### 1. Clonar el Repositorio
```bash
git clone https://github.com/jmgalvis12/Proyecto_Alkosto.git
cd proyecto_ig
```

### 2. Configurar Frontend
```bash
# Navegar al frontend
cd frontend

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start
```

### 3. Scripts del Monorepo (desde la raíz)
```bash
# Instalar frontend
npm run install:frontend

# Ejecutar frontend en desarrollo
npm run dev:frontend

# Build frontend para producción
npm run build:frontend

# Ejecutar tests
npm run test:frontend
```

El proyecto se abrirá automáticamente en `http://localhost:3000`

## 🏗️ Arquitectura del Monorepo

```
proyecto_ig/
├── 📁 frontend/              # Aplicación React
│   ├── src/
│   │   ├── components/       # Componentes reutilizables
│   │   ├── views/           # Vistas/páginas principales
│   │   ├── context/         # Contextos React (CartContext)
│   │   ├── controllers/     # Lógica de negocio
│   │   ├── models/          # Modelos de datos
│   │   └── data/            # Datos estáticos
│   ├── public/              # Archivos públicos
│   └── package.json         # Dependencias frontend
├── 📁 backend/              # API Backend (futuro)
├── 📁 docs/                 # Documentación completa
└── package.json             # Scripts del monorepo
```

## 🧩 Componentes Principales

### Header Modular
- **TopBar**: Barra superior azul con contacto e hiperofertas
- **Logo**: Logo responsivo de Alkosto
- **SearchBox**: Caja de búsqueda con validación
- **UserNavigation**: Navegación usuario con carrito dinámico
- **MainHeader**: Contenedor principal blanco

### Vistas Principales
- **CategoryNavbar**: Navegación de categorías con mega menús
- **Hero**: Banner promocional principal
- **BenefitsBar**: Barra de beneficios (envío, garantía, soporte)
- **Productos**: Grid de productos con funcionalidad carrito
- **Footer**: Footer completo con fondo negro idéntico al original

## 🎨 Sistema de Diseño

### Colores Alkosto
- **Naranja Principal**: `#e95e27`
- **Azul Corporativo**: `#003366`
- **Fondo Negro**: `#000000`

### Responsive Breakpoints
- **Móvil**: < 768px
- **Tablet**: 768px - 992px
- **Desktop**: > 992px

## 🔄 Gestión de Estado

### CartContext
Manejo centralizado del carrito de compras:

```javascript
const { cartItems, cartItemCount, addToCart, removeFromCart } = useCart();
```

**Funciones disponibles:**
- `addToCart(product)` - Agregar producto
- `removeFromCart(productId)` - Eliminar producto
- `updateQuantity(productId, quantity)` - Actualizar cantidad
- `clearCart()` - Limpiar carrito
- `getCartTotal()` - Calcular total

## 📱 Características Responsive

- **Header compacto** en móviles
- **Menús colapsables** para navegación
- **Grid adaptable** de productos
- **Footer con acordeones** en dispositivos pequeños

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
