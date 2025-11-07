export default function TransactionHistory({ items = [] }) {
  return (
    <section id="history" className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Transaction History</h2>
          <p className="text-slate-600">Track your orders and download when ready.</p>
        </div>
        {items.length === 0 ? (
          <div className="rounded-xl border border-black/10 bg-white p-6 text-slate-600">No transactions yet.</div>
        ) : (
          <div className="grid gap-4">
            {items.map((t, idx) => (
              <div key={idx} className="rounded-xl border border-black/10 bg-white p-4 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={t.product.photo} alt={t.product.title} className="h-14 w-14 rounded object-cover" />
                  <div>
                    <div className="font-medium">{t.product.title} <span className="text-xs text-slate-500">({t.variant})</span></div>
                    <div className="text-sm text-slate-600">User: {t.username}</div>
                    <div className="text-xs text-slate-500">{new Date(t.createdAt).toLocaleString()}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${t.status === 'Completed' ? 'text-emerald-600' : t.status === 'Processing' ? 'text-amber-600' : 'text-slate-600'}`}>{t.status}</div>
                  <button className="mt-1 text-xs text-indigo-600 hover:underline">View details</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
