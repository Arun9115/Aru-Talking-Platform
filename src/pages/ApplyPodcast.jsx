import { useState } from 'react';

// Aru Talking Platform owner WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = '919115099740';

export default function ApplyPodcast() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    topic: '',
    about: '',
  });
  const [videoName, setVideoName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build the message that lands in your WhatsApp
    const lines = [
      '🎙️ *Podcast Application — Aru Talking Platform*',
      '',
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      `📧 *Email:* ${form.email}`,
      `🏷️ *Topic:* ${form.topic}`,
      `📝 *About:* ${form.about}`,
    ];
    if (videoName) {
      lines.push(
        `🎬 *Video:* ${videoName}`,
        '',
        '_(Please attach your video in this chat.)_'
      );
    }

    const text = encodeURIComponent(lines.join('\n'));
    // Open WhatsApp (app on mobile, WhatsApp Web on desktop)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');

    setForm({ name: '', phone: '', email: '', topic: '', about: '' });
    setVideoName('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          Apply to Be on the Podcast
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Share your story with millions. Fill out the form below and our team
          will review your application.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="card p-8 space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <input
            required
            placeholder="Full Name"
            className="input"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            required
            placeholder="Phone Number"
            className="input"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <input
          required
          type="email"
          placeholder="Email Address"
          className="input"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          required
          placeholder="Topic / Theme of your story"
          className="input"
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
        />
        <textarea
          required
          rows="5"
          placeholder="Tell us about yourself and your story..."
          className="input resize-none"
          value={form.about}
          onChange={(e) => setForm({ ...form, about: e.target.value })}
        />
        <input
          type="file"
          accept="video/*"
          className="input"
          onChange={(e) => setVideoName(e.target.files?.[0]?.name || '')}
        />

        <button className="btn-primary w-full">Submit Application</button>
      </form>
    </div>
  );
}
