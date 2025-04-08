import React from 'react';
import { 
  ArrowUpIcon, 
  ArrowDownIcon, 
  UserCircleIcon, 
  PlusCircleIcon, 
  BellIcon, 
  QuestionMarkCircleIcon 
} from '@heroicons/react/24/outline';

const Wallet: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col items-center p-6 mb-6">
        <div className="w-24 h-24 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
            alt="Market"
            className="w-full h-full"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2">P2P Маркет</h2>
        <p className="text-gray-400 text-center mb-6">Обменивайте активы напрямую у других пользователей</p>
        
        <div className="w-full grid grid-cols-2 gap-4 mb-6">
          <button className="flex items-center justify-center px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700">
            <ArrowDownIcon className="h-5 w-5 mr-2" />
            <span className="font-medium">Купить</span>
          </button>
          <button className="flex items-center justify-center px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700">
            <ArrowUpIcon className="h-5 w-5 mr-2" />
            <span className="font-medium">Продать</span>
          </button>
        </div>
        
        <div className="w-full">
          <div className="flex items-center p-4 border-b border-gray-700">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mr-3">
              <UserCircleIcon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-medium">Мои объявления</div>
              <div className="text-sm text-gray-400">Настройки объявлений и платежей</div>
            </div>
          </div>
          
          <div className="flex items-center p-4 border-b border-gray-700">
            <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center mr-3">
              <PlusCircleIcon className="h-6 w-6 text-gray-400" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-400">Создать объявление</div>
            </div>
          </div>
          
          <div className="flex items-center p-4 border-b border-gray-700">
            <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center mr-3">
              <BellIcon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-medium">Уведомления</div>
            </div>
          </div>
          
          <div className="flex items-center p-4 border-b border-gray-700">
            <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center mr-3">
              <QuestionMarkCircleIcon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-medium">FAQ</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-400">МОИ СДЕЛКИ</h3>
          <span className="text-gray-400 flex items-center">
            АКТИВНЫЕ
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
        
        <div className="flex justify-center items-center py-10">
          <p className="text-gray-500">Здесь появятся ваши сделки</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet; 