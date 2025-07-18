import React, { useEffect, useState } from "react";
import menuData from "../data/menu.json";
import "./SearchBar.css";

const SearchBar = ({ onSearch, onFilter, onCompare }) => {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    // Dynamically extract unique cuisines
    const uniqueCuisines = [...new Set(menuData.menu.map((dish) => dish.cuisine))];
    setCuisines(uniqueCuisines);
  }, []);

  return (
    <div className="search-bar">
      {/* Filter Dropdown */}
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">All Cuisines</option>
        {cuisines.map((cuisine, index) => (
          <option key={index} value={cuisine}>
            {cuisine}
          </option>
        ))}
      </select>

      {/* Compare Button */}
      <button onClick={onCompare}>Compare Dishes</button>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search dishes..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
