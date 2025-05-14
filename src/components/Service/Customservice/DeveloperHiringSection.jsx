import { Check, Calendar } from 'lucide-react';

const DeveloperHiringSection = () => {
  const cards = [
    {
      id: 'hourly',
      price: '$2',
      note: '*',
      subtitle: 'Hourly (USD)',
      
      features: [
        "Fully signed NDA for confidentiality",
        "Full code ownership",
        "Flexible scaling based on needs"
      ],
      buttonText: 'Get Started'
    },
    {
      id: 'monthly',
      price: '$2',
      note: '***',
      subtitle: 'Monthly (USD)',
      features: [
        "4+ Years Senior Developer",
        "160 hours/month",
        "Dedicated resource"
      ],
      buttonText: 'Get Started'
    },
    {
      id: 'fixed',
      price: 'Get a Quote',
      subtitle: 'Fixed Cost Solution',
      features: [
        "Timely Delivery",
        "Within Budget",
        "Complete scoping & planning"
      ],
      buttonText: 'Request Quote'
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-8 md:px-16 max-w-full mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">Hire Custom Software Developer As Per Your Need</h2>
      <p className="text-center text-gray-600 text-sm md:text-base mb-8 md:mb-12">
        Simple & Transparent Pricing | Fully Signed NDA | Code Security | Easy Exit Policy
      </p>

      {/* Cards with proper spacing as in the images */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="w-full md:w-80 bg-white rounded-lg shadow-lg border border-gray-100 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 relative mb-6 md:mb-0"
          >
            {card.highlightText && (
              <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center text-sm py-1 rounded-t-lg">
                {card.highlightText}
              </div>
            )}
            <div className={`text-center ${card.highlightText ? 'pt-8' : ''}`}>
              <div className="text-4xl font-bold text-orange-500">{card.price}<span className="text-xl">{card.note}</span></div>
              <p className="text-gray-700 mt-1">{card.subtitle}</p>
            </div>

            <ul className="mt-6 space-y-3">
              {card.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded mt-6">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md inline-flex items-center">
          <Calendar className="mr-2" size={20} />
          SCHEDULE A DEVELOPER INTERVIEW
        </button>
      </div>
    </div>
  );
};

export default DeveloperHiringSection;