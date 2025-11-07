import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CheckoutDrawer from './components/CheckoutDrawer';
import AuthPanels from './components/AuthPanels';
import TransactionHistory from './components/TransactionHistory';

function App() {
  const [section, setSection] = useState('home');
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const onCheckout = (product) => {
    setCheckoutProduct(product);
    setCheckoutOpen(true);
  };

  const onCompletePurchase = (tx) => {
    // Simulate order completion after delay
    setTransactions((prev) => [{ ...tx }, ...prev]);
    setTimeout(() => {
      setTransactions((prev) => prev.map((t) => t === tx ? { ...t, status: 'Completed' } : t));
    }, 2000);
    // Navigate to history after purchase
    const el = document.getElementById('history');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const content = useMemo(() => {
    return (
      <>
        <Hero />
        <ProductGrid onCheckout={onCheckout} />
        <TransactionHistory items={transactions} />
        <AuthPanels onSignedIn={() => setSection('home')} />
      </>
    );
  }, [transactions]);

  const handleNavigate = (key) => {
    setSection(key);
    const id = key === 'home' ? undefined : key === 'search' ? 'search' : 'signup';
    if (id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onNavigate={handleNavigate} />
      {content}
      <CheckoutDrawer
        product={checkoutProduct}
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onComplete={onCompletePurchase}
      />
      <footer className="border-t border-black/5 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} NeoShop. All rights reserved.</p>
          <div className="text-sm text-slate-600">Built for modern digital commerce.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
