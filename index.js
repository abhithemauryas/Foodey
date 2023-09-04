const express= require("express")
const cors= require("cors")
require("dotenv").config()
const http= require("http")
const {generateCompletion}=require("./ai")
const app=express()




app.use(cors());
app.use(express.json());


app.post("/",async(req,res)=>{
    try {
        const ans=await generateCompletion(req.body.text)
        res.send(ans)
    } catch (error) {
        
    }

})


app.listen(process.env.port,()=>{
    console.log(`http://localhost:${process.env.port}`)
})