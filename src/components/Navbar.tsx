import React, { useState } from 'react';
import type { PageView } from '../types';

import { Menu, X, ArrowRight, Phone } from 'lucide-react';

interface NavbarProps {
  activePage: PageView;
  setActivePage: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageView }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'ABOUT US', page: 'about' },
    { label: 'OUR SERVICES', page: 'services' },
    { label: 'OUR FLEET', page: 'fleet' },
    { label: 'CONTACT US', page: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F9F1DC]/95 backdrop-blur-md border-b border-[#D0A769]/20 shadow-xs">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo matching Page 1 PDF design */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center cursor-pointer group"
          >
            <img
              src="/solid_logo.png"
              alt="Solid Bus Rental Logo"
              className="h-12 sm:h-14 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>


          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activePage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-xs font-bold tracking-wider transition-colors relative py-1 uppercase ${
                    isActive ? 'text-[#B87A5E]' : 'text-[#211F1F] hover:text-[#B87A5E]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B87A5E] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+97444762662"
              className="flex items-center gap-2 text-xs font-semibold text-[#211F1F] hover:text-[#B87A5E] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B87A5E]" />
              <span>+974 4476 2662</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#211F1F] text-[#FFFBF2] text-xs font-bold tracking-wider hover:bg-[#B87A5E] transition-all transform hover:-translate-y-0.5 shadow-sm"
            >
              <span>BOOK YOUR RIDE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#211F1F] hover:bg-[#D0A769]/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFBF2] border-b border-[#D0A769]/30 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`block w-full text-left px-3 py-2 text-sm font-bold tracking-wide rounded-md uppercase ${
                activePage === item.page
                  ? 'bg-[#B87A5E] text-white'
                  : 'text-[#211F1F] hover:bg-[#F9F1DC]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-[#D0A769]/20 flex flex-col gap-3">
            <a 
              href="tel:+97444762662"
              className="flex items-center gap-2 text-xs font-semibold text-[#211F1F] px-3 py-1"
            >
              <Phone className="w-4 h-4 text-[#B87A5E]" />
              <span>Call Us: +974 4476 2662</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#B87A5E] text-white font-bold text-xs tracking-wider shadow-sm"
            >
              <span>BOOK YOUR RIDE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
