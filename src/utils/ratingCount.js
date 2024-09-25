export function ratingCount(rating) {
    let ratingObj = {}
  if(rating>0){
    const fullStar = Math.floor(rating);
    const halfStar = rating - fullStar;
    const emptyStar = 5 - fullStar;
    ratingObj.fullStar = fullStar;
    ratingObj.halfStar = halfStar;
    ratingObj.emptyStar = emptyStar;
  }
    return ratingObj;
  }
