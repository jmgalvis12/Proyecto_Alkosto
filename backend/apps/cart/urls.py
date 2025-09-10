from django.urls import path
from . import views

app_name = 'cart'

urlpatterns = [
    path('', views.cart_view, name='cart'),
    path('add/<int:product_id>/', views.add_to_cart, name='add'),
    # Añadir estas rutas cuando se implementen las vistas correspondientes
    # path('remove/<int:item_id>/', views.remove_from_cart, name='remove'),
    # path('update/<int:item_id>/', views.update_cart, name='update'),
]