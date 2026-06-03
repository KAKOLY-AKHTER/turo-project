import { useState } from 'react';

// Reusable SVG Icon Components
const FacebookIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const TiktokIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
);

const YoutubeIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.498 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.498-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const ChevronUpIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
);

const Footer = () => {
  const [activeTab, setActiveTab] = useState('states');
  const [showMore, setShowMore] = useState(false);

  const tabs = [
    { id: 'vehicle', label: 'VEHICLE TYPES' },
    { id: 'makes', label: 'MAKES & MODELS' },
    { id: 'cities', label: 'US CITIES' },
    { id: 'airports', label: 'AIRPORTS' },
    { id: 'international', label: 'INTERNATIONAL CITIES' },
    { id: 'states', label: 'STATES' },
  ];

  const tabData = {
    states: {
      initial: [
        'Car rental Alabama', 'Car rental Alaska', 'Car rental Arizona', 'Car rental Arkansas', 'Car rental California',
        'Car rental Colorado', 'Car rental Connecticut', 'Car rental Delaware', 'Car rental Florida', 'Car rental Georgia',
        'Car rental Hawaii', 'Car rental Illinois', 'Car rental Indiana', 'Car rental Iowa', 'Car rental Kentucky',
        'Car rental Louisiana', 'Car rental Maine', 'Car rental Maryland', 'Car rental Massachusetts', 'Car rental Michigan'
      ],
      extra: [
        'Car rental Minnesota', 'Car rental Mississippi', 'Car rental Missouri', 'Car rental Montana', 'Car rental New Hampshire',
        'Car rental New Jersey', 'Car rental New York', 'Car rental North Carolina', 'Car rental Ohio', 'Car rental Oklahoma',
        'Car rental Oregon', 'Car rental Pennsylvania', 'Car rental Rhode Island', 'Car rental South Carolina', 'Car rental Tennessee',
        'Car rental Texas', 'Car rental Utah', 'Car rental Vermont', 'Car rental Virginia', 'Car rental Washington',
        'Car rental West Virginia', 'Car rental Wisconsin'
      ]
    },
    makes: {
      initial: [
        'Audi rental', 'BMW rental', 'Ferrari rental', 'Ford rental', 'Jeep rental',
        'Lamborghini rental', 'Mercedes-Benz rental', 'Nissan rental', 'Porsche rental', 'Rolls-Royce rental',
        'Subaru rental', 'Tesla rental', 'Toyota rental', 'Dodge Charger rental', 'Ford Mustang rental',
        'Chevrolet Corvette rental', 'Chrysler Pacifica rental', 'Cadillac Escalade rental', 'Mercedes-Benz G Wagon rental', 'Chevrolet Suburban rental'
      ],
      extra: [
        'Maserati rental', 'McLaren rental', 'Rivian rental', 'Lucid rental', 'Aston Martin rental'
      ]
    },
    cities: {
      initial: [
        'Car rental Albany', 'Car rental Albuquerque', 'Car rental Anchorage', 'Car rental Atlanta', 'Car rental Augusta',
        'Car rental Austin', 'Car rental Bangor', 'Car rental Billings', 'Car rental Birmingham', 'Car rental Boston',
        'Car rental Burbank', 'Car rental Charleston', 'Car rental Chicago', 'Car rental Dallas', 'Car rental Denver',
        'Car rental Detroit', 'Car rental Fayetteville', 'Car rental Fort Lauderdale', 'Car rental Fort Worth', 'Car rental Gainesville'
      ],
      extra: [
        'Car rental Houston', 'Car rental Indianapolis', 'Car rental Jacksonville', 'Car rental Kansas City', 'Car rental Las Vegas',
        'Car rental Los Angeles', 'Car rental Miami', 'Car rental Nashville', 'Car rental New Orleans', 'Car rental New York',
        'Car rental Orlando', 'Car rental Philadelphia', 'Car rental Phoenix', 'Car rental Portland', 'Car rental San Antonio'
      ]
    },
    vehicle: {
      initial: [
        'Car rental', 'Cargo van rental', 'Convertible car rental', 'Luxury car rental Charlotte', 'Minivan rental',
        'Box truck rental', 'Electric car rental', 'Truck rental Austin', 'Luxury car rental', 'Classic car rental',
        'Luxury car rental Atlanta', 'Van rental Dallas', 'Truck rental', 'Sport car rental', 'Truck rental Atlanta',
        'Luxury car rental Chicago', 'Van rental', 'SUV rental', 'Van rental Chicago', 'Truck rental Chicago'
      ],
      extra: [
        'Van rental Denver', 'Truck rental El Paso', 'Luxury car rental Los Angeles', 'Van rental Las Vegas', 'Luxury car rental Dallas'
      ]
    },
    airports: {
      initial: [
        'Atlanta Airport car rental', 'Austin Airport car rental', 'Boston Airport car rental', 'Charlotte Airport car rental', 'Chicago Airport car rental',
        'Dallas Airport car rental', 'Denver Airport car rental', 'Fort Lauderdale Airport car rental', 'Honolulu Airport car rental', 'Houston Airport car rental',
        'Las Vegas Airport car rental', 'Los Angeles Airport car rental', 'Miami Airport car rental', 'Newark Airport car rental', 'Orlando Airport car rental',
        'Phoenix Airport car rental', 'San Diego Airport car rental', 'San Francisco Airport car rental', 'Seattle Airport car rental', 'Tampa Airport car rental'
      ],
      extra: []
    },
    international: {
      initial: [
        'Car rental London', 'Car rental Toronto', 'Car rental Montreal', 'Car rental Vancouver', 'Car rental Paris',
        'Car rental Sydney', 'Car rental Melbourne', 'Car rental Brisbane', 'Car rental Calgary', 'Car rental Edmonton',
        'Car rental Halifax', 'Car rental Ottawa', 'Car rental Victoria', 'Car rental Winnipeg', 'Car rental Quebec City',
        'Car rental Manchester', 'Car rental Edinburgh', 'Car rental Glasgow', 'Car rental Birmingham', 'Car rental Bristol'
      ],
      extra: []
    }
  };

  const handleTabChange = (id) => {
    setActiveTab(id);
    setShowMore(false);
  };

  const currentData = tabData[activeTab] || tabData['states'];
  const allItems = showMore ? [...currentData.initial, ...currentData.extra] : currentData.initial;

  return (
    <footer className="bg-black text-white pt-12 pb-16 font-sans">
      <div className="max-w-[1184px] mx-auto px-6">
        
        {/* Dynamic Tabs Section */}
        <div className="flex flex-nowrap overflow-x-auto hide-scrollbar gap-x-8 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`pb-4 text-[12px] font-bold tracking-widest whitespace-nowrap relative ${
                activeTab === tab.id 
                  ? 'text-white border-b-2 border-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Grid Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-4 text-[13px] text-gray-400 font-medium min-h-[160px]">
          {allItems.map((item, idx) => (
            <a key={idx} href="#" className="hover:underline hover:text-white transition-colors block truncate pr-2">
              {item}
            </a>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {currentData.extra.length > 0 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-8 text-[#593cfb] font-bold text-sm hover:underline"
          >
            {showMore ? 'Show less' : 'Show more'}
          </button>
        )}

        <hr className="border-gray-800 my-12" />

        {/* Main Footer Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12">
          
          {/* Columns */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-[16px] mb-5 text-white">Turo</h4>
            <ul className="space-y-3 text-[13px] font-medium text-gray-400">
              <li><a href="#" className="hover:underline hover:text-white">About</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Team</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Policies</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Press</a></li>
              <li><a href="#" className="hover:underline hover:text-white">OpenRoad</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-[16px] mb-5 text-white">Locations</h4>
            <ul className="space-y-3 text-[13px] font-medium text-gray-400">
              <li><a href="#" className="hover:underline hover:text-white">USA (EN)</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Australia (EN)</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Canada (EN)</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Canada (FR)</a></li>
              <li><a href="#" className="hover:underline hover:text-white">France (FR)</a></li>
              <li><a href="#" className="hover:underline hover:text-white">UK (EN)</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-[16px] mb-5 text-white">Explore</h4>
            <ul className="space-y-3 text-[13px] font-medium text-gray-400">
              <li><a href="#" className="hover:underline hover:text-white">Why choose Turo</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Weddings</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Pitch a trip</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Trust & safety</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Get help</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-[16px] mb-5 text-white">Hosting</h4>
            <ul className="space-y-3 text-[13px] font-medium text-gray-400">
              <li><a href="#" className="hover:underline hover:text-white">List your car</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Carculator</a></li>
              <li><a href="#" className="hover:underline hover:text-white">All-Star Hosts</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Host tools</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Insurance & protection</a></li>
            </ul>
          </div>

          {/* Social, Apps, Region - aligned to the right side */}
          <div className="md:col-span-4 flex flex-col md:items-end space-y-6">
            
            {/* Social Icons */}
            <div className="flex gap-4 items-center">
              <a href="#" className="hover:opacity-70 transition-opacity text-white">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity text-white">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity text-white">
                <TiktokIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity text-white">
                <YoutubeIcon className="w-5 h-5" />
              </a>
              <a href="#" className="border border-white px-2 py-0.5 rounded text-[11px] font-bold hover:bg-gray-800 transition-colors ml-1 text-white">
                BLOG
              </a>
            </div>

            {/* App Store Badges */}
            <div className="flex gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-[40px]" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-[40px]" />
              </a>
            </div>

            {/* Language / Region */}
            <div className="flex items-center gap-3 text-[13px] font-bold cursor-pointer hover:bg-gray-800 px-4 py-3 rounded-md transition-colors w-fit border border-transparent hover:border-gray-700">
              <ChevronUpIcon className="w-4 h-4 text-gray-400" />
              <div className="bg-white p-0.5 rounded-sm">
                <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="USA Flag" className="w-6 h-auto block" />
              </div>
              <span className="text-white">English</span>
            </div>
          </div>
        </div>

        {/* Copyright & Legal Links */}
        <div className="text-[12px] text-gray-500 mt-16 flex flex-col md:flex-row gap-6 items-start md:items-center">
          <span>©2026 Turo, Inc.</span>
          <a href="#" className="hover:underline hover:text-white">Terms</a>
          <a href="#" className="hover:underline hover:text-white">Privacy</a>
          <a href="#" className="hover:underline hover:text-white">Cookie preferences</a>
          <a href="#" className="hover:underline hover:text-white">Do not sell or share my personal information</a>
        </div>
        
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </footer>
  );
};

export default Footer;