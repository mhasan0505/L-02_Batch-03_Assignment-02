import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/", ProductController.createProduct);
router.get("/", ProductController.GetAllProduct);
router.get("/:productId", ProductController.GetProductById);
router.get("/api/products?searchTerm=iphone", ProductController.SearchProduct);
router.put("/:productId", ProductController.updateProductById);
router.delete("/:productId", ProductController.deleteProductById);

export const ProductRoutes = router;
