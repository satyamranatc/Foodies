import React, { useState } from 'react';
import { ChevronRightIcon, Search, UtensilsCrossed } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MainMenu() {
    const [searchTerm, setSearchTerm] = useState('');
    
    const [Data] = useState([
        {
            id: 1,
            Category: "South Indian",
            description: "Traditional dosas, idlis, and more",
            image: "https://sukhis.com/app/uploads/2022/04/image3-4.jpg",
            itemCount: 12,
            popular: ["Masala Dosa", "Idli", "Vada"]
        },
        {
            id: 2,
            Category: "North Indian",
            description: "Authentic curries and breads",
            image: "https://assets.vogue.com/photos/6352ccb841ea2bd565be085f/master/w_2560%2Cc_limit/GettyImages-1223580360.jpg",
            itemCount: 15,
            popular: ["Butter Naan", "Paneer Butter Masala", "Biryani"]
        },
        {
            id: 3,
            Category: "Chinese",
            description: "Indo-Chinese fusion dishes",
            image: "https://crownfriedchicken.org/public/media/what-are-chinese-style-noodles-called.jpg",
            itemCount: 10,
            popular: ["Schezwan Noodles", "Manchurian", "Fried Rice"]
        }
    ]);

    const navigate = useNavigate();
    
    const filteredData = Data.filter(category =>
        category.Category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                    Explore Our Menu
                </h1>
                <p className="text-gray-600 mb-8">
                    Discover a world of flavors across different cuisines
                </p>
                
                {/* Search Bar */}
                <div className="max-w-md mx-auto relative">
                    <input
                        type="text"
                        placeholder="Search categories..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredData.map((category) => (
                    <div
                        key={category.id}
                        onClick={() => navigate(`/dishes/${category.Category}`)}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                    >
                        {/* Category Image */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={category.image}
                                alt={category.Category}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h2 className="text-2xl font-bold text-white mb-1">
                                        {category.Category}
                                    </h2>
                                    <p className="text-white/80 text-sm">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Category Details */}
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                                    {category.itemCount} Items
                                </span>
                                <ChevronRightIcon className="h-5 w-5 text-orange-500 group-hover:translate-x-1 transition-transform duration-200" />
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm font-medium text-gray-600">Popular Dishes:</p>
                                <div className="flex flex-wrap gap-2">
                                    {category.popular.map((dish, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs"
                                        >
                                            {dish}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredData.length === 0 && (
                <div className="text-center py-16">
                    <UtensilsCrossed className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">
                        No categories found matching "{searchTerm}"
                    </p>
                </div>
            )}
        </div>
    );
}