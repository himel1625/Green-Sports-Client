import React from 'react';
import {
  FaBaseballBall,
  FaBasketballBall,
  FaFootballBall,
  FaHockeyPuck,
  FaTableTennis,
  FaVolleyballBall,
} from 'react-icons/fa';

const SportsCategories = () => {
  return (
    <div className="container mx-auto px-4 py-10 cursor-pointer mt-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Sports Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {[
          { Icon: FaFootballBall, color: 'text-green-600', name: 'Football' },
          {
            Icon: FaBasketballBall,
            color: 'text-orange-600',
            name: 'Basketball',
          },
          { Icon: FaBaseballBall, color: 'text-red-600', name: 'Baseball' },
          {
            Icon: FaVolleyballBall,
            color: 'text-purple-600',
            name: 'Volleyball',
          },
          { Icon: FaHockeyPuck, color: 'text-blue-600', name: 'Hockey' },
          { Icon: FaTableTennis, color: 'text-yellow-600', name: 'Tennis' },
        ].map((sport, index) => (
          <div
            key={index}
            className="category-card text-center p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform"
          >
            <sport.Icon className={`text-5xl ${sport.color} mb-4`} />
            <h3 className="font-semibold text-lg text-gray-700">
              {sport.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsCategories;
