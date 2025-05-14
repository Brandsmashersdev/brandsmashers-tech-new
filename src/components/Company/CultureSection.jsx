'use client';

export default function CultureSection() {
  const events = [
    {
      title: 'Office Outing',
      description:
        'From adventure getaways to relaxing team lunches, our office outings are the perfect mix of bonding, fun, and memories. These off-site experiences fuel our team spirit and help us return refreshed and recharged.',
      image: '/Nav-Dropdown-icons/outing.jpg', // You can replace with an actual image
    },
    {
      title: 'Fun Saturday',
      description:
        "Who said weekends were only for rest? At Brandsmashers Tech, some Saturdays are reserved for fun, games, creativity, and camaraderie. Whether it's a hackathon or a movie day, we make sure fun stays on the calendar.",
      image: '/Nav-Dropdown-icons/fun-saturday.jpg', // Replace with an image if needed
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse sm:flex-row ${
              index % 2 !== 0 ? 'sm:flex-row-reverse' : ''
            } items-center gap-10`}
          >
            {/* Image block */}
            <div className="w-full sm:w-1/2 h-64 sm:h-80 rounded-lg overflow-hidden shadow-md">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text block */}
            <div className="w-full sm:w-1/2 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                <span className="text-black">{event.title.split(' ')[0]}</span>{' '}
                <span className="text-[#ff5010]">{event.title.split(' ').slice(1).join(' ')}</span>
              </h3>
              <p className="text-gray-700 text-base sm:text-lg">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
