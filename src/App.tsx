import React, { useState } from 'react';
import type { PageView, VehicleCategory } from './types';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { FleetPage } from './pages/FleetPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [fleetCategory, setFleetCategory] = useState<VehicleCategory>('all');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | undefined>(undefined);

  const handlePageChange = (page: PageView) => {
    if (page === 'fleet') {
      setFleetCategory('all');
    }
    setActivePage(page);
  };

  const handleOpenBooking = (vehicleId?: string) => {
    setSelectedVehicleId(vehicleId);
    setIsBookingOpen(true);
  };

  const handleSelectCategory = (cat: 'bus' | 'car' | 'pickup') => {
    setFleetCategory(cat);
  };

  return (
    <div className="min-h-screen bg-[#F8F3E9] flex flex-col justify-between font-montserrat text-[#211F1F]">
      
      {/* Top Header Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page View Routing */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onOpenBooking={() => handleOpenBooking()}
            onSelectVehicle={(vId) => handleOpenBooking(vId)}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            setActivePage={setActivePage}
            onOpenBooking={() => handleOpenBooking()}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {activePage === 'fleet' && (
          <FleetPage
            initialCategory={fleetCategory}
            onOpenBooking={() => setIsBookingOpen(true)}
            onSelectVehicle={(vId) => handleOpenBooking(vId)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            setActivePage={setActivePage}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        setActivePage={handlePageChange}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking & Quote Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedVehicleId={selectedVehicleId}
      />

    </div>
  );
};

export default App;
