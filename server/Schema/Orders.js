const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  productQuantity: { type: String, required: true },
});
const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [ProductSchema],
});

const OrderModel = mongoose.model("orders", OrderSchema);
module.exports = OrderModel;
