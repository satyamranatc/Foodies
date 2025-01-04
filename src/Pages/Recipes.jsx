import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AskAi from "../Utils/AskAi";

export default function Recipes() {
  const [aiRes, setAiRes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { DishName } = useParams();

  async function RecipeFinder() {
    try {
      setIsLoading(true);
      const Res = await AskAi(`Please Give Me a Recipe For ${DishName} in simpe and Dotted Points With Clear Incridents, In Short 200 words`);
      setAiRes(Res);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            {DishName}
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Discover a world of flavors across different cuisines
          </p>
          <button
            onClick={RecipeFinder}
            disabled={isLoading}
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating Recipe...
              </span>
            ) : (
              "Get Recipe Now"
            )}
          </button>
        </header>

        {/* Recipe Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Recipe Details
          </h2>
          
          {aiRes ? (
            <div className="prose max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                {aiRes}
              </p>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400 text-lg">
                Click the button above to generate the recipe
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}