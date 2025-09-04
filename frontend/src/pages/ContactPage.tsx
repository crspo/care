import Navbar from '../components/Navbar';
import BannerGroup from '../components/BannerGroup';
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
 		color: '#B39DDB',
 		details: 'We provide culturally responsive supports and language options to ensure accessible, inclusive care.'
	}
];

export default function ContactPage() {
	return (
		<>
			<Navbar />
			<div className="banner-wrapper">
				<BannerGroup items={bannerData} />
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
