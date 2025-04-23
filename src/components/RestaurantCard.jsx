import React from "react";

export const RestaurantCard = (props) => {
    return (
        <div className="resCard hover:scale-[1.1] transition-all duration-300 bg-slate-100">
            <img 
                className="resImage"
                src={props.imageAddress}
                alt={props.name}
            />
            <h4>{props.name}</h4>
            <h4>Rating: {props.rating}</h4>
            <div>Cuisines: {props.cuisines.join(", ")}</div>
            <h5>Location: {props.location}</h5>
        </div>
    );
};

// higer order component  = (resCard) =>


    export const withPercentagediscount = () => {
    return (props) => {
        return (
            <div>
                <h1>Percentage discount : </h1>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}



