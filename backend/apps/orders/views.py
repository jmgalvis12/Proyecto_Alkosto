<<<<<<< HEAD
from django.shortcuts import render

# Create your views here.
=======
"""
Vistas para la gestión de pedidos.
Incluye funciones/clases para:
- Crear pedidos
- Ver historial de pedidos
- Detalles de un pedido
- Actualizar estado de pedidos
- Procesar pagos
"""

from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.utils import timezone
from django.conf import settings
from django.urls import reverse

from .models import Order, OrderItem
from .forms import OrderForm, ShippingForm
from apps.cart.models import Cart
from apps.cart.views import get_cart

@login_required
def checkout_view(request):
    """
    Vista del proceso de pago. Muestra formulario para completar el pedido.
    """
    cart = get_cart(request)
    
    # Verificar si hay productos en el carrito
    if not cart.items.exists():
        messages.error(request, "No hay productos en tu carrito para realizar un pedido")
        return redirect('cart:cart')
    
    # Verificar stock de productos
    for item in cart.items.all():
        if item.quantity > item.product.stock:
            messages.error(
                request, 
                f"No hay suficiente stock de {item.product.name}. Stock disponible: {item.product.stock}"
            )
            return redirect('cart:cart')
    
    # Inicializar formularios con datos del usuario
    initial_data = {}
    if request.user.is_authenticated:
        user = request.user
        initial_data = {
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email,
            'phone': getattr(user, 'phone_number', ''),
            'address': getattr(user, 'address', ''),
            'city': getattr(user, 'city', ''),
            'postal_code': getattr(user, 'postal_code', ''),
        }
    
    if request.method == 'POST':
        order_form = OrderForm(request.POST)
        shipping_form = ShippingForm(request.POST)
        
        if order_form.is_valid() and shipping_form.is_valid():
            # Crear la orden
            order = order_form.save(commit=False)
            order.user = request.user
            
            # Calcular totales
            order.subtotal = cart.subtotal
            # Aquí se implementarían cálculos de impuestos y envío
            order.shipping_cost = settings.DEFAULT_SHIPPING_COST  # Ejemplo
            order.tax = cart.subtotal * settings.TAX_RATE  # Ejemplo
            order.total = order.subtotal + order.shipping_cost + order.tax
            
            # Guardar dirección de envío y otros datos
            shipping_data = shipping_form.cleaned_data
            order.address = shipping_data['address']
            order.city = shipping_data['city']
            order.postal_code = shipping_data['postal_code']
            
            # Guardar la orden
            order.save()
            
            # Crear los elementos de la orden
            for cart_item in cart.items.all():
                OrderItem.objects.create(
                    order=order,
                    product=cart_item.product,
                    product_name=cart_item.product.name,
                    product_sku=cart_item.product.sku,
                    unit_price=cart_item.unit_price,
                    quantity=cart_item.quantity,
                    subtotal=cart_item.subtotal
                )
                
                # Actualizar stock
                product = cart_item.product
                product.stock -= cart_item.quantity
                product.save()
            
            # Limpiar el carrito
            cart.delete()
            
            # Redirigir a la página de pago
            return redirect(reverse('orders:payment', kwargs={'order_id': order.id}))
    else:
        order_form = OrderForm(initial=initial_data)
        shipping_form = ShippingForm(initial=initial_data)
    
    return render(request, 'orders/checkout.html', {
        'cart': cart,
        'order_form': order_form,
        'shipping_form': shipping_form
    })


@login_required
def order_detail(request, order_id):
    """
    Muestra detalles de un pedido específico.
    """
    order = get_object_or_404(Order, id=order_id, user=request.user)
    return render(request, 'orders/order_detail.html', {'order': order})


@login_required
def order_list(request):
    """
    Muestra el historial de pedidos del usuario.
    """
    orders = Order.objects.filter(user=request.user).order_by('-created_at')
    return render(request, 'orders/order_list.html', {'orders': orders})


@login_required
def cancel_order(request, order_id):
    """
    Permite al usuario cancelar un pedido (si aún es posible).
    """
    order = get_object_or_404(Order, id=order_id, user=request.user)
    
    if not order.can_cancel:
        messages.error(request, "Este pedido ya no puede ser cancelado")
        return redirect('orders:order_detail', order_id=order.id)
    
    if request.method == 'POST':
        # Actualizar estado del pedido
        order.status = 'cancelled'
        order.save()
        
        # Devolver productos al inventario
        for item in order.items.all():
            if item.product:
                item.product.stock += item.quantity
                item.product.save()
        
        messages.success(request, "Pedido cancelado correctamente")
        return redirect('orders:order_list')
    
    return render(request, 'orders/cancel_order.html', {'order': order})
>>>>>>> 40eab90 (Actualización del backend Django con modelos para usuarios, productos, carrito, pedidos y analíticas)
