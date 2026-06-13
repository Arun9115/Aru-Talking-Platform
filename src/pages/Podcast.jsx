import { useState } from 'react';
import { podcasts } from '../data/stories.js';

export default function Podcast() {
  const [active, setActive] = useState(podcasts[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          🎙️ The Aru Podcast
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Real conversations with real people. Hosted by Arun Yadav.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Player */}
        <div className="lg:col-span-2 card p-0 overflow-hidden">
          <div className="relative aspect-video bg-black">
            <img
              src={active.cover}
              alt={active.title}
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-brand-600 flex items-center justify-center text-3xl text-white shadow-2xl animate-pulse">
                ▶
              </div>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-1">{active.title}</h2>
            <p className="text-sm text-slate-500 mb-4">
              Host: {active.host} • {active.duration}
            </p>
            <audio controls className="w-full" src={active.audio}>
              Your browser does not support audio.
            </audio>
          </div>
        </div>

        {/* Episode list */}
        <div>
          <h3 className="font-bold mb-4">Episodes</h3>
          <div className="space-y-3">
            {podcasts.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p)}
                className={`w-full text-left flex gap-3 p-3 rounded-2xl border transition ${
                  active.id === p.id
                    ? 'border-brand-600 bg-brand-50 dark:bg-slate-900'
                    : 'border-slate-200 dark:border-slate-800 hover:border-brand-600'
                }`}
              >
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold line-clamp-2">{p.title}</div>
                  <div className="text-xs text-slate-500 mt-1">
                    {p.host} • {p.duration}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
