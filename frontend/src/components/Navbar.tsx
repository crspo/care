import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  function goToContact(e: React.MouseEvent) {
    e.preventDefault();
    // If already on the contact page, just scroll to the form
    if (location.pathname === '/contact') {
      const el = document.getElementById('contact-heading');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    // Otherwise navigate and request the Contact page to scroll to form on mount
    navigate('/contact', { state: { scrollToForm: true } });
  }

  return (
    <nav className="navbar">
      <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
          borderRadius: '50%',
          padding: '0.3rem',
          boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
        }}>
          <img src="/pictures/logo.png" alt="CareinOurHand Logo" style={{ height: '3rem', width: '3rem', objectFit: 'contain', borderRadius: '50%' }} />
        </span>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>CareinOurHand</Link>
      </h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><a href="/contact" onClick={goToContact}>Contact</a></li>
      </ul>
    </nav>
  );
}
