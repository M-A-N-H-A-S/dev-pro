

const authuser=(req,res,next)=>{
    console.log("user-auth call");

    const token=false;
    if(!token){
        res.send("user not found");
    }
    else{
        next();
    }
}

const authadmin=(req,res,next)=>{
    console.log("admin-auth call");

    const token=true;
    if(!token){
        res.send("admin not found");
    }
    else{
        next();
    }

}



module.exports={
    authuser,
    authadmin
}