import './Pillars.css';

const pillars = [
	{
		title: 'Person-Centred Approach',
		description: 'We put your needs and goals at the heart of everything we do.'
	},
	{
		title: 'Empowerment',
		description: 'We support you to make informed choices and take control of your care.'
	},
	{
		title: 'Inclusion & Diversity',
		description: 'We celebrate diversity and ensure everyone feels welcome and respected.'
	}
];

export default function Pillars() {
	return (
		<section className="pillars">
			<h2>Our Pillars</h2>
			<div className="pillars-grid">
				{pillars.map((pillar, idx) => (
					<div key={idx} className="pillar-card">
						<h3>{pillar.title}</h3>
						<p>{pillar.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
