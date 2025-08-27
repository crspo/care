import { useEffect } from 'react';
import './Services.css';

const services = [
  {
    title: 'Core Support',
    description: 'We provide essential daily living support tailored to your needs.',
    image: '/pictures/core-support.jpg'
  },
  {
    title: 'Nursing Support',
    description: 'Professional nursing care and health management for all ages.',
    image: '/pictures/nursing-support.jpg'
  },
  {
    title: 'Private Care',
    description: 'Discreet and personalized private care services in your home.',
    image: '/pictures/private-care.jpg'
  }
];

export default function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" id="services">
      <h2>What We Offer</h2>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-card fade-in">
            <img src={service.image} alt={service.title} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '6px 6px 0 0', marginBottom: '1rem' }} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
