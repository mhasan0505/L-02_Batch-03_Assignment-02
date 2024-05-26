import { Request, Response } from "express";
import { OrderService } from "./order.service";
// import orderService from "./order.service";
// Create a new order

const createOrder = async (req: Request, res: Response) => {
  const { email, productId, price, quantity } = req.body;
  const result = await OrderService.createOrder({ email, productId, price, quantity });
  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

export const OrderController = {
  createOrder,
};
