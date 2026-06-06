import Link from 'next/link';
import ComplaintDataClient from '@/components/ComplaintDataClient';
import initialData from '@/data/complaints.json';

export const metadata = {
  title: 'Complaint Data | Prime Stock Research',
  description: 'Official monthly and annual SEBI complaint data disclosure for Prime Stock Research. Read our customer complaints and resolution track record.',
};

export default function ComplaintDataPage() {
  return <ComplaintDataClient initialData={initialData} />;
}
