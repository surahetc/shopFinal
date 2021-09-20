import React from "react";
import axios from "axios";



function Wishlist() {
  const [user, setUser] = React.useState("");
  const[items,setItems]=React.useState([])


  function handleBuy()
  {
    axios.get(`http://52.66.62.104:5000/wishlist/delete/${user}`)
    setItems([])
  }

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
          axios.get(`http://52.66.62.104:5000/wishlist/getItem/${response.data}`).then(response=>{
            if(response.data===null || response.data===[])
            setItems([])
            else

      setItems(response.data)
        
      }).catch(err=>
        {
          setItems([])
        })
          setUser(response.data);
        }
      })
      .catch((err) => {
        if (err) {
          setItems([])
          setUser("Error");
        }
      });


      
  }
  
  
  
  
  
  
  
  
  
  
  
  , []);

  if(user==="Error")
  return (
    <div>
      <h2>Please Login </h2>
    </div>
  );

  else if(items.length < 1 )
  return (
    <div>

      <h2>Welcome {user}, No items in your wishlist</h2>
    </div>
  );

  else
  return (
    <div>
      <h2>Welcome {user}, Here are your wishlist products</h2>


      {
      items.map((item)=>{
        return (<h3>{item.name}</h3>)

      })}

      <button className="deleteAll" onClick={handleBuy}>Delete All wishlist</button>
    </div>
  );
}

export default Wishlist;
