'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PhoneCall, Check } from 'lucide-react';

export default function QuickLeadForm() {
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log('Quick lead submitted:', data);
    setIsSent(true);
    reset();
    setTimeout(() => setIsSent(false), 4000);
  };

  return (
    <section className="bg-navy border-y border-gold/20 py-8 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light/10 to-navy opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Text block */}
          <div className="text-center lg:text-left space-y-1">
            <h3 className="text-lg md:text-xl font-bold font-poppins text-white">
              Want expert guidance on your stock portfolio?
            </h3>
            <p className="text-xs md:text-sm text-gray-300">
              Enter your mobile number and our senior Research Analyst will call you shortly.
            </p>
          </div>

          {/* Form block */}
          <div className="w-full max-w-md">
            {isSent ? (
              <div className="bg-green-600/10 border border-green-500/20 text-green-400 rounded-lg p-3 text-center flex items-center justify-center space-x-2 text-sm font-semibold animate-[fadeIn_0.3s_ease-out]">
                <Check className="h-5 w-5" />
                <span>Thank you! We will contact you shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-grow">
                    <span className="absolute left-3.5 top-3 text-sm text-gray-400 font-semibold">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="Enter 10-Digit Mobile"
                      {...register('mobile', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: 'Please enter a valid 10-digit number'
                        }
                      })}
                      className={`w-full bg-white/5 border text-white rounded px-3 py-3 pl-12 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:text-navy focus:placeholder-gray-500 transition-colors ${
                        errors.mobile ? 'border-red-500' : 'border-white/10 focus:border-gold'
                      }`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gold hover:bg-gold-light active:scale-95 text-navy font-bold px-6 py-3 rounded text-sm transition-all duration-150 shrink-0 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Requesting...' : 'Request Callback'}</span>
                    <PhoneCall className="h-4 w-4 fill-navy" />
                  </button>
                </div>
                {errors.mobile && (
                  <p className="text-xs text-red-400 font-semibold text-center sm:text-left mt-1">
                    {errors.mobile.message}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
