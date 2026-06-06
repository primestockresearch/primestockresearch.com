import Link from 'next/link';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-gray-300 font-sans border-t-4 border-teal">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand & Registration */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center group">
              <Logo className="h-9 text-white" dark={true} />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Prime Stock Research is a SEBI Registered Research Analyst providing premium equity research and stock advisory services.
            </p>
            <div className="bg-navy-dark/40 p-4 rounded border border-navy-light/30 space-y-1.5 text-xs">
              <p className="font-semibold text-white">SEBI Registration Info:</p>
              <p>No: <span className="text-teal font-mono">INH000009560</span></p>
              <p>Type: Research Analyst</p>
              <p>BASL Member ID: <span className="text-teal font-mono">BASL1045</span></p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-poppins font-semibold text-lg border-b border-navy-light/40 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-teal transition-colors duration-150">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-teal transition-colors duration-150">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal transition-colors duration-150">Our Services</Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-teal transition-colors duration-150">Refund Policy</Link>
              </li>
            </ul>
          </div>

          {/* Compliance Links */}
          <div className="space-y-4">
            <h3 className="text-white font-poppins font-semibold text-lg border-b border-navy-light/40 pb-2">
              Compliance
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/investor-charter" className="hover:text-teal transition-colors duration-150">Investor Charter</Link>
              </li>
              <li>
                <Link href="/complaint-redressal" className="hover:text-teal transition-colors duration-150">Complaint Redressal</Link>
              </li>
              <li>
                <Link href="/complaint-data" className="hover:text-teal transition-colors duration-150">Complaint Data</Link>
              </li>
              <li>
                <Link href="/annual-audit" className="hover:text-teal transition-colors duration-150">Annual Audit Status</Link>
              </li>
              <li>
                <a 
                  href="https://scores.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-1 hover:text-teal transition-colors duration-150 group"
                >
                  <span>SEBI SCORES Portal</span>
                  <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="https://smartodr.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-1 hover:text-teal transition-colors duration-150 group"
                >
                  <span>SMART ODR Portal</span>
                  <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-white font-poppins font-semibold text-lg border-b border-navy-light/40 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-teal" />
                <a href="mailto:info@primestockresearch.com" className="hover:text-teal">
                  info@primestockresearch.com
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-teal" />
                <a href="tel:+919104129341" className="hover:text-teal">
                  +91-9104129341
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimers & Legal Warnings */}
      <div className="bg-navy-dark/60 text-xs text-gray-400 py-10 border-t border-navy-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* SEBI Market Risk Warning */}
          <div className="border border-red-900/40 bg-red-950/15 p-4 rounded text-justify leading-relaxed">
            <span className="font-bold text-red-400 uppercase mr-1">⚠️ Regulatory Disclaimer:</span>
            Investment in securities market are subject to market risks. Read all the related documents carefully before investing. 
            Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
          </div>

          {/* Detailed Advisory Disclaimer */}
          <div className="space-y-3 leading-relaxed text-justify">
            <p>
              <strong className="text-gray-300">Disclaimer:</strong> Prime Stock Research (hereinafter referred to as 'PSR' or the 'Firm') is a SEBI registered Research Analyst. 
              The advisory calls and recommendations provided by PSR are based on the analysis of financial data, chart patterns, and technical/fundamental parameters. 
              We do not guarantee or promise any fixed returns, profits, or capital protection. Stock trading and investing carry high risks, and you may lose part or all of your invested capital. 
              Past performance is not indicative of future results.
            </p>
            <p>
              Clients are advised to consult their independent financial advisors before acting on any recommendations. 
              All research outputs are distributed solely for informational purposes and do not constitute an offer to buy or sell securities. 
              PSR and its directors/employees will not accept any liability for financial loss arising from the use of advice provided.
            </p>
          </div>

          {/* Bottom Copyright bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-navy-light/10 text-[11px] text-gray-500">
            <p>© {currentYear} Prime Stock Research. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
