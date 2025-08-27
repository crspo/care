import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
	{
		title: 'Core Support',
		description:
			'We provide essential daily living support tailored to your needs.',
		image: '/pictures/core-support.jpg',
	},
	{
		title: 'Nursing Support',
		description:
			'Professional nursing care and health management for all ages.',
		image: '/pictures/nursing-support.jpg',
	},
	{
		title: 'Private Care',
		description:
			'Discreet and personalized private care services in your home.',
		image: '/pictures/private-care.jpg',
	},
];

export default function ServicesPage() {
	return (
		<>
			<Navbar />
			<div className="padding">
				<h1>Our Services</h1>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
						gap: '2rem',
						margin: '2rem 0',
					}}
				>
					{services.map((service, idx) => (
						<div
							key={idx}
							style={{
								background: '#fff',
								border: '2px solid #B39DDB',
								borderRadius: '8px',
								width: '280px',
								boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
								overflow: 'hidden',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<img
								src={service.image}
								alt={service.title}
								style={{
									width: '100%',
									height: '140px',
									objectFit: 'cover',
								}}
							/>
							<div style={{ padding: '1.2rem' }}>
								<h3
									style={{
										margin: 0,
										color: '#4527A0',
									}}
								>
									{service.title}
								</h3>
								<p
									style={{
										marginTop: '0.5rem',
										color: '#333',
									}}
								>
									{service.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}
