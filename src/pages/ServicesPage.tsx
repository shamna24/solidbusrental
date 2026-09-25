import React, { useRef } from 'react';
import type { PageView } from '../types';
import { SERVICES_LIST, FLEET_DATA } from '../data/fleetData';
import { ArrowRight, Bus, Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface ServicesPageProps {
  setActivePage: (page: PageView) => void;
  onOpenBooking?: () => void;
  onSelectCategory: (category: 'bus' | 'car' | 'pickup') => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ setActivePage, onSelectCategory }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F5E3CD] text-[#211F1F] font-montserrat min-h-screen pb-16 space-y-16">
      
      {/* 1. HERO SECTION matching Page 5 exact PDF design */}
      <section className="relative border-b border-[#D0A769]/30 overflow-hidden bg-[#F5E3CD] pt-0 pb-4 lg:pb-8">
        <div className="w-full max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="relative w-full">
            <img
              src="/home_assets/services_hero_banner_seamless.png"
              alt="Solid Bus Rental - OUR SERVICES"
              className="w-full h-auto object-contain filter drop-shadow-xs"
            />
          </div>
        </div>
      </section>


      {/* 2. STATS BANNER matching exact design */}
      <section className="w-full relative py-8 border-y-2 border-[#D0A769]/40 bg-[#F9F1DC]/70">
        
        {/* Top Center Circle Badge */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#4A1A10] border-2 border-[#D0A769] flex items-center justify-center shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#D0A769]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#D0A769]/40">
            
            <div className="pt-2 md:pt-0 px-6 space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#4A1A10]">FLEET STRENGTH</span>
              <div className="text-4xl sm:text-5xl font-cormorant font-bold text-[#4A1A10]">400+</div>
              <p className="text-xs text-[#3A2A20]/80 uppercase font-bold tracking-wider">VEHICLES</p>
            </div>

            <div className="pt-6 md:pt-0 px-6 space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#4A1A10]">EXPERIENCE</span>
              <div className="text-4xl sm:text-5xl font-cormorant font-bold text-[#4A1A10]">4+</div>
              <p className="text-xs text-[#3A2A20]/80 uppercase font-bold tracking-wider">YEARS</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THREE MAIN FLEET CATEGORY SHOWCASES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* 01 CATEGORY A: BUS */}
        <div className="relative border-b border-[#D0A769]/30 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-2xl sm:text-3xl font-cormorant font-bold text-[#6B2319]">01</span>
              <h3 className="text-xs font-extrabold tracking-widest text-[#4A1A10] uppercase">CATEGORY A</h3>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-cormorant font-bold text-[#4A1A10] tracking-tight uppercase">BUS</h2>
              
              <div className="pt-4">
                <button
                  onClick={() => {
                    onSelectCategory('bus');
                    setActivePage('fleet');
                  }}
                  className="inline-flex items-center gap-2 text-base font-bold text-[#4A1A10] hover:text-[#B87A5E] transition-colors italic font-script"
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-5 h-5 not-italic" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 flex justify-end relative items-center">
              <img
                src="/home_assets/category_a_coaster_art.png"
                alt="Category A Luxury Bus 3D Model Qatar"
                className="w-full max-w-[720px] lg:max-w-none h-auto object-contain filter drop-shadow-[0_16px_32px_rgba(74,26,16,0.18)] transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

          </div>
        </div>


        {/* 02 CATEGORY B: CAR / SUV */}
        <div className="relative border-b border-[#D0A769]/30 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 order-2 lg:order-1 flex justify-start relative items-center">
              <img
                src="/home_assets/fleet_land_cruiser_hd.png"
                alt="Category B Luxury Land Cruiser 3D Model Qatar"
                className="w-full max-w-[680px] lg:max-w-none h-auto object-contain filter drop-shadow-[0_16px_32px_rgba(74,26,16,0.18)] transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4 lg:pl-8">
              <span className="text-2xl sm:text-3xl font-cormorant font-bold text-[#6B2319]">02</span>
              <h3 className="text-xs font-extrabold tracking-widest text-[#4A1A10] uppercase">CATEGORY B</h3>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-cormorant font-bold text-[#4A1A10] tracking-tight uppercase">CAR</h2>
              
              <div className="pt-4">
                <button
                  onClick={() => {
                    onSelectCategory('car');
                    setActivePage('fleet');
                  }}
                  className="inline-flex items-center gap-2 text-base font-bold text-[#4A1A10] hover:text-[#B87A5E] transition-colors italic font-script"
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-5 h-5 not-italic" />
                </button>
              </div>
            </div>

          </div>
        </div>


        {/* 03 CATEGORY C: TON PICKUP */}
        <div className="relative pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-2xl sm:text-3xl font-cormorant font-bold text-[#6B2319]">03</span>
              <h3 className="text-xs font-extrabold tracking-widest text-[#4A1A10] uppercase">CATEGORY C</h3>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-cormorant font-bold text-[#4A1A10] tracking-tight uppercase">TON PICKUP</h2>
              
              <div className="pt-4">
                <button
                  onClick={() => {
                    onSelectCategory('pickup');
                    setActivePage('fleet');
                  }}
                  className="inline-flex items-center gap-2 text-base font-bold text-[#4A1A10] hover:text-[#B87A5E] transition-colors italic font-script"
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-5 h-5 not-italic" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 flex justify-end relative items-center">
              <img
                src="/home_assets/fleet_pickup_v10.png"
                alt="Category C Commercial 3 Ton Pickup Truck 3D Model Qatar"
                className="w-full max-w-[650px] lg:max-w-none h-auto object-contain filter drop-shadow-[0_16px_32px_rgba(74,26,16,0.16)] transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

          </div>
        </div>
      </section>




      {/* 4. FULL SERVICES HORIZONTAL SLIDER CAROUSEL WITH FULL BACKGROUND CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#D0A769]/30 pt-12">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-extrabold tracking-widest text-[#B87A5E] uppercase block">
            COMPLETE FLEET CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-cormorant font-bold text-[#4A1A10]">
            Comprehensive Qatari Transportation Capabilities
          </h2>
        </div>

        {/* Carousel Container with Floating Left and Right Controls */}
        <div className="relative group/carousel">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#4A1A10] text-[#FFFBF2] hover:bg-[#B87A5E] transition-all duration-300 shadow-xl flex items-center justify-center border-2 border-[#FFFBF2] hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[#FFFBF2]" />
          </button>

          {/* Horizontal Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 scroll-smooth w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SERVICES_LIST.map((srv) => (
              <div
                key={srv.id}
                className="relative w-[310px] sm:w-[350px] md:w-[370px] min-h-[440px] shrink-0 snap-start rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6 border-2 border-[#D0A769]/50 group/card"
              >
                {/* Full Background Image */}
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                />

                {/* Dark Rich Overlay Gradient for Crisp Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D08]/95 via-[#1C0D08]/80 to-[#1C0D08]/45" />

                {/* Top Content */}
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#FFFBF2]/90 text-[#4A1A10] flex items-center justify-center shadow-md shrink-0">
                      <Bus className="w-4 h-4 text-[#B87A5E]" />
                    </div>
                    <span className="text-[10px] font-extrabold text-[#D0A769] tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#1C0D08]/70 border border-[#D0A769]/30 backdrop-blur-xs truncate">
                      {srv.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#FFFBF2] font-dmserif leading-tight tracking-wide pt-1">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-[#FFFBF2]/85 font-light leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Bottom Highlights List */}
                <div className="relative z-10 pt-4 border-t border-[#D0A769]/30 space-y-2 mt-4">
                  <ul className="space-y-2 text-xs text-[#FFFBF2]/95">
                    {srv.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#D0A769] shrink-0" />
                        <span className="font-medium tracking-wide">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#4A1A10] text-[#FFFBF2] hover:bg-[#B87A5E] transition-all duration-300 shadow-xl flex items-center justify-center border-2 border-[#FFFBF2] hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#FFFBF2]" />
          </button>

        </div>
      </section>

    </div>
  );
};
