import { useState } from 'react';

export default function GetFeaturedModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    summary: '',
    video: '',
  });

  if (!open) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `🎉 Thank you ${form.name}! Your story has been submitted. Our team will contact you shortly.`
    );
    setForm({ name: '', phone: '', email: '', summary: '', video: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeUp">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-6 bg-gradient-to-br from-brand-600 to-brand-700 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold">Get Featured</h3>
              <p className="text-sm opacity-90">
                Share your story on Aru Talking Platform
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              ✕
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="input"
          />
          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="input"
          />
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="input"
          />
          <textarea
            required
            name="summary"
            value={form.summary}
            onChange={handleChange}
            placeholder="Tell us your story (brief summary)"
            rows="4"
            className="input resize-none"
          />
          <label className="block">
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Upload Intro Video (UI only)
            </span>
            <input
              type="file"
              accept="video/*"
              className="input mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-brand-600 file:text-white file:font-medium"
            />
          </label>
          <button type="submit" className="btn-primary w-full">
            Submit Story
          </button>
        </form>
      </div>
    </div>
  );
}
