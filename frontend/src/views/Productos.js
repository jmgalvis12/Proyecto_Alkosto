import React, { useState } from 'react';
import './Productos.css';
import { useCart } from '../context/CartContext';

// Componente para estrellas de calificación
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </span>
    );
  }
  return <div className="star-rating">{stars}</div>;
};

// Componente para iconos SVG
const HeartIcon = ({ isFavorite, onClick }) => (
  <button className={`favorite-btn ${isFavorite ? 'active' : ''}`} onClick={onClick}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  </button>
);

const CartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1"/>
    <circle cx="20" cy="21" r="1"/>
    <path d="m1 1 4 4 16 0-3 12-13 0"/>
  </svg>
);

const TruckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="3" width="15" height="13"/>
    <polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

function Productos() {
  const [favorites, setFavorites] = useState(new Set());
  const { addToCart } = useCart(); // Hook del carrito

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  // Datos completos de productos - idénticos al sitio oficial de Alkosto
  const products = [
    {
      id: 1,
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2025/agosto-alkosto/home/k-n529l2-gris.webp",
      name: "Nevecón KALLEY Side by Side 529 Litros K-N529L2 Gris",
      originalPrice: "$6.199.900",
      price: "$2.859.900",
      discount: 54,
      rating: 4.5,
      reviews: 89,
      freeShipping: true,
      installments: "12 cuotas sin interés",
      badge: "OFERTA DEL DÍA",
      availability: "Disponible"
    },
    {
      id: 2,
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2025/agosto-alkosto/home/k-ld12ge-gris.webp",
      name: "Lavadora KALLEY Carga Superior 12 Kilos K-LD12GE Gris",
      originalPrice: "$1.999.900",
      price: "$1.199.900",
      discount: 40,
      rating: 4.3,
      reviews: 156,
      freeShipping: true,
      installments: "12 cuotas sin interés",
      badge: "MÁS VENDIDO",
      availability: "Disponible"
    },
    {
      id: 3,
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2025/agosto-alkosto/home/tv-samsung-55.webp",
      name: "Smart TV Samsung 55\" UHD 4K UN55CU7000KXZL Negro",
      originalPrice: "$2.299.900",
      price: "$1.599.900",
      discount: 30,
      rating: 4.7,
      reviews: 234,
      freeShipping: true,
      installments: "24 cuotas sin interés",
      badge: "RECOMENDADO",
      availability: "Disponible"
    },
    {
      id: 4,
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2025/agosto-alkosto/home/iphone-15-128gb.webp",
      name: "iPhone 15 128GB Azul",
      originalPrice: "$4.199.900",
      price: "$3.699.900",
      discount: 12,
      rating: 4.8,
      reviews: 89,
      freeShipping: true,
      installments: "36 cuotas sin interés",
      badge: "NUEVO",
      availability: "Disponible"
    },
    {
      id: 5,
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2025/agosto-alkosto/home/portatil-hp-15.webp",
      name: "Portátil HP 15-fd0013la Intel Core i5 RAM 8GB Disco SSD 512GB",
      originalPrice: "$2.199.900",
      price: "$1.799.900",
      discount: 18,
      rating: 4.4,
      reviews: 67,
      freeShipping: true,
      installments: "18 cuotas sin interés",
      badge: "OFERTA ESPECIAL",
      availability: "Disponible"
    },
    {
      id: 6,
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2025/agosto-alkosto/home/aire-lg-12000.webp",
      name: "Aire Acondicionado LG 12000 BTU Inverter VM122C7 Blanco",
      originalPrice: "$1.499.900",
      price: "$1.199.900",
      discount: 20,
      rating: 4.6,
      reviews: 145,
      freeShipping: true,
      installments: "12 cuotas sin interés",
      badge: "CLIMA PERFECTO",
      availability: "Disponible"
    },
    {
      id: 7,
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2025/agosto-alkosto/home/microondas-lg-42lt.webp",
      name: "Microondas LG 42 Litros MS4296OSS Acero Inoxidable",
      originalPrice: "$899.900",
      price: "$699.900",
      discount: 22,
      rating: 4.2,
      reviews: 98,
      freeShipping: true,
      installments: "12 cuotas sin interés",
      badge: "COCINA FÁCIL",
      availability: "Disponible"
    },
    {
      id: 8,
      img: "https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2025/agosto-alkosto/home/consola-ps5.webp",
      name: "PlayStation 5 Console",
      originalPrice: "$2.499.900",
      price: "$2.299.900",
      discount: 8,
      rating: 4.9,
      reviews: 312,
      freeShipping: true,
      installments: "24 cuotas sin interés",
      badge: "GAMING",
      availability: "Pocas unidades"
    }
  ];

  return (
    <section className="productos-section">
      <div className="productos-container">
        <div className="productos-header">
          <h2>Productos Destacados</h2>
          <p>Los mejores precios en tecnología y electrodomésticos</p>
          <div className="productos-tabs">
            <button className="tab-btn active">Todo</button>
            <button className="tab-btn">Electrodomésticos</button>
            <button className="tab-btn">Tecnología</button>
            <button className="tab-btn">Gaming</button>
            <button className="tab-btn">Hogar</button>
          </div>
        </div>

        <div className="productos-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.img} alt={product.name} className="product-image" />
                
                {product.badge && (
                  <span className={`product-badge ${product.badge.toLowerCase().replace(/\s+/g, '-')}`}>
                    {product.badge}
                  </span>
                )}
                
                <HeartIcon 
                  isFavorite={favorites.has(product.id)}
                  onClick={() => toggleFavorite(product.id)}
                />
                
                {product.discount > 0 && (
                  <div className="discount-badge">-{product.discount}%</div>
                )}
                
                <div className="product-overlay">
                  <button className="quick-view-btn">Vista rápida</button>
                </div>
              </div>

              <div className="product-info">
                <div className="product-rating">
                  <StarRating rating={Math.floor(product.rating)} />
                  <span className="rating-text">({product.reviews})</span>
                </div>

                <h3 className="product-name">{product.name}</h3>

                <div className="product-pricing">
                  {product.originalPrice && (
                    <span className="original-price">{product.originalPrice}</span>
                  )}
                  <span className="current-price">{product.price}</span>
                </div>

                <div className="product-details">
                  {product.freeShipping && (
                    <div className="shipping-info">
                      <TruckIcon />
                      <span>Envío gratis</span>
                    </div>
                  )}
                  
                  <div className="installments">
                    {product.installments}
                  </div>
                  
                  <div className={`availability ${product.availability.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="availability-dot"></span>
                    {product.availability}
                  </div>
                </div>

                <div className="product-actions">
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    <CartIcon />
                    Agregar al carrito
                  </button>
                  <button className="buy-now-btn">
                    Comprar ahora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="productos-footer">
          <button className="ver-mas-btn">
            Ver más productos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Productos;