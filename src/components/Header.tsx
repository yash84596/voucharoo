import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add search functionality here
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2a3441] bg-[#141023] px-4 md:px-10 py-3">
      <div className="flex items-center gap-4 md:gap-8">
        <div className="flex items-center gap-4 text-white">
          <Link to="/" className="flex items-center gap-4">
            <div>
              <img src="src/pictures/voucharoo.png" alt="Voucharoo Logo" className="h-20 w-auto" />
            </div>
            {/* <h2 className="text-white text-lg md:text-xl font-bold leading-tight tracking-[-0.015em]">
              Voucharoo
            </h2> */}
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-9">
          <Link 
            className="text-white text-sm font-medium leading-normal hover:text-[#d7e3f3] transition-colors cursor-pointer" 
            to="/buy"
          >
            Buy
          </Link>
          <Link
            className="text-white text-sm font-medium leading-normal hover:text-[#d7e3f3] transition-colors cursor-pointer" 
            to="/sell"
          >
            Sell
          </Link>
          <Link
            className="text-white text-sm font-medium leading-normal hover:text-[#d7e3f3] transition-colors cursor-pointer" 
            to="/Exchange"
          >
            Exchange
          </Link>
          <Link
            className="text-white text-sm font-medium leading-normal hover:text-[#d7e3f3] transition-colors cursor-pointer" 
            to="#"
          >
            How it Works
          </Link>
        </nav>

      </div>

      <div className="flex flex-1 justify-end gap-2 md:gap-4 lg:gap-8 items-center">
        <form onSubmit={handleSearch} className="hidden sm:block">
          <div className="flex w-full max-w-xs lg:max-w-sm xl:max-w-md">
            <div className="text-[#9babbf] flex border-none bg-[#2a3441] items-center justify-center pl-3 rounded-l-xl">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search vouchers..."
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-white focus:outline-0 focus:ring-2 focus:ring-[#d7e3f3] border-none bg-[#2a3441] h-10 placeholder:text-[#9babbf] px-4 text-sm font-normal leading-normal"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>

        <div className="flex gap-2">
          <button className="flex min-w-[60px] md:min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 md:h-10 px-3 md:px-4 bg-[#d7e3f3] text-[#14191f] text-xs md:text-sm font-bold leading-normal tracking-[0.015em] hover:bg-white transition-colors">
            <span className="truncate">Sign up</span>
          </button>
          <button className="flex min-w-[60px] md:min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 md:h-10 px-3 md:px-4 bg-[#2a3441] text-white text-xs md:text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#3a4451] transition-colors">
            <span className="truncate">Login</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
