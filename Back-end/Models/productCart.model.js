const mongoose=require('mongoose');
const cartSchima= mongoose.Schema({
    name: {type:String, require:true},
    image1:{type:String, require:true}, 
    image2:{type:String, require:true},
    image3:{type:String, require:true},
    title: String,
    discription:{type:String, require:true},
    price: {type:String, require:true},
  
    producttype:{type:String}
    
})


const cartModel= mongoose.model( 'cart',cartSchima);
module.exports = {cartModel};
