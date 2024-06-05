const { getUser } = require("../models/userdetails")

exports.loginpage=(req,res,next)=>{

    res.render("login")
}

exports.dashbordpage=(req,res,next)=>{

    res.render("dashbord")
}

exports.loginacount=(req,res,next)=>{

   const user=getUser(req.body.email)
   console.log(req.body);
  

   if(user !==null && user.password === req.body.password ){

    res.redirect("/dashbord")
   }

   else if(user === null){
    res.render("error",{message:"No user with Email"})
   }

   else{

    res.render("error",{message:"Invaild Password"})
   }

}

