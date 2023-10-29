import RestroCard from './RestroCard';
import Shimmer from './Shimmer';
// import {restaurentsList} from '../utils/RestaurantList';
import { useState, useEffect } from 'react';
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async() => {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const responseJson = await response.json();
      resList = responseJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurants(resList);
      setfilteredRestaurants(resList);
      
    };
    return (
      <div className="body-container">
        <div className='operations-container'>
          <div>
            <input type='text' onChange={(event) => {
               const filteredList = listOfRestaurants.filter((item) => item.info.name.toLowerCase().includes(event.target.value.toLowerCase()));
               setfilteredRestaurants(filteredList);
            }}/>
            <button>Search</button>
          </div>
          <div>
            <button onClick={() => {
              const filteredList = listOfRestaurants.filter((item) => item.info.avgRating > 4);
              setfilteredRestaurants(filteredList);
            }}>Top Rated Restaurants</button>
          </div>
        </div>
        {listOfRestaurants.length === 0 ? <Shimmer/> :
        <div className="restro-cards">
        {
        filteredRestaurants.map((item) => {
          return <RestroCard resData={item?.info} key={item.info.id} />;
        })
        }
      </div>
        }
       
        {/* <div className="Search-box">Search Box</div> */}
        
      </div>
    );
 };

 export default Body;