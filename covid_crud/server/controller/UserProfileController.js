const res=require('express/lib/response');
const UserProfileModel=require('../model/fileUploadUser');


class UserProfileController{

    static getAlldata=async(req,res)=>{
        try{
            res.send("file uploaded");

        }catch(err){
            console.log(err);
        }
    }

    //adding new user
static userRegistration=async(req,res)=>{
    const {name,email,password,password_confirmation,profileImage,tc}=req.body
    if(password === password_confirmation){
        const hashPass=await bcrypt.hash(password,10)
        const doc=new UserProfileController({
            name:name,
            email:email,
            password:hashPass,// no need to add password confirmation
            profileImage:profileImage,
            tc:tc
          })
          await doc.save()
        //   const savedUser=await UserProfileController.findOne({email:email})
        //   //genrate jwt token
        //   const registerToken=jwt.sign({userID:savedUser._id},"jhkhggcghh",{expiresIn:"5d"})
        //   //{expiresIn:"5d"} ==> expires in 5 days (m=> min)
        //   console.log("token",registerToken);
        //   res.send({"status":"Sucess","message":"Registration Sucessfull.","token":registerToken})
    }else{
        res.send({"status":"failed","message":"Password and confirm password dose not match."})
    }
}
}

module.exports=UserProfileController;