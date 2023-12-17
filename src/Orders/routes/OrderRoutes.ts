import express from "express";
import {
  getOrderByUserIdController,
  getOrdersController,
  registerOrderController,
  getOrderByIdController,
} from "../controllers/orderController";

const router = express.Router();

router.get("/", getOrdersController);

router.get("/:id", getOrderByUserIdController);

router.get("/order/:id", getOrderByIdController);

router.post("/", registerOrderController);

export default router;
