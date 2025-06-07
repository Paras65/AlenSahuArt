import React from 'react';

const channelUrl = "https://www.youtube.com/channel/UCMSbw5kw2I3wejPhFYce36g";

const videos = [
  {
    title: "Recent Artwork Timelapse",
    url: "https://www.youtube.com/embed/ysz5S6PUM-U",
    type: "recent"
  },
  {
    title: "Top Exhibition Highlights",
    url: "https://www.youtube.com/embed/jNQXAC9IVRw",
    type: "top"
  }
];

const shorts = [
  {
    title: "Speed Painting Short",
    url: "https://www.youtube.com/embed/1La4QzGeaaQ", // Replace with your Shorts embed URL
  },
  {
    title: "Quick Sketch Short",
    url: "https://www.youtube.com/embed/aqz-KE-bpKQ", // Replace with your Shorts embed URL
  }
];

const YouTubeVideos = () => (
  <section className="max-w-4xl mx-auto mb-12 px-4">
    <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">Featured Videos</h2>
    <div className="flex justify-center mb-6">
      <a
        href={channelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full shadow hover:scale-105 transition"
      >
        Visit My YouTube Channel
      </a>
    </div>
    <div className="grid gap-8 md:grid-cols-2 mb-12">
      {videos.map((video, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <span className={`mb-2 px-3 py-1 rounded-full text-xs font-semibold ${
            video.type === "top"
              ? "bg-gradient-to-r from-yellow-400 to-pink-400 text-white"
              : "bg-gradient-to-r from-blue-400 to-purple-400 text-white"
          }`}>
            {video.type === "top" ? "Top Video" : "Recent Video"}
          </span>
          <iframe
            width="100%"
            height="215"
            src={video.url}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg w-full aspect-video"
          ></iframe>
          <h3 className="mt-3 text-lg font-semibold text-gray-700 text-center">{video.title}</h3>
        </div>
      ))}
    </div>
    {/* Top Shorts Section */}
    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Top Shorts</h2>
    <div className="grid gap-8 md:grid-cols-2">
      {shorts.map((short, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <span className="mb-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-400 to-yellow-400 text-white">
            Top Short
          </span>
          <iframe
            width="100"
            height="200"
            src={short.url}
            title={short.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg aspect-[9/16] w-28 sm:w-40 md:w-48"
          ></iframe>
          <h3 className="mt-3 text-base font-semibold text-gray-700 text-center">{short.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default YouTubeVideos;