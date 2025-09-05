import { useState } from 'react';
import ServiceCard from './ServiceCard';

type Banner = {
  title: string;
  description: string;
  image: string;
  color: string;
  details?: string;
  background?: string;
};

export default function BannerGroup({ items }: { items: Banner[] }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="banner-group" role="list">
      {items.map((b, idx) => (
        <div key={idx} role="listitem" className="banner-item">
          <ServiceCard
            title={b.title}
            description={b.description}
            image={b.image}
            color={b.color}
            details={b.details}
            background={b.background}
            expanded={expanded === idx}
            onToggle={() => setExpanded(curr => (curr === idx ? null : idx))}
          />
        </div>
      ))}
    </div>
  );
}
