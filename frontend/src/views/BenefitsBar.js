import React from 'react';
import './BenefitsBar.css';

function BenefitsBar() {
  const benefits = [
    { 
      id: 1,
      title: 'Participa por la mitad de tu compra',
      icon: 'https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/bb-compra.webp',
      link: '#'
    },
    { 
      id: 2,
      title: 'Envío gratis a 900 municipios',
      icon: 'https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/assets/b-colombia.webp',
      link: '#'
    },
    { 
      id: 3,
      title: '30 días para cambios y devoluciones',
      icon: 'https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/bb-30dias.webp',
      link: '#'
    },
    { 
      id: 4,
      title: 'Seguro gratis en celulares',
      icon: 'https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/2024/agosto-alkosto/home/bb-seguro.webp',
      link: '#'
    }
  ];

  return (
    <section className="benefits-bar">
      <div className="benefits-container">
        <div className="benefits-list">
          {benefits.map((benefit) => (
            <a 
              key={benefit.id} 
              href={benefit.link}
              className="benefit-item"
            >
              <img 
                src={benefit.icon} 
                alt={benefit.title}
                className="benefit-icon"
              />
              <span className="benefit-text">{benefit.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsBar;