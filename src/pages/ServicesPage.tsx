import React from 'react';
import type { PageView } from '../types';
import { SERVICES_LIST } from '../data/fleetData';
import { ArrowRight, Bus, Check, Smartphone } from 'lucide-react';


interface ServicesPageProps {
  setActivePage: (page: PageView) => void;
  onOpenBooking: () => void;
  onSelectCategory: (category: 'bus' | 'car' | 'pickup') => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ setActivePage, onOpenBooking, onSelectCategory }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* HERO SECTION matching Page 5 design */}
      <section className="relative bg-gradient-to-b from-[#F9F1DC] to-[#FFFBF2] pt-8 pb-12 border-b border-[#D0A769]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Title & Subhead */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#B87A5E]" />
                <span className="text-xs font-bold tracking-widest text-[#B87A5E] uppercase">EXECUTIVE FLEET SERVICES</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-cormorant font-bold text-[#4A1A10] leading-none">
                OUR SERVICES
              </h1>

              <div className="w-24 h-[1px] bg-[#D0A769] relative my-2">
                <span className="absolute left-1/2 -top-1.5 -translate-x-1/2 text-[#D0A769] text-xs">◆</span>
              </div>

              <p className="text-sm text-[#211F1F]/80 font-light leading-relaxed">
                Well-maintained vehicles.<br />
                Professional drivers.<br />
                On-time, every time.
              </p>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#211F1F] text-[#FFFBF2] font-bold text-xs tracking-wider uppercase hover:bg-[#B87A5E] transition-colors shadow-md"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4 text-[#D0A769]" />
              </button>
            </div>

            {/* Right Bus Hero Image with Arch Frame matching Page 5 */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="arch-card-top bg-[#E7C993]/40 p-4 border-2 border-[#D0A769]/50 shadow-xl overflow-hidden">
                  <img
                    src="/home_assets/qatar_city_tour.jpg"
                    alt="Solid Bus Rental Services Qatar"
                    className="w-full h-[280px] sm:h-[340px] object-cover rounded-2xl shadow-lg border-2 border-white"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THREE STATS BANNER matching Page 5 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFBF2] border border-[#D0A769]/40 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#D0A769]/30">
            
            <div className="pt-2 md:pt-0 px-4 space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#211F1F]/60">FLEET STRENGTH</span>
              <div className="text-4xl font-cormorant font-bold text-[#4A1A10]">18+</div>
              <p className="text-xs text-[#211F1F]/70 uppercase font-semibold">VEHICLES</p>
            </div>

            <div className="pt-4 md:pt-0 px-4 space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#211F1F]/60">EXPERIENCE</span>
              <div className="text-4xl font-cormorant font-bold text-[#4A1A10]">1-3</div>
              <p className="text-xs text-[#211F1F]/70 uppercase font-semibold">YEARS FLEET AGE</p>
            </div>

            <div className="pt-4 md:pt-0 px-4 space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#211F1F]/60">ON-TIME PERFORMANCE</span>
              <div className="text-4xl font-cormorant font-bold text-[#4A1A10]">99%</div>
              <p className="text-xs text-[#211F1F]/70 uppercase font-semibold">SUCCESS RATE</p>
            </div>

          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION (01 BUS, 02 CAR, 03 TON PICKUP) matching Page 5 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 01 CATEGORY A: BUS */}
        <div className="bg-[#F9F1DC] border border-[#D0A769]/40 rounded-3xl p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-2xl font-cormorant font-bold text-[#B87A5E]">01</span>
              <h3 className="text-xs font-bold tracking-widest text-[#211F1F]/60 uppercase">CATEGORY A</h3>
              <h2 className="text-4xl sm:text-5xl font-dmserif text-[#4A1A10]">BUS</h2>
              <p className="text-xs text-[#211F1F]/80 font-light leading-relaxed">
                Luxury intercity coaches, 50+ passenger buses, and school shuttle vans equipped with ergonomic reclining seats, dual air conditioning, and supreme highway safety features.
              </p>

              <button
                onClick={() => {
                  onSelectCategory('bus');
                  setActivePage('fleet');
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#B87A5E] hover:text-[#211F1F] transition-colors italic font-script"
              >
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4 not-italic" />
              </button>
            </div>

            <div className="lg:col-span-7">
              <img
                src="/home_assets/qatar_city_tour.jpg"
                alt="Category A Bus Qatar"
                className="w-full h-[260px] sm:h-[320px] object-cover rounded-2xl border-4 border-white shadow-lg"
              />
            </div>

          </div>
        </div>

        {/* 02 CATEGORY B: CAR */}
        <div className="bg-[#FFFBF2] border border-[#D0A769]/40 rounded-3xl p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80"
                alt="Category B Car"
                className="w-full h-[260px] sm:h-[320px] object-cover rounded-2xl border-4 border-[#F9F1DC] shadow-lg"
              />
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <span className="text-2xl font-cormorant font-bold text-[#B87A5E]">02</span>
              <h3 className="text-xs font-bold tracking-widest text-[#211F1F]/60 uppercase">CATEGORY B</h3>
              <h2 className="text-4xl sm:text-5xl font-dmserif text-[#4A1A10]">CAR & SUV</h2>
              <p className="text-xs text-[#211F1F]/80 font-light leading-relaxed">
                Toyota Land Cruiser V8, Audi executive sedans, and high-performance cars tailored for executive VIP transit, hotel transfers, and private chauffeurs.
              </p>

              <button
                onClick={() => {
                  onSelectCategory('car');
                  setActivePage('fleet');
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#B87A5E] hover:text-[#211F1F] transition-colors italic font-script"
              >
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4 not-italic" />
              </button>
            </div>

          </div>
        </div>

        {/* 03 CATEGORY C: TON PICKUP */}
        <div className="bg-[#F9F1DC] border border-[#D0A769]/40 rounded-3xl p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-2xl font-cormorant font-bold text-[#B87A5E]">03</span>
              <h3 className="text-xs font-bold tracking-widest text-[#211F1F]/60 uppercase">CATEGORY C</h3>
              <h2 className="text-4xl sm:text-5xl font-dmserif text-[#4A1A10]">TON PICKUP</h2>
              <p className="text-xs text-[#211F1F]/80 font-light leading-relaxed">
                Heavy-duty commercial pick-ups including Toyota Hilux, Isuzu D-Max, Ford Ranger, and Mahindra Bolero designed for site hauling and cargo logistics.
              </p>

              <button
                onClick={() => {
                  onSelectCategory('pickup');
                  setActivePage('fleet');
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#B87A5E] hover:text-[#211F1F] transition-colors italic font-script"
              >
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4 not-italic" />
              </button>
            </div>

            <div className="lg:col-span-7">
              <img
                src="https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1000&q=80"
                alt="Category C Ton Pickup"
                className="w-full h-[260px] sm:h-[320px] object-cover rounded-2xl border-4 border-white shadow-lg"
              />
            </div>

          </div>
        </div>

      </section>

      {/* FULL SERVICES DETAILED LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#D0A769]/30 pt-12">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-3xl font-cormorant font-bold text-[#211F1F]">
            Comprehensive Qatari Transportation Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((srv) => (
            <div key={srv.id} className="bg-[#FFFBF2] p-6 rounded-2xl border border-[#D0A769]/30 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#B87A5E]/10 flex items-center justify-center text-[#B87A5E]">
                <Bus className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#211F1F]">{srv.title}</h3>
              <p className="text-xs text-[#211F1F]/70 font-light leading-relaxed">{srv.description}</p>
              <ul className="space-y-1 pt-2 border-t border-[#D0A769]/20 text-[11px] text-[#211F1F]">
                {srv.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#B87A5E]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* MOBILE FRIENDLY PREVIEW BANNER matching Page 5 bottom */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4A2B20] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-[#D0A769]">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D0A769]/20 text-[#D0A769] text-xs font-bold">
              <Smartphone className="w-4 h-4" />
              <span>OPTIMIZED FOR SMARTPHONES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-cormorant font-bold text-[#FFFBF2]">
              MOBILE FRIENDLY VERSION
            </h2>
            <p className="text-xs text-white/80 max-w-md font-light">
              Book rides on the go! Our platform is 100% responsive, optimized for smartphones, tablets, and desktop devices across Qatar.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full bg-[#D0A769] text-[#211F1F] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shadow-md"
          >
            BOOK YOUR RIDE NOW →
          </button>
        </div>
      </section>

    </div>
  );
};
