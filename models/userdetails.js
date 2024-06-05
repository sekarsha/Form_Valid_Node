const fs =require("fs");
const path=require("path")

exports.getUser=(email)=>{
   
   
  const bufferdata= fs.readFileSync(path.join(__dirname,"..","data","users.json"))

  const jsondata= JSON.parse(bufferdata);

  console.log(jsondata);

  const fil_data=jsondata.filter((user)=>{

    return user.email==email
  })
  
  if(fil_data.length > 0){
    return fil_data[0];
  }

  else{

    return null
  }

   
}