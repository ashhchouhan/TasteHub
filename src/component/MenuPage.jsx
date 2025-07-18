import React, { useState, useEffect } from "react";
import menuData from "../data/menu.json";
import Pagination from "./Pagination";
import "./MenuPage.css";

const MenuPage = ({ searchTerm, filterCuisine, requireLogin }) => {
  const [menu, setMenu] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    setMenu(menuData.menu);
  }, []);

  // Filter dishes
  const filteredMenu = menu.filter((dish) => {
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = filterCuisine ? dish.cuisine === filterCuisine : true;
    return matchesSearch && matchesCuisine;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredMenu.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDishes = filteredMenu.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="menu-container">
      <h1>🍽 Our Menu</h1>

      <div className="menu-grid">
        {(searchTerm || filterCuisine ? filteredMenu : currentDishes).map((dish) => (
          <div className="menu-card" key={dish.id}>
            <img src={dish.image} alt={dish.name}  referrerPolicy="no-referrer" />
            <h2>{dish.name}</h2>
            <p>{dish.cuisine}</p>
            <p>₹{dish.price}</p>
            <button onClick={requireLogin}>Order Now</button>
          </div>
        ))}
      </div>

      {/* ✅ Pagination only if no filter/search */}
      {searchTerm === "" && filterCuisine === "" && filteredMenu.length > itemsPerPage && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default MenuPage;
