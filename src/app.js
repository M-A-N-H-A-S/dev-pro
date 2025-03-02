const express=require("express");

const app=express();

app.use("/home",(req,res)=>{
    res.send("use-server is active")
})


app.post("/home",(req,res)=>{
    res.send("post-server is active")
})
app.delete("/home",(req,res)=>{
    res.send("delete-server is active")
})
app.patch("/home",(req,res)=>{
    res.send("patch-server is active")
})



app.get("/home",(req,res)=>{
    res.send("get-server is active")
})





app.listen(3000,()=>{
    console.log("server is running");
});