import { Suspense } from 'react';
import ComplianceTabs from '@/components/ComplianceTabs';
import initialData from '@/data/complaints.json';

export const metadata = {
  title: 'Compliance & Disclosures | Prime Stock Research',
  description: 'Official regulatory compliance page for Prime Stock Research. Read our SEBI mandated Investor Charter, Complaint Redressal Mechanism, Complaint Data history, and Annual Audit status.',
};

export default function CompliancePage() {
  return (
    <Suspense fallback={<div className="py-24 text-center font-poppins text-gray-500">Loading compliance disclosures...</div>}>
      <ComplianceTabs initialData={initialData} />
    </Suspense>
  );
}
