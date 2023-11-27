import express from "express";
import {
  cancelOrderController,
  getProductByIdController,
  getProductsController,
  getProductsStockController,
} from "../controllers/productsControllers";

const router = express.Router();

router.get("/", getProductsController);

router.get("/:id", getProductByIdController);

router.post("/stock", getProductsStockController);

router.post("/cancel", cancelOrderController);

export default router;
