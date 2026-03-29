import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import LoadingSpinner from '../components/LoadingSpinner';
import apps from '../data/apps';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import reviewIcon from '../assets/icon-review.png';
import appErrorImg from '../assets/App-Error.png';

function formatDownloads(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return Math.round(num / 1000) + 'K';
  return num.toString();
}

function formatReviews(num) {
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
  return num.toString();
}

const ORANGE = '#f97316';

// Custom Tooltip for chart
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#1e293b', color: '#fff', padding: '8px 14px', borderRadius: 8, fontSize: 13 }}>
        <strong>{payload[0].payload.name}</strong>: {payload[0].value.toLocaleString()}
      </div>
    );
  }
  return null;
}

export default function AppDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [installed, setInstalled] = useState(false);

  const app = apps.find(a => a.id === parseInt(id));

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, [id]);

  useEffect(() => {
    if (app) {
      const storedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
      setInstalled(storedApps.some(a => a.id === app.id));
    }
  }, [app]);

  const handleInstall = () => {
    const storedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    if (!storedApps.some(a => a.id === app.id)) {
      const updated = [...storedApps, app];
      localStorage.setItem('installedApps', JSON.stringify(updated));
    }
    setInstalled(true);
    toast.success(`✅ ${app.title} installed successfully!`);
  };

  if (loading) return <LoadingSpinner text="Loading app details..." />;

  // App not found
  if (!app) {
    return (
      <div className="error-page">
        <img src={appErrorImg} alt="App Not Found" />
        <h1>OPPS!! APP NOT FOUND</h1>
        <p>The App you are requesting is not found on our system. please try another apps</p>
        <button className="btn-primary" onClick={() => navigate(-1)}>Go Back!</button>
      </div>
    );
  }

  // Chart data (reversed so 5-star is on top)
  const chartData = [...app.ratings].reverse();

  // Build description paragraphs
  const descParagraphs = app.description.split('\n\n').filter(Boolean);

  return (
    <div className="details-page">
      <div className="container">

        {/* ── APP INFO CARD ── */}
        <div className="details-card">
          <div className="details-top">
            {/* Left: image */}
            <div className="details-image-wrap">
              <img
                src={app.image}
                alt={app.title}
                onError={(e) => { e.target.src = 'https://placehold.co/400x400/e2e8f0/94a3b8?text=App'; }}
              />
            </div>

            {/* Right: info */}
            <div className="details-info">
              <h1 className="details-title">{app.title}</h1>
              <p className="details-company">
                Developed by <a href="#!">{app.companyName.toLowerCase().replace(/\s+/g, '').replace(/\./g, '')}.io</a>
              </p>

              <hr className="details-divider" />

              <div className="details-stats">
                <div className="details-stat">
                  <div className="details-stat-icon-label">
                    <img src={downloadIcon} alt="Downloads" />
                    <span>Downloads</span>
                  </div>
                  <p className="details-stat-value">{formatDownloads(app.downloads)}</p>
                </div>
                <div className="details-stat">
                  <div className="details-stat-icon-label">
                    <img src={ratingIcon} alt="Rating" />
                    <span>Average Ratings</span>
                  </div>
                  <p className="details-stat-value">{app.ratingAvg}</p>
                </div>
                <div className="details-stat">
                  <div className="details-stat-icon-label">
                    <img src={reviewIcon} alt="Reviews" />
                    <span>Total Reviews</span>
                  </div>
                  <p className="details-stat-value">{formatReviews(app.reviews)}</p>
                </div>
              </div>

              <button
                id={`install-btn-${app.id}`}
                className="btn-install"
                onClick={handleInstall}
                disabled={installed}
              >
                {installed ? (
                  <>✓ Installed</>
                ) : (
                  <>Install Now ({app.size} MB)</>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ── RATINGS CHART ── */}
        <div className="chart-section">
          <h2 className="section-label">Ratings</h2>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              layout="vertical"
              data={chartData}
              margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
            >
              <XAxis type="number" tick={{ fontSize: 12, fill: '#64748b' }} />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fontSize: 13, fill: '#1e293b', fontWeight: 600 }}
                width={52}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(124,58,237,0.06)' }} />
              <Bar dataKey="count" radius={[0, 6, 6, 0]} maxBarSize={28}>
                {chartData.map((_, index) => (
                  <Cell key={index} fill={ORANGE} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ── DESCRIPTION ── */}
        <div className="description-section">
          <h2 className="section-label">Description</h2>
          {descParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

      </div>
    </div>
  );
}
