'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FileCheck, ExternalLink, ShieldCheck, HelpCircle, CheckCircle, AlertTriangle } from 'lucide-react';

export default function ComplianceTabs({ initialData }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');

  const tabs = [
    { id: 'investor-charter', label: 'Investor Charter' },
    { id: 'complaint-redressal', label: 'Complaint Redressal' },
    { id: 'complaint-data', label: 'Complaint Data' },
    { id: 'annual-audit', label: 'Annual Audit' },
  ];

  const [activeTab, setActiveTab] = useState('investor-charter');

  useEffect(() => {
    if (tabParam && tabs.some(t => t.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const params = new URLSearchParams(window.location.search);
    params.set('tab', tabId);
    router.push(`/compliance?${params.toString()}`, { scroll: false });
  };

  // Complaint Data State and Fetching (from old ComplaintDataClient)
  const [complaintData, setComplaintData] = useState(initialData);

  useEffect(() => {
    async function loadLiveData() {
      try {
        const res = await fetch('/api/complaints', { cache: 'no-store' });
        if (res.ok) {
          const json = await res.json();
          if (json && json.currentMonthData) {
            setComplaintData(json);
          }
        }
      } catch (e) {
        console.error("Failed to load live complaints data:", e);
      }
    }
    loadLiveData();
  }, []);

  const currentMonthName = complaintData.currentMonthName || initialData.currentMonthName;
  const currentMonthData = complaintData.currentMonthData || initialData.currentMonthData;
  const monthlyTrendData = complaintData.monthlyTrendData || initialData.monthlyTrendData;
  const annualTrendData = complaintData.annualTrendData || initialData.annualTrendData;

  // Calculate totals for current month table
  const totalPendingLast = currentMonthData.reduce((sum, r) => sum + Number(r.pendingLastMonth || 0), 0);
  const totalRecv = currentMonthData.reduce((sum, r) => sum + Number(r.received || 0), 0);
  const totalRes = currentMonthData.reduce((sum, r) => sum + Number(r.resolved || 0), 0);
  const totalPendingLess = currentMonthData.reduce((sum, r) => sum + Number(r.pendingLessThan3 || 0), 0);
  const totalPendingMore = currentMonthData.reduce((sum, r) => sum + Number(r.pendingMoreThan3 || 0), 0);

  const resolvedRows = currentMonthData.filter(r => Number(r.resolved) > 0);
  let avgResTimeStr = '0 days';
  if (resolvedRows.length > 0) {
    const totalDays = resolvedRows.reduce((sum, r) => {
      const days = parseInt(r.avgResolutionTime) || 0;
      return sum + days;
    }, 0);
    avgResTimeStr = `${Math.round(totalDays / resolvedRows.length)} days`;
  }

  // Audit Records
  const auditRecords = [
    { sr: 1, fy: 'FY 2026-27', status: '', remarks: 'Na' },
  ];

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gray-50/50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-2 font-poppins">
            Compliance & Transparency
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-navy">
            Regulatory Compliance Hub
          </h1>
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-gray-600 mt-2 font-medium">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-gray-600">Compliance</span>
          </div>
        </div>
      </section>

      {/* Tabs Selector Bar */}
      <section className="border-b border-gray-100 bg-white sticky top-[80px] lg:top-[104px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 md:space-x-4 py-4 overflow-x-auto scrollbar-none justify-start lg:justify-center">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold font-poppins transition-all duration-300 whitespace-nowrap shadow-sm border ${
                    isActive
                      ? 'bg-teal text-white border-teal shadow-teal/10 scale-105'
                      : 'bg-gray-50 text-navy hover:text-teal border-gray-200/60 hover:border-teal/30 hover:bg-teal-light/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'investor-charter' && (
            <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-bold font-poppins text-navy">
                  Investor Charter in respect of Research Analyst (RA)
                </h2>
                <div className="h-1 w-12 bg-teal rounded-full"></div>
              </div>

              {/* A. Vision and Mission */}
              <div className="space-y-3">
                <h3 className="font-bold text-navy font-poppins text-base flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-teal shrink-0" />
                  A. Vision and Mission Statements for investors
                </h3>
                <div className="pl-7 space-y-2 text-sm md:text-base text-gray-600 leading-relaxed">
                  <p><strong>Vision:</strong> Invest with knowledge &amp; safety.</p>
                  <p><strong>Mission:</strong> Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.</p>
                </div>
              </div>

              {/* B. Details of business */}
              <div className="space-y-3">
                <h3 className="font-bold text-navy font-poppins text-base flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal shrink-0" />
                  B. Details of business transacted by the Research Analyst with respect to the investors
                </h3>
                <ul className="list-disc pl-13 space-y-1.5 text-sm md:text-base text-gray-600 leading-relaxed">
                  <li>To publish research report based on the research activities of the RA.</li>
                  <li>To provide an independent unbiased view on securities.</li>
                  <li>To offer unbiased recommendation, disclosing the financial interests in recommended securities.</li>
                  <li>To provide research recommendation, based on analysis of publicly available information and known observations.</li>
                  <li>To conduct audit annually.</li>
                </ul>
              </div>

              {/* C. Details of services */}
              <div className="space-y-3">
                <h3 className="font-bold text-navy font-poppins text-base flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal shrink-0" />
                  C. Details of services provided to investors (No Indicative Timelines)
                </h3>
                <ul className="list-disc pl-13 space-y-1.5 text-sm md:text-base text-gray-600 leading-relaxed">
                  <li>Onboarding of Clients</li>
                  <li>
                    Disclosure to Clients:
                    <ul className="list-disc pl-6 space-y-1 mt-1">
                      <li>To distribute research reports and recommendations to the clients without discrimination.</li>
                      <li>To maintain confidentiality w.r.t publication of the research report until made available in the public domain.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* D. Grievance redressal */}
              <div className="space-y-3">
                <h3 className="font-bold text-navy font-poppins text-base flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-teal shrink-0" />
                  D. Details of grievance redressal mechanism and how to access it
                </h3>
                <div className="pl-7 space-y-3 text-sm md:text-base text-gray-600 leading-relaxed">
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
              </div>

              {/* E. Dos and Donts */}
              <div className="space-y-4 pt-2">
                <h3 className="font-bold text-navy font-poppins text-base flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-teal shrink-0" />
                  E. Expectations from the investors (Responsibilities of investors)
                </h3>
                
                <div className="pl-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Dos */}
                  <div className="bg-green-50/40 border border-green-100 p-5 rounded-xl space-y-3">
                    <h4 className="font-bold text-green-800 font-poppins text-sm uppercase tracking-wider flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-green-600"></span> Do&apos;s
                    </h4>
                    <ol className="list-[lower-roman] pl-4 space-y-2 text-xs md:text-sm text-gray-600">
                      <li>Always deal with SEBI registered Research Analyst.</li>
                      <li>Ensure that the Research Analyst has a valid registration certificate.</li>
                      <li>Check for SEBI registration number.</li>
                      <li>
                        Please refer to the list of all SEBI registered Research Analysts which is available on SEBI website in the following link:<br />
                        <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14" target="_blank" rel="noopener noreferrer" className="text-teal font-semibold hover:underline break-all">
                          SEBI RA List Link
                        </a>
                      </li>
                      <li>Always pay attention towards disclosures made in the research reports before investing.</li>
                      <li>Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments.</li>
                      <li>Before buying securities or applying in public offer, check for the research recommendation provided by your research Analyst.</li>
                      <li>Ask all relevant questions and clear your doubts with your Research Analyst before acting on the recommendation.</li>
                      <li>Inform SEBI about Research Analyst offering assured or guaranteed returns.</li>
                    </ol>
                  </div>

                  {/* Donts */}
                  <div className="bg-red-50/40 border border-red-100 p-5 rounded-xl space-y-3">
                    <h4 className="font-bold text-red-800 font-poppins text-sm uppercase tracking-wider flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-600"></span> Don&apos;ts
                    </h4>
                    <ol className="list-[upper-roman] pl-4 space-y-2 text-xs md:text-sm text-gray-600">
                      <li>Do not provide funds for investment to the Research Analyst.</li>
                      <li>Don&apos;t fall prey to luring advertisements or market rumours.</li>
                      <li>Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.</li>
                      <li>Do not share login credentials and password of your trading and demat accounts with the Research Analyst.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Contact Table */}
              <div className="space-y-3 pt-4">
                <h3 className="font-bold text-navy font-poppins text-sm">
                  Research Analyst &amp; Compliance Escalation Matrix
                </h3>
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
                        <td className="p-3">CHUDASAMA JAYKUMAR M</td>
                        <td className="p-3 text-xs leading-relaxed">
                          L 2170, Opp. Zund Bhavani Mandir, Zund Society,<br />
                          Bandar Road, Chorvad, JUNAGADH,<br />
                          GUJARAT, 362250.
                        </td>
                        <td className="p-3">+91-9104129341</td>
                        <td className="p-3">
                          <a href="mailto:jaychudasama008@gmail.com" className="text-teal hover:underline font-semibold">jaychudasama008@gmail.com</a>
                        </td>
                        <td className="p-3">10:00 a.m. – 6:00 p.m.</td>
                      </tr>
                      <tr className="hover:bg-gray-50/40">
                        <td className="p-3 font-semibold">Compliance Officer</td>
                        <td className="p-3">CHUDASAMA JAYKUMAR M</td>
                        <td className="p-3 text-xs leading-relaxed">
                          L 2170, Opp. Zund Bhavani Mandir, Zund Society,<br />
                          Bandar Road, Chorvad, JUNAGADH,<br />
                          GUJARAT, 362250.
                        </td>
                        <td className="p-3">+91-9104129341</td>
                        <td className="p-3">
                          <a href="mailto:jaychudasama008@gmail.com" className="text-teal hover:underline font-semibold">jaychudasama008@gmail.com</a>
                        </td>
                        <td className="p-3">10:00 a.m. – 6:00 p.m.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'complaint-redressal' && (
            <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-bold font-poppins text-navy">
                  Complaint Redressal Mechanism
                </h2>
                <div className="h-1 w-12 bg-teal rounded-full"></div>
              </div>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Client&apos;s queries / complaints may arise due to lack of understanding or a deficiency of service experienced by clients. Deficiency of service may include lack of explanation, clarifications, understanding which escalates into shortfalls in the expected delivery standards, either due to inadequacy of facilities available or through the attitude of staff towards client.
              </p>

              <ol className="list-decimal pl-6 space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                <li>
                  Clients can seek clarification to their query and are further entitled to make a complaint in writing, orally or telephonically. An email may be sent to the Client Servicing Team on{' '}
                  <a href="mailto:jaychudasama008@gmail.com" className="font-semibold text-teal hover:underline">
                    jaychudasama008@gmail.com
                  </a>. Alternatively, the Investor may call on{' '}
                  <a href="tel:+919104129341" className="font-semibold text-teal hover:underline">
                    +91-9104129341
                  </a>.
                </li>
                <li>
                  A letter may also be written with their query/complaint and posted at the below mentioned address: <strong className="font-semibold">L 2170, Opp. Zund Bhavani Mandir, Zund Society, Bandar Road, Chorvad, JUNAGADH, GUJARAT, 362250.</strong>
                </li>
                <li>
                  Clients can write to the research analyst at{' '}
                  <a href="mailto:jaychudasama008@gmail.com" className="font-semibold text-teal hover:underline">
                    jaychudasama008@gmail.com
                  </a>{' '}
                  if the Investor does not receive a response within 10 business days of writing to the Client Servicing Team. The client can expect a reply within 10 business days of approaching research analyst.
                </li>
                <li>
                  In case you are not satisfied with our response you can lodge your grievance with SEBI at{' '}
                  <a href="https://scores.sebi.gov.in/scores-home" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal hover:underline">
                    https://scores.sebi.gov.in/scores-home
                  </a>{' '}
                  or you may also write to any of the offices of SEBI. SCORES may be accessed through SCORES mobile application as well, same can be downloaded from below link:<br />
                  <a href="https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal hover:underline break-all">
                    https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330
                  </a>
                </li>
              </ol>

              {/* SEBI SCORES and SMART ODR */}
              <div className="space-y-4 border border-amber-100 bg-amber-50/20 p-6 md:p-8 rounded-xl">
                <h3 className="text-base md:text-lg font-bold font-poppins text-navy">
                  SEBI SCORES &amp; Online Dispute Resolution (ODR)
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-500">
                  If the complaint remains unresolved within 30 days of filing with us, or if you are unsatisfied with our response, you can escalate the matter to SEBI using the SCORES portal or file for arbitration through the SMART ODR platform.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a
                    href="https://scores.sebi.gov.in/scores-home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-50 border border-gray-200 p-4 rounded-lg flex items-center justify-between group shadow-sm transition-all"
                  >
                    <div className="space-y-1 pr-4">
                      <h4 className="font-bold text-navy text-sm font-poppins">SEBI SCORES Portal</h4>
                      <p className="text-[10px] text-gray-600">Lodge grievances online directly with SEBI</p>
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
                      <p className="text-[10px] text-gray-600">Online dispute resolution and arbitration</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-teal shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'complaint-data' && (
            <div className="space-y-8 animate-[fadeIn_0.3s_ease-out] w-full max-w-full overflow-hidden">
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-bold font-poppins text-teal">
                  Complaints Status
                </h2>
                <div className="h-1 w-12 bg-teal rounded-full"></div>
                <p className="text-sm md:text-base text-teal font-semibold font-poppins leading-relaxed mt-2">
                  Number Of Client&apos;s Complaints
                </p>
              </div>

              {/* Table 1: Current Month */}
              <div className="space-y-4">
                <h3 className="text-base md:text-lg font-bold font-poppins text-navy">
                  1. Complaint Data for the Month Ending - {currentMonthName}
                </h3>
                <div className="overflow-x-auto border border-gray-100 rounded-xl shadow-sm">
                  <table className="w-full text-left border-collapse min-w-[800px] text-xs md:text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100 text-navy font-poppins font-bold">
                        <th className="p-4 pl-6 w-16">S.No</th>
                        <th className="p-4">Received From</th>
                        <th className="p-4">Pending Last Month</th>
                        <th className="p-4">Received</th>
                        <th className="p-4">Resolved*</th>
                        <th className="p-4">Pending &lt; 3 Months</th>
                        <th className="p-4">Pending &gt; 3 Months</th>
                        <th className="p-4 pr-6">Avg Resolution Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-500 font-medium">
                      {currentMonthData.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50/40">
                          <td className="p-4 pl-6 text-navy font-semibold">{row.sl}</td>
                          <td className="p-4 text-navy font-semibold">{row.receivedFrom}</td>
                          <td className="p-4">{row.pendingLastMonth}</td>
                          <td className="p-4">{row.received}</td>
                          <td className="p-4">{row.resolved}</td>
                          <td className="p-4">{row.pendingLessThan3}</td>
                          <td className="p-4">{row.pendingMoreThan3}</td>
                          <td className="p-4 pr-6 text-navy font-semibold">{row.avgResolutionTime}</td>
                        </tr>
                      ))}
                      <tr className="bg-gray-50/20 font-bold text-navy">
                        <td className="p-4 pl-6"></td>
                        <td className="p-4">Total / Cumulative</td>
                        <td className="p-4">{totalPendingLast}</td>
                        <td className="p-4">{totalRecv}</td>
                        <td className="p-4">{totalRes}</td>
                        <td className="p-4">{totalPendingLess}</td>
                        <td className="p-4">{totalPendingMore}</td>
                        <td className="p-4 pr-6">{avgResTimeStr}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                 <p className="text-[10px] text-gray-500 leading-relaxed">
                  Average resolution time is calculated for complaints resolved during the month.
                </p>
              </div>

              {/* Table 2: Monthly Trend */}
              <div className="space-y-4 pt-4">
                <h3 className="text-base md:text-lg font-bold font-poppins text-navy">
                  2. Trend of Monthly Disposal of Complaints
                </h3>
                <div className="overflow-x-auto border border-gray-100 rounded-xl shadow-sm">
                  <table className="w-full text-left border-collapse min-w-[600px] text-xs md:text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100 text-navy font-poppins font-bold">
                        <th className="p-4 pl-6 w-20">S.No</th>
                        <th className="p-4">Month</th>
                        <th className="p-4">Carried Forward</th>
                        <th className="p-4">Received</th>
                        <th className="p-4">Resolved*</th>
                        <th className="p-4 pr-6">Pending#</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-500 font-medium">
                      {monthlyTrendData && monthlyTrendData.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50/40">
                          <td className="p-4 pl-6 text-navy font-semibold">{i + 1}</td>
                          <td className="p-4 text-navy font-semibold">{row.month}</td>
                          <td className="p-4">{row.carriedForward}</td>
                          <td className="p-4">{row.received}</td>
                          <td className="p-4">{row.resolved}</td>
                          <td className="p-4 pr-6">{row.pending}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 3: Annual Trend */}
              <div className="space-y-4 pt-4">
                <h3 className="text-base md:text-lg font-bold font-poppins text-navy">
                  3. Trend of Annual Disposal of Complaints
                </h3>
                <div className="overflow-x-auto border border-gray-100 rounded-xl shadow-sm">
                  <table className="w-full text-left border-collapse min-w-[600px] text-xs md:text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100 text-navy font-poppins font-bold">
                        <th className="p-4 pl-6 w-20">S.No</th>
                        <th className="p-4">Financial Year</th>
                        <th className="p-4">Carried Forward from Previous Year</th>
                        <th className="p-4">Received</th>
                        <th className="p-4">Resolved*</th>
                        <th className="p-4 pr-6">Pending#</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-500 font-medium">
                      {annualTrendData.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50/40">
                          <td className="p-4 pl-6 text-navy font-semibold">{i + 1}</td>
                          <td className="p-4 text-navy font-semibold">{row.year}</td>
                          <td className="p-4">{row.carriedForward}</td>
                          <td className="p-4">{row.received}</td>
                          <td className="p-4">{row.resolved}</td>
                          <td className="p-4 pr-6">{row.pending}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'annual-audit' && (
            <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-bold font-poppins text-navy">
                  Compliance — Annual Audit
                </h2>
                <div className="h-1 w-12 bg-teal rounded-full"></div>
              </div>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Disclosure with respect to compliance with Annual compliance audit requirement under Regulation 19(3) of{' '}
                <strong>SECURITIES AND EXCHANGE BOARD OF INDIA (INVESTMENT ADVISERS) REGULATIONS, 2013</strong> for last and current financial year are as under:
              </p>

              {/* Audit Table */}
              <div className="overflow-x-auto border border-gray-100 rounded-xl shadow-sm">
                <table className="w-full text-left border-collapse min-w-[500px] text-xs md:text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100 text-navy font-poppins font-bold">
                      <th className="p-4 pl-6 w-16">Sr.No</th>
                      <th className="p-4 w-36">Financial Year</th>
                      <th className="p-4">Compliance Audit Status</th>
                      <th className="p-4 pr-6">Remarks, If any</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-500 font-medium">
                    {auditRecords.map((record) => (
                      <tr key={record.sr} className="hover:bg-gray-50/40">
                        <td className="p-4 pl-6">{record.sr}</td>
                        <td className="p-4 text-navy font-semibold">{record.fy}</td>
                        <td className="p-4">
                          {record.status ? (
                            <span className="inline-flex items-center space-x-1 bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded text-xs font-bold animate-[pulse_2s_infinite]">
                              <FileCheck className="h-3.5 w-3.5" />
                              <span>{record.status}</span>
                            </span>
                          ) : (
                            <span className="text-gray-600">-</span>
                          )}
                        </td>
                        <td className="p-4 pr-6">{record.remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
