import React, { useState } from 'react';

const StackedImages = ({ images }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Define rotation angles for the images
  const rotationAngles = ['rotate-[-80deg]', 'rotate-[-60deg]', 'rotate-[-20deg]', 'rotate-[23deg]', 'rotate-[60deg]', 'rotate-[100deg]', 'rotate-[143deg]'];

  return (
    <div className="relative w-48 h-72">
      {images.map((image, index) => (
        <img 
          key={index}
          src={image}
          alt={`Stacked Image ${index + 1}`}
          className={`absolute w-full h-full object-cover ml-48 ${rotationAngles[index]} z-${hoveredIndex === index ? 10 : index}`}
          style={{ top: `${index * 5}px`, left: `${index * 5}px`, transformOrigin: 'bottom center' }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
};

export default StackedImages;