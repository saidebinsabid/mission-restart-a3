import { useNavigate } from 'react-router-dom';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';

function formatDownloads(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
  return num.toString();
}

export default function AppCard({ app }) {
  const navigate = useNavigate();

  return (
    <div
      className="app-card"
      onClick={() => navigate(`/apps/${app.id}`)}
      id={`app-card-${app.id}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/apps/${app.id}`)}
    >
      <img
        src={app.image}
        alt={app.title}
        className="app-card-image"
        onError={(e) => { e.target.src = 'https://placehold.co/400x400/e2e8f0/94a3b8?text=App'; }}
      />
      <div className="app-card-body">
        <p className="app-card-title">{app.title}</p>
        <div className="app-card-meta">
          <span className="app-card-downloads">
            <img src={downloadIcon} alt="downloads" />
            {formatDownloads(app.downloads)}
          </span>
          <span className="app-card-rating">
            <img src={ratingIcon} alt="rating" />
            {app.ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
}
