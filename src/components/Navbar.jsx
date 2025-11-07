import { useState } from 'react';
import { Home, Search, User } from 'lucide-react';

export default function Navbar({ onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (section) => {
    setMobileOpen(false);
    onNavigate?.(section);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg" />
            <span className="text-lg font-semibold tracking-tight">NeoShop</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => handleNav('home')} className="inline-flex items-center gap-2 text-slate-700 hover:text-indigo-600 transition-colors">
              <Home size={18} /> Home
            </button>
            <button onClick={() => handleNav('search')} className="inline-flex items-center gap-2 text-slate-700 hover:text-indigo-600 transition-colors">
              <Search size={18} /> Search Product
            </button>
            <button onClick={() => handleNav('auth')} className="inline-flex items-center gap-2 text-slate-700 hover:text-indigo-600 transition-colors">
              <User size={18} /> Sign In
            </button>
          </nav>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-3 border-t border-black/5">
            <div className="flex flex-col gap-2">
              <button onClick={() => handleNav('home')} className="px-3 py-2 text-left rounded-md hover:bg-slate-100">Home</button>
              <button onClick={() => handleNav('search')} className="px-3 py-2 text-left rounded-md hover:bg-slate-100">Search Product</button>
              <button onClick={() => handleNav('auth')} className="px-3 py-2 text-left rounded-md hover:bg-slate-100">Sign In</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
