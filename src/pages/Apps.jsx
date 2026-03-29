import { useState, useEffect } from 'react';
import AppCard from '../components/AppCard';
import LoadingSpinner from '../components/LoadingSpinner';
import apps from '../data/apps';

export default function Apps() {
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);

  // Initial load
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  // Search loading simulation
  const handleSearch = (e) => {
    const val = e.target.value;
    setSearching(true);
    setQuery(val);
    setTimeout(() => setSearching(false), 300);
  };

  // Filter + sort
  let filtered = apps.filter(app =>
    app.title.toLowerCase().includes(query.toLowerCase())
  );

  if (sortOrder === 'high-low') {
    filtered = [...filtered].sort((a, b) => b.downloads - a.downloads);
  } else if (sortOrder === 'low-high') {
    filtered = [...filtered].sort((a, b) => a.downloads - b.downloads);
  }

  if (loading) return <LoadingSpinner text="Loading apps..." />;

  return (
    <>
      {/* Page Hero - fade in */}
      <section className="page-hero page-fade-in">
        <div className="container">
          <h1 className="page-hero-title">Our All Applications</h1>
          <p className="page-hero-subtitle">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
      </section>

      {/* Apps Section */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          {/* Toolbar */}
          <div className="apps-toolbar">
            <p className="apps-count">({filtered.length}) Apps Found</p>
            <div className="apps-search-wrap">
              {/* Sort */}
              <select
                id="sort-select"
                className="sort-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="">Sort By Downloads</option>
                <option value="high-low">High → Low</option>
                <option value="low-high">Low → High</option>
              </select>

              {/* Search */}
              <div className="search-input-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  id="search-input"
                  type="search"
                  className="search-input"
                  placeholder="Search apps..."
                  value={query}
                  onChange={handleSearch}
                  aria-label="Search apps by name"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          {/* Grid or states */}
          {searching ? (
            <LoadingSpinner text="Searching..." />
          ) : filtered.length === 0 ? (
            <div className="no-results">
              <h3>No App Found</h3>
              <p>No apps match &quot;{query}&quot;. Try a different search term.</p>
            </div>
          ) : (
            <div className="apps-grid">
              {filtered.map(app => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
