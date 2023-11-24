import express from "express";
import {
  getOrderByUserIdController,
  getOrdersController,
  registerOrderController
} from "../controllers/orderController";

const router = express.Router();

router.get("/", getOrdersController);

router.get("/:id", getOrderByUserIdController);

router.post("/", registerOrderController);

export default router;
