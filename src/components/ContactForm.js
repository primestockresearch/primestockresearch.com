'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, X } from 'lucide-react';

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Contact form submitted:', data);
    setIsSuccess(true);
    reset();
  };

  return (
    <div className="w-full bg-white p-6 md:p-8 rounded-xl border border-navy/10 shadow-sm relative">
      <h3 className="text-xl md:text-2xl font-bold font-poppins text-navy mb-1">
        Request a Call Back
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Submit details below and our advisory experts will get in touch shortly.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register('name', { 
              required: 'Full name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' }
            })}
            className={`w-full px-4 py-2.5 rounded border text-sm focus:outline-none focus:ring-1 ${
              errors.name 
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                : 'border-gray-200 focus:border-navy focus:ring-navy'
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1 font-medium">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register('email', { 
              required: 'Email address is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Please enter a valid email address'
              }
            })}
            className={`w-full px-4 py-2.5 rounded border text-sm focus:outline-none focus:ring-1 ${
              errors.email 
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                : 'border-gray-200 focus:border-navy focus:ring-navy'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1 font-medium">{errors.email.message}</p>
          )}
        </div>

        {/* Mobile Field */}
        <div>
          <label htmlFor="mobile" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">
            Mobile Number (10 Digits)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-2.5 text-sm text-gray-400 font-semibold">
              +91
            </span>
            <input
              id="mobile"
              type="tel"
              placeholder="9876543210"
              {...register('mobile', { 
                required: 'Mobile number is required',
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: 'Please enter a valid 10-digit Indian mobile number'
                }
              })}
              className={`w-full pl-12 pr-4 py-2.5 rounded border text-sm focus:outline-none focus:ring-1 ${
                errors.mobile 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                  : 'border-gray-200 focus:border-navy focus:ring-navy'
              }`}
            />
          </div>
          {errors.mobile && (
            <p className="text-xs text-red-500 mt-1 font-medium">{errors.mobile.message}</p>
          )}
        </div>

        {/* City Field */}
        <div>
          <label htmlFor="city" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">
            City
          </label>
          <input
            id="city"
            type="text"
            placeholder="Enter your city"
            {...register('city', { required: 'City is required' })}
            className={`w-full px-4 py-2.5 rounded border text-sm focus:outline-none focus:ring-1 ${
              errors.city 
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                : 'border-gray-200 focus:border-navy focus:ring-navy'
            }`}
          />
          {errors.city && (
            <p className="text-xs text-red-500 mt-1 font-medium">{errors.city.message}</p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2 text-xs text-gray-500 leading-relaxed">
          By clicking Submit, you agree to our{' '}
          <a href="/refund-policy" className="text-gold font-medium hover:underline">
            Refund Policy
          </a>{' '}
          and consent to receive communication (SMS/Call/WhatsApp) regarding advisory services.
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-3 px-4 rounded transition-all duration-300 flex items-center justify-center space-x-2 text-sm border border-transparent hover:border-gold group disabled:opacity-50"
        >
          <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
          {!isSubmitting && <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
        </button>
      </form>

      {/* Success Modal */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
          <div className="bg-white rounded-xl max-w-md w-full p-6 text-center shadow-2xl relative border border-gray-100 animate-[scaleUp_0.2s_ease-out]">
            <button
              onClick={() => setIsSuccess(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-navy"
            >
              <X className="h-5 w-5" />
            </button>
            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-navy font-poppins mb-2">
              Inquiry Submitted!
            </h4>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Thank you for showing interest in Prime Stock Research. One of our research executives will call you back within 2 business hours.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-navy hover:bg-navy-light text-white font-semibold px-6 py-2 rounded text-sm transition-colors"
            >
              Okay, Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
