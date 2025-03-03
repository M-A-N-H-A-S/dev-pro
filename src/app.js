const express=require("express");

const app=express();

app.use("/home",(req,res,next)=>{
    console.log("res-1");
    // res.send("use-server-1 is active")
    next()
},
[(req,res,next)=>{
    console.log("res-2");
    // res.send("use-server-2 is active")
    next()
},
(req,res,next)=>{
    console.log("res-3");
    // res.send("use-server-3 is active")
    next()
}],
(req,res,next)=>{
    console.log("res-4");
    // res.send("use-server-4 is active")
    next()
},
(req,res,next)=>{
    console.log("res-5");
    res.send("use-server-5 is active")
    
});





app.listen(3000,()=>{
    console.log("server is running");
});