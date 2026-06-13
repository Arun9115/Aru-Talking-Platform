import { useState } from 'react';

export default function StoryCard({ story, index = 0 }) {
  const [liked, setLiked] = useState(false);

  const handleShare = () => alert(`Share link copied for "${story.title}"`);
  const handleComment = () => alert('Comments are a demo feature.');

  return (
    <article
      className="card group animate-fadeUp"
      style={{ animationDelay: `${Math.min(index, 8) * 80}ms` }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <span className="absolute top-3 left-3 text-xs font-semibold bg-brand-600 text-white px-3 py-1 rounded-full">
          {story.category}
        </span>
        {story.trending && (
          <span className="absolute top-3 right-3 text-xs font-semibold bg-amber-500 text-white px-3 py-1 rounded-full">
            🔥 Trending
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg line-clamp-2 mb-1">{story.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-3">
          {story.description}
        </p>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
          <span>By {story.author}</span>
          <span>{story.views} views</span>
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3">
          <button
            onClick={() => setLiked((l) => !l)}
            className={`text-sm font-medium transition ${
              liked ? 'text-brand-600' : 'hover:text-brand-600'
            }`}
          >
            {liked ? '❤️' : '🤍'} {(story.likes + (liked ? 1 : 0)).toLocaleString()}
          </button>
          <button onClick={handleComment} className="text-sm hover:text-brand-600">
            💬 Comment
          </button>
          <button onClick={handleShare} className="text-sm hover:text-brand-600">
            🔗 Share
          </button>
        </div>
      </div>
    </article>
  );
}
