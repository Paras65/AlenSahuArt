import React from 'react';

const Footer = () => (
  <footer className="bg-white shadow py-4 mt-8">
    <p className="text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} Your Name. All rights reserved.
    </p>
  </footer>
);

export default Footer;