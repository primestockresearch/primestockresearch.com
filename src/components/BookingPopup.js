'use client';

import { useState, useEffect } from 'react';
import { X, User, CheckCircle, CreditCard, Info } from 'lucide-react';

export default function BookingPopup({ isOpen, onClose, initialPlanName }) {
  const [fullName, setFullName] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('Elite Plan');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialPlanName) {
      // Normalize plan name from props
      if (initialPlanName.includes('Expert')) {
        setSelectedPlan('Expert Plan');
      } else if (initialPlanName.includes('Elite')) {
        setSelectedPlan('Elite Plan');
      } else if (initialPlanName.includes('Ultimate')) {
        setSelectedPlan('Ultimate Plan');
      } else {
        setSelectedPlan(initialPlanName);
      }
    }
  }, [initialPlanName, isOpen]);

  // Reset form when opened/closed
  useEffect(() => {
    if (!isOpen) {
      setFullName('');
      setIsSubmitted(false);
      setLoading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const plansDetails = {
    'Expert Plan': {
      basePrice: 45000,
      gst: 8100,
      total: 53100,
      validity: '1 Year'
    },
    'Elite Plan': {
      basePrice: 150000,
      gst: 27000,
      total: 177000,
      validity: '1 Year'
    },
    'Ultimate Plan': {
      basePrice: 'Customized',
      gst: 'N/A',
      total: 'Contact Desk',
      validity: '3 Months'
    }
  };

  const currentPlan = plansDetails[selectedPlan] || plansDetails['Elite Plan'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim()) return;

    setLoading(true);
    // Simulate booking/payment processing animation
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-300 scale-100 max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-navy hover:bg-gray-100 p-1.5 rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content Wrapper */}
        <div className="p-6 md:p-8 overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Header */}
              <div className="text-center space-y-1">
                <h3 className="text-xl md:text-2xl font-bold font-poppins text-navy">
                  Booking Details
                </h3>
                <p className="text-xs text-gray-400">
                  Select your preferred subscription and continue securely.
                </p>
              </div>

              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-navy uppercase tracking-wider block">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                    <User className="h-4.5 w-4.5" />
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 transition-all font-sans text-navy"
                  />
                </div>
              </div>

              {/* Plan Select Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-navy uppercase tracking-wider block">
                  Select Research Plan
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 transition-all font-sans text-navy cursor-pointer"
                >
                  <option value="Expert Plan">Expert Plan (₹45,000 + GST)</option>
                  <option value="Elite Plan">Elite Plan (₹1,50,000 + GST)</option>
                  <option value="Ultimate Plan">Ultimate Plan (Customized)</option>
                </select>
              </div>

              {/* Info Disclaimer */}
              <div className="bg-teal/5 border border-teal/15 p-4 rounded-xl flex items-start space-x-3 text-teal-dark">
                <Info className="h-5 w-5 shrink-0 mt-0.5" />
                <p className="text-[11px] md:text-xs leading-relaxed">
                  Your research services will start within 24 hours of successful payment verification and onboarding.
                </p>
              </div>

              {/* Calculations Block */}
              <div className="border border-gray-100 rounded-xl p-5 bg-gray-50/50 space-y-3 font-sans text-xs md:text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Base Price</span>
                  <span className="font-semibold text-navy">
                    {typeof currentPlan.basePrice === 'number' 
                      ? `₹${currentPlan.basePrice.toLocaleString('en-IN')}` 
                      : currentPlan.basePrice}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18%)</span>
                  <span className="font-semibold text-navy">
                    {typeof currentPlan.gst === 'number' 
                      ? `₹${currentPlan.gst.toLocaleString('en-IN')}` 
                      : currentPlan.gst}
                  </span>
                </div>
                
                {/* Dashed Separator */}
                <div className="border-t border-dashed border-gray-200 my-2"></div>

                <div className="flex justify-between text-sm md:text-base font-bold">
                  <span className="text-navy">Total Amount</span>
                  <span className="text-teal font-poppins">
                    {typeof currentPlan.total === 'number' 
                      ? `₹${currentPlan.total.toLocaleString('en-IN')}` 
                      : currentPlan.total}
                  </span>
                </div>
              </div>

              {/* Submit Pay Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-teal hover:bg-teal-dark disabled:bg-teal-light/50 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 text-center"
              >
                {loading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <CreditCard className="h-4.5 w-4.5" />
                    <span>
                      {selectedPlan === 'Ultimate Plan' 
                        ? 'Submit Enquiry' 
                        : `Pay ₹${currentPlan.total.toLocaleString('en-IN')}`}
                    </span>
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Success State */
            <div className="py-8 text-center space-y-6 animate-[fadeIn_0.3s_ease-out]">
              <div className="flex justify-center">
                <CheckCircle className="h-16 w-16 text-teal animate-[pulse_2s_infinite]" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold font-poppins text-navy">
                  Demo Booking Successful!
                </h4>
                <p className="text-xs md:text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
                  Thank you, <strong className="text-navy">{fullName}</strong>. Your subscription request for <strong className="text-teal">{selectedPlan}</strong> has been logged in demo mode. 
                </p>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">
                  Our Relationship Manager will contact you shortly to complete the onboarding procedure.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-navy hover:bg-navy-light text-white text-xs font-semibold rounded-lg shadow-sm transition-all duration-300"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
