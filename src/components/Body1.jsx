import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";

function Body() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.92532496310925&lng=77.6687753945589&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const cards = json?.data?.cards;
      const restaurantCard = cards.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const rawRestaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (!rawRestaurants) {
        console.warn("No restaurant data found");
        return;
      }

      setRestaurants(rawRestaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const baseImageURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="CardList grid grid-cols-4 gap-4 p-4">
      {restaurants.map((res, index) => {
        const info = res.info;
        return (
          <RestaurantCard
            key={index}
            name={info.name}
            rating={info.avgRating}
            cuisines={info.cuisines}
            location={`${info.locality}, ${info.areaName}`}
            imageAddress={baseImageURL + info.cloudinaryImageId}
          />
        );
      })}
    </div>
  );
}

export default Body;
