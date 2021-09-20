import React from 'react'
import "./css/Login.css"




function Login() {
    
    return (
        <div className="login">
            <form action="/login" method="POST">    
                <label>username</label>  
                <br/>  
                <input type="text" name="username" id="uname" placeholder="Email"/>    
                <br/><br/>    
                <label>Password</label>    
                <input type="Password" name="password" id="Pass" placeholder="Password"/>    
                <br/><br/>    
                <input type="submit"  id="log" value="Log In Here"/>       
                <br/><br/>       
            </form>    
        </div>
    );
}

export default Login
