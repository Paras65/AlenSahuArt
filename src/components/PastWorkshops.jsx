import React from 'react';

const pastWorkshops = [
  {
    title: 'Watercolor for Beginners',
    date: 'March 2025',
    location: 'Community Hall, Boston',
    description: 'An introduction to watercolor painting techniques.'
  },
  {
    title: 'Sculpture Basics',
    date: 'January 2025',
    location: 'Art Studio, Chicago',
    description: 'Hands-on workshop on basic sculpture methods.'
  }
];

const PastWorkshops = () => (
  <section className="max-w-3xl mx-auto mb-12 px-4">
    <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-400 to-purple-500 text-center drop-shadow">
      Past Workshops
    </h2>
    {pastWorkshops.length === 0 ? (
      <p className="text-gray-500 text-center">No past workshops yet.</p>
    ) : (
      <ul className="space-y-8">
        {pastWorkshops.map((workshop, idx) => (
          <li
            key={idx}
            className="relative animate-fade-in-up bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-xl border border-transparent border-l-8 border-gradient-to-b from-yellow-400 to-pink-400 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-yellow-500"
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            <div className="absolute -top-4 -left-4 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
              <span role="img" aria-label="Past Workshop" className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-white flex items-center gap-2 pl-8">
              {workshop.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-1 flex items-center gap-2 pl-8">
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              {workshop.date} &mdash; {workshop.location}
            </p>
            <p className="text-gray-700 dark:text-gray-200 pl-8">{workshop.description}</p>
          </li>
        ))}
      </ul>
    )}
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

export default PastWorkshops;