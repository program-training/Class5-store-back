import express from "express";
import {
  handleGetOrders,
  handleGetOrder,
  handleRegisterOrder,
} from "../controllers/orderController";
const router = express.Router();

router.get("/", handleGetOrders);
router.get("/:id", handleGetOrder);
router.post("/", handleRegisterOrder);

export default router;
