import { model, Schema } from "mongoose";
import {
  ProductModel,
  TInventory,
  TProduct,
  TVariant,
} from "./product.interface";

const variantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<TProduct, ProductModel>({
  name: {
    type: String,
    required: [true, " Product name is required"],
  },
  description: {
    type: String,
    required: [true, "Producr description is required"],
  },
  price: {
    type: Number,
    required: [true, " Product Price is Required"],
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [variantSchema],
    required: true,
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
});

export const Product = model<TProduct>("Product", productSchema);
