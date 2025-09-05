import './ContactForm.css';
import { useEffect, useRef, useState } from 'react';

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const statusRef = useRef<HTMLDivElement | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message?: string }>({ type: 'idle' });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
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

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: 'idle' });

    // Basic client-side validation
    if (!name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name.' });
      (formRef.current?.querySelector('input[name="name"]') as HTMLElement | null)?.focus();
      return;
    }
    if (!email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email.' });
      (formRef.current?.querySelector('input[name="email"]') as HTMLElement | null)?.focus();
      return;
    }
    if (!message.trim()) {
      setStatus({ type: 'error', message: 'Please enter a message.' });
      (formRef.current?.querySelector('textarea[name="message"]') as HTMLElement | null)?.focus();
      return;
    }

    setSubmitting(true);
    try {
  const res = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() })
      });

      if (res.ok) {
        setStatus({ type: 'success', message: 'Thanks — your message has been sent.' });
        setName('');
        setEmail('');
        setMessage('');
        // move focus to status so screen readers announce it
        setTimeout(() => statusRef.current?.focus(), 50);
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus({ type: 'error', message: data?.message || 'Failed to send message. Please try again later.' });
        setTimeout(() => statusRef.current?.focus(), 50);
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
      setTimeout(() => statusRef.current?.focus(), 50);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section ref={sectionRef} className="contact-form" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Get in Touch</h2>
      <form ref={formRef} onSubmit={handleSubmit} noValidate>
        <label htmlFor="contact-name">
          <span className="visually-hidden">Your name</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <label htmlFor="contact-email">
          <span className="visually-hidden">Your email</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label htmlFor="contact-message">
          <span className="visually-hidden">Your message</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Your message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          rows={6}
        />

        <div
          ref={statusRef}
          tabIndex={-1}
          role="status"
          aria-live={status.type === 'error' ? 'assertive' : 'polite'}
          className={`form-status ${status.type}`}
        >
          {status.message}
        </div>

        <button type="submit" disabled={submitting} aria-disabled={submitting}>
          {submitting ? 'Sending…' : 'Send'}
        </button>
      </form>
    </section>
  );
}
