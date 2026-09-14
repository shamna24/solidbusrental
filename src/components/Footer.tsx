import React from 'react';
import type { PageView } from '../types';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';


interface FooterProps {
  setActivePage: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenBooking }) => {
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
                <MessageCircle className="w-4 h-4 text-[#FFFBF2]" />
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
              <li>
                <button 
                  onClick={onOpenBooking}
                  className="hover:text-[#D0A769] transition-colors flex items-center gap-1.5 text-[#B87A5E] font-semibold"
                >
                  <span className="font-bold">›</span>
                  <span>Book A Ride</span>
                </button>
              </li>
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
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="absolute right-16 top-3 bg-[#211F1F] text-white text-xs px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Chat with us on WhatsApp
        </span>
      </a>
    </footer>
  );
};
