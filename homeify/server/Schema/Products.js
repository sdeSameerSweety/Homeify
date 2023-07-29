const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
});
const CategoryNameSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  itemProducts: [ProductSchema],
});
const ProductsSchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  categoryItem: [CategoryNameSchema],
});

const ProductModel = mongoose.model("Products", ProductsSchema);
module.exports = ProductModel;
