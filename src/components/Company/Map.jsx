'use client';

import { MapPin, Clock, Building2 } from "lucide-react";

const Map = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-20 text-center">
      <h2 className="text-4xl font-extrabold text-black mb-4">
        📍 Our Office Location
      </h2>
      <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
        Visit Brandsmashers Technology at JAP Tower, Raisen Road, Bhopal – the hub of innovation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto items-start">
        {/* Map */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(255,80,16,0.2)]">
          <div className="absolute z-10 left-1/2 -translate-x-1/2 -top-6 bg-white p-2 rounded-full shadow-md">
            <MapPin className="w-6 h-6 text-red-600" />
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.882981095024!2d77.4629056!3d23.2513597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4342fd2a66f5%3A0xc5940ffcc9fd2fa5!2sJAP%20Tower%2C%20Ward%20No.%2042%2C%20Raisen%20Rd%2C%20Bhopal%2C%20Madhya%20Pradesh%20462010!5e0!3m2!1sen!2sin!4v1712732452063!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Info Card */}
        <div className="h-full min-h-[400px] bg-[#fff5f0] p-8 rounded-2xl shadow-[0_6px_24px_rgba(255,80,16,0.15)] text-left flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-bold text-[#ff5010]">
            Brandsmashers Technology
          </h3>

          <div className="flex items-start gap-3">
            <MapPin className="text-red-600 w-6 h-6 mt-1" />
            <p className="text-gray-700 leading-relaxed">
              JAP Tower, Ward No. 42,<br />
              Raisen Road, Bhopal, MP 462010
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="text-[#ff5010] w-6 h-6 mt-1" />
            <p className="text-gray-700">Mon – Sat: 10:30 AM – 7:30 PM</p>
          </div>

          <div className="flex items-start gap-3">
            <Building2 className="text-[#ff5010] w-6 h-6 mt-1" />
            <p className="text-gray-700">Corporate HQ – Bhopal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
