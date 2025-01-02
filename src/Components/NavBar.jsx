import React from 'react';
import { User2Icon, BellIcon, UtensilsCrossedIcon } from 'lucide-react';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <UtensilsCrossedIcon className="h-8 w-8 text-orange-500" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              The Foodies
            </h2>
          </div>

          {/* Navigation Items */}
          <ul className="flex items-center space-x-6">
            <li className="flex items-center">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <User2Icon className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Account</span>
              </button>
            </li>
            <li className="flex items-center">
              <button className="relative flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <BellIcon className="h-5 w-5 text-gray-600" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}