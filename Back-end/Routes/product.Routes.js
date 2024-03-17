const express = require("express");
const { ProductModel } = require("../Models/product.Model");
const {cartModel}=require("../Models/productCart.model")
const ProductRoute = express.Router();
const {    updatedallpro, updatedallflower, updatedallchocos, updatedallplants, updatedallcakes
} = require("../data");

ProductRoute.post("/post", async (req, res) => {
    try {
        const data = await ProductModel.insertMany([...updatedallcakes,...updatedallchocos,...updatedallflower,...updatedallplants,...updatedallpro]);
        console.log(data);
        res.status(201).send({ "message": "data inserted successfully", data: data });

    } catch (error) {
        console.log(error)
        res.status(409).send({ "message": "Error in inserting the data" });
    }
});

ProductRoute.get("/get",async(req,res)=>{
    try {
        const  productData=await ProductModel.find()
        if(!productData){
            throw new Error('No Data Found')   
        }
       res.status(200).send({"msg":"this is your data",productData})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
    
})
ProductRoute.post("/cart",async(req,res)=>{

         try {
            const {name,image1,image2,image3,title,discription,price,producttype}=req.body;
            const cartitem=new cartModel({name,image1,image2,image3,title,discription,price,producttype})
                cartitem.save()
                res.status(200).send({"msg":"Product added to cart successfully!"})
         } catch (error) {
               console.log(error)
               res.status(400).send({"err_message":"This product already exist in the cart"})
         }
})
ProductRoute.get("/cart",async(req,res)=>{
     try {
        const cartitem= await cartModel.find()
        res.status(200).send(cartitem)
     }catch{   
        res.status(404).send("no items found")
     }  
    
})


module.exports = {
    ProductRoute
};
