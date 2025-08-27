import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

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

export default function ContactPage() {
	return (
		<>
			<Navbar />
			<div className="banner-wrapper">
				{bannerData.map((banner, idx) => (
					<div key={idx} className="banner-item">
						<ServiceCard {...banner} />
					</div>
				))}
			</div>
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
