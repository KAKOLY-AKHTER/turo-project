import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#593CFB] text-white text-center py-2 px-4 text-[13px] font-medium tracking-wide">
        <a href="#" className="hover:text-purple-200 transition-colors duration-200">
          🚗 Earn up to <span className="font-bold">$1,000/month</span> sharing your car on Turo &nbsp;→
        </a>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[68px]">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group select-none">
              <div className="w-9 h-9 bg-[#593CFB] rounded-xl flex items-center justify-center shadow-md shadow-[#593CFB]/30 group-hover:shadow-[#593CFB]/50 transition-all duration-200">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                  <circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>
                </svg>
              </div>
              <span className="font-black text-[22px] text-gray-900 tracking-tight">Turo</span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {['Home', 'Buy', 'Sell', 'Rent', 'Contact Us'].map(link => (
                <a
                  key={link}
                  href="#"
                  className="relative px-4 py-2 text-[14px] font-medium text-gray-600 hover:text-[#593CFB] transition-colors duration-200 rounded-lg hover:bg-[#593CFB]/5 group"
                >
                  {link}
                  <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#593CFB] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full origin-left" />
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex items-center gap-1.5 text-[14px] font-medium text-gray-700 hover:text-[#593CFB] px-3 py-2 rounded-lg hover:bg-[#593CFB]/5 transition-all duration-200">
                Log in
              </button>
              <button className="bg-[#593CFB] hover:bg-[#4828E0] active:scale-95 text-white text-[14px] font-semibold py-2.5 px-5 rounded-xl shadow-md shadow-[#593CFB]/25 hover:shadow-[#593CFB]/40 transition-all duration-200">
                Sign up
              </button>

              {/* Hamburger */}
              <button
                className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors gap-[5px]"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className={`block w-5 h-[2px] bg-gray-700 rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block w-5 h-[2px] bg-gray-700 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-[2px] bg-gray-700 rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pb-4 pt-2 bg-white/90 backdrop-blur-xl border-t border-gray-100 flex flex-col gap-1">
            {['Home', 'Buy', 'Sell', 'Rent', 'Contact Us'].map(link => (
              <a
                key={link}
                href="#"
                className="px-4 py-3 text-[15px] font-medium text-gray-700 hover:text-[#593CFB] hover:bg-[#593CFB]/5 rounded-xl transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="flex gap-3 mt-3 pt-3 border-t border-gray-100">
              <button className="flex-1 py-2.5 text-[14px] font-medium text-gray-700 border border-gray-200 rounded-xl hover:border-[#593CFB] hover:text-[#593CFB] transition-all">
                Log in
              </button>
              <button className="flex-1 py-2.5 text-[14px] font-semibold text-white bg-[#593CFB] rounded-xl hover:bg-[#4828E0] transition-all shadow-md shadow-[#593CFB]/25">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}