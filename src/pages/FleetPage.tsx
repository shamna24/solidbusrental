import React, { useState } from 'react';
import type { VehicleCategory } from '../types';
import { FLEET_DATA } from '../data/fleetData';
import { ShoppingCart, Search, Shield, Users, Gauge, Zap } from 'lucide-react';


interface FleetPageProps {
  initialCategory?: VehicleCategory;
  onOpenBooking: () => void;
  onSelectVehicle: (vehicleId: string) => void;
}

export const FleetPage: React.FC<FleetPageProps> = ({ initialCategory = 'all', onOpenBooking, onSelectVehicle }) => {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

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
            OUR VEHICLE FLEET
          </h1>
          <p className="text-xs sm:text-sm text-[#211F1F]/80 max-w-xl mx-auto font-light">
            Browse our complete catalog of luxury executive buses, SUVs, cars, and commercial pickups. All vehicles are regularly serviced, fully insured, and climate controlled for Qatar climate.
          </p>

          {/* FILTER TABS matching PDF navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
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
                className="bg-[#F9F1DC] border border-[#D0A769]/40 rounded-3xl p-5 shadow-md flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative group"
              >
                <div>
                  
                  {/* Image Card with Arched Colored Background matching PDF Pages 6, 7, 8 */}
                  <div className="relative h-52 rounded-2xl overflow-hidden mb-4 p-2 flex items-center justify-center">
                    
                    {/* Background Arch Overlay */}
                    <div 
                      className="absolute inset-0 arch-card-top opacity-30"
                      style={{ backgroundColor: vehicle.accentColor }}
                    />
                    
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className={`relative z-10 w-full h-44 object-contain transition-transform duration-500 drop-shadow-md ${
                        vehicle.id === 'toyota-hilux' ? 'scale-125 group-hover:scale-[1.30]' : 'group-hover:scale-105'
                      }`}
                    />

                    <span className="absolute top-3 left-3 z-20 px-2.5 py-0.5 rounded-full bg-[#211F1F] text-[#D0A769] text-[10px] font-bold">
                      {vehicle.year}
                    </span>
                  </div>

                  {/* Title & Cart Action Icon */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-dmserif text-lg font-bold text-[#211F1F] leading-tight">
                        {vehicle.name}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#B87A5E]">
                        {vehicle.categoryLabel}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        onSelectVehicle(vehicle.id);
                        onOpenBooking();
                      }}
                      className="w-8 h-8 rounded-full bg-[#FFFBF2] border border-[#D0A769]/40 flex items-center justify-center text-[#211F1F] hover:bg-[#B87A5E] hover:text-white transition-colors shrink-0 shadow-xs"
                      title="Book this vehicle"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>

                  {/* MORE INFORMATION Header & Feature Icons matching Pages 6-8 */}
                  <div className="my-3 py-2 border-y border-[#D0A769]/30">
                    <span className="text-[10px] font-bold tracking-wider text-[#211F1F]/60 uppercase block mb-2">
                      MORE INFORMATION
                    </span>

                    {/* 4 Feature Circles */}
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="bg-[#FFFBF2] p-1.5 rounded-lg border border-[#D0A769]/20" title={`Capacity: ${vehicle.features.seats} Seats`}>
                        <Users className="w-3.5 h-3.5 text-[#B87A5E] mx-auto" />
                        <span className="text-[9px] font-bold text-[#211F1F] block mt-0.5">{vehicle.features.seats} S</span>
                      </div>
                      <div className="bg-[#FFFBF2] p-1.5 rounded-lg border border-[#D0A769]/20" title="Engine Specs">
                        <Gauge className="w-3.5 h-3.5 text-[#B87A5E] mx-auto" />
                        <span className="text-[9px] font-bold text-[#211F1F] block mt-0.5">ENG</span>
                      </div>
                      <div className="bg-[#FFFBF2] p-1.5 rounded-lg border border-[#D0A769]/20" title="Horsepower">
                        <Zap className="w-3.5 h-3.5 text-[#B87A5E] mx-auto" />
                        <span className="text-[9px] font-bold text-[#211F1F] block mt-0.5">HP</span>
                      </div>
                      <div className="bg-[#FFFBF2] p-1.5 rounded-lg border border-[#D0A769]/20" title="Climate Controlled AC">
                        <Shield className="w-3.5 h-3.5 text-[#B87A5E] mx-auto" />
                        <span className="text-[9px] font-bold text-[#211F1F] block mt-0.5">A/C</span>
                      </div>
                    </div>
                  </div>

                  {/* ENGINE SPECS TABLE matching Pages 6-8 */}
                  <div className="space-y-1.5 text-[11px] bg-[#FFFBF2] p-3 rounded-xl border border-[#D0A769]/30">
                    <span className="text-[10px] font-extrabold tracking-widest text-[#B87A5E] uppercase block border-b border-[#D0A769]/20 pb-1">
                      ENGINE
                    </span>
                    
                    <div>
                      <span className="text-[9px] font-bold text-[#211F1F]/60 uppercase block">TYPE</span>
                      <span className="font-semibold text-[#211F1F] leading-tight block">{vehicle.engineSpecs.type}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-dashed border-[#D0A769]/20">
                      <div>
                        <span className="text-[9px] font-bold text-[#211F1F]/60 uppercase block">DISPLACEMENT</span>
                        <span className="font-bold text-[#4A1A10]">{vehicle.engineSpecs.displacement}</span>
                      </div>

                      <div>
                        <span className="text-[9px] font-bold text-[#211F1F]/60 uppercase block">HORSEPOWER</span>
                        <span className="font-bold text-[#4A1A10]">{vehicle.engineSpecs.horsepower}</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom CTA */}
                <button
                  onClick={() => {
                    onSelectVehicle(vehicle.id);
                    onOpenBooking();
                  }}
                  className="w-full mt-4 py-2.5 rounded-xl bg-[#211F1F] hover:bg-[#B87A5E] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  REQUEST QUOTE →
                </button>

              </div>
            ))}
          </div>
        )}

      </section>

    </div>
  );
};
