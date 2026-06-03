import { useRef, useState } from 'react';

const cars = [
  { id: 17, name: 'Toyota Corolla', year: 2022, rating: 4.99, reviews: 79, price: 35, total: 1040, img: '/img17.png', badge: 'BEST DEAL', desc: 'Reliable and fuel-efficient sedan perfect for daily commutes in Los Angeles.', tag: 'Economy Sedan' },
  { id: 18, name: 'Ford Mustang Mach-E', year: 2025, rating: 5.0, reviews: 3, price: 67, total: 2024, img: '/img18.png', badge: 'NEW', desc: 'Powerful electric SUV with premium features and excellent range.', tag: 'Electric SUV' },
  { id: 19, name: 'Ford Mustang Mach-E', year: 2024, rating: 5.0, reviews: 14, price: 66, total: 1982, img: '/img19.png', badge: 'LUXURY', desc: 'Stylish electric crossover offering thrilling performance.', tag: 'Electric' },
  { id: 20, name: 'Dodge Hornet', year: 2024, rating: 5.0, reviews: 50, price: 68, total: 2049, img: '/img20.png', badge: 'SPORTY', desc: 'Compact performance SUV with bold design.', tag: 'Performance SUV' },
  { id: 21, name: 'Ram 1500', year: 2026, rating: 5.0, reviews: 8, price: 77, total: 2324, img: '/img21.png', badge: 'TRUCK', desc: 'Powerful full-size pickup truck, new listing.', tag: 'Pickup Truck' },
  { id: 22, name: 'Genesis GV80', year: 2026, rating: 5.0, reviews: 10, price: 100, total: 2997, img: '/img22.png', badge: 'LUXURY', desc: 'Premium luxury SUV with elegant design.', tag: 'Luxury SUV' },
  { id: 23, name: 'Dodge Charger Daytona', year: 2024, rating: 5.0, reviews: 1, price: 61, total: 1842, img: '/img23.png', badge: 'SPORTY', desc: 'Electric muscle car with aggressive styling.', tag: 'Electric Muscle' },
  { id: 24, name: 'Kia Rio', year: 2023, rating: 5.0, reviews: 92, price: 38, total: 1150, img: '/img24.png', badge: 'ECONOMY', desc: 'Affordable and efficient compact car for city driving.', tag: 'Compact Car' },
];
const cars2 = [
  { id: 25, name: 'Chevrolet Corvette', year: 2020, rating: 4.98, reviews: 66, price: 91, total: 2729, img: '/img25.png', badge: 'ICONIC', desc: 'American sports car legend with breathtaking design.', tag: 'Sports Car' },
  { id: 26, name: 'Chevrolet Corvette', year: 2025, rating: 5.0, reviews: 24, price: 197, total: 5903, img: '/img26.png', badge: 'SUPERCAR', desc: 'Latest generation mid-engine supercar.', tag: 'Supercar' },
  { id: 27, name: 'Tesla Model S', year: 2021, rating: 4.98, reviews: 124, price: 67, total: 2012, img: '/img27.png', badge: 'PREMIUM', desc: 'Flagship electric sedan with advanced autopilot.', tag: 'Electric Luxury' },
  { id: 28, name: 'Chevrolet Corvette', year: 2024, rating: 5.0, reviews: 15, price: 166, total: 4989, img: '/img28.png', badge: 'LUXURY', desc: 'Modern Corvette with aggressive styling.', tag: 'Sports Car' },
  { id: 29, name: 'Lamborghini Huracan', year: 2019, rating: 5.0, reviews: 12, price: 641, total: 19214, img: '/img29.png', badge: 'EXOTIC', desc: 'Italian supercar with extreme performance.', tag: 'Exotic' },
  { id: 30, name: 'Chevrolet Corvette', year: 2020, rating: 4.98, reviews: 25, price: 126, total: 3788, img: '/img30.png', badge: 'ICONIC', desc: 'Classic American sports car.', tag: 'Sports Car' },
  { id: 31, name: 'Mercedes-Benz S-Class', year: 2024, rating: 5.0, reviews: 18, price: 182, total: 5471, img: '/img31.png', badge: 'LUXURY', desc: 'Ultimate luxury sedan with cutting-edge technology.', tag: 'Luxury Sedan' },
  { id: 32, name: 'Chevrolet Corvette', year: 2024, rating: 5.0, reviews: 20, price: 162, total: 4848, img: '/img32.png', badge: 'LUXURY', desc: 'High-performance sports car.', tag: 'Sports Car' },
];
const cars3 = [
  { id: 33, name: 'Toyota Corolla', year: 2026, rating: 5.0, reviews: 13, price: 33, total: 984, img: '/img33.png', badge: 'NEW', desc: 'Brand new 2026 Toyota Corolla with latest features.', tag: 'Economy Sedan' },
  { id: 34, name: 'Hyundai Tucson', year: 2026, rating: 5.0, reviews: 11, price: 38, total: 1134, img: '/img34.png', badge: 'NEW', desc: 'Modern compact SUV with advanced safety features.', tag: 'Compact SUV' },
  { id: 35, name: 'Nissan Rogue', year: 2026, rating: 4.96, reviews: 27, price: 35, total: 1051, img: '/img35.png', badge: 'NEW', desc: 'Spacious crossover with smooth driving experience.', tag: 'Crossover' },
  { id: 36, name: 'Nissan Kicks', year: 2026, rating: 5.0, reviews: 9, price: 33, total: 981, img: '/img36.png', badge: 'NEW', desc: 'Stylish and fuel-efficient compact crossover.', tag: 'Compact SUV' },
  { id: 37, name: 'Hyundai Sonata', year: 2026, rating: 5.0, reviews: 15, price: 38, total: 1153, img: '/img37.png', badge: 'NEW', desc: 'Elegant midsize sedan with premium features.', tag: 'Midsize Sedan' },
  { id: 38, name: 'Chevrolet Equinox', year: 2026, rating: 5.0, reviews: 12, price: 38, total: 1147, img: '/img38.png', badge: 'NEW', desc: 'Versatile and comfortable compact SUV.', tag: 'Compact SUV' },
  { id: 39, name: 'Toyota Camry Hybrid', year: 2026, rating: 5.0, reviews: 18, price: 39, total: 1175, img: '/img39.png', badge: 'NEW', desc: 'Efficient hybrid sedan with excellent fuel economy.', tag: 'Hybrid Sedan' },
  { id: 40, name: 'Chevrolet Trax', year: 2026, rating: 5.0, reviews: 14, price: 36, total: 1066, img: '/img40.png', badge: 'NEW', desc: 'Compact and affordable crossover.', tag: 'Compact SUV' },
];
const cars4 = [
  { id: 41, name: 'Ford Mustang Mach-E', year: 2024, rating: 5.0, reviews: 5, price: 35, total: 1064, img: '/img41.png', badge: 'ELECTRIC', desc: 'Popular electric SUV with great performance and range.', tag: 'Electric SUV' },
  { id: 42, name: 'Ford Escape', year: 2025, rating: 5.0, reviews: 2, price: 33, total: 997, img: '/img42.png', badge: 'NEW', desc: 'Versatile compact SUV with modern features.', tag: 'Compact SUV' },
  { id: 43, name: 'Porsche Macan', year: 2018, rating: 5.0, reviews: 8, price: 38, total: 1136, img: '/img43.png', badge: 'LUXURY', desc: 'Sporty luxury SUV with premium driving dynamics.', tag: 'Luxury SUV' },
  { id: 44, name: 'Lexus NX', year: 2022, rating: 5.0, reviews: 10, price: 36, total: 1091, img: '/img44.png', badge: 'LUXURY', desc: 'Reliable luxury compact SUV with elegant design.', tag: 'Luxury SUV' },
  { id: 45, name: 'Mitsubishi Outlander Sport', year: 2022, rating: 4.9, reviews: 14, price: 29, total: 873, img: '/img45.png', badge: 'POPULAR', desc: 'Compact crossover with good value and reliability.', tag: 'Compact SUV' },
  { id: 46, name: 'Acura RDX', year: 2024, rating: 5.0, reviews: 9, price: 46, total: 1376, img: '/img46.png', badge: 'LUXURY', desc: 'Sporty and luxurious compact SUV.', tag: 'Luxury SUV' },
  { id: 47, name: 'Toyota RAV4', year: 2022, rating: 5.0, reviews: 22, price: 31, total: 932, img: '/img47.png', badge: 'RELIABLE', desc: 'Highly reliable and versatile compact SUV.', tag: 'Compact SUV' },
  { id: 48, name: 'Mazda CX-5', year: 2021, rating: 5.0, reviews: 18, price: 32, total: 971, img: '/img48.png', badge: 'PREMIUM', desc: 'Stylish and fun-to-drive compact SUV.', tag: 'Compact SUV' },
];
const cars5 = [
  { id: 49, name: 'Toyota RAV4 Hybrid', year: 2025, rating: 4.83, reviews: 6, price: 64, total: 191, img: '/img49.png', badge: 'HYBRID', desc: 'Efficient hybrid SUV with excellent fuel economy and reliability.', tag: 'Hybrid SUV' },
  { id: 50, name: 'Kia Niro EV', year: 2025, rating: 4.93, reviews: 66, price: 58, total: 174, img: '/img50.png', badge: 'ELECTRIC', desc: 'Modern electric SUV with impressive range and advanced features.', tag: 'Electric SUV' },
  { id: 51, name: 'Volkswagen Tiguan', year: 2024, rating: 4.97, reviews: 36, price: 61, total: 184, img: '/img51.png', badge: 'POPULAR', desc: 'Spacious and comfortable compact SUV with premium feel.', tag: 'Compact SUV' },
  { id: 52, name: 'Volkswagen Tiguan', year: 2014, rating: 4.98, reviews: 66, price: 47, total: 142, img: '/img52.png', badge: 'AFFORDABLE', desc: 'Reliable compact SUV offering great value for money.', tag: 'Compact SUV' },
  { id: 53, name: 'Tesla Model X', year: 2022, rating: 5.0, reviews: 50, price: 64, total: 192, img: '/img53.png', badge: 'PREMIUM', desc: 'Luxury electric SUV with falcon wing doors and advanced technology.', tag: 'Electric SUV' },
  { id: 54, name: 'Toyota Corolla', year: 2025, rating: 5.0, reviews: 50, price: 58, total: 175, img: '/img54.png', badge: 'BEST DEAL', desc: 'Reliable and fuel-efficient sedan, perfect for city driving.', tag: 'Economy Sedan' },
  { id: 55, name: 'Jeep Compass', year: 2025, rating: 5.0, reviews: 56, price: 58, total: 175, img: '/img55.png', badge: 'NEW', desc: 'Modern compact SUV with rugged styling and capable performance.', tag: 'Compact SUV' },
  { id: 56, name: 'MINI Clubman', year: 2017, rating: 5.0, reviews: 7, price: 47, total: 142, img: '/img56.png', badge: 'UNIQUE', desc: 'Stylish and fun-to-drive wagon with unique barn doors.', tag: 'Wagon' },
];
const cars6 = [
  { id: 57, name: 'BMW X2', year: 2018, rating: 5.0, reviews: 9, price: 61, total: 182, img: '/img57.png', badge: 'PREMIUM', desc: 'Sporty and stylish compact luxury SUV with premium driving experience.', tag: 'Luxury SUV' },
  { id: 58, name: 'Jeep Compass', year: 2024, rating: 4.99, reviews: 162, price: 53, total: 159, img: '/img58.png', badge: 'POPULAR', desc: 'Versatile compact SUV with bold styling and capable features.', tag: 'Compact SUV' },
  { id: 59, name: 'Kia K4', year: 2025, rating: 4.86, reviews: 63, price: 62, total: 185, img: '/img59.png', badge: 'NEW', desc: 'Modern and stylish midsize sedan with advanced technology.', tag: 'Midsize Sedan' },
  { id: 60, name: 'Toyota Camry Hybrid', year: 2016, rating: 5.0, reviews: 6, price: 51, total: 154, img: '/img60.png', badge: 'HYBRID', desc: 'Reliable and fuel-efficient hybrid sedan with excellent mileage.', tag: 'Hybrid Sedan' },
  { id: 61, name: 'GMC Terrain', year: 2022, rating: 5.0, reviews: 12, price: 63, total: 190, img: '/img61.png', badge: 'PREMIUM', desc: 'Spacious and comfortable SUV with premium interior.', tag: 'Compact SUV' },
  { id: 62, name: 'Toyota Corolla', year: 2022, rating: 5.0, reviews: 50, price: 52, total: 156, img: '/img62.png', badge: 'BEST DEAL', desc: 'Highly reliable and fuel-efficient compact sedan.', tag: 'Economy Sedan' },
  { id: 63, name: 'Honda Accord', year: 2023, rating: 5.0, reviews: 25, price: 63, total: 189, img: '/img63.png', badge: 'RELIABLE', desc: 'Spacious, comfortable and highly reliable midsize sedan.', tag: 'Midsize Sedan' },
  { id: 64, name: 'Mitsubishi Mirage', year: 2018, rating: 4.9, reviews: 15, price: 44, total: 133, img: '/img64.png', badge: 'ECONOMY', desc: 'Ultra fuel-efficient and affordable compact car for city driving.', tag: 'Compact Car' },
];
const cars7 = [
  { id: 65, name: 'Tesla Cybertruck', year: 2024, rating: 5.0, reviews: 75, price: 245, total: 734, img: '/img65.png', badge: 'ELECTRIC', desc: 'Futuristic all-electric pickup with massive power and unique design.', tag: 'Electric Truck' },
  { id: 66, name: 'Ford Maverick', year: 2026, rating: 5.0, reviews: 1, price: 99, total: 298, img: '/img66.png', badge: 'NEW', desc: 'Compact and efficient pickup truck perfect for city and light hauling.', tag: 'Compact Truck' },
  { id: 67, name: 'Tesla Cybertruck', year: 2024, rating: 5.0, reviews: 44, price: 213, total: 640, img: '/img67.png', badge: 'POPULAR', desc: 'High-performance electric truck with advanced features.', tag: 'Electric Truck' },
  { id: 68, name: 'Ram 1500', year: 2019, rating: 5.0, reviews: 3, price: 77, total: 231, img: '/img68.png', badge: 'AFFORDABLE', desc: 'Classic full-size pickup with strong towing capacity and comfort.', tag: 'Full-Size Truck' },
  { id: 69, name: 'Tesla Cybertruck', year: 2024, rating: 5.0, reviews: 28, price: 356, total: 1067, img: '/img69.png', badge: 'PREMIUM', desc: 'Top-spec Cybertruck with exceptional range and luxury interior.', tag: 'Electric Truck' },
  { id: 70, name: 'Tesla Cybertruck', year: 2024, rating: 5.0, reviews: 19, price: 302, total: 906, img: '/img70.png', badge: 'LUXURY', desc: 'Powerful electric pickup offering cutting-edge technology.', tag: 'Electric Truck' },
  { id: 71, name: 'GMC Sierra 1500', year: 2022, rating: 5.0, reviews: 12, price: 89, total: 267, img: '/img71.png', badge: 'PREMIUM', desc: 'Premium full-size truck with refined interior and strong performance.', tag: 'Full-Size Truck' },
  { id: 72, name: 'Chevrolet Silverado 1500', year: 2020, rating: 5.0, reviews: 8, price: 121, total: 363, img: '/img72.png', badge: 'RELIABLE', desc: 'Durable and powerful full-size pickup trusted for work and daily use.', tag: 'Full-Size Truck' },
];
const cars8 = [
  { id: 73, name: 'Toyota Camry', year: 2024, rating: 5.0, reviews: 8, price: 69, total: 207, img: '/img73.png', badge: 'BEST DEAL', desc: 'Reliable and comfortable midsize sedan with excellent fuel efficiency.', tag: 'Midsize Sedan' },
  { id: 74, name: 'Toyota Camry', year: 2024, rating: 4.96, reviews: 80, price: 68, total: 204, img: '/img74.png', badge: 'POPULAR', desc: 'Smooth driving experience with modern features and spacious interior.', tag: 'Midsize Sedan' },
  { id: 75, name: 'Toyota Camry', year: 2019, rating: 4.99, reviews: 91, price: 54, total: 163, img: '/img75.png', badge: 'AFFORDABLE', desc: 'Well-maintained classic Camry offering great value and reliability.', tag: 'Midsize Sedan' },
  { id: 76, name: 'Toyota Tacoma', year: 2025, rating: 4.98, reviews: 45, price: 80, total: 239, img: '/img76.png', badge: 'TRUCK', desc: 'Rugged and capable midsize pickup truck perfect for work and adventure.', tag: 'Pickup Truck' },
  { id: 77, name: 'Toyota Camry', year: 2023, rating: 5.0, reviews: 67, price: 71, total: 213, img: '/img77.png', badge: 'RELIABLE', desc: 'Modern Camry with advanced safety features and premium comfort.', tag: 'Midsize Sedan' },
  { id: 78, name: 'Toyota Camry', year: 2020, rating: 4.97, reviews: 54, price: 74, total: 222, img: '/img78.png', badge: 'PREMIUM', desc: 'Spacious and fuel-efficient sedan with excellent condition.', tag: 'Midsize Sedan' },
  { id: 79, name: 'Toyota Sienna', year: 2024, rating: 5.0, reviews: 32, price: 103, total: 308, img: '/img79.png', badge: 'FAMILY', desc: 'Versatile and spacious hybrid minivan ideal for families and groups.', tag: 'Minivan' },
  { id: 80, name: 'Toyota Corolla', year: 2026, rating: 5.0, reviews: 19, price: 64, total: 193, img: '/img80.png', badge: 'NEW', desc: 'Brand new compact sedan with latest technology and safety features.', tag: 'Compact Sedan' },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="none">
          <path fill={i <= Math.round(rating) ? '#FBBF24' : '#E5E7EB'}
            d="M10.44 2.908c.65-1.274 2.47-1.274 3.119 0l2.187 4.293a.25.25 0 0 0 .184.133l4.754.757c1.41.225 1.973 1.953.964 2.964l-3.404 3.413a.25.25 0 0 0-.07.215l.75 4.764c.223 1.412-1.249 2.48-2.522 1.832l-4.289-2.185a.25.25 0 0 0-.227 0l-4.288 2.185c-1.274.648-2.746-.42-2.523-1.832l.75-4.764a.25.25 0 0 0-.07-.215L2.35 11.055c-1.008-1.011-.446-2.739.964-2.964l4.755-.757a.25.25 0 0 0 .184-.133z"/>
        </svg>
      ))}
    </div>
  );
}

function CarCard({ car }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="
      flex-shrink-0
      w-[85vw] sm:w-[45vw] md:w-[calc(33%-12px)] lg:w-[calc(25%-12px)]
      bg-white rounded-2xl border border-gray-100
      shadow-[0_2px_12px_rgba(0,0,0,0.07)]
      hover:shadow-[0_8px_32px_rgba(89,60,251,0.13)]
      hover:-translate-y-1.5
      transition-all duration-300 ease-out
      overflow-hidden cursor-pointer group
      flex flex-col
    ">
      {/* Image */}
      <div className="relative h-[190px] overflow-hidden">
        <img src={car.img} alt={car.name}
          className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500 ease-out"
          onError={e => { e.target.src = 'https://images.turo.com/media/vehicle/images/hU6xt7qCSCmvD4nyrfaobA.291x194.jpg'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 bg-[#593CFB] text-white text-[10px] font-black tracking-widest px-2.5 py-1 rounded-full shadow-lg shadow-[#593CFB]/30">
          {car.badge}
        </span>
        <button
          onClick={e => { e.stopPropagation(); setLiked(p => !p); }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <svg width="15" height="15" viewBox="0 0 24 24"
            fill={liked ? '#ef4444' : 'none'}
            stroke={liked ? '#ef4444' : '#9ca3af'}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <div className="absolute bottom-3 right-3 bg-black/65 backdrop-blur-md rounded-full w-[54px] h-[54px] flex flex-col items-center justify-center shadow-xl border border-white/10">
          <span className="text-white/80 text-[8px] font-semibold tracking-widest leading-none uppercase">Only</span>
          <span className="text-white text-[15px] font-black leading-tight">${car.price}</span>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 pt-3.5 pb-4 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <StarRating rating={car.rating} />
            <span className="text-[12px] font-bold text-gray-800">{car.rating}</span>
            <span className="text-[11px] text-gray-400">({car.reviews})</span>
          </div>
          <span className="text-[11px] font-bold text-[#593CFB] bg-[#593CFB]/8 px-2 py-0.5 rounded-lg border border-[#593CFB]/15">
            {car.year}
          </span>
        </div>
        <h3 className="font-black text-[15px] text-gray-900 leading-snug mb-1.5 tracking-tight">{car.name}</h3>
        <p className="text-[12px] text-gray-500 leading-relaxed mb-3 line-clamp-2 flex-1">{car.desc}</p>

        <div className="flex items-stretch gap-0 mb-4 rounded-xl overflow-hidden border border-gray-100 bg-gray-50/80">
          <div className="flex-1 flex flex-col items-center justify-center py-2.5">
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider leading-none mb-1">Per Day</p>
            <p className="text-[15px] font-black text-gray-900">${car.price}</p>
          </div>
          <div className="w-px bg-gray-200" />
          <div className="flex-1 flex flex-col items-center justify-center py-2.5">
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider leading-none mb-1">Monthly</p>
            <p className="text-[15px] font-black text-gray-900">${car.total}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[12px] font-bold text-[#593CFB] hover:underline cursor-pointer underline-offset-2">{car.tag}</span>
          <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#593CFB] flex items-center justify-center transition-all duration-200 group/btn shadow-sm hover:shadow-[#593CFB]/30 hover:shadow-md">
            <svg className="w-3.5 h-3.5 text-gray-500 group-hover/btn:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function ScrollSection({ title, subtitle, items }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = (el) => {
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'right' ? 560 : -560, behavior: 'smooth' });
    setTimeout(() => updateScrollState(el), 380);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-end justify-between mb-6 gap-4">
        <div>
          <h2 className="text-[18px] sm:text-[20px] font-black text-gray-900 leading-snug tracking-tight hover:text-[#593CFB] cursor-pointer transition-colors">
            {title}
          </h2>
          <p className="text-[13px] text-gray-400 mt-1 font-medium">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button onClick={() => scroll('left')} disabled={!canScrollLeft}
            className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all duration-200
              ${canScrollLeft ? 'border-gray-200 hover:border-[#593CFB] text-gray-600 hover:text-[#593CFB] bg-white shadow-sm' : 'border-gray-100 text-gray-300 bg-gray-50 cursor-not-allowed'}`}>
            <svg fill="none" height="13" viewBox="0 0 24 24" width="13">
              <path d="M14.47 5.47a.75.75 0 1 1 1.06 1.06L10.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06z" fill="currentColor"/>
            </svg>
          </button>
          <button onClick={() => scroll('right')} disabled={!canScrollRight}
            className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all duration-200
              ${canScrollRight ? 'border-gray-200 hover:border-[#593CFB] text-gray-600 hover:text-[#593CFB] bg-white shadow-sm' : 'border-gray-100 text-gray-300 bg-gray-50 cursor-not-allowed'}`}>
            <svg fill="none" height="13" viewBox="0 0 24 24" width="13">
              <path d="M8.47 5.47a.75.75 0 0 1 1.06 0l6 6 .05.054a.75.75 0 0 1-.05 1.006l-6 6a.75.75 0 0 1-1.06-1.06L13.94 12 8.47 6.53a.75.75 0 0 1 0-1.06" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      <div ref={scrollRef} onScroll={e => updateScrollState(e.currentTarget)}
        className="flex gap-4 overflow-x-auto pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {items.map(car => <CarCard key={car.id} car={car} />)}
      </div>
    </section>
  );
}

export default function CarListings2() {
  return (
    <div className="bg-[#f8f9fc] py-2">
      <ScrollSection title="Monthly car rentals in Los Angeles" subtitle="Average monthly prices" items={cars} />
      <ScrollSection title="Monthly luxury car rentals in Orlando" subtitle="Premium & Exotic vehicles" items={cars2} />
      <ScrollSection title="Monthly newer car rentals in Dallas" subtitle="2026 models with latest features" items={cars3} />
      <ScrollSection title="Monthly SUV rentals in Miami" subtitle="Popular SUVs with great monthly deals" items={cars4} />
      <ScrollSection title="Affordable car rental in San Francisco" subtitle="Average daily prices for a 3-day trip" items={cars5} />
      <ScrollSection title="Car rentals at Newark (EWR) airport" subtitle="Average daily prices for a 3-day trip" items={cars6} />
      <ScrollSection title="Truck rental in Newark" subtitle="Average daily prices for a 3-day trip" items={cars7} />
      <ScrollSection title="Toyota rental at Dallas (DFW) airport" subtitle="Average daily prices for a 3-day trip" items={cars8} />
    </div>
  );
}