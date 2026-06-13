import { Link } from 'react-router-dom';

export default function Logo({ to = '/', showTagline = true, size = 'md' }) {
  const scale = {
    sm: { box: 'w-9 h-9 rounded-lg', bar: 'w-[2.5px]', ru: 'text-[26px]', a: 'text-[14px]', word: 'text-[15px]', tag: 'text-[8px]' },
    md: { box: 'w-12 h-12 rounded-xl', bar: 'w-[3px]', ru: 'text-[38px]', a: 'text-[20px]', word: 'text-lg', tag: 'text-[9px]' },
    lg: { box: 'w-14 h-14 rounded-2xl', bar: 'w-[3.5px]', ru: 'text-5xl', a: 'text-2xl', word: 'text-xl', tag: 'text-[10px]' },
  }[size];

  return (
    <Link to={to} className="flex items-center gap-2.5 group select-none">
      {/* Waveform icon mark */}
      <div
        className={`relative ${scale.box} bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-600/30 group-hover:shadow-brand-600/50 group-hover:scale-105 transition-all duration-300 overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0" />
        <div className="relative flex items-center gap-[2px] h-1/2">
          <span className={`${scale.bar} h-[40%] bg-white/90 rounded-full origin-center animate-wave-1`} />
          <span className={`${scale.bar} h-full bg-white rounded-full origin-center animate-wave-2`} />
          <span className={`${scale.bar} h-[65%] bg-white/90 rounded-full origin-center animate-wave-3`} />
          <span className={`${scale.bar} h-[45%] bg-white/80 rounded-full origin-center animate-wave-4`} />
        </div>
      </div>

      {/* Wordmark */}
      <div className="leading-none">
        <div className="flex items-baseline font-display tracking-tight">
          <span
            className={`${scale.a} font-normal text-slate-500 dark:text-slate-400 lowercase`}
          >
            a
          </span>
          <span
            className={`${scale.ru} font-black uppercase bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 bg-clip-text text-transparent -ml-[1px] leading-none`}
          >
            RU
          </span>
          <span className="ml-1 w-1.5 h-1.5 rounded-full bg-brand-600 self-end mb-[4px]" />
          <span
            className={`ml-2 ${scale.word} font-semibold text-slate-800 dark:text-slate-100`}
          >
            Talking
          </span>
        </div>
        {showTagline && (
          <div
            className={`${scale.tag} text-slate-500 dark:text-slate-400 uppercase tracking-[0.35em] mt-1 font-medium`}
          >
            The Podcast Platform
          </div>
        )}
      </div>
    </Link>
  );
}
