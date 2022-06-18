const  mongoose=require("mongoose");

const UserProfileSchema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true},
    password:{type:String,required:true,trim:true},
    profileImage:{type:String,required:true,trim:true},
    tc:{type:Boolean,required:true}
})

const UserProfileModel=mongoose.model('UserProfile',UserProfileSchema)

module.exports=UserProfileModel;