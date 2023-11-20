import express from "express";
import {
  handleGetOrders,
  handleGetOrder,
} from "../controllers/orderController";
const router = express.Router();

router.get("/", handleGetOrders);
router.get("/:id", handleGetOrder);

export default router;
