"""
<<<<<<< HEAD
WSGI config for config project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
=======
Configuración WSGI para desplegar la aplicación en servidores web.
WSGI (Web Server Gateway Interface) es el estándar Python para comunicación
entre servidores web y aplicaciones.
>>>>>>> 40eab90 (Actualización del backend Django con modelos para usuarios, productos, carrito, pedidos y analíticas)
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

application = get_wsgi_application()
