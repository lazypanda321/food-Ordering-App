import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function RestaurantCard({name,distance,rating,cuisine,image,onClick}) {

    const [message,setMessage] = useState('')

    return(
        <div className="res-card" onClick={onClick}>
            {/* <img className= "res-logo" alt = "res-logo" src="http://as1.ftcdn.net/v2/jpg/08/07/69/64/1000_F_807696493_g346DAR2XbMqstBqAQmK7XS3leNGIFQ2.jpg"></img> */}
            <h1 className="res-container">
                <img src={image} alt={name} style={styles.image} /> 
                {name}
                <br/>
                {distance} {rating} {cuisine}
            </h1>    
        </div>
    )


}

const styles = {
    image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
}

export default RestaurantCard