import './ServiceCard.css';

type Props = {
  title: string;
  description: string;
  image: string;
  color: string;
};

export default function ServiceCard({ title, description, image, color }: Props) {
  return (
    <div className="banner-card" style={{ borderColor: color }}>
      <div className="card-header">
        <img src={image} alt={title + ' icon'} style={{ height: '48px', width: '48px', objectFit: 'contain', borderRadius: '50%', background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }} />
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}

