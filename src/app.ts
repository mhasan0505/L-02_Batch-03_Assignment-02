import express, { Request, Response } from "express";
import { ProductRoutes } from "./module/product/product.router";
import router from "./module/order/order.route";

const app = express();

// parser
app.use(express.json());

app.use("/api/products", ProductRoutes);
app.use("/api/orders", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
