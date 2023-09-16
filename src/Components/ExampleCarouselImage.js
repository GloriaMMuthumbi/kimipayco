import React from 'react';

const ExampleCarouselImage = ({ text, imageSrc }) => {
  return (
    <div>
      <img
        className="d-block w-100"
        src={imageSrc}
        alt={text}
      />
    </div>
  );
};

export default ExampleCarouselImage;
