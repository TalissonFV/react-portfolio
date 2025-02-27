import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);

  const handleSplashScreenFinished = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    if (!isLoading) {
      requestAnimationFrame(() => {
        setSplashScreenVisible(false);
      });
    }
  }, [isLoading]);

  return (
    <Router>
      {splashScreenVisible && (
        <SplashScreen onAnimationFinished={handleSplashScreenFinished} />
      )}
      <div className="min-h-screen flex flex-col bg-[#e8e9eb]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
