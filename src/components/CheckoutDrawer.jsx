import { useEffect, useState } from 'react';

export default function CheckoutDrawer({ product, open, onClose, onComplete }) {
  const [username, setUsername] = useState('');
  const [variant, setVariant] = useState('');

  useEffect(() => {
    if (product) setVariant(product.variants?.[0] ?? '');
  }, [product]);

  const submit = (e) => {
    e.preventDefault();
    if (!username) return;
    onComplete?.({ product, username, variant, status: 'Processing', createdAt: new Date().toISOString() });
    setUsername('');
    onClose?.();
  };

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div onClick={onClose} className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute right-0 top-0 h-full w-full sm:max-w-md bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-black/10 flex items-center justify-between">
          <h3 className="font-semibold">Checkout</h3>
          <button onClick={onClose} className="rounded-md p-2 hover:bg-slate-100">✕</button>
        </div>
        <form onSubmit={submit} className="p-6 grid gap-4">
          {product && (
            <div className="flex items-center gap-3">
              <img src={product.photo} alt={product.title} className="h-16 w-16 rounded object-cover" />
              <div>
                <div className="font-medium">{product.title}</div>
                <div className="text-sm text-slate-600">${product.price}</div>
              </div>
            </div>
          )}
          <div>
            <label className="text-sm text-slate-600">Variant</label>
            <select value={variant} onChange={(e)=>setVariant(e.target.value)} className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 shadow-sm">
              {product?.variants?.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm text-slate-600">Username</label>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter your username" required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-500 transition">Pay & Download</button>
          <p className="text-xs text-slate-500">By continuing, you agree to the Terms and acknowledge instant digital delivery.</p>
        </form>
      </div>
    </div>
  );
}
