<<<<<<< HEAD
from django.db import models

# Create your models here.
=======
"""
Modelos para la gestión de pedidos.
Define clases como:
- Order: Información general del pedido (usuario, fecha, estado)
- OrderItem: Productos incluidos en el pedido
- ShippingAddress: Dirección de envío
- Payment: Información de pago
"""

from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from apps.products.models import Product

User = get_user_model()

class Order(models.Model):
    """
    Modelo principal para órdenes de compra.
    Almacena información general del pedido.
    """
    # Estados posibles de un pedido
    STATUS_CHOICES = (
        ('pending', _('Pendiente')),
        ('processing', _('Procesando')),
        ('shipped', _('Enviado')),
        ('delivered', _('Entregado')),
        ('cancelled', _('Cancelado')),
        ('refunded', _('Reembolsado')),
    )
    
    # Métodos de pago
    PAYMENT_METHOD_CHOICES = (
        ('credit_card', _('Tarjeta de crédito')),
        ('debit_card', _('Tarjeta de débito')),
        ('bank_transfer', _('Transferencia bancaria')),
        ('cash_on_delivery', _('Contra entrega')),
    )
    
    # Usuario que realizó el pedido (null si es un pedido de invitado)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, 
                           related_name='orders', verbose_name=_("Usuario"))
    
    # Información del cliente para el pedido
    first_name = models.CharField(_("Nombre"), max_length=100)
    last_name = models.CharField(_("Apellido"), max_length=100)
    email = models.EmailField(_("Email"))
    phone = models.CharField(_("Teléfono"), max_length=20)
    
    # Información de envío
    address = models.CharField(_("Dirección"), max_length=250)
    city = models.CharField(_("Ciudad"), max_length=100)
    postal_code = models.CharField(_("Código postal"), max_length=20)
    
    # Información de estado y pago
    status = models.CharField(_("Estado"), max_length=20, choices=STATUS_CHOICES, default='pending')
    payment_method = models.CharField(_("Método de pago"), max_length=20, 
                                    choices=PAYMENT_METHOD_CHOICES)
    payment_completed = models.BooleanField(_("Pago completado"), default=False)
    
    # Información de precios
    subtotal = models.DecimalField(_("Subtotal"), max_digits=10, decimal_places=2)
    shipping_cost = models.DecimalField(_("Costo de envío"), max_digits=10, decimal_places=2)
    tax = models.DecimalField(_("Impuestos"), max_digits=10, decimal_places=2)
    total = models.DecimalField(_("Total"), max_digits=10, decimal_places=2)
    
    # Información adicional
    notes = models.TextField(_("Notas"), blank=True)
    tracking_number = models.CharField(_("Número de seguimiento"), max_length=100, blank=True)
    
    # Fechas de control
    created_at = models.DateTimeField(_("Fecha de creación"), auto_now_add=True)
    updated_at = models.DateTimeField(_("Última actualización"), auto_now=True)
    paid_at = models.DateTimeField(_("Fecha de pago"), null=True, blank=True)
    shipped_at = models.DateTimeField(_("Fecha de envío"), null=True, blank=True)
    
    class Meta:
        verbose_name = _("Pedido")
        verbose_name_plural = _("Pedidos")
        ordering = ['-created_at']
    
    def __str__(self):
        return f"Pedido #{self.id} - {self.get_status_display()}"
    
    @property
    def is_paid(self):
        """Verifica si el pedido está pagado"""
        return self.payment_completed and self.paid_at is not None
    
    @property
    def can_cancel(self):
        """Determina si el pedido puede ser cancelado"""
        cancellable_states = ['pending', 'processing']
        return self.status in cancellable_states


class OrderItem(models.Model):
    """
    Elemento individual en un pedido.
    Almacena los detalles de cada producto incluido en la orden.
    """
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items', 
                            verbose_name=_("Pedido"))
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, 
                              related_name='order_items', verbose_name=_("Producto"))
    
    # Guardamos información del producto por si cambia en el futuro
    product_name = models.CharField(_("Nombre del producto"), max_length=200)
    product_sku = models.CharField(_("SKU del producto"), max_length=50)
    unit_price = models.DecimalField(_("Precio unitario"), max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField(_("Cantidad"))
    subtotal = models.DecimalField(_("Subtotal"), max_digits=10, decimal_places=2)
    
    class Meta:
        verbose_name = _("Elemento del pedido")
        verbose_name_plural = _("Elementos del pedido")
    
    def __str__(self):
        return f"{self.product_name} ({self.quantity}) en Pedido #{self.order.id}"
>>>>>>> 40eab90 (Actualización del backend Django con modelos para usuarios, productos, carrito, pedidos y analíticas)
