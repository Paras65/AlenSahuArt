import React from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import LiveWorkshops from './components/LiveWorkshops';
import PastWorkshops from './components/PastWorkshops';
import YouTubeVideos from './components/YouTubeVideos'; // Add this line

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-200">
      <Header />
      <main className="flex-grow">
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <YouTubeVideos /> {/* Add this line to show videos */}
        <section id="live-workshops">
          <LiveWorkshops />
        </section>
        <section id="past-workshops">
          <PastWorkshops />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;