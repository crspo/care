import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const slides = [
  {
    image: '/pictures/hero-bg1.jpg',
    heading: 'Supporting Your Independence',
    subheading: 'Personalised care and guidance for every step of your journey.',
    button: { text: 'Explore Services', action: 'services' }
  },
  {
    image: '/pictures/hero-bg2.jpg',
    heading: 'Empowering Your Choices',
    subheading: 'We help you make informed decisions for a better quality of life.',
    button: { text: 'Contact Us', action: 'contact' }
  },
  {
    image: '/pictures/hero-bg3.jpg',
    heading: 'Inclusive and Diverse',
    subheading: 'Celebrating every individual and supporting all communities.',
    button: { text: 'Our Pillars', action: 'pillars' }
  },
  {
    image: '/pictures/hero-bg4.jpg',
    heading: 'Care You Can Trust',
    subheading: 'Experienced professionals dedicated to your wellbeing.',
    button: { text: 'Explore Services', action: 'services' }
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500); // match fade duration in CSS
    }, 6000); // slower interval
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    const action = slides[current].button.action;
    if (action === 'services') {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'contact') {
      navigate('/contact');
    } else if (action === 'pillars') {
      document.querySelector('.pillars')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`hero${fade ? ' fade-in' : ' fade-out'}`}
      style={{ backgroundImage: `url(${slides[current].image})` }}
      role="banner"
      aria-label={slides[current].heading + ' - ' + slides[current].subheading}
    >
      <h2 tabIndex={0}>{slides[current].heading}</h2>
      <p tabIndex={0}>{slides[current].subheading}</p>
      <button
        className="cta-button"
        onClick={handleButtonClick}
        aria-label={slides[current].button.text}
      >
        {slides[current].button.text}
      </button>
      <div className="scroll-cue" tabIndex={0} aria-label="Scroll for more">↓</div>
    </section>
  );
}
