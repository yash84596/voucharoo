import React from 'react';

const SellVoucherForm: React.FC = () => {
  // The SVG data for the custom select button arrow, URL-encoded.
  // This is taken directly from the HTML's style attribute.
  const selectButtonSvg = 'url(\'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(157,143,204)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e\')';

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
        {/* <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2b2249] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">VoucherVerse</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal" href="#">Buy</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Sell</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Exchange</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Help</a>
            </div>
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
        </header> */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1"> {/* Removed duplicate max-w-[960px] */}
            <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Sell your unused vouchers</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">Turn your unused vouchers into cash. Fill out the form below to get started.</p>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <select
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3d3069] bg-[#1f1834] focus:border-[#3d3069] h-14 bg-[image:var(--select-button-svg)] placeholder:text-[#9d8fcc] p-[15px] text-base font-normal leading-normal"
                >
                  <option value="one">Select Brand</option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Value"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3d3069] bg-[#1f1834] focus:border-[#3d3069] h-14 placeholder:text-[#9d8fcc] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Expiry Date (DD/MM/YYYY)"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3d3069] bg-[#1f1834] focus:border-[#3d3069] h-14 placeholder:text-[#9d8fcc] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3d3069] bg-[#1f1834] focus:border-[#3d3069] h-14 placeholder:text-[#9d8fcc] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <p className="text-[#9d8fcc] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">Estimated Selling Price: $45.00</p>
            <div className="flex px-4 py-3 justify-center">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#14034d] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Submit Voucher</span>
              </button>
            </div>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Voucher Status</h3>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex gap-6 justify-between"><p className="text-white text-base font-medium leading-normal">Submitted</p></div>
              <div className="rounded bg-[#3d3069]"><div className="h-2 rounded bg-[#14034d]" style={{ width: '25%' }}></div></div>
              <p className="text-[#9d8fcc] text-sm font-normal leading-normal">Your voucher has been submitted and is awaiting review.</p>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex gap-6 justify-between"><p className="text-white text-base font-medium leading-normal">Under Review</p></div>
              <div className="rounded bg-[#3d3069]"><div className="h-2 rounded bg-[#14034d]" style={{ width: '50%' }}></div></div>
              <p className="text-[#9d8fcc] text-sm font-normal leading-normal">Our team is currently reviewing your voucher details.</p>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex gap-6 justify-between"><p className="text-white text-base font-medium leading-normal">Processing</p></div>
              <div className="rounded bg-[#3d3069]"><div className="h-2 rounded bg-[#14034d]" style={{ width: '75%' }}></div></div>
              <p className="text-[#9d8fcc] text-sm font-normal leading-normal">Your voucher is being processed for sale.</p>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex gap-6 justify-between"><p className="text-white text-base font-medium leading-normal">Completed</p></div>
              <div className="rounded bg-[#3d3069]"><div className="h-2 rounded bg-[#14034d]" style={{ width: '100%' }}></div></div>
              <p className="text-[#9d8fcc] text-sm font-normal leading-normal">Your voucher has been successfully sold and funds are being transferred.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellVoucherForm;
