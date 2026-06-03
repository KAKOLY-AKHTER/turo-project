import { useState } from 'react';

const filters = [
  {
    id: 'all',
    label: 'All',
    icon: (
      <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd" d="M16.167 3.25a2.75 2.75 0 0 1 2.538 1.692l1.616 3.879L21.55 7.9a.75.75 0 0 1 .9 1.2l-1.432 1.074 1.27 1.906c.301.452.462.982.462 1.525V19A1.75 1.75 0 0 1 21 20.75h-.5A1.75 1.75 0 0 1 18.75 19v-1.25H5.25V19a1.75 1.75 0 0 1-1.75 1.75H3A1.75 1.75 0 0 1 1.25 19v-5.395c0-.542.16-1.073.462-1.525l1.27-1.906L1.55 9.1a.75.75 0 0 1 .9-1.2l1.228.92 1.617-3.878A2.75 2.75 0 0 1 7.834 3.25zM6 13a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V14a1 1 0 0 0-1-1m12 0a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V14a1 1 0 0 0-1-1M7.834 4.75c-.505 0-.96.303-1.154.769L5.027 9.483l1.065.267h11.816l1.064-.267L17.32 5.52a1.25 1.25 0 0 0-1.153-.769z" fill="currentColor" fillRule="evenodd"/>
      </svg>
    ),
  },
  {
    id: 'airports',
    label: 'Airports',
    icon: (
      <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.663 2.402c.881-.16 1.724.05 2.305.63.58.58.79 1.423.63 2.305-.16.876-.679 1.804-1.568 2.693l-3.1 3.1 2.29 4.133q.045.083.069.173c.267 1.016-.134 1.835-.633 2.553l-.008.011-1.04 1.44a.75.75 0 0 1-1.24-.038l-2.999-4.711-2.066 2.066.437 2.62a.75.75 0 0 1-.21.653l-1.5 1.5a.75.75 0 0 1-1.216-.226l-1.882-4.236-4.237-1.883a.75.75 0 0 1-.225-1.216l1.5-1.5.067-.06a.75.75 0 0 1 .586-.15l2.62.437 2.065-2.065-4.71-2.999A.75.75 0 0 1 4.47 6.47l1.239-1.238a2.76 2.76 0 0 1 2.476-.758l.18.04.092.032q.045.019.089.043l4.328 2.476L15.97 3.97c.889-.889 1.817-1.407 2.693-1.567" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'monthly',
    label: 'Monthly',
    icon: (
      <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 1.25a1 1 0 0 1 1 1v1h1.325a2.925 2.925 0 0 1 2.925 2.925v9.75a.98.98 0 0 1-.285.69l-5.85 5.85a.98.98 0 0 1-.69.285h-9.75a2.925 2.925 0 0 1-2.925-2.925V6.175A2.925 2.925 0 0 1 5.175 3.25H6.5v-1a1 1 0 0 1 2 0v1h7v-1a1 1 0 0 1 1-1M4.2 19.826c0 .538.437.975.975.975h8.775v-2.925a2.925 2.925 0 0 1 2.925-2.925H19.8v-4.9H4.2z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'nearby',
    label: 'Nearby',
    icon: (
      <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd" d="M12 1.639c-5.072 0-9.25 3.918-9.25 8.83 0 2.708 1.327 4.707 2.924 6.41.684.73 1.438 1.427 2.17 2.103h.001l.346.32c.849.787 1.655 1.555 2.344 2.375.75.891 2.176.921 2.95.034.708-.809 1.523-1.58 2.374-2.375l.156-.146c.794-.741 1.614-1.507 2.353-2.316 1.58-1.728 2.882-3.748 2.882-6.405 0-4.912-4.178-8.83-9.25-8.83m0 5.25a4 4 0 1 0 0 8 4 4 0 0 0 0-8" fill="currentColor" fillRule="evenodd"/>
      </svg>
    ),
  },
  {
    id: 'delivered',
    label: 'Delivered',
    icon: (
      <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.565 4.98c-1.041-1.457.521-3.352 2.151-2.608l17.603 8.036c1.363.623 1.364 2.56 0 3.184L3.715 21.628c-1.63.744-3.192-1.15-2.151-2.608l4.477-6.27h6.208a.75.75 0 0 0 0-1.5H6.042z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'cities',
    label: 'Cities',
    icon: (
      <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd" d="M12.106 1.612a.75.75 0 0 1 .838.034l4.5 3.312a.75.75 0 0 1 .306.604V7.25H20c.966 0 1.75.784 1.75 1.75v12.238H22a.75.75 0 0 1 0 1.5h-.875a.8.8 0 0 1-.25 0l-3.766.003a1 1 0 0 1-.109.01H8q-.033-.001-.066-.005L2 22.75a.75.75 0 0 1 0-1.5h.25v-8.256c0-.966.783-1.75 1.75-1.75h3.25V5.562a.75.75 0 0 1 .306-.604l4.5-3.312zM4 12.744a.25.25 0 0 0-.25.25v8.255l3.5-.002v-8.503zm13.75 8.497 2.5-.002V9a.25.25 0 0 0-.25-.25h-2.25zm-6.25-7.989a.75.75 0 0 0 0 1.5l2-.002a.75.75 0 0 0 0-1.5zm0-3.001a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm0-2.999a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z" fill="currentColor" fillRule="evenodd"/>
      </svg>
    ),
  },
];

export default function FilterNav() {
  const [active, setActive] = useState('all');

  return (
    <div className="w-full py-4">
      <div className="flex justify-center">
        <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {filters.map((filter) => {
            const isActive = active === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActive(filter.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full text-[14px] font-semibold
                  whitespace-nowrap transition-all duration-200 select-none
                  ${isActive
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }
                `}
              >
                <span className={isActive ? 'text-white' : 'text-gray-700'}>
                  {filter.icon}
                </span>
                {filter.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
