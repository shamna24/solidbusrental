import React, { useState } from 'react';
import type { PageView } from '../types';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

interface LeftSidebarNavProps {
  activePage: PageView;
  setActivePage: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const LeftSidebarNav: React.FC<LeftSidebarNavProps> = ({
  activePage,
  setActivePage,
  onOpenBooking,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems: { label: string; page: PageView }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'ABOUT US', page: 'about' },
    { label: 'OUR SERVICES', page: 'services' },
    { label: 'OUR FLEET', page: 'fleet' },
    { label: 'CONTACT US', page: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    setActivePage(page);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* LEFT VERTICAL SIDEBAR BAR matching Image 2 mockup */}
      <aside className="fixed top-0 left-0 bottom-0 w-20 z-40 bg-[#F8F3E9] border-r border-[#E5DEC9]/60 flex flex-col justify-between items-center py-6 hidden lg:flex shadow-xs">
        
        {/* Top: Brand Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="cursor-pointer group flex flex-col items-center gap-1"
          title="Solid Bus Rental Home"
        >
          <img
            src="/solid_logo.png"
            alt="Solid Logo"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </div>

        {/* Center: Hamburger Menu Button */}
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="w-12 h-12 rounded-full border border-gray-300/80 bg-white flex flex-col items-center justify-center gap-1 hover:border-[#B87A5E] text-[#211F1F] transition-all shadow-2xs cursor-pointer group"
          title="Navigation Menu"
        >
          {drawerOpen ? (
            <X className="w-5 h-5 text-[#211F1F] group-hover:text-[#B87A5E]" />
          ) : (
            <Menu className="w-5 h-5 text-[#211F1F] group-hover:text-[#B87A5E]" />
          )}
        </button>

        {/* Bottom: Stacked Social Icons matching client requirement */}
        <div className="flex flex-col items-center space-y-5 text-[#4A3E3D]">
          <a
            href="https://www.facebook.com/p/SOLID-BUS-Rental-61553639175140/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1877F2] transition-colors p-1"
            title="Facebook"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://wa.me/97466673348"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#25D366] transition-colors p-1"
            title="WhatsApp"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>
        </div>
      </aside>

      {/* NAVIGATION DRAWER OVERLAY when Hamburger clicked */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
          />

          {/* Drawer Panel */}
          <div className="relative z-10 w-72 max-w-full bg-[#FFFBF7] h-full shadow-2xl p-6 flex flex-col justify-between border-r border-[#E5DEC9]">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5DEC9]">
                <img src="/solid_logo.png" alt="Solid Bus Rental" className="h-10 w-auto" />
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1.5 rounded-full hover:bg-gray-100 text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => handleNavClick(item.page)}
                    className={`block w-full text-left px-4 py-3 text-xs font-bold tracking-wider rounded-xl uppercase transition-all ${
                      activePage === item.page
                        ? 'bg-[#B87A5E] text-white shadow-xs'
                        : 'text-[#211F1F] hover:bg-[#F8F3E9]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#E5DEC9]">
              <a
                href="tel:+97444657708"
                className="flex items-center gap-2 text-xs font-semibold text-[#211F1F] px-1"
              >
                <Phone className="w-4 h-4 text-[#B87A5E]" />
                <span>+974 4465 7708</span>
              </a>

              <button
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#211F1F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B87A5E] transition-colors shadow-sm"
              >
                <span>BOOK YOUR RIDE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
