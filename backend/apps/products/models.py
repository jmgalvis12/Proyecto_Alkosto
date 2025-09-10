<<<<<<< HEAD
from django.db import models

# Create your models here.
=======
"""
Modelos para la gestión de productos.
Define clases como:
- Category: Categorías de productos
- Product: Información de productos (nombre, descripción, precio, etc.)
- ProductImage: Imágenes asociadas a productos
- ProductVariant: Variantes de productos (tallas, colores, etc.)
"""

from django.db import models
from django.utils.text import slugify
from django.utils.translation import gettext_lazy as _

class Category(models.Model):
    """
    Modelo para categorías de productos.
    Permite una estructura jerárquica (categorías y subcategorías).
    """
    name = models.CharField(_("Nombre"), max_length=100)
    slug = models.SlugField(_("Slug"), unique=True, max_length=100)
    description = models.TextField(_("Descripción"), blank=True)
    # Referencia a sí misma para crear jerarquía de categorías
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, 
                               related_name='children', verbose_name=_("Categoría padre"))
    # Controla el orden de visualización en la interfaz
    order = models.PositiveIntegerField(_("Orden"), default=0)
    # Fecha de creación y actualización para control
    created_at = models.DateTimeField(_("Creado"), auto_now_add=True)
    updated_at = models.DateTimeField(_("Actualizado"), auto_now=True)
    
    class Meta:
        verbose_name = _("Categoría")
        verbose_name_plural = _("Categorías")
        ordering = ['order', 'name']  # Ordenar por campo 'order' y luego por nombre
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        # Genera automáticamente el slug a partir del nombre si no existe
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class Product(models.Model):
    """
    Modelo principal para productos de la tienda.
    """
    # Información básica del producto
    name = models.CharField(_("Nombre"), max_length=200)
    slug = models.SlugField(_("Slug"), unique=True, max_length=200)
    description = models.TextField(_("Descripción"))
    # Vinculación a categorías (un producto puede estar en múltiples categorías)
    categories = models.ManyToManyField(Category, related_name='products', verbose_name=_("Categorías"))
    
    # Información de precio e inventario
    price = models.DecimalField(_("Precio"), max_digits=10, decimal_places=2)
    discount_price = models.DecimalField(_("Precio con descuento"), max_digits=10, decimal_places=2, 
                                         null=True, blank=True)
    stock = models.PositiveIntegerField(_("Stock"), default=0)
    
    # Identificadores del producto
    sku = models.CharField(_("SKU"), max_length=50, unique=True)
    
    # Imágenes del producto (imagen principal)
    main_image = models.ImageField(_("Imagen principal"), upload_to='products/%Y/%m/')
    
    # Estado del producto
    is_active = models.BooleanField(_("Activo"), default=True)
    is_featured = models.BooleanField(_("Destacado"), default=False)
    
    # Fechas de control
    created_at = models.DateTimeField(_("Creado"), auto_now_add=True)
    updated_at = models.DateTimeField(_("Actualizado"), auto_now=True)
    
    class Meta:
        verbose_name = _("Producto")
        verbose_name_plural = _("Productos")
        ordering = ['-created_at']  # Ordenar por fecha de creación (más recientes primero)
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        # Genera automáticamente el slug a partir del nombre si no existe
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
    @property
    def is_on_sale(self):
        """Determina si el producto está en oferta"""
        return self.discount_price is not None and self.discount_price < self.price


class ProductImage(models.Model):
    """
    Imágenes adicionales para productos.
    Permite tener galerías de imágenes para cada producto.
    """
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(_("Imagen"), upload_to='products/%Y/%m/')
    alt_text = models.CharField(_("Texto alternativo"), max_length=200, blank=True)
    order = models.PositiveIntegerField(_("Orden"), default=0)
    
    class Meta:
        ordering = ['order']
>>>>>>> 40eab90 (Actualización del backend Django con modelos para usuarios, productos, carrito, pedidos y analíticas)
