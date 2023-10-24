
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;


  return (
    <div className="flex gap-[2px]">
      <span>
        <FaStar />
      </span>
      <span>
        <FaStar />
      </span>
      <span>
        <FaStar />
      </span>
      <span>
        <FaStar />
      </span>
      <span>
        <FaStar />
      </span>
      {/* {[...Array(fullStars)].map((star, index) => {
        return <FaStar key={index} color="#007d56" />
      })}
      {hasHalfStar && <FaStarHalf color="#007d56" />}
      {[...Array(maxStars - fullStars - (hasHalfStar ? 1 : 0))].map((star, index) => {

        <FaRegStar key={index} color="#007d56" />
      }
      )} */}
    </div>
  );
};

export default StarRating;
