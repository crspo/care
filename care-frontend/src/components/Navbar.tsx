import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
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
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
