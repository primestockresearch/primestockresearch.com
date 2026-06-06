import Link from 'next/link';
import { ShieldCheck, ClipboardList, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Investor Charter | Prime Stock Research',
  description: 'Official SEBI mandated Investor Charter for Research Analysts. Learn about investor rights, advisory guidelines, and grievance redressal pathways.',
};

export default function InvestorCharterPage() {
  const dos = [
    'Always deal with SEBI registered Research Analysts.',
    'Ensure that the Research Analyst has a valid registration certificate and BASL membership.',
    'Pay advisory fees only through official banking channels (UPI, Net Banking, NEFT) to registered bank accounts.',
    'Read and understand the terms and conditions, disclaimers, and disclosures before subscribing.',
    'Ask for an official invoice for all payments made to the Research Analyst.',
    'State clearly your investment objectives, risk tolerance, and time horizon.',
  ];

  const donts = [
    'Do not trade or invest based on rumors or unverified tips circulating on social media (Telegram, WhatsApp, etc.).',
    'Do not make payments to any personal or individual bank accounts of employees or directors.',
    'Do not expect guaranteed or assured returns. Market investments are subject to risk.',
    'Do not sign blank documents or provide credentials of your demat account to anyone.',
    'Do not pay cash for advisory services.',
  ];

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gray-50/50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="text-xs font-semibold text-gold uppercase tracking-widest mb-2 font-poppins">
            Compliance & Transparency
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-navy">
            Investor Charter
          </h1>
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-gray-400 mt-2 font-medium">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-gray-600">Investor Charter</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-sm md:text-base leading-relaxed text-gray-600">
          
          {/* Intro Section */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-poppins text-navy">
              Investor Charter in respect of Research Analyst (RA)
            </h2>
            <div className="h-1 w-12 bg-gold rounded-full"></div>
            <p>
              In accordance with SEBI circular SEBI/HO/IMD/IMD-II CIS/P/CIR/2021/686 dated December 10, 2021, the following Investor Charter is published to inform investors about the services, rights, responsibilities, and grievance redressal pathways while dealing with registered Research Analysts.
            </p>
          </div>

          {/* Vision and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
            <div className="space-y-2">
              <h3 className="font-bold font-poppins text-navy uppercase text-sm tracking-wider flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5 text-gold shrink-0" />
                <span>Vision of the RA</span>
              </h3>
              <p className="text-xs md:text-sm">
                To provide honest, unbiased, and high-quality research-backed insights to retail and HNI investors, supporting structured decision-making in capital markets.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold font-poppins text-navy uppercase text-sm tracking-wider flex items-center space-x-2">
                <ClipboardList className="h-5 w-5 text-gold shrink-0" />
                <span>Mission of the RA</span>
              </h3>
              <p className="text-xs md:text-sm">
                To conduct independent equity and derivative research, comply strictly with SEBI rules, and maintain the highest code of conduct and transparency for our subscribers.
              </p>
            </div>
          </div>

          {/* Details of Business Transacted */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold font-poppins text-navy">
              Details of Business Transacted by Research Analyst
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
              <li>Publishing independent Research Reports concerning specific listed securities or derivatives.</li>
              <li>Providing buy, sell, or hold recommendations (Research Calls) with clear targets, stop-losses, and time horizons.</li>
              <li>Disclosing conflicts of interest, shareholding patterns, and material facts relating to the recommended securities in accordance with SEBI regulations.</li>
              <li>Conducting research in compliance with SEBI (Research Analyst) Regulations, 2014.</li>
            </ul>
          </div>

          {/* Rights of Investors */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold font-poppins text-navy">
              Rights of Investors
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
              <li>To receive unbiased and objective research reports and recommendations based on analysis.</li>
              <li>To obtain clear details regarding the fee structure, validity, and features of the subscribed research service.</li>
              <li>To be informed of all material disclosures, potential conflicts of interest, and holding status of the analyst.</li>
              <li>To escalate grievances to the compliance officer or SEBI SCORES portal if a complaint is unresolved.</li>
            </ul>
          </div>

          {/* Dos and Donts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* DOs */}
            <div className="space-y-4 border border-green-100 bg-green-50/20 p-6 rounded-xl">
              <h3 className="font-bold font-poppins text-green-800 text-lg flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                <span>Do's for Investors</span>
              </h3>
              <ul className="space-y-2 text-xs md:text-sm list-decimal pl-4 text-green-900/80 font-medium">
                {dos.map((item, idx) => (
                  <li key={idx} className="pl-1 leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>

            {/* DONTs */}
            <div className="space-y-4 border border-red-100 bg-red-50/20 p-6 rounded-xl">
              <h3 className="font-bold font-poppins text-red-800 text-lg flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-red-600 shrink-0" />
                <span>Don'ts for Investors</span>
              </h3>
              <ul className="space-y-2 text-xs md:text-sm list-decimal pl-4 text-red-900/80 font-medium">
                {donts.map((item, idx) => (
                  <li key={idx} className="pl-1 leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Grievance Redressal Pathway */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg md:text-xl font-bold font-poppins text-navy">
              Grievance Redressal Mechanism
            </h3>
            <p>
              In case of complaints or queries, investors can follow our step-by-step resolution pathway:
            </p>
            <ol className="list-decimal pl-5 space-y-2.5 text-xs md:text-sm">
              <li>
                <strong>Step 1: Contact Support</strong> - Write to our helpline at{' '}
                <a href="mailto:info@primestockresearch.com" className="text-gold font-semibold hover:underline">
                  info@primestockresearch.com
                </a>{' '}
                or call us at +91-9104129341.
              </li>
              <li>
                <strong>Step 2: Escalate to Compliance</strong> - If unsatisfied, email our designated Compliance Officer (details on the Complaint Redressal page).
              </li>
              <li>
                <strong>Step 3: Register on SEBI SCORES</strong> - If the complaint remains unresolved within 30 days, investors can log in to the{' '}
                <a href="https://scores.gov.in" target="_blank" rel="noopener noreferrer" className="text-gold font-semibold hover:underline inline-flex items-center space-x-0.5">
                  <span>SEBI SCORES Portal</span>
                </a>{' '}
                and lodge a formal complaint.
              </li>
            </ol>
          </div>

        </div>
      </section>
    </div>
  );
}
