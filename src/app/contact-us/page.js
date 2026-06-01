import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Prime Stock Research',
  description: 'Get in touch with Prime Stock Research. Call our helpline, email our team, or visit our corporate office in Mumbai.',
};

export default function ContactUsPage() {
  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gray-50/50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="text-xs font-semibold text-gold uppercase tracking-widest mb-2 font-poppins">
            Get in touch
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-navy">
            Contact Support & Office
          </h1>
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-gray-400 mt-2 font-medium">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-gray-600">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Info & Map */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy">
                  Communication Desk
                </h2>
                <div className="h-1.5 w-16 bg-gold rounded-full"></div>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  Have questions about our packages or regulatory guidelines? Contact us directly and our representative will guide you through our research methodology.
                </p>
              </div>

              {/* Support Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-navy/5 border border-navy/10 rounded-full text-navy shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy font-poppins text-sm uppercase tracking-wider mb-1">
                      Registered Address
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Office No. 104, 1st Floor, Capital Plaza, Bandra East, Mumbai, Maharashtra 400051
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-navy/5 border border-navy/10 rounded-full text-navy shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy font-poppins text-sm uppercase tracking-wider mb-1">
                      Email Address
                    </h4>
                    <a href="mailto:info@primestockresearch.com" className="text-sm text-gold font-semibold hover:underline">
                      info@primestockresearch.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-navy/5 border border-navy/10 rounded-full text-navy shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy font-poppins text-sm uppercase tracking-wider mb-1">
                      Helpline Numbers
                    </h4>
                    <div className="flex flex-col text-sm text-gold font-semibold">
                      <a href="tel:+919999999999" className="hover:underline">+91-9999999999</a>
                      <a href="tel:+919999999998" className="hover:underline">+91-9999999998</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-navy/5 border border-navy/10 rounded-full text-navy shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy font-poppins text-sm uppercase tracking-wider mb-1">
                      Business Hours
                    </h4>
                    <p className="text-sm text-gray-600">
                      Monday to Friday: 9:00 AM to 6:00 PM IST (Market Hours)
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-56 bg-gray-50 border border-gray-100 rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-50 text-center select-none">
                  <MapPin className="h-10 w-10 text-gold mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs font-bold text-navy uppercase font-poppins tracking-wider">
                    Prime Stock Research Office
                  </span>
                  <span className="text-[10px] text-gray-400 mt-1">
                    Bandra East, Mumbai, Maharashtra 400051
                  </span>
                  <span className="mt-4 px-4 py-1.5 bg-navy text-white text-[11px] font-bold rounded shadow group-hover:bg-navy-light transition-colors">
                    Open in Google Maps
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Callback form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
