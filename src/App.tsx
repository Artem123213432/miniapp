import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Wallet from './pages/Wallet';
import Exchange from './pages/Exchange';
import Profile from './pages/Profile';
import { initTelegramWebApp } from './config/telegram';

const App: React.FC = () => {
  useEffect(() => {
    const webApp = initTelegramWebApp();
    if (webApp) {
      console.log('Telegram Web App initialized');
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Wallet />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App; 