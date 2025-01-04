import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UtensilsIcon, ChefHat, Bot, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dish() {
  let [FoodItems, setFoodItems] = useState([
    {
      id: 1,
      name: "Dosa",
      price: 70,
      category: "South Indian",
      prepTime: "15 mins",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      name: "Idli",
      price: 50,
      category: "South Indian",
      prepTime: "20 mins",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      name: "Vadai",
      price: 60,
      category: "South Indian",
      prepTime: "10 mins",
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      name: "Pongal",
      price: 80,
      category: "South Indian",
      prepTime: "25 mins",
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      name: "Poori",
      price: 90,
      category: "North Indian",
      prepTime: "20 mins",
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      name: "Chapathi",
      price: 100,
      category: "North Indian",
      prepTime: "15 mins",
      image: "/api/placeholder/300/200"
    },
    {
      id: 7,
      name: "Parotta",
      price: 110,
      category: "North Indian",
      prepTime: "20 mins",
      image: "/api/placeholder/300/200"
    },
    {
      id: 8,
      name: "Fried Rice",
      price: 120,
      category: "Chinese",
      prepTime: "25 mins",
      image: "/api/placeholder/300/200"
    },
    {
      id: 9,
      name: "Noodles",
      price: 130,
      category: "Chinese",
      prepTime: "20 mins",
      image: "/api/placeholder/300/200"
    },
    {
      id: 10,
      name: "Manchurian",
      price: 140,
      category: "Chinese",
      prepTime: "30 mins",
      image: "/api/placeholder/300/200"
    }
  ]);

  const { categoryName } = useParams();
  FoodItems = FoodItems.filter((item) => item.category === categoryName);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="flex items-center gap-4 mb-12 bg-orange-50 p-6 rounded-2xl">
        <ChefHat className="h-12 w-12 text-orange-500" />
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {categoryName} Specialties
          </h1>
          <p className="text-gray-600">
            Discover authentic {categoryName} recipes and cooking techniques
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FoodItems.map((item) => (
          <div 
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm text-orange-600 rounded-full text-sm font-bold">
                ₹{item.price}
              </span>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {item.name}
              </h2>
              
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{item.prepTime}</span>
              </div>


              <Link to = {`/Recipe/${item.name}`} >
              <button className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
                <Bot className="h-5 w-5" />
                <span className="font-medium">Get AI Recipe Guide</span>
              </button>
                </Link>
            </div>
          </div>
        ))}
      </div>

      {FoodItems.length === 0 && (
        <div className="text-center py-16 bg-orange-50 rounded-2xl">
          <UtensilsIcon className="h-16 w-16 text-orange-300 mx-auto mb-4" />
          <p className="text-gray-600 text-xl">
            No dishes found in this category.
          </p>
        </div>
      )}
    </div>
  );
}