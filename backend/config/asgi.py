"""
<<<<<<< HEAD
ASGI config for config project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/asgi/
=======
Configuración ASGI para desplegar la aplicación en servidores web asíncronos.
ASGI (Asynchronous Server Gateway Interface) permite manejar WebSockets y
otras conexiones asíncronas.
>>>>>>> 40eab90 (Actualización del backend Django con modelos para usuarios, productos, carrito, pedidos y analíticas)
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

application = get_asgi_application()
