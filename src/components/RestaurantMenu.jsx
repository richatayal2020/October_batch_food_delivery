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







// import React, { useEffect, useState } from 'react';

// export const RestaurantMenu = ({resId}) => {

//     const [resDetails, setResDetails] = useState({});
//     const [itemCards, setItemCards] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.615962&lng=77.060464&restaurantId="+ resId +"&catalog_qa=undefined&submitAction=ENTER");
//             const json = await data.json();

//             console.log("cards:", json?.data?.cards);

//             const restaurant = json?.data?.cards[2]?.card?.card?.info;
//             console.log("restaurant:", restaurant);

//             setResDetails(restaurant);

//             const itemList = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
//             setItemCards(itemList);

//             console.log("itemList:", itemList);
//             console.log(itemList[0]?.card?.info?.name);

//             setLoading(false);
//         }
//         catch (err) {
//             console.error("Failed to fetch data:", err);
//             setLoading(false);
//         }
//     }

//     const { name, costForTwoMessage, cuisines, avgRating } = resDetails;

//     if (loading === true) {
//         return <h1 className="text-center text-2xl font-semibold">Loading...</h1>;
//     }

//     return (
//         <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
//             <h1 className="text-4xl font-semibold text-center text-gray-800">{name}</h1>
//             <h2 className="text-2xl font-sans text-center text-gray-600 mt-2">{costForTwoMessage}</h2>
//             <h3 className="text-xl text-center text-gray-500 mt-2">Average Rating: {avgRating}</h3>
//             <p className="text-lg text-center text-gray-500 mt-2">Cuisines: {cuisines?.join(", ")}</p>

//             <div className="mt-8">
//                 <h4 className="text-2xl font-semibold text-gray-700 mb-4">Menu Items</h4>
//                 {itemCards.length === 0 ? (
//                     <p className="text-lg text-center text-gray-600">No menu items found.</p>
//                 ) : (
//                     <ul className="space-y-4">
//                         {itemCards.map(item => {
//                             const info = item?.card?.info;
//                             return (
//                                 <li key={info?.id} className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
//                                     <h5 className="text-lg font-medium text-gray-800">{info?.name}</h5>
//                                     <p className="text-sm text-gray-500">{info?.description}</p>
//                                     <p className="text-sm text-gray-600 font-semibold mt-2">{info?.price / 100} INR</p>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 )}
//             </div>
//         </div>
//     );
// }
