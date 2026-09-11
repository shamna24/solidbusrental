import React from 'react';
import type { PageView } from '../types';
import { ArrowRight, Target, Eye, Gem } from 'lucide-react';


interface AboutPageProps {
  setActivePage: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActivePage, onOpenBooking }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* HEADER HERO SECTION matching Page 9 */}
      <section className="bg-gradient-to-b from-[#F9F1DC] to-[#FFFBF2] py-12 border-b border-[#D0A769]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#B87A5E] uppercase">HOME / ABOUT US</span>
              
              <h1 className="text-4xl sm:text-6xl font-cormorant font-bold text-[#4A1A10] leading-none">
                15+ YEARS OF MOVING TRUST
              </h1>

              <p className="text-sm text-[#211F1F]/80 font-light leading-relaxed">
                Solid Bus Rental is a trusted name in transportation solutions across Qatar. With over 15 years of experience, we provide safe, reliable and professional bus rental services for schools, businesses, institutions and groups.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
                  alt="Solid Bus Rental Highway Fleet"
                  className="w-full h-[280px] sm:h-[350px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR STORY: A JOURNEY BUILT ON DEPENDABILITY matching Page 9 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFBF2] border border-[#D0A769]/40 rounded-3xl p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80"
                alt="Fleet line photo"
                className="w-full h-[300px] sm:h-[360px] object-cover rounded-2xl border-4 border-[#F9F1DC] shadow-lg"
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold tracking-widest text-[#B87A5E] uppercase">OUR STORY</span>
                <h2 className="text-3xl sm:text-4xl font-dmserif text-[#4A1A10]">
                  A JOURNEY BUILT ON DEPENDABILITY
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#211F1F]/80 font-light leading-relaxed">
                <p>
                  Founded with a vision to deliver world-class transportation services, Solid Bus Rental has grown into one of Qatar's most reliable transport providers. Our commitment to safety, quality and customer satisfaction has helped us build long-lasting relationships with schools, companies, hotels and organizations across the country.
                </p>
                <p>
                  From our modern fleet to our professionally trained drivers, everything we do is focused on one goal — delivering safe and comfortable journeys, every single day.
                </p>
              </div>

              {/* 4 Stat Badges matching Page 9 design */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#D0A769]/20 text-center">
                <div className="bg-[#F9F1DC] p-3 rounded-xl border border-[#D0A769]/30">
                  <div className="text-2xl font-cormorant font-bold text-[#4A1A10]">15+</div>
                  <div className="text-[10px] font-bold uppercase text-[#211F1F]/70">YEARS OF EXPERIENCE</div>
                </div>

                <div className="bg-[#F9F1DC] p-3 rounded-xl border border-[#D0A769]/30">
                  <div className="text-2xl font-cormorant font-bold text-[#4A1A10]">100+</div>
                  <div className="text-[10px] font-bold uppercase text-[#211F1F]/70">BUSES IN FLEET</div>
                </div>

                <div className="bg-[#F9F1DC] p-3 rounded-xl border border-[#D0A769]/30">
                  <div className="text-2xl font-cormorant font-bold text-[#4A1A10]">500+</div>
                  <div className="text-[10px] font-bold uppercase text-[#211F1F]/70">HAPPY CLIENTS</div>
                </div>

                <div className="bg-[#F9F1DC] p-3 rounded-xl border border-[#D0A769]/30">
                  <div className="text-2xl font-cormorant font-bold text-[#4A1A10]">100%</div>
                  <div className="text-[10px] font-bold uppercase text-[#211F1F]/70">SAFETY COMMITMENT</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* LEADERSHIP SPOTLIGHT & VALUES matching Page 9 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F9F1DC] border border-[#D0A769]/40 rounded-3xl p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Founder Spotlight: JASEEM MOORKOT */}
            <div className="lg:col-span-5 bg-[#FFFBF2] p-6 rounded-2xl border border-[#D0A769]/30 space-y-4 shadow-sm">
              <div className="flex items-center gap-4">
                {/* Director Avatar Silhouette graphic */}
                <div className="w-20 h-20 rounded-full bg-[#D0A769]/20 border-2 border-[#B87A5E] overflow-hidden flex items-center justify-center shrink-0">
                  <div className="w-full h-full bg-[#B87A5E]/20 flex items-center justify-center font-cormorant font-bold text-2xl text-[#4A1A10]">
                    JM
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-extrabold tracking-widest text-[#B87A5E] uppercase block">
                    FOUNDER & MANAGING DIRECTOR
                  </span>
                  <h3 className="text-xl font-dmserif text-[#211F1F]">
                    JASEEM MOORKOT
                  </h3>
                </div>
              </div>

              <div className="bg-[#F9F1DC] p-4 rounded-xl border-l-4 border-[#B87A5E]">
                <p className="text-xs text-[#211F1F] font-semibold italic">
                  "Our mission is simple — to move people with care, safety and responsibility."
                </p>
              </div>

              <p className="text-xs text-[#211F1F]/80 font-light leading-relaxed">
                With a passion for excellence and a customer-first approach, Mr. Jaseem Moorkot founded Solid Bus Rental to set new benchmarks in Qatar's transportation industry. His vision continues to drive our commitment to quality, reliability and trust.
              </p>

              <div className="font-script text-2xl text-[#B87A5E] pt-2">
                Jaseem Moorkot
              </div>
            </div>

            {/* Vision, Mission, Values */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-extrabold tracking-widest text-[#B87A5E] uppercase">LEADERSHIP</span>
                <h2 className="text-3xl font-dmserif text-[#4A1A10]">
                  LEADERSHIP THAT DRIVES EXCELLENCE
                </h2>
                <p className="text-xs text-[#211F1F]/70 font-light">
                  Our leadership reflects our commitment to safety, reliability and customer satisfaction.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Vision */}
                <div className="bg-[#FFFBF2] p-5 rounded-xl border border-[#D0A769]/30 text-center space-y-2">
                  <Eye className="w-6 h-6 text-[#B87A5E] mx-auto" />
                  <h4 className="font-bold text-xs text-[#211F1F] uppercase">VISION</h4>
                  <p className="text-[11px] text-[#211F1F]/70 font-light">
                    To be the most trusted transportation partner in Qatar.
                  </p>
                </div>

                {/* Mission */}
                <div className="bg-[#FFFBF2] p-5 rounded-xl border border-[#D0A769]/30 text-center space-y-2">
                  <Target className="w-6 h-6 text-[#B87A5E] mx-auto" />
                  <h4 className="font-bold text-xs text-[#211F1F] uppercase">MISSION</h4>
                  <p className="text-[11px] text-[#211F1F]/70 font-light">
                    To deliver safe, reliable and efficient transportation solutions.
                  </p>
                </div>

                {/* Values */}
                <div className="bg-[#FFFBF2] p-5 rounded-xl border border-[#D0A769]/30 text-center space-y-2">
                  <Gem className="w-6 h-6 text-[#B87A5E] mx-auto" />
                  <h4 className="font-bold text-xs text-[#211F1F] uppercase">VALUES</h4>
                  <ul className="text-[10px] text-[#211F1F]/80 font-semibold space-y-0.5">
                    <li>• Safety First</li>
                    <li>• Reliability</li>
                    <li>• Professionalism</li>
                    <li>• Integrity</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MODERN FLEET. PROFESSIONAL OPERATIONS section matching Page 9 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFBF2] border border-[#D0A769]/40 rounded-3xl p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-extrabold tracking-widest text-[#B87A5E] uppercase">OUR STRENGTH</span>
              <h2 className="text-3xl font-dmserif text-[#4A1A10]">
                MODERN FLEET.<br />PROFESSIONAL OPERATIONS.
              </h2>
              <p className="text-xs text-[#211F1F]/80 font-light leading-relaxed">
                We operate a well-maintained fleet of buses and vehicles suitable for all types of transportation needs. Our buses are equipped with modern amenities to ensure comfort, while our experienced team ensures smooth operations and on-time service.
              </p>

              <button
                onClick={() => setActivePage('fleet')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#B87A5E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#8C533A] transition-colors shadow-sm"
              >
                <span>EXPLORE OUR FLEET</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-[#F9F1DC]">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80"
                  alt="Depot Operations"
                  className="w-full h-[260px] sm:h-[320px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#211F1F] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-cormorant font-bold text-[#D0A769]">
              Have questions or need transportation for your school or company?
            </h3>
            <p className="text-xs text-white/70 font-light mt-1">Let's talk. We're here to help you move forward.</p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-lg bg-[#B87A5E] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#8C533A] transition-colors shrink-0"
          >
            CONTACT US →
          </button>
        </div>
      </section>

    </div>
  );
};
