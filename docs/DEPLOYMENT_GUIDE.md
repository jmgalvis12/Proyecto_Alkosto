# 🚀 Guía de Deployment - Proyecto Alkosto React

## 📋 Información General

Esta guía cubre el proceso completo de deployment para el proyecto Alkosto React en su arquitectura monorepo.

## 🏗️ Preparación para Deployment

### **1. Verificación Pre-Deploy**

#### Checklist Frontend
- [ ] Todos los tests pasan: `npm test`
- [ ] Build se genera sin errores: `npm run build`
- [ ] No hay errores de ESLint críticos
- [ ] Imágenes optimizadas
- [ ] Variables de entorno configuradas
- [ ] Performance auditado

#### Comandos de Verificación
```bash
# Navegar al frontend
cd frontend

# Verificar tests
npm test -- --coverage --watchAll=false

# Verificar build
npm run build

# Verificar estructura del build
ls -la build/

# Verificar tamaño del bundle
npm run build -- --analyze
```

---

## 🌐 Deployment en Netlify (Recomendado)

### **Paso 1: Configuración Inicial**

1. **Conectar Repositorio**
   - Acceder a [Netlify](https://www.netlify.com/)
   - "New site from Git"
   - Conectar con GitHub/GitLab
   - Seleccionar repositorio

2. **Configuración de Build**
   ```yaml
   # netlify.toml en la raíz
   [build]
     publish = "frontend/build"
     command = "cd frontend && npm install && npm run build"
   
   [build.environment]
     NODE_VERSION = "18"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### **Paso 2: Variables de Entorno**
```bash
# En Netlify Dashboard > Site settings > Environment variables
REACT_APP_API_URL=https://api.alkosto-clone.com
REACT_APP_ENVIRONMENT=production
REACT_APP_ANALYTICS_ID=your-analytics-id
```

### **Paso 3: Deploy Automático**
```bash
# Push a main/master activa deployment automático
git add .
git commit -m "feat: deploy to production"
git push origin main
```

---

## 🐳 Deployment con Docker

### **Dockerfile para Frontend**
```dockerfile
# frontend/Dockerfile
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### **Docker Compose (Desarrollo)**
```yaml
# docker-compose.yml en la raíz
version: '3.8'

services:
  frontend:
    build: ./frontend
    ports:
      - "3000:80"
    environment:
      - REACT_APP_API_URL=http://localhost:8000
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/alkosto
    depends_on:
      - db

  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=alkosto
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### **Comandos Docker**
```bash
# Build y correr
docker-compose up --build

# Solo frontend
docker build -t alkosto-frontend ./frontend
docker run -p 3000:80 alkosto-frontend

# Producción
docker-compose -f docker-compose.prod.yml up -d
```

---

## ☁️ Deployment en Vercel

### **Configuración Vercel**
```json
{
  "version": 2,
  "name": "alkosto-frontend",
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "headers": { "cache-control": "s-maxage=31536000,immutable" },
      "dest": "/static/$1"
    },
    { "src": "/(.*)", "dest": "/index.html" }
  ],
  "env": {
    "REACT_APP_API_URL": "@api-url"
  }
}
```

### **Deploy Commands**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy desde la raíz
vercel --cwd frontend

# Producción
vercel --prod --cwd frontend
```

---

## 🔧 Variables de Entorno

### **Desarrollo (.env.local)**
```env
# frontend/.env.local
REACT_APP_API_URL=http://localhost:8000
REACT_APP_ENVIRONMENT=development
REACT_APP_DEBUG=true
```

### **Producción (.env.production)**
```env
# frontend/.env.production
REACT_APP_API_URL=https://api.alkosto-clone.com
REACT_APP_ENVIRONMENT=production
REACT_APP_DEBUG=false
REACT_APP_ANALYTICS_ID=GA-XXXXXXXXX
```

### **Staging (.env.staging)**
```env
# frontend/.env.staging
REACT_APP_API_URL=https://api-staging.alkosto-clone.com
REACT_APP_ENVIRONMENT=staging
REACT_APP_DEBUG=true
```

---

## 📊 Monitoreo y Performance

### **Web Vitals**
```jsx
// frontend/src/reportWebVitals.js (ya incluido)
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Enviar métricas a analytics
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### **Bundle Analysis**
```bash
# Analizar bundle size
cd frontend
npm install --save-dev webpack-bundle-analyzer

# Agregar script en package.json
"analyze": "npm run build && npx webpack-bundle-analyzer build/static/js/*.js"

# Ejecutar análisis
npm run analyze
```

---

## 🔒 Seguridad y Optimización

### **Security Headers**
```nginx
# nginx.conf
server {
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
```

### **Performance Optimizations**
```jsx
// Lazy loading de componentes
const Footer = React.lazy(() => import('./views/Footer'));
const Categories = React.lazy(() => import('./views/Categories'));

// En App.js
<Suspense fallback={<div>Cargando...</div>}>
  <Footer />
</Suspense>
```

---

## 🚦 CI/CD Pipeline

### **GitHub Actions**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install Frontend Dependencies
      run: |
        cd frontend
        npm ci
        
    - name: Run Tests
      run: |
        cd frontend
        npm test -- --coverage --watchAll=false
        
    - name: Build Frontend
      run: |
        cd frontend
        npm run build
        
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v1.2
      with:
        publish-dir: './frontend/build'
        production-branch: main
        github-token: ${{ secrets.GITHUB_TOKEN }}
        deploy-message: "Deploy from GitHub Actions"
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## 📋 Checklist de Deployment

### **Pre-Deploy**
- [ ] Tests unitarios pasan
- [ ] Build genera sin errores
- [ ] Variables de entorno configuradas
- [ ] Imágenes optimizadas
- [ ] Bundle size verificado
- [ ] Performance auditado con Lighthouse

### **Deploy**
- [ ] Branch main actualizado
- [ ] Pipeline de CI/CD ejecutado exitosamente
- [ ] Deploy verificado en staging
- [ ] URLs de producción funcionando

### **Post-Deploy**
- [ ] Sitio accesible desde múltiples dispositivos
- [ ] Funcionalidades críticas verificadas
- [ ] Métricas de performance normales
- [ ] Logs sin errores críticos
- [ ] Rollback plan disponible

---

## 🔄 Rollback Strategy

### **Rollback Inmediato**
```bash
# Netlify
netlify deploy --prod --dir=frontend/build-previous

# Vercel
vercel --prod --cwd frontend --confirm

# Docker
docker-compose down
docker-compose up -d --scale frontend=0
docker-compose up -d --scale frontend-backup=1
```

### **Git Rollback**
```bash
# Revertir último commit
git revert HEAD

# Rollback a commit específico
git reset --hard <commit-hash>
git push --force-with-lease origin main
```

---

**Última actualización:** Enero 2024  
**Estrategia:** Multi-platform deployment  
**Tiempo de deploy:** ~3-5 minutos  
**Uptime objetivo:** 99.9%
