import Link from 'next/link';
import { FileCheck } from 'lucide-react';

export const metadata = {
  title: 'Annual Audit Status | Prime Stock Research',
  description: 'Compliance disclosure of the annual regulatory audits conducted for Prime Stock Research as mandated under SEBI Research Analyst Regulations.',
};

export default function AnnualAuditPage() {
  const auditRecords = [
    { sr: 1, fy: 'FY 2022-23', status: 'Conducted', remarks: 'Na' },
    { sr: 2, fy: 'FY 2023-24', status: 'Conducted', remarks: 'Na' },
    { sr: 3, fy: 'FY 2024-25', status: 'Conducted', remarks: 'Na' },
  ];

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gray-50/50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="text-xs font-semibold text-gold uppercase tracking-widest mb-2 font-poppins">
            Adherence to standards
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-navy">
            Annual Audit Status
          </h1>
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-gray-400 mt-2 font-medium">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-gray-600">Annual Audit</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-sm md:text-base leading-relaxed text-gray-600">

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold font-poppins text-navy">
              Compliance — Annual Audit
            </h2>
            <div className="h-1 w-12 bg-gold rounded-full"></div>
          </div>

          <p>
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
                      <span className="inline-flex items-center space-x-1 bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded text-xs font-bold">
                        <FileCheck className="h-3.5 w-3.5" />
                        <span>{record.status}</span>
                      </span>
                    </td>
                    <td className="p-4 pr-6">{record.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>
    </div>
  );
}
