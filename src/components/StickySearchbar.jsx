import { useState, useEffect } from 'react';

export default function StickySearchbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isScrolled) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300 py-3">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 sm:gap-4">

          {/* ── Logo ── */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="bg-blue-600 p-1.5 sm:p-2 rounded-xl group-hover:bg-blue-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-white">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                <circle cx="7" cy="17" r="2"/>
                <path d="M9 17h6"/>
                <circle cx="17" cy="17" r="2"/>
              </svg>
            </div>
            {/* Hide text on very small screens */}
            <span className="hidden sm:block font-bold text-2xl text-gray-900 tracking-tight">Turo</span>
          </div>

          {/* ── Search Bar ── */}
          <div className="flex-1 flex justify-center w-full">
            <div className="flex items-center border border-gray-200 rounded-2xl bg-white w-full shadow-sm hover:shadow-md transition-shadow cursor-pointer h-[46px] sm:h-[52px]">

              {/* Where — always visible */}
              <div className="flex-1 sm:flex-[1.5] px-3 sm:px-5 flex flex-col justify-center border-r border-gray-200 h-full overflow-hidden hover:bg-gray-50 rounded-l-2xl transition-colors">
                <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 mb-0.5 tracking-wide">Where</span>
                <span className="text-[13px] sm:text-[14px] text-gray-600 truncate">Airport, city...</span>
              </div>

              {/* From — hidden on mobile, visible md+ */}
              <div className="flex-[1.2] px-5 hidden md:flex flex-col justify-center border-r border-gray-200 h-full hover:bg-gray-50 transition-colors">
                <span className="text-[11px] font-bold text-gray-500 mb-0.5 tracking-wide">From</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[14px] text-[#59595b]">Add dates</span>
                    <svg className="w-3.5 h-3.5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[14px] text-[#59595b]">Add time</span>
                    <svg className="w-3.5 h-3.5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              {/* Until — hidden on mobile, visible md+ */}
              <div className="flex-[1.2] px-5 hidden md:flex flex-col justify-center h-full hover:bg-gray-50 transition-colors">
                <span className="text-[11px] font-bold text-gray-500 mb-0.5 tracking-wide">Until</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[14px] text-[#59595b]">Add dates</span>
                    <svg className="w-3.5 h-3.5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[14px] text-[#59595b]">Add time</span>
                    <svg className="w-3.5 h-3.5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="pr-1.5 pl-2">
                <button className="bg-[#593CFB] hover:bg-[#4828E0] text-white w-8 h-8 sm:w-9 sm:h-9 rounded-[10px] flex items-center justify-center transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 sm:w-[18px] sm:h-[18px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
              </div>

            </div>
          </div>

          {/* ── Auth buttons ── */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button className="hidden sm:block text-gray-700 hover:text-blue-600 font-medium px-3 py-2 transition-colors text-sm">
              Log in
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-full shadow-md shadow-blue-600/30 transition-all active:scale-95 text-sm whitespace-nowrap">
              Register
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}