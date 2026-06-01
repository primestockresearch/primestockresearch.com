import Link from 'next/link';
import { AlertCircle, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Refund & Cancellation Policy | Prime Stock Research',
  description: 'Read the refund policy of Prime Stock Research. We operate on a strict no-refund and no-cancellation policy for all advisory services.',
};

export default function RefundPolicyPage() {
  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gray-50/50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="text-xs font-semibold text-gold uppercase tracking-widest mb-2 font-poppins">
            Legal Terms
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-navy">
            Refund & Cancellation Policy
          </h1>
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-gray-400 mt-2 font-medium">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-gray-600">Refund Policy</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs md:text-sm leading-relaxed text-gray-600">
          
          {/* Important Callout */}
          <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl text-amber-950 flex items-start space-x-3.5">
            <AlertCircle className="h-5.5 w-5.5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-950 font-poppins mb-1 uppercase tracking-wide">
                No Refund Policy Agreement
              </h3>
              <p>
                By subscribing to any research advisory plans offered by Prime Stock Research, you explicitly acknowledge and agree that all fee payments are completely non-refundable and non-cancellable under any circumstances.
              </p>
            </div>
          </div>

          {/* Refund policy text sections */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-base font-bold font-poppins text-navy uppercase tracking-wider">
                1. Nature of Our Services
              </h3>
              <p>
                Prime Stock Research provides financial research, market analysis, and stock recommendation advisory services. Once recommendations are published or transmitted (via SMS/WhatsApp), the intellectual service is considered fully delivered. Because the information cannot be "returned" or "reversed," we do not offer refunds.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold font-poppins text-navy uppercase tracking-wider">
                2. Market Volatility & Risk Acknowledgement
              </h3>
              <p>
                Investments in the stock and derivatives market are subject to high volatility and risk. While our research analyst team implements strict stop-loss measures and thorough analysis, we do not guarantee profits or promise any assured returns. 
              </p>
              <p className="font-semibold text-navy">
                Losses incurred during a subscription period are a normal part of capital markets and do not constitute grounds for refund requests or chargebacks.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold font-poppins text-navy uppercase tracking-wider">
                3. Subscription Cancellations & Transfers
              </h3>
              <p>
                Active subscription plans cannot be cancelled mid-term. Fees paid for a specific package are locked to that service. However, clients can request a one-time pause of their subscription in case of emergency (up to a maximum of 30 days) by emailing <a href="mailto:info@primestockresearch.com" className="text-gold font-semibold hover:underline">info@primestockresearch.com</a> with supporting documents, subject to management approval.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold font-poppins text-navy uppercase tracking-wider">
                4. Pre-subscription Advisory
              </h3>
              <p>
                We highly recommend that prospective clients review our:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 font-medium text-navy">
                <li>
                  <Link href="/services" className="hover:text-gold transition-colors">Pricing and Services Table</Link>
                </li>
                <li>
                  <Link href="/investor-charter" className="hover:text-gold transition-colors">Investor Charter and rights</Link>
                </li>
                <li>
                  <Link href="/complaint-data" className="hover:text-gold transition-colors">Complaint Redressal and History</Link>
                </li>
              </ul>
              <p className="mt-2">
                Please subscribe only after you are completely satisfied with our past performance, disclosures, and risk-profiling parameters.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold font-poppins text-navy uppercase tracking-wider">
                5. Dispute Resolution
              </h3>
              <p>
                In the event of any billing queries, technical payment failures (double charges), or active plan setup issues, please contact our support desk immediately at <a href="mailto:info@primestockresearch.com" className="text-gold font-semibold hover:underline">info@primestockresearch.com</a>. We will audit the logs and rectify any genuine duplicate charge or processing failure within 7 business days.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
            Last Updated: June 1, 2026. Subject to change in compliance with SEBI Guidelines.
          </div>

        </div>
      </section>
    </div>
  );
}
