import React from 'react';

const liveWorkshops = [
  {
    title: 'Modern Art Techniques',
    date: 'June 15, 2025',
    location: 'Art Center, New York',
    description: 'Explore modern art techniques in this hands-on workshop.',
    type: 'in-person',
    bookingUrl: 'https://yourbookinglink.com/art-techniques'
  },
  {
    title: 'Digital Painting Basics',
    date: 'July 10, 2025',
    location: 'Online',
    description: 'Learn the basics of digital painting from anywhere.',
    type: 'online',
    streamUrl: 'https://yourstreamlink.com/digital-painting'
  }
];

const LiveWorkshops = () => (
  <section className="max-w-3xl mx-auto mb-12 px-4">
    <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 text-center drop-shadow">
      Live Workshops
    </h2>
    {liveWorkshops.length === 0 ? (
      <p className="text-gray-500 text-center">No live workshops at the moment. Please check back soon!</p>
    ) : (
      <ul className="space-y-8">
        {liveWorkshops.map((workshop, idx) => (
          <li
            key={idx}
            className="relative group animate-fade-in-up bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-xl border border-transparent border-l-8 border-gradient-to-b from-blue-400 to-pink-400 p-6 transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl hover:border-blue-500"
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            <div className="absolute -top-4 -left-4 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
              <span role="img" aria-label="Workshop" className="text-2xl">🎨</span>
            </div>
            <h3 className="text-2xl font-bold mb-1 text-gray-800 dark:text-white">{workshop.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-1 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              {workshop.date} &mdash; {workshop.location}
            </p>
            <p className="text-gray-700 dark:text-gray-200 mb-4">{workshop.description}</p>
            {workshop.type === 'online' && workshop.streamUrl && (
              <a
                href={workshop.streamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow hover:scale-105 hover:from-pink-500 hover:to-yellow-400 transition-all duration-200"
              >
                Join Stream
              </a>
            )}
            {workshop.type === 'in-person' && workshop.bookingUrl && (
              <a
                href={workshop.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-gradient-to-r from-green-500 to-blue-400 text-white font-semibold rounded-full shadow hover:scale-105 hover:from-pink-500 hover:to-yellow-400 transition-all duration-200"
              >
                Book Now
              </a>
            )}
          </li>
        ))}
      </ul>
    )}
    {/* Animation keyframes */}
    <style>
      {`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(.4,0,.2,1) both;
        }
      `}
    </style>
  </section>
);

export default LiveWorkshops;