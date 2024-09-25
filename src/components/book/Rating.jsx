import React from "react";
import { ratingCount } from "../../utils/ratingCount";

const Rating = ({ rating }) => {
  const tempRating = ratingCount(rating);
  return (
    <>
      {[...Array(tempRating.fullStar)].map((x, i) => (
        <i key={i} className="fa-solid fa-star text-primary"></i>
      ))}
      {[...Array(tempRating.emptyStar)].map((x, i) => (
        <i key={i} className="fa-regular fa-star-half-stroke text-primary"></i>
      ))}
      ({rating})
    </>
  );
};

export default Rating;
