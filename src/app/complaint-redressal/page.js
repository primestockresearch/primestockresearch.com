import Link from 'next/link';
import { Mail, Phone, MapPin, Shield, ExternalLink, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Complaint Redressal | Prime Stock Research',
  description: 'Grievance redressal mechanism and escalation matrix. Contact details of our Compliance Officer, Principal Officer, and SEBI SCORES escalation details.',
};

export default function ComplaintRedressalPage() {
  const steps = [
    {
      level: 'Level 1: Support Desk',
      contact: 'Customer Support Team',
      email: 'info@primestockresearch.com',
      phone: '+91-9999999999',
      timeline: 'Response within 24-48 business hours',
      desc: 'Most queries, execution issues, and basic complaints are resolved here immediately.',
    },
    {
      level: 'Level 2: Compliance Officer',
      contact: 'Mr. Akash Anand (Compliance Officer)',
      email: 'compliance@primestockresearch.com',
      phone: '+91-9999999999',
      timeline: 'Resolution within 7 working days',
      desc: 'If Level 1 support is unsatisfied, escalate your query directly to our compliance desk.',
    },
    {
      level: 'Level 3: Principal Officer',
      contact: 'Mr. Rahul Mehta (Principal Officer)',
      email: 'principal@primestockresearch.com',
      phone: '+91-9999999998',
      timeline: 'Resolution within 5 working days',
      desc: 'If Level 2 remains unresolved or requires executive review, escalate to the Principal Officer.',
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gray-50/50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="text-xs font-semibold text-gold uppercase tracking-widest mb-2 font-poppins">
            Compliance Escalations
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-navy">
            Complaint Redressal Mechanism
          </h1>
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-gray-400 mt-2 font-medium">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-gray-600">Complaint Redressal</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Intro description */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-poppins text-navy">
              Grievance Escalation Matrix
            </h2>
            <div className="h-1 w-12 bg-gold rounded-full"></div>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              At Prime Stock Research, we prioritize client satisfaction and endeavor to resolve all grievances efficiently. Clients are advised to follow the step-by-step escalation hierarchy below to address any issues.
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-xl border border-navy/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold group-hover:bg-navy transition-colors"></div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-extrabold uppercase text-gold tracking-widest block font-poppins">
                      {step.level}
                    </span>
                    <h3 className="text-lg font-bold font-poppins text-navy">
                      {step.contact}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                      {step.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 pt-2 text-xs md:text-sm">
                      <a href={`mailto:${step.email}`} className="flex items-center space-x-1.5 text-navy hover:text-gold transition-colors font-medium">
                        <Mail className="h-4 w-4 shrink-0 text-gold" />
                        <span>{step.email}</span>
                      </a>
                      <a href={`tel:${step.phone}`} className="flex items-center space-x-1.5 text-navy hover:text-gold transition-colors font-medium">
                        <Phone className="h-4 w-4 shrink-0 text-gold" />
                        <span>{step.phone}</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 border border-gray-100 p-3 rounded shrink-0 self-start md:self-auto text-center md:text-right">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                      Timeline
                    </span>
                    <span className="text-xs font-bold text-navy">
                      {step.timeline}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance Officer Info */}
          <div className="bg-gray-50/50 p-6 md:p-8 rounded-xl border border-gray-100 space-y-6">
            <h3 className="text-lg font-bold font-poppins text-navy flex items-center space-x-2">
              <Shield className="h-5.5 w-5.5 text-gold" />
              <span>Registered Compliance Officer details</span>
            </h3>
            <hr className="border-gray-200" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <p><strong className="text-navy">Name:</strong> Mr. Akash Anand</p>
                <p><strong className="text-navy">Designation:</strong> Compliance Officer</p>
                <p><strong className="text-navy">Email:</strong> compliance@primestockresearch.com</p>
                <p><strong className="text-navy">Phone:</strong> +91-9999999999</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-xs leading-relaxed text-gray-500">
                    <strong className="text-navy block text-sm mb-0.5">Address:</strong>
                    Office No. 104, 1st Floor, Capital Plaza, Bandra East, Mumbai, Maharashtra 400051
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SEBI SCORES and SMART ODR Escalate Info */}
          <div className="space-y-6 border border-amber-100 bg-amber-50/20 p-6 md:p-8 rounded-xl">
            <h3 className="text-lg font-bold font-poppins text-navy">
              SEBI SCORES & Online Dispute Resolution (ODR)
            </h3>
            <p className="text-xs md:text-sm leading-relaxed text-gray-600">
              If the complaint remains unresolved within 30 days of filing with us, or if you are unsatisfied with our Principal Officer's response, you can escalate the matter to SEBI using the SCORES portal or file for arbitration through the SMART ODR platform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href="https://scores.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 border border-gray-200 p-4 rounded-lg flex items-center justify-between group shadow-sm transition-all"
              >
                <div className="space-y-1 pr-4">
                  <h4 className="font-bold text-navy text-sm font-poppins">SEBI SCORES Portal</h4>
                  <p className="text-[10px] text-gray-400">Lodge grievances online directly with SEBI</p>
                </div>
                <ExternalLink className="h-4.5 w-4.5 text-gold shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="https://smartodr.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 border border-gray-200 p-4 rounded-lg flex items-center justify-between group shadow-sm transition-all"
              >
                <div className="space-y-1 pr-4">
                  <h4 className="font-bold text-navy text-sm font-poppins">SMART ODR Portal</h4>
                  <p className="text-[10px] text-gray-400">Online dispute resolution and arbitration</p>
                </div>
                <ExternalLink className="h-4.5 w-4.5 text-gold shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
