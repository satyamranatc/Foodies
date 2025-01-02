import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UtensilsIcon, PlusIcon } from 'lucide-react';

export default function Dish() {
  let [FoodItems, setFoodItems] = useState([
    {
      id: 1,
      name: "Dosa",
      price: 70,
      category: "South Indian"
    },
    {
      id: 2,
      name: "Idli",
      price: 50,
      category: "South Indian"
    },
    {
      id: 3,
      name: "Vadai",
      price: 60,
      category: "South Indian"
    },
    {
      id: 4,
      name: "Pongal",
      price: 80,
      category: "South Indian"
    },
    {
      id: 5,
      name: "Poori",
      price: 90,
      category: "North Indian"
    },
    {
      id: 6,
      name: "Chapathi",
      price: 100,
      category: "North Indian"
    },
    {
      id: 7,
      name: "Parotta",
      price: 110,
      category: "North Indian"
    },
    {
      id: 8,
      name: "Fried Rice",
      price: 120,
      category: "Chinese"
    },
    {
      id: 9,
      name: "Noodles",
      price: 130,
      category: "Chinese"
    },
    {
      id: 10,
      name: "Manchurian",
      price: 140,
      category: "Chinese"
    }
  ]);

  const { categoryName } = useParams();
  FoodItems = FoodItems.filter((item) => item.category === categoryName);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center gap-3 mb-8">
        <UtensilsIcon className="h-8 w-8 text-orange-500" />
        <h1 className="text-3xl font-bold text-gray-800">
          {categoryName} Dishes
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FoodItems.map((item) => (
          <div 
            key={item.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                  ₹{item.price}
                </span>
              </div>

              <button className="w-full mt-4 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors duration-200">
                <PlusIcon className="h-5 w-5" />
                <span>Ask Ai </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {FoodItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No dishes found in this category.
          </p>
        </div>
      )}
    </div>
  );
}