import React from 'react';

const About = () => (
  <section className="relative max-w-3xl mx-auto mb-12 px-4">
    {/* Animated pastel accent */}
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-full blur-2xl opacity-60 animate-pulse z-0"></div>
    <div className="relative z-10 animate-fade-in-up">
      {/* Profile image */}
      <div className="flex justify-center mb-4">
        <img
          src="https://yt3.googleusercontent.com/MiHUZIVJ8d-iOcJPxQQXrInjwT469PCR-xDh08rh0Mv4OGJ5oT3aJT-i3eDxpu3AzTlPphd0pw=s160-c-k-c0x00ffffff-no-rj"
          alt="Artist portrait"
          className="w-24 h-24 rounded-full border-4 border-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-lg object-cover"
        />
      </div>
      <h2 className="text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 tracking-tight drop-shadow text-center">
        About the Artist
      </h2>
      <div className="mx-auto w-16 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mb-6"></div>
      <p className="text-gray-700 text-lg leading-relaxed shadow-sm bg-white/70 rounded-lg p-6 backdrop-blur text-center">
        As a fine artist, I strive to capture the subtle poetry of light, color, and form. My canvases are meditations on beauty, emotion, and the human experience—each brushstroke a dialogue between the seen and the felt.<br /><br />
        <span className="italic text-purple-600">
          "Art is not what you see, but what you make others see." 
        </span>
        <span className="block text-sm text-gray-500 mt-2">— Edgar Degas</span>
      </p>
      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://www.instagram.com/alen_sahu_art/?igsh=N2Rsa2FsN3RlczJ3#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition-transform hover:scale-110"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4" stroke="#a78bfa" strokeWidth="2"/>
            <rect x="2" y="2" width="20" height="20" rx="6" stroke="#a78bfa" strokeWidth="2"/>
            <circle cx="18" cy="6" r="1" fill="#a78bfa"/>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/LaxminarayanSahuArt/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="transition-transform hover:scale-110"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="6" stroke="#a78bfa" strokeWidth="2"/>
            <path d="M16 8.5h-2a1 1 0 0 0-1 1V12h3l-.5 2H13v6h-2v-6H8v-2h3v-2a3 3 0 0 1 3-3h2v2z" fill="#a78bfa"/>
          </svg>
        </a>
      </div>
      {/* Signature */}
      <div className="mt-6 flex justify-center">
        <span className="font-signature text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 tracking-widest">
          — Alen Sahu Art
        </span>
      </div>
    </div>
    <style>
      {`
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .font-signature {
          font-family: 'Pacifico', cursive, sans-serif;
        }
      `}
    </style>
    {/* Google Fonts for signature */}
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
  </section>
);

export default About;