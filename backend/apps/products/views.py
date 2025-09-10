<<<<<<< HEAD
from django.shortcuts import render

# Create your views here.
=======
"""
Vistas para la gestión de productos.
Incluye funciones/clases para:
- Listar productos
- Detalles de producto
- Filtrar productos por categoría, precio, etc.
- Búsqueda de productos
"""

from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView
from django.db.models import Q

from .models import Product, Category

class ProductListView(ListView):
    """
    Vista para listar productos con paginación y filtros.
    """
    model = Product
    template_name = 'products/product_list.html'
    context_object_name = 'products'
    paginate_by = 12  # Número de productos por página
    
    def get_queryset(self):
        # Obtiene solo productos activos
        queryset = Product.objects.filter(is_active=True)
        
        # Filtro por categoría
        category_slug = self.kwargs.get('category_slug')
        if category_slug:
            category = get_object_or_404(Category, slug=category_slug)
            # Incluye productos de subcategorías
            categories = category.get_descendants(include_self=True)
            queryset = queryset.filter(categories__in=categories)
        
        # Búsqueda por término
        search = self.request.GET.get('search')
        if search:
            queryset = queryset.filter(
                Q(name__icontains=search) | 
                Q(description__icontains=search) |
                Q(sku__icontains=search)
            )
        
        # Filtro por precio
        min_price = self.request.GET.get('min_price')
        max_price = self.request.GET.get('max_price')
        
        if min_price:
            queryset = queryset.filter(price__gte=min_price)
        if max_price:
            queryset = queryset.filter(price__lte=max_price)
        
        # Ordenamiento
        ordering = self.request.GET.get('ordering', '-created_at')
        return queryset.order_by(ordering)
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Agrega categorías al contexto para mostrar en filtros laterales
        context['categories'] = Category.objects.filter(parent=None)
        return context


class ProductDetailView(DetailView):
    """
    Vista detallada de un producto individual.
    """
    model = Product
    template_name = 'products/product_detail.html'
    context_object_name = 'product'
    slug_url_kwarg = 'product_slug'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Productos relacionados (mismas categorías)
        product = self.get_object()
        related_products = Product.objects.filter(
            categories__in=product.categories.all()
        ).exclude(id=product.id).distinct()[:4]
        
        context['related_products'] = related_products
        return context
>>>>>>> 40eab90 (Actualización del backend Django con modelos para usuarios, productos, carrito, pedidos y analíticas)
