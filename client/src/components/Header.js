import React from 'react';
import {Link} from 'react-router-dom'
import "./css/Header.css"
import axios from 'axios'

function Header(props) {

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






    
      if (user!=="admin")
    return (
       <header>
           <div className="logo">
               <h1><Link to ="/">Grocer</Link></h1>
           </div>

           <nav>
               <ul> 
                   <li><Link to="/login">Login</Link></li>
                   <li><Link to="/register">Register</Link></li>
                   <li><Link to="/products">Products</Link></li>
                   <li><Link to="/wishlist">Wishlist</Link></li>

                   <li><Link to="/cart">Cart</Link></li>
               </ul>
            </nav>
       </header>
    )
    else
    return (
    <header>
    <div className="logo">
        <h1><Link to ="/">Grocer</Link></h1>
    </div>

    <nav>
        <ul> 
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/admin">Admin</Link></li>
        </ul>
     </nav>
</header>
)


}

export default Header
