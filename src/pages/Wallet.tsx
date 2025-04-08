import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

const Wallet: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Баланс</h2>
        <div className="text-4xl font-bold text-blue-600">₽ 50,000.00</div>
        <div className="flex space-x-4 mt-4">
          <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            <ArrowUpIcon className="h-5 w-5 mr-2" />
            Пополнить
          </button>
          <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            <ArrowDownIcon className="h-5 w-5 mr-2" />
            Вывести
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">История операций</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-between p-4 border-b">
              <div>
                <div className="font-medium">Оплата заказа #1234</div>
                <div className="text-sm text-gray-500">12 декабря 2023</div>
              </div>
              <div className="text-green-500 font-medium">+₽ 5,000.00</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet; 