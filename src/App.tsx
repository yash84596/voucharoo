import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import MobileMenu from './components/MobileMenu';
import BuyPages from './Pages.tsx/BuyPages'; // Adjust path as needed
import Sellpages from './Pages.tsx/Sellpages'; // ✅ Adjust path as needed
import Exchanges from './Pages.tsx/Exchanges' // Adjust path as needed

function App() {
  return (
    <Router>
      <div 
        className="relative flex size-full min-h-screen flex-col bg-[#14191f] overflow-x-hidden"
        style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          {/* Header with integrated mobile menu */}
          <div className="relative">
            <Header />
            <div className="absolute top-3 right-4 md:hidden">
              <MobileMenu />
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/buy" element={<BuyPages />} />
              <Route path="/sell" element={<Sellpages />} />
              <Route path="/Exchange" element={<Exchanges />} />
              {/* Add other routes like /how-it-works if needed */}
              {/* Add other routes like /exchange, /how-it-works if needed */}
              {/* Add other routes like /sell, /exchange if needed */}
            </Routes>
          </main>

          {/* Footer placeholder for future content */}
          <footer className="mt-auto">
            {/* Footer content can be added here later */}
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
