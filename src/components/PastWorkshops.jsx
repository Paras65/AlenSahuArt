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
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Past Workshops</h2>
    {pastWorkshops.length === 0 ? (
      <p className="text-gray-500">No past workshops yet.</p>
    ) : (
      <ul>
        {pastWorkshops.map((workshop, idx) => (
          <li
            key={idx}
            className="mb-6 p-4 bg-white rounded shadow border-l-4 border-gray-400"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="Past Workshop">🏆</span>
              {workshop.title}
            </h3>
            <p className="text-gray-600">{workshop.date} &mdash; {workshop.location}</p>
            <p className="text-gray-700">{workshop.description}</p>
          </li>
        ))}
      </ul>
    )}
  </section>
);

export default PastWorkshops;