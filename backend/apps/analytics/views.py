<<<<<<< HEAD
from django.shortcuts import render

# Create your views here.
=======
"""
Vistas para generar y mostrar analíticas.
Incluye funciones/clases para:
- Dashboard administrativo
- Reportes de ventas
- Estadísticas de productos populares
- Comportamiento de usuarios
"""

from django.shortcuts import render
from django.contrib.auth.decorators import user_passes_test
from django.db.models import Count, Sum, Avg, F
from django.db.models.functions import TruncDay, TruncMonth
from django.utils import timezone
from datetime import timedelta

from apps.products.models import Product
from apps.orders.models import Order, OrderItem
from .models import PageView, ProductView, SearchQuery

@user_passes_test(lambda u: u.is_staff)  # Solo para personal del staff
def dashboard(request):
    """
    Panel principal de analíticas para administradores.
    Muestra resumen de estadísticas clave.
    """
    # Obtener el período de tiempo para las estadísticas
    period = request.GET.get('period', 'week')
    
    if period == 'day':
        start_date = timezone.now().replace(hour=0, minute=0, second=0)
    elif period == 'week':
        start_date = timezone.now() - timedelta(days=7)
    elif period == 'month':
        start_date = timezone.now() - timedelta(days=30)
    elif period == 'year':
        start_date = timezone.now() - timedelta(days=365)
    else:
        start_date = timezone.now() - timedelta(days=7)  # Por defecto, última semana
    
    # Estadísticas de pedidos
    orders = Order.objects.filter(created_at__gte=start_date)
    total_orders = orders.count()
    total_revenue = orders.aggregate(total=Sum('total'))['total'] or 0
    avg_order_value = orders.aggregate(avg=Avg('total'))['avg'] or 0
    
    # Productos más vendidos
    top_products = OrderItem.objects.filter(
        order__created_at__gte=start_date
    ).values(
        'product_name'
    ).annotate(
        total_sales=Sum('quantity'),
        revenue=Sum(F('quantity') * F('unit_price'))
    ).order_by('-total_sales')[:10]
    
    # Productos más vistos
    top_viewed_products = ProductView.objects.filter(
        timestamp__gte=start_date
    ).values(
        'product__name'
    ).annotate(
        view_count=Count('id')
    ).order_by('-view_count')[:10]
    
    # Búsquedas populares
    popular_searches = SearchQuery.objects.filter(
        timestamp__gte=start_date
    ).values(
        'query'
    ).annotate(
        search_count=Count('id')
    ).order_by('-search_count')[:10]
    
    # Tendencia de ventas por día
    sales_trend = Order.objects.filter(
        created_at__gte=start_date
    ).annotate(
        day=TruncDay('created_at')
    ).values(
        'day'
    ).annotate(
        order_count=Count('id'),
        revenue=Sum('total')
    ).order_by('day')
    
    context = {
        'period': period,
        'total_orders': total_orders,
        'total_revenue': total_revenue,
        'avg_order_value': avg_order_value,
        'top_products': top_products,
        'top_viewed_products': top_viewed_products,
        'popular_searches': popular_searches,
        'sales_trend': sales_trend,
    }
    
    return render(request, 'analytics/dashboard.html', context)
>>>>>>> 40eab90 (Actualización del backend Django con modelos para usuarios, productos, carrito, pedidos y analíticas)
