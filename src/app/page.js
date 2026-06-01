'use client';

import { 
  ShieldCheck, 
  Wrench, 
  Layers, 
  TrendingUp, 
  CircleDollarSign, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  Star 
} from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      title: 'Upgraded Tools',
      desc: 'We leverage advanced analytical software and technical scanners to uncover optimal market setups.',
      icon: <Wrench className="h-6 w-6 text-teal" />,
    },
    {
      title: 'Trading Modules',
      desc: 'Structured recommendations across Index, Stock Futures, Options, and Cash markets.',
      icon: <Layers className="h-6 w-6 text-teal" />,
    },
    {
      title: 'Faster Returns',
      desc: 'Short-term holding periods designed to optimize capital rotation and capture quick moves.',
      icon: <TrendingUp className="h-6 w-6 text-teal" />,
    },
    {
      title: 'No Commission',
      desc: 'Pure advisory flat-fees. We do not participate in your profit-sharing or charge broker commissions.',
      icon: <CircleDollarSign className="h-6 w-6 text-teal" />,
    },
  ];

  const services = [
    {
      name: 'Expert Plan',
      price: '₹30,000 + GST',
      period: '1 Year',
      featured: false,
      features: [
        { label: 'Daily Calls', value: '2 high-quality calls' },
        { label: 'Risk-Reward Ratio', value: '1:1' },
        { label: 'Validity', value: '1 Year' },
        { label: 'Delivery Mode', value: 'SMS / Text Message' },
      ],
    },
    {
      name: 'Elite Plan',
      price: '₹1,25,000 + GST',
      period: '1 Year',
      featured: true,
      features: [
        { label: 'Daily Calls', value: '3 high-quality calls' },
        { label: 'Risk-Reward Ratio', value: '1:2' },
        { label: 'Validity', value: '1 Year' },
        { label: 'Delivery Mode', value: 'SMS / Text Message' },
      ],
    },
    {
      name: 'Ultimate Plan',
      price: 'Customized',
      period: '3 Months',
      featured: false,
      features: [
        { label: 'Strategy', value: 'Option Selling with Hedging' },
        { label: 'Min Capital Required', value: '₹5,00,000' },
        { label: 'Daily Calls', value: '1-2 (market dependent)' },
        { label: 'Validity', value: '3 Months' },
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Puneet Agrawal',
      role: 'Active Trader',
      text: 'Professionally managed team, quality & positive response. Their risk-reward management is one of the best I have seen in the industry.',
      rating: 5,
    },
    {
      name: 'Shruti Gupta',
      role: 'HNI Investor',
      text: 'Thanks for helping and guiding at every investment stage. Their research calls are precise with clear targets and strict stop loss.',
      rating: 5,
    },
    {
      name: 'Sandeep Bansal',
      role: 'Retail Investor',
      text: 'Best stock adviser, full knowledge of market. The transparency they offer regarding their compliance and audit status is outstanding.',
      rating: 5,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSlider />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Features */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-teal font-poppins">
                  Who We Are
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-navy leading-tight tracking-tight">
                  Premium Financial Insights & Stock Advisory
                </h2>
                <div className="h-1.5 w-20 bg-teal rounded-full"></div>
              </div>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                At Prime Stock Research, we analyze and research the Indian capital markets with discipline and technical precision. We prioritize safety and risk management parameters to ensure retail and HNI investors can trade with confidence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3.5 group">
                    <div className="p-2.5 rounded bg-navy/5 border border-navy/10 text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white shrink-0">
                      {feature.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-navy font-poppins text-base">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Premium Dashboard Illustration */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-md bg-white p-2 rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src="/images/financial-dashboard.png" 
                  alt="Prime Stock Research Dashboard Analysis"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal font-poppins">
              Pricing Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">
              Our Premium Stock Advisory Services
            </h2>
            <div className="h-1.5 w-20 bg-teal rounded-full mx-auto"></div>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              Choose the package that matches your capital, asset class preferences, and risk tolerance.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {services.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border flex flex-col justify-between transition-all duration-300 relative ${
                  plan.featured
                    ? 'border-teal shadow-lg ring-1 ring-teal/20 scale-105 md:-translate-y-2'
                    : 'border-navy/10 shadow-sm hover:shadow-md'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal text-white text-[11px] uppercase font-bold tracking-widest px-4 py-1 rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}

                <div className="p-6 md:p-8">
                  {/* Plan Name */}
                  <h3 className="text-xl font-bold font-poppins text-navy mb-4">
                    {plan.name}
                  </h3>

                  {/* Plan Price */}
                  <div className="mb-6">
                    <p className="text-3xl font-extrabold font-poppins text-navy">
                      {plan.price}
                    </p>
                    <p className="text-xs text-gray-400 font-medium uppercase mt-0.5 tracking-wider">
                      Validity: {plan.period}
                    </p>
                  </div>

                  <hr className="border-gray-100 my-6" />

                  {/* Plan Features */}
                  <ul className="space-y-4">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm text-gray-600">
                        <Check className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-navy">{feat.label}:</span>{' '}
                          <span>{feat.value}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Button */}
                <div className="p-6 md:p-8 pt-0">
                  <button
                    onClick={scrollToContact}
                    className={`w-full py-3 rounded font-semibold text-center text-sm transition-all duration-300 ${
                      plan.featured
                        ? 'bg-teal hover:bg-teal-light text-white font-bold shadow-md hover:shadow-lg'
                        : 'bg-navy hover:bg-navy-light text-white border border-transparent hover:border-teal hover:text-teal'
                    }`}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal font-poppins">
              Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">
              What Our Clients Say About Us
            </h2>
            <div className="h-1.5 w-20 bg-teal rounded-full mx-auto"></div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl border border-navy/10 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-teal text-teal" />
                    ))}
                  </div>
                  {/* Text */}
                  <p className="text-sm md:text-base text-gray-600 italic leading-relaxed">
                    "{t.text}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-50">
                  <h4 className="font-bold text-navy font-poppins text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Info Banner Section */}
      <section className="bg-navy py-12 text-white border-y border-teal/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal font-poppins block">
            💡 Educational Insight
          </span>
          <p className="text-lg md:text-xl font-medium font-poppins leading-relaxed">
            "Information-Time Horizon defines the time period to achieve a financial goal. 
            It may be 1-5 years, 5-10 years, 15 years, 30 years or even more."
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 md:py-24 bg-white scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-teal font-poppins">
                  Get In Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">
                  Reach Out To Our Experts
                </h2>
                <div className="h-1.5 w-20 bg-teal rounded-full"></div>
              </div>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                Have questions about our packages or regulatory guidelines? Contact us directly and our representative will guide you through our research methodology.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-navy/5 border border-navy/10 rounded-full text-navy shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy font-poppins text-sm uppercase tracking-wider mb-1">
                      Email Us
                    </h4>
                    <a href="mailto:info@primestockresearch.com" className="text-sm text-teal font-semibold hover:underline">
                      info@primestockresearch.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-navy/5 border border-navy/10 rounded-full text-navy shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy font-poppins text-sm uppercase tracking-wider mb-1">
                      Call Support
                    </h4>
                    <a href="tel:+919999999999" className="text-sm text-teal font-semibold hover:underline">
                      +91-9999999999
                    </a>
                  </div>
                </div>
              </div>

              {/* Regulatory Notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-800 leading-relaxed">
                <span className="font-bold">Notice:</span> We strictly advise clients to never deposit funds into any individual bank account. All official invoice payments are received only in our registered Corporate Bank Accounts listed on our Payments Page.
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
