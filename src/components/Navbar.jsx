import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar${open ? ' open' : ''}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="Hero IO Logo" />
          <span className="navbar-logo-text">HERO.IO</span>
        </Link>

        {/* Nav Links */}
        <ul className="navbar-nav">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apps" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink to="/installation" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>
              Installation
            </NavLink>
          </li>
          {/* Contribute inside nav list (mobile only) */}
          <li className="mobile-only">
            <a
              href="https://github.com/saidebinsabid"
              target="_blank"
              rel="noreferrer"
              className="navbar-contribute-btn"
              style={{ display: 'flex' }}
              onClick={() => setOpen(false)}
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.292 9.418 7.863 10.945.575.105.785-.25.785-.555l-.014-1.945c-3.197.695-3.875-1.54-3.875-1.54-.523-1.328-1.277-1.682-1.277-1.682-1.044-.714.08-.7.08-.7 1.155.082 1.763 1.186 1.763 1.186 1.025 1.755 2.69 1.248 3.345.954.104-.742.4-1.247.728-1.534-2.552-.29-5.237-1.276-5.237-5.677 0-1.254.448-2.28 1.183-3.082-.118-.29-.513-1.46.112-3.043 0 0 .964-.31 3.158 1.178A10.987 10.987 0 0 1 12 6.545c.977.004 1.96.132 2.878.387 2.193-1.488 3.155-1.178 3.155-1.178.627 1.583.232 2.753.114 3.043.737.802 1.182 1.828 1.182 3.082 0 4.413-2.69 5.384-5.252 5.667.413.355.782 1.057.782 2.131l-.014 3.162c0 .308.208.666.79.554C20.21 21.415 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
              </svg>
              Contribute
            </a>
          </li>
        </ul>

        {/* Contribute (Desktop) */}
        <a
          href="https://github.com/saidebinsabid"
          target="_blank"
          rel="noreferrer"
          className="navbar-contribute-btn"
          style={{ display: open ? 'none' : undefined }}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.292 9.418 7.863 10.945.575.105.785-.25.785-.555l-.014-1.945c-3.197.695-3.875-1.54-3.875-1.54-.523-1.328-1.277-1.682-1.277-1.682-1.044-.714.08-.7.08-.7 1.155.082 1.763 1.186 1.763 1.186 1.025 1.755 2.69 1.248 3.345.954.104-.742.4-1.247.728-1.534-2.552-.29-5.237-1.276-5.237-5.677 0-1.254.448-2.28 1.183-3.082-.118-.29-.513-1.46.112-3.043 0 0 .964-.31 3.158 1.178A10.987 10.987 0 0 1 12 6.545c.977.004 1.96.132 2.878.387 2.193-1.488 3.155-1.178 3.155-1.178.627 1.583.232 2.753.114 3.043.737.802 1.182 1.828 1.182 3.082 0 4.413-2.69 5.384-5.252 5.667.413.355.782 1.057.782 2.131l-.014 3.162c0 .308.208.666.79.554C20.21 21.415 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
          </svg>
          Contribute
        </a>

        {/* Hamburger */}
        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          id="navbar-toggle-btn"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
