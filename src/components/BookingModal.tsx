import React, { useState, useEffect } from 'react';
import { X, Phone, Users, ShieldCheck, Wind } from 'lucide-react';
import { FLEET_DATA } from '../data/fleetData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedVehicleId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preselectedVehicleId }) => {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>(
    preselectedVehicleId || 'geely-emgrand'
  );
  const [details, setDetails] = useState('');

  useEffect(() => {
    if (preselectedVehicleId) {
      setSelectedVehicleId(preselectedVehicleId);
    }
  }, [preselectedVehicleId]);

  if (!isOpen) return null;

  const vehicle = FLEET_DATA.find((v) => v.id === selectedVehicleId) || FLEET_DATA[0];

  const getWhatsAppUrl = () => {
    let msg = `Hello Solid Bus Rental Qatar,\n\nI would like to inquire about renting the *${vehicle.name}* (${vehicle.categoryLabel}).`;
    if (details.trim()) {
      msg += `\n\n*Requirement / Dates:*\n${details.trim()}`;
    }
    msg += `\n\nPlease share availability, pricing, and rental terms. Thank you!`;
    return `https://wa.me/97450842662?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#FFFBF2] border-2 border-[#D0A769] rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#4A1A10]/60 hover:text-[#4A1A10] hover:bg-[#F9F1DC] transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-1.5 pb-4 border-b border-[#D0A769]/30">
          <img src="/solid_logo.png" alt="Solid Bus Rental Logo" className="h-9 w-auto object-contain mx-auto mb-1" />
          <h2 className="text-2xl sm:text-3xl font-cormorant font-bold text-[#4A1A10]">
            Direct WhatsApp Inquiry
          </h2>
          <p className="text-xs text-[#211F1F]/75 font-light">
            Instant booking and quotation with our Qatar dispatch team.
          </p>
        </div>

        {/* Vehicle Spotlight Card */}
        <div className="mt-4 bg-[#FFFBF7] border border-[#E5DEC9] rounded-2xl p-4 shadow-xs space-y-3">
          
          {/* Arch Container with Image */}
          <div className="relative h-44 rounded-xl overflow-hidden flex items-center justify-center p-2">
            <svg viewBox="0 0 300 240" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <path d="M 0,0 L 300,0 L 300,140 C 300,230 0,230 0,140 Z" fill={vehicle.accentColor} />
            </svg>
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="relative z-10 max-h-36 w-auto object-contain drop-shadow-xl"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Vehicle Info */}
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B87A5E] bg-[#F5E6CD]/60 px-2.5 py-0.5 rounded-full">
                {vehicle.categoryLabel}
              </span>
              <span className="text-xs font-bold text-[#4A1A10]">
                {vehicle.year} Model
              </span>
            </div>

            <h3 className="font-sans text-lg sm:text-xl font-extrabold text-[#211F1F] uppercase mt-1">
              {vehicle.name}
            </h3>
            <p className="text-xs text-[#9E826F] font-medium">
              {vehicle.subtitle}
            </p>
          </div>

          {/* Quick Specs Badges */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#E5DEC9]/60 text-center">
            <div className="bg-[#FFFBF2] p-1.5 rounded-lg border border-[#D0A769]/25">
              <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-[#4A1A10]">
                <Users className="w-3.5 h-3.5 text-[#B87A5E]" />
                <span>{vehicle.features.seats} Seats</span>
              </div>
            </div>
            <div className="bg-[#FFFBF2] p-1.5 rounded-lg border border-[#D0A769]/25">
              <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-[#4A1A10]">
                <Wind className="w-3.5 h-3.5 text-[#B87A5E]" />
                <span>A/C Climate</span>
              </div>
            </div>
            <div className="bg-[#FFFBF2] p-1.5 rounded-lg border border-[#D0A769]/25">
              <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-[#4A1A10]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B87A5E]" />
                <span>Insured</span>
              </div>
            </div>
          </div>

          {/* Change Vehicle Dropdown */}
          <div className="pt-2">
            <label className="block text-[11px] font-bold text-[#4A1A10] mb-1">
              Selected Vehicle:
            </label>
            <select
              value={vehicle.id}
              onChange={(e) => setSelectedVehicleId(e.target.value)}
              className="w-full bg-[#FFFBF2] border border-[#D0A769]/50 rounded-xl px-3 py-2 text-xs font-semibold text-[#211F1F] focus:outline-none focus:border-[#B87A5E] cursor-pointer"
            >
              {FLEET_DATA.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name} ({v.categoryLabel})
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Optional Requirement Notes */}
        <div className="mt-3">
          <label className="block text-[11px] font-bold text-[#4A1A10] mb-1">
            Optional Requirement / Rental Dates (included in message):
          </label>
          <input
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="e.g. 3 days starting tomorrow, with driver..."
            className="w-full bg-[#FFFBF7] border border-[#D0A769]/40 rounded-xl px-3 py-2 text-xs text-[#211F1F] placeholder-[#9E826F]/60 focus:outline-none focus:border-[#B87A5E]"
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-5 space-y-2.5">
          {/* Primary WhatsApp Button */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2.5 hover:scale-[1.02] cursor-pointer group"
          >
            <svg className="w-5 h-5 fill-current text-white shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Inquire on WhatsApp</span>
          </a>

          {/* Secondary Direct Call Button */}
          <a
            href="tel:+97450842662"
            className="w-full py-2.5 px-4 rounded-xl bg-transparent hover:bg-[#F5E6CD]/60 text-[#4A1A10] border border-[#D0A769]/50 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#B87A5E]" />
            <span>Call 24/7 Helpline: +974 5084 2662</span>
          </a>
        </div>

        <p className="text-[11px] text-center text-[#211F1F]/60 mt-3">
          Qatar Operations • West Bay & Hamad Intl Airport • Instant Response
        </p>

      </div>
    </div>
  );
};
