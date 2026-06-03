export default function Navbar() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-blue-600 text-white text-center py-2 px-4 text-sm font-medium tracking-wide">
        <a 
          href="/us/en/car-rental/united-states/list-your-car" 
          className="hover:text-blue-100 underline underline-offset-2 transition-colors duration-200"
        >
          Earn up to $1,000 per month sharing your car on Turo
        </a>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
              <div className="bg-blue-600 p-2 rounded-xl group-hover:bg-blue-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                  <circle cx="7" cy="17" r="2"/>
                  <path d="M9 17h6"/>
                  <circle cx="17" cy="17" r="2"/>
                </svg>
              </div>
              <span className="font-bold text-2xl text-gray-900 tracking-tight">AutoShare</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Buy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Sell</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Rent</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact Us</a>
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center space-x-4">
              <button className="hidden sm:block text-gray-700 hover:text-blue-600 font-medium px-3 py-2 transition-colors">
                Log in
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-full shadow-md shadow-blue-600/30 transition-all active:scale-95">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
