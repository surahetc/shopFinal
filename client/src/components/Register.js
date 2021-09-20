import React from 'react';
import "./css/Register.css"

function Register() {
    return (
        <div className="register">
            <form action="/register" method="POST">    
                <label>Username</label>
                <br/>    
                <input type="text" name="username" id="uname" placeholder="username"/>    
                <br/><br/>    
                <label>Password</label>    
                <input type="Password" name="password" id="Pass" placeholder="Password"/>    
                <br/><br/>
                <label>Repeat Password</label>    
                <input type="Password" name="passwordRepeat" id="Pass" placeholder="Password"/>    
                <br/><br/>     
                <input type="submit"  id="log" value="Register"/>       
                <br/><br/>       
            </form>    
        </div>
    )
}

export default Register
