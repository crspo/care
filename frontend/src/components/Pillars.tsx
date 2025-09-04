import { useState, useEffect } from 'react';
import './Pillars.css';

const pillars = [
	{
		title: 'Person-Centred Approach',
		description: 'We put your needs and goals at the heart of everything we do.',
		details:
			'We listen first and co-design supports that respect your goals, routines and preferences. Our care plans are tailored and reviewed regularly so you stay in control.'
	},
	{
		title: 'Empowerment',
		description: 'We support you to make informed choices and take control of your care.',
		details:
			'We provide clear information, encourage decision-making and build skills so you can exercise choice and independence in everyday life.'
	},
	{
		title: 'Inclusion & Diversity',
		description: 'We celebrate diversity and ensure everyone feels welcome and respected.',
		details:
			'Our workforce is trained in culturally responsive practice. We adapt supports to cultural, linguistic and accessibility needs so everyone can participate fully.'
	}
];

export default function Pillars() {
	const [expanded, setExpanded] = useState<number | null>(null);

	// optional: reveal animation using intersection observer
	useEffect(() => {
		const items = document.querySelectorAll('.pillar-item');
		const obs = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) entry.target.classList.add('visible');
				});
			},
			{ threshold: 0.2 }
		);
		items.forEach(i => obs.observe(i));
		return () => obs.disconnect();
	}, []);

	return (
		<section className="pillars">
			<h2>Our Pillars</h2>
			<div className="pillars-grid">
				{pillars.map((pillar, idx) => (
					<div
						key={idx}
						className={`pillar-card pillar-item${expanded === idx ? ' expanded' : ''}`}
						tabIndex={0}
						role="button"
						aria-expanded={expanded === idx}
						onClick={() => setExpanded(curr => (curr === idx ? null : idx))}
						onKeyDown={e => {
							if (e.key === 'Enter' || e.key === ' ') setExpanded(curr => (curr === idx ? null : idx));
						}}
					>
						<h3>{pillar.title}</h3>
						<p className="pillar-short">{pillar.description}</p>
						{/* details only rendered when expanded to keep DOM small */}
						{expanded === idx && (
							<div className="pillar-details">
								<p>{pillar.details}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
