import React, { useState } from 'react';

import './styles';

export default function StarRating({ numOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleOnClick = (index) => {
    console.log('handleOnClick');
    setRating(index);
  };
  const handleOnMouseEnter = (index) => {
    console.log('handleOnMouseEnter');
    setHover(index);
  };

  const handleOnMouseLeave = () => {
    console.log('handleOnMouseLeave');
    setHover(rating);
  };

  console.log({ rating, hover });
  return (
    <div className={'star-rating'}>
      {[...Array(numOfStars)].map((_, i) => {
        const index = i + 1;
        return (
          <div
            className={
              index <= (hover || rating) ? 'star active' : 'star inactive'
            }
            key={index}
            onClick={() => handleOnClick(index)}
            onMouseEnter={() => handleOnMouseEnter(index)}
            onMouseLeave={() => handleOnMouseLeave()}
          >
            []
          </div>
        );
      })}
    </div>
  );
}
