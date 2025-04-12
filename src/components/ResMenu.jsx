import React, { useEffect, useState } from 'react'



export const ResMenu = () => {

    const [resDetails , setResDetails] = useState({}) ; 
    const[itemCards , setItemCards ] = useState([]) ; 
    const [loading , setLoading ] = useState(false) ; 
    useEffect(() => {
        fetchData()
    } , [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.615962&lng=77.060464&restaurantId=648815&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json() ;
        const restaurant =  json?.data?.cards[2]?.card?.card?.info ; 
         setResDetails(restaurant)
        const itemList =  json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards 
        // setListOfRes(itemList) ;
        setItemCards(itemList) ;
        console.log(itemList[0].card.info.name)
        setLoading(true)
    }

    const {name , costForTwoMessage ,cuisines,avgRating} = resDetails ;
    if(loading === false ) {
        return <h1>Loading...</h1> 
    }


  return (
   
    <div >
        <h1 className='text-4xl font-semibold  '>{name}</h1>
        <h1 className='text-2xl font-sans '>{costForTwoMessage}</h1>
        <h1>average Rating ={avgRating}</h1>
        <h1>cuisines = {cuisines?.join(", ")}</h1>


        { itemCards.length === 0 ? "" :   itemCards.map((item)=>{
            const info = item.card?.info ; 
            return (
                <ul className=''>
            <li >{info.name}</li>

            </ul>
            )
            
        })}

    </div>
  )
}
