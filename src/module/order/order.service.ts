import { TOrder } from "./order.interface";
import { Order } from "./order.model";


  const createOrder = async (orderData :TOrder) =>
     {
    const { email, productId, price, quantity } = orderData;
    const order = new Order({email, productId, price, quantity});
    return await order.save();
  };


export const OrderService ={
    createOrder,
}
