import { useEffect, useState } from 'react';
import './Services.css';

const services = [
  {
    title: 'Core Support',
    description: 'We provide essential daily living support tailored to your needs.',
    image: '/pictures/core-support.avif',
    details: 'Our Core Support service helps you with daily activities such as personal care, meal preparation, household tasks, and community participation. We tailor our support to your unique needs and preferences, ensuring you can live as independently as possible.'
  },
  {
    title: 'Nursing Support',
    description: 'Professional nursing care and health management for all ages.',
    image: '/pictures/nursing-support.avif',
    details: 'Our Nursing Support provides access to qualified nurses for medication management, wound care, chronic disease support, and health assessments. We work closely with you and your healthcare team to deliver safe, compassionate care at home.'
  },
  {
    title: 'Private Care',
    description: 'Discreet and personalized private care services in your home.',
    image: '/pictures/private-care.avif',
    details: 'Private Care offers one-on-one support for those who need extra assistance, including overnight care, respite, and companionship. Our team respects your privacy and dignity, delivering care that fits your lifestyle and schedule.'
  }
];

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

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
          <div
            key={idx}
            className={`service-card fade-in${expanded === idx ? ' expanded' : ''}`}
            tabIndex={0}
            style={{ cursor: 'pointer' }}
            onClick={() => setExpanded(curr => (curr === idx ? null : idx))}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') setExpanded(curr => (curr === idx ? null : idx));
            }}
            aria-expanded={expanded === idx}
          >
            <img src={service.image} alt={service.title} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '6px 6px 0 0', marginBottom: '1rem' }} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {expanded === idx && (
              <div className="service-details" style={{ marginTop: '1rem', color: '#4527A0', background: '#f3e5f5', borderRadius: '6px', padding: '1rem', fontSize: '0.98em' }}>
                {service.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
