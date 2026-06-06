import Link from 'next/link';
import { Mail, Phone, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Prime Stock Research',
  description: 'Get in touch with Prime Stock Research. Call our helpline, email our team, or connect with our support desk.',
};

export default function ContactUsPage() {
  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gray-50/50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-2 font-poppins">
            Get in touch
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-navy">
            Contact Support Desk
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
            
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy">
                  Communication Desk
                </h2>
                <div className="h-1.5 w-16 bg-teal rounded-full"></div>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  Have questions about our packages or regulatory guidelines? Contact us directly and our representative will guide you through our research methodology.
                </p>
              </div>

              {/* Support Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-navy/5 border border-navy/10 rounded-full text-navy shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy font-poppins text-sm uppercase tracking-wider mb-1">
                      Email Address
                    </h4>
                    <a href="mailto:info@primestockresearch.com" className="text-sm text-teal font-semibold hover:underline">
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
                    <div className="flex flex-col text-sm text-teal font-semibold">
                      <a href="tel:+919104129341" className="hover:underline">+91-9104129341</a>
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
