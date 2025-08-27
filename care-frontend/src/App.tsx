import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Make sure the Navbar component exists at the specified path or update the path accordingly
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
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
		color: '#4caf50'
	},
	{
		title: 'Experienced Team',
		description: 'Our staff brings years of expertise to ensure quality service.',
		image: '/pictures/icon-experienced.png',
		color: '#2196f3'
	},
	{
		title: 'Multicultural Support',
		description: 'We celebrate diversity and offer services in multiple languages.',
		image: '/pictures/icon-multicultural.png',
		color: '#B39DDB'
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
							<Hero />
							<div className="banner-wrapper">
								{bannerData.map((banner, idx) => (
									<div key={idx} className="banner-item">
										<ServiceCard {...banner} />
									</div>
								))}
							</div>
							<Pillars />
							<Services />
							<ContactForm />
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

