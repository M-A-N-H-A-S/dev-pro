const express=require("express");

const app=express();

const {  authuser,
    authadmin } =require("./middleware/auth")
    

app.use("/user",authuser);
app.use("/admin",authadmin);
app.get("/user/data",(req,res)=>{
    res.send("user data get..!");

});

app.get("/admin/data",(req,res)=>{
    res.send("admin data get..!");

});



app.get("/home",(req,res)=>{
    console.log("res-1");
    res.send("Home-page");

});



app.listen(3000,()=>{
    console.log("server is running");
});