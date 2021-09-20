const axios=require('axios');


axios.get("http:localhost:5000/getUser").then((response)=>{
    console.log(response.data)
}).catch(err=>{
    if(err){
        console.log("ERROR")
    }
})
