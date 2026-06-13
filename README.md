# Aru Talking Platform

> **Har Story Important Hai** — a modern storytelling & podcast platform built in React.

Frontend-only demo inspired by Josh Talks. Founder & CEO: **Arun Yadav**.

## Tech Stack

- React 18 (functional components + hooks)
- React Router v6
- Tailwind CSS (with dark mode)
- Vite

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Folder Structure

```
.
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── context
    │   └── ThemeContext.jsx      # Dark/light mode provider
    ├── data
    │   └── stories.js            # Static JSON data (stories + podcasts)
    ├── components
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── StoryCard.jsx
    │   └── GetFeaturedModal.jsx
    └── pages
        ├── Home.jsx              # Hero + trending + featured stories
        ├── Podcast.jsx           # Audio/video player UI
        ├── Upload.jsx            # Upload story form (demo)
        ├── Profile.jsx           # Static user profile
        ├── Dashboard.jsx         # Demo analytics
        ├── Login.jsx             # Login / Signup (UI only)
        ├── Contact.jsx           # Contact form + info
        └── ApplyPodcast.jsx      # Get Featured form page
```

## Features

- 🏠 Home with hero, search, category filters, trending & featured stories
- 🎙️ Podcast page with episode list and audio player
- 📝 Upload story form (demo alert)
- 👤 Static user profile
- 📊 Dashboard with demo analytics & chart
- 🔐 Login / Signup UI (no auth)
- 📞 Contact page (tap-to-call, tap-to-email)
- 🎤 "Get Featured" modal (Name, Phone, Email, Story, Video)
- 🌙 Dark / Light mode toggle
- 📱 Fully responsive

## Contact

- 📞 +91 9115099740
- ✉️ arunyadavjk9115@gmail.com

---

© Aru Talking Platform. All rights reserved.
