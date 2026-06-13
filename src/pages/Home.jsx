import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import StoryCard from '../components/StoryCard.jsx';
import { stories, categories } from '../data/stories.js';

export default function Home({ onFeatured }) {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = useMemo(() => {
    return stories.filter((s) => {
      const matchCat = cat === 'All' || s.category === cat;
      const matchQ =
        !query ||
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [query, cat]);

  const trending = stories.filter((s) => s.trending);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-rose-500 to-orange-400 opacity-90" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, white 2px, transparent 2px), radial-gradient(circle at 80% 70%, white 2px, transparent 2px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Floating decorative blobs */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-2xl animate-float pointer-events-none" />
        <div
          className="absolute bottom-0 -left-10 w-52 h-52 rounded-full bg-amber-300/20 blur-2xl animate-float pointer-events-none"
          style={{ animationDelay: '1.5s' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 text-white">
          <div className="max-w-2xl">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur text-sm font-medium animate-fadeUp">
              ✨ India's #1 Storytelling Platform
            </span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fadeUp"
              style={{ animationDelay: '0.1s' }}
            >
              Har Story <span className="italic">Important</span> Hai
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl opacity-90 mb-8 animate-fadeUp"
              style={{ animationDelay: '0.2s' }}
            >
              Real stories of real people. Discover motivation, career journeys,
              raw failures and the lessons that changed lives — all in one
              place.
            </p>
            <div
              className="flex flex-wrap gap-3 animate-fadeUp"
              style={{ animationDelay: '0.3s' }}
            >
              <button onClick={onFeatured} className="btn-primary bg-white text-brand-700 hover:bg-slate-100 shadow-xl">
                🎤 Get Featured
              </button>
              <Link
                to="/podcast"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border-2 border-white bg-white/10 backdrop-blur font-semibold text-white hover:bg-white hover:text-brand-700 transition-all"
              >
                ▶ Watch Podcast
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="relative flex-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search stories..."
              className="input pl-14"
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              🔍
            </span>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`chip whitespace-nowrap ${
                  cat === c ? 'bg-brand-600 text-white border-brand-600' : ''
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Trending */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            🔥 Trending Now
          </h2>
          <span className="text-sm text-slate-500">{trending.length} stories</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {trending.map((s, i) => (
            <StoryCard key={s.id} story={s} index={i} />
          ))}
        </div>

        {/* Featured */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            ⭐ Featured Stories
          </h2>
          <span className="text-sm text-slate-500">{filtered.length} results</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((s, i) => (
            <StoryCard key={s.id} story={s} index={i} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-16 text-slate-500">
              No stories match your search.
            </div>
          )}
        </div>
      </section>

      {/* About / Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              About Aru Talking Platform
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Founded by <strong>Arun Yadav</strong>, Aru Talking Platform is on
              a mission to amplify the voices of everyday heroes. We believe
              that every story — whether of struggle, success, or simple
              moments — has the power to inspire change.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Our mission is simple: <strong>empower people</strong> by giving
              them a platform where their stories are heard, celebrated, and
              remembered.
            </p>
            <div className="mt-6 flex gap-3">
              <button onClick={onFeatured} className="btn-primary">Share Your Story</button>
              <Link to="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '10M+', l: 'Listeners' },
              { n: '5K+', l: 'Stories' },
              { n: '200+', l: 'Podcasts' },
              { n: '50+', l: 'Cities' },
            ].map((s) => (
              <div
                key={s.l}
                className="card p-6 text-center bg-gradient-to-br from-brand-50 to-white dark:from-slate-900 dark:to-slate-950"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-brand-600">
                  {s.n}
                </div>
                <div className="text-sm text-slate-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
