# 🚀 Hero IO — App Discovery Platform

A modern, responsive app discovery platform where you can explore, search, and install trending mobile applications.

## 🔗 Links

- **Live Link:** https://transcendent-profiterole-33c7b1.netlify.app/
- **GitHub Repository:** https://github.com/saidebinsabid/mission-restart-a3

---

## 📖 Description

**Hero IO** is a feature-rich app store showcase built with React. It allows users to browse trending apps, search and filter through a curated collection, view detailed app information with ratings charts, and manage their installed apps — all powered by localStorage for persistence.

---

## ✨ Features

- 🏠 **Home Page** — Hero banner, stats section (29.6M downloads, 906K reviews, 132+ apps), trending apps grid
- 📱 **All Apps Page** — Live search, sort by downloads (High→Low / Low→High), responsive 4-column grid
- 📊 **App Details Page** — App info, horizontal ratings bar chart (Recharts), install button with toast notification
- 💾 **Installation Page** — View & manage installed apps, uninstall with toast, sort by downloads
- 🔍 **Live Search** — Case-insensitive real-time filtering
- ⚡ **Loading Animations** — Spinner during page navigation and search
- ❌ **Error Pages** — Custom 404 page and App Not Found page
- 📲 **LocalStorage** — Installed apps persist across browser sessions
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop

---

## 🛠️ Technologies

| Technology | Version | Purpose |
|---|---|---|
| **React** | ^19.1.0 | UI Framework |
| **Vite** | ^6.3.1 | Build Tool |
| **React Router DOM** | ^7.4.1 | Client-side Routing |
| **Recharts** | ^2.15.0 | Ratings Bar Chart |
| **React Hot Toast** | ^2.5.2 | Toast Notifications |
| **Vanilla CSS** | — | Styling & Design System |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/saidebinsabid/mission-restart-a3.git

# Navigate to the project
cd mission-restart-a3

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
src/
  assets/         — Images and icons
  components/
    Navbar.jsx    — Navigation with active route indication
    Footer.jsx    — Footer with social links
    AppCard.jsx   — Reusable app card (grid)
    LoadingSpinner.jsx
  data/
    apps.js       — 15 app data objects
  pages/
    Home.jsx      — Home page with banner, stats, trending apps
    Apps.jsx      — All apps with search & sort
    AppDetails.jsx — App details with Recharts chart
    Installation.jsx — Installed apps management
    NotFound.jsx  — 404 error page
  App.jsx         — Router setup
  index.css       — Global design system
  main.jsx        — Entry point
```

---

## 🎨 Design

The design is based on the Hero IO Figma design system featuring:
- Clean light background with purple accent color
- Inter font for modern typography
- Responsive grid layouts (4-col → 3-col → 2-col)
- Smooth hover animations and transitions
- Dark navy footer with social links

---

*Built with ❤️ by Sabid — Hero IO © 2025*
