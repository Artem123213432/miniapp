import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeftIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  
  let title = "FreelanceWallet";
  let verified = false;
  
  if (path === '/') {
    title = "Кошелёк";
    verified = true;
  } else if (path === '/exchange') {
    title = "Биржа";
  } else if (path === '/profile') {
    title = "Профиль";
  }
  
  return (
    <header className="bg-black sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-white mr-2">
              <ChevronLeftIcon className="h-6 w-6" />
            </Link>
            
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2">
                {title.charAt(0)}
              </div>
              <div className="font-medium text-white flex items-center">
                {title}
                {verified && (
                  <svg className="w-5 h-5 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                )}
              </div>
            </div>
          </div>
          
          <div>
            <button className="text-white p-1">
              <EllipsisHorizontalIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 