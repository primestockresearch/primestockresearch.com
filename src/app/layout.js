import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuickLeadForm from '@/components/QuickLeadForm';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Prime Stock Research | SEBI Registered Research Analyst',
    template: '%s | Prime Stock Research',
  },
  description: 'Prime Stock Research is a SEBI Registered Research Analyst providing expert stock advisory, portfolio research, and equity trading calls in India.',
  keywords: ['stock advisory', 'sebi research analyst', 'share market calls', 'prime stock research', 'equity investment'],
  openGraph: {
    title: 'Prime Stock Research | SEBI Registered Research Analyst',
    description: 'Expert stock advisory, research, and advisory services. High-quality equity trading and investment calls.',
    url: 'https://primestockresearch.com',
    siteName: 'Prime Stock Research',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-white antialiased font-sans text-navy min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-white">
          {children}
        </main>
        <QuickLeadForm />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
