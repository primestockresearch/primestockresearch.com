import Link from 'next/link';
import { Check, HelpCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Our Services | Prime Stock Research',
  description: 'Explore our premium SEBI registered equity advisory plans: Expert, Elite, and Ultimate option trading modules designed with strict risk-reward ratios.',
};

export default function ServicesPage() {
  const plans = [
    {
      name: 'Expert Plan',
      price: '₹30,000 + GST',
      validity: '1 Year',
      desc: 'Ideal for retail equity traders looking for standard intraweek recommendations.',
      color: 'border-navy/10',
      badge: null,
      ctaClass: 'bg-navy text-white hover:bg-navy-light',
      features: [
        'Daily Calls: 2 high-quality calls',
        'Risk-Reward Ratio: 1:1',
        'Delivery: Text Message / SMS / WhatsApp',
        'Segment: Nifty/BankNifty and large-cap liquid equities',
        'Support: Email & Technical assistance',
      ]
    },
    {
      name: 'Elite Plan',
      price: '₹1,25,000 + GST',
      validity: '1 Year',
      desc: 'Our flagship plan designed for active traders looking for maximized risk-reward targets.',
      color: 'border-gold shadow-lg ring-1 ring-gold/20 scale-105',
      badge: 'FEATURED',
      ctaClass: 'bg-gold text-navy font-bold hover:bg-gold-light',
      features: [
        'Daily Calls: 3 high-quality calls',
        'Risk-Reward Ratio: 1:2',
        'Delivery: Instant Text Message & SMS',
        'Segment: Mid-cap, small-cap breakouts and derivatives',
        'Support: Dedicated Relationship Manager',
        'Portfolio Allocation Guidance',
      ]
    },
    {
      name: 'Ultimate Plan',
      price: 'Customized',
      validity: '3 Months',
      desc: 'Premium options hedging and capital preservation program for high net-worth individuals.',
      color: 'border-navy/10',
      badge: 'HNI SPECIAL',
      ctaClass: 'bg-navy text-white hover:bg-navy-light',
      features: [
        'Strategy: Option Selling with Hedging',
        'Min Capital: ₹5,00,000',
        'Daily Calls: 1-2 calls (market dependent)',
        'Delivery: Secure SMS & Direct RM updates',
        'Segment: Index & Stock Option strategies',
        'Custom Risk-Profiling & Review sessions',
      ]
    }
  ];

  const faqs = [
    {
      q: 'How do I receive the research recommendations?',
      a: 'All research calls and recommendations are delivered in real-time via premium SMS gateways and official WhatsApp channels to ensure immediate execution.',
    },
    {
      q: 'What is the refund policy for advisory services?',
      a: 'We operate on a strict "No Refunds, No Cancellations" policy due to the nature of financial advisory services. Please read our Refund Policy page carefully before choosing a plan.',
    },
    {
      q: 'Do you guarantee any returns or profits?',
      a: 'No. We strictly abide by SEBI guidelines and do not offer any assured, fixed, or guaranteed returns. All investments are subject to market risks, and our advice is based on Technical & Fundamental analysis.',
    },
    {
      q: 'Can I change my registered mobile number later?',
      a: 'Yes, you can request a phone number change by emailing your compliance details and invoice receipts to info@primestockresearch.com from your registered email address.',
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gray-50/50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="text-xs font-semibold text-gold uppercase tracking-widest mb-2 font-poppins">
            Advisory packages
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-navy">
            Our Research Services
          </h1>
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-gray-400 mt-2 font-medium">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-gray-600">Services</span>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-xl border p-6 md:p-8 flex flex-col justify-between relative ${plan.color}`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-navy text-[10px] uppercase font-extrabold tracking-widest px-4.5 py-1 rounded-full shadow-sm">
                    {plan.badge}
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold font-poppins text-navy mb-1">{plan.name}</h3>
                    <p className="text-xs text-gray-400">{plan.desc}</p>
                  </div>

                  <div>
                    <span className="text-3xl font-extrabold font-poppins text-navy">{plan.price}</span>
                    <span className="text-xs text-gray-400 block mt-0.5 font-semibold uppercase tracking-wider">
                      Validity: {plan.validity}
                    </span>
                  </div>

                  <hr className="border-gray-100" />

                  <ul className="space-y-3.5">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-sm text-gray-600 leading-relaxed">
                        <Check className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <a 
                    href="#callback-form" 
                    className={`block w-full py-3 rounded text-center text-sm font-semibold transition-all duration-300 ${plan.ctaClass}`}
                  >
                    Subscribe Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="space-y-8 pt-8">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy">
                Plan Comparison Matrix
              </h2>
              <div className="h-1 w-12 bg-gold rounded-full mx-auto mt-3"></div>
            </div>

            <div className="overflow-x-auto border border-gray-100 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px] text-sm">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100 text-navy font-poppins font-bold">
                    <th className="p-4.5 pl-6">Advisory Feature</th>
                    <th className="p-4.5">Expert Plan</th>
                    <th className="p-4.5 text-gold">Elite Plan (Featured)</th>
                    <th className="p-4.5">Ultimate Plan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600 font-medium">
                  <tr>
                    <td className="p-4.5 pl-6 font-semibold text-navy">Risk-Reward Parameters</td>
                    <td className="p-4.5">1:1 Target Stoploss</td>
                    <td className="p-4.5 text-navy font-semibold">1:2 Target Stoploss</td>
                    <td className="p-4.5">Hedging / Option Spreads</td>
                  </tr>
                  <tr>
                    <td className="p-4.5 pl-6 font-semibold text-navy">Daily Calls</td>
                    <td className="p-4.5">2 Calls</td>
                    <td className="p-4.5 text-navy font-semibold">3 Calls</td>
                    <td className="p-4.5">1-2 Strategy Calls</td>
                  </tr>
                  <tr>
                    <td className="p-4.5 pl-6 font-semibold text-navy">Min Investment Capital</td>
                    <td className="p-4.5">₹1,00,000</td>
                    <td className="p-4.5 text-navy font-semibold">₹2,50,000</td>
                    <td className="p-4.5">₹5,00,000</td>
                  </tr>
                  <tr>
                    <td className="p-4.5 pl-6 font-semibold text-navy">Support Channel</td>
                    <td className="p-4.5">Email Support</td>
                    <td className="p-4.5 text-navy font-semibold">Dedicated Rel. Manager</td>
                    <td className="p-4.5">Direct Compliance/Analyst Desk</td>
                  </tr>
                  <tr>
                    <td className="p-4.5 pl-6 font-semibold text-navy">Market Segment</td>
                    <td className="p-4.5">Cash & Index F&O</td>
                    <td className="p-4.5 text-navy font-semibold">Cash, F&O, Breakout Midcaps</td>
                    <td className="p-4.5">Index Option Selling & Hedging</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gold font-poppins block">
                Frequently Asked
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy leading-tight">
                Services Questions & Answers
              </h2>
              <div className="h-1.5 w-16 bg-gold rounded-full"></div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Here are answers to core operational queries. Feel free to contact our support desk for additional clarifications.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="flex space-x-3 bg-gray-50/50 p-5 rounded-lg border border-gray-100">
                  <HelpCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-navy font-poppins text-base leading-snug">
                      {faq.q}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form wrapper */}
          <div id="callback-form" className="scroll-mt-24 pt-8">
            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
