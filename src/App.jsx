import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Home from "./Pages/Home";
import MainMenu from "./Pages/MainMenu";
import Dish from "./Pages/Dish";
import Recipes from "./Pages/Recipes";
import CustomDish from "./Pages/CustomDish";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <BrowserRouter>
        <NavBar />
        <div className="flex pt-16">
          <SideBar />
          <main className="flex-1 md:ml-64 p-6">
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main-menu" element={<MainMenu />} />
                <Route path="/dishes/:categoryName" element={<Dish />} />
                <Route path="/Recipe/:DishName" element={<Recipes />} />
                <Route path="/customDish" element={<CustomDish />} />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}