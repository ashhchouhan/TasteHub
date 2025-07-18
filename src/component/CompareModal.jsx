import React, { useState } from "react";
import menuData from "../data/menu.json";
import "./CompareModal.css";

const CompareModal = ({ onClose }) => {
  const [dish1, setDish1] = useState("");
  const [dish2, setDish2] = useState("");

  const selectedDish1 = menuData.menu.find((dish) => dish.name === dish1);
  const selectedDish2 = menuData.menu.find((dish) => dish.name === dish2);

  return (
    <div className="compare-modal">
      <div className="modal-content">
        <h2>🍽 Compare Dishes</h2>
        <button className="close-btn" onClick={onClose}>X</button>

        {/* Dropdowns to select dishes */}
        <div className="dropdowns">
          <select onChange={(e) => setDish1(e.target.value)}>
            <option value="">Select Dish 1</option>
            {menuData.menu.map((dish) => (
              <option key={dish.id} value={dish.name}>
                {dish.name}
              </option>
            ))}
          </select>

          <select onChange={(e) => setDish2(e.target.value)}>
            <option value="">Select Dish 2</option>
            {menuData.menu.map((dish) => (
              <option key={dish.id} value={dish.name}>
                {dish.name}
              </option>
            ))}
          </select>
        </div>

        {/* Show comparison */}
        {selectedDish1 && selectedDish2 && (
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>{selectedDish1.name}</th>
                  <th>{selectedDish2.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>₹{selectedDish1.price}</td>
                  <td>₹{selectedDish2.price}</td>
                </tr>
                <tr>
                  <td>{selectedDish1.cuisine}</td>
                  <td>{selectedDish2.cuisine}</td>
                </tr>
                <tr>
                  <td>{selectedDish1.calories} kcal</td>
                  <td>{selectedDish2.calories} kcal</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompareModal;
