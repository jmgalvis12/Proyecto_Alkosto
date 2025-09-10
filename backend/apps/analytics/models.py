<<<<<<< HEAD
from django.db import models

# Create your models here.
=======
"""
Modelos para analíticas de la tienda.
Define clases para almacenar métricas como:
- PageView: Vistas de página
- ProductView: Vistas de productos específicos
- SearchQuery: Búsquedas realizadas por usuarios
"""

from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from apps.products.models import Product

User = get_user_model()

class PageView(models.Model):
    """
    Registro de vistas de páginas para análisis de tráfico.
    """
    # URL de la página visitada
    url = models.CharField(_("URL"), max_length=255)
    # Referencia (de dónde vino el usuario)
    referer = models.CharField(_("Referencia"), max_length=255, blank=True, null=True)
    # Usuario que visitó (si está autenticado)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, 
                           related_name='page_views', verbose_name=_("Usuario"))
    # IP del visitante (para usuarios anónimos)
    ip_address = models.GenericIPAddressField(_("Dirección IP"), blank=True, null=True)
    # Agente de usuario (navegador, dispositivo)
    user_agent = models.TextField(_("Agente de usuario"), blank=True)
    # Fecha y hora de la visita
    timestamp = models.DateTimeField(_("Fecha y hora"), auto_now_add=True)
    
    class Meta:
        verbose_name = _("Vista de página")
        verbose_name_plural = _("Vistas de página")
        ordering = ['-timestamp']
    
    def __str__(self):
        return f"{self.url} - {self.timestamp}"


class ProductView(models.Model):
    """
    Registro específico de vistas de productos para análisis de popularidad.
    """
    # Producto visitado
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='views', 
                              verbose_name=_("Producto"))
    # Usuario que visitó (si está autenticado)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, 
                           related_name='product_views', verbose_name=_("Usuario"))
    # IP del visitante (para usuarios anónimos)
    ip_address = models.GenericIPAddressField(_("Dirección IP"), blank=True, null=True)
    # Sesión del usuario
    session_id = models.CharField(_("ID de sesión"), max_length=255, blank=True, null=True)
    # Fecha y hora de la visita
    timestamp = models.DateTimeField(_("Fecha y hora"), auto_now_add=True)
    
    class Meta:
        verbose_name = _("Vista de producto")
        verbose_name_plural = _("Vistas de producto")
        ordering = ['-timestamp']
    
    def __str__(self):
        return f"{self.product.name} - {self.timestamp}"


class SearchQuery(models.Model):
    """
    Registro de búsquedas realizadas en la tienda.
    Útil para analizar términos populares y mejorar el SEO.
    """
    # Término de búsqueda
    query = models.CharField(_("Búsqueda"), max_length=255)
    # Número de resultados encontrados
    results_count = models.PositiveIntegerField(_("Cantidad de resultados"))
    # Usuario que realizó la búsqueda (si está autenticado)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, 
                           related_name='search_queries', verbose_name=_("Usuario"))
    # IP del usuario (para usuarios anónimos)
    ip_address = models.GenericIPAddressField(_("Dirección IP"), blank=True, null=True)
    # Fecha y hora de la búsqueda
    timestamp = models.DateTimeField(_("Fecha y hora"), auto_now_add=True)
    
    class Meta:
        verbose_name = _("Consulta de búsqueda")
        verbose_name_plural = _("Consultas de búsqueda")
        ordering = ['-timestamp']
    
    def __str__(self):
        return f"{self.query} ({self.results_count} resultados) - {self.timestamp}"
>>>>>>> 40eab90 (Actualización del backend Django con modelos para usuarios, productos, carrito, pedidos y analíticas)
