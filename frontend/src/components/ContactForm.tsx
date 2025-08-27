import './ContactForm.css';
import { useEffect } from 'react';

export default function ContactForm() {
  useEffect(() => {
    const form = document.querySelector('.contact-form');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (form) observer.observe(form);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-form">
      <h2>Get in Touch</h2>
      <form>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea placeholder="Your message" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
