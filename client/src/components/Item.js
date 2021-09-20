import React from 'react'
import './css/Item.css'
import axios from 'axios'

function Item(props) {

    const [user, setUser] = React.useState("");
    React.useEffect(() => {
        axios
          .get("http://52.66.62.104:5000/getUser", {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          })
          .then((response) => {
            if (response.data) {
              setUser(response.data);
            }
          })
          .catch((err) => {
            if (err) {
              setUser("");
            }
          });
      }, []);

    function handleAddToWishlist(e)
    {
        e.preventDefault();
        axios.get(`http://52.66.62.104:5000/wishlist/addTowishlist/${user}/${props.title}`)
    }

    function handleAddToCart(e)
    {
        e.preventDefault();
        axios.get(`http://52.66.62.104:5000/cart/addToCart/${user}/${props.title}`)


    }
    return (
        <div className="item">
            <p>Name :{props.title}</p>
            <img src={props.src} alt="item"></img>
            <p>Price : Rs {props.price}</p>

            <button className="red" onClick={handleAddToCart}>Add to Cart</button>
            <button className="grey"onClick={handleAddToWishlist} >Add to Wish List</button>

        </div>
    )
}

export default Item
