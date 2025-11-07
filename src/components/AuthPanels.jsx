import { useState } from 'react';

export default function AuthPanels({ onSignedIn }) {
  const [mode, setMode] = useState('signin');
  const [signIn, setSignIn] = useState({ email: '', password: '' });
  const [signUp, setSignUp] = useState({ name: '', email: '', phone: '', password: '' });

  const submitSignIn = (e) => {
    e.preventDefault();
    onSignedIn?.({ email: signIn.email });
  };

  const submitSignUp = (e) => {
    e.preventDefault();
    setMode('signin');
  };

  return (
    <section id="signup" className="py-14 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Join NeoShop</h2>
          <div className="flex gap-2">
            <button onClick={() => setMode('signin')} className={`px-3 py-1.5 rounded-md text-sm border ${mode==='signin' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-black/10'}`}>Sign In</button>
            <button onClick={() => setMode('signup')} className={`px-3 py-1.5 rounded-md text-sm border ${mode==='signup' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-black/10'}`}>Sign Up</button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {mode === 'signin' ? (
            <form onSubmit={submitSignIn} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="grid gap-4">
                <div>
                  <label className="text-sm text-slate-600">Email</label>
                  <input type="email" value={signIn.email} onChange={(e)=>setSignIn(s=>({...s, email:e.target.value}))} required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="text-sm text-slate-600">Password</label>
                  <input type="password" value={signIn.password} onChange={(e)=>setSignIn(s=>({...s, password:e.target.value}))} required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-500 transition">Sign In</button>
              </div>
            </form>
          ) : (
            <form onSubmit={submitSignUp} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="grid gap-4">
                <div>
                  <label className="text-sm text-slate-600">Name</label>
                  <input value={signUp.name} onChange={(e)=>setSignUp(s=>({...s, name:e.target.value}))} required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="text-sm text-slate-600">Email</label>
                  <input type="email" value={signUp.email} onChange={(e)=>setSignUp(s=>({...s, email:e.target.value}))} required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="text-sm text-slate-600">Phone Number</label>
                  <input value={signUp.phone} onChange={(e)=>setSignUp(s=>({...s, phone:e.target.value}))} required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="text-sm text-slate-600">Password</label>
                  <input type="password" value={signUp.password} onChange={(e)=>setSignUp(s=>({...s, password:e.target.value}))} required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-500 transition">Create Account</button>
              </div>
            </form>
          )}

          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Why NeoShop?</h3>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 text-sm">
              <li>Modern, clean design with gaming flair</li>
              <li>Secure instant downloads after purchase</li>
              <li>Free lifetime updates for select items</li>
              <li>Trusted by creators and developers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
