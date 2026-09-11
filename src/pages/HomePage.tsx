import React from 'react';
import type { PageView } from '../types';
import { ArrowRight, ShieldCheck, Bus, Timer, Users } from 'lucide-react';

interface HomePageProps {
  setActivePage: (page: PageView) => void;
  onOpenBooking: () => void;
  onSelectVehicle: (vehicleId: string) => void;
  onSelectCategory?: (category: 'bus' | 'car' | 'pickup') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActivePage, onOpenBooking, onSelectVehicle, onSelectCategory }) => {

  return (
    <div className="bg-[#F5E3CD] text-[#211F1F] font-montserrat">
      
      {/* 1. HERO SECTION matching Page 4 design */}
      <section className="relative overflow-hidden min-h-[calc(100vh-96px)] flex items-center py-12 lg:py-20 border-b border-[#D0A769]/30">
        
        {/* Faint dashed travel line matching PDF */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 text-[#B87A5E]" viewBox="0 0 1200 400" fill="none">
          <path d="M 150 50 Q 500 20, 650 140 T 1150 200" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>

        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 lg:space-y-8 text-left">
              
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[96px] font-cormorant font-bold text-[#4A1A10] leading-none tracking-tight uppercase">
                  THE JOURNEY
                </h1>
                <div className="font-script text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] text-[#B87A5E] font-normal leading-tight pl-1 transform -rotate-1">
                  You Can Trust
                </div>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-[#3A2A20] max-w-xl font-light leading-relaxed">
                Safe, comfortable and reliable bus rental services for every occasion. We drive your journey with care and responsibility.
              </p>

              <div className="pt-4">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-3 text-sm sm:text-base font-extrabold tracking-widest text-[#4A1A10] hover:text-[#B87A5E] transition-colors border-b-2 border-[#4A1A10] hover:border-[#B87A5E] pb-1.5 uppercase"
                >
                  <span>BOOK YOUR RIDE</span>
                  <ArrowRight className="w-5 h-5 text-[#4A1A10]" />
                </button>
              </div>

            </div>

            {/* Right Side Visual Graphic */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[760px] lg:max-w-none group">
                <img
                  src="/home_assets/hero_bus_art.png"
                  alt="Solid Bus Rental Qatar Coach & Arch Visual"
                  className="w-full h-auto object-contain filter drop-shadow-[0_16px_32px_rgba(74,26,16,0.18)] transition-all duration-500 group-hover:scale-[1.015]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. OUR FLEET SECTION matching Page 4 design */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-1 mb-10">
          <div className="flex items-center justify-center gap-2 text-[#B87A5E]">
            <span>★</span>
            <h2 className="text-3xl sm:text-4xl font-dmserif text-[#4A1A10] uppercase tracking-wider">OUR FLEET</h2>
            <span>★</span>
          </div>
          <p className="text-xs sm:text-sm text-[#3A2A20]/80 font-light">
            Well maintained vehicles for a smooth and safe journey
          </p>
        </div>

        {/* 3 Columns Row - Only 3D Models & Info (No White Card Background) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Column 1: LAND CRUISER */}
          <div className="p-4 text-center space-y-4 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="h-44 sm:h-48 flex items-center justify-center">
                <img
                  src="/home_assets/fleet_land_cruiser.png"
                  alt="Land Cruiser"
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(33,31,31,0.18)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="font-dmserif text-lg sm:text-xl font-bold text-[#4A1A10] uppercase tracking-wide">
                  LAND CRUISER
                </h3>
                <p className="text-xs text-[#3A2A20]/80 font-light mt-1">
                  Luxury. Comfort. Class.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onSelectVehicle('toyota-land-cruiser');
                  setActivePage('fleet');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#4A1A10] hover:text-[#B87A5E] transition-colors border-b border-[#4A1A10] pb-0.5 uppercase"
              >
                <span>VIEW DETAILS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: 3 TON PICKUP */}
          <div className="p-4 text-center space-y-4 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="h-44 sm:h-48 flex items-center justify-center">
                <img
                  src="/home_assets/fleet_pickup.png"
                  alt="3 Ton Pickup"
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(33,31,31,0.18)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="font-dmserif text-lg sm:text-xl font-bold text-[#4A1A10] uppercase tracking-wide">
                  3 TON PICKUP
                </h3>
                <p className="text-xs text-[#3A2A20]/80 font-light mt-1">
                  Strong. Reliable. Efficient.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onSelectCategory?.('pickup');
                  setActivePage('fleet');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#4A1A10] hover:text-[#B87A5E] transition-colors border-b border-[#4A1A10] pb-0.5 uppercase"
              >
                <span>VIEW DETAILS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Column 3: COASTER BUS */}
          <div className="p-4 text-center space-y-4 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="h-44 sm:h-48 flex items-center justify-center">
                <img
                  src="/home_assets/fleet_coaster.png"
                  alt="Coaster Bus"
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(33,31,31,0.18)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="font-dmserif text-lg sm:text-xl font-bold text-[#4A1A10] uppercase tracking-wide">
                  COASTER BUS
                </h3>
                <p className="text-xs text-[#3A2A20]/80 font-light mt-1">
                  Group Travel. Made Easy.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onSelectVehicle('volvo-9600');
                  setActivePage('fleet');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#4A1A10] hover:text-[#B87A5E] transition-colors border-b border-[#4A1A10] pb-0.5 uppercase"
              >
                <span>VIEW DETAILS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B87A5E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D0A769]/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D0A769]/40" />
        </div>

      </section>


      {/* 3. OUR STORY SECTION matching Page 4 design */}
      <section className="py-16 border-t border-[#D0A769]/30 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Vertical Stamp & Brief */}
          <div className="lg:col-span-5 flex items-start gap-6">
            
            {/* EST 2022 Stack */}
            <div className="flex flex-col text-xs sm:text-sm font-extrabold text-[#4A1A10] tracking-widest leading-snug shrink-0 space-y-1.5 pr-6 border-r-2 border-[#D0A769]/50">
              <span>EST.</span>
              <span className="text-2xl font-cormorant font-bold">20</span>
              <span className="text-2xl font-cormorant font-bold">22</span>
              <span>.</span>
              <span className="text-xs font-bold text-[#B87A5E] uppercase mt-2">TRAVEL</span>
              <span className="text-xs font-bold text-[#B87A5E] uppercase">TOGETHER</span>
              <span className="text-xs font-bold text-[#B87A5E] uppercase">SAFELY</span>
            </div>

            {/* Story Text */}
            <div className="space-y-6">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-cormorant font-bold text-[#4A1A10] uppercase tracking-wider leading-none">
                OUR STORY
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-[#3A2A20] font-light leading-relaxed max-w-xl">
                Solid Bus Rental was founded with a simple mission – to deliver dependable, on-time and comfortable travel experiences. From short city rides to long-distance journeys, we ensure safety, comfort and satisfaction.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setActivePage('about')}
                  className="inline-flex items-center gap-3 text-sm sm:text-base font-extrabold tracking-widest text-[#4A1A10] hover:text-[#B87A5E] transition-colors border-b-2 border-[#4A1A10] hover:border-[#B87A5E] pb-1.5 uppercase"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-5 h-5 text-[#4A1A10]" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Wide Image Scene */}
          <div className="lg:col-span-7 flex justify-end">
            <div className="w-full rounded-2xl lg:rounded-r-[60px] overflow-hidden shadow-2xl border-4 border-[#FFFBF2] ring-1 ring-[#D0A769]/40 group relative">
              <img
                src="/home_assets/qatar_city_tour.jpg"
                alt="Solid Bus Rental Qatar City Tour Transport"
                className="w-full h-[340px] sm:h-[400px] lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 contrast-[1.03]"
              />
            </div>
          </div>

        </div>
      </section>


      {/* 4. SCHOOL TRANSPORTATION SECTION matching Page 4 design */}
      <section className="py-8 lg:py-12 border-t border-[#D0A769]/30 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left School Bus Image enlarged into top & left region with vector Maroon Arch Border matching Image 1 */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-start -mt-4 lg:-mt-8 -ml-4 sm:-ml-8 lg:-ml-12 xl:-ml-16">
            <div className="w-full max-w-[720px] lg:max-w-none group relative">
              <svg
                className="w-full h-auto drop-shadow-[0_16px_32px_rgba(74,26,16,0.16)] transition-transform duration-500 group-hover:scale-[1.01]"
                viewBox="0 0 418 215"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="schoolBusVectorClip">
                    <path d="M 0,0 L 295,0 C 370,0 418,35 418,107.5 C 418,180 350,212 240,212 C 150,212 60,208 0,214 Z" />
                  </clipPath>
                </defs>

                {/* High-Definition 2X Photo clipped by vector path */}
                <image
                  href="/home_assets/school_bus_hd_clean.png"
                  x="0"
                  y="0"
                  width="418"
                  height="215"
                  preserveAspectRatio="xMinYMin slice"
                  clipPath="url(#schoolBusVectorClip)"
                />

                {/* Ultra-Sharp Crisp Vector Maroon Border Stroke (#5C1D18) */}
                <path
                  d="M 295,0 C 370,0 418,35 418,107.5 C 418,180 350,212 240,212 C 150,212 60,208 0,214"
                  fill="none"
                  stroke="#5C1D18"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Content & 4 Icon Columns matching Image 1 */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 pt-4 lg:pt-0">
            
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#5C1D18] uppercase block">
                SCHOOL TRANSPORTATION
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cormorant font-bold text-[#3A1B14] leading-tight tracking-tight">
                Safe Journeys Start Here.
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#3A2A20] font-light leading-relaxed max-w-xl">
                We provide dependable school transportation solutions that ensure students reach their destination safely, comfortably and on time every day.
              </p>
            </div>

            {/* 4 Feature Columns matching Image 1 icons and vertical dividers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 pt-6 border-t border-[#D0A769]/30 text-center divide-x divide-[#D0A769]/40">
              
              {/* Safety First */}
              <div className="px-2 sm:px-3 space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF0DC] border border-[#5C1D18]/30 shadow-xs flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#5C1D18]" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-[#3A1B14]">Safety First</h4>
                <p className="text-[10px] sm:text-xs text-[#3A2A20]/80 font-light leading-tight">Safety-focused operations.</p>
              </div>

              {/* Comfort Assured */}
              <div className="px-2 sm:px-3 space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF0DC] border border-[#5C1D18]/30 shadow-xs flex items-center justify-center mx-auto">
                  <Bus className="w-6 h-6 sm:w-7 sm:h-7 text-[#5C1D18]" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-[#3A1B14]">Comfort Assured</h4>
                <p className="text-[10px] sm:text-xs text-[#3A2A20]/80 font-light leading-tight">Air-conditioned & comfortable buses.</p>
              </div>

              {/* On-Time Every Day */}
              <div className="px-2 sm:px-3 space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF0DC] border border-[#5C1D18]/30 shadow-xs flex items-center justify-center mx-auto">
                  <Timer className="w-6 h-6 sm:w-7 sm:h-7 text-[#5C1D18]" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-[#3A1B14]">On-Time Every Day</h4>
                <p className="text-[10px] sm:text-xs text-[#3A2A20]/80 font-light leading-tight">Reliable transport for every schedule.</p>
              </div>

              {/* Trusted By Schools */}
              <div className="px-2 sm:px-3 space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF0DC] border border-[#5C1D18]/30 shadow-xs flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#5C1D18]" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-[#3A1B14]">Trusted By Schools</h4>
                <p className="text-[10px] sm:text-xs text-[#3A2A20]/80 font-light leading-tight">Professional service you can rely on.</p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* 5. OUR SERVICES SECTION matching Page 4 design */}
      <section className="py-16 border-t border-[#D0A769]/30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="space-y-1">
          <span className="text-[10px] font-extrabold tracking-widest text-[#B87A5E] uppercase block">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-dmserif text-[#4A1A10]">
            Transportation Solutions for Every Need.
          </h2>
        </div>

        {/* 7 Circular Dome Service Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {[
            { title: 'Corporate Transportation', icon: '/home_assets/service_icon_1.png' },
            { title: 'School Transportation', icon: '/home_assets/service_icon_2.png' },
            { title: 'Event Transportation', icon: '/home_assets/service_icon_3.png' },
            { title: 'Hotel Transportation', icon: '/home_assets/service_icon_4.png' },
            { title: 'Airport Transfers', icon: '/home_assets/service_icon_5.png' },
            { title: 'Group Transportation', icon: '/home_assets/service_icon_6.png' },
            { title: 'Custom Solutions', icon: '/home_assets/service_icon_7.png' },
          ].map((srv, idx) => (
            <div
              key={idx}
              onClick={() => setActivePage('services')}
              className="flex flex-col items-center justify-between cursor-pointer group"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-2 border-2 border-[#D0A769]/40 shadow-xs group-hover:scale-105 transition-transform duration-300">
                <img
                  src={srv.icon}
                  alt={srv.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-[11px] font-bold text-[#4A1A10] leading-tight max-w-[110px]">
                {srv.title}
              </h4>
            </div>
          ))}
        </div>

      </section>


      {/* 6. DARK STATS BANNER matching Page 4 design */}
      <section className="bg-[#3D1E16] text-[#FFFBF2] py-10 border-y-4 border-[#B87A5E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#D0A769]/30">
            
            <div className="pt-2 lg:pt-0 px-3 space-y-1">
              <div className="text-3xl sm:text-4xl font-cormorant font-bold text-[#D0A769]">15+</div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Years of Experience</h4>
              <p className="text-[10px] text-white/70 font-light">Delivering trusted solutions across Qatar.</p>
            </div>

            <div className="pt-4 lg:pt-0 px-3 space-y-1">
              <div className="text-3xl sm:text-4xl font-cormorant font-bold text-[#D0A769]">100+</div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Buses in Fleet</h4>
              <p className="text-[10px] text-white/70 font-light">Modern, well-maintained and air-conditioned.</p>
            </div>

            <div className="pt-4 lg:pt-0 px-3 space-y-1">
              <div className="text-3xl sm:text-4xl font-cormorant font-bold text-[#D0A769]">500+</div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Happy Clients</h4>
              <p className="text-[10px] text-white/70 font-light">Businesses, schools and institutions trust us.</p>
            </div>

            <div className="pt-4 lg:pt-0 px-3 space-y-1">
              <div className="text-3xl sm:text-4xl font-cormorant font-bold text-[#D0A769]">100%</div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Safety Commitment</h4>
              <p className="text-[10px] text-white/70 font-light">Safety is our promise, every single day.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
