document.addEventListener("DOMContentLoaded", async () => {
  const productList = document.getElementById("product-list");
  const productos = await getProductos();

  if (productos.length === 0) {
    productList.innerHTML = "<p>No hay productos disponibles</p>";
    return;
  }

  productos.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${prod.imagen || 'assets/logo.png'}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p class="price">$${prod.precio}</p>
      <button class="btn">Agregar al carrito</button>
    `;
    productList.appendChild(card);
  });
});
