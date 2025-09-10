from django.urls import path
from django.shortcuts import render
from . import views

app_name = 'orders'

urlpatterns = [
    # Estas rutas deberían coincidir con las vistas que hayas implementado
    # path('checkout/', views.checkout, name='checkout'),
    # path('history/', views.order_history, name='history'),
    # path('detail/<int:order_id>/', views.order_detail, name='detail'),
    # path('success/<int:order_id>/', views.order_success, name='order_success'),
    
    # Por ahora, podemos incluir una ruta básica para evitar errores
    path('', lambda request: render(request, 'orders/index.html'), name='index'),
]