# 🔌 Documentación API - Proyecto Alkosto React

## 📋 Información General

Documentación completa de la API del proyecto Alkosto React. Actualmente en desarrollo, esta API soportará todas las funcionalidades del e-commerce.

## 🏗️ Arquitectura de API

### **Base URL**
```
Development:  http://localhost:8000/api/v1
Staging:      https://api-staging.alkosto-clone.com/api/v1
Production:   https://api.alkosto-clone.com/api/v1
```

### **Autenticación**
```http
Authorization: Bearer <token>
Content-Type: application/json
```

---

## 🛍️ Endpoints de Productos

### **Listar Productos**
```http
GET /products
```

**Query Parameters:**
- `page` (int): Página (default: 1)
- `limit` (int): Items por página (default: 20)
- `category` (string): Filtrar por categoría
- `search` (string): Búsqueda por texto
- `min_price` (float): Precio mínimo
- `max_price` (float): Precio máximo
- `sort` (string): Ordenar por (price_asc, price_desc, name, rating)

**Response:**
```json
{
  "status": "success",
  "data": {
    "products": [
      {
        "id": 1,
        "name": "iPhone 14 Pro",
        "slug": "iphone-14-pro",
        "description": "El iPhone más avanzado",
        "price": 4999000,
        "original_price": 5499000,
        "discount": 9,
        "images": [
          "https://cdn.alkosto.com/iphone14pro-1.jpg",
          "https://cdn.alkosto.com/iphone14pro-2.jpg"
        ],
        "category": {
          "id": 1,
          "name": "Smartphones",
          "slug": "smartphones"
        },
        "brand": "Apple",
        "rating": 4.8,
        "reviews_count": 156,
        "stock": 25,
        "is_available": true,
        "specifications": {
          "storage": "128GB",
          "color": "Space Gray",
          "screen_size": "6.1 inches"
        },
        "created_at": "2024-01-15T10:30:00Z",
        "updated_at": "2024-01-20T15:45:00Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 15,
      "total_items": 289,
      "per_page": 20,
      "has_next": true,
      "has_previous": false
    }
  }
}
```

### **Obtener Producto Individual**
```http
GET /products/{id}
GET /products/slug/{slug}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "product": {
      "id": 1,
      "name": "iPhone 14 Pro",
      "slug": "iphone-14-pro",
      "description": "El iPhone más avanzado con chip A16 Bionic...",
      "long_description": "Descripción completa del producto...",
      "price": 4999000,
      "original_price": 5499000,
      "discount": 9,
      "images": [...],
      "category": {...},
      "brand": "Apple",
      "rating": 4.8,
      "reviews_count": 156,
      "stock": 25,
      "is_available": true,
      "specifications": {...},
      "related_products": [...],
      "reviews": [...],
      "shipping_info": {
        "free_shipping": true,
        "estimated_days": "1-3 días hábiles",
        "same_day_available": true
      }
    }
  }
}
```

---

## 📂 Endpoints de Categorías

### **Listar Categorías**
```http
GET /categories
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "categories": [
      {
        "id": 1,
        "name": "Tecnología",
        "slug": "tecnologia",
        "description": "Productos tecnológicos",
        "image": "https://cdn.alkosto.com/cat-tecnologia.jpg",
        "icon": "fas fa-laptop",
        "parent_id": null,
        "children": [
          {
            "id": 11,
            "name": "Smartphones",
            "slug": "smartphones",
            "parent_id": 1,
            "products_count": 45
          },
          {
            "id": 12,
            "name": "Laptops",
            "slug": "laptops",
            "parent_id": 1,
            "products_count": 32
          }
        ],
        "products_count": 156,
        "is_featured": true,
        "order": 1
      }
    ]
  }
}
```

### **Obtener Categoría Individual**
```http
GET /categories/{id}
GET /categories/slug/{slug}
```

---

## 🛒 Endpoints del Carrito

### **Obtener Carrito**
```http
GET /cart
```

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "status": "success",
  "data": {
    "cart": {
      "id": "cart-uuid-123",
      "user_id": 1,
      "items": [
        {
          "id": 1,
          "product_id": 1,
          "product": {
            "id": 1,
            "name": "iPhone 14 Pro",
            "price": 4999000,
            "image": "https://cdn.alkosto.com/iphone14pro.jpg"
          },
          "quantity": 2,
          "unit_price": 4999000,
          "total_price": 9998000
        }
      ],
      "subtotal": 9998000,
      "tax": 1599680,
      "discount": 0,
      "shipping": 0,
      "total": 11597680,
      "items_count": 2,
      "created_at": "2024-01-20T10:00:00Z",
      "updated_at": "2024-01-20T15:30:00Z"
    }
  }
}
```

### **Agregar Item al Carrito**
```http
POST /cart/items
```

**Body:**
```json
{
  "product_id": 1,
  "quantity": 2,
  "specifications": {
    "color": "Space Gray",
    "storage": "128GB"
  }
}
```

### **Actualizar Item del Carrito**
```http
PUT /cart/items/{item_id}
```

**Body:**
```json
{
  "quantity": 3
}
```

### **Eliminar Item del Carrito**
```http
DELETE /cart/items/{item_id}
```

---

## 👤 Endpoints de Usuario

### **Registro de Usuario**
```http
POST /auth/register
```

**Body:**
```json
{
  "email": "usuario@email.com",
  "password": "password123",
  "first_name": "Juan",
  "last_name": "Pérez",
  "phone": "+57 300 123 4567",
  "accept_terms": true,
  "accept_marketing": false
}
```

### **Login de Usuario**
```http
POST /auth/login
```

**Body:**
```json
{
  "email": "usuario@email.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": 1,
      "email": "usuario@email.com",
      "first_name": "Juan",
      "last_name": "Pérez",
      "phone": "+57 300 123 4567",
      "avatar": "https://cdn.alkosto.com/avatars/user1.jpg",
      "email_verified": true,
      "created_at": "2024-01-15T10:30:00Z"
    },
    "tokens": {
      "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
      "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
      "token_type": "Bearer",
      "expires_in": 3600
    }
  }
}
```

### **Perfil de Usuario**
```http
GET /auth/profile
PUT /auth/profile
```

---

## 📦 Endpoints de Órdenes

### **Crear Orden**
```http
POST /orders
```

**Body:**
```json
{
  "shipping_address": {
    "street": "Calle 123 #45-67",
    "city": "Bogotá",
    "state": "Cundinamarca",
    "postal_code": "110111",
    "country": "Colombia"
  },
  "billing_address": {
    "street": "Calle 123 #45-67",
    "city": "Bogotá",
    "state": "Cundinamarca",
    "postal_code": "110111",
    "country": "Colombia"
  },
  "payment_method": "credit_card",
  "shipping_method": "standard",
  "notes": "Entregar en recepción"
}
```

### **Listar Órdenes del Usuario**
```http
GET /orders
```

### **Obtener Orden Individual**
```http
GET /orders/{order_id}
```

---

## 🔍 Endpoints de Búsqueda

### **Búsqueda General**
```http
GET /search
```

**Query Parameters:**
- `q` (string): Término de búsqueda
- `category` (string): Filtrar por categoría
- `filters` (object): Filtros adicionales

**Response:**
```json
{
  "status": "success",
  "data": {
    "query": "iphone",
    "results": {
      "products": [...],
      "categories": [...],
      "suggestions": [
        "iPhone 14",
        "iPhone 13",
        "iPhone 12"
      ]
    },
    "total_results": 45,
    "search_time": 0.023
  }
}
```

### **Autocompletado**
```http
GET /search/autocomplete?q={query}
```

---

## 🏪 Endpoints de Tiendas

### **Listar Tiendas**
```http
GET /stores
```

**Query Parameters:**
- `city` (string): Filtrar por ciudad
- `lat` (float): Latitud para búsqueda por proximidad
- `lng` (float): Longitud para búsqueda por proximidad
- `radius` (int): Radio en km (default: 10)

**Response:**
```json
{
  "status": "success",
  "data": {
    "stores": [
      {
        "id": 1,
        "name": "Alkosto Unicentro",
        "address": "Avenida 15 #123-45, Bogotá",
        "phone": "+57 1 234 5678",
        "email": "unicentro@alkosto.com",
        "hours": {
          "monday": "09:00-21:00",
          "tuesday": "09:00-21:00",
          "wednesday": "09:00-21:00",
          "thursday": "09:00-21:00",
          "friday": "09:00-21:00",
          "saturday": "09:00-21:00",
          "sunday": "10:00-20:00"
        },
        "location": {
          "lat": 4.6097100,
          "lng": -74.0817500
        },
        "services": [
          "pickup_point",
          "tech_support",
          "returns"
        ],
        "is_active": true
      }
    ]
  }
}
```

---

## 📊 Códigos de Estado HTTP

### **Success Codes**
- `200 OK` - Solicitud exitosa
- `201 Created` - Recurso creado exitosamente
- `204 No Content` - Eliminación exitosa

### **Client Error Codes**
- `400 Bad Request` - Datos inválidos
- `401 Unauthorized` - No autenticado
- `403 Forbidden` - Sin permisos
- `404 Not Found` - Recurso no encontrado
- `422 Unprocessable Entity` - Errores de validación

### **Server Error Codes**
- `500 Internal Server Error` - Error interno del servidor
- `503 Service Unavailable` - Servicio no disponible

---

## 🔧 Estructura de Errores

```json
{
  "status": "error",
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Los datos proporcionados no son válidos",
    "details": [
      {
        "field": "email",
        "message": "El email es requerido"
      },
      {
        "field": "password",
        "message": "La contraseña debe tener al menos 8 caracteres"
      }
    ],
    "timestamp": "2024-01-20T15:30:00Z",
    "request_id": "req-uuid-123"
  }
}
```

---

## 🔐 Rate Limiting

### **Límites por Endpoint**
- Búsqueda: 100 requests/minuto
- Carrito: 60 requests/minuto
- Autenticación: 10 requests/minuto
- General: 1000 requests/hora

### **Headers de Rate Limit**
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642683600
```

---

## 📋 Integración Frontend

### **Configuración Axios**
```javascript
// frontend/src/api/config.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### **Servicios de API**
```javascript
// frontend/src/services/productService.js
import api from '../api/config';

export const productService = {
  getProducts: (params = {}) => 
    api.get('/products', { params }),
  
  getProduct: (id) => 
    api.get(`/products/${id}`),
  
  searchProducts: (query, filters = {}) => 
    api.get('/search', { 
      params: { q: query, ...filters } 
    }),
};
```

---

**Última actualización:** Enero 2024  
**Versión API:** v1  
**Estado:** En desarrollo  
**Documentación completa:** Swagger UI disponible en `/api/docs`
