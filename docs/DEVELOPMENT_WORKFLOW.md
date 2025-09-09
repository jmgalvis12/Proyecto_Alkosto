# 🔄 Flujo de Desarrollo - Proyecto Alkosto React

## 📋 Información General

Esta guía establece el flujo de trabajo para el desarrollo del proyecto Alkosto React en su arquitectura monorepo.

## 🏗️ Estructura de Desarrollo

### **Arquitectura del Proyecto**
```
proyecto_ig/                    # Monorepo raíz
├── 📁 frontend/               # React Application
├── 📁 backend/                # Python/Django API
├── 📁 docs/                   # Documentación técnica
├── 📁 .github/                # GitHub Actions
├── 🔧 .gitignore              # Git configuración
├── 📄 README.md               # Documentación principal
└── 📦 package.json            # Scripts monorepo
```

---

## 🚀 Configuración Inicial

### **1. Clonar y Configurar**
```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/proyecto_ig.git
cd proyecto_ig

# Configurar Git (si no está configurado)
git config user.name "Tu Nombre"
git config user.email "tu.email@ejemplo.com"

# Instalar dependencias del frontend
cd frontend
npm install
cd ..

# Verificar estructura
tree -L 2
```

### **2. Variables de Entorno**
```bash
# Frontend
cp frontend/.env.example frontend/.env.local

# Configurar variables
# REACT_APP_API_URL=http://localhost:8000
# REACT_APP_ENVIRONMENT=development
```

### **3. Verificar Instalación**
```bash
# Probar frontend
cd frontend
npm start

# Verificar en http://localhost:3000
```

---

## 🌿 Git Flow y Branching

### **Estructura de Branches**
```
main                    # ✅ Producción estable
├── develop            # 🔄 Integración de features
├── feature/header-redesign    # 🚧 Nueva funcionalidad
├── bugfix/cart-counter-issue  # 🐛 Corrección de bugs
├── hotfix/critical-security   # 🚨 Fixes críticos
└── release/v2.1.0            # 🚀 Preparación de release
```

### **Convenciones de Naming**
```bash
# Features
feature/nombre-descriptivo
feature/user-authentication
feature/product-search

# Bugfixes
bugfix/descripcion-del-bug
bugfix/cart-counter-display
bugfix/responsive-layout

# Hotfixes
hotfix/descripcion-critica
hotfix/security-vulnerability
hotfix/payment-gateway-error

# Releases
release/v1.2.0
release/v2.0.0-beta
```

---

## 🔧 Workflow de Desarrollo

### **1. Iniciar Nueva Feature**
```bash
# Desde main, crear branch de feature
git checkout main
git pull origin main
git checkout -b feature/nueva-funcionalidad

# Trabajar en la feature
git add .
git commit -m "feat: añadir nueva funcionalidad"

# Push de la feature
git push -u origin feature/nueva-funcionalidad
```

### **2. Durante el Desarrollo**
```bash
# Commits frecuentes con mensajes descriptivos
git add .
git commit -m "feat(header): agregar componente SearchBox"

# Mantener branch actualizado
git checkout main
git pull origin main
git checkout feature/nueva-funcionalidad
git merge main

# Resolver conflictos si los hay
git add .
git commit -m "resolve: merge conflicts with main"
```

### **3. Finalizar Feature**
```bash
# Antes de merge, verificar tests
cd frontend
npm test -- --coverage --watchAll=false
npm run build

# Crear Pull Request en GitHub
# Después de aprobación, merge a main
git checkout main
git pull origin main
git branch -d feature/nueva-funcionalidad
```

---

## 📝 Convenciones de Commits

### **Formato de Commit Messages**
```
<tipo>(<scope>): <descripción>

[cuerpo opcional]

[footer opcional]
```

### **Tipos de Commits**
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan código)
- `refactor`: Refactorización de código
- `test`: Añadir o modificar tests
- `chore`: Tareas de mantenimiento

### **Ejemplos**
```bash
# Features
git commit -m "feat(header): agregar componente modular SearchBox"
git commit -m "feat(cart): implementar contador dinámico de items"

# Fixes
git commit -m "fix(footer): corregir color de fondo a negro"
git commit -m "fix(responsive): resolver overflow en móviles"

# Docs
git commit -m "docs: actualizar guía de componentes"
git commit -m "docs(api): añadir documentación de endpoints"

# Refactor
git commit -m "refactor(header): dividir Header en componentes modulares"
git commit -m "refactor(css): reorganizar estilos por componente"
```

---

## 🧪 Testing y Quality Assurance

### **Testing Workflow**
```bash
# Ejecutar todos los tests
cd frontend
npm test -- --coverage --watchAll=false

# Tests específicos
npm test -- --testNamePattern="Header"

# Tests con coverage completo
npm test -- --coverage --coverageReporters=text-lcov

# Verificar build
npm run build
```

### **Code Quality**
```bash
# ESLint (linting)
npm run lint
npm run lint:fix

# Prettier (formatting)
npm run format
npm run format:check

# Audit de dependencias
npm audit
npm audit fix
```

### **Manual Testing Checklist**
- [ ] Componentes renderizas correctamente
- [ ] Responsive design funciona en móvil/tablet/desktop
- [ ] Navegación funciona sin errores
- [ ] Estado del carrito se mantiene
- [ ] Performance es aceptable (< 3s carga inicial)

---

## 🔍 Code Review Process

### **Antes de Crear PR**
- [ ] Tests pasan ✅
- [ ] Build genera sin errores ✅
- [ ] Código documentado apropiadamente ✅
- [ ] No hay console.logs en producción ✅
- [ ] Variables de entorno configuradas ✅

### **Template de Pull Request**
```markdown
## 📋 Descripción
Breve descripción de los cambios realizados.

## 🎯 Tipo de Cambio
- [ ] Nueva funcionalidad (feat)
- [ ] Corrección de bug (fix)
- [ ] Documentación (docs)
- [ ] Refactorización (refactor)

## 🧪 Testing
- [ ] Tests unitarios agregados/actualizados
- [ ] Tests pasan localmente
- [ ] Testing manual completado

## 📸 Screenshots (si aplica)
[Agregar screenshots de cambios visuales]

## 📋 Checklist
- [ ] Código sigue las convenciones del proyecto
- [ ] Self-review completado
- [ ] Documentación actualizada si es necesario
- [ ] No hay conflictos de merge
```

### **Review Guidelines**
- **Funcionalidad:** ¿Hace lo que debe hacer?
- **Performance:** ¿Es eficiente?
- **Mantenibilidad:** ¿Es fácil de entender y modificar?
- **Seguridad:** ¿No introduce vulnerabilidades?
- **Tests:** ¿Tiene cobertura de tests adecuada?

---

## 🚀 Deployment Process

### **Development → Staging**
```bash
# Auto-deploy en push a develop
git checkout develop
git merge feature/nueva-funcionalidad
git push origin develop

# Verifica en staging environment
# https://staging.alkosto-clone.com
```

### **Staging → Production**
```bash
# Release branch
git checkout -b release/v1.2.0
git merge develop

# Testing final en release branch
cd frontend
npm run test:e2e
npm run lighthouse:ci

# Merge a main para producción
git checkout main
git merge release/v1.2.0
git tag v1.2.0
git push origin main --tags
```

---

## 📊 Monitoreo y Métricas

### **Development Metrics**
```bash
# Bundle size analysis
cd frontend
npm run analyze

# Performance audit
npm run lighthouse

# Dependency audit
npm audit
```

### **Code Quality Metrics**
- **Test Coverage:** > 80%
- **ESLint Warnings:** 0
- **Bundle Size:** < 2MB
- **Lighthouse Score:** > 90

### **Team Productivity**
- **Lead Time:** Tiempo desde commit hasta producción
- **Deployment Frequency:** Frecuencia de deployments
- **Mean Time to Recovery:** Tiempo de recuperación de incidentes
- **Change Failure Rate:** Porcentaje de deployments que causan issues

---

## 🛠️ Herramientas de Desarrollo

### **VS Code Extensions Recomendadas**
```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-json",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### **Configuración VS Code**
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

---

## 🤝 Colaboración en Equipo

### **Comunicación**
- **Daily Standups:** Progreso diario y blockers
- **Sprint Planning:** Planificación de funcionalidades
- **Retrospectives:** Mejoras del proceso
- **Code Reviews:** Conocimiento compartido

### **Documentación**
- **README.md:** Información básica del proyecto
- **CONTRIBUTING.md:** Guía para contribuidores
- **docs/:** Documentación técnica detallada
- **Inline Comments:** Código autodocumentado

### **Knowledge Sharing**
- **Tech Talks:** Presentaciones sobre nuevas tecnologías
- **Code Sessions:** Sesiones de programación en equipo
- **Documentation Reviews:** Revisión de documentación
- **Best Practices:** Compartir mejores prácticas

---

## 📋 Troubleshooting

### **Problemas Comunes**

#### **Build Failures**
```bash
# Limpiar cache
cd frontend
rm -rf node_modules package-lock.json
npm install

# Verificar versión de Node
node --version  # Debe ser v18+
```

#### **Git Conflicts**
```bash
# Resolver conflictos
git status
git add .
git commit -m "resolve: merge conflicts"

# Si necesitas abortar merge
git merge --abort
```

#### **Tests Failing**
```bash
# Ejecutar tests en modo verbose
npm test -- --verbose

# Actualizar snapshots
npm test -- --updateSnapshot
```

---

**Última actualización:** Enero 2024  
**Proceso establecido:** Git Flow + Monorepo  
**Team size:** 1-5 desarrolladores  
**Metodología:** Agile/Scrum
