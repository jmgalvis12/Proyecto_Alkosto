// src/views/Hero.js
function Hero() {
  // For simplicity, hardcode categories; can fetch from controller if needed
  const categories = [
    { name: "Celulares", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-celulares.webp" },
    { name: "Electro", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/home/categs/c-refrigeracion.webp" },
    { name: "Computo e impresión", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Televisores", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Videojuegos", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Zona Gamer", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Domótica", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Pines", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Audio", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Electrohogar", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Smartwatch", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Audifonos", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Accesorios", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-celulares.webp" },
    { name: "Cámaras", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/home/categs/c-refrigeracion.webp" },
    { name: "Juguetes", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Deportes", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Muebles", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Colchones", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Llantas", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Hogar", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Ropa hogar", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Proyectores", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Ofertas con bancos", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },
    { name: "Hiperofertas", img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp" },

  ];

  return (
    <section class="hero">
      <div class="hero-grid">
        <div class="hero-banner" style={{ gridColumn: 'span 12' }}>
          <img src="https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2025/agosto-alkosto/home/festejar.webp" alt="Esto sí que es para festejar" />
        </div>
        <div class="categories-scroll" style={{ gridColumn: 'span 12' }}>
          <ul class="categories-list">
            {categories.map((cat, index) => (
              <li key={index} class="categs-ul__li" style={{ gridColumn: 'span 2' }}>
                <a href="#">
                  <img alt={cat.name} class="categs-ul__li-link-img" src={cat.img} />
                  <p class="categs-ul__li-link-p">{cat.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;