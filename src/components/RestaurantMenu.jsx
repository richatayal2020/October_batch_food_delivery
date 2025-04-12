// import React, { useEffect, useState } from 'react';

// export const RestaurantMenu = () => {
//   const [itemCards, setItemCards] = useState([]);
//   const [resInfo, setResInfo] = useState({});
//   const [loading, setLoading] = useState(true); // Adding a loading state

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.615962&lng=77.060464&restaurantId=648815&catalog_qa=undefined&submitAction=ENTER"
//     );
//     const json = await data.json();
//     const itemCards = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    
//     // Set restaurant info and item cards
//     setResInfo(json.data.cards[2].card.card.info);
//     setItemCards(itemCards);
    
//     // Set loading to false after data is fetched
//     setLoading(false);
//   };

//   const { name, costForTwoMessage, cuisines } = resInfo;

//   // Conditional rendering for loading and data display
//   if (loading) {
//     return <div>Loading...</div>; // Show loading message while waiting for the data
//   }

//   return (
//     <div>
//       <h2>{name || "Restaurant Name"}</h2> {/* Fallback to "Restaurant Name" if undefined */}

//       <p>
//         <strong>Cuisines:</strong> {cuisines ? cuisines.join(", ") : "Loading cuisines..."} {/* Fallback if cuisines are undefined */}
//       </p>

//       <p>
//         <strong>Cost for two:</strong> {costForTwoMessage || "Loading cost for two..."} {/* Fallback if costForTwoMessage is undefined */}
//       </p>
//     </div>
//   );
// };

// export default RestaurantMenu;



import React, { useEffect, useState } from 'react';

const RestaurantMenu = () => {
  const [itemCards, setItemCards] = useState([]);
  const [resInfo, setResInfo] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.615962&lng=77.060464&restaurantId=957183&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    const restaurantDetails = json.data.cards[2].card.card.info;
    const menuItems = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;

    setResInfo(restaurantDetails);
    setItemCards(menuItems);
    setLoading(false); // Done loading
  };


  //   const { name, costForTwoMessage, cuisines } = resInfo;

  if (loading) {
    return <p>Loading menu...</p>;
  }

  return (
    // <div>
    //   <h2>{resInfo.name}</h2>
    //   <h2>{resInfo.costForTwoMessage}</h2>
    //   <h2>{resInfo.cuisines.join(", ")}</h2>

    //   <ul>
    //     {itemCards.map((item) => {
    //       const info = item.card.info;
    //       const price = (info.price || info.defaultPrice) / 100;

    //       return (
    //         <li key={info.id}>
    //           {info.name} - ₹{price}
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>


    <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded shadow-md">
  <h2 className="text-2xl font-bold mb-2 text-gray-800">{resInfo.name}</h2>
  <h2 className="text-md text-gray-600 mb-1">{resInfo.costForTwoMessage}</h2>
  <h2 className="text-md text-gray-600 mb-4">{resInfo.cuisines.join(", ")}</h2>

  <ul className="space-y-2">
    {itemCards.map((item) => {
      const info = item.card.info;
      const price = (info.price || info.defaultPrice) / 100;

      return (
        <li
          key={info.id}
          className="flex justify-between items-center p-2 border border-gray-200 rounded"
        >
          <span className="text-gray-700">{info.name}</span>
          <span className="text-gray-800 font-medium">₹{price}</span>
        </li>
      );
    })}
  </ul>
</div>

  );
};

export default RestaurantMenu;
