import Link from 'next/link';
import { Target, Eye, ShieldCheck, Heart } from 'lucide-react';

export const metadata = {
  title: 'About Us | Prime Stock Research',
  description: 'Learn about Prime Stock Research, our mission, vision, research methodology, and commitment to disciplined stock market advisory.',
};

export default function AboutUsPage() {
  const values = [
    {
      title: 'Discipline First',
      desc: 'We prioritize capital preservation and strict risk-reward structures on every research recommendation.',
      icon: <Target className="h-6 w-6 text-gold" />,
    },
    {
      title: 'Total Transparency',
      desc: 'No false promises or guaranteed returns. We disclose all performance and compliance records openly.',
      icon: <Eye className="h-6 w-6 text-gold" />,
    },
    {
      title: 'Regulatory Adherence',
      desc: 'As a SEBI Registered Research Analyst, we strictly adhere to all regulatory and code of conduct guidelines.',
      icon: <ShieldCheck className="h-6 w-6 text-gold" />,
    },
    {
      title: 'Client Centricity',
      desc: 'We are fee-only advisors. We make money from your trust, not through trading volumes or profit cuts.',
      icon: <Heart className="h-6 w-6 text-gold" />,
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb / Title Bar */}
      <section className="bg-gray-50/50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="text-xs font-semibold text-gold uppercase tracking-widest mb-2 font-poppins">
            Get to know us
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-navy">
            About Our Firm
          </h1>
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-gray-400 mt-2 font-medium">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-gray-600">About Us</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Mission & Vision grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy">
                Who Is Prime Stock Research?
              </h2>
              <div className="h-1.5 w-16 bg-gold rounded-full"></div>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                Prime Stock Research is a SEBI registered Research Analyst company (INH000009560) dedicated to delivering actionable, research-backed financial recommendations for the Indian equity markets. 
              </p>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                We analyze technical breakout patterns, volume distributions, and macroeconomic factors to structure premium trading suggestions. With years of experience in market cycles, our core strength lies in identifying momentum opportunities in large, mid, and small-cap segments.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl space-y-6">
              <div>
                <h3 className="text-lg font-bold font-poppins text-navy uppercase tracking-wider mb-2">
                  Our Mission
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  To democratize institutional-grade stock market research for retail and high-net-worth investors, enabling them to navigate the volatility of capital markets with structured, risk-defined strategies.
                </p>
              </div>
              <hr className="border-gray-200/60" />
              <div>
                <h3 className="text-lg font-bold font-poppins text-navy uppercase tracking-wider mb-2">
                  Our Vision
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  To be India's most trusted and compliant equity research firm, celebrated for our analytical integrity, code of conduct compliance, and focus on long-term client success.
                </p>
              </div>
            </div>
          </div>

          {/* Value Pillars */}
          <div className="space-y-12 pt-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy">
                Our Core Pillars
              </h2>
              <p className="text-xs md:text-sm text-gray-400 uppercase font-semibold tracking-wider">
                Principles that drive our recommendations
              </p>
              <div className="h-1 w-16 bg-gold rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-navy/10 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                  <div className="p-3 bg-navy/5 border border-navy/10 rounded w-fit">
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-navy font-poppins text-lg">
                    {v.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-navy rounded-xl p-8 md:p-12 text-center text-white space-y-6 relative overflow-hidden border border-gold/20 shadow-md">
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light/15 to-navy opacity-60 pointer-events-none"></div>
            <h3 className="text-2xl md:text-3xl font-bold font-poppins text-white relative z-10">
              Ready to trade with professional research?
            </h3>
            <p className="text-sm text-gray-300 max-w-xl mx-auto relative z-10 leading-relaxed">
              Explore our structured packages tailored to your capital and trading preferences. Start your wealth building journey today.
            </p>
            <div className="pt-2 relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/services" 
                className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-3 rounded text-sm transition-all duration-300 w-full sm:w-auto"
              >
                View Services
              </Link>
              <Link 
                href="/contact-us" 
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded text-sm transition-all duration-300 border border-white/20 w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
