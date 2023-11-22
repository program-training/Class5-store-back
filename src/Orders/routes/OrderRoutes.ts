import express from "express";
import {
  handleGetOrders,
  handleGetOrderByUserId,
} from "../controllers/orderController";
const router = express.Router();

router.get("/", handleGetOrders);

router.get("/:id", handleGetOrderByUserId);

export default router;
