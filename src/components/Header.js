'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
  ];

  const complianceLinks = [
    { name: 'Investor Charter', path: '/investor-charter' },
    { name: 'Complaint Redressal', path: '/complaint-redressal' },
    { name: 'Complaint Data', path: '/complaint-data' },
    { name: 'Annual Audit', path: '/annual-audit' },
  ];

  const otherLinks = [
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const isLinkActive = (path) => pathname === path;
  const isComplianceActive = () => complianceLinks.some(link => pathname === link.path);

  return (
    <header className="w-full z-50">
      {/* Top Alert Bar: scrolling marquee ticker */}
      <div className="bg-navy text-white py-2 overflow-hidden relative z-50 border-b border-navy-light/20">
        <div className="flex items-center whitespace-nowrap animate-marquee">
          <span className="bg-teal/20 text-teal-light px-2 py-0.5 rounded text-[9px] font-bold tracking-widest border border-teal/30 mr-2 flex-shrink-0">
            SEBI REGISTERED
          </span>
          <span className="text-xs md:text-sm font-semibold text-gray-200 mr-6">We are SEBI registered Research Analysts (INH000009560)</span>
          <span className="text-teal text-xs md:text-sm font-bold mr-1.5 flex-shrink-0">⚠️ NOTICE:</span>
          <span className="text-xs md:text-sm text-gray-300 mr-12">We accept payments only in our registered bank accounts &amp; UPI handle updated on the website.</span>
          {/* Duplicate for seamless loop */}
          <span className="bg-teal/20 text-teal-light px-2 py-0.5 rounded text-[9px] font-bold tracking-widest border border-teal/30 mr-2 flex-shrink-0">
            SEBI REGISTERED
          </span>
          <span className="text-xs md:text-sm font-semibold text-gray-200 mr-6">We are SEBI registered Research Analysts (INH000009560)</span>
          <span className="text-teal text-xs md:text-sm font-bold mr-1.5 flex-shrink-0">⚠️ NOTICE:</span>
          <span className="text-xs md:text-sm text-gray-300 mr-12">We accept payments only in our registered bank accounts &amp; UPI handle updated on the website.</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full bg-white transition-all duration-300 ${
          isSticky
            ? 'fixed top-0 left-0 shadow-md border-b border-gray-100 py-3 animate-[slideDown_0.3s_ease-out]'
            : 'relative py-5 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Logo className="h-9 md:h-10 text-navy" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 font-poppins text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`transition-colors duration-200 hover:text-gold ${
                    isLinkActive(link.path) ? 'text-gold border-b-2 border-gold pb-1' : 'text-navy'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Compliance Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center space-x-1 transition-colors duration-200 hover:text-gold focus:outline-none py-1 ${
                    isComplianceActive() ? 'text-gold border-b-2 border-gold pb-1' : 'text-navy'
                  }`}
                >
                  <span>Compliance</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-100 rounded-md shadow-lg py-2 animate-[fadeIn_0.2s_ease-out] z-50">
                    {complianceLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        className={`block px-4 py-2 text-sm transition-colors duration-150 hover:bg-gray-50 hover:text-gold ${
                          isLinkActive(link.path) ? 'text-gold bg-gray-50 font-semibold' : 'text-navy'
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {otherLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`transition-colors duration-200 hover:text-gold ${
                    isLinkActive(link.path) ? 'text-gold border-b-2 border-gold pb-1' : 'text-navy'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Quick Contact Link */}
              <Link
                href="/contact-us"
                className="bg-navy hover:bg-navy-light text-white px-5 py-2.5 rounded text-sm font-semibold transition-all duration-300 shadow-sm border border-transparent hover:border-gold hover:text-gold"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-navy hover:text-gold focus:outline-none p-1"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out border-l border-gray-100 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
            <span className="text-lg font-bold text-navy">Menu Navigation</span>
            <button onClick={() => setIsOpen(false)} className="text-navy hover:text-gold p-1">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-6 py-6 space-y-4 overflow-y-auto max-h-[calc(100vh-100px)] font-poppins font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block py-2 text-lg border-b border-gray-50 hover:text-gold ${
                  isLinkActive(link.path) ? 'text-gold' : 'text-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Compliance Expandable Section */}
            <div className="border-b border-gray-50 py-2">
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="w-full flex justify-between items-center text-lg text-navy hover:text-gold py-1"
              >
                <span>Compliance</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`pl-4 space-y-2 mt-2 transition-all duration-300 overflow-hidden ${
                  isMobileDropdownOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {complianceLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`block py-1.5 text-sm hover:text-gold ${
                      isLinkActive(link.path) ? 'text-gold font-semibold' : 'text-navy-light'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {otherLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block py-2 text-lg border-b border-gray-50 hover:text-gold ${
                  isLinkActive(link.path) ? 'text-gold' : 'text-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4">
              <Link
                href="/contact-us"
                className="block text-center bg-navy hover:bg-navy-light text-white py-3 rounded-md font-semibold transition-all duration-300 border border-transparent hover:border-gold"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Background Overlay for Mobile Menu */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden"
          ></div>
        )}
      </nav>

      {/* Spacer when Navbar is Sticky */}
      {isSticky && <div className="h-[76px] lg:h-[84px] w-full"></div>}
    </header>
  );
}
