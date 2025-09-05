import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Make sure the Navbar component exists at the specified path or update the path accordingly
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BannerGroup from './components/BannerGroup';
import Pillars from './components/Pillars';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

const bannerData = [
	{
		title: 'Compassionate Care',
		description: 'We provide heartfelt support and understanding to every client.',
		image: '/pictures/icon-compassion.png',
		background: '/pictures/hero-bg2.avif',
		color: '#4caf50',
	details: 'Our team offers compassionate support that recognises each person\'s story and provides tailored assistance with dignity.'
	},
	{
		title: 'Experienced Team',
		description: 'Our staff brings years of expertise to ensure quality service.',
		image: '/pictures/icon-experienced.png',
		background: '/pictures/hero-bg3.avif',
		color: '#2196f3'
		,details: 'Our experienced team includes qualified carers and clinicians with extensive training. We focus on safe, high-quality, person-centred care tailored to each individual.'
	},
		{
			title: 'Multicultural Support',
			description: 'We celebrate diversity and offer services in multiple languages.',
			image: '/pictures/icon-multicultural.png',
			background: '/pictures/hero-bg4.avif',
			color: '#B39DDB',
			details: 'We provide culturally responsive supports and language options to ensure accessible, inclusive care.'
		}
];

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Navbar />
							<main id="main">
								<Hero />
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
								<Pillars />
								<Services />
								<ContactForm />
							</main>
							<Footer />
						</>
					}
				/>
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</Router>
	);
}

export default App;

