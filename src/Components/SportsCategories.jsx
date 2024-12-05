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
      <h2 className="text-3xl font-bold text-center mb-8">Sports Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div className="category-card text-center p-6 border border-gray-300 rounded-lg">
          <FaFootballBall className="text-5xl text-green-600 mb-4" />
          <h3 className="font-semibold text-lg">Football</h3>
        </div>
        <div className="category-card text-center p-6 border border-gray-300 rounded-lg">
          <FaBasketballBall className="text-5xl text-orange-600 mb-4" />
          <h3 className="font-semibold text-lg">Basketball</h3>
        </div>
        <div className="category-card text-center p-6 border border-gray-300 rounded-lg">
          <FaBaseballBall className="text-5xl text-red-600 mb-4" />
          <h3 className="font-semibold text-lg">Baseball</h3>
        </div>
        <div className="category-card text-center p-6 border border-gray-300 rounded-lg">
          <FaVolleyballBall className="text-5xl text-purple-600 mb-4" />
          <h3 className="font-semibold text-lg">Volleyball</h3>
        </div>
        <div className="category-card text-center p-6 border border-gray-300 rounded-lg">
          <FaHockeyPuck className="text-5xl text-blue-600 mb-4" />
          <h3 className="font-semibold text-lg">Hockey</h3>
        </div>
        <div className="category-card text-center p-6 border border-gray-300 rounded-lg">
          <FaTableTennis className="text-5xl text-yellow-600 mb-4" />
          <h3 className="font-semibold text-lg">Tennis</h3>
        </div>
      </div>
    </div>
  );
};

export default SportsCategories;
