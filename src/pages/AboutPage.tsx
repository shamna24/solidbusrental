import React from 'react';
import type { PageView } from '../types';
import { ArrowRight, Target, Eye, Gem, Users, Bus, ShieldCheck, Phone, Award } from 'lucide-react';

interface AboutPageProps {
  setActivePage: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActivePage, onOpenBooking }) => {
  return (
    <div className="bg-[#F5E3CD] text-[#211F1F] font-montserrat min-h-screen pb-16 space-y-16">
      
      {/* 1. HERO SECTION matching exact design with enlarged HD bus artwork */}
      {/* 1. HERO SECTION matching exact design with full-height HD bus artwork */}
      <section className="relative border-b border-[#D0A769]/30 overflow-hidden bg-[#F5E3CD] py-0">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[460px] lg:min-h-[520px]">
            
            {/* Left Content (Live Crisp HTML Text) */}
            <div className="lg:col-span-5 space-y-5 text-left z-10 py-8 lg:py-12">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#B87A5E] uppercase block">
                HOME / ABOUT US
              </span>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-cormorant font-bold text-[#4A1A10] leading-none tracking-tight uppercase">
                15+ YEARS OF<br />MOVING TRUST
              </h1>

              <div className="w-16 h-0.5 bg-[#4A1A10]" />

              <p className="text-sm sm:text-base text-[#3A2A20] font-light leading-relaxed max-w-xl">
                Solid Bus Rental is a trusted name in transportation solutions across Qatar. With over 15 years of experience, we provide safe, reliable and professional bus rental services for schools, businesses, institutions and groups.
              </p>
            </div>

            {/* Right Bus Artwork (Full Height Top-to-Bottom) */}
            <div className="lg:col-span-7 flex justify-end h-full self-stretch items-center overflow-visible">
              <img
                src="/home_assets/about_hero_bus_hd_full.png"
                alt="Solid Bus Rental Qatar 15+ Years of Moving Trust"
                className="w-full max-w-none h-full min-h-[460px] lg:min-h-[520px] object-cover filter drop-shadow-lg transform lg:translate-x-12 xl:translate-x-20 transition-all duration-500"
              />
            </div>

          </div>
        </div>
      </section>


      {/* 2. OUR STORY: A JOURNEY BUILT ON DEPENDABILITY */}
      <section className="w-full bg-[#FFFBF2] py-12 lg:py-16 border-y border-[#D0A769]/30">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Fleet Line Image */}
            <div className="lg:col-span-5">
              <div className="rounded-[28px] overflow-hidden border border-[#D0A769]/30 shadow-md">
                <img
                  src="/home_assets/about_fleet_line.png"
                  alt="Solid Bus Rental Fleet Line Vehicles"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold tracking-widest text-[#B87A5E] uppercase">
                  OUR STORY
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cormorant font-bold text-[#4A1A10] uppercase tracking-tight leading-tight">
                  A JOURNEY BUILT ON DEPENDABILITY
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm lg:text-base text-[#211F1F]/80 font-light leading-relaxed">
                <p>
                  Founded with a vision to deliver world-class transportation services, Solid Bus Rental has grown into one of Qatar's most reliable transport providers. Our commitment to safety, quality and customer satisfaction has helped us build long-lasting relationships with schools, companies, hotels and organizations across the country.
                </p>
                <p>
                  From our modern fleet to our professionally trained drivers, everything we do is focused on one goal — delivering safe and comfortable journeys, every single day.
                </p>
              </div>

              {/* 4 Stat Badges matching PDF icon grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#D0A769]/30">
                
                <div className="flex flex-col items-center text-center space-y-1.5 p-3 bg-[#F9F1DC]/70 rounded-xl border border-[#D0A769]/30">
                  <div className="flex items-center gap-1">
                    <Users className="w-5 h-5 text-[#B87A5E]" />
                    <span className="text-2xl font-cormorant font-bold text-[#4A1A10]">15+</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#211F1F]/80">
                    YEARS OF EXPERIENCE
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1.5 p-3 bg-[#F9F1DC]/70 rounded-xl border border-[#D0A769]/30">
                  <div className="flex items-center gap-1">
                    <Bus className="w-5 h-5 text-[#B87A5E]" />
                    <span className="text-2xl font-cormorant font-bold text-[#4A1A10]">100+</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#211F1F]/80">
                    BUSES IN FLEET
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1.5 p-3 bg-[#F9F1DC]/70 rounded-xl border border-[#D0A769]/30">
                  <div className="flex items-center gap-1">
                    <Award className="w-5 h-5 text-[#B87A5E]" />
                    <span className="text-2xl font-cormorant font-bold text-[#4A1A10]">500+</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#211F1F]/80">
                    HAPPY CLIENTS ACROSS QATAR
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1.5 p-3 bg-[#F9F1DC]/70 rounded-xl border border-[#D0A769]/30">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-5 h-5 text-[#B87A5E]" />
                    <span className="text-2xl font-cormorant font-bold text-[#4A1A10]">100%</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#211F1F]/80">
                    COMMITMENT TO SAFETY
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* 3. FOUNDER & MANAGING DIRECTOR + LEADERSHIP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: FOUNDER & MANAGING DIRECTOR */}
          <div className="lg:col-span-5 bg-[#FFFBF2] border border-[#D0A769]/40 rounded-[32px] p-6 sm:p-8 space-y-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              
              <div>
                <span className="text-xs font-extrabold tracking-widest text-[#B87A5E] uppercase block">
                  FOUNDER & MANAGING DIRECTOR
                </span>
                <h3 className="text-3xl font-cormorant font-bold text-[#4A1A10] uppercase tracking-tight mt-0.5">
                  JASEEM MOORKOT
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <img
                  src="/home_assets/about_jaseem_moorkot.png"
                  alt="Jaseem Moorkot - Founder & Managing Director Solid Bus Rental"
                  className="w-36 sm:w-40 h-auto rounded-2xl border-2 border-[#D0A769]/30 shadow-md object-cover shrink-0"
                />

                <div className="space-y-3">
                  <div className="bg-[#F9F1DC] p-3 rounded-xl border-l-4 border-[#B87A5E]">
                    <p className="text-xs text-[#4A1A10] font-bold italic leading-snug">
                      "Our mission is simple — to move people with care, safety and responsibility."
                    </p>
                  </div>

                  <p className="text-xs text-[#211F1F]/80 font-light leading-relaxed">
                    With a passion for excellence and a customer-first approach, Mr. Jaseem Moorkot founded Solid Bus Rental to set new benchmarks in Qatar's transportation industry. His vision continues to drive our commitment to quality, reliability and trust.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-2 border-t border-[#D0A769]/20 text-right">
              <span className="font-script text-3xl text-[#B87A5E] inline-block transform -rotate-2">
                Jaseem Moorkot
              </span>
            </div>
          </div>


          {/* Right Column: LEADERSHIP THAT DRIVES EXCELLENCE */}
          <div className="lg:col-span-7 bg-[#FFFBF2] border border-[#D0A769]/40 rounded-[32px] p-6 sm:p-8 space-y-6 shadow-sm flex flex-col justify-between">
            
            <div className="space-y-3">
              <span className="text-xs font-extrabold tracking-widest text-[#B87A5E] uppercase">
                LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl font-cormorant font-bold text-[#4A1A10] uppercase tracking-tight leading-tight">
                LEADERSHIP THAT DRIVES EXCELLENCE
              </h2>
              <p className="text-xs sm:text-sm text-[#211F1F]/80 font-light leading-relaxed">
                Our leadership reflects our commitment to safety, reliability and customer satisfaction. We continue to innovate and raise the standards of transportation in Qatar.
              </p>
            </div>

            {/* Vision, Mission, Values 3 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D0A769]/30">
              
              {/* VISION */}
              <div className="bg-[#F9F1DC]/60 p-4 rounded-2xl border border-[#D0A769]/30 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#B87A5E]/15 mx-auto flex items-center justify-center">
                  <Eye className="w-5 h-5 text-[#B87A5E]" />
                </div>
                <h4 className="font-extrabold text-xs text-[#4A1A10] uppercase tracking-wider">
                  VISION
                </h4>
                <p className="text-[11px] text-[#211F1F]/80 font-light leading-snug">
                  To be the most trusted transportation partner in Qatar.
                </p>
              </div>

              {/* MISSION */}
              <div className="bg-[#F9F1DC]/60 p-4 rounded-2xl border border-[#D0A769]/30 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#B87A5E]/15 mx-auto flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#B87A5E]" />
                </div>
                <h4 className="font-extrabold text-xs text-[#4A1A10] uppercase tracking-wider">
                  MISSION
                </h4>
                <p className="text-[11px] text-[#211F1F]/80 font-light leading-snug">
                  To deliver safe, reliable and efficient transportation solutions with a customer-first approach.
                </p>
              </div>

              {/* VALUES */}
              <div className="bg-[#F9F1DC]/60 p-4 rounded-2xl border border-[#D0A769]/30 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#B87A5E]/15 mx-auto flex items-center justify-center">
                  <Gem className="w-5 h-5 text-[#B87A5E]" />
                </div>
                <h4 className="font-extrabold text-xs text-[#4A1A10] uppercase tracking-wider">
                  VALUES
                </h4>
                <ul className="text-[10px] text-[#211F1F]/80 font-medium space-y-0.5 text-left pl-3">
                  <li>• Safety First</li>
                  <li>• Reliability</li>
                  <li>• Professionalism</li>
                  <li>• Customer Satisfaction</li>
                  <li>• Integrity</li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* 4. MODERN FLEET. PROFESSIONAL OPERATIONS. */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFBF2] border border-[#D0A769]/40 rounded-[32px] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-extrabold tracking-widest text-[#B87A5E] uppercase">
                OUR STRENGTH
              </span>
              <h2 className="text-3xl sm:text-4xl font-cormorant font-bold text-[#4A1A10] uppercase tracking-tight leading-tight">
                MODERN FLEET.<br />PROFESSIONAL OPERATIONS.
              </h2>
              <p className="text-xs sm:text-sm text-[#211F1F]/80 font-light leading-relaxed">
                We operate a well-maintained fleet of buses and vehicles suitable for all types of transportation needs. Our buses are equipped with modern amenities to ensure comfort, while our experienced team ensures smooth operations and on-time service.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setActivePage('fleet')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#4A1A10] bg-transparent text-[#4A1A10] text-xs font-bold uppercase tracking-wider hover:bg-[#4A1A10] hover:text-white transition-all shadow-xs"
                >
                  <span>EXPLORE OUR FLEET</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[28px] overflow-hidden border border-[#D0A769]/30 shadow-md">
                <img
                  src="/home_assets/about_depot_garage.png"
                  alt="Solid Bus Rental Depot & Modern Fleet Operations"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F9F1DC]/80 border border-[#D0A769]/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#B87A5E]/20 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-[#B87A5E]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-cormorant font-bold text-[#4A1A10]">
                Have questions or need transportation for your school or company?
              </h3>
              <p className="text-xs text-[#211F1F]/70 font-light mt-0.5">
                Let's talk. We're here to help you move forward.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#211F1F] text-[#FFFBF2] text-xs font-bold tracking-wider uppercase hover:bg-[#B87A5E] transition-all shadow-sm shrink-0"
          >
            <span>CONTACT US</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
