// YourComponent.js
import React from 'react';
import './YourComponent.css'; // Import your CSS file for styling

const YourComponent = () => {
  const boxColors = [
    'rgba(128, 128, 128, 0.5)',
    'rgba(128, 128, 128, 0.5)',
    'rgba(128, 128, 128, 0.5)',
    'rgba(128, 128, 128, 0.5)',
    'rgba(128, 128, 128, 0.5)',
    'rgba(128, 128, 128, 0.5)',
    'rgba(128, 128, 128, 0.5)',
    'rgba(128, 128, 128, 0.5)',
    'rgba(128, 128, 128, 0.5)',
  ];

  const boxTexts = [
    'Text 1',
    'Text 2',
    'Text 3',
    'Text 4',
    'Text 5',
    'Text 6',
    'Text 7',
    'Text 8',
    'Text 9',
    // Add more text here...
  ];

  return (
    <div className="container">
      <div className="background">
        {/* Your blurred background image */}
        {/* You can replace 'background-image-url' with your actual background image URL */}
        <img
          src="https://via.placeholder.com/350/006f66/ff0000?text=Leaf+Image+3"
          alt="Background"
          className="blur"
        />
      </div>
      <div className="grid">
        {boxColors.map((color, index) => (
          <div key={index} className="grid-item" style={{ backgroundColor: color }}>
            <span className="text">{boxTexts[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourComponent;
