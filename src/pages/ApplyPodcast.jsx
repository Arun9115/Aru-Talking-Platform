import { useState } from 'react';

export default function ApplyPodcast() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    topic: '',
    about: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Application received! We'll reach out within 48 hours, ${form.name}.`);
    setForm({ name: '', phone: '', email: '', topic: '', about: '' });
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
        <input type="file" accept="video/*" className="input" />

        <button className="btn-primary w-full">Submit Application</button>
      </form>
    </div>
  );
}
