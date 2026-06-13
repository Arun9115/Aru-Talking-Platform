export default function Dashboard() {
  const stats = [
    { label: 'Total Views', value: '2.4M', change: '+12.5%', icon: '👁️' },
    { label: 'Followers', value: '128K', change: '+8.2%', icon: '👥' },
    { label: 'Stories Published', value: '42', change: '+3', icon: '📖' },
    { label: 'Engagement', value: '87%', change: '+5.1%', icon: '❤️' },
  ];

  const topStories = [
    { title: 'From Village Boy to IAS Officer', views: '1.2M', likes: 45200 },
    { title: 'I Quit My 50LPA Job', views: '980K', likes: 38900 },
    { title: 'The Day I Lost Everything', views: '2.1M', likes: 72100 },
    { title: 'From Street Seller to Shark Tank', views: '3.4M', likes: 112400 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-extrabold">Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Welcome back, Arun 👋
          </p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <button className="chip">This week</button>
          <button className="chip bg-brand-600 text-white border-brand-600">
            This month
          </button>
          <button className="chip">All time</button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="card p-6">
            <div className="flex justify-between items-start">
              <span className="text-3xl">{s.icon}</span>
              <span className="text-xs font-semibold text-green-500">
                {s.change}
              </span>
            </div>
            <div className="text-3xl font-extrabold mt-4">{s.value}</div>
            <div className="text-sm text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card p-6">
          <h3 className="font-bold mb-4">Views Overview</h3>
          {/* Fake bar chart */}
          <div className="flex items-end gap-2 h-48">
            {[40, 65, 50, 80, 60, 95, 75, 88, 72, 90, 85, 100].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 bg-gradient-to-t from-brand-600 to-brand-400 rounded-t-lg hover:opacity-80 transition"
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-slate-500 mt-2">
            {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="font-bold mb-4">Top Stories</h3>
          <ul className="space-y-4">
            {topStories.map((s, i) => (
              <li key={i} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm line-clamp-1">
                    {s.title}
                  </div>
                  <div className="text-xs text-slate-500">
                    {s.views} views • ❤️ {s.likes.toLocaleString()}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
