import React from 'react';
import { ChefHatIcon, UtensilsIcon, BookOpenIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Welcome to The Foodies
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover amazing recipes and culinary experiences
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <ChefHatIcon className="h-10 w-10 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Recipes</h3>
          <p className="text-gray-600">
            Explore curated recipes from professional chefs
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <UtensilsIcon className="h-10 w-10 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Easy Cooking</h3>
          <p className="text-gray-600">
            Step-by-step guides for perfect meals every time
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <BookOpenIcon className="h-10 w-10 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Save Favorites</h3>
          <p className="text-gray-600">
            Create your personal cookbook of favorite dishes
          </p>
        </div>
      </div>
    </div>
  );
}