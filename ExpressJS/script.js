// Express js Is a  NPM Package 
// This Is A Framework


const express = require('express');
const app = express();

// Create Routes

// ROUTING 👇👇
//requestHandler is middilware

// app.use(function(req,res,next){
//     console.log("Middleware !!")
//     // res.send("We Are Here"); wil not work?clear
//     next();
// });
app.get("/", function(req,res){
    res.send("We Are Blootonik");
});


// app.listen(port)


// http://localhost:3000
// http://localhost:3000/home

// [nodemon] starting `node script.js`
// [nodemon] restarting due to changes...
// [nodemon] starting `node script.js`
// [nodemon] restarting due to changes...
// [nodemon] starting `node script.js`


// MiddleWare 👇👇👇👇

app.use(function(req,res,next){
    console.log("Middleware !!")
    // res.send("We Are Here"); wil not work?clear
    next();
});
app.get("/home", function(req,res,next){
    // res.send("We Are Champions in web dev");
    return next(new Error("Somethinf Error Went !!!"))
});


// Error Handling 👇👇👇
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Something broke!');
})



app.listen(3000);
