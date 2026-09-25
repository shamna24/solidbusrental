import React from 'react';
import type { PageView } from '../types';
import { Phone, Mail, MapPin } from 'lucide-react';


interface FooterProps {
  setActivePage: (page: PageView) => void;
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  return (
    <footer className="bg-[#171515] text-[#FFFBF2] border-t-4 border-[#B87A5E] relative overflow-hidden">
      {/* Decorative top pattern bar */}
      <div className="h-1 bg-gradient-to-r from-[#B87A5E] via-[#D0A769] to-[#B87A5E]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="bg-[#FFFBF2] p-2 rounded-xl inline-block border border-[#D0A769]/30 shadow-xs">
              <img
                src="/solid_logo.png"
                alt="Solid Bus Rental Official Logo"
                className="h-10 w-auto object-contain"
              />
            </div>


            <p className="text-xs text-[#FFFBF2]/70 leading-relaxed font-light">
              Safe. Reliable. Comfortable.<br />
              Delivering trusted transportation solutions across Qatar with high standards of safety and luxury.
            </p>

            {/* Social Icons matching design */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://facebook.com" target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#211F1F] border border-[#D0A769]/30 flex items-center justify-center hover:bg-[#B87A5E] hover:border-[#B87A5E] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current text-[#FFFBF2]" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03.05-2 1.5-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.428 2 9.5 3.667 9.5 7v2.5H7v4h2.5V22h4.5v-8.5z"/></svg>
              </a>
              <a 
                href="https://instagram.com" target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#211F1F] border border-[#D0A769]/30 flex items-center justify-center hover:bg-[#B87A5E] hover:border-[#B87A5E] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current text-[#FFFBF2]" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a 
                href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#211F1F] border border-[#D0A769]/30 flex items-center justify-center hover:bg-[#B87A5E] hover:border-[#B87A5E] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current text-[#FFFBF2]" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a 
                href="https://wa.me/97450842662" target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#211F1F] border border-[#D0A769]/30 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current text-[#FFFBF2]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#D0A769] uppercase mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-xs text-[#FFFBF2]/80">
              {['home', 'about', 'services', 'fleet', 'contact'].map((pg) => (
                <li key={pg}>
                  <button 
                    onClick={() => {
                      setActivePage(pg as PageView);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#D0A769] transition-colors flex items-center gap-1.5 capitalize"
                  >
                    <span className="text-[#B87A5E] font-bold">›</span>
                    <span>{pg === 'home' ? 'Home' : pg === 'about' ? 'About Us' : pg === 'services' ? 'Our Services' : pg === 'fleet' ? 'Our Fleet' : 'Contact Us'}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#D0A769] uppercase mb-4">OUR SERVICES</h4>
            <ul className="space-y-2 text-xs text-[#FFFBF2]/80">
              <li>Corporate Transportation</li>
              <li>School Transportation</li>
              <li>Event & Conference Transit</li>
              <li>Hotel & Resort Transfers</li>
              <li>Hamad Airport Shuttles</li>
              <li>Group & City Tours</li>
              <li>Custom Fleet Leasing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#D0A769] uppercase mb-4">CONTACT INFO</h4>
            <ul className="space-y-3 text-xs text-[#FFFBF2]/80">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D0A769] shrink-0 mt-0.5" />
                <span>+974 5084 2662</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D0A769] shrink-0 mt-0.5" />
                <span className="break-all">info@solidbusrental.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D0A769] shrink-0 mt-0.5" />
                <span>Doha, State of Qatar</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FFFBF2]/60 gap-4">
          <p>© 2025 Solid Bus Rental. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#privacy" className="hover:text-[#D0A769] transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-[#D0A769] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Action Icon matching Page 4/9/10 screenshot */}
      <a
        href="https://wa.me/97450842662?text=Hello%20Solid%20Bus%20Rental%2C%20I%20would%20like%20to%20inquire%20about%20bus%20rentals."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
        title="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current text-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span className="absolute right-16 top-3 bg-[#211F1F] text-white text-xs px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Chat with us on WhatsApp
        </span>
      </a>
    </footer>
  );
};
