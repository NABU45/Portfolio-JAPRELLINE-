import mongoose from "mongoose";
const loginSchema = mongoose.Schema({
  useremail:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
});
export const  LoginUser = mongoose.model("LoginUser", loginSchema)
export default LoginUser;