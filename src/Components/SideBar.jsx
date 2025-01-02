import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, MenuIcon } from 'lucide-react';

export default function SideBar() {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="p-4">
        <ul className="space-y-2">
          <li>
            <Link 
              to="/" 
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
            >
              <HomeIcon className="h-5 w-5" />
              <span className="font-medium">Home</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/main-menu" 
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
            >
              <MenuIcon className="h-5 w-5" />
              <span className="font-medium">Main Menu</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}