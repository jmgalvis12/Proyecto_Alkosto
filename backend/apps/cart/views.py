<<<<<<< HEAD
from django.shortcuts import render

# Create your views here.
=======
"""
Vistas para la gestión del carrito de compras.
Incluye funciones/clases para:
- Añadir productos al carrito
- Eliminar productos del carrito
- Actualizar cantidades
- Ver contenido del carrito
"""

from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.contrib import messages

from apps.products.models import Product
from .models import Cart, CartItem

def get_cart(request):
    """
    Obtiene o crea un carrito para el usuario actual o la sesión.
    Esta función es clave para gestionar carritos de usuarios anónimos y registrados.
    """
    if request.user.is_authenticated:
        # Si el usuario está autenticado, buscamos su carrito
        cart, created = Cart.objects.get_or_create(user=request.user, defaults={
            'session_id': None
        })
        
        # Si había un carrito anónimo, transferimos sus productos
        session_id = request.session.session_key
        if session_id:
            try:
                anon_cart = Cart.objects.get(session_id=session_id, user=None)
                # Transferir productos del carrito anónimo al carrito del usuario
                for item in anon_cart.items.all():
                    try:
                        # Intentar añadir al carrito del usuario
                        user_item, created = CartItem.objects.get_or_create(
                            cart=cart,
                            product=item.product,
                            defaults={'quantity': 0}
                        )
                        # Sumar cantidades
                        user_item.quantity += item.quantity
                        user_item.save()
                    except Exception as e:
                        messages.error(request, f"Error al transferir producto: {e}")
                # Eliminar carrito anónimo
                anon_cart.delete()
            except Cart.DoesNotExist:
                pass  # No hay carrito anónimo que transferir
    else:
        # Usuario anónimo - usar sesión
        if not request.session.session_key:
            request.session.create()
        session_id = request.session.session_key
        cart, created = Cart.objects.get_or_create(session_id=session_id, user=None)
    
    return cart

def cart_view(request):
    """
    Vista principal del carrito de compras.
    Muestra productos, cantidades y totales.
    """
    cart = get_cart(request)
    return render(request, 'cart/cart.html', {'cart': cart})

@require_POST
def add_to_cart(request, product_id):
    """
    Añade un producto al carrito o incrementa su cantidad.
    """
    product = get_object_or_404(Product, id=product_id, is_active=True)
    quantity = int(request.POST.get('quantity', 1))
    
    if quantity <= 0:
        messages.error(request, "La cantidad debe ser mayor a 0")
        return redirect('cart:cart')
        
    if product.stock < quantity:
        messages.error(request, "No hay suficiente stock para este producto")
        return redirect('products:product_detail', slug=product.slug)
    
    cart = get_cart(request)
    
    # Obtener o crear el elemento en el carrito
    cart_item, created = CartItem.objects.get_or_create(
        cart=cart,
        product=product,
        defaults={'quantity': 0}
    )
    
    # Verificar si hay suficiente stock
    new_quantity = cart_item.quantity + quantity
    if product.stock < new_quantity:
        messages.error(request, "No hay suficiente stock para la cantidad solicitada")
        return redirect('cart:cart')
    
    # Actualizar cantidad
    cart_item.quantity = new_quantity
    cart_item.save()
    
    messages.success(request, f"{product.name} añadido al carrito")
    
    # Redireccionar o responder con JSON según el tipo de solicitud
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse({
            'success': True,
            'cart_total': cart.total_items
        })
    
    return redirect('cart:cart')
>>>>>>> 40eab90 (Actualización del backend Django con modelos para usuarios, productos, carrito, pedidos y analíticas)
