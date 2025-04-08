import React from 'react';
import { Link } from 'react-router-dom';
import { WalletIcon, CurrencyDollarIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            FreelanceWallet
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <WalletIcon className="h-6 w-6" />
              <span>Кошелек</span>
            </Link>
            
            <Link to="/exchange" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <CurrencyDollarIcon className="h-6 w-6" />
              <span>Биржа</span>
            </Link>
            
            <Link to="/profile" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <UserCircleIcon className="h-6 w-6" />
              <span>Профиль</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 