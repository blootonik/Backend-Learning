// Session & Coockie

const express = require('express');
const app = express();

app.use(express.json);
app.use(express.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.send("hello We Are blootonik")
})
app.get("/home", function(req,res){
    res.send("hello We Are home")
})
app.get("/about", function(req,res){
    res.send("hello We Are about us page")
})

app.listen(3000);