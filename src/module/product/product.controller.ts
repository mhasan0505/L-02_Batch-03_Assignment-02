import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductService.createProduct(productData);
  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

const GetAllProduct = async (req: Request, res: Response) => {
  // const productData = req.body
  const result = await ProductService.GetAllProduct();
  res.json({
    success: true,
    message: "Products fetched successfully!",
    data: result,
  });
};

const GetProductById = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await ProductService.GetProductById(productId);
  res.json({
    success: true,
    message: "Products fetched successfully!",
    data: result,
  });
};
// Search Data
const SearchProduct = async (req: Request, res: Response) => {
  const result = await ProductService.SearchProduct();
  res.json({
    success: true,
    message: "Products fetched successfully!",
    data: result,
  });
};
// update Data
const updateProductById = async (req: Request, res: Response) => {
  const result = await ProductService.updateProductById();
  res.json({
    success: true,
    message: "Products fetched successfully!",
    data: result,
  });
};

// delete data

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.deleteProductById();
    res.json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const ProductController = {
  createProduct,
  GetAllProduct,
  GetProductById,
  SearchProduct,
  updateProductById,
  deleteProductById,
};
