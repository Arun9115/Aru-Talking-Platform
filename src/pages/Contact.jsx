import { useState } from 'react';

// Aru Talking Platform owner WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = '919115099740';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build the message that lands in your WhatsApp
    const text = encodeURIComponent(
      [
        '✉️ *New Message — Aru Talking Platform*',
        '',
        `👤 *Name:* ${form.name}`,
        `📧 *Email:* ${form.email}`,
        `💬 *Message:* ${form.message}`,
      ].join('\n')
    );

    // Open WhatsApp (app on mobile, WhatsApp Web on desktop)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');

    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Get in Touch</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Have a story to share or a question to ask? We're all ears.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact info */}
        <div className="space-y-5">
          <a
            href="tel:+919115099740"
            className="card p-6 flex items-center gap-4 hover:border-brand-600"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white text-2xl flex items-center justify-center">
              📞
            </div>
            <div>
              <div className="text-sm text-slate-500">Call us</div>
              <div className="font-bold text-lg">+91 9115099740</div>
            </div>
          </a>

          <a
            href="mailto:arunyadavjk9115@gmail.com"
            className="card p-6 flex items-center gap-4 hover:border-brand-600"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white text-2xl flex items-center justify-center">
              ✉️
            </div>
            <div>
              <div className="text-sm text-slate-500">Email us</div>
              <div className="font-bold text-lg break-all">
                arunyadavjk9115@gmail.com
              </div>
            </div>
          </a>

          <div className="card p-6">
            <h3 className="font-bold mb-2">Office Hours</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Monday – Saturday: 10:00 AM – 7:00 PM IST
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card p-8 space-y-4">
          <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
          <input
            required
            placeholder="Your Name"
            className="input"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            className="input"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            required
            rows="5"
            placeholder="Your Message"
            className="input resize-none"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>
          {sent && (
            <div className="p-3 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm text-center">
              ✅ Message sent successfully! We'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
