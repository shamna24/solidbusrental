import React, { useState } from 'react';
import type { VehicleCategory } from '../types';
import { FLEET_DATA } from '../data/fleetData';
import { Search } from 'lucide-react';


interface FleetPageProps {
  initialCategory?: VehicleCategory;
  onOpenBooking: () => void;
  onSelectVehicle: (vehicleId: string) => void;
}

export const FleetPage: React.FC<FleetPageProps> = ({ initialCategory = 'all', onOpenBooking, onSelectVehicle }) => {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const categorySectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
    const timer = setTimeout(() => {
      if (initialCategory && initialCategory !== 'all' && categorySectionRef.current) {
        const yOffset = -90; // offset for sticky header navbar (80px height + spacing)
        const y = categorySectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [initialCategory]);

  const filteredFleet = FLEET_DATA.filter((v) => {
    const matchesCategory = selectedCategory === 'all' || v.category === selectedCategory;
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          v.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          v.engineSpecs.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-16">
      
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-b from-[#F9F1DC] via-[#F5E6CD] to-[#F9F1DC] py-12 border-b border-[#D0A769]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#B87A5E] uppercase">
            SOLID BUS RENTAL QATAR
          </span>
          <h1 className="text-4xl sm:text-6xl font-cormorant font-bold text-[#4A1A10]">
            Featured Fleet & Rental Options
          </h1>
          <p className="text-xs sm:text-sm text-[#211F1F]/80 max-w-xl mx-auto font-light">
            Browse our complete catalog of luxury executive buses, SUVs, cars, and commercial pickups. All vehicles are regularly serviced, fully insured, and climate controlled for Qatar climate.
          </p>

          {/* FILTER TABS matching PDF navigation */}
          <div ref={categorySectionRef} className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {[
              { id: 'all', label: 'ALL VEHICLES' },
              { id: 'bus', label: 'CATEGORY A - BUSES' },
              { id: 'car', label: 'CATEGORY B - CARS & SUVS' },
              { id: 'pickup', label: 'CATEGORY C - 3 TON PICKUPS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as VehicleCategory)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-xs ${
                  selectedCategory === tab.id
                    ? 'bg-[#B87A5E] text-white ring-2 ring-[#B87A5E]'
                    : 'bg-[#FFFBF2] text-[#211F1F] hover:bg-[#F9F1DC] border border-[#D0A769]/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto pt-2">
            <div className="relative">
              <Search className="w-4 h-4 text-[#B87A5E] absolute left-4 top-3" />
              <input
                type="text"
                placeholder="Search vehicle model, engine specs, seats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FFFBF2] border border-[#D0A769]/40 rounded-full text-xs focus:outline-none focus:border-[#B87A5E] text-[#211F1F] shadow-xs"
              />
            </div>
          </div>

        </div>
      </section>

      {/* VEHICLES GRID matching Pages 6, 7, 8 design */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredFleet.length === 0 ? (
          <div className="text-center py-16 bg-[#FFFBF2] rounded-2xl border border-[#D0A769]/30">
            <p className="text-sm font-bold text-[#211F1F]">No vehicles match your search query.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs text-[#B87A5E] font-semibold hover:underline"
            >
              Clear filters and view all
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFleet.map((vehicle) => (
              <div
                key={vehicle.id}
                onClick={() => {
                  onSelectVehicle(vehicle.id);
                  onOpenBooking();
                }}
                className="bg-[#FFFBF7] border border-[#E5DEC9]/70 rounded-[32px] p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group cursor-pointer"
              >
                <div>
                  
                  {/* TOP COLORED ARCH CONTAINER (ONLY BUS IMAGE) matching Image 2 mockup */}
                  <div className="relative h-64 rounded-t-[28px] overflow-hidden mb-4 flex items-center justify-center p-2">
                    
                    {/* SVG Arch background curve */}
                    <svg viewBox="0 0 300 240" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                      <path d="M 0,0 L 300,0 L 300,140 C 300,230 0,230 0,140 Z" fill={vehicle.accentColor} />
                    </svg>

                    {/* Cutout Vehicle Image */}
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="relative z-10 max-h-40 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  </div>

                  {/* TITLE (BELOW ARCH ON CREAM BACKGROUND) */}
                  <div className="px-1 pb-1">
                    <h3 className="font-sans text-base sm:text-lg font-black tracking-tight text-[#211F1F] uppercase leading-tight font-extrabold">
                      {vehicle.name}
                    </h3>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </section>

    </div>
  );
};
