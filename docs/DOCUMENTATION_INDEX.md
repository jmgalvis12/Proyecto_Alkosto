# 📖 Índice de Documentación - Proyecto Alkosto React

Bienvenido a la documentación del Proyecto Alkosto React reorganizado en estructura **Monorepo**.

## 🏗️ Nueva Estructura del Proyecto

```
proyecto_ig/                    # Raíz del monorepo
├── 📁 frontend/               # Aplicación React
│   ├── src/                   # Código fuente React
│   ├── public/                # Archivos públicos
│   ├── package.json           # Dependencias frontend
│   └── node_modules/          # Dependencias instaladas
├── 📁 backend/                # API Backend (futuro)
│   └── requirements.txt       # Dependencias Python
├── 📁 docs/                   # Documentación completa
│   ├── DOCUMENTATION_INDEX.md # Este archivo
│   └── [otros archivos .md]   # Documentación técnica
├── README.md                  # Documentación principal
└── .gitignore                # Configuración Git
```

## 🚀 Comandos para Desarrollo

### Frontend (React)
```bash
# Navegar al frontend
cd frontend

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start

# Build para producción
npm run build

# Ejecutar tests
npm test
```

### Proyecto Completo
```bash
# Desde la raíz del proyecto
cd c:\Users\micha\Desktop\alkosto_react\proyecto_ig

# Instalar frontend
cd frontend && npm install && cd ..

# Ejecutar frontend
cd frontend && npm start
```

## 📚 Beneficios de la Nueva Estructura

### ✅ **Ventajas del Monorepo:**
- **Separación Clara:** Frontend y backend completamente independientes
- **Escalabilidad:** Fácil adición de nuevos proyectos (mobile app, admin panel, etc.)
- **Deploy Independiente:** Frontend y backend se pueden desplegar por separado
- **Teams Separados:** Diferentes equipos pueden trabajar independientemente
- **Configuraciones Independientes:** Cada proyecto tiene su package.json y dependencias

### 🔧 **Organización Mejorada:**
- **Documentación Centralizada:** Toda en `/docs/`
- **Configuraciones Específicas:** Cada proyecto con su configuración
- **Git Workflow:** Mejor organización de commits por proyecto
- **CI/CD:** Pipelines independientes para cada aplicación

## 🎯 Próximos Pasos

1. **Verificar Funcionamiento:** Probar que el frontend funciona correctamente
2. **Actualizar Scripts:** Crear scripts de automatización en la raíz
3. **Configurar Backend:** Preparar estructura del backend
4. **Documentar APIs:** Crear documentación de integración
5. **CI/CD Setup:** Configurar pipelines de deployment

---

**Reorganización completada:** 9 de septiembre de 2025  
**Nueva estructura:** Monorepo frontend/backend  
**Mantenido por:** Equipo Desarrollo Alkosto React
