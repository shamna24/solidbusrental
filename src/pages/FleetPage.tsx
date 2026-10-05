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

                  {/* TITLE & QUICK WHATSAPP INQUIRY */}
                  <div className="px-1 pb-1">
                    <h3 className="font-sans text-base sm:text-lg font-black tracking-tight text-[#211F1F] uppercase leading-tight font-extrabold mb-2.5">
                      {vehicle.name}
                    </h3>

                    <div className="pt-2 border-t border-[#E5DEC9]/80 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#9E826F] uppercase tracking-wider">
                        {vehicle.features.seats} Seats
                      </span>
                      <a
                        href={`https://wa.me/97450842662?text=${encodeURIComponent(`Hello Solid Bus Rental Qatar, I would like to inquire about renting the ${vehicle.name} (${vehicle.categoryLabel}). Please share pricing and availability.`)}`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold transition-all shadow-xs hover:scale-105 hover:shadow-md cursor-pointer"
                        title={`Inquire about ${vehicle.name} on WhatsApp`}
                      >
                        <svg className="w-3.5 h-3.5 fill-current text-white shrink-0" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </div>
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
