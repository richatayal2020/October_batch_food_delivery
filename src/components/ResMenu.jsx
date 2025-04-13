import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ResMenu = () => {

    const { resId } = useParams();
    
    const params = useParams()
    console.log(params)
    const [resDetails, setResDetails] = useState({});
    const [itemCards, setItemCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Restaurant ID from URL:", resId);
        if (resId) {
            fetchData(resId); // Use resId in fetch call to get data
        }
    }, [resId]);

    const fetchData = async (resId) => {
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.615962&lng=77.060464&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    

            const json = await response.json();

            console.log("cards:", json?.data?.cards);

            const restaurant = json?.data?.cards[2]?.card?.card?.info;
            console.log("restaurant:", restaurant);

            setResDetails(restaurant || {});;

            const itemList = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
                 setItemCards(itemList);
                 console.log("cards:", json?.data?.cards);
                 console.log("card[4]:", json?.data?.cards[4]);
                 console.log("groupedCard:", json?.data?.cards[4]?.groupedCard);
                 console.log("cardGroupMap:", json?.data?.cards[4]?.groupedCard?.cardGroupMap);
                 console.log("REGULAR:", json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
                 console.log("cards[2]:", json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]);
                 console.log("itemCards:", json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
            console.log("itemList:", itemList);
            console.log(itemList[0]?.card?.info?.name);

            setLoading(false);
        }
        catch (err) {
            console.error("Failed to fetch data:", err);
            setLoading(false);
        }
    }

    const { name, costForTwoMessage, cuisines, avgRating } = resDetails;

    // Guard against undefined resDetails or empty data
    if (loading) {
        return <h1 className="text-center text-2xl font-semibold">Loading...</h1>;
    }

    if (!resDetails) {
        return <h1 className="text-center text-2xl font-semibold">Restaurant not found</h1>;
    }


    return (
        <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl font-semibold text-center text-gray-800">{name}</h1>
            <h2 className="text-2xl font-sans text-center text-gray-600 mt-2">{costForTwoMessage}</h2>
            <h3 className="text-xl text-center text-gray-500 mt-2">Average Rating: {avgRating}</h3>
            <p className="text-lg text-center text-gray-500 mt-2">Cuisines: {cuisines?.join(", ")}</p>

            <div className="mt-8">
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">Menu Items</h4>
                {itemCards.length === 0 ? (
                    <p className="text-lg text-center text-gray-600">No menu items found.</p>
                ) : (
                    <ul className="space-y-4">
                        {itemCards.map(item => {
                            const info = item?.card?.info;
                            return (
                                
                                <li key={info.id} className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <h5 className="text-lg font-medium text-gray-800">{info?.name}</h5>
                        <p className="text-sm text-gray-500">{info?.description}</p>
                        <p className="text-sm text-gray-600 font-semibold mt-2">{info?.price / 100} INR</p>
                    </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
}
