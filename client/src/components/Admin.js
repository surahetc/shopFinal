import React from 'react'
import "./css/Admin.css"

function Admin() {
    return (
        <div>
            <div className="panel">
                <h2>Add an item</h2>
                <form action="/admin/add" method="POST">

                    <label>Name</label>
                    <input className="text" type="text" name="name"></input>
                    <br></br>
                    <label>Image Source</label>
                    <input className="text" type="text" name="imgSrc"></input>
                    <br></br>
                    <label>Price</label>
                    <input className="text" type="text" name="price"></input>
                    <br></br>
                    <input type="submit" className="button"></input>

                </form>
               
            </div>


            <div className="panel">
                <h2>Delete an item</h2>
                <form action="/admin/delete" method="POST">
                    <label>Name</label>
                    <input className="text" type="text" name="name"></input>
                    <br></br>
                    <input type="submit" className="button"></input>
                </form>
               
            </div>

            <div className="panel">
                <h2>Update an item</h2>
                <form action="/admin/update" method="POST">
                    <label>Name</label>
                    <input className="text" type="text" name="name"></input>
                    <br></br>
                    <label>Price</label>
                    <input className="text" type="text" name="price"></input>
                    <br></br>
                    <input  type="submit" className="button"></input>

                 </form>
                
            </div>
        </div>
    )
}

export default Admin
