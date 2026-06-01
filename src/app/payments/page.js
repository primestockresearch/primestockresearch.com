'use client';

import Link from 'next/link';
import { Landmark, QrCode, AlertOctagon, ShieldCheck, Copy } from 'lucide-react';

export default function PaymentsPage() {
  const bankAccounts = [
    {
      accountName: 'Prime Stock Research Pvt Ltd',
      bankName: 'HDFC Bank Limited',
      accountNo: '50200084729381',
      accountType: 'Current Account',
      ifsc: 'HDFC0000240',
      branch: 'Bandra East Branch, Mumbai',
    },
    {
      accountName: 'Prime Stock Research Pvt Ltd',
      bankName: 'ICICI Bank Limited',
      accountNo: '000405009281',
      accountType: 'Current Account',
      ifsc: 'ICIC0000004',
      branch: 'Bandra Kurla Complex (BKC) Branch, Mumbai',
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gray-50/50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="text-xs font-semibold text-gold uppercase tracking-widest mb-2 font-poppins">
            Safe & Secure Transactions
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-navy">
            Official Payment Details
          </h1>
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-gray-400 mt-2 font-medium">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-gray-600">Payments</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Important Security Notice Banner */}
          <div className="bg-red-50 border border-red-200 p-6 rounded-xl text-red-950 flex items-start space-x-4 max-w-4xl mx-auto">
            <AlertOctagon className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
            <div className="space-y-2 text-xs md:text-sm">
              <h3 className="font-bold text-red-800 font-poppins uppercase tracking-wide text-sm">
                CRITICAL PAYMENT WARNING
              </h3>
              <p className="leading-relaxed">
                As per SEBI guidelines, we accept payments <strong>ONLY</strong> in our officially registered corporate bank accounts or our registered business UPI ID as listed below. We do <strong>NOT</strong> accept cash or transfers to any individual/personal bank accounts of our employees, directors, or representatives. 
              </p>
              <p className="font-semibold text-red-900">
                Any payment made outside of these listed channels is not recognized by the firm and will not activate any advisory plan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto pt-4 items-start">
            
            {/* Left: Corporate Bank Accounts */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold font-poppins text-navy flex items-center space-x-2.5">
                <Landmark className="h-6 w-6 text-gold" />
                <span>Registered Corporate Bank Accounts</span>
              </h3>
              <hr className="border-gray-100" />

              <div className="space-y-6">
                {bankAccounts.map((acc, i) => (
                  <div 
                    key={i} 
                    className="bg-white p-6 rounded-xl border border-navy/10 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow"
                  >
                    <div className="absolute right-0 top-0 bg-gold/10 text-gold text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-bl">
                      Active Account
                    </div>

                    <h4 className="text-navy font-bold font-poppins text-lg mb-4">
                      {acc.bankName}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm">
                      <div className="space-y-1">
                        <span className="text-gray-400 font-medium block">Account Name</span>
                        <span className="text-navy font-bold">{acc.accountName}</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-gray-400 font-medium block">Account Number</span>
                        <span className="text-navy font-mono font-bold tracking-wider">{acc.accountNo}</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-gray-400 font-medium block">IFSC Code</span>
                        <span className="text-navy font-mono font-bold tracking-wider">{acc.ifsc}</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-gray-400 font-medium block">Account Type</span>
                        <span className="text-navy font-bold">{acc.accountType}</span>
                      </div>
                      <div className="space-y-1 sm:col-span-2">
                        <span className="text-gray-400 font-medium block">Branch Address</span>
                        <span className="text-navy font-semibold">{acc.branch}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: UPI and QR Code */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-xl font-bold font-poppins text-navy flex items-center space-x-2.5">
                <QrCode className="h-6 w-6 text-gold" />
                <span>Instant UPI QR Payment</span>
              </h3>
              <hr className="border-gray-100" />

              <div className="bg-white p-6 rounded-xl border border-navy/10 shadow-sm flex flex-col items-center justify-center space-y-6 text-center">
                {/* Simulated QR Code using CSS/SVG */}
                <div className="w-52 h-52 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center p-4 relative group">
                  <svg className="w-full h-full text-navy" viewBox="0 0 100 100" fill="currentColor">
                    {/* Outer frame */}
                    <path d="M 0 0 L 25 0 L 25 5 L 5 5 L 5 25 L 0 25 Z" />
                    <path d="M 100 0 L 75 0 L 75 5 L 95 5 L 95 25 L 100 25 Z" />
                    <path d="M 0 100 L 25 100 L 25 95 L 5 95 L 5 75 L 0 75 Z" />
                    <path d="M 100 100 L 75 100 L 75 95 L 95 95 L 95 75 L 100 75 Z" />
                    {/* Simulated QR patterns */}
                    <rect x="10" y="10" width="20" height="20" fill="currentColor" />
                    <rect x="13" y="13" width="14" height="14" fill="#FFFFFF" />
                    <rect x="16" y="16" width="8" height="8" fill="currentColor" />

                    <rect x="70" y="10" width="20" height="20" fill="currentColor" />
                    <rect x="73" y="13" width="14" height="14" fill="#FFFFFF" />
                    <rect x="76" y="16" width="8" height="8" fill="currentColor" />

                    <rect x="10" y="70" width="20" height="20" fill="currentColor" />
                    <rect x="13" y="73" width="14" height="14" fill="#FFFFFF" />
                    <rect x="16" y="76" width="8" height="8" fill="currentColor" />

                    <rect x="40" y="40" width="20" height="20" fill="currentColor" />
                    <rect x="45" y="45" width="10" height="10" fill="#FFFFFF" />

                    {/* Random noise bits */}
                    <rect x="45" y="15" width="10" height="5" />
                    <rect x="55" y="25" width="5" height="10" />
                    <rect x="75" y="45" width="10" height="5" />
                    <rect x="45" y="75" width="10" height="5" />
                    <rect x="75" y="75" width="10" height="10" />
                  </svg>
                  
                  {/* Center branding icon in QR */}
                  <div className="absolute bg-white p-1.5 rounded shadow-md border border-gray-100">
                    <div className="bg-navy w-6 h-6 rounded flex items-center justify-center text-[10px] text-white font-bold font-poppins">
                      PSR
                    </div>
                  </div>
                </div>

                <div className="space-y-2 w-full">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">
                    Registered BHIM UPI Handle
                  </span>
                  <div className="bg-gray-50 border border-gray-100 rounded py-2.5 px-4 font-mono font-bold text-navy flex items-center justify-between text-xs sm:text-sm">
                    <span>primestock@hdfcbank</span>
                    <button 
                      onClick={() => navigator.clipboard.writeText('primestock@hdfcbank')}
                      className="text-gray-400 hover:text-gold transition-colors"
                      title="Copy UPI ID"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-[11px] text-gray-400">
                    Scan using any UPI app (GPay, PhonePe, Paytm, BHIM) to make a payment.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Secure Transaction Assurances */}
          <div className="max-w-4xl mx-auto pt-8 border-t border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <ShieldCheck className="h-9 w-9 text-gold shrink-0" />
                <span>
                  <strong className="text-navy block font-poppins">SEBI Compliant</strong>
                  Transactions audit audited annually.
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <ShieldCheck className="h-9 w-9 text-gold shrink-0" />
                <span>
                  <strong className="text-navy block font-poppins">Instant Invoice</strong>
                  GST invoice sent to email within 24h.
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <ShieldCheck className="h-9 w-9 text-gold shrink-0" />
                <span>
                  <strong className="text-navy block font-poppins">No Profit Sharing</strong>
                  Purely flat-fee based.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
