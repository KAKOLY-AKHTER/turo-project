import { useRef, useState, useEffect } from 'react';

const cities = [
  { name: 'Los Angeles',   dates: 'June 12 – July 10', img: 'https://resources.turo.com/next-js/0.0.1/_next/static/media/los-angeles-ca-1x.0nk_8-atxoudy.webp' },
  { name: 'Toronto',       dates: 'June 12 – July 2',  img: 'https://resources.turo.com/next-js/0.0.1/_next/static/media/toronto-1x.048u32~tex1yk.webp' },
  { name: 'San Francisco', dates: 'June 13 – July 1',  img: 'https://resources.turo.com/next-js/0.0.1/_next/static/media/golden-gate-bridge-san-francisco-california-1x.0_r.7p6hqf~-f.webp' },
  { name: 'Vancouver',     dates: 'June 13 – July 7',  img: 'https://resources.turo.com/next-js/0.0.1/_next/static/media/vancouver-bc-1x.156on1gpd4nph.webp' },
  { name: 'Boston',        dates: 'June 13 – July 9',  img: 'https://resources.turo.com/next-js/0.0.1/_next/static/media/boston-massachusetts-1x.0~fs30j1k.x5l.webp' },
  { name: 'New York',      dates: 'June 13 – July 19', img: 'https://resources.turo.com/next-js/0.0.1/_next/static/media/new-york-us-1x.0q3sn~0-9-281.webp' },
  { name: 'Houston',       dates: 'June 14 – July 4',  img: 'https://resources.turo.com/next-js/0.0.1/_next/static/media/houston-tx-1x.0-ogkf6v7b1h0.webp' },
  { name: 'Dallas',        dates: 'June 14 – July 14', img: 'https://resources.turo.com/next-js/0.0.1/_next/static/media/dallas-tx-1x.118nd3sik4ab1.webp' },
  { name: 'Philadelphia',  dates: 'June 14 – July 4',  img: 'https://resources.turo.com/next-js/0.0.1/_next/static/media/philadelphia-pa-1x.0ga.q.k_pu_0u.webp' },
  { name: 'Seattle',       dates: 'June 15 – July 6',  img: 'https://resources.turo.com/next-js/0.0.1/_next/static/media/seattle-wa-1x.0w97tek_9qsep.webp' },
  { name: 'Atlanta',       dates: 'June 15 – July 15', img: 'https://resources.turo.com/next-js/0.0.1/_next/static/media/atlanta-georgia-1x.186h2nzoicsl4.webp' },
  { name: 'Miami',         dates: 'June 15 – July 18', img: 'https://resources.turo.com/next-js/0.0.1/_next/static/media/miami-beach-fl-1x.0uoe3-b1yor4e.webp' },
  { name: 'Kansas City',   dates: 'June 16 – July 11', img: 'https://resources.turo.com/next-js/0.0.1/_next/static/media/kansas-city-mo-1x.17zgbfn~fnk2u.webp' },
];

const BallIcon = () => (
  <div style={{ position: 'relative', width: '110px', height: '90px' }}>
    <div style={{
      position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
      width: '80px', height: '28px', borderRadius: '50%', background: '#ede9fe',
    }} />
    <svg style={{ position: 'absolute', left: '0px', top: '28px', overflow: 'visible' }} width="22" height="30" viewBox="0 0 22 30">
      <path d="M18 2 Q2 15 18 28" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" fill="none"/>
    </svg>
    <svg style={{ position: 'absolute', right: '0px', top: '28px', overflow: 'visible' }} width="22" height="30" viewBox="0 0 22 30">
      <path d="M4 2 Q20 15 4 28" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" fill="none"/>
    </svg>
    <img
      src="/soccer_ball.png"
      alt="Soccer ball"
      style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '72px', height: '72px', objectFit: 'contain', zIndex: 1,
      }}
    />
  </div>
);

const ArrowBtn = ({ dir, onClick }) => (
  <button
    onClick={onClick}
    aria-label={dir === 'left' ? 'Scroll left' : 'Scroll right'}
    style={{
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      [dir === 'left' ? 'left' : 'right']: '-18px',
      zIndex: 10,
      width: '36px', height: '36px', borderRadius: '50%',
      background: 'white', border: '1.5px solid #d1d5db',
      boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', padding: 0,
    }}
  >
    {dir === 'left' ? (
      <svg fill="none" height="16" viewBox="0 0 24 24" width="16">
        <path d="M14.47 5.47a.75.75 0 1 1 1.06 1.06L10.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06z" fill="#374151" />
      </svg>
    ) : (
      <svg fill="none" height="16" viewBox="0 0 24 24" width="16">
        <path d="M8.47 5.47a.75.75 0 0 1 1.06 0l6 6 .05.054a.75.75 0 0 1-.05 1.006l-6 6a.75.75 0 0 1-1.06-1.06L13.94 12 8.47 6.53a.75.75 0 0 1 0-1.06" fill="#374151" />
      </svg>
    )}
  </button>
);

export default function SoccerSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft]   = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateArrows);
    updateArrows();
    return () => el.removeEventListener('scroll', updateArrows);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'right' ? 600 : -600, behavior: 'smooth' });
    setTimeout(updateArrows, 400);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

      {/* Mobile: column, Desktop (lg+): row */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10">

        {/* ── Left panel ── */}
        <div className="flex flex-col" style={{ gap: '12px' }}>
          <BallIcon />

          <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#111', lineHeight: '1.25', margin: 0 }}>
            The world's biggest soccer event is here
          </h2>

          <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5', margin: 0 }}>
            Book now to secure your ride and roll in ready to cheer your team on to the finals.
          </p>

          <div style={{ marginTop: '8px' }}>
            <a
              href="#"
              style={{
                display: 'inline-block', background: '#5A32FB', color: 'white',
                fontSize: '14px', fontWeight: 700, padding: '12px 24px',
                borderRadius: '12px', textDecoration: 'none',
              }}
            >
              Explore all cities
            </a>
          </div>
        </div>

        {/* ── Right scrollable cards ──
             Mobile  : full width, cards 72vw wide, 300px tall
             Tablet  : full width, cards 44vw wide, 360px tall
             Desktop : 68% width,  cards 270px wide, 420px tall  */}
        <div className="relative w-full lg:flex-shrink-0 lg:w-[68%]">

          {canScrollLeft && <ArrowBtn dir="left" onClick={() => scroll('left')} />}

          <div
            ref={scrollRef}
            className="flex overflow-x-auto"
            style={{ gap: '12px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cities.map((city, i) => (
              <a
                key={i}
                href="#"
                className="
                  group flex-shrink-0
                  w-[72vw] h-[300px]
                  sm:w-[44vw] sm:h-[360px]
                  lg:w-[270px] lg:h-[420px]
                  rounded-2xl overflow-hidden relative block
                "
                style={{ textDecoration: 'none' }}
              >
                <img
                  src={city.img}
                  alt={city.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  className="group-hover:scale-105"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.08) 50%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '16px' }}>
                  <p style={{ color: 'white', fontSize: '18px', fontWeight: 900, lineHeight: 1.2, margin: 0 }}
                    className="sm:text-[20px]"
                  >{city.name}</p>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', marginTop: '5px', marginBottom: 0 }}
                    className="sm:text-[13px]"
                  >{city.dates}</p>
                </div>
              </a>
            ))}
          </div>

          {canScrollRight && <ArrowBtn dir="right" onClick={() => scroll('right')} />}

        </div>
      </div>
    </section>
  );
}