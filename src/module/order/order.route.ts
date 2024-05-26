import { Router } from "express";
import orderController from "./order.controller";

const router: Router = Router();

router.post("/api/orders", orderController.createOrder);

export default router;
