import { useState } from 'react';

// Aru Talking Platform owner WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = '919115099740';

export default function Upload() {
  const [form, setForm] = useState({
    title: '',
    category: 'Motivation',
    description: '',
  });
  const [mediaName, setMediaName] = useState('');
  const [coverName, setCoverName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build the message that lands in your WhatsApp
    const lines = [
      '🆕 *New Story Submission — Aru Talking Platform*',
      '',
      `📌 *Title:* ${form.title}`,
      `🏷️ *Category:* ${form.category}`,
      `📝 *Description:* ${form.description}`,
    ];

    if (coverName) lines.push(`🖼️ *Cover file:* ${coverName}`);
    if (mediaName) lines.push(`🎬 *Media file:* ${mediaName}`);

    if (coverName || mediaName) {
      lines.push('', '_(Please attach the above file(s) in this chat.)_');
    }

    const text = encodeURIComponent(lines.join('\n'));
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    // Open WhatsApp (app on mobile, WhatsApp Web on desktop)
    window.open(waUrl, '_blank');

    setForm({ title: '', category: 'Motivation', description: '' });
    setMediaName('');
    setCoverName('');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold mb-2">Upload Your Story</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        Share your journey with millions of listeners.
      </p>

      <form onSubmit={handleSubmit} className="card p-8 space-y-5">
        <div>
          <label className="text-sm font-medium mb-1 block">Story Title</label>
          <input
            required
            className="input"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Give your story a catchy title"
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Category</label>
          <select
            className="input"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option>Motivation</option>
            <option>Career</option>
            <option>Life</option>
            <option>Failure</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Description</label>
          <textarea
            required
            rows="5"
            className="input resize-none"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Tell us what your story is about..."
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            className="input"
            onChange={(e) => setCoverName(e.target.files?.[0]?.name || '')}
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Audio / Video File</label>
          <input
            type="file"
            accept="audio/*,video/*"
            className="input"
            onChange={(e) => setMediaName(e.target.files?.[0]?.name || '')}
          />
        </div>

        <button className="btn-primary w-full" type="submit">
          🚀 Publish Story
        </button>
      </form>
    </div>
  );
}
