"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const result = yield product_service_1.ProductService.createProduct(productData);
    res.json({
        success: true,
        message: "Product created successfully!",
        data: result,
    });
});
const GetAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const productData = req.body
    const result = yield product_service_1.ProductService.GetAllProduct();
    res.json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
    });
});
const GetProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield product_service_1.ProductService.GetProductById(productId);
    res.json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
    });
});
// Search Data
const SearchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.ProductService.SearchProduct();
    res.json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
    });
});
// update Data
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.ProductService.updateProductById();
    res.json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
    });
});
// delete data
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductService.deleteProductById();
        res.json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error,
        });
    }
});
exports.ProductController = {
    createProduct,
    GetAllProduct,
    GetProductById,
    SearchProduct,
    updateProductById,
    deleteProductById,
};
