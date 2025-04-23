import { useEffect, useState } from "react";
import { RestaurantCard  , withPercentagediscount} from './RestaurantCard'
import { Link } from "react-router-dom";
// import {resDetails} from "../utils/info"


function Body () {
   const [listOfRes , setListOfRes] = useState([])
   const[inputName , setInputName ] = useState("") ; 
   const [allRestaurants, setAllRestaurants] = useState([]); //  ADD THIS

    console.log(listOfRes)
   useEffect(()=>{fetchData()} , [])

   const ResCardWithPercentage = withPercentagediscount(RestaurantCard)

   const fetchData = async () => {
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.615962&lng=77.060464&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        // console.log(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        const restaurants = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        
        setListOfRes(restaurants)
        // console.log(listOfRes.info)
        setAllRestaurants(restaurants) //  ADDED THIS 
    }

    const baseImageURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    return ( 
     listOfRes.length === 0 ? <h1 className="font-bold text-4xl">LOADING.....</h1> : 
    <>
        <div className="m-3 flex gap-3">
        <input className="p-2" type="text" placeholder="Search here..." onChange={(e) => 
        {
            setInputName(e.target.value)
            }} />
        <button className="border-2 bg-slate-400 p-2" onClick={()=>{
            const filteredList = allRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(inputName.toLowerCase()) //  FIXED LINE
            )
            setListOfRes(filteredList)
        }} > Search </button>
        
        
        
        
        <button className="border-2 bg-slate-400 p-2"  onClick={()=>{
        const updatedList = allRestaurants.filter((res) => res.info.avgRating > 4.2) //  CHANGE THIS LINE
        setListOfRes(updatedList)
        }} > Top rated Restaurants </button>

        </div>
       <div className="CardList">
            {listOfRes.map((restaurant) => {
                const info = restaurant.info ;
                {/* {console.log(info.id)} */}
                return (
                    
                    <Link to={`/restaurants/${info.id}`} key={info.id}>
                    { info.aggregatedDiscountInfoV3.header ? <RestaurantCard 
                    key={info.id} 
                    imageAddress={baseImageURL + info.cloudinaryImageId}
                    name={info.name} 
                    rating={info.avgRating}
                    cuisines={info.cuisines}
                    location={ `${restaurant.info.locality} , ${restaurant.info.areaName}` }
                />:  <ResCardWithPercentage key={info.id} 
                    imageAddress={baseImageURL + info.cloudinaryImageId}
                    name={info.name} 
                    rating={info.avgRating}
                    cuisines={info.cuisines}
                    location={ `${restaurant.info.locality} , ${restaurant.info.areaName}` }/> }
                     
                </Link>  
                )
                })
            }
        </div>
       
        
    </>
    )
}

export default Body ; 

// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/1b0ccd29-f2f8-4b10-b402-045f1e03664c_751410.jpg

// http://rx_thumbnail/IMAGES/VENDOR/2025/3/24/6b5f311b-f336-4e7c-b828-58a1597c6a62_648815.jpg/