import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

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

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <div className="padding">
        <h1>Our Services</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            margin: '2rem 0',
          }}
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              tabIndex={0}
              className={`${expanded === idx ? 'expanded' : ''}`}
              style={{
                background: '#fff',
                border: '2px solid #B39DDB',
                borderRadius: '8px',
                width: '280px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => setExpanded(curr => (curr === idx ? null : idx))}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') setExpanded(curr => (curr === idx ? null : idx));
              }}
              aria-expanded={expanded === idx}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: '100%',
                  height: '140px',
                  objectFit: 'cover',
                }}
              />
              <div style={{ padding: '1.2rem' }}>
                <h3
                  style={{
                    margin: 0,
                    color: '#4527A0',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    marginTop: '0.5rem',
                    color: '#333',
                  }}
                >
                  {service.description}
                </p>
                {expanded === idx && (
                  <div style={{ marginTop: '1rem', color: '#4527A0', background: '#f3e5f5', borderRadius: '6px', padding: '1rem', fontSize: '0.98em' }}>
                    {service.details}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}