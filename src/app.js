const express=require("express");

const app=express();

app.use("/home",(req,res)=>{
    res.send("server is active")
})

app.listen(3000,()=>{
    console.log("server is running");
});