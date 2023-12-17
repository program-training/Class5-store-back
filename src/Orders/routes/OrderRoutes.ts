import express from "express";
import {
  getOrderByUserIdController,
  getOrdersController,
  registerOrderController,
  getOrderByIdController,
} from "../controllers/orderController";
import { getCachedOrders } from "../cache/ordersCache";

const router = express.Router();

router.get("/", getCachedOrders, getOrdersController);

router.get("/:id", getOrderByUserIdController);

router.get("/order/:id", getOrderByIdController);

router.post("/", registerOrderController);

export default router;
