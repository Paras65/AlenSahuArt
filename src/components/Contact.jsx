import React from 'react';

const Contact = () => (
  <section className="max-w-3xl mx-auto mb-12 px-4">
    <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 text-center drop-shadow">
      Contact
    </h2>
    <div className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center space-y-4 animate-fade-in-up">
      <p className="text-gray-700 dark:text-gray-200 text-lg">
        Email:{" "}
        <a
          href="mailto:laxmitinkusahu@email.com"
          className="text-blue-600 underline hover:text-pink-500 transition-colors duration-200"
        >
          artist@email.com
        </a>
      </p>
      <p className="text-gray-700 dark:text-gray-200 text-lg">
        Instagram:{" "}
        <a
          href="https://www.instagram.com/alen_sahu_art/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 underline hover:text-yellow-400 transition-colors duration-200"
        >
          @Alen Sahu Art
        </a>
      </p>
      <div className="flex space-x-4 mt-2">
        <a
          href="mailto:artist@email.com"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-pink-400 text-white shadow-lg hover:scale-110 transition-transform duration-200"
          aria-label="Email"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/alen_sahu_art/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-yellow-400 text-white shadow-lg hover:scale-110 transition-transform duration-200"
          aria-label="Instagram"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1-5.25 5.25A5.25 5.25 0 0 1 12 6.75zm0 1.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 12 8.25zm5.25-.75a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.25 7.5z" />
          </svg>
        </a>
      </div>
    </div>
    <style>
      {`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(.4,0,.2,1) both;
        }
      `}
    </style>
  </section>
);

export default Contact;