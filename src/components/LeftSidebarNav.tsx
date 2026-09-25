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

        {/* Bottom: Stacked Social Icons matching Image 2 */}
        <div className="flex flex-col items-center space-y-5 text-[#4A3E3D]">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B87A5E] transition-colors p-1"
            title="Twitter"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B87A5E] transition-colors p-1"
            title="Instagram"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B87A5E] transition-colors p-1"
            title="Facebook"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
                href="tel:+97450842662"
                className="flex items-center gap-2 text-xs font-semibold text-[#211F1F] px-1"
              >
                <Phone className="w-4 h-4 text-[#B87A5E]" />
                <span>+974 5084 2662</span>
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
