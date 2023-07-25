const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  productId: { type: Number, required: true, unique: true },
});
const CategoryNameSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  itemProducts: [ProductSchema],
});
const CategorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  CategoryItem: CategoryNameSchema,
});
const ProductsSchema = new mongoose.Schema([CategorySchema]);

const ProductModel = mongoose.model("Products", ProductsSchema);
module.exports = ProductModel;
