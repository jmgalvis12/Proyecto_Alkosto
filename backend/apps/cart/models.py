from django.db import models
<<<<<<< HEAD

# Create your models here.
=======
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from apps.products.models import Product

User = get_user_model()

class Cart(models.Model):
    """
    Carrito de compras. Puede estar asociado a un usuario (si está logueado) 
    o a una sesión (usuario anónimo).
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, 
                             related_name='carts', verbose_name=_("Usuario"))
    session_id = models.CharField(_("ID de sesión"), max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(_("Creado"), auto_now_add=True)
    updated_at = models.DateTimeField(_("Actualizado"), auto_now=True)
    
    class Meta:
        verbose_name = _("Carrito")
        verbose_name_plural = _("Carritos")
    
    def __str__(self):
        if self.user:
            return f"Carrito de {self.user.username}"
        return f"Carrito anónimo ({self.session_id})"
    
    @property
    def total_items(self):
        """Número total de productos en el carrito"""
        return sum(item.quantity for item in self.items.all())
    
    @property
    def subtotal(self):
        """Subtotal del carrito (sin impuestos ni envío)"""
        return sum(item.subtotal for item in self.items.all())
    
    @property
    def total(self):
        """Total del carrito (con impuestos y envío si aplica)"""
        # Aquí se podrían implementar cálculos de impuestos y envío
        return self.subtotal


class CartItem(models.Model):
    """
    Elemento individual en el carrito. Representa un producto con su cantidad.
    """
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items', 
                             verbose_name=_("Carrito"))
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name=_("Producto"))
    quantity = models.PositiveIntegerField(_("Cantidad"), default=1)
    added_at = models.DateTimeField(_("Añadido"), auto_now_add=True)
    updated_at = models.DateTimeField(_("Actualizado"), auto_now=True)
    
    class Meta:
        verbose_name = _("Elemento del carrito")
        verbose_name_plural = _("Elementos del carrito")
        # Un producto solo puede aparecer una vez por carrito
        unique_together = ('cart', 'product')
    
    def __str__(self):
        return f"{self.product.name} ({self.quantity}) en {self.cart}"
    
    @property
    def unit_price(self):
        """Precio por unidad, considerando descuentos si existen"""
        if self.product.discount_price:
            return self.product.discount_price
        return self.product.price
    
    @property
    def subtotal(self):
        """Subtotal de este elemento (precio × cantidad)"""
        return self.unit_price * self.quantity
>>>>>>> 40eab90 (Actualización del backend Django con modelos para usuarios, productos, carrito, pedidos y analíticas)
