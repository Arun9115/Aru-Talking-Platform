import { useEffect, useRef, useState } from 'react';
import { podcasts } from '../data/stories.js';

export default function Podcast() {
  const [active, setActive] = useState(podcasts[0]);
  const [playing, setPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const videoRef = useRef(null);

  // When the selected episode changes, reset the player
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    setPlaying(false);
    setShowOverlay(true);
  }, [active]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      const playPromise = video.play();
      if (playPromise?.catch) {
        // Autoplay/gesture errors shouldn't crash the UI
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8 sm:mb-10 animate-fadeUp">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
          🎙️ The Aru Podcast
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Real conversations with real people. Hosted by Arun Yadav.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Player */}
        <div className="lg:col-span-2 card p-0 overflow-hidden animate-scaleIn">
          <div className="relative aspect-video bg-black group">
            <video
              ref={videoRef}
              key={active.id}
              className="w-full h-full object-contain bg-black"
              poster={active.cover}
              controls={!showOverlay}
              playsInline
              preload="metadata"
              onPlay={() => {
                setPlaying(true);
                setShowOverlay(false);
              }}
              onPause={() => setPlaying(false)}
              onEnded={() => {
                setPlaying(false);
                setShowOverlay(true);
              }}
            >
              <source src={active.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom play overlay (hidden once playback starts) */}
            {showOverlay && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label={`Play ${active.title}`}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
              >
                <span className="relative flex items-center justify-center">
                  <span className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-600 animate-pulseRing" />
                  <span className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-600 flex items-center justify-center text-2xl sm:text-3xl text-white shadow-2xl pl-1">
                    ▶
                  </span>
                </span>
              </button>
            )}
          </div>
          <div className="p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-1">{active.title}</h2>
            <p className="text-sm text-slate-500 mb-4">
              Host: {active.host} • {active.duration}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button onClick={togglePlay} className="btn-primary text-sm">
                {playing ? '⏸ Pause' : '▶ Play'} Video
              </button>
              <span className="text-xs text-slate-500">
                Listen to the audio version below
              </span>
            </div>

            <audio controls className="w-full mt-4" src={active.audio}>
              Your browser does not support audio.
            </audio>
          </div>
        </div>

        {/* Episode list */}
        <div className="animate-slideInRight">
          <h3 className="font-bold mb-4">Episodes</h3>
          <div className="space-y-3">
            {podcasts.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p)}
                className={`w-full text-left flex gap-3 p-3 rounded-2xl border transition hover:-translate-y-0.5 ${
                  active.id === p.id
                    ? 'border-brand-600 bg-brand-50 dark:bg-slate-900'
                    : 'border-slate-200 dark:border-slate-800 hover:border-brand-600'
                }`}
              >
                <div className="relative shrink-0">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover"
                  />
                  {active.id === p.id && playing && (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl">
                      <span className="flex items-end gap-[2px] h-4">
                        <span className="w-[3px] h-full bg-white rounded-full origin-bottom animate-wave-1" />
                        <span className="w-[3px] h-full bg-white rounded-full origin-bottom animate-wave-2" />
                        <span className="w-[3px] h-full bg-white rounded-full origin-bottom animate-wave-3" />
                      </span>
                    </span>
                  )}
                </div>
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
