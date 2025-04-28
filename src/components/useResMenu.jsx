import { useState } from "react";
import { useEffect } from "react";

const useResMenu = (resId) => {
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
            //      console.log("cards:", json?.data?.cards);
            //      console.log("card[4]:", json?.data?.cards[4]);
            //      console.log("groupedCard:", json?.data?.cards[4]?.groupedCard);
            //      console.log("cardGroupMap:", json?.data?.cards[4]?.groupedCard?.cardGroupMap);
            //      console.log("REGULAR:", json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
            //      console.log("cards[2]:", json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]);
            //      console.log("itemCards:", json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
            // console.log("itemList:", itemList);
            // console.log(itemList[0]?.card?.info?.name);

            setLoading(false);
        }
        catch (err) {
            console.error("Failed to fetch data:", err);
            setLoading(false);
        }
    }

    return {resDetails , itemCards , loading}

}


export default useResMenu ;