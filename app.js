const express=require("express");
const app=express();
const { engine }=require("express-handlebars");
const {loginpage,dashbordpage, loginacount}=require("./controls/usercontrol")

app.engine("hbs",engine({extname:"hbs",defaultLayout:false}));
app.set("view engine","hbs");
app.use(express.urlencoded())

app.get("/",(loginpage));
app.get("/dashbord",(dashbordpage));
app.post("/login",(loginacount));

app.listen(8000,function() {
    console.log("Server is runing");
})