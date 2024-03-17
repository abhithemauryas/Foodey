const express=require("express")
const userRoute= express.Router()
const bcrypt= require("bcrypt")
const jwt=require('jsonwebtoken')
const {userModel}= require("../Models/user.Model")



 userRoute.post("/register",async(req,res)=>{
    const {firstname,lastname,email,password}= req.body;
    try {
        const  existingUser = await userModel.findOne({ email: email });
         if (existingUser) {
             return res.status(409).send({ "message":"Email is already in use"});
         }
         bcrypt.hash(password,5,async(error,hash)=>{
            const data= userModel({firstname,lastname,email,password:hash})
            data.save()
            res.status(201).send({"msg":"User has been registered successfully!",data})
         })
    } catch (error) {
        
    }
 }) 
 userRoute.post( "/login", async (req, res)=>{
      const {email, password} = req.body;
      try {
      const user=await userModel.findOne({email})
        bcrypt.compare(password,user.password,(err,result)=>{
            if(result){
                res.status(201).send({"msg":"User has been login successfully!", "token":jwt.sign({name:"batman"},"bruce")})
            }else{
                res.send({"msg":"Wrong Password"})
               
            }
        })

        
      } catch (error) {
         res.status(400).send("User not found");
         
      }
})








module.exports={
    userRoute
}