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
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Live Workshops</h2>
    {liveWorkshops.length === 0 ? (
      <p className="text-gray-500">No live workshops at the moment. Please check back soon!</p>
    ) : (
      <ul>
        {liveWorkshops.map((workshop, idx) => (
          <li
            key={idx}
            className="mb-6 p-4 bg-white rounded shadow border-l-4 border-blue-400"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="Workshop">🎨</span>
              {workshop.title}
            </h3>
            <p className="text-gray-600">{workshop.date} &mdash; {workshop.location}</p>
            <p className="text-gray-700 mb-2">{workshop.description}</p>
            {workshop.type === 'online' && workshop.streamUrl && (
              <a
                href={workshop.streamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Join Stream
              </a>
            )}
            {workshop.type === 'in-person' && workshop.bookingUrl && (
              <a
                href={workshop.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Book Now
              </a>
            )}
          </li>
        ))}
      </ul>
    )}
  </section>
);

export default LiveWorkshops;