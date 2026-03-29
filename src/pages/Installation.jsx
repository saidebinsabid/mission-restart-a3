import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import LoadingSpinner from '../components/LoadingSpinner';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';

function formatDownloads(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return Math.round(num / 1000) + 'K';
  return num.toString();
}

export default function Installation() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const t = setTimeout(() => {
      const stored = JSON.parse(localStorage.getItem('installedApps') || '[]');
      setInstalledApps(stored);
      setLoading(false);
    }, 600);
    return () => clearTimeout(t);
  }, []);

  const handleUninstall = (app) => {
    const updated = installedApps.filter(a => a.id !== app.id);
    setInstalledApps(updated);
    localStorage.setItem('installedApps', JSON.stringify(updated));
    toast.success(`🗑️ ${app.title} has been uninstalled.`);
  };

  // Sort
  let displayed = [...installedApps];
  if (sortOrder === 'high-low') {
    displayed.sort((a, b) => b.downloads - a.downloads);
  } else if (sortOrder === 'low-high') {
    displayed.sort((a, b) => a.downloads - b.downloads);
  }

  if (loading) return <LoadingSpinner text="Loading your apps..." />;

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Your Installed Apps</h1>
          <p className="page-hero-subtitle">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
      </section>

      {/* Install List Section */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container">

          {/* Toolbar */}
          <div className="apps-toolbar">
            <p className="apps-count">{displayed.length} Apps Found</p>
            <select
              id="sort-downloads-select"
              className="sort-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Sort By Downloads</option>
              <option value="high-low">High → Low</option>
              <option value="low-high">Low → High</option>
            </select>
          </div>

          {/* Empty State */}
          {displayed.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">📱</div>
              <h3>No Installed Apps</h3>
              <p>You haven&apos;t installed any apps yet. Browse our collection and install your favorites!</p>
              <button className="btn-primary" onClick={() => navigate('/apps')}>
                Browse Apps
              </button>
            </div>
          ) : (
            <div className="install-list">
              {displayed.map(app => (
                <div key={app.id} className="install-card" id={`install-card-${app.id}`}>
                  {/* Image */}
                  <img
                    src={app.image}
                    alt={app.title}
                    className="install-card-img"
                    onError={(e) => { e.target.src = 'https://placehold.co/150x150/e2e8f0/94a3b8?text=App'; }}
                  />
                  {/* Info */}
                  <div className="install-card-info">
                    <p className="install-card-title">{app.title}</p>
                    <div className="install-card-meta">
                      <span className="install-card-item green">
                        <img src={downloadIcon} alt="downloads" />
                        {formatDownloads(app.downloads)}
                      </span>
                      <span className="install-card-item orange">
                        <img src={ratingIcon} alt="rating" />
                        {app.ratingAvg}
                      </span>
                      <span className="install-card-item gray">
                        {app.size} MB
                      </span>
                    </div>
                  </div>
                  {/* Uninstall Button */}
                  <button
                    id={`uninstall-btn-${app.id}`}
                    className="btn-uninstall"
                    onClick={() => handleUninstall(app)}
                  >
                    Uninstall
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
