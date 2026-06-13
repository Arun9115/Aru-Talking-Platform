import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
            <Logo size="md" />
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Har Story Important Hai — empowering people by sharing real-life
            stories that matter.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/podcast">Podcast</Link></li>
            <li><Link to="/upload">Upload Story</Link></li>
            <li><Link to="/apply-podcast">Apply for Podcast</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>About Us</li>
            <li>CEO: Arun Yadav</li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Get in touch</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>📞 <a href="tel:+919115099740">+91 9115099740</a></li>
            <li>✉️ <a href="mailto:arunyadavjk9115@gmail.com">arunyadavjk9115@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-800 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Aru Talking Platform. All rights reserved.
      </div>
    </footer>
  );
}
