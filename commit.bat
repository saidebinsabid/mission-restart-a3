@echo off
git add src/index.css src/pages/Apps.jsx src/components/Navbar.jsx
git commit -m "feat: add page fade-in animation, mobile navbar improvements, and CSS design system"
git add src/pages/AppDetails.jsx
git commit -m "feat: add App Details page with Recharts rating chart and install/localStorage feature"
git add src/pages/Installation.jsx
git commit -m "feat: add Installation page with uninstall, sort by downloads, and empty state"
git add src/pages/NotFound.jsx README.md
git commit -m "feat: add 404 error page, App Not Found state, and update README"
git add .
git commit -m "chore: cleanup commit.bat and finalize project"
git push origin main
