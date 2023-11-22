import express from "express";
import {
  handleGetOrders,
  handleGetOrderByUserId,
  handleRegisterOrder,
} from "../controllers/orderController";

const router = express.Router();

router.get("/", handleGetOrders);

router.get("/:id", handleGetOrderByUserId);

router.post("/", handleRegisterOrder);

export default router;
