import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

/* ---------- Types ---------- */
interface Voucher {
  id: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
}

/* ---------- Component ---------- */
const BuyPages: React.FC = () => {
  /* -------- Dummy data -------- */
  const allVouchers: Voucher[] = useMemo(
    () => [
      /* … keep your voucher objects unchanged … */
    ],
    []
  );

  /* -------- Filter state -------- */
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [selectedDiscount, setSelectedDiscount] = useState<string | null>(null);

  /* -------- Pagination state -------- */
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  /* -------- Filtering -------- */
  const filteredVouchers = useMemo(() => {
    // TODO: real filter logic later
    return allVouchers;
  }, [allVouchers, selectedBrand, selectedPriceRange, selectedDiscount]);

  /* -------- Reset to page 1 whenever filters change -------- */
  useEffect(() => setCurrentPage(1), [selectedBrand, selectedPriceRange, selectedDiscount]);

  /* -------- Pagination helpers -------- */
  const totalPages = Math.ceil(filteredVouchers.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentVouchers = filteredVouchers.slice(start, start + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const renderPages = () => {
    const btns = [];
    const max = 5;
    let first = Math.max(1, currentPage - Math.floor(max / 2));
    let last = Math.min(totalPages, first + max - 1);
    if (last - first + 1 < max) first = Math.max(1, last - max + 1);

    for (let i = first; i <= last; i++) {
      btns.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`flex size-10 items-center justify-center rounded-full text-sm transition-colors
            ${currentPage === i
              ? 'bg-primary-600 text-white font-bold'
              : 'text-primary-600 hover:bg-primary-100 dark:hover:bg-[#2b2249]'}`}
        >
          {i}
        </button>
      );
    }
    return btns;
  };

  /* ---------- JSX ---------- */
  return (
    <div className="flex min-h-screen flex-col transition-colors duration-300">
      <div className="container mx-auto flex-1 py-8">
        {/* ---------- Header ---------- */}
        <h1 className="px-4 text-3xl font-bold text-neutral-900 dark:text-white">Vouchers</h1>

        {/* ---------- Filters ---------- */}
        <div className="flex flex-wrap gap-3 p-4">
          {[
            { type: 'brand', label: 'Brand', value: 'All', state: selectedBrand },
            { type: 'price', label: 'Price Range', value: 'All', state: selectedPriceRange },
            { type: 'discount', label: 'Discount %', value: 'All', state: selectedDiscount },
          ].map(({ type, label, value, state }) => (
            <button
              key={type}
              onClick={() => {
                if (type === 'brand') setSelectedBrand(state === value ? null : value);
                if (type === 'price') setSelectedPriceRange(state === value ? null : value);
                if (type === 'discount') setSelectedDiscount(state === value ? null : value);
              }}
              className={`flex h-8 items-center gap-2 rounded-full pl-4 pr-2 text-sm transition-colors
                ${state === value
                  ? 'bg-primary-700 text-white'
                  : 'bg-primary-100 text-primary-700 hover:bg-primary-200 dark:bg-[#2b2249] dark:hover:bg-[#3d3069] dark:text-white'}`}
            >
              {label}
              <ChevronDown size={18} />
            </button>
          ))}
        </div>

        {/* ---------- Grid ---------- */}
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentVouchers.map((v) => (
            <article
              key={v.id}
              className="flex flex-col gap-2 rounded-xl bg-white dark:bg-[#2b2249] p-3 shadow transition-transform duration-200 hover:scale-[1.03]"
            >
              <div
                className="aspect-square w-full rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url("${v.imageUrl}")` }}
              />
              <h3 className="truncate text-base font-medium text-neutral-900 dark:text-white">{v.name}</h3>
              <p className="text-sm text-neutral-500 dark:text-[#9d8fcc]">
                Original: <span className="line-through">${v.originalPrice}</span>
              </p>
              <p className="text-lg font-bold text-primary-700 dark:text-primary-300">
                ${v.discountedPrice}
              </p>
              <button className="mt-1 rounded-md bg-primary-700 py-2 text-sm font-bold text-white hover:bg-primary-800">
                Buy Now
              </button>
            </article>
          ))}
        </div>

        {/* ---------- Pagination ---------- */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 p-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex size-10 items-center justify-center rounded-full text-primary-700 hover:bg-primary-100 disabled:opacity-50 dark:hover:bg-[#2b2249]"
            >
              <ChevronLeft size={18} />
            </button>
            {renderPages()}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex size-10 items-center justify-center rounded-full text-primary-700 hover:bg-primary-100 disabled:opacity-50 dark:hover:bg-[#2b2249]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyPages;
