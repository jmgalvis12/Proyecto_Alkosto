"""
<<<<<<< HEAD
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView
from django.conf import settings

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),  # React entrypoint
    path('admin/', admin.site.urls),
    path('api/', include('apps.accounts.urls')),  # Ejemplo de tus APIs
    # path('api/products/', include('apps.products.urls')), etc.
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [path('__debug__/', include(debug_toolbar.urls))] + urlpatterns
=======
Configuración de URLs principal del proyecto.
Incluye:
- URLs del panel de administración de Django
- Inclusiones de URLs de las diferentes aplicaciones
- Configuración para servir archivos estáticos y media en desarrollo
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.shortcuts import render

urlpatterns = [
    # Panel de administración de Django
    path('admin/', admin.site.urls),
    
    # URLs de aplicaciones
    path('accounts/', include('apps.accounts.urls')),  # Auth y gestión de usuarios
    path('products/', include('apps.products.urls')),  # Catálogo de productos
    
    # Comentar temporalmente las que aún no están listas
    # path('cart/', include('apps.cart.urls')),
    # path('orders/', include('apps.orders.urls')),
]

# Configuración para servir archivos estáticos y media en desarrollo
if settings.DEBUG:
    # Sirve archivos estáticos en desarrollo
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    # Sirve archivos multimedia en desarrollo
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
>>>>>>> 40eab90 (Actualización del backend Django con modelos para usuarios, productos, carrito, pedidos y analíticas)
