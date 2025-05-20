'use client';

export default function Story() {
  const cards = [
    {
      title: 'Career Acceleration',
      desc: 'We don’t just offer jobs — we offer career journeys with real growth, mentorship, and advancement opportunities.',
    },
    {
      title: 'A True Sense of Belonging',
      desc: 'Join an inclusive, collaborative environment where your voice is heard, your identity respected, and your ideas matter.',
    },
    {
      title: 'Celebrate and Be Celebrated',
      desc: 'Your contributions are valued. We celebrate wins with rewards, shout-outs, and meaningful recognition.',
    },
    {
      title: 'Continuous Learning Culture',
      desc: 'Access hands-on workshops, certifications, and expert sessions to keep your skills sharp and curiosity alive.',
    },
    {
      title: 'Balance That Works for You',
      desc: 'Flexible work options and a culture that respects personal time, helping you thrive in and out of the workplace.',
    },
    {
      title: 'Supportive Structure, Agile Mindset',
      desc: 'Flat organization, open-door leadership, and agile collaboration mean your ideas and efforts move fast and far.',
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
          <span className="text-white">Why</span>{' '}
          <span className="text-[#ff5010]">Brandsmashers Tech?</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          At Brandsmashers Tech, our people are at the heart of everything we do. We've built a culture where innovation thrives,
          individuality is celebrated, and every team member is empowered to grow personally and professionally.
          Here, you're not just part of a company — you're part of a movement shaping the future.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {cards.map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-semibold text-[#ff5010] mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
