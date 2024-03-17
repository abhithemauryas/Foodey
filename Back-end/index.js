const express =require("express")
const {Connection}= require("./db")
const {userRoute}= require("./Routes/user.Routes")
const {ProductRoute}=require("./Routes/product.Routes");


const  app=express()


app.use(express.json())
app.use(userRoute)
app.use(ProductRoute)




app.get("/",(req,res)=>{
    res.status(200).send({message:"Welcome to our API"})
})


app.listen(process.env.port,async()=>{
    await Connection
     console.log("db  connected successfully");
    try {
        
    } catch (error) {
        console.log("Db is not connected",error);
          
    }
})
