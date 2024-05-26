"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_router_1 = require("./module/product/product.router");
const express = require("express");
const app = express();
// parser 
app.use(express.json());
app.use("/api/products", product_router_1.ProductRoutes);
app.use("/api/products", product_router_1.ProductRoutes);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
