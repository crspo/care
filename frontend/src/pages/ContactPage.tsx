import Navbar from '../components/Navbar';
import BannerGroup from '../components/BannerGroup';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const bannerData = [
	{
		title: 'Compassionate Care',
		description: 'We provide heartfelt support and understanding to every client.',
		image: '/pictures/icon-compassion.png',
		color: '#4caf50'
		,details: 'Our team offers compassionate support that recognises each person\'s story and provides tailored assistance with dignity.'
	},
	{
		title: 'Experienced Team',
		description: 'Our staff brings years of expertise to ensure quality service.',
		image: '/pictures/icon-experienced.png',
		color: '#2196f3'
		,details: 'Our experienced team includes qualified carers and clinicians with extensive training. We focus on safe, high-quality, person-centred care.'
	},
	{
		title: 'Multicultural Support',
		description: 'We celebrate diversity and offer services in multiple languages.',
		image: '/pictures/icon-multicultural.png',
 		color: '#B39DDB',
 		details: 'We provide culturally responsive supports and language options to ensure accessible, inclusive care.'
	}
];

export default function ContactPage() {
	const loc = useLocation();

		useEffect(() => {
			// if navigation requested a scroll to form, do it after mount
			const state = (loc as unknown as { state?: { scrollToForm?: boolean } }).state;
			if (state?.scrollToForm) {
				const el = document.getElementById('contact-heading');
				if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}, [loc]);

	return (
		<>
			<Navbar />
			<section className="banner-section">
				<div className="banner-left">
					<div className="banner-wrapper">
						<BannerGroup items={bannerData} />
					</div>
				</div>
				<div className="banner-middle" aria-hidden="true">
					<div className="team-grid">
						<img src="/pictures/team1.avif" alt="" loading="lazy" />
						<img src="/pictures/team2.avif" alt="" loading="lazy" />
						<img src="/pictures/team3.avif" alt="" loading="lazy" />
						<img src="/pictures/team4.avif" alt="" loading="lazy" />
						<img src="/pictures/team5.avif" alt="" loading="lazy" />
					</div>
				</div>
				<aside className="banner-right" aria-labelledby="testimonials-heading">
					<h3 id="testimonials-heading">What our clients say</h3>
					<div className="testimonial">
						<p className="quote">"CareinOurHand helped my mum regain confidence. The team were patient and professional."</p>
						<p className="author">— Jane D.</p>
					</div>
					<div className="testimonial">
						<p className="quote">"Flexible and respectful support that genuinely listened to our needs."</p>
						<p className="author">— Ahmed R.</p>
					</div>
					<div className="testimonial">
						<p className="quote">"They helped our family navigate care options with patience and clear guidance."</p>
						<p className="author">— Sarah L.</p>
					</div>
					<div className="banner-cta">
						<p>Ready to talk about supports tailored to you?</p>
						<a className="cta-btn" href="/contact">Contact us</a>
					</div>
				</aside>
			</section>
			<div className="padding">
				<h1>Contact Us</h1>
				<p>
					This is the Contact page. You can add a contact form or your contact
					details here.
				</p>
				<ContactForm />
			</div>
			<Footer />
		</>
	);
}
