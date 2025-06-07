import React, { useState } from 'react';

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#live-workshops", label: "Live Workshops" },
  { href: "#past-workshops", label: "Past Workshops" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white/80 backdrop-blur shadow-lg mb-4 transition-all duration-300" aria-label="Main navigation">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 select-none tracking-tight drop-shadow">
            🎨 Artist Portfolio
          </span>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-700 font-semibold transition-colors duration-200 hover:text-blue-600 after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-pink-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* Hamburger */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-300 shadow-sm hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <svg className={`h-7 w-7 transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Nav with animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 bg-white/95 backdrop-blur-sm shadow-lg ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 flex flex-col space-y-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-gray-700 font-semibold rounded hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-100 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;