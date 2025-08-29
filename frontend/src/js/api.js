const API_URL = "http://127.0.0.1:5000"; // URL del backend Flask

// Obtener productos desde backend
async function getProductos() {
  try {
    const response = await fetch(`${API_URL}/productos`);
    return await response.json();
  } catch (error) {
    console.error("Error cargando productos:", error);
    return [];
  }
}
