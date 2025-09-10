<<<<<<< HEAD
from django.shortcuts import render

# Create your views here.
=======
"""
Vistas para la gestión de cuentas de usuario.
Incluye funciones/clases para:
- Registro de usuarios
- Inicio de sesión
- Cierre de sesión
- Recuperación de contraseña
- Gestión del perfil de usuario
"""

from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.views.generic import CreateView, UpdateView
from django.urls import reverse_lazy

from .models import User
from .forms import RegisterForm, ProfileForm

class RegisterView(CreateView):
    """
    Vista para el registro de nuevos usuarios.
    Crea una cuenta y redirecciona al login.
    """
    model = User
    form_class = RegisterForm
    template_name = 'accounts/register.html'
    success_url = reverse_lazy('login')
    
    def form_valid(self, form):
        # Guardar el usuario y autenticarlo automáticamente
        response = super().form_valid(form)
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password1')
        user = authenticate(username=username, password=password)
        login(self.request, user)
        return response

@login_required
def profile_view(request):
    """
    Vista para ver y actualizar el perfil del usuario.
    Requiere autenticación previa.
    """
    if request.method == 'POST':
        form = ProfileForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            return redirect('profile')
    else:
        form = ProfileForm(instance=request.user)
    
    return render(request, 'accounts/profile.html', {'form': form})
>>>>>>> 40eab90 (Actualización del backend Django con modelos para usuarios, productos, carrito, pedidos y analíticas)
