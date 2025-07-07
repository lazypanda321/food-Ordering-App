import React from "react";
import RestaurantCard from './RestaurantCard'

function Body() {

    return(
        <div className="body">
            <div className="search"> Search</div>
            <div className="restaurant-container">
              <RestaurantCard name="ChinmayInn" cuisine="Bengali,Bihari,SouthIndian"
              distance="20 mins" rating ="4.5"
              />
              <RestaurantCard name="Dominos" cuisine="Bengali,Bihari,SouthIndian"
              distance="20 mins" rating ="4.5" />
              <RestaurantCard name="Big Daddy" cuisine="Bengali,Bihari,SouthIndian"
              distance="20 mins" rating ="4.5"/>
              <RestaurantCard name="McDonalds" cuisine="Bengali,Bihari,SouthIndian"
              distance="20 mins" rating ="4.5"/>
            </div>
        </div>
    )

}

export default Body