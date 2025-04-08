import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Exchange: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск услуг..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Все категории</option>
            <option value="seo">SEO</option>
            <option value="smm">SMM</option>
            <option value="content">Контент</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold">Продвижение в Instagram</h3>
                <span className="text-green-500 font-medium">₽ 5,000</span>
              </div>
              <p className="text-gray-600 mb-4">Комплексное продвижение вашего аккаунта в Instagram</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={`https://i.pravatar.cc/40?img=${item}`}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm text-gray-500">@freelancer{item}</span>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Заказать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exchange; 