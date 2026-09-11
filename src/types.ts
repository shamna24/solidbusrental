export type VehicleCategory = 'all' | 'bus' | 'car' | 'pickup';

export interface Vehicle {
  id: string;
  name: string;
  year: string;
  category: 'bus' | 'car' | 'pickup';
  categoryLabel: string;
  subtitle?: string;
  image: string;
  accentColor: string; // Tailwind color class or hex
  bgArchColor: string;
  engineSpecs: {
    type: string;
    displacement: string;
    horsepower: string;
  };
  features: {
    seats: number | string;
    luggage?: string;
    transmission?: string;
    ac?: boolean;
    safetyRating?: string;
  };
  description?: string;
}

export interface BookingRequest {
  pickupLocation: string;
  dropoffLocation: string;
  startDate: string;
  endDate: string;
  vehicleCategory: string;
  passengerCount: number;
  fullName: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface ContactMessage {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type PageView = 'home' | 'services' | 'fleet' | 'about' | 'contact';
