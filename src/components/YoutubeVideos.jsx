import React from 'react';

const channelUrl = "https://www.youtube.com/channel/UCMSbw5kw2I3wejPhFYce36g";

const videos = [
  {
    title: "Drawing Lessons | Drawing Classes",
    url: "https://www.youtube.com/watch?v=jodr9AzGrYY",
    type: "recent",
    id: "jodr9AzGrYY"
  },
  {
    title: "Titanic Rose Drawing | Kate Winslet Charcoal Drawing Tutorial ",
    url: "https://www.youtube.com/watch?v=AQ6LSBKYyrQ",
    type: "top",
    id: "AQ6LSBKYyrQ"
  }
];

const shorts = [
  {
    title: "Kakashi Parle G Painting #shorts",
    url: "https://www.youtube.com/embed/_d8roLR2QQM",
    id: "_d8roLR2QQM"
  },
  {
    title: "Itachi Parle G Art",
    url: "https://www.youtube.com/embed/gcJ4sdUucls",
    id: "gcJ4sdUucls"
  }
];

const getThumbnail = (id, isShort = false) =>
  isShort
    ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
    : `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;

const YouTubeVideos = () => (
  <section className="max-w-4xl mx-auto mb-12 px-4">
    <h2 className="text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-yellow-400 tracking-tight drop-shadow text-center">
      Featured Videos
    </h2>
    <div className="flex justify-center mb-6">
      <a
        href={channelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full shadow hover:scale-105 transition"
        aria-label="Visit my YouTube Channel"
      >
        Visit My YouTube Channel
      </a>
    </div>
    <div className="grid gap-8 md:grid-cols-2 mb-12">
      {videos.length === 0 ? (
        <p className="col-span-2 text-center text-gray-500">No featured videos available.</p>
      ) : (
        videos.map((video, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center hover:shadow-xl transition group"
          >
            <span className={`mb-2 px-3 py-1 rounded-full text-xs font-semibold ${
              video.type === "top"
                ? "bg-gradient-to-r from-yellow-400 to-pink-400 text-white"
                : "bg-gradient-to-r from-blue-400 to-purple-400 text-white"
            }`}>
              {video.type === "top" ? "Top Video" : "Recent Video"}
            </span>
            <div className="relative w-full aspect-video mb-2 cursor-pointer rounded-lg overflow-hidden group-hover:ring-4 group-hover:ring-pink-200 transition">
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${video.title} on YouTube`}
              >
                <img
                  src={getThumbnail(video.id)}
                  alt={video.title}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition"
                  loading="lazy"
                />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="white" className="drop-shadow-lg">
                    <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.5)" />
                    <polygon points="20,16 36,24 20,32" fill="white" />
                  </svg>
                </span>
              </a>
            </div>
            <h3 className="mt-1 text-lg font-semibold text-gray-700 text-center">{video.title}</h3>
          </div>
        ))
      )}
    </div>
    {/* Top Shorts Section */}
    <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 text-center">
      Top Shorts
    </h2>
    <div className="grid gap-8 md:grid-cols-2">
      {shorts.length === 0 ? (
        <p className="col-span-2 text-center text-gray-500">No shorts available.</p>
      ) : (
        shorts.map((short, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center hover:shadow-xl transition group"
          >
            <span className="mb-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-400 to-yellow-400 text-white">
              Top Short
            </span>
            <div className="relative w-28 sm:w-40 md:w-48 aspect-[9/16] mb-2 cursor-pointer rounded-lg overflow-hidden group-hover:ring-4 group-hover:ring-yellow-200 transition">
              <a
                href={`https://www.youtube.com/shorts/${short.id}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${short.title} on YouTube Shorts`}
              >
                <img
                  src={getThumbnail(short.id, true)}
                  alt={short.title}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition"
                  loading="lazy"
                />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                  <svg width="40" height="40" viewBox="0 0 48 48" fill="white" className="drop-shadow-lg">
                    <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.5)" />
                    <polygon points="20,16 36,24 20,32" fill="white" />
                  </svg>
                </span>
              </a>
            </div>
            <h3 className="mt-1 text-base font-semibold text-gray-700 text-center">{short.title}</h3>
          </div>
        ))
      )}
    </div>
  </section>
);

export default YouTubeVideos;