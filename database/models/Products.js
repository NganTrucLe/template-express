import mongoose, { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  ProID: {
    type: Number,
    required: true,
  },
  ProName: {
    type: String,
    required: true,
  },
  TinyDes: {
    type: String,
    required: true,
  },
  FullDes: {
    type: String,
    required: false,
  },
  Price: {
    type: Number,
    required: true,
  },
  CatID: {
    type: Number,
    required: true,
  },
  Quantity: {
    type: Number,
    require: true,
  },
});

const Product = model("Product", ProductSchema, "products");

export default Product;
