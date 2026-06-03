import { useState } from 'react';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('vehicle');
  const [expanded, setExpanded] = useState({});

  const tabs = [
    { id: 'vehicle', label: 'VEHICLE TYPES' },
    { id: 'makes', label: 'MAKES & MODELS' },
    { id: 'cities', label: 'US CITIES' },
    { id: 'airports', label: 'AIRPORTS' },
    { id: 'international', label: 'INTERNATIONAL CITIES' },
    { id: 'states', label: 'STATES' },
  ];

  const toggleExpand = (tab) => {
    setExpanded(prev => ({ ...prev, [tab]: !prev[tab] }));
  };

  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-10">
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-x-8 border-b mb-8 text-sm font-medium">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 border-b-2 transition-all ${
                activeTab === tab.id 
                  ? 'border-black text-black' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[280px]">
          {activeTab === 'vehicle' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm">
              <div className="space-y-2">
                <a href="#" className="block hover:underline">Car rental</a>
                <a href="#" className="block hover:underline">Cargo van rental</a>
                <a href="#" className="block hover:underline">Convertible car rental</a>
                <a href="#" className="block hover:underline">Luxury car rental Charlotte</a>
              </div>
              <div className="space-y-2">
                <a href="#" className="block hover:underline">Minivan rental</a>
                <a href="#" className="block hover:underline">Box truck rental</a>
                <a href="#" className="block hover:underline">Electric car rental</a>
                <a href="#" className="block hover:underline">Truck rental Austin</a>
              </div>
              <div className="space-y-2">
                <a href="#" className="block hover:underline">Luxury car rental</a>
                <a href="#" className="block hover:underline">Classic car rental</a>
                <a href="#" className="block hover:underline">Luxury car rental Atlanta</a>
                <a href="#" className="block hover:underline">Van rental Dallas</a>
              </div>
              <div className="space-y-2">
                <a href="#" className="block hover:underline">Truck rental</a>
                <a href="#" className="block hover:underline">Sport car rental</a>
                <a href="#" className="block hover:underline">Truck rental Atlanta</a>
                <a href="#" className="block hover:underline">Luxury car rental Chicago</a>
              </div>
              <div className="space-y-2">
                <a href="#" className="block hover:underline">Van rental</a>
                <a href="#" className="block hover:underline">SUV rental</a>
                <a href="#" className="block hover:underline">Van rental Chicago</a>
                <a href="#" className="block hover:underline">Truck rental Chicago</a>
              </div>

              {/* Extra items when expanded */}
              {expanded.vehicle && (
                <>
                  <div className="space-y-2">
                    <a href="#" className="block hover:underline">Van rental Denver</a>
                    <a href="#" className="block hover:underline">Truck rental El Paso</a>
                  </div>
                  <div className="space-y-2">
                    <a href="#" className="block hover:underline">Luxury car rental Dallas</a>
                    <a href="#" className="block hover:underline">Van rental Las Vegas</a>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Other tabs (you can expand similarly) */}
          {activeTab !== 'vehicle' && (
            <div className="text-gray-500 text-center py-20">
              Content for <strong>{tabs.find(t => t.id === activeTab).label}</strong> will go here.
            </div>
          )}
        </div>

        {/* Show More / Show Less Button */}
        {activeTab === 'vehicle' && (
          <button
            onClick={() => toggleExpand('vehicle')}
            className="text-blue-600 font-medium hover:underline mt-6 flex items-center gap-1"
          >
            {expanded.vehicle ? 'Show less' : 'Show more'}
            <span className="text-lg leading-none">
              {expanded.vehicle ? '↑' : '↓'}
            </span>
          </button>
        )}

        <hr className="my-12" />

        {/* Bottom Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
          <div>
            <h4 className="font-bold mb-4">Turo</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Team</a></li>
              <li><a href="#" className="hover:text-black">Policies</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Press</a></li>
              <li><a href="#" className="hover:text-black">OpenRoad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Locations</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">USA (EN)</a></li>
              <li><a href="#" className="hover:text-black">Australia (EN)</a></li>
              <li><a href="#" className="hover:text-black">Canada (EN)</a></li>
              <li><a href="#" className="hover:text-black">Canada (FR)</a></li>
              <li><a href="#" className="hover:text-black">France (FR)</a></li>
              <li><a href="#" className="hover:text-black">UK (EN)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Why choose Turo</a></li>
              <li><a href="#" className="hover:text-black">Weddings</a></li>
              <li><a href="#" className="hover:text-black">Pitch a trip</a></li>
              <li><a href="#" className="hover:text-black">Trust & safety</a></li>
              <li><a href="#" className="hover:text-black">Get help</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Hosting</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">List your car</a></li>
              <li><a href="#" className="hover:text-black">Calculator</a></li>
              <li><a href="#" className="hover:text-black">All-Star Hosts</a></li>
              <li><a href="#" className="hover:text-black">Host tools</a></li>
              <li><a href="#" className="hover:text-black">Insurance & protection</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-600">
          <div>©2026 Turo, Inc. • Terms • Privacy • Cookie preferences</div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <span>FB</span>
              <span>IG</span>
              <span>TT</span>
              <span>YT</span>
              <span className="font-bold">BLOG</span>
            </div>
            
            <div className="flex gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-9" />
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="h-9" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;