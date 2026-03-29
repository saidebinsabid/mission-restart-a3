import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppCard from '../components/AppCard';
import LoadingSpinner from '../components/LoadingSpinner';
import apps from '../data/apps';
import heroImg from '../assets/hero.png';
import floatImg1 from '../assets/demo-app (1).webp';
import floatImg2 from '../assets/demo-app (2).webp';
import floatImg3 from '../assets/demo-app (3).webp';
import floatImg4 from '../assets/demo-app (4).webp';
import floatImg5 from '../assets/demo-app (5).webp';
import floatImg6 from '../assets/demo-app (6).webp';

const floatImgs = [floatImg1, floatImg2, floatImg3, floatImg4, floatImg5, floatImg6];

const TOTAL_DOWNLOADS = '29.6M';
const TOTAL_REVIEWS = '906K';
const ACTIVE_APPS = '132+';

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const topApps = apps.slice(0, 8);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner text="Loading Hero IO..." />;

  return (
    <>
      {/* ── HERO BANNER ── */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              We Build <span>Productive</span> Apps
            </h1>
            <p className="hero-subtitle">
              At HERO.IO, we craft innovative apps designed to make everyday life simpler,
              smarter, and more exciting. Our goal is to turn your ideas into digital
              experiences that truly make an impact.
            </p>
            <div className="hero-buttons">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                className="btn-store"
                id="google-play-btn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.18 23.76c.35.2.75.24 1.12.12L14.84 12 4.3.12C3.93 0 3.53.04 3.18.24 2.46.64 2 1.4 2 2.22v19.56c0 .82.46 1.58 1.18 1.98z" fill="#EA4335"/>
                  <path d="M20.82 10.18l-2.91-1.66L14.84 12l3.07 3.48 2.91-1.66c.83-.47.83-1.65 0-2.12-.83-.47-2.91-1.66-2.91-1.66z" fill="#FBBC04"/>
                  <path d="M14.84 12L4.3 23.88c.37.12.77.08 1.12-.12l.06-.04 10.63-6.08L14.84 12z" fill="#34A853"/>
                  <path d="M14.84 12L5.48.16 5.42.12C5.07-.08 4.67-.04 4.3.12L14.84 12z" fill="#4285F4"/>
                </svg>
                Google Play
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                className="btn-store"
                id="app-store-btn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="#000"/>
                </svg>
                App Store
              </a>
            </div>
          </div>

          {/* Phone + floating icons */}
          <div className="hero-phone-wrapper">
            <div className="hero-float-icons">
              {floatImgs.map((src, i) => (
                <div key={i} className="float-icon">
                  <img src={src} alt={`app icon ${i+1}`} />
                </div>
              ))}
            </div>
            <img src={heroImg} alt="Hero App Showcase" />
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="stats-section">
        <div className="container">
          <h2>Trusted By Millions, Built For You</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <p className="stat-label">Total Downloads</p>
              <p className="stat-value">{TOTAL_DOWNLOADS}</p>
              <p className="stat-sub">21% More Than Last Month</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Total Reviews</p>
              <p className="stat-value">{TOTAL_REVIEWS}</p>
              <p className="stat-sub">46% More Than Last Month</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Active Apps</p>
              <p className="stat-value">{ACTIVE_APPS}</p>
              <p className="stat-sub">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRENDING APPS ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trending Apps</h2>
            <p className="section-subtitle">Explore All Trending Apps on the Market developed by us</p>
          </div>
          <div className="apps-grid">
            {topApps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
          <div className="show-all-wrap">
            <button
              id="show-all-btn"
              className="btn-primary"
              onClick={() => navigate('/apps')}
            >
              Show All
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
