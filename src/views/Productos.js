// src/views/Productos.js
function Productos() {
  // Hardcode for now; can fetch from model
  const products = [
    { img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2025/agosto-alkosto/home/k-n529l2-gris.webp", name: "Nevecón KALLEY Side by Side 529 Litros", price: "$2.859.900", discount: "-54%" },
    { img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2025/agosto-alkosto/home/k-ld12ge-gris.webp", name: "Lavadora KALLEY Carga Superior 12 Kilos", price: "$1.199.900", discount: "-40%" },
    // Add more
  ];

  return (
    <section class="productos">
      <h2>Productos Destacados</h2>
      <div class="product-grid" id="product-list">
        {products.map((prod, index) => (
          <div key={index} class="product-card">
            <img src={prod.img} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p class="price">{prod.price}</p>
            <p class="discount">{prod.discount}</p>
            <button class="btn">Añadir al carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productos;