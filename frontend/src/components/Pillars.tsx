import { useState, useEffect, useRef } from 'react';
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
	// allow multiple expanded cards to persist
		const [expandedSet, setExpandedSet] = useState<Set<number>>(new Set());
		const [visibleSet, setVisibleSet] = useState<Set<number>>(new Set());
		const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

	function toggleExpanded(idx: number) {
		setExpandedSet(prev => {
			const next = new Set(prev);
			if (next.has(idx)) next.delete(idx);
			else next.add(idx);
			return next;
		});
	}

	useEffect(() => {
		const obs = new IntersectionObserver(
			entries => {
				setVisibleSet(prev => {
					const next = new Set(prev);
					entries.forEach(entry => {
						const idxAttr = (entry.target as HTMLElement).getAttribute('data-idx');
						if (!idxAttr) return;
						const i = parseInt(idxAttr, 10);
						if (entry.isIntersecting) next.add(i);
					});
					return next;
				});
			},
			{ threshold: 0.2 }
		);

		const els = Array.from(document.querySelectorAll('.pillar-item')) as HTMLElement[];
		els.forEach(el => obs.observe(el));
		return () => obs.disconnect();
	}, []);

	return (
		<section className="pillars">
			<h2>Our Pillars</h2>
			<div className="pillars-grid">
				{pillars.map((pillar, idx) => {
					const isVisible = visibleSet.has(idx);
					const isExpanded = expandedSet.has(idx);
					const className = `pillar-card pillar-item${!isVisible ? ' pre-hidden' : ''}${isExpanded ? ' expanded' : ''}`;

								return (
									<div key={idx} data-idx={idx} ref={el => { cardsRef.current[idx] = el; }} className={className}>
										<button
											type="button"
											className="pillar-toggle"
											aria-expanded={isExpanded}
											aria-controls={`pillar-details-${idx}`}
											onClick={() => toggleExpanded(idx)}
										>
											<h3>{pillar.title}</h3>
											<p className="pillar-short">{pillar.description}</p>
										</button>
										{isExpanded && (
											<div id={`pillar-details-${idx}`} className="pillar-details">
												<p>{pillar.details}</p>
											</div>
										)}
									</div>
								);
				})}
			</div>
		</section>
	);
}
