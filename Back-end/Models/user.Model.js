const mongoose= require("mongoose")

const userSchima= mongoose.Schema({
     
    firstname: {type:String, require:true},
    lastname: {type: String, require:true},
    email: {type:String, require:true},
    password: {type:String, require:true}


},)
const userModel= mongoose.model( "User",userSchima)

module.exports={
    userModel
}


// userRoute.post("/login",async(req,res)=>{
//     const {email,password}=req.body
//     try {
//         let user=await userModel.findOne({email})
//         console.log(user)
//         bcrypt.compare(password,user.password,(err,result)=> {
//             console.log(password)
//           if(result){
//             res.status(201).send({"msg":"User has been login successfully!","token":jwt.sign({name:"batman"},"bruce")})
            
//           }else{
//             res.send({"msg":"Wrong Password"})
//           }
//         })
      

//     } catch (error) {
//         res.status(500).send('user has not login')
//     }
// })

// userRoute.post("/register",async (req,res)=>{
//     const {firstname,lastname,email,password}= req.body
//     try {
//      const  existingUser = await userModel.findOne({ email: email })     
//       if(existingUser) return res.status(400).send("Email is already in use")         
//     await bcrypt.hash(password,5, async(err,hash)=>{
//       newUser= userModel({firstname,lastname,email,password:hash})
//       await newUser.save()
//       res.status(201).send({"msg":"user has been login", newUser})
//      })
//     } catch (error) {
//      console.log(error)
//     }
 
//  }) 