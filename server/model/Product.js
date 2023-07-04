const mongoose = require('mongoose');

const productSchema  = mongoose.Schema({
  id:{type:String, require:true},
  productName:{type:String, require:true},
  description:{type:String},
  price:{type:Number, require:true}
})

const Products = mongoose.model("product", productSchema);
module.exports = Products;