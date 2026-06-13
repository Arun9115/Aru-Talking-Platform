import StoryCard from '../components/StoryCard.jsx';
import { stories } from '../data/stories.js';

export default function Profile() {
  const user = {
    name: 'Arun Yadav',
    role: 'Founder & Storyteller',
    bio: 'Building a platform where every voice matters. CEO of Aru Talking Platform.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
    cover: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1600',
    stats: { stories: 42, followers: '128K', following: 320, likes: '1.2M' },
  };

  const myStories = stories.slice(0, 4);

  return (
    <div>
      <div className="relative h-60 md:h-80">
        <img src={user.cover} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative">
        <div className="card p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-900 shadow-xl object-cover"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-extrabold">{user.name}</h1>
            <p className="text-brand-600 font-medium">{user.role}</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-lg">
              {user.bio}
            </p>
          </div>
          <button className="btn-primary">Follow</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {Object.entries(user.stats).map(([k, v]) => (
            <div key={k} className="card p-5 text-center">
              <div className="text-2xl font-extrabold text-brand-600">{v}</div>
              <div className="text-xs uppercase tracking-wider text-slate-500 mt-1">
                {k}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-extrabold mt-10 mb-5">My Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
          {myStories.map((s) => (
            <StoryCard key={s.id} story={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
