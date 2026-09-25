import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Headset, CheckCircle2 } from 'lucide-react';
import type { ContactMessage } from '../types';


export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactMessage>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* HEADER HERO */}
      <section className="bg-gradient-to-b from-[#F9F1DC] to-[#FFFBF2] py-12 border-b border-[#D0A769]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#B87A5E] uppercase">
            SOLID BUS RENTAL QATAR
          </span>
          <h1 className="text-4xl sm:text-6xl font-cormorant font-bold text-[#4A1A10]">
            GET IN TOUCH
          </h1>
          <p className="text-xs sm:text-sm text-[#211F1F]/80 max-w-lg mx-auto font-light">
            We are here to assist with all your bus rental, corporate transport, and fleet inquiry requirements across Qatar.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT SECTION matching Page 10 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
            
            {/* Phone Card */}
            <div className="bg-[#FFFBF2] border border-[#D0A769]/40 rounded-2xl p-5 flex items-start gap-4 shadow-2xs hover:border-[#B87A5E] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#4A2B20] flex items-center justify-center text-[#D0A769] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-[#211F1F]/60 uppercase block">PHONE</span>
                <a href="tel:+97450842662" className="text-base font-bold text-[#4A1A10] hover:text-[#B87A5E] transition-colors">
                  +974 5084 2662
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#FFFBF2] border border-[#D0A769]/40 rounded-2xl p-5 flex items-start gap-4 shadow-2xs hover:border-[#B87A5E] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#4A2B20] flex items-center justify-center text-[#D0A769] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-[#211F1F]/60 uppercase block">EMAIL</span>
                <a href="mailto:info@solidbusrental.com" className="text-base font-bold text-[#4A1A10] hover:text-[#B87A5E] transition-colors">
                  info@solidbusrental.com
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-[#FFFBF2] border border-[#D0A769]/40 rounded-2xl p-5 flex items-start gap-4 shadow-2xs hover:border-[#B87A5E] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#4A2B20] flex items-center justify-center text-[#D0A769] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-[#211F1F]/60 uppercase block">ADDRESS</span>
                <p className="text-sm font-bold text-[#4A1A10]">Doha, Qatar</p>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-[#FFFBF2] border border-[#D0A769]/40 rounded-2xl p-5 flex items-start gap-4 shadow-2xs hover:border-[#B87A5E] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#4A2B20] flex items-center justify-center text-[#D0A769] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs space-y-1">
                <span className="text-[10px] font-extrabold tracking-widest text-[#211F1F]/60 uppercase block">WORKING HOURS</span>
                <p className="font-bold text-[#4A1A10]">Saturday – Thursday: 8:00 AM – 6:00 PM</p>
                <p className="text-[#B87A5E] font-semibold">Friday: Closed</p>
              </div>
            </div>

            {/* NEED IMMEDIATE ASSISTANCE Box matching Page 10 */}
            <div className="bg-[#4A2B20] text-white rounded-2xl p-6 border-2 border-[#D0A769] space-y-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#D0A769]">
                  <Headset className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#D0A769]">NEED IMMEDIATE ASSISTANCE?</h4>
                  <p className="text-[11px] text-white/70">Call us directly and our team will be happy to help you.</p>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <a
                  href="tel:+97450842662"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FFFBF2] text-[#4A2B20] font-extrabold text-xs tracking-wider hover:bg-[#D0A769] transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+974 5084 2662</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Contact Form matching Page 10 */}
          <div className="lg:col-span-7 bg-[#FFFBF2] border-2 border-[#D0A769]/40 rounded-3xl p-6 sm:p-10 shadow-lg order-1 lg:order-2">
            
            <div className="mb-6 space-y-1">
              <h2 className="text-3xl font-cormorant font-bold text-[#4A1A10]">
                SEND US A MESSAGE
              </h2>
              <p className="text-xs text-[#211F1F]/70 font-light">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#211F1F] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F9F1DC]/60 border border-[#D0A769]/40 rounded-xl focus:outline-none focus:border-[#B87A5E] text-[#211F1F]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#211F1F] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@address.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F9F1DC]/60 border border-[#D0A769]/40 rounded-xl focus:outline-none focus:border-[#B87A5E] text-[#211F1F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#211F1F] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+974 XXXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F9F1DC]/60 border border-[#D0A769]/40 rounded-xl focus:outline-none focus:border-[#B87A5E] text-[#211F1F]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#211F1F] mb-1">Subject *</label>
                    <input
                      type="text"
                      required
                      placeholder="Bus Rental Inquiry / Quote"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F9F1DC]/60 border border-[#D0A769]/40 rounded-xl focus:outline-none focus:border-[#B87A5E] text-[#211F1F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#211F1F] mb-1">Your Message *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your trip dates, route, passenger numbers, or fleet requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F9F1DC]/60 border border-[#D0A769]/40 rounded-xl focus:outline-none focus:border-[#B87A5E] text-[#211F1F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#211F1F] hover:bg-[#B87A5E] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-4 h-4 text-[#D0A769]" />
                </button>

              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#B87A5E] mx-auto animate-bounce" />
                <h3 className="text-3xl font-cormorant font-bold text-[#4A1A10]">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-[#211F1F]/80 max-w-sm mx-auto">
                  Thank you, <span className="font-bold text-[#B87A5E]">{formData.fullName}</span>. We have received your inquiry regarding <span className="font-bold">"{formData.subject}"</span> and will respond to <span className="font-semibold">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' }); }}
                  className="px-6 py-2.5 rounded-lg bg-[#B87A5E] text-white font-bold text-xs uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};
