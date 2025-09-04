import { useState } from 'react';
import ServiceCard from './ServiceCard';

type Banner = {
  title: string;
  description: string;
  image: string;
  color: string;
  details?: string;
};

export default function BannerGroup({ items }: { items: Banner[] }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <>
      {items.map((b, idx) => (
        <div key={idx} className="banner-item">
          <ServiceCard
            {...b}
            expanded={expanded === idx}
            onToggle={() => setExpanded(curr => (curr === idx ? null : idx))}
          />
        </div>
      ))}
    </>
  );
}
