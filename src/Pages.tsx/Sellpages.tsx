import React from 'react';

const Sellpages: React.FC = () => {
  const selectIcon =
    "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 fill=%27rgb(157,143,204)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0Zm-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32Z%27/%3e%3c/svg%3e')";

  return (
    <div className="flex min-h-screen flex-col transition-colors duration-300">
      <div className="container mx-auto max-w-xl flex-1 py-10 space-y-6">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
            Sell your unused vouchers
          </h1>
          <p className="text-base text-neutral-600 dark:text-neutral-300">
            Turn them into cash in a few easy steps.
          </p>
        </header>

        {/* ------------ Form ------------ */}
        {['Brand', 'Value', 'Expiry Date (DD/MM/YYYY)', 'Email'].map((placeholder) => (
          <label key={placeholder} className="block">
            <input
              placeholder={placeholder}
              className="h-14 w-full rounded-xl border border-primary-200 bg-white px-4 text-base text-neutral-900 placeholder:text-neutral-500
                         dark:bg-[#1f1834] dark:text-white dark:border-[#3d3069] dark:placeholder:text-[#9d8fcc] focus:outline-none"
            />
          </label>
        ))}

        {/* Brand select with custom arrow */}
        <label className="block">
          <select
            className="h-14 w-full appearance-none rounded-xl border border-primary-200 bg-white bg-[length:1.5rem] bg-[right_0.75rem_center] bg-no-repeat px-4 text-base
                       text-neutral-900 dark:bg-[#1f1834] dark:text-white dark:border-[#3d3069]"
            style={{ backgroundImage: selectIcon } as React.CSSProperties}
          >
            <option>Select Brand</option>
            <option>Brand A</option>
            <option>Brand B</option>
          </select>
        </label>

        <p className="text-center text-sm text-neutral-500 dark:text-[#9d8fcc]">
          Estimated Selling Price: <span className="font-semibold">$45.00</span>
        </p>

        <button className="mx-auto block h-12 w-40 rounded-full bg-primary-700 text-sm font-bold text-white hover:bg-primary-800">
          Submit Voucher
        </button>

        {/* ------------ Progress steps ------------ */}
        {[
          { label: 'Submitted', pct: 25, msg: 'Voucher submitted.' },
          { label: 'Under Review', pct: 50, msg: 'We\'re checking details.' },
          { label: 'Processing', pct: 75, msg: 'Processing for sale.' },
          { label: 'Completed', pct: 100, msg: 'Sold & funds on the way.' },
        ].map(({ label, pct, msg }) => (
          <section key={label} className="space-y-1">
            <h3 className="text-lg font-medium text-neutral-900 dark:text-white">{label}</h3>
            <div className="h-2 w-full rounded bg-primary-100 dark:bg-[#3d3069]">
              <div
                className="h-full rounded bg-primary-700 dark:bg-primary-600"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="text-sm text-neutral-500 dark:text-[#9d8fcc]">{msg}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Sellpages;
