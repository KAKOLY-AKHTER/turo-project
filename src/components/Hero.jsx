import { useState, useRef, useEffect } from 'react'

export default function Hero() {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerMode, setPickerMode] = useState('months'); // 'dates' or 'months'
  const [monthsCount, setMonthsCount] = useState(3);
  
  const [isWhereOpen, setIsWhereOpen] = useState(false);
  
  // Calendar state (defaults to June 2026 based on screenshot)
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5)); 

  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const renderCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    
    const days = [];
    
    for(let i=0; i<firstDay; i++) {
      days.push(<div key={`pad-${i}`}></div>);
    }
    for(let i=1; i<=daysInMonth; i++) {
      const isStart = (month === 5 && year === 2026 && i === 17);
      const isEnd = (month === 8 && year === 2026 && i === 17);
      const isInRange = (year === 2026 && ((month === 5 && i > 17) || (month > 5 && month < 8) || (month === 8 && i < 17)));
      
      let wrapperClass = "flex justify-center items-center h-10";
      let innerClass = "flex items-center justify-center text-[15px] cursor-pointer w-10 h-10";
      
      if (isStart || isEnd) {
        innerClass += " bg-[#593CFB] text-white rounded-full font-bold";
      } else if (isInRange) {
        innerClass += " font-bold text-[#593CFB]";
        wrapperClass += " bg-[#f3eefe] w-full"; // light purple
      } else {
        innerClass += " text-gray-700 hover:bg-gray-100 rounded-full font-medium";
      }
      
      days.push(
        <div key={`day-${i}`} className={wrapperClass}>
           <div className={innerClass}>{i}</div>
        </div>
      );
    }
    return days;
  };

  const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);

  const whereRef = useRef(null);
  const pickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (whereRef.current && !whereRef.current.contains(e.target)) {
        setIsWhereOpen(false);
      }
      if (pickerRef.current && !pickerRef.current.contains(e.target) && !e.target.closest('.picker-trigger')) {
          setIsPickerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center pt-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden group">
        <img 
          src="https://resources.turo.com/next-js/0.0.1/_next/static/media/2508_hp_Monthly_1136.14df3rn8p.5v2.webp" 
          alt="Hero Background" 
       className="w-full h-full object-cover transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content over image */}
      <div className="relative z-10 w-full max-w-[900px] px-4 -mt-10">
        <h1 className="text-4xl md:text-[44px] font-bold text-white text-center mb-2 drop-shadow-md leading-tight tracking-tight">
          Rental reinvented
        </h1>
        <p className="text-white text-center text-[16px] md:text-[18px] font-medium mb-10 drop-shadow-md">
          Rent the exact car you want, exactly where you need it, for days, weeks, or months
        </p>

        {/* Search Form Container */}
        <div className="relative w-full mx-auto bg-white rounded-[16px] shadow-lg">
          <div className="flex flex-col md:flex-row items-center w-full md:h-[68px]">
            
            {/* Where Input */}
            <div className="flex-[1.4] relative border-b border-gray-200 md:border-b-0 md:border-r border-gray-200 w-full h-full" ref={whereRef}>
              <div 
                className="px-5 w-full cursor-pointer hover:bg-gray-50 transition-colors rounded-t-[16px] md:rounded-l-[16px] md:rounded-tr-none h-full flex flex-col justify-center py-3 md:py-0"
                onClick={() => { setIsWhereOpen(!isWhereOpen); setIsPickerOpen(false); }}
              >
                <label className="block text-[13px] text-gray-500 mb-0.5 font-medium">Where</label>
                <input 
                  type="text" 
                  placeholder="Airport, hotel, address, city" 
                  className="w-full focus:outline-none text-gray-500 font-normal bg-transparent text-[15px] placeholder-gray-500 truncate"
                  readOnly
                />
              </div>

              {/* Where Dropdown Menu */}
              {isWhereOpen && (
                <div className="absolute top-[110%] left-0 w-full md:w-[380px] bg-white rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200 z-[60] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  
                  {/* Delivery Card */}
                  <div className="m-4 p-3 flex items-center gap-4 cursor-pointer rounded-xl border border-gray-200 hover:border-gray-300 transition-colors bg-white shadow-sm group">
                    <div className="w-[52px] h-[52px] shrink-0 bg-[#f3eefe] rounded-xl flex items-center justify-center group-hover:bg-[#ebe2fe] transition-colors">
                      <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Pink map pin */}
                        <path d="M22 13C22 16.866 18 22 18 22C18 22 14 16.866 14 13C14 10.7909 15.7909 9 18 9C20.2091 9 22 10.7909 22 13Z" fill="#e91e63"/>
                        <circle cx="18" cy="13" r="1.5" fill="white"/>
                        
                        {/* Purple car */}
                        <path d="M26 21C26 19.8954 25.1046 19 24 19H8C6.89543 19 6 19.8954 6 21V23C6 24.1046 6.89543 25 8 25H24C25.1046 25 26 24.1046 26 23V21Z" fill="#593CFB"/>
                        <path d="M8 19L10 14H22L24 19" stroke="#593CFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="10.5" cy="23.5" r="1.5" fill="white"/>
                        <circle cx="21.5" cy="23.5" r="1.5" fill="white"/>
                        
                        {/* Motion lines */}
                        <path d="M4 17H8M2 14H6" stroke="#593CFB" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="font-bold text-gray-900 text-[15px] leading-tight">Get your car delivered</div>
                      <div className="text-[14px] text-gray-700 mt-0.5">Search a hotel or address</div>
                    </div>
                  </div>
                  
                  <div className="py-1 px-2">
                    {/* Current Location */}
                    <div className="flex items-center gap-4 px-4 py-[6px] hover:bg-gray-50 cursor-pointer transition-colors rounded-lg group">
                      <div className="w-9 h-9 rounded-[10px] bg-[#f4f4f5] flex items-center justify-center shrink-0 transition-colors">
                        <svg className="w-[18px] h-[18px] text-gray-800 group-hover:text-[#593CFB] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"></path></svg>
                      </div>
                      <div className="font-normal text-gray-900 group-hover:text-[#593CFB] transition-colors text-[15px]">Current location</div>
                    </div>

                    {/* Anywhere */}
                    <div className="flex items-center gap-4 px-4 py-[6px] hover:bg-gray-50 cursor-pointer transition-colors rounded-lg group">
                      <div className="w-9 h-9 rounded-[10px] bg-[#f4f4f5] flex items-center justify-center shrink-0 transition-colors">
                        <svg className="w-[18px] h-[18px] text-gray-800 group-hover:text-[#593CFB] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"></path></svg>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="font-normal text-gray-900 group-hover:text-[#593CFB] transition-colors text-[15px] leading-tight">Anywhere</div>
                        <div className="text-[13px] text-gray-500 mt-0.5">Browse all cars</div>
                      </div>
                    </div>

                    {/* Airport */}
                    <div className="flex items-center gap-4 px-4 py-[6px] hover:bg-gray-50 cursor-pointer transition-colors rounded-lg group">
                      <div className="w-9 h-9 rounded-[10px] bg-[#f4f4f5] flex items-center justify-center shrink-0 transition-colors">
                        <svg className="w-[18px] h-[18px] text-gray-800 group-hover:text-[#593CFB] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M22 16v-2l-8.5-5V3.5a1.5 1.5 0 00-3 0V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z"></path></svg>
                      </div>
                      <div className="font-normal text-gray-900 group-hover:text-[#593CFB] transition-colors text-[15px]">SJC - San Jose Norman Mineta Airport</div>
                    </div>

                    {/* City LA */}
                    <div className="flex items-center gap-4 px-4 py-[6px] hover:bg-gray-50 cursor-pointer transition-colors rounded-lg group">
                      <div className="w-9 h-9 rounded-[10px] bg-[#f4f4f5] flex items-center justify-center shrink-0 transition-colors">
                        <svg className="w-[18px] h-[18px] text-gray-800 group-hover:text-[#593CFB] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                      </div>
                      <div className="font-normal text-gray-900 group-hover:text-[#593CFB] transition-colors text-[15px]">Los Angeles</div>
                    </div>

                    {/* City SF */}
                    <div className="flex items-center gap-4 px-4 py-[6px] hover:bg-gray-50 cursor-pointer transition-colors rounded-lg group">
                      <div className="w-9 h-9 rounded-[10px] bg-[#f4f4f5] flex items-center justify-center shrink-0 transition-colors">
                        <svg className="w-[18px] h-[18px] text-gray-800 group-hover:text-[#593CFB] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                      </div>
                      <div className="font-normal text-gray-900 group-hover:text-[#593CFB] transition-colors text-[15px]">San Francisco</div>
                    </div>

                    {/* Train Station */}
                    <div className="flex items-center gap-4 px-4 py-[6px] hover:bg-gray-50 cursor-pointer transition-colors rounded-lg group">
                      <div className="w-9 h-9 rounded-[10px] bg-[#f4f4f5] flex items-center justify-center shrink-0 transition-colors">
                        <svg className="w-[18px] h-[18px] text-gray-800 group-hover:text-[#593CFB] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8 2 4 2.5 4 6v9.5A2.5 2.5 0 006.5 18H7v1.5a1.5 1.5 0 003 0V18h4v1.5a1.5 1.5 0 003 0V18h.5a2.5 2.5 0 002.5-2.5V6c0-3.5-4-4-8-4zM7.5 14a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-9-6a1 1 0 01-1-1V5a1 1 0 011-1h9a1 1 0 011 1v2a1 1 0 01-1 1h-9z"></path></svg>
                      </div>
                      <div className="font-normal text-gray-900 group-hover:text-[#593CFB] transition-colors text-[15px]">Union Station, Los Angeles</div>
                    </div>

                    {/* Hotel */}
                    <div className="flex items-center gap-4 px-4 py-[6px] hover:bg-gray-50 cursor-pointer transition-colors rounded-lg group">
                      <div className="w-9 h-9 rounded-[10px] bg-[#f4f4f5] flex items-center justify-center shrink-0 transition-colors">
                        <svg className="w-[18px] h-[18px] text-gray-800 group-hover:text-[#593CFB] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"></path></svg>
                      </div>
                      <div className="font-normal text-gray-900 group-hover:text-[#593CFB] transition-colors text-[15px]">Sheraton Grand, Los Angeles</div>
                    </div>
                  </div>
                  
                  <div className="py-3 pb-4 text-center bg-white flex items-center justify-center gap-1 border-t border-gray-100 mt-2">
                    <span className="text-[12px] text-gray-500 font-medium tracking-tight">powered by</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-[16px] ml-0.5 object-contain" />
                  </div>
                </div>
              )}
            </div>

            {/* From (Trigger) */}
            <div 
              className="flex-1 px-4 w-full cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-200 md:border-b-0 md:border-r border-gray-200 h-full flex flex-col justify-center py-3 md:py-0 picker-trigger"
              onClick={() => { setIsPickerOpen(!isPickerOpen); setIsWhereOpen(false); }}
            >
              <label className="block text-[13px] text-gray-500 mb-0.5 font-medium">From</label>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[15px] font-normal text-gray-500">{pickerMode === 'months' ? 'Add dates' : 'Add dates'}</span>
                  <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </div>
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[15px] font-normal text-gray-500">Add time</span>
                  <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* Until (Trigger) */}
            <div 
              className="flex-1 px-4 w-full cursor-pointer hover:bg-gray-50 transition-colors h-full flex flex-col justify-center py-3 md:py-0 picker-trigger"
              onClick={() => { setIsPickerOpen(!isPickerOpen); setIsWhereOpen(false); }}
            >
              <label className="block text-[13px] text-gray-500 mb-0.5 font-medium">Until</label>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[15px] font-normal text-gray-500">{pickerMode === 'months' ? 'Add dates' : 'Add dates'}</span>
                  <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </div>
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[15px] font-normal text-gray-500">Add time</span>
                  <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="pr-2 pl-2 py-3 md:py-0 w-full md:w-auto flex justify-end md:justify-center items-center h-full">
              <button className="bg-[#593CFB] hover:bg-[#4828E0] text-white w-full md:w-[52px] md:h-[52px] rounded-[10px] transition-colors flex justify-center items-center group py-3 md:py-0 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-[22px] h-[22px] group-hover:scale-110 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Picker Modal Overlay */}
          {isPickerOpen && (
            <div className="absolute top-[120%] left-0 right-0 bg-white rounded-[24px] shadow-[0_12px_40px_rgb(0,0,0,0.15)] p-6 z-[50] animate-in fade-in slide-in-from-top-2 duration-200 border border-gray-100 mx-auto" ref={pickerRef}>
              {/* Tabs */}
              <div className="flex justify-center mb-8 mt-2">
                <div className="bg-[#e4e4e7] p-1 rounded-xl inline-flex gap-1">
                  <button 
                    onClick={() => setPickerMode('dates')}
                    className={`px-8 py-2 rounded-lg text-[13px] font-bold transition-all ${pickerMode === 'dates' ? 'bg-[#593CFB] text-white shadow-sm' : 'text-gray-700 hover:text-gray-900'}`}
                  >
                    Dates
                  </button>
                  <button 
                    onClick={() => setPickerMode('months')}
                    className={`px-8 py-2 rounded-lg text-[13px] font-bold transition-all ${pickerMode === 'months' ? 'bg-[#593CFB] text-white shadow-sm' : 'text-gray-700 hover:text-gray-900'}`}
                  >
                    Months
                  </button>
                </div>
              </div>

              {/* Content Area */}
              {pickerMode === 'dates' ? (
                <div>
                  <div className="flex flex-col md:flex-row gap-8 justify-center items-start px-2">
                    {/* Month 1 */}
                    <div className="flex-1 w-full">
                      <div className="flex justify-between items-center mb-6 px-2">
                        <button onClick={prevMonth} className="w-8 h-8 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors bg-white">
                          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <h3 className="font-bold text-[17px] text-gray-900">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
                        <div className="w-8 h-8"></div>
                      </div>
                      <div className="grid grid-cols-7 gap-y-2 gap-x-0 text-center">
                        {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map(d => <div key={d} className="text-[11px] font-bold text-gray-400 mb-2">{d}</div>)}
                        {renderCalendar(currentDate)}
                      </div>
                    </div>
                    {/* Month 2 */}
                    <div className="flex-1 w-full">
                      <div className="flex justify-between items-center mb-6 px-2">
                        <div className="w-8 h-8"></div>
                        <h3 className="font-bold text-[17px] text-gray-900">{monthNames[nextMonthDate.getMonth()]} {nextMonthDate.getFullYear()}</h3>
                        <button onClick={nextMonth} className="w-8 h-8 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors bg-white">
                          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </button>
                      </div>
                      <div className="grid grid-cols-7 gap-y-2 gap-x-0 text-center">
                        {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map(d => <div key={d} className="text-[11px] font-bold text-gray-400 mb-2">{d}</div>)}
                        {renderCalendar(nextMonthDate)}
                      </div>
                    </div>
                  </div>
                  {/* Dates Footer Buttons */}
                  <div className="flex justify-end items-center gap-4 mt-8">
                    <button 
                      onClick={() => {}} // Reset logic if needed
                      className="text-gray-900 font-bold text-[15px] px-4 py-2 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      Reset
                    </button>
                    <button 
                      onClick={() => setIsPickerOpen(false)}
                      className="bg-[#593CFB] hover:bg-[#4828E0] text-white font-bold py-2.5 px-8 rounded-xl transition-all text-[15px]"
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center py-4 min-h-[300px]">
                  <h3 className="text-[20px] font-bold text-gray-900 mb-10 tracking-tight">I want a car for</h3>
                  
                  <div className="relative flex items-center justify-center w-full max-w-[700px] mb-10 mt-4 h-[140px]">
                    {/* Minus Button - far left */}
                    <button 
                      onClick={() => setMonthsCount(Math.max(1, monthsCount - 1))}
                      className="absolute left-0 z-20 w-[46px] h-[46px] rounded-[14px] border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-gray-400 transition-all shadow-sm"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 12H4" /></svg>
                    </button>
                    
                    {/* Number fan - centered */}
                    <div className="flex items-center justify-center relative w-[460px] h-[140px]">
                      {/* -2 faded number */}
                      {monthsCount > 2 && <div className="absolute left-[-10px] -rotate-[18deg] select-none text-[65px] font-black text-gray-200 z-0">
                        {monthsCount - 2}
                      </div>}
                      
                      {/* Prev faded number */}
                      {monthsCount > 1 && <div className="absolute left-[75px] -rotate-[9deg] select-none text-[90px] font-black text-gray-300 z-0">
                        {monthsCount - 1}
                      </div>}

                      {/* Main active number */}
                      <div className="z-10 mx-auto -mt-4 flex flex-col items-center">
                        <span className="text-[130px] font-black text-[#2e2e2e] leading-none tracking-tighter" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                          {monthsCount}
                        </span>
                        <span className="text-[17px] font-bold text-gray-900 mt-2 tracking-tight">months</span>
                      </div>

                      {/* Next faded number */}
                      <div className="absolute right-[75px] rotate-[9deg] select-none text-[90px] font-black text-gray-300 z-0">
                        {monthsCount + 1}
                      </div>
                      
                      {/* +2 faded number */}
                      <div className="absolute right-[-10px] rotate-[18deg] select-none text-[65px] font-black text-gray-200 z-0">
                        {monthsCount + 2}
                      </div>
                    </div>

                    {/* Plus Button - far right */}
                    <button 
                      onClick={() => setMonthsCount(monthsCount + 1)}
                      className="absolute right-0 z-20 w-[46px] h-[46px] rounded-[14px] border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-gray-400 transition-all shadow-sm"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" /></svg>
                    </button>
                  </div>

                  <div className="text-[14px] font-medium mb-6 mt-6 text-gray-800 flex items-center gap-3">
                    <span className="underline decoration-gray-400 decoration-[1.5px] underline-offset-[4px] hover:decoration-gray-600 transition-colors cursor-pointer">Jun 17</span>
                    <span className="text-gray-500 font-normal">to</span>
                    <span className="underline decoration-gray-400 decoration-[1.5px] underline-offset-[4px] hover:decoration-gray-600 transition-colors cursor-pointer">Sep 17</span>
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded-[4px] border-gray-300 text-white bg-white checked:bg-white focus:ring-0 transition-colors appearance-none border-2 checked:border-gray-300" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`}} />
                    <span className="text-[14.5px] text-gray-700 group-hover:text-gray-900 transition-colors">Show cars with similar dates</span>
                    <svg className="w-[15px] h-[15px] text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </label>

                  {/* Months Footer Buttons */}
                  <div className="w-full flex justify-end mt-4">
                    <button 
                      onClick={() => setIsPickerOpen(false)}
                      className="bg-[#593CFB] hover:bg-[#4828E0] text-white font-bold py-2.5 px-8 rounded-xl transition-all text-[15px]"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
