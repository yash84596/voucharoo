import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Input } from '@heroui/react';
import ThemeToggle from './toggle';
const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap
                       border-b border-solid border-b-[#e5e7eb] dark:border-b-[#2a3441]
                       bg-white dark:bg-[#141023] px-4 md:px-10 py-3 transition-colors">
      {/* Left: logo + nav */}
      <div className="flex items-center gap-4 md:gap-8">
        <Link to="/" className="flex items-center gap-4">
          <img
            src="src/pictures/voucharoo.png"
            alt="Voucharoo Logo"
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-9">
          <Link to="/buy" className="text-sm font-medium text-[#14191f] dark:text-white hover:text-primary transition-colors">
            Buy
          </Link>
          <Link to="/sell" className="text-sm font-medium text-[#14191f] dark:text-white hover:text-primary transition-colors">
            Sell
          </Link>
          <Link to="/Exchange" className="text-sm font-medium text-[#14191f] dark:text-white hover:text-primary transition-colors">
            Exchange
          </Link>
          <Link to="#" className="text-sm font-medium text-[#14191f] dark:text-white hover:text-primary transition-colors">
            How it Works
          </Link>
        </nav>
      </div>

      {/* Right: search + theme toggle + auth buttons */}
      <div className="flex items-center gap-3 md:gap-4">
        <form onSubmit={handleSearch} className="hidden sm:block">
          <Input
            size="sm"
            radius="lg"
            placeholder="Search vouchers..."
            startContent={<Search className="h-4 w-4 opacity-70" />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-48 md:w-64 xl:w-80"
          />
        </form>
 
        <ThemeToggle /> {/* ✅ Light/Dark toggle */}

        <Button as={Link} to="/signup" size="sm">
          Sign up
        </Button>
        <Button as={Link} to="/login" size="sm" variant="flat">
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
