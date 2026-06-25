import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Complaint Redressal | Prime Stock Research',
  description: 'Grievance redressal mechanism and escalation matrix. Contact details of our Compliance Officer and SEBI SCORES escalation details.',
};

export default function ComplaintRedressalPage() {
  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gray-50/50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-2 font-poppins">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-sm md:text-base leading-relaxed text-gray-600">

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold font-poppins text-navy">
              Complaint Redressal and SCORES
            </h2>
            <div className="h-1 w-12 bg-teal rounded-full"></div>
          </div>

          <p>
            Client&apos;s queries / complaints may arise due to lack of understanding or a deficiency of service experienced by clients. Deficiency of service may include lack of explanation, clarifications, understanding which escalates into shortfalls in the expected delivery standards, either due to inadequacy of facilities available or through the attitude of staff towards client.
          </p>

          <ol className="list-decimal pl-6 space-y-4">
            <li>
              Clients can seek clarification to their query and are further entitled to make a complaint in writing, orally or telephonically. An email may be sent to the Client Servicing Team on{' '}
              <a href="mailto:info@primestockresearch.com" className="font-semibold text-gold hover:underline">
                info@primestockresearch.com
              </a>. Alternatively, the Investor may call on{' '}
              <a href="tel:+919104129341" className="font-semibold text-gold hover:underline">
                +91-9104129341
              </a>.
            </li>
            <li>
              A letter may also be written with their query/complaint and posted at the below mentioned address: <strong>As registered with SEBI</strong>
            </li>
            <li>
              Clients can write to the research analyst at{' '}
              <a href="mailto:info@primestockresearch.com" className="font-semibold text-gold hover:underline">
                info@primestockresearch.com
              </a>{' '}
              if the Investor does not receive a response within 10 business days of writing to the Client Servicing Team. The client can expect a reply within 10 business days of approaching research analyst.
            </li>
            <li>
              In case you are not satisfied with our response you can lodge your grievance with SEBI at{' '}
              <a href="http://scores.gov.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-gold hover:underline">
                http://scores.gov.in
              </a>{' '}
              or you may also write to any of the offices of SEBI. SCORES may be accessed through SCORES mobile application as well, same can be downloaded from below link:<br />
              <a href="https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330" target="_blank" rel="noopener noreferrer" className="font-semibold text-gold hover:underline break-all">
                https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330
              </a>
            </li>
          </ol>

          {/* SEBI SCORES and SMART ODR */}
          <div className="space-y-4 border border-amber-100 bg-amber-50/20 p-6 md:p-8 rounded-xl">
            <h3 className="text-lg font-bold font-poppins text-navy">
              SEBI SCORES &amp; Online Dispute Resolution (ODR)
            </h3>
            <p className="text-xs md:text-sm leading-relaxed text-gray-600">
              If the complaint remains unresolved within 30 days of filing with us, or if you are unsatisfied with our response, you can escalate the matter to SEBI using the SCORES portal or file for arbitration through the SMART ODR platform.
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
                <ExternalLink className="h-4 w-4 text-teal shrink-0 group-hover:translate-x-0.5 transition-transform" />
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
                <ExternalLink className="h-4 w-4 text-teal shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
