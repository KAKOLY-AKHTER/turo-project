import { useRef, useState } from 'react';

const cars = [
  {
    id: 1, name: 'Nissan ARIYA',         year: 2024, rating: 4.93, reviews: 112,
    price: 43,  total: 128,  img: '/img1.jpg',
    badge: 'BEST DEAL',  badgeColor: 'bg-red-500',
    desc: 'Sleek electric SUV with cutting-edge tech and exceptional range for modern adventures.',
    tag: 'Electric SUV',
  },
  {
    id: 2, name: 'Subaru Ascent',         year: 2019, rating: 4.98, reviews: 48,
    price: 62,  total: 187,  img: '/img2.jpg',
    badge: 'TOP RATED',  badgeColor: 'bg-blue-600',
    desc: 'Spacious family SUV with all-wheel drive, perfect for mountain roads and city trips.',
    tag: 'Family SUV',
  },
  {
    id: 3, name: 'Audi Q5',               year: 2017, rating: 4.96, reviews: 105,
    price: 63,  total: 190,  img: '/img3.jpg',
    badge: 'PREMIUM',   badgeColor: 'bg-gray-800',
    desc: 'Luxury German engineering meets everyday practicality in this refined premium SUV.',
    tag: 'Luxury Class',
  },
  {
    id: 4, name: 'Subaru XV Crosstrek',   year: 2015, rating: 4.98, reviews: 67,
    price: 40,  total: 119,  img: '/img4.jpg',
    badge: 'POPULAR',   badgeColor: 'bg-orange-500',
    desc: 'Reliable compact crossover great for off-road trails and urban commuting alike.',
    tag: 'Crossover',
  },
  {
    id: 5, name: 'Land Rover Discovery',  year: 2019, rating: 5.0,  reviews: 30,
    price: 64,  total: 193,  img: '/img5.jpg',
    badge: 'LUXURY',    badgeColor: 'bg-purple-600',
    desc: 'Iconic British luxury SUV with superior off-road capability and refined interior.',
    tag: 'Off-Road',
  },
  {
    id: 6, name: 'Subaru Crosstrek',      year: 2022, rating: 5.0,  reviews: 24,
    price: 46,  total: 137,  img: '/img6.jpg',
    badge: 'NEW',       badgeColor: 'bg-green-500',
    desc: 'Latest generation compact SUV combining fuel efficiency with rugged versatility.',
    tag: 'Compact SUV',
  },
  {
    id: 7, name: 'Chevrolet Suburban',    year: 2018, rating: 5.0,  reviews: 22,
    price: 79,  total: 238,  img: '/img7.jpg',
    badge: 'SPACIOUS',  badgeColor: 'bg-red-600',
    desc: 'Full-size powerhouse SUV with massive cargo space, seats up to 9 passengers comfortably.',
    tag: 'Full-Size',
  },
  {
    id: 8, name: 'Jeep Grand Cherokee',   year: 2021, rating: 5.0,  reviews: 74,
    price: 73,  total: 218,  img: '/img8.jpg',
    badge: 'ADVENTURE', badgeColor: 'bg-amber-600',
    desc: 'Legendary trail-rated SUV with bold styling and unmatched off-road performance.',
    tag: 'Trail-Rated',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24">
          <path
            fill={i <= Math.round(rating) ? '#FBBF24' : '#D1D5DB'}
            d="M10.44 2.908c.65-1.274 2.47-1.274 3.119 0l2.187 4.293a.25.25 0 0 0 .184.133l4.754.757c1.41.225 1.973 1.953.964 2.964l-3.404 3.413a.25.25 0 0 0-.07.215l.75 4.764c.223 1.412-1.249 2.48-2.522 1.832l-4.289-2.185a.25.25 0 0 0-.227 0l-4.288 2.185c-1.274.648-2.746-.42-2.523-1.832l.75-4.764a.25.25 0 0 0-.07-.215L2.35 11.055c-1.008-1.011-.446-2.739.964-2.964l4.755-.757a.25.25 0 0 0 .184-.133z"
          />
        </svg>
      ))}
    </div>
  );
}

function CarCard({ car }) {
  return (
    <div className="flex-shrink-0 w-[255px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group border border-gray-100 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-[175px] overflow-hidden rounded-t-2xl">
        <img
          src={car.img}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={e => {
            e.target.src = 'https://images.turo.com/media/vehicle/images/hU6xt7qCSCmvD4nyrfaobA.291x194.jpg';
          }}
        />
        {/* Badge top-left */}
        <span className={`absolute top-3 left-3 ${car.badgeColor} text-white text-[10px] font-black tracking-wider px-2.5 py-1 rounded-full shadow`}>
          {car.badge}
        </span>

        {/* Price badge bottom-right */}
        <div className="absolute bottom-3 right-3 w-[58px] h-[58px] rounded-full bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center shadow-lg">
          <span className="text-white text-[9px] font-semibold tracking-wide leading-none">ONLY</span>
          <span className="text-white text-[16px] font-black leading-tight">${car.price}</span>
        </div>
      </div>

      {/* Card content */}
      <div className="px-4 pt-3 pb-4">
        {/* Stars */}
        <div className="mb-2">
          <StarRating rating={car.rating} />
        </div>

        {/* Name */}
        <h3 className="font-black text-[16px] text-gray-900 leading-tight mb-1.5">
          {car.name}
        </h3>

        {/* Description */}
        <p className="text-[12.5px] text-gray-500 leading-relaxed mb-4 line-clamp-3">
          {car.desc}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-[12.5px] font-bold text-[#593CFB] hover:underline cursor-pointer">
            {car.tag}
          </span>
          <button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#593CFB] flex items-center justify-center transition-all duration-200 group/btn shadow-sm">
            <svg className="w-4 h-4 text-gray-600 group-hover/btn:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CarListings() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft]   = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'right' ? 540 : -540, behavior: 'smooth' });
    setTimeout(() => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    }, 380);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-[20px] font-bold text-gray-900 hover:underline cursor-pointer">
            SUV rental at Denver (DEN) airport
          </h2>
          <p className="text-[13px] text-gray-500 mt-0.5">Average daily prices for a 3-day trip</p>
        </div>

        <div className="flex items-center gap-2 mt-1 shrink-0">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all
              ${canScrollLeft
                ? 'border-gray-300 hover:border-gray-500 text-gray-700 bg-white hover:bg-gray-50 shadow-sm'
                : 'border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed'}`}
          >
            <svg fill="none" height="14" viewBox="0 0 24 24" width="14">
              <path d="M14.47 5.47a.75.75 0 1 1 1.06 1.06L10.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06z" fill="currentColor"/>
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all
              ${canScrollRight
                ? 'border-gray-300 hover:border-gray-500 text-gray-700 bg-white hover:bg-gray-50 shadow-sm'
                : 'border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed'}`}
          >
            <svg fill="none" height="14" viewBox="0 0 24 24" width="14">
              <path d="M8.47 5.47a.75.75 0 0 1 1.06 0l6 6 .05.054a.75.75 0 0 1-.05 1.006l-6 6a.75.75 0 0 1-1.06-1.06L13.94 12 8.47 6.53a.75.75 0 0 1 0-1.06" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </div>
    </section>
  );
}
