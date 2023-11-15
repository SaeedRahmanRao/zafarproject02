// ProductDetails.js

import React, { useState } from 'react';
import './ProductDetails.css';
import moonIcon from './moon-icon.png'; // Replace with your moon icon path
import sunIcon from './sun-icon.png'; // Replace with your sun icon path

const ProductDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveButton(category);
  };

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const imageUrls = [
    'https://via.placeholder.com/350/007f00/000000?text=Leaf+Image+1',
    'https://via.placeholder.com/350/00f800/000000?text=Leaf+Image+2',
    'https://via.placeholder.com/350/006f00/000000?text=Leaf+Image+3',
    // More placeholder image URLs if needed
  ];

  const categoryDetails = {
    'Cost saving': {
      description: 'Implementing innovative cost-saving measures has been a cornerstone of our success. Our product provides a comprehensive suite of tools designed to identify, analyze, and optimize expenditures. By leveraging cutting-edge algorithms and predictive analytics, we empower businesses to streamline operations, thereby reducing expenses by at least 30%. Our cost-saving solutions cover a spectrum of areas, from resource allocation to process optimization, ensuring maximal efficiency across the board. By adopting our product, businesses have seen a substantial increase in their bottom line while maintaining operational excellence.',
      imageUrl: imageUrls[0],
    },
    'Space-Efficient': {
      description: 'Space efficiency is critical in today\'s data-driven world. Our solution revolutionizes data storage, employing state-of-the-art compression algorithms that maximize storage capacity without compromising performance. This next-generation approach allows businesses to store significantly more data within the same physical space. By efficiently utilizing storage resources, our product minimizes hardware requirements and associated costs. Whether dealing with massive databases or cloud storage, our space-efficient solution ensures optimal utilization of available space while enhancing accessibility and retrieval speed.',
      imageUrl: imageUrls[1],
    },
    'Energy Saving': {
      description: 'Our commitment to energy conservation is at the heart of our product\'s design. By employing innovative power management techniques, we significantly reduce energy consumption by up to 40%. This reduction not only leads to substantial cost savings but also underscores our dedication to environmental sustainability. From intelligent power distribution to optimizing device efficiency, our product ensures minimal energy wastage while maintaining peak performance levels. Join us in our mission to conserve energy and create a greener, more sustainable future.',
      imageUrl: imageUrls[2],
    },
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className="toggle-button" onClick={handleModeToggle}>
        <img
          src={darkMode ? sunIcon : moonIcon}
          alt={darkMode ? 'Light Mode' : 'Dark Mode'}
          width="24"
          height="24"
        />
      </div>
      <div className="category-buttons">
        <button
          onClick={() => handleCategoryClick('Cost saving')}
          className={activeButton === 'Cost saving' ? 'specific-button active' : 'specific-button'}
        >
          Cost saving
        </button>
        {/* Placeholder buttons for other categories */}
        {/* Replace the text and onClick handlers as needed */}
        <button
          onClick={() => handleCategoryClick('Space-Efficient')}
          className={
            activeButton === 'Space-Efficient' ? 'specific-button active' : 'specific-button'
          }
        >
          Space-Efficient
        </button>
        <button
          onClick={() => handleCategoryClick('Energy Saving')}
          className={
            activeButton === 'Energy Saving' ? 'specific-button active' : 'specific-button'
          }
        >
          Energy Saving
        </button>
      </div>
      <div className="detailed-content">
        {selectedCategory && (
          <div>
            <div>
              <h2>{selectedCategory}</h2>
            </div>
            <p>{categoryDetails[selectedCategory].description}</p>
            <div>
              <img src={categoryDetails[selectedCategory].imageUrl} alt={selectedCategory} />
            </div>
            <p>{categoryDetails[selectedCategory].description}</p>
            <p>{categoryDetails[selectedCategory].description}</p>
            <p>{categoryDetails[selectedCategory].description}</p>
            <div>
              <img src={categoryDetails[selectedCategory].imageUrl} alt={selectedCategory} />
            </div>
            <p>{categoryDetails[selectedCategory].description}</p>
            <p>{categoryDetails[selectedCategory].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
