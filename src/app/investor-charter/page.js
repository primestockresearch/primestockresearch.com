import Link from 'next/link';

export const metadata = {
  title: 'Investor Charter | Prime Stock Research',
  description: 'Official SEBI mandated Investor Charter for Research Analysts. Learn about investor rights, research guidelines, and grievance redressal pathways.',
};

export default function InvestorCharterPage() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm md:text-base leading-relaxed text-gray-600">

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold font-poppins text-navy">
              Investor Charter in respect of Research Analyst (RA)
            </h2>
            <div className="h-1 w-12 bg-gold rounded-full"></div>
          </div>

          {/* A. Vision and Mission */}
          <div className="space-y-3">
            <h3 className="font-bold text-navy font-poppins">A. Vision and Mission Statements for investors</h3>
            <div className="pl-4 space-y-2">
              <p><strong>Vision</strong></p>
              <p>Invest with knowledge &amp; safety.</p>
              <p><strong>Mission</strong></p>
              <p>Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.</p>
            </div>
          </div>

          {/* B. Details of business */}
          <div className="space-y-3">
            <h3 className="font-bold text-navy font-poppins">B. Details of business transacted by the Research Analyst with respect to the investors.</h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>To publish research report based on the research activities of the RA.</li>
              <li>To provide an independent unbiased view on securities.</li>
              <li>To offer unbiased recommendation, disclosing the financial interests in recommended securities.</li>
              <li>To provide research recommendation, based on analysis of publicly available information and known observations.</li>
              <li>To conduct audit annually.</li>
            </ul>
          </div>

          {/* C. Details of services */}
          <div className="space-y-3">
            <h3 className="font-bold text-navy font-poppins">C. Details of services provided to investors (No Indicative Timelines)</h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Onboarding of Clients</li>
              <li>
                Disclosure to Clients
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>To distribute research reports and recommendations to the clients without discrimination.</li>
                  <li>To maintain confidentiality w.r.t publication of the research report until made available in the public domain.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* D. Grievance redressal */}
          <div className="space-y-3">
            <h3 className="font-bold text-navy font-poppins">D. Details of grievance redressal mechanism and how to access it</h3>
            <p>
              In case of any grievance / complaint, an investor should approach the concerned research analyst and shall ensure that the grievance is resolved within 30 days.
            </p>
            <p>
              If the investor&apos;s complaint is not redressed satisfactorily, one may lodge a complaint with SEBI on SEBI&apos;s SCORES portal which is a centralized web-based complaints redressal system. SEBI takes up the complaints registered via SCORES with the concerned intermediary for timely redressal. SCORES facilitates tracking the status of the complaint.
            </p>
            <p>
              With regard to physical complaints, investors may send their complaints to: Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan. Plot No. C4-A, &apos;G&apos; Block, Bandra-Kurla Complex, Bandra (E), Mumbai - 400 051.
            </p>
          </div>

          {/* E. Dos and Donts */}
          <div className="space-y-3">
            <h3 className="font-bold text-navy font-poppins">E. Expectations from the investors (Responsibilities of investors)</h3>

            <div className="space-y-2">
              <p className="font-semibold text-green-800">Do&apos;s</p>
              <ol className="list-[lower-roman] pl-6 space-y-1.5">
                <li>Always deal with SEBI registered Research Analyst.</li>
                <li>Ensure that the Research Analyst has a valid registration certificate.</li>
                <li>Check for SEBI registration number.</li>
                <li>
                  Please refer to the list of all SEBI registered Research Analysts which is available on SEBI website in the following link:<br />
                  <strong>https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&amp;intmId=14</strong>
                </li>
                <li>Always pay attention towards disclosures made in the research reports before investing.</li>
                <li>Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments.</li>
                <li>Before buying securities or applying in public offer, check for the research recommendation provided by your research Analyst.</li>
                <li>Ask all relevant questions and clear your doubts with your Research Analyst before acting on the recommendation.</li>
                <li>Inform SEBI about Research Analyst offering assured or guaranteed returns.</li>
              </ol>
            </div>

            <div className="space-y-2 mt-4">
              <p className="font-semibold text-red-800">Don&apos;ts</p>
              <ol className="list-[upper-roman] pl-6 space-y-1.5">
                <li>Do not provide funds for investment to the Research Analyst.</li>
                <li>Don&apos;t fall prey to luring advertisements or market rumours.</li>
                <li>Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.</li>
                <li>Do not share login credentials and password of your trading and demat accounts with the Research Analyst.</li>
              </ol>
            </div>
          </div>

          {/* Contact Table */}
          <div className="space-y-3">
            <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-navy font-poppins font-bold">
                    <th className="p-3">Designation</th>
                    <th className="p-3">Contact Person Name</th>
                    <th className="p-3">Address</th>
                    <th className="p-3">Contact No.</th>
                    <th className="p-3">Email-ID</th>
                    <th className="p-3">Working Hours</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  <tr className="hover:bg-gray-50/40">
                    <td className="p-3 font-semibold">Customer Care</td>
                    <td className="p-3">Prime Stock Research</td>
                    <td className="p-3 text-xs">As registered with SEBI</td>
                    <td className="p-3">+91-9104129341</td>
                    <td className="p-3">
                      <a href="mailto:info@primestockresearch.com" className="text-gold hover:underline">info@primestockresearch.com</a>
                    </td>
                    <td className="p-3">10:00 a.m. – 6:00 p.m.</td>
                  </tr>
                  <tr className="hover:bg-gray-50/40">
                    <td className="p-3 font-semibold">Compliance Officer</td>
                    <td className="p-3">Prime Stock Research</td>
                    <td className="p-3 text-xs">As registered with SEBI</td>
                    <td className="p-3">+91-9104129341</td>
                    <td className="p-3">
                      <a href="mailto:info@primestockresearch.com" className="text-gold hover:underline">info@primestockresearch.com</a>
                    </td>
                    <td className="p-3">10:00 a.m. – 6:00 p.m.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
