import React, { useState } from 'react';
import { X, CheckCircle, Calendar, MapPin, Users, Truck, Send } from 'lucide-react';
import { FLEET_DATA } from '../data/fleetData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedVehicleId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preselectedVehicleId }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    startDate: '',
    endDate: '',
    vehicleId: preselectedVehicleId || 'volvo-9600',
    passengers: '10-30 Passengers',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const selectedVehicle = FLEET_DATA.find((v) => v.id === formData.vehicleId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#FFFBF2] border-2 border-[#D0A769] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#211F1F]/60 hover:text-[#211F1F] hover:bg-[#F9F1DC] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6 space-y-2">
              <img src="/solid_logo.png" alt="Solid Bus Rental Logo" className="h-10 w-auto object-contain mb-1" />
              <h2 className="text-2xl sm:text-3xl font-cormorant font-bold text-[#211F1F]">
                Book Your Ride / Request Quote
              </h2>
              <p className="text-xs text-[#211F1F]/70">
                Fill out the reservation form below and our Qatar transit team will assist you immediately.
              </p>
            </div>


            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Pickup & Dropoff */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#211F1F] mb-1">
                    Pickup Location *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#B87A5E] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hamad Intl Airport / Hotel"
                      value={formData.pickupLocation}
                      onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F9F1DC]/60 border border-[#D0A769]/40 rounded-lg focus:outline-none focus:border-[#B87A5E] text-[#211F1F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#211F1F] mb-1">
                    Drop-off Location *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#B87A5E] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. West Bay / Lusail / Stadium"
                      value={formData.dropoffLocation}
                      onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F9F1DC]/60 border border-[#D0A769]/40 rounded-lg focus:outline-none focus:border-[#B87A5E] text-[#211F1F]"
                    />
                  </div>
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#211F1F] mb-1">
                    Travel / Start Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#B87A5E] absolute left-3 top-3" />
                    <input
                      type="date"
                      required
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F9F1DC]/60 border border-[#D0A769]/40 rounded-lg focus:outline-none focus:border-[#B87A5E] text-[#211F1F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#211F1F] mb-1">
                    Passenger Group Size
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#B87A5E] absolute left-3 top-3" />
                    <select
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F9F1DC]/60 border border-[#D0A769]/40 rounded-lg focus:outline-none focus:border-[#B87A5E] text-[#211F1F]"
                    >
                      <option value="1-4 Passengers (Luxury Sedan/SUV)">1 - 4 Passengers (Luxury SUV / Car)</option>
                      <option value="5-15 Passengers (Coaster Bus)">5 - 15 Passengers (Coaster Bus)</option>
                      <option value="16-30 Passengers (Medium Coach)">16 - 30 Passengers (Medium Coach)</option>
                      <option value="30-55 Passengers (Executive Bus)">30 - 55 Passengers (Executive Bus)</option>
                      <option value="50+ Cargo / Multi-Bus Fleet">50+ Passengers / Multi-Bus Fleet</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Vehicle Selection */}
              <div>
                <label className="block text-xs font-bold text-[#211F1F] mb-1">
                  Preferred Vehicle Model
                </label>
                <div className="relative">
                  <Truck className="w-4 h-4 text-[#B87A5E] absolute left-3 top-3" />
                  <select
                    value={formData.vehicleId}
                    onChange={(e) => setFormData({ ...formData, vehicleId: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-[#F9F1DC]/60 border border-[#D0A769]/40 rounded-lg focus:outline-none focus:border-[#B87A5E] text-[#211F1F]"
                  >
                    {FLEET_DATA.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} ({v.categoryLabel})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="pt-2 border-t border-[#D0A769]/20 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#211F1F] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#F9F1DC]/60 border border-[#D0A769]/40 rounded-lg focus:outline-none focus:border-[#B87A5E] text-[#211F1F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#211F1F] mb-1">Phone Number (Qatar / Intl) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+974 XXXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#F9F1DC]/60 border border-[#D0A769]/40 rounded-lg focus:outline-none focus:border-[#B87A5E] text-[#211F1F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#211F1F] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#F9F1DC]/60 border border-[#D0A769]/40 rounded-lg focus:outline-none focus:border-[#B87A5E] text-[#211F1F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#211F1F] mb-1">Special Requirements / Flight Info</label>
                  <textarea
                    rows={2}
                    placeholder="Add flight numbers, luggage details, or itinerary notes..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F9F1DC]/60 border border-[#D0A769]/40 rounded-lg focus:outline-none focus:border-[#B87A5E] text-[#211F1F]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-[#B87A5E] hover:bg-[#8C533A] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-md flex items-center justify-center gap-2 mt-4"
              >
                <span>CONFIRM & SEND BOOKING REQUEST</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8 space-y-4">
            <CheckCircle className="w-16 h-16 text-[#B87A5E] mx-auto animate-bounce" />
            <h3 className="text-3xl font-cormorant font-bold text-[#211F1F]">
              Booking Request Received!
            </h3>
            <p className="text-xs text-[#211F1F]/80 max-w-md mx-auto">
              Thank you, <span className="font-bold text-[#B87A5E]">{formData.name}</span>. Your reservation request for <span className="font-semibold">{selectedVehicle?.name || 'Solid Bus'}</span> has been transmitted to our Qatar dispatch office.
            </p>

            <div className="bg-[#F9F1DC] p-4 rounded-xl text-left max-w-md mx-auto border border-[#D0A769]/40 space-y-1.5 text-xs text-[#211F1F]">
              <div><span className="font-bold">Pickup:</span> {formData.pickupLocation}</div>
              <div><span className="font-bold">Destination:</span> {formData.dropoffLocation}</div>
              <div><span className="font-bold">Passenger Size:</span> {formData.passengers}</div>
              <div><span className="font-bold">Contact Phone:</span> {formData.phone}</div>
            </div>

            <p className="text-[11px] text-[#211F1F]/60">
              For urgent inquiries, call our 24/7 Qatar line: <strong className="text-[#B87A5E]">+974 5084 2662</strong>
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-[#211F1F] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#B87A5E] transition-colors"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
