import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroUIProvider } from '@heroui/react';
import Header from './components/Header';
import Hero from './components/Hero';
import MobileMenu from './components/MobileMenu';
import BuyPages from './Pages.tsx/BuyPages';
import Sellpages from './Pages.tsx/Sellpages';
import Exchanges from './Pages.tsx/Exchanges';
import SignUp from './auth/signup';
import Login from './auth/login';


function App() {
  return (
    <HeroUIProvider>
      <Router>
        <div
          className="relative flex size-full min-h-screen flex-col
                     bg-white text-[#14191f] dark:bg-[#14191f] dark:text-white
                     transition-colors duration-500 overflow-x-hidden"
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
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </main>

            {/* Footer placeholder */}
            <footer className="mt-auto">{/* Future content */}</footer>
          </div>
        </div>
      </Router>
    </HeroUIProvider>
  );
}

export default App;
