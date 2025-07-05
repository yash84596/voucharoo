import React from 'react';

interface MatchedOption {
  id: string;
  exchangeRate: string;
  description: string;
  imageUrl: string;
}

const matched: MatchedOption[] = [
  /* … keep your dummy options … */
];

const Exchanges: React.FC = () => {
  const arrow =
    "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 fill=%27rgb(157,143,204)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0Zm-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32Z%27/%3e%3c/svg%3e')";

  return (
    <div className="flex min-h-screen flex-col transition-colors duration-300">
      <div className="container mx-auto max-w-3xl flex-1 py-10 space-y-6">
        <h1 className="px-4 text-3xl font-bold text-neutral-900 dark:text-white">Exchange a voucher</h1>

        {/* Selects */}
        {['Select a voucher to give', 'Select a brand to receive'].map((lbl) => (
          <label key={lbl} className="block px-4">
            <select
              className="h-14 w-full appearance-none rounded-xl border border-primary-200 bg-white bg-[length:1.5rem] bg-[right_0.75rem_center] bg-no-repeat px-4 text-base
                         text-neutral-900 dark:bg-[#1f1834] dark:text-white dark:border-[#3d3069]"
              style={{ backgroundImage: arrow } as React.CSSProperties}
            >
              <option>{lbl}</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </label>
        ))}

        {/* Matched options */}
        {matched.map((o) => (
          <div
            key={o.id}
            className="mx-4 flex flex-col gap-4 rounded-xl bg-white p-4 shadow transition-colors dark:bg-[#2b2249] md:flex-row"
          >
            <div className="flex flex-col gap-2 md:flex-[2]">
              <p className="text-sm text-neutral-500 dark:text-[#9d8fcc]">Exchange rate</p>
              <p className="text-lg font-bold text-neutral-900 dark:text-white">{o.exchangeRate}</p>
              <p className="text-sm text-neutral-600 dark:text-[#9d8fcc]">{o.description}</p>
              <button className="mt-2 w-fit rounded-full bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800">
                Request Exchange
              </button>
            </div>
            <div
              className="aspect-video w-full rounded-xl bg-cover bg-center md:flex-1"
              style={{ backgroundImage: `url("${o.imageUrl}")` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exchanges;
