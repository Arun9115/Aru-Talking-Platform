import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [mode, setMode] = useState('login');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${mode === 'login' ? 'Logged in' : 'Account created'} successfully! (Demo)`);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md card p-8">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg">
            A
          </div>
        </div>
        <h1 className="text-2xl font-extrabold text-center">
          {mode === 'login' ? 'Welcome Back' : 'Create an Account'}
        </h1>
        <p className="text-center text-sm text-slate-500 mb-6">
          {mode === 'login'
            ? 'Login to continue your journey'
            : 'Join thousands of storytellers'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <input required placeholder="Full Name" className="input" />
          )}
          <input required type="email" placeholder="Email" className="input" />
          <div className="relative">
            <input
              required
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="input pr-10 w-full"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute inset-y-0 right-3 flex items-center text-slate-500 hover:text-slate-700"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
          <button className="btn-primary w-full" type="submit">
            {mode === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="my-5 text-center text-xs text-slate-500">OR</div>

        <div className="flex gap-3">
          <button className="flex-1 btn-outline">Google</button>
          <button className="flex-1 btn-outline">Facebook</button>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          {mode === 'login' ? "Don't have an account?" : 'Already have one?'}{' '}
          <button
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="text-brand-600 font-semibold"
          >
            {mode === 'login' ? 'Sign up' : 'Login'}
          </button>
        </p>

        <Link to="/" className="block text-center text-xs mt-3 text-slate-400">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
