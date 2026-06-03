import { useRef, useState } from 'react';

const cars = [
  { id: 1,  name: 'Nissan ARIYA',        year: 2024, rating: 4.93, reviews: 112, price: 43,  total: 128,  img: '/img1.png',  badge: 'BEST DEAL', desc: 'Sleek electric SUV with cutting-edge tech and exceptional range for modern adventures.',    tag: 'Electric SUV'   },
  { id: 2,  name: 'Subaru Ascent',        year: 2019, rating: 4.98, reviews: 48,  price: 62,  total: 187,  img: '/img2.png',  badge: 'TOP RATED', desc: 'Spacious family SUV with all-wheel drive, perfect for mountain roads and city trips.',       tag: 'Family SUV'     },
  { id: 3,  name: 'Audi Q5',              year: 2017, rating: 4.96, reviews: 105, price: 63,  total: 190,  img: '/img3.png',  badge: 'PREMIUM',   desc: 'Luxury German engineering meets everyday practicality in this refined premium SUV.',        tag: 'Luxury Class'   },
  { id: 4,  name: 'Subaru XV Crosstrek',  year: 2015, rating: 4.98, reviews: 67,  price: 40,  total: 119,  img: '/img4.png',  badge: 'POPULAR',   desc: 'Reliable compact crossover great for off-road trails and urban commuting alike.',           tag: 'Crossover'      },
  { id: 5,  name: 'Land Rover Discovery', year: 2019, rating: 5.0,  reviews: 30,  price: 64,  total: 193,  img: '/img5.png',  badge: 'LUXURY',    desc: 'Iconic British luxury SUV with superior off-road capability and refined interior.',         tag: 'Off-Road'       },
  { id: 6,  name: 'Subaru Crosstrek',     year: 2022, rating: 5.0,  reviews: 24,  price: 46,  total: 137,  img: '/img6.png',  badge: 'NEW',       desc: 'Latest generation compact SUV combining fuel efficiency with rugged versatility.',           tag: 'Compact SUV'    },
  { id: 7,  name: 'Chevrolet Suburban',   year: 2018, rating: 5.0,  reviews: 22,  price: 79,  total: 238,  img: '/img7.png',  badge: 'SPACIOUS',  desc: 'Full-size powerhouse SUV with massive cargo space, seats up to 9 passengers comfortably.', tag: 'Full-Size'      },
  { id: 8,  name: 'Jeep Grand Cherokee',  year: 2021, rating: 5.0,  reviews: 74,  price: 73,  total: 218,  img: '/img8.png',  badge: 'ADVENTURE', desc: 'Legendary trail-rated SUV with bold styling and unmatched off-road performance.',           tag: 'Trail-Rated'    },
];

const cars2 = [
  { id: 9,  name: 'Chevrolet Bolt EV',   year: 2022, rating: 5.0,  reviews: 17,  price: 50,  total: 150,  img: '/img9.png',  badge: 'ELECTRIC',  desc: 'Affordable all-electric hatchback with impressive range and futuristic styling.',           tag: 'Electric'       },
  { id: 10, name: 'Cadillac Escalade',   year: 2024, rating: 4.96, reviews: 84,  price: 122, total: 365,  img: '/img10.png', badge: 'PREMIUM',   desc: 'Iconic full-size luxury SUV with bold presence and a lavish, tech-forward interior.',      tag: 'Luxury SUV'     },
  { id: 11, name: 'Cadillac XT6',        year: 2021, rating: 4.92, reviews: 26,  price: 82,  total: 245,  img: '/img11.png', badge: 'TOP RATED', desc: 'Three-row luxury crossover that blends refinement with everyday versatility.',              tag: 'Premium SUV'    },
  { id: 12, name: 'BMW X1',              year: 2016, rating: 5.0,  reviews: 4,   price: 63,  total: 190,  img: '/img12.png', badge: 'POPULAR',   desc: 'Compact luxury SUV delivering sharp handling and premium features in a nimble package.',    tag: 'Compact Luxury' },
  { id: 13, name: 'Tesla Model Y',       year: 2023, rating: 4.95, reviews: 58,  price: 95,  total: 285,  img: '/img13.png', badge: 'NEW',       desc: 'Long-range electric crossover with autopilot, massive cargo space and over-the-air updates.',tag: 'Electric SUV'   },
  { id: 14, name: 'Ford Mustang Mach-E', year: 2022, rating: 4.88, reviews: 33,  price: 74,  total: 222,  img: '/img14.png', badge: 'SPORTY',    desc: 'All-electric muscle crossover combining Mustang heritage with zero-emission performance.',   tag: 'Electric'       },
  { id: 15, name: 'Mercedes GLE',        year: 2020, rating: 4.97, reviews: 41,  price: 110, total: 330,  img: '/img15.png', badge: 'LUXURY',    desc: 'Sophisticated German luxury SUV with a plush ride, air suspension and cutting-edge tech.',  tag: 'Luxury SUV'     },
  { id: 16, name: 'Toyota 4Runner',      year: 2019, rating: 5.0,  reviews: 29,  price: 68,  total: 204,  img: '/img16.png', badge: 'ADVENTURE', desc: 'Rugged body-on-frame SUV built for serious off-road adventures and long haul reliability.', tag: 'Off-Road'       },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24">
          <path fill={i <= Math.round(rating) ? '#FBBF24' : '#D1D5DB'}
            d="M10.44 2.908c.65-1.274 2.47-1.274 3.119 0l2.187 4.293a.25.25 0 0 0 .184.133l4.754.757c1.41.225 1.973 1.953.964 2.964l-3.404 3.413a.25.25 0 0 0-.07.215l.75 4.764c.223 1.412-1.249 2.48-2.522 1.832l-4.289-2.185a.25.25 0 0 0-.227 0l-4.288 2.185c-1.274.648-2.746-.42-2.523-1.832l.75-4.764a.25.25 0 0 0-.07-.215L2.35 11.055c-1.008-1.011-.446-2.739.964-2.964l4.755-.757a.25.25 0 0 0 .184-.133z"/>
        </svg>
      ))}
    </div>
  );
}

function CarCard({ car }) {
  const [liked, setLiked] = useState(false);
  return (
    // Mobile: ~80vw card, Tablet: ~44vw, Desktop: fixed 272px
    <div className="
      flex-shrink-0
      w-[78vw] sm:w-[44vw] lg:w-[272px]
      bg-white rounded-2xl shadow-md hover:shadow-xl
      transition-all duration-300 overflow-hidden cursor-pointer group
      border border-gray-100 hover:-translate-y-1
    ">
      {/* Image */}
      <div className="relative h-[160px] sm:h-[175px] overflow-hidden rounded-t-2xl">
        <img
          src={car.img}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={e => { e.target.src = 'https://images.turo.com/media/vehicle/images/hU6xt7qCSCmvD4nyrfaobA.291x194.jpg'; }}
        />
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-black tracking-wider px-2.5 py-1 rounded-full shadow">
          {car.badge}
        </span>
        <button
          onClick={e => { e.stopPropagation(); setLiked(p => !p); }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <svg width="16" height="16" viewBox="0 0 24 24"
            fill={liked ? '#ef4444' : 'none'}
            stroke={liked ? '#ef4444' : '#6b7280'}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <div className="absolute bottom-3 right-3 w-[54px] h-[54px] rounded-full bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center shadow-lg">
          <span className="text-white text-[9px] font-semibold tracking-wide leading-none">ONLY</span>
          <span className="text-white text-[15px] font-black leading-tight">${car.price}</span>
        </div>
      </div>

      {/* Body */}
      <div className="px-3 sm:px-4 pt-3 pb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <StarRating rating={car.rating} />
            <span className="text-[12px] font-semibold text-gray-800">{car.rating}</span>
            <span className="text-[11px] text-gray-400">({car.reviews})</span>
          </div>
          <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">{car.year}</span>
        </div>
        <h3 className="font-black text-[14px] sm:text-[15px] text-gray-900 leading-tight mb-1.5">{car.name}</h3>
        <p className="text-[12px] text-gray-500 leading-relaxed mb-3 line-clamp-2">{car.desc}</p>
        <div className="flex items-center gap-2 mb-3 sm:mb-4 bg-gray-50 rounded-xl px-3 py-2 border border-gray-100">
          <div className="flex-1 text-center">
            <p className="text-[10px] text-gray-400 font-medium">Per Day</p>
            <p className="text-[13px] sm:text-[14px] font-black text-gray-900">${car.price}</p>
          </div>
          <div className="w-px h-7 bg-gray-200" />
          <div className="flex-1 text-center">
            <p className="text-[10px] text-gray-400 font-medium">3-Day Total</p>
            <p className="text-[13px] sm:text-[14px] font-black text-gray-900">${car.total}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-bold text-[#593CFB] hover:underline cursor-pointer">{car.tag}</span>
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

function ScrollSection({ title, subtitle, items }) {
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
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-[17px] sm:text-[20px] font-bold text-gray-900 hover:underline cursor-pointer leading-snug">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[12px] sm:text-[13px] text-gray-500 mt-0.5">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-2 mt-1 shrink-0">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all
              ${canScrollLeft
                ? 'border-gray-300 hover:border-gray-500 text-gray-700 bg-white hover:bg-gray-50 shadow-sm'
                : 'border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed opacity-50'}`}
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
                : 'border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed opacity-50'}`}
          >
            <svg fill="none" height="14" viewBox="0 0 24 24" width="14">
              <path d="M8.47 5.47a.75.75 0 0 1 1.06 0l6 6 .05.054a.75.75 0 0 1-.05 1.006l-6 6a.75.75 0 0 1-1.06-1.06L13.94 12 8.47 6.53a.75.75 0 0 1 0-1.06" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 overflow-x-auto pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map(car => <CarCard key={car.id} car={car} />)}
      </div>
    </section>
  );
}

export default function CarListings() {
  return (
    <>
      <ScrollSection
        title="SUV rental at Denver (DEN) airport"
        subtitle="Average daily prices for a 3-day trip"
        items={cars}
      />
      <ScrollSection
        title="Car rentals in Denver"
        subtitle="Average daily prices for a 3-day trip"
        items={cars2}
      />
    </>
  );
}