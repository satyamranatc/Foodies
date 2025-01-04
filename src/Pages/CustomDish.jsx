import React, { useState } from 'react';
import AskAi from "../Utils/AskAi";
import { Bot, ChefHat, Loader2 } from 'lucide-react';

export default function CustomDish() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      let ingredients = e.target[0].value;
      let type = e.target[1].value;
      let response = await AskAi(`generate a ${type} recipe using ${ingredients}, in 200 Words`);
      setResult(response);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <ChefHat className="h-10 w-10 text-orange-500" />
          <h1 className="text-4xl font-bold text-gray-800">
            Custom Recipe Generator
          </h1>
        </div>
        <p className="text-gray-600">
          Enter your ingredients and desired dish type to get an AI-generated recipe
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
              Available Ingredients
            </label>
            <input 
              type="text" 
              id="ingredients"
              placeholder="e.g., chicken, rice, tomatoes" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="dishType" className="block text-sm font-medium text-gray-700">
              Type of Dish
            </label>
            <input 
              type="text" 
              id="dishType"
              placeholder="e.g., curry, stir-fry, soup" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Generating Recipe...</span>
              </>
            ) : (
              <>
                <Bot className="h-5 w-5" />
                <span>Generate Recipe</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Results Section */}
      {result && (
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Bot className="h-6 w-6 text-orange-500" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Generated Recipe
            </h2>
          </div>
          
          <div className="prose prose-orange max-w-none">
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {result}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}