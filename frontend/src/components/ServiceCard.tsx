import './ServiceCard.css';

type Props = {
  title: string;
  description: string;
  image: string;
  color: string;
  details?: string;
  background?: string;
  expanded?: boolean;
  onToggle?: () => void;
};

export default function ServiceCard({ title, description, image, color, details, background, expanded, onToggle }: Props) {
  const bgStyle = background
    ? { backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.75)), url(${background})` }
    : undefined;

  return (
    <button
      type="button"
      className={`banner-card${expanded ? ' flipped' : ''}`}
      style={{ borderColor: color, ...(bgStyle || {}) }}
      onClick={onToggle}
      aria-expanded={!!expanded}
    >
      <div className="card-inner">
        <div className="card-face card-front">
          <div className="card-header">
            <img src={image} alt={`${title} icon`} style={{ height: '48px', width: '48px', objectFit: 'contain', borderRadius: '50%', background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }} />
            <h3>{title}</h3>
          </div>
          <p>{description}</p>
        </div>

        <div className="card-face card-back">
          {/* Back face: show details or a short CTA */}
          <div className="banner-details" style={{ color: '#4527A0', background: '#f3e5f5', borderRadius: '10px', padding: '1rem', fontSize: '0.98em', width: '100%' }}>
            {details ? details : description}
          </div>
        </div>
      </div>
    </button>
  );
}

