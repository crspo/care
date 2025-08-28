import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <a href="https://facebook.com/careinourhand" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#4267B2" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              Care
            </a>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <a href="https://instagram.com/careinourhand" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#E1306C" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.808.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.276.353 2.449 1.32 3.416.967.967 2.14 1.261 3.416 1.32C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.276-.059 2.449-.353 3.416-1.32.967-.967 1.261-2.14 1.32-3.416.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.276-.353-2.449-1.32-3.416-.967-.967-2.14-1.261-3.416-1.32C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              Care
            </a>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <a href="tel:+1234567890">(123) 456-7890</a>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <a href="mailto:info@careinourhand.com.au">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#333" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}><path d="M12 13.065L2.4 6.6A2 2 0 0 1 4 4h16a2 2 0 0 1 1.6 2.6l-9.6 6.465zm9.6-7.465A4 4 0 0 0 20 4H4a4 4 0 0 0-1.6.6l9.6 6.465L21.6 6.6zM2 8.236V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.236l-9.6 6.465L2 8.236z"/></svg>
              info@careinourhand.com.au
            </a>
          </span>
        </div>
        <div className="footer-copy" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
          <img src="/pictures/logo.png" alt="CareinOurHand Logo" style={{ height: '2rem', width: '2rem', borderRadius: '50%', background: '#fff', objectFit: 'contain' }} />
          <span>&copy; {new Date().getFullYear()} CareinOurHand. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
