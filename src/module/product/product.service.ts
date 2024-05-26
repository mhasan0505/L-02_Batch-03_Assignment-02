import { TProduct } from "./product.interface"
import { Product } from "./product.model"

const createProduct = async (payload : TProduct) =>{
    const result  =  await Product.create(payload);
    return result;

};
const GetAllProduct = async () =>{
    const result  =  await Product.find();
    return result;

};
const GetProductById = async (id : string) =>{
    const result  =  await Product.findById(id);
    return result;

};
const SearchProduct = async () =>{
    const result  =  await Product.find({name:{$regex : /iphone/, $option : "i"}});
    return result;

};
const updateProductById = async () =>{
    const result  =  await Product.findByIdAndUpdate();
    return result;
}
const deleteProductById = async () => {
  const result = await Product.findByIdAndDelete();
  return result;
};
export const ProductService = {
  createProduct,
  GetAllProduct,
  GetProductById,
  SearchProduct,
  updateProductById,
  deleteProductById,
};