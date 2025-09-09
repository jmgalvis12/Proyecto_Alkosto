import React, { useState, useEffect } from 'react';
import './Hero.css';

const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15,18 9,12 15,6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9,18 15,12 9,6"></polyline>
  </svg>
);

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [categoriesScroll, setCategoriesScroll] = useState(0);

  // Banners principales como en el sitio real
  const banners = [
    {
      id: 1,
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2025/agosto-alkosto/home/festejar.webp",
      alt: "Esto sí que es para festejar",
      title: "¡Ofertas increíbles!",
      subtitle: "Descuentos hasta del 50%",
      cta: "Ver ofertas",
      link: "/ofertas"
    },
    {
      id: 2,
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/banner-celulares.webp",
      alt: "Celulares en oferta",
      title: "Los mejores celulares",
      subtitle: "Tecnología de última generación",
      cta: "Comprar ahora",
      link: "/celulares"
    },
    {
      id: 3,
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/banner-electro.webp",
      alt: "Electrodomésticos",
      title: "Renueva tu hogar",
      subtitle: "Electrodomésticos con garantía",
      cta: "Descubrir",
      link: "/electrodomesticos"
    }
  ];

  // Categorías con colores específicos como en el sitio real
  const categories = [
    { 
      name: "Celulares", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-celulares.webp",
      color: "ak-blue-cake",
      link: "/celulares"
    },
    { 
      name: "Electro", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/home/categs/c-refrigeracion.webp",
      color: "ak-yellow-cake",
      link: "/electrodomesticos"
    },
    { 
      name: "Computo e impresión", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-computadores.webp",
      color: "ak-pink-cake",
      link: "/computadores"
    },
    { 
      name: "Televisores", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-televisores.webp",
      color: "ak-green-cake",
      link: "/televisores"
    },
    { 
      name: "Videojuegos", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-videojuegos.webp",
      color: "ak-purple-cake",
      link: "/videojuegos"
    },
    { 
      name: "Zona Gamer", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/setup-gmar/portatiles-gaming-2.webp",
      color: "ak-orange-cake",
      link: "/zona-gamer"
    },
    { 
      name: "Domótica", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/c-domotica-2.webp",
      color: "ak-blue-cake",
      link: "/domotica"
    },
    { 
      name: "Pines", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-tarjetas-pines.webp",
      color: "ak-yellow-cake",
      link: "/pines"
    },
    { 
      name: "Audio", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/home/categs/c-audio.webp",
      color: "ak-pink-cake",
      link: "/audio"
    },
    { 
      name: "Electrohogar", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-electrohogar.webp",
      color: "ak-purple-cake",
      link: "/electrohogar"
    },
    { 
      name: "Smartwatch", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-smartwatch.webp",
      color: "ak-green-cake",
      link: "/smartwatch"
    },
    { 
      name: "Audífonos", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/home/categs/c-audifonos.webp",
      color: "ak-orange-cake",
      link: "/audifonos"
    },
    { 
      name: "Accesorios", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/home/accesorios.webp",
      color: "ak-blue-cake",
      link: "/accesorios"
    },
    { 
      name: "Cámaras", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-camera-2.webp",
      color: "ak-yellow-cake",
      link: "/camaras"
    },
    { 
      name: "Juguetes", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/home/juguetes-2.webp",
      color: "ak-pink-cake",
      link: "/juguetes"
    },
    { 
      name: "Deportes", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-deportes.webp",
      color: "ak-purple-cake",
      link: "/deportes"
    },
    { 
      name: "Muebles", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-muebles.webp",
      color: "ak-green-cake",
      link: "/muebles"
    },
    { 
      name: "Colchones", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-colchones.webp",
      color: "ak-orange-cake",
      link: "/colchones"
    },
    { 
      name: "Llantas", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-llantas.webp",
      color: "ak-blue-cake",
      link: "/llantas"
    },
    { 
      name: "Hogar", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2025/abril/header-foto-baterias.webp",
      color: "ak-yellow-cake",
      link: "/hogar"
    },
    { 
      name: "Ropa hogar", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2025/home/ropa-hogar-2.webp",
      color: "ak-pink-cake",
      link: "/ropa-hogar"
    },
    { 
      name: "Proyectores", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2025/home/proyectores-2.webp",
      color: "ak-purple-cake",
      link: "/proyectores"
    },
    { 
      name: "Ofertas con bancos", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/black/2024/medios-pago-6.webp",
      color: "ak-green-cake",
      link: "/ofertas-bancos"
    },
    { 
      name: "Hiperofertas", 
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-hiperofertas.webp",
      color: "ak-orange-cake",
      link: "/hiperofertas"
    }
  ];

  // Auto slide para el carrusel principal
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const scrollCategories = (direction) => {
    const container = document.querySelector('.categories-list');
    const scrollAmount = 300;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Carrusel principal de banners */}
        <div className="hero-carousel">
          <div className="carousel-container">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {banners.map((banner, index) => (
                <div key={banner.id} className="carousel-slide">
                  <img src={banner.img} alt={banner.alt} />
                  <div className="slide-overlay">
                    <div className="slide-content">
                      <h2>{banner.title}</h2>
                      <p>{banner.subtitle}</p>
                      <a href={banner.link} className="slide-cta">
                        {banner.cta}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Controles del carrusel */}
            <button className="carousel-btn prev" onClick={prevSlide}>
              <ChevronLeft />
            </button>
            <button className="carousel-btn next" onClick={nextSlide}>
              <ChevronRight />
            </button>
            
            {/* Indicadores */}
            <div className="carousel-indicators">
              {banners.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Carrusel de categorías */}
        <div className="categories-section">
          <div className="categories-header">
            <h3>Categorías</h3>
            <div className="categories-controls">
              <button className="category-scroll-btn" onClick={() => scrollCategories('left')}>
                <ChevronLeft />
              </button>
              <button className="category-scroll-btn" onClick={() => scrollCategories('right')}>
                <ChevronRight />
              </button>
            </div>
          </div>
          
          <div className="categories-scroll">
            <ul className="categories-list">
              {categories.map((cat, index) => (
                <li key={index} className="categs-ul__li">
                  <a href={cat.link} className={`categs-ul__li-link ${cat.color}`}>
                    <img 
                      alt={cat.name} 
                      className="categs-ul__li-link-img" 
                      src={cat.img}
                      onError={(e) => {
                        e.target.src = 'https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/c-celulares.webp';
                      }}
                    />
                    <p className="categs-ul__li-link-p">{cat.name}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;