import React from "react";
import { FaStar } from "react-icons/fa";
import { addRating } from "../services/rating";

interface IRating {
  userId: number | undefined;
  deviceId: string | undefined;
  overallRating: number;
}

const Rating = ({ deviceId, userId, overallRating }: IRating) => {
  const [rating, setRating] = React.useState<number>(overallRating);
  const [hover, setHover] = React.useState<number>(overallRating);
  const changeRatingHandler = (value: number) => {
    setRating(value);
    if (deviceId && userId && value > 0) {
      addRating(deviceId, userId, value);
    }
  };
  return (
    <div className="flex my-3 ">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={ratingValue}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onChange={() => changeRatingHandler(ratingValue)}
            />
            <FaStar
              className="star cursor-pointer"
              color={ratingValue <= (rating | hover) ? "#ffc107" : "#e4e5e9"}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
