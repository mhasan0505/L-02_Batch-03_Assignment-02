import { Request, Response } from "express";
// import orderService from "./order.service";
// Create a new order

const createOrder = async (req: Request, res: Response) => {
  const { email, productId, price, quantity } = req.body;
  const result = await createOrder({ email, productId, price, quantity });
  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

export const OrderController = {
  createOrder,
};
