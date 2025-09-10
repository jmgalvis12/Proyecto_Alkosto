<<<<<<< HEAD
=======
"""
Script de administración de Django.
Permite ejecutar comandos como:
- runserver: Iniciar el servidor de desarrollo
- makemigrations: Crear migraciones de la base de datos
- migrate: Aplicar migraciones a la base de datos
- createsuperuser: Crear un usuario administrador
- test: Ejecutar pruebas unitarias
"""
>>>>>>> 40eab90 (Actualización del backend Django con modelos para usuarios, productos, carrito, pedidos y analíticas)
#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys

<<<<<<< HEAD

def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
    try:
=======
def main():
    """Run administrative tasks."""
    # Establece el módulo de configuración por defecto para el proyecto
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
    try:
        # Importa la función de Django para ejecutar comandos de administración
>>>>>>> 40eab90 (Actualización del backend Django con modelos para usuarios, productos, carrito, pedidos y analíticas)
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
<<<<<<< HEAD
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
=======
    # Ejecuta el comando proporcionado por línea de comandos (runserver, migrate, etc.)
    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()
>>>>>>> 40eab90 (Actualización del backend Django con modelos para usuarios, productos, carrito, pedidos y analíticas)
