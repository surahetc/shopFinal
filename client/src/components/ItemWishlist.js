import React from 'react'
import './css/Item.css'


function ItemWishlist(props) {

    return (
        <div className="item">
            <p>Name :{props.title}</p>
            <img src={props.src} alt="item"></img>
            <p>Price : Rs {props.price}</p>

        </div>
    )
}

export default ItemWishlist
