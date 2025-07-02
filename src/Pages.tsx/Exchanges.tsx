import React from 'react';

// Define a type for the matched options data
interface MatchedOption {
  id: string;
  exchangeRate: string;
  description: string;
  imageUrl: string;
}

const ExchangeVoucherForm: React.FC = () => {
  // The SVG data for the custom select button arrow, URL-encoded.
  // This is taken directly from the HTML's style attribute.
  const selectButtonSvg = 'url(\'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(157,143,204)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e\')';

  // Dummy data for matched options
  const matchedOptions: MatchedOption[] = [
    {
      id: '1',
      exchangeRate: '1:0.95',
      description: "For every $100 of your voucher, you'll receive $95 in the new voucher.",
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVT4yzBPoe9JQErFvrcP1fCtTy6XwE38uTyHtbfFvz7bH5kOz4Y1JtUyHUro1zFaWxBO1NUsffZc9O2KIs-mc8TRse9weZsiE_-FFzYqjtudcY3RYxejMxSi4igvxfUOokWpgbV9uTZTJ5skbFt42kH9io2RT4mml356dhxgvR5F2EhzoSW5KKyVvU65FZW-ZW53vSC0hWf1r8KIHrgH7Eh7ZECiE5ho3JcLB4KVaEJ6-TpFrPr7wJK775ZKjOxLPoXrysWHYQo-i2',
    },
    {
      id: '2',
      exchangeRate: '1:0.92',
      description: "For every $100 of your voucher, you'll receive $92 in the new voucher.",
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_ZGESivF_a-0SqEH9c5SXXXSGftOIdAsk5kx_B7XG55MKk_kqwcYdxzdI9HkKRr4wbbjpmcaxrc14GRBq6BB1JsHsnfNXL_-y2GE8ITGwZi6NnzJMGe1_4ONfP20_PQULgMLuZ3Ov5jgaWMwjVYNszWrlsYNAc4ckEeXynDXSThLRbGXNfrRln2c5viuDsmEbBdJCoyEou0XinACdqzghgaLhdntD3FY2QXWhdg9lui1qPlH4lzFXIvijaZqb1qOsJcr78Isqv5q7',
    },
    {
      id: '3',
      exchangeRate: '1:0.90',
      description: "For every $100 of your voucher, you'll receive $90 in the new voucher.",
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3bLedpjA2EcHrJYB47datc4xL4secAKNTaJAlQldfer-HD-Y1OXjWtzWd-25IMKoQcjyttOSvZHB4E-xVINjqkPDeuXzw18oc6790om5S90LPVjzHoPEpEGeN5PNoYxEIcssXOmlIxFYjfFcuvnS_zeYqAPJcu5Dymg5yM-fFmClU4LXZm8VPI5OcreyCwAnyJPDh_6iRVFErLU_VPkn-OBw8Av1HaHeuuYTyqcHW62odUGadWQYvEgusEup0uMyu7zW6VNFAF8W6',
    },
  ];

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#141023] dark group/design-root overflow-x-hidden"
      style={{
        '--select-button-svg': selectButtonSvg, // Using the CSS variable
        fontFamily: '"Spline Sans", "Noto Sans", sans-serif',
      } as React.CSSProperties} // Type assertion for custom CSS properties
    >
      {/*
        NOTE: In a real React application, the <link> tags for fonts,
        <title>, and <link rel="icon"> should be placed in your public/index.html file
        (or equivalent) for better performance and proper HTML structure.
        The Tailwind CSS CDN script should also be in index.html or integrated
        via a build process.
      */}
      <div className="layout-container flex h-full grow flex-col">
        {/* Header Section - Commented Out */}
        {/*
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2b2249] px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-white">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_6_535)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_6_535"><rect width="48" height="48" fill="white"></rect></clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">VoucherSwap</h2>
            </div>
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal" href="#">Buy</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Sell</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Exchange</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">How it works</a>
            </div>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                  className="text-[#9d8fcc] flex border-none bg-[#2b2249] items-center justify-center pl-4 rounded-l-xl border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                    ></path>
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2b2249] focus:border-none h-full placeholder:text-[#9d8fcc] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value=""
                />
              </div>
            </label>
            <div className="flex gap-2">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#2b2249] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Sign up</span>
              </button>
              <button
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#2b2249] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              >
                <div className="text-white" data-icon="Bell" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </header>
        */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Exchange a voucher</p>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <select
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3d3069] bg-[#1f1834] focus:border-[#3d3069] h-14 bg-[image:var(--select-button-svg)] placeholder:text-[#9d8fcc] p-[15px] text-base font-normal leading-normal"
                >
                  <option value="one">Select a voucher to give</option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <select
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3d3069] bg-[#1f1834] focus:border-[#3d3069] h-14 bg-[image:var(--select-button-svg)] placeholder:text-[#9d8fcc] p-[15px] text-base font-normal leading-normal"
                >
                  <option value="one">Select a brand to receive</option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Matched options</h2>
            {matchedOptions.map((option) => (
              <div key={option.id} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#9d8fcc] text-sm font-normal leading-normal">Exchange rate</p>
                      <p className="text-white text-base font-bold leading-tight">{option.exchangeRate}</p>
                      <p className="text-[#9d8fcc] text-sm font-normal leading-normal">{option.description}</p>
                    </div>
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#2b2249] text-white text-sm font-medium leading-normal w-fit"
                    >
                      <span className="truncate">Request Exchange</span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{ backgroundImage: `url("${option.imageUrl}")` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeVoucherForm;
