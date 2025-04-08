import React from 'react';
import { UserCircleIcon, PencilIcon } from '@heroicons/react/24/outline';

const Profile: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img
              src="https://i.pravatar.cc/150"
              alt="Profile"
              className="w-24 h-24 rounded-full mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold">Иван Иванов</h2>
              <p className="text-gray-500">@ivanov</p>
            </div>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <PencilIcon className="h-5 w-5 mr-2" />
            Редактировать
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-4">Личная информация</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <div className="font-medium">ivanov@example.com</div>
              </div>
              <div>
                <label className="text-sm text-gray-500">Телефон</label>
                <div className="font-medium">+7 (999) 123-45-67</div>
              </div>
              <div>
                <label className="text-sm text-gray-500">Город</label>
                <div className="font-medium">Москва</div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-4">Статистика</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Выполнено заказов</label>
                <div className="font-medium">42</div>
              </div>
              <div>
                <label className="text-sm text-gray-500">Рейтинг</label>
                <div className="font-medium">4.8/5.0</div>
              </div>
              <div>
                <label className="text-sm text-gray-500">На сайте</label>
                <div className="font-medium">2 года</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 