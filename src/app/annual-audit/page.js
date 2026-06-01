import Link from 'next/link';
import { ShieldCheck, FileCheck, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Annual Audit Status | Prime Stock Research',
  description: 'Compliance disclosure of the annual regulatory audits conducted for Prime Stock Research as mandated under SEBI Research Analyst Regulations.',
};

export default function AnnualAuditPage() {
  const auditRecords = [
    {
      fy: 'FY 2024-25',
      status: 'Completed',
      auditor: 'M/S J. K. Shah & Co. (Chartered Accountants)',
      date: 'September 24, 2025',
      remarks: 'Fully Compliant. No material adverse findings.',
    },
    {
      fy: 'FY 2023-24',
      status: 'Completed',
      auditor: 'M/S J. K. Shah & Co. (Chartered Accountants)',
      date: 'September 18, 2024',
      remarks: 'Fully Compliant. Operations found satisfactory.',
    },
    {
      fy: 'FY 2022-23',
      status: 'Completed',
      auditor: 'R. K. Agarwal & Associates (Chartered Accountants)',
      date: 'October 10, 2023',
      remarks: 'Completed. Advisory call registers and disclosures checked.',
    },
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-poppins text-navy">
              Audit Compliance Record
            </h2>
            <div className="h-1 w-12 bg-gold rounded-full"></div>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              Pursuant to Regulation 25(3) of the Securities and Exchange Board of India (Research Analysts) Regulations, 2014, Research Analysts are required to conduct an annual audit of their research activities and compliance structures. The audit is conducted by an independent auditor (Chartered Accountant).
            </p>
          </div>

          {/* Audit Records Table */}
          <div className="space-y-4">
            <div className="overflow-x-auto border border-gray-100 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse min-w-[700px] text-xs md:text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-navy font-poppins font-bold">
                    <th className="p-4.5 pl-6 w-32">Financial Year</th>
                    <th className="p-4.5 w-32">Audit Status</th>
                    <th className="p-4.5">Auditor / Firm Details</th>
                    <th className="p-4.5 w-44">Audit Date</th>
                    <th className="p-4.5 pr-6">Remarks / Findings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-500 font-medium">
                  {auditRecords.map((record, i) => (
                    <tr key={i} className="hover:bg-gray-50/40">
                      <td className="p-4.5 pl-6 text-navy font-semibold">{record.fy}</td>
                      <td className="p-4.5">
                        <span className="inline-flex items-center space-x-1 bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded text-xs font-bold">
                          <FileCheck className="h-3.5 w-3.5" />
                          <span>{record.status}</span>
                        </span>
                      </td>
                      <td className="p-4.5 text-navy font-semibold">{record.auditor}</td>
                      <td className="p-4.5">{record.date}</td>
                      <td className="p-4.5 pr-6 text-xs">{record.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Audit FAQ Box */}
          <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl space-y-4">
            <h3 className="font-bold font-poppins text-navy text-base flex items-center space-x-2">
              <ShieldCheck className="h-5.5 w-5.5 text-gold shrink-0" />
              <span>Why is the Annual Audit important?</span>
            </h3>
            <hr className="border-gray-200" />
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
              The annual audit verifies that the Research Analyst has complied with all disclosure requirements, maintained appropriate record registers for calls and research rationale, avoided conflicts of interest, and managed advertisements and complaints in accordance with the regulatory standards. This audit ensures our systems remain highly robust, secure, and client-centric.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
