import React, { useState } from 'react';
import { ChevronRightIcon } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

export default function MainMenu() {

    let [Data, setData] = useState([
        {
            id: 1,
            Category: "South Indian",
        },
        {
            id: 2,
            Category: "North Indian",      
        },
        {
            id: 3,
            Category: "Chinese",
        }
    ]);




    const navigate = useNavigate();


    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Our Menu Categories
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Data.map((category) => (
                    <div  
                    onClick={()=>navigate(`/dishes/${category.Category}`)}
                        key={category.id} 
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
                    >
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {category.Category}
                                </h2>
                                <ChevronRightIcon className="h-5 w-5 text-orange-500 group-hover:translate-x-1 transition-transform duration-200" />
                            </div>
                            <p className="mt-2 text-gray-600 text-sm">
                                items available
                            </p>
                        </div>
                        <div className="px-6 py-4 bg-gray-50 rounded-b-xl border-t border-gray-100">
                            <p className="text-sm text-gray-500">
                               
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}