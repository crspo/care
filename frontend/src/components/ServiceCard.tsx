import './ServiceCard.css';

type Props = {
  title: string;
  description: string;
  image: string;
  color: string;
  details?: string;
  expanded?: boolean;
  onToggle?: () => void;
};

export default function ServiceCard({ title, description, image, color, details, expanded, onToggle }: Props) {
  return (
    <div className={`banner-card${expanded ? ' expanded' : ''}`} style={{ borderColor: color }} tabIndex={0} role={details ? 'button' : undefined} onClick={onToggle} onKeyDown={e => { if ((e.key === 'Enter' || e.key === ' ') && onToggle) onToggle(); }} aria-expanded={expanded}>
      <div className="card-header">
        <img src={image} alt={title + ' icon'} style={{ height: '48px', width: '48px', objectFit: 'contain', borderRadius: '50%', background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }} />
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      {details && expanded && (
        <div className="banner-details" style={{ marginTop: '1rem', color: '#4527A0', background: '#f3e5f5', borderRadius: '6px', padding: '0.8rem', fontSize: '0.95em' }}>
          {details}
        </div>
      )}
    </div>
  );
}

