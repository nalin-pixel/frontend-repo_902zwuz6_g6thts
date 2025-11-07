import { useMemo, useState } from 'react';

const mockProducts = [
  { id: 1, title: 'Cyber HUD UI Kit', description: 'Futuristic overlay pack for streamers and games', category: 'UI Kits', price: 19, bestSeller: true, newArrival: false, variants: ['Standard', 'Pro'], photo: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, title: 'Voxel Terrain Pack', description: 'Blocky world assets for sandbox games', category: 'Assets', price: 12, bestSeller: false, newArrival: true, variants: ['PNG', 'GLB'], photo: 'https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, title: 'Retro Synth Loops', description: '80s-inspired music loops for trailers', category: 'Audio', price: 9, bestSeller: true, newArrival: true, variants: ['WAV', 'MP3'], photo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, title: 'Speedrun Portfolio Theme', description: 'Minimal, fast portfolio template', category: 'Themes', price: 24, bestSeller: false, newArrival: false, variants: ['Light', 'Dark'], photo: 'https://images.unsplash.com/photo-1480623826718-27f3f57b5742?q=80&w=1600&auto=format&fit=crop' },
];

export default function ProductGrid({ onCheckout }) {
  const [category, setCategory] = useState('All');
  const [filter, setFilter] = useState('none');
  const [query, setQuery] = useState('');

  const categories = useMemo(() => ['All', ...Array.from(new Set(mockProducts.map(p => p.category)))], []);

  const filtered = useMemo(() => {
    let items = mockProducts.filter(p => (category === 'All' || p.category === category) && p.title.toLowerCase().includes(query.toLowerCase()));

    switch (filter) {
      case 'low':
        items = items.sort((a,b) => a.price - b.price);
        break;
      case 'high':
        items = items.sort((a,b) => b.price - a.price);
        break;
      case 'best':
        items = items.filter(p => p.bestSeller);
        break;
      case 'new':
        items = items.filter(p => p.newArrival);
        break;
      default:
        break;
    }
    return items;
  }, [category, filter, query]);

  return (
    <section id="search" className="relative py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Browse Products</h2>
            <p className="text-slate-600">Filter by category, sort by price or popularity.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search..." className="h-10 w-44 rounded-md border border-black/10 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <select value={category} onChange={(e)=>setCategory(e.target.value)} className="h-10 rounded-md border border-black/10 px-3 shadow-sm">
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={filter} onChange={(e)=>setFilter(e.target.value)} className="h-10 rounded-md border border-black/10 px-3 shadow-sm">
              <option value="none">All</option>
              <option value="low">Lower Price</option>
              <option value="high">Highest Price</option>
              <option value="best">Best Seller</option>
              <option value="new">New Arrival</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(p => (
            <article key={p.id} className="group rounded-xl border border-black/10 bg-white shadow-sm overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={p.photo} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold tracking-tight">{p.title}</h3>
                  <span className="font-bold">${p.price}</span>
                </div>
                <p className="text-sm text-slate-600 line-clamp-2">{p.description}</p>
                <div className="text-xs text-slate-500">Category: {p.category}</div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.variants.map(v => (
                    <span key={v} className="rounded-full bg-slate-100 px-2 py-1 text-xs">{v}</span>
                  ))}
                </div>
                <button onClick={() => onCheckout?.(p)} className="mt-2 w-full inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-500 transition">
                  Checkout
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
