
import {imageUrl} from '../utils/config';
const RestroCard = (props) => {
   // console.log(props)
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    } = resData;
    console.log(resData);
    // console.log(props)
    return (
      <div className="restro-card">
        <div>
          <img
            className="food-image"
            src={imageUrl+cloudinaryImageId}
          />
        </div>
        <div>{name}</div>
        <div>{cuisines.toString()}</div>
        <div>{costForTwo}</div>
        <div>{deliveryTime}</div>
        <div>{avgRating}</div>
      </div>
    );
};

export default RestroCard; 