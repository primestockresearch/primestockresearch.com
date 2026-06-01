import Link from 'next/link';

export const metadata = {
  title: 'Complaint Data | Prime Stock Research',
  description: 'Official monthly and annual SEBI complaint data disclosure for Prime Stock Research. Read our customer complaints and resolution track record.',
};

export default function ComplaintDataPage() {
  const currentMonthData = [
    {
      sl: 1,
      receivedFrom: 'Directly from Investors',
      pendingLastMonth: 0,
      received: 0,
      resolved: 0,
      pendingLessThan3: 0,
      pendingMoreThan3: 0,
      avgResolutionTime: '0 days',
    },
    {
      sl: 2,
      receivedFrom: 'SEBI (SCORES)',
      pendingLastMonth: 0,
      received: 0,
      resolved: 0,
      pendingLessThan3: 0,
      pendingMoreThan3: 0,
      avgResolutionTime: '0 days',
    },
    {
      sl: 3,
      receivedFrom: 'Other Sources (if any)',
      pendingLastMonth: 0,
      received: 0,
      resolved: 0,
      pendingLessThan3: 0,
      pendingMoreThan3: 0,
      avgResolutionTime: '0 days',
    },
  ];

  const monthlyTrendData = [
    { month: 'June 2025', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'July 2025', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'August 2025', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'September 2025', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'October 2025', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'November 2025', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'December 2025', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'January 2026', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'February 2026', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'March 2026', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'April 2026', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'May 2026', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  ];

  const annualTrendData = [
    { year: '2023-24', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { year: '2024-25', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { year: '2025-26', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  ];

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gray-50/50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="text-xs font-semibold text-gold uppercase tracking-widest mb-2 font-poppins">
            Disclosures
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-navy">
            Complaint Data & History
          </h1>
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-gray-400 mt-2 font-medium">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-gray-600">Complaint Data</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-poppins text-navy">
              SEBI Mandated Complaint Disclosures
            </h2>
            <div className="h-1 w-12 bg-gold rounded-full"></div>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              As a SEBI registered Research Analyst, we are required to display the details of complaints received against our research services on our website. The data is updated by the 7th of every succeeding month.
            </p>
          </div>

          {/* Table 1: Current Month */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-poppins text-navy">
              1. Complaint Data for the Month Ending - May 2026
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
                    <td className="p-4">0</td>
                    <td className="p-4">0</td>
                    <td className="p-4">0</td>
                    <td className="p-4">0</td>
                    <td className="p-4">0</td>
                    <td className="p-4 pr-6">0 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-gray-400 leading-relaxed">
              *Inclusive of complaints of previous months resolved in the current month. #Inclusive of complaints pending as on the last day of the month.
            </p>
          </div>

          {/* Table 2: Monthly Trend */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold font-poppins text-navy">
              2. Trend of Monthly Disposal of Complaints
            </h3>
            <div className="overflow-x-auto border border-gray-100 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px] text-xs md:text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-navy font-poppins font-bold">
                    <th className="p-4 pl-6 w-20">S.No</th>
                    <th className="p-4">Month</th>
                    <th className="p-4">Carried Forward from Previous Month</th>
                    <th className="p-4">Received</th>
                    <th className="p-4">Resolved*</th>
                    <th className="p-4 pr-6">Pending#</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-500 font-medium">
                  {monthlyTrendData.map((row, i) => (
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
            <h3 className="text-lg font-bold font-poppins text-navy">
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
      </section>
    </div>
  );
}
