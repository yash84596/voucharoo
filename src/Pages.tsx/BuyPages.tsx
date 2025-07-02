import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

// Define a type for the voucher data to ensure type safety
interface Voucher {
  id: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
}

const VoucherVerseListing: React.FC = () => {
  // Dummy data for all available vouchers
  const allVouchers: Voucher[] = useMemo(() => [
    {
      id: '1',
      name: 'Voucher for The Coffee Bean',
      originalPrice: 50,
      discountedPrice: 40,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBoAXjS3lI9haYmj2FAljFCLX7KFesDXomX4sloC0nvnX0MOzjhRBB0C52T7EslBR036s_dllufr8VSYbuRgTviZbbMwkuz_T9vIC_1VLXXZItcpRXy4zjmlENMfpsfryuCZZf7S28jnt8cNZHvln-s68VOlDI88pm5qU-jChlC-QxwHORvrfXxdPTeYWFUxCRPlF02rBTDIBoKXthK2dwUq',
    },
    {
      id: '2',
      name: 'Voucher for The Fashion Hub',
      originalPrice: 100,
      discountedPrice: 80,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6pKStmFdzig7WZZrdEeJ3x7N0TJ5QB8Dex0F-HRa1Dl46q613pUCe_YRb__2Z3OqlQ2wKfZSiL4thb-3Bgpf3_ZXQSJt_32w956P0PMdC0rqJBIrX4ghR8oDKAtlv2rZPq0-47qSVRPKPOM_Nrtx0LHl7fhC62_GEJ7AFWwaRJ0-eJyMRpgHwJGcq5x80',
    },
    {
      id: '3',
      name: 'Voucher for The Tech Store',
      originalPrice: 200,
      discountedPrice: 160,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFE-y9q_F5wXDhwYg7gyMG-XkD3eiDPealK4Qfwiig34euOKLRelrTHXtJ392QMQYmBd1UQ8686iu5WBVs2mC8cWqzzWCy6u-NsIIvgctRqPNuua1XKYT9EAN4JlgSTYr9emTm97jhYZ8AizJ_yRzuEbUQhNog4XbA989dKpykzsjpBBRlFn82MjTXH8PX21iI26SbfceAF6ZUvP8vWyp0fbcfos7pmqHbhmZ0sySOPOycmwFmAWS6MrcFLmU4U4G0goqtk4nb3TAU',
    },
    {
      id: '4',
      name: 'Voucher for The Book Nook',
      originalPrice: 25,
      discountedPrice: 20,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzLMF83Rv2MPyhVdUxCuAWd1dVaSfuHUAOSD4a5KQnQcNWLd9WNnns4WZjr-zBtRAsZlxEFQ6ClcLz6FalVKiQFRYQ6p1eNoO_KzHGTQtKrtzIDuCkTwEVhx-S42ZoWNEinYcxotmAnwnUXGirjSoIP3hsnCtHryzvIWkZGIlFmlkPzBlSWvNRfh6a7aeG97U6AbfLwNtMsZQBmmsHZHG97U6AbfLwNtMsZQBmmsHZHGy_DAFwB99y19OanuonWArixLKUQm210DCbENxqNvy2sCiEdDzdrpI4P0',
    },
    {
      id: '5',
      name: 'Voucher for The Fitness Studio',
      originalPrice: 75,
      discountedPrice: 60,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXM7MnPw3uQU5VIRyMvBPyvlhc9UIUrrbNIw9Og_VDWKjxE9nDXg7oFPRT4lXm1DuSfej2SeeTpUye6PPi30zENR0lCWwHqMfETLNSfGe6tN8UPYHuk-SFPSCI5lSzjF8iU-RohQVKyUQklwOi7D1jER3QDz7vFQ4sFSjWqi3C903fSdJbT7sS9Z5Tou9iSKhMikIxlZOBWLx-gVRg9F8pEDBm_h0ovzzfQ1WWVRgccGlOmOBrXFOc12n-ACbGVAlUIsEVN9GN82Eg',
    },
    {
      id: '6',
      name: 'Voucher for The Gourmet Kitchen',
      originalPrice: 150,
      discountedPrice: 120,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBatSG5TsN-YOkNAL-CG9c8hx6rwNNtLbGmTbPM25Xo3Dyqm-w_tIpF79mII0O0-DPhPaW6Rwo0fh6HnHFYs0DQQsSyV4B_QCHXdugKmaf4dl6i6v-kbd9pKpvF9len2ZqQmnFg1AX2v32gM7hso6TLFwLDozngxzw-4tAQd5zo4yMHdlZ76eg8SySyblsOVAvAX_jGLJx9KWwNfcTBSbInU13mhR7glK410Hb3qo6cxjK4cACiGKAgX9NSFZc2Stf_Av_N-1HstD33',
    },
    {
      id: '7',
      name: 'Voucher for The Travel Agency',
      originalPrice: 300,
      discountedPrice: 240,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMsUkPsyY0uyCM9JX5Sotx_0QX9mPTLjU9xCaJVsvyt3io5nid-338pkYokQoCKqZ4Tm_L-T8ecJQpz-Y57puKANycCZUc3gn1Bfdwn2psSaKouruPLebQinCpV32BlAa3aOU6vQj2Qc_hLYmIpKyoDlZdIlTgLmGe1yocoTVDMbe5iHO2lliluK0qLN7SOZyEJvHZSCBNJfmZ0XQWSpOc8Wy52p3q6f5syeGJFxjAuqZuuyp0vBvkfL2cTztsd-gPvJWa8n1tEVYm',
    },
    {
      id: '8',
      name: 'Voucher for The Home Decor Boutique',
      originalPrice: 125,
      discountedPrice: 100,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxz0jlzuhybSlUKKc3dOnlwa5gZHwEEEoimP0TIQhnxZ_8uXU3mh1JspODb-Z_RDaq91jjj73kq2ErVlj1cluqRfFFIH6Hds6wXQ1CN6PCoaIBBL7GfiTVAX8syGssUTmzAgMKNna8p3lJME2BX-Rnj7Lq9XMto1wxJFMY5FaXHoBwsbUWS5do1BMGHd-UjoD7F3YXg_S-_bwbdbQwK4wjoDQBTCx4LN9oGQMa3zAXXMssSMtdfr-4DLmiBUoqmNoHrl9OPeUKcAkR',
    },
    {
      id: '9',
      name: 'Voucher for The Pet Emporium',
      originalPrice: 60,
      discountedPrice: 48,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCODyo2enajmrz5Uw7e2u8KJLXQfeNa48WScFkjO5Jl-dsPzoZR6Yl8Uw70pVsdbVDnSYJRixfyvoBNQc7u76mccIOY7_dFgmEcGoLF_1Ouq4VrYQh5KAi7wcJYwVB-moOBbM45O2RQR8TcNknhXsyegdVf8wSq4KDCD4XbLRQVfuvc6a-xXwPRpZHm-rCAvEkSuVeGuHHFCrWZneTMaV4WANoTSKoVGqDLbB6xwSCeWx4jGKbFt47TbBAdKnkTc-awCEd2_NJU88Op',
    },
    {
      id: '10',
      name: 'Voucher for The Music Shop',
      originalPrice: 40,
      discountedPrice: 32,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAug-_a_MCojfVbyPIVXBdyL28Hk2-pw8AQ98Kwhm6bvDoh0NHrq1uUzUmJEsFTI2ueGdNu-MbZUrQeZsJFcQVf2YGDJY0CZiQBrmKHBAAMLEBC8o2zqctzmKucM2pW520j8XHqa8ZE4XwauBiJe1cEDlL3eC_argpL7wn0EBq4vbxAojUi65_it8yN_ze2ptWphL6L5S9prVAueanoqpLsWPwcSRErufgBA_icziwaakCi6XI_-HxqTW45QsyY3SslZ3DFWFiPFugZ',
    },
  ], []); // useMemo to prevent re-creation on every render

  // State for filter selections
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [selectedDiscount, setSelectedDiscount] = useState<string | null>(null);

  // State for pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6; // Number of vouchers to display per page

  // Filtered vouchers based on selected filters
  const filteredVouchers = useMemo(() => {
    return allVouchers.filter(() => {
      // Implement filtering logic here based on selectedBrand, selectedPriceRange, selectedDiscount
      // For this example, we'll just return all vouchers as the filter options are simple toggles.
      // In a real application, you'd add more complex logic, e.g.:
      // if (selectedBrand && !voucher.name.includes(selectedBrand)) return false;
      // if (selectedPriceRange && ...) return false;
      // if (selectedDiscount && ...) return false;
      return true;
    });
  }, [allVouchers, selectedBrand, selectedPriceRange, selectedDiscount]);

  // Reset page to 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBrand, selectedPriceRange, selectedDiscount]);

  // Calculate total pages based on filtered vouchers
  const totalPages = Math.ceil(filteredVouchers.length / itemsPerPage);

  // Get current vouchers for the page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVouchers = filteredVouchers.slice(startIndex, endIndex);

  // Handle filter button clicks
  const handleFilterClick = (filterType: 'brand' | 'price' | 'discount', value: string) => {
    switch (filterType) {
      case 'brand':
        setSelectedBrand(prev => prev === value ? null : value);
        break;
      case 'price':
        setSelectedPriceRange(prev => prev === value ? null : value);
        break;
      case 'discount':
        setSelectedDiscount(prev => prev === value ? null : value);
        break;
      default:
        break;
    }
    console.log(`Filter ${filterType} toggled for:`, value);
  };

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Generate pagination numbers
  const renderPaginationNumbers = () => {
    const pages = [];
    // Only show up to 5 page numbers around the current page, or less if near ends
    const maxPageNumbersToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    // Adjust startPage if we're near the end
    if (endPage - startPage + 1 < maxPageNumbersToShow) {
      startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button // Changed to button for semantic correctness
          key={i}
          className={`text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full transition-colors ${
            currentPage === i ? 'bg-[#2b2249] font-bold tracking-[0.015em]' : 'hover:bg-[#2b2249]/50'
          }`}
          onClick={() => handlePageChange(i)} // No need for e.preventDefault() with button
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#141023] dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}>
      {/*
        NOTE: In a real React application, the <link> tags for fonts,
        <title>, and <link rel="icon"> should be placed in your public/index.html file
        (or equivalent) for better performance and proper HTML structure.
        The Tailwind CSS CDN script should also be in index.html or integrated
        via a build process.
      */}
      {/* <Header /> Integrated the Header component */}

      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Vouchers</p>
            </div>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <button // Changed from <a> to <button>
                className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-2 transition-colors ${
                  selectedBrand === 'All' ? 'bg-[#14034d] text-white' : 'bg-[#2b2249] text-white hover:bg-[#3d3069]'
                }`}
                onClick={() => handleFilterClick('brand', 'All')}
              >
                <p className="text-sm font-medium leading-normal">Brand</p>
                <ChevronDown size={20} className="text-white" />
              </button>
              <button // Changed from <a> to <button>
                className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-2 transition-colors ${
                  selectedPriceRange === 'All' ? 'bg-[#14034d] text-white' : 'bg-[#2b2249] text-white hover:bg-[#3d3069]'
                }`}
                onClick={() => handleFilterClick('price', 'All')}
              >
                <p className="text-sm font-medium leading-normal">Price Range</p>
                <ChevronDown size={20} className="text-white" />
              </button>
              <button // Changed from <a> to <button>
                className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-2 transition-colors ${
                  selectedDiscount === 'All' ? 'bg-[#14034d] text-white' : 'bg-[#2b2249] text-white hover:bg-[#3d3069]'
                }`}
                onClick={() => handleFilterClick('discount', 'All')}
              >
                <p className="text-sm font-medium leading-normal">Discount %</p>
                <ChevronDown size={20} className="text-white" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
              {currentVouchers.length > 0 ? (
                currentVouchers.map((voucher) => (
                  <div key={voucher.id} className="flex flex-col gap-3 pb-3 bg-[#2b2249] rounded-xl p-3 hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                      style={{ backgroundImage: `url("${voucher.imageUrl}")` }}
                    ></div>
                    <div>
                      <p className="text-white text-base font-medium leading-normal truncate">{voucher.name}</p>
                      <p className="text-[#9d8fcc] text-sm font-normal leading-normal">
                        Original Price: <span className="line-through">${voucher.originalPrice}</span>
                      </p>
                      <p className="text-[#d7e3f3] text-lg font-bold leading-normal">
                        Discounted Price: ${voucher.discountedPrice}
                      </p>
                    </div>
                    <button className="mt-2 w-full bg-[#14034d] text-white py-2 rounded-md text-sm font-bold hover:bg-[#2b067d] transition-colors">
                      Buy Now
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-white text-center col-span-full py-10">No vouchers found matching your criteria.</p>
              )}
            </div>
            {totalPages > 1 && ( // Only show pagination if there's more than one page
              <div className="flex items-center justify-center p-4 gap-2">
                <button // Changed from <a> to <button>
                  className={`flex size-10 items-center justify-center rounded-full transition-colors ${
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2b2249]'
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1} // Disable button
                >
                  <ChevronLeft size={18} className="text-white" />
                </button>
                {renderPaginationNumbers()}
                <button // Changed from <a> to <button>
                  className={`flex size-10 items-center justify-center rounded-full transition-colors ${
                    currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2b2249]'
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages} // Disable button
                >
                  <ChevronRight size={18} className="text-white" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherVerseListing;
