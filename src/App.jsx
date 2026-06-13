import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import GetFeaturedModal from './components/GetFeaturedModal.jsx';
import Home from './pages/Home.jsx';
import Podcast from './pages/Podcast.jsx';
import Upload from './pages/Upload.jsx';
import Profile from './pages/Profile.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Contact from './pages/Contact.jsx';
import ApplyPodcast from './pages/ApplyPodcast.jsx';

export default function App() {
  const [featuredOpen, setFeaturedOpen] = useState(false);
  const openFeatured = () => setFeaturedOpen(true);
  const closeFeatured = () => setFeaturedOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onFeatured={openFeatured} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onFeatured={openFeatured} />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply-podcast" element={<ApplyPodcast />} />
        </Routes>
      </main>
      <Footer />
      <GetFeaturedModal open={featuredOpen} onClose={closeFeatured} />
    </div>
  );
}
