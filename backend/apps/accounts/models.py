<<<<<<< HEAD
from django.db import models

# Create your models here.
=======
"""
Modelos para la gestión de cuentas de usuario.
Posiblemente extiende el modelo User de Django para añadir campos adicionales
como dirección, teléfono, etc.
"""

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

class User(AbstractUser):
    """
    Modelo personalizado de usuario que extiende el modelo base de Django.
    Permite añadir campos adicionales específicos para la tienda.
    """
    # Campos adicionales para el perfil de usuario
    phone_number = models.CharField(_("Número de teléfono"), max_length=15, blank=True)
    address = models.TextField(_("Dirección"), blank=True)
    city = models.CharField(_("Ciudad"), max_length=100, blank=True)
    postal_code = models.CharField(_("Código postal"), max_length=10, blank=True)
    
    # Fecha en que se modificó por última vez el perfil
    profile_updated = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = _("Usuario")
        verbose_name_plural = _("Usuarios")
    
    def __str__(self):
        # Representación legible del usuario (para admin, logs, etc.)
        return self.get_full_name() or self.username
>>>>>>> 40eab90 (Actualización del backend Django con modelos para usuarios, productos, carrito, pedidos y analíticas)
