// console.log("Hello Anjali");

//   creating express request in the 

require('dotenv').config()
const express = require('express')
const app = express()
const port = 8000
app.get('/',(req,res)=>{

    return res.send("Home page")
});
app.get('/about',(req,res)=>{
    return res.send("About second")
});
app.get('/contact',(req,res)=>{
    return res.send("Contact page");
});
app.get('/join',(req,res)=>{
    res.send("Join us");
});
app.get('/login',(req,res)=>{
    res.send("<h1>Login </h1>");
});
app.get('/youtube',(req,res)=>{
    res.send("<div> <h1> YouTube</h1></div>")
})
// app.listen(port,()=>{
//     console.log("Running in the broweser");
// })

// env  run the ->

app.listen(process.env.PORT,()=>{
    console.log(`change the ${port}`);
})

