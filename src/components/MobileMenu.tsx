import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mobile search:', searchQuery);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden text-white p-2 hover:bg-[#2a3441] rounded-lg transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#14191f] border-t border-[#2a3441] z-50">
          <div className="px-4 py-6 space-y-6">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="w-full">
              <div className="flex w-full">
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

            {/* Mobile Navigation */}
            <nav className="flex flex-col gap-4">
              <a
                className="text-white text-base font-medium leading-normal hover:text-[#d7e3f3] transition-colors py-2"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Buy
              </a>
              <a
                className="text-white text-base font-medium leading-normal hover:text-[#d7e3f3] transition-colors py-2"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Sell
              </a>
              <a
                className="text-white text-base font-medium leading-normal hover:text-[#d7e3f3] transition-colors py-2"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Exchange
              </a>
              <a
                className="text-white text-base font-medium leading-normal hover:text-[#d7e3f3] transition-colors py-2"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                How it Works
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;